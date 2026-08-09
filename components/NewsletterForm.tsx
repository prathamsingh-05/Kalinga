"use client";

import { useState } from "react";

export function NewsletterForm({ source = "footer" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting" }
    | { kind: "success" }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Could not subscribe.");
      setStatus({ kind: "success" });
      setEmail("");
    } catch (err: any) {
      setStatus({ kind: "error", message: err.message ?? "Something went wrong" });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="text-sm text-honey-200">
        You're on the list. We'll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2">
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        aria-hidden
      />
      <div className="flex gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input flex-1"
        />
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="btn btn-primary disabled:opacity-60"
        >
          {status.kind === "submitting" ? "…" : "Join"}
        </button>
      </div>
      {status.kind === "error" && (
        <div className="text-xs text-[#ffb4a0]">{status.message}</div>
      )}
      <div className="text-[11px] text-cream/50">
        New batches, collaborations, and the occasional recipe. No spam.
      </div>
    </form>
  );
}
