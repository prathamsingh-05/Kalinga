import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* HERO — three anchor words */}
      <section className="relative honeycomb-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 min-h-[88vh] flex flex-col justify-center">
          <div className="text-[10px] tracking-[0.6em] uppercase text-honey-200/70">
            Kalinga Honey · Est. in the forests of Odisha
          </div>

          <h1 className="mt-10 font-display text-[clamp(3.5rem,13vw,11rem)] leading-[0.92] tracking-tight">
            <span className="block gold-text">Raw.</span>
            <span className="block gold-text italic">Rooted.</span>
            <span className="block gold-text">Rare.</span>
          </h1>

          <p className="mt-10 max-w-xl text-cream/70 text-lg leading-relaxed">
            A premium, naturally sourced honey from tribal self-help groups
            across Odisha. Harvested slow. Bottled pure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/catalog" className="btn btn-primary">Explore the Catalog</Link>
            <Link href="/story" className="btn btn-ghost">Our Story</Link>
          </div>
        </div>

        {/* Decorative drop */}
        <div className="absolute right-6 bottom-8 hidden lg:block opacity-70">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            <defs>
              <linearGradient id="drop" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#e6c079" stopOpacity="0.6" />
                <stop offset="1" stopColor="#8c6218" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d="M60 10 C60 10, 20 70, 20 105 C20 130, 38 150, 60 150 C82 150, 100 130, 100 105 C100 70, 60 10, 60 10Z"
              fill="url(#drop)"
            />
          </svg>
        </div>
      </section>

      <div className="hairline" />

      {/* Brand pillars */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              k: "01",
              t: "Single-Origin",
              d: "Traced to specific forest belts across Odisha — never blended down.",
            },
            {
              k: "02",
              t: "Uncompromised",
              d: "No preservatives, no added sugars, no heat-processing. Just raw honey.",
            },
            {
              k: "03",
              t: "Community-First",
              d: "Harvested with tribal self-help groups. Every jar supports a livelihood.",
            },
          ].map((i) => (
            <div key={i.k} className="card p-8">
              <div className="text-[10px] tracking-[0.5em] text-honey-300">{i.k}</div>
              <div className="font-display text-3xl mt-4 text-cream">{i.t}</div>
              <p className="mt-4 text-cream/70 leading-relaxed text-sm">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser — flavors */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="label">The Collection</div>
            <h2 className="font-display text-5xl md:text-6xl mt-2 text-cream">
              Four flavors. One forest.
            </h2>
          </div>
          <Link href="/catalog" className="btn btn-ghost">See Catalog</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            { n: "Tulsi", d: "Herbal · Light" },
            { n: "Jamun", d: "Malty · Dark" },
            { n: "Ginger", d: "Warming · Spiced" },
            { n: "Multi-Flora", d: "Floral · Balanced" },
          ].map((f) => (
            <div key={f.n} className="card p-6">
              <div className="image-placeholder aspect-[4/5] rounded-xl mb-5">
                Image · {f.n}
              </div>
              <div className="font-display text-2xl text-cream">{f.n}</div>
              <div className="text-xs tracking-[0.3em] uppercase text-honey-200/70 mt-2">
                {f.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* Reviews teaser */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20 text-center">
        <div className="label">Reviews</div>
        <h2 className="font-display text-4xl md:text-5xl text-cream mt-3">
          What our early customers think.
        </h2>
        <p className="mt-4 text-cream/70 max-w-2xl mx-auto">
          This page will be updated after our first 50 orders — so we only
          show real words from real customers.
        </p>
        <div className="mt-8">
          <Link href="/reviews" className="btn btn-ghost">Reviews page</Link>
        </div>
      </section>
    </div>
  );
}
