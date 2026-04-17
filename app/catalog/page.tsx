import Link from "next/link";
import { FLAVORS, SIZES } from "@/lib/products";

export const metadata = {
  title: "Catalog — Kalinga Honey",
  description:
    "Single-origin honey from Odisha — Tulsi, Jamun, Ginger, Multi-Flora. 250ml, 500ml, 1L.",
};

export default function CatalogPage() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">The Catalog</div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-cream mt-4">
          Four flavors. <span className="italic gold-text">One forest.</span>
        </h1>
        <p className="mt-6 text-cream/70 text-lg max-w-2xl">
          Each variety is single-origin, raw, and bottled in small batches. All
          flavors are available in three sizes.
        </p>
      </section>

      <div className="hairline" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-20">
        {FLAVORS.map((f, idx) => (
          <div
            key={f.slug}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              idx % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
            }`}
          >
            <div className="image-placeholder aspect-[4/5] rounded-2xl">
              Image · {f.name}
            </div>

            <div>
              <div className="label">{f.tagline}</div>
              <h2 className="font-display text-5xl md:text-6xl mt-3 text-cream">
                {f.name}
              </h2>
              <p className="mt-6 text-cream/75 leading-relaxed">
                {f.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {f.notes.map((n) => (
                  <div key={n} className="card px-3 py-4 text-center">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-honey-200/70">
                      Note
                    </div>
                    <div className="font-display text-xl text-cream mt-1">{n}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="label">Pairing</div>
                <p className="text-cream/75 text-sm mt-1">{f.pairing}</p>
              </div>

              <div className="mt-8">
                <div className="label">Available sizes · pricing</div>
                <div className="flex flex-wrap gap-3 mt-2">
                  {SIZES.map((s) => (
                    <div
                      key={s.id}
                      className="px-4 py-2 border border-[rgba(230,192,121,0.28)] rounded-full text-sm text-cream/90"
                    >
                      {s.label} ·{" "}
                      <span className="text-honey-200">Pricing TBA</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex gap-3 flex-wrap">
                <Link
                  href={`/order?flavor=${f.slug}`}
                  className="btn btn-primary"
                >
                  Order {f.name}
                </Link>
                <Link href="/contact?type=retailer" className="btn btn-ghost">
                  Retail this flavor
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="hairline" />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16 text-center">
        <div className="font-display text-4xl text-cream">
          Want a custom label, size, or hamper?
        </div>
        <p className="mt-4 text-cream/70 max-w-2xl mx-auto">
          We regularly produce private-label and gifting variants for
          corporates, events, and retail partners. Tell us what you have in
          mind.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/contact?type=corporate" className="btn btn-primary">
            Corporate Inquiry
          </Link>
          <Link href="/contact?type=events" className="btn btn-ghost">
            Events & Gifting
          </Link>
        </div>
      </section>
    </div>
  );
}
