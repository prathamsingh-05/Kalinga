"use client";

import { useEffect, useState } from "react";
import { INQUIRY_TYPES, type InquiryType } from "@/lib/products";

type Props = {
  initialType?: string | null;
};

export function InquiryForm({ initialType }: Props) {
  const [type, setType] = useState<InquiryType>(() => {
    const match = INQUIRY_TYPES.find((t) => t.id === initialType);
    return match ? (match.id as InquiryType) : "general";
  });

  useEffect(() => {
    if (initialType) {
      const match = INQUIRY_TYPES.find((t) => t.id === initialType);
      if (match) setType(match.id as InquiryType);
    }
  }, [initialType]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    subject: "",
    message: "",
    // retailer
    store_type: "",
    outlets: "",
    // corporate
    office_size: "",
    frequency: "",
    // events
    event_type: "",
    event_date: "",
    guests: "",
    budget: "",
  });

  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting" }
    | { kind: "success"; id: number }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ kind: "submitting" });

    const meta: Record<string, string> = {};
    if (type === "retailer") {
      meta.store_type = form.store_type;
      meta.outlets = form.outlets;
    } else if (type === "corporate") {
      meta.office_size = form.office_size;
      meta.frequency = form.frequency;
    } else if (type === "events") {
      meta.event_type = form.event_type;
      meta.event_date = form.event_date;
      meta.guests = form.guests;
      meta.budget = form.budget;
    }

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          city: form.city,
          subject: form.subject,
          message: form.message,
          meta,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Could not submit.");
      setStatus({ kind: "success", id: data.id });
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        city: "",
        subject: "",
        message: "",
        store_type: "",
        outlets: "",
        office_size: "",
        frequency: "",
        event_type: "",
        event_date: "",
        guests: "",
        budget: "",
      });
    } catch (err: any) {
      setStatus({ kind: "error", message: err.message ?? "Something went wrong" });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="card p-10 text-center">
        <div className="font-display text-4xl text-cream">Thanks for writing in.</div>
        <p className="mt-4 text-cream/70 max-w-xl mx-auto">
          Reference <span className="text-honey-200">#{status.id}</span>. We'll
          get back to you within 2–3 working days.
        </p>
        <div className="mt-8">
          <button onClick={() => setStatus({ kind: "idle" })} className="btn btn-ghost">
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-10">
      {/* Type selector */}
      <section className="card p-6 md:p-10">
        <div className="label">01 · What brings you here?</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {INQUIRY_TYPES.map((t) => (
            <label
              key={t.id}
              className={`card p-5 cursor-pointer transition ${
                type === t.id ? "ring-1 ring-honey-300 bg-[rgba(230,192,121,0.06)]" : ""
              }`}
            >
              <input
                type="radio"
                name="type"
                value={t.id}
                checked={type === t.id}
                onChange={() => setType(t.id as InquiryType)}
                className="sr-only"
              />
              <div className="font-display text-2xl text-cream">{t.label}</div>
              <p className="text-cream/65 text-sm mt-2 leading-relaxed">{t.hint}</p>
            </label>
          ))}
        </div>
      </section>

      {/* Shared fields */}
      <section className="card p-6 md:p-10">
        <div className="label">02 · About you</div>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
          <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          <Field label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
          {(type === "retailer" || type === "corporate" || type === "events") && (
            <Field label="Company / Organisation" value={form.company} onChange={(v) => setForm({ ...form, company: v })} className="md:col-span-2" />
          )}
        </div>
      </section>

      {/* Type-specific */}
      <section className="card p-6 md:p-10">
        <div className="label">03 · Tell us more</div>

        {type === "retailer" && (
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Field label="Type of store (deli, grocery, cafe…)" value={form.store_type} onChange={(v) => setForm({ ...form, store_type: v })} />
            <Field label="Number of outlets" value={form.outlets} onChange={(v) => setForm({ ...form, outlets: v })} />
          </div>
        )}

        {type === "corporate" && (
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Field label="Approx. office size (people)" value={form.office_size} onChange={(v) => setForm({ ...form, office_size: v })} />
            <Field label="Expected frequency (monthly, quarterly…)" value={form.frequency} onChange={(v) => setForm({ ...form, frequency: v })} />
          </div>
        )}

        {type === "events" && (
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Field label="Event / gifting type" value={form.event_type} onChange={(v) => setForm({ ...form, event_type: v })} />
            <Field label="Event date (approx)" value={form.event_date} onChange={(v) => setForm({ ...form, event_date: v })} />
            <Field label="Guests / hampers" value={form.guests} onChange={(v) => setForm({ ...form, guests: v })} />
            <Field label="Budget range" value={form.budget} onChange={(v) => setForm({ ...form, budget: v })} />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <Field
            label="Subject"
            value={form.subject}
            onChange={(v) => setForm({ ...form, subject: v })}
            className="md:col-span-2"
          />
          <div className="md:col-span-2">
            <label className="label">
              Message<span className="text-honey-300"> *</span>
            </label>
            <textarea
              className="textarea"
              rows={6}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us what you're looking for, quantities, timelines, anything relevant."
            />
          </div>
        </div>
      </section>

      {status.kind === "error" && (
        <div className="card p-5 text-sm text-[#ffb4a0] border-[rgba(255,120,90,0.3)]">
          {status.message}
        </div>
      )}

      <div className="flex items-center justify-between flex-wrap gap-4">
        <p className="text-xs text-cream/50 max-w-md">
          We reply within 2–3 working days. Your details stay with us.
        </p>
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="btn btn-primary disabled:opacity-60"
        >
          {status.kind === "submitting" ? "Sending…" : "Send Inquiry"}
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
