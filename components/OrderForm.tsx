"use client";

import { useMemo, useState } from "react";
import { FLAVORS, SIZES, type Flavor, type SizeOption } from "@/lib/products";

type QtyKey = `${Flavor["slug"]}-${SizeOption["id"]}`;

type Props = {
  initialFlavor?: string | null;
};

export function OrderForm({ initialFlavor }: Props) {
  const [qty, setQty] = useState<Record<QtyKey, number>>(() => {
    const init: Record<string, number> = {};
    if (initialFlavor && FLAVORS.some((f) => f.slug === initialFlavor)) {
      init[`${initialFlavor}-500ml`] = 1;
    }
    return init;
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    notes: "",
    payment_method: "email" as "email" | "razorpay",
  });

  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting" }
    | { kind: "success"; id: number }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const items = useMemo(() => {
    const out: { flavor: string; size: string; quantity: number }[] = [];
    for (const f of FLAVORS) {
      for (const s of SIZES) {
        const key = `${f.slug}-${s.id}` as QtyKey;
        const q = qty[key] ?? 0;
        if (q > 0) out.push({ flavor: f.slug, size: s.id, quantity: q });
      }
    }
    return out;
  }, [qty]);

  const totalJars = items.reduce((sum, i) => sum + i.quantity, 0);

  function bump(key: QtyKey, delta: number) {
    setQty((prev) => {
      const next = { ...prev };
      const val = Math.max(0, (prev[key] ?? 0) + delta);
      if (val === 0) delete next[key];
      else next[key] = val;
      return next;
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (items.length === 0) {
      setStatus({ kind: "error", message: "Please select at least one jar." });
      return;
    }
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Could not place order");
      setStatus({ kind: "success", id: data.id });
      setForm({
        name: "",
        email: "",
        phone: "",
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        pincode: "",
        country: "India",
        notes: "",
        payment_method: "email",
      });
      setQty({});
    } catch (err: any) {
      setStatus({ kind: "error", message: err.message ?? "Something went wrong" });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="card p-10 text-center">
        <div className="font-display text-4xl text-cream">
          Thank you. Your order is in.
        </div>
        <p className="mt-4 text-cream/70 max-w-xl mx-auto">
          Order reference <span className="text-honey-200">#{status.id}</span>.
          We'll reach out by email shortly with payment instructions
          (bank transfer or Razorpay link — TBA) and delivery timelines.
        </p>
        <div className="mt-8">
          <button onClick={() => setStatus({ kind: "idle" })} className="btn btn-ghost">
            Place another order
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-12">
      {/* Jars */}
      <section className="card p-6 md:p-10">
        <div className="label">01 · Choose your jars</div>
        <h2 className="font-display text-4xl text-cream mt-2">
          Build your order
        </h2>
        <p className="text-cream/60 mt-2 text-sm">
          Pricing: <span className="text-honey-200">TBA</span>. You won't be
          charged here — we'll confirm totals by email or Razorpay link.
        </p>

        <div className="mt-8 space-y-8">
          {FLAVORS.map((f) => (
            <div key={f.slug}>
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-display text-2xl text-cream">{f.name}</div>
                  <div className="text-xs tracking-[0.28em] uppercase text-honey-200/70 mt-1">
                    {f.tagline}
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                {SIZES.map((s) => {
                  const key = `${f.slug}-${s.id}` as QtyKey;
                  const value = qty[key] ?? 0;
                  return (
                    <div
                      key={s.id}
                      className="border border-[rgba(230,192,121,0.2)] rounded-xl p-4 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-cream">{s.label}</div>
                        <div className="text-xs text-honey-200/80">Price TBA</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => bump(key, -1)}
                          className="w-8 h-8 rounded-full border border-[rgba(230,192,121,0.3)] text-honey-200"
                          aria-label="decrease"
                        >
                          −
                        </button>
                        <div className="w-8 text-center text-cream">{value}</div>
                        <button
                          type="button"
                          onClick={() => bump(key, +1)}
                          className="w-8 h-8 rounded-full border border-[rgba(230,192,121,0.3)] text-honey-200"
                          aria-label="increase"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[rgba(230,192,121,0.15)] pt-6">
          <div className="text-cream/70 text-sm">
            Total jars:{" "}
            <span className="text-cream font-medium">{totalJars}</span>
          </div>
          <div className="text-honey-200 text-sm">
            Estimated total · <span className="uppercase tracking-[0.25em]">TBA</span>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="card p-6 md:p-10">
        <div className="label">02 · Delivery & contact</div>
        <h2 className="font-display text-4xl text-cream mt-2">Where should it go?</h2>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
          <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
          <Field label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} required />
          <Field label="Address line 1" value={form.address_line1} onChange={(v) => setForm({ ...form, address_line1: v })} required className="md:col-span-2" />
          <Field label="Address line 2 (optional)" value={form.address_line2} onChange={(v) => setForm({ ...form, address_line2: v })} className="md:col-span-2" />
          <Field label="State" value={form.state} onChange={(v) => setForm({ ...form, state: v })} required />
          <Field label="Pincode" value={form.pincode} onChange={(v) => setForm({ ...form, pincode: v })} required />
          <Field label="Country" value={form.country} onChange={(v) => setForm({ ...form, country: v })} required />
          <div className="md:col-span-2">
            <label className="label">Order notes</label>
            <textarea
              className="textarea"
              rows={4}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Anything we should know — gift wrapping, delivery window, custom labels..."
            />
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="card p-6 md:p-10">
        <div className="label">03 · Payment</div>
        <h2 className="font-display text-4xl text-cream mt-2">How you'd like to pay</h2>
        <p className="text-cream/60 mt-2 text-sm">
          We aren't charging cards on this page yet. Pick an option and we'll
          send the next step.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <label className={`card p-5 cursor-pointer ${form.payment_method === "email" ? "ring-1 ring-honey-300" : ""}`}>
            <input
              type="radio"
              name="pay"
              className="sr-only"
              checked={form.payment_method === "email"}
              onChange={() => setForm({ ...form, payment_method: "email" })}
            />
            <div className="font-display text-2xl text-cream">Email me the invoice</div>
            <p className="text-cream/70 text-sm mt-2">
              We'll confirm stock, total, and share bank transfer / UPI details.
            </p>
          </label>
          <label className={`card p-5 cursor-pointer ${form.payment_method === "razorpay" ? "ring-1 ring-honey-300" : ""}`}>
            <input
              type="radio"
              name="pay"
              className="sr-only"
              checked={form.payment_method === "razorpay"}
              onChange={() => setForm({ ...form, payment_method: "razorpay" })}
            />
            <div className="font-display text-2xl text-cream">
              Razorpay link{" "}
              <span className="text-honey-200 text-sm align-middle">· TODO</span>
            </div>
            <p className="text-cream/70 text-sm mt-2">
              We'll email a Razorpay payment link. (Integration pending.)
            </p>
          </label>
        </div>
      </section>

      {status.kind === "error" && (
        <div className="card p-5 text-sm text-[#ffb4a0] border-[rgba(255,120,90,0.3)]">
          {status.message}
        </div>
      )}

      <div className="flex items-center justify-between flex-wrap gap-4">
        <p className="text-xs text-cream/50 max-w-md">
          By placing the order you agree to be contacted about delivery and
          payment. We don't share your details.
        </p>
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="btn btn-primary disabled:opacity-60"
        >
          {status.kind === "submitting" ? "Placing order…" : "Place Order"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="label">
        {label}
        {required && <span className="text-honey-300"> *</span>}
      </label>
      <input
        type={type}
        className="input"
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
