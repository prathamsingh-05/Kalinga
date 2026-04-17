import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const itemSchema = z.object({
  flavor: z.enum(["tulsi", "jamun", "ginger", "multiflora"]),
  size: z.enum(["250ml", "500ml", "1l"]),
  quantity: z.number().int().min(1).max(500),
});

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(1).max(40),
  address_line1: z.string().trim().min(1).max(200),
  address_line2: z.string().trim().max(200).optional().or(z.literal("")),
  city: z.string().trim().min(1).max(120),
  state: z.string().trim().min(1).max(120),
  pincode: z.string().trim().min(1).max(20),
  country: z.string().trim().min(1).max(80),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  payment_method: z.enum(["email", "razorpay"]),
  items: z.array(itemSchema).min(1, "Add at least one jar."),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export async function POST(req: Request) {
  const rl = rateLimit(`ord:${clientKey(req)}`, 5, 60_000);
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
    return NextResponse.json({ id: 0 }, { status: 201 });
  }
  const db = getDb();

  const stmt = db.prepare(`
    INSERT INTO orders
      (name, email, phone, address_line1, address_line2, city, state, pincode, country, items, notes, payment_method, status)
    VALUES
      (@name, @email, @phone, @address_line1, @address_line2, @city, @state, @pincode, @country, @items, @notes, @payment_method, 'pending')
  `);

  const result = stmt.run({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address_line1: data.address_line1,
    address_line2: data.address_line2 || null,
    city: data.city,
    state: data.state,
    pincode: data.pincode,
    country: data.country,
    items: JSON.stringify(data.items),
    notes: data.notes || null,
    payment_method: data.payment_method,
  });

  // TODO: send order confirmation email to customer + notify NOTIFY_EMAIL.
  // TODO: if payment_method === 'razorpay', create a Razorpay order + return link.

  return NextResponse.json(
    { id: Number(result.lastInsertRowid) },
    { status: 201 },
  );
}
