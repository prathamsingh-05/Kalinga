import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const schema = z.object({
  type: z.enum(["retailer", "corporate", "events", "general"]),
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  city: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(4000),
  meta: z.record(z.string()).optional(),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export async function POST(req: Request) {
  const rl = rateLimit(`inq:${clientKey(req)}`, 5, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
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
    // Silently accept and discard honeypot hits.
    return NextResponse.json({ id: 0 }, { status: 201 });
  }
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO inquiries (type, name, email, phone, company, city, subject, message, meta)
    VALUES (@type, @name, @email, @phone, @company, @city, @subject, @message, @meta)
  `);
  const result = stmt.run({
    type: data.type,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    company: data.company || null,
    city: data.city || null,
    subject: data.subject || null,
    message: data.message,
    meta: data.meta ? JSON.stringify(data.meta) : null,
  });

  // TODO: send notification email (NOTIFY_EMAIL) — integration pending.

  return NextResponse.json(
    { id: Number(result.lastInsertRowid) },
    { status: 201 },
  );
}
