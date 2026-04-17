import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(200),
  source: z.string().trim().max(80).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export async function POST(req: Request) {
  const rl = rateLimit(`sub:${clientKey(req)}`, 5, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 },
    );
  }

  const data = parsed.data;
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const db = getDb();
  try {
    db.prepare(
      "INSERT INTO subscribers (email, source) VALUES (?, ?)",
    ).run(data.email, data.source || null);
  } catch (err: any) {
    // Unique email — idempotent success.
    if (String(err?.code) === "SQLITE_CONSTRAINT_UNIQUE") {
      return NextResponse.json({ ok: true, already: true }, { status: 200 });
    }
    throw err;
  }

  // TODO: forward to Mailchimp / Beehiiv / Brevo when the provider is picked.

  return NextResponse.json({ ok: true }, { status: 201 });
}
