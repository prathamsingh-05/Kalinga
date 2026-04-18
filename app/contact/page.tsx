import { InquiryForm } from "@/components/InquiryForm";

export const metadata = {
  title: "Contact — Kalinga",
  description:
    "Reach out — retail, corporate, events & gifting, or general. One form, four paths.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Contact</div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-cream mt-4">
          Let's <span className="italic gold-text">talk.</span>
        </h1>
        <p className="mt-6 text-cream/70 text-lg max-w-2xl">
          Whether you want to stock us, gift us, serve us at your office, or
          simply ask a question — one form, four paths.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-10">
        <InquiryForm initialType={searchParams.type ?? null} />
      </section>

      <div className="hairline" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-6">
        {[
          { k: "Email", v: "TBA" },
          { k: "Phone", v: "TBA" },
          { k: "Instagram", v: "@TBA" },
          { k: "Address", v: "TBA, Odisha, India" },
        ].map((c) => (
          <div key={c.k} className="card p-6">
            <div className="label">{c.k}</div>
            <div className="font-display text-2xl text-honey-200 mt-2">{c.v}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
