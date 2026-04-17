import Link from "next/link";

export const metadata = {
  title: "FAQ — Kalinga Honey",
  description:
    "Common questions about Kalinga Honey — sourcing, authenticity, shipping, storage, and more.",
};

const SECTIONS = [
  {
    title: "The Honey",
    items: [
      {
        q: "Is Kalinga Honey raw?",
        a: "Yes. We do not pasteurise or heat-process our honey. It is strained to remove wax and debris only, and bottled in small batches near the source.",
      },
      {
        q: "Do you add sugar, syrup, or preservatives?",
        a: "Never. Nothing goes in a Kalinga jar that didn't come out of the comb. Every batch is lab-tested for purity.",
      },
      {
        q: "Why has my honey crystallised?",
        a: "Crystallisation is a sign of real, raw honey — especially in cooler months. To re-liquify, place the closed jar in warm (not boiling) water for 15–20 minutes.",
      },
      {
        q: "What's the shelf life?",
        a: "Raw honey is one of the longest-shelf-life foods on earth. Stored dry and closed, our honey stays good for at least 24 months. Exact batch-wise dates are printed on each jar.",
      },
    ],
  },
  {
    title: "Buying & Delivery",
    items: [
      {
        q: "Where do you ship?",
        a: "Pan-India to start, with select international shipping on request. Shipping timelines, carriers, and rates: TBA.",
      },
      {
        q: "How do I pay?",
        a: "After you place the order, we confirm stock and send an invoice via email with bank transfer / UPI details — or a Razorpay link (integration pending).",
      },
      {
        q: "Can I get bulk / wholesale pricing?",
        a: (
          <span>
            Yes. For stocking, office, gifting, or event volumes, please use our{" "}
            <Link href="/contact" className="text-honey-200 underline">
              inquiry form
            </Link>{" "}
            and choose the relevant path.
          </span>
        ),
      },
      {
        q: "Can I return or exchange?",
        a: (
          <span>
            If anything is damaged in transit or not as described, we'll make it
            right. Full policy:{" "}
            <Link href="/shipping" className="text-honey-200 underline">
              Shipping & Returns
            </Link>
            .
          </span>
        ),
      },
    ],
  },
  {
    title: "Community & Sourcing",
    items: [
      {
        q: "Who harvests your honey?",
        a: "Kalinga Honey is sourced through tribal self-help groups (SHGs) across Odisha's forest belts. We buy directly at fair, transparent rates — no middlemen.",
      },
      {
        q: "Is harvesting sustainable?",
        a: "Yes. Our SHG partners use traditional low-smoke methods and leave enough stores for the colonies to thrive. We're not racing to maximise extraction.",
      },
      {
        q: "Do you have certifications?",
        a: "FSSAI license, lab certificates, and organic certifications (where applicable): TBA. Batch-wise reports available on request.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Frequently Asked</div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-cream mt-4">
          The things <span className="italic gold-text">people ask.</span>
        </h1>
        <p className="mt-6 text-cream/70 text-lg max-w-2xl">
          Sourcing, storage, shipping, and more. If something isn't covered
          here, write to us — we'll add it.
        </p>
      </section>

      <div className="hairline" />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16 space-y-14">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <div className="label">{s.title}</div>
            <div className="mt-6 space-y-3">
              {s.items.map((item) => (
                <details key={item.q} className="card p-6 group">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="font-display text-xl md:text-2xl text-cream pr-4">
                      {item.q}
                    </span>
                    <span className="text-honey-200 text-2xl leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-cream/75 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24 text-center">
        <div className="font-display text-3xl text-cream">
          Still wondering something?
        </div>
        <div className="mt-6">
          <Link href="/contact" className="btn btn-primary">Ask us directly</Link>
        </div>
      </section>
    </div>
  );
}
