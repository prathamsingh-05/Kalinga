import Link from "next/link";

export const metadata = {
  title: "Our Story — Kalinga",
  description:
    "How Kalinga sources its honey naturally from the forests of Odisha, in partnership with tribal self-help groups.",
};

export default function StoryPage() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Chapter One</div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-cream mt-4">
          A jar of honey, <span className="italic gold-text">and a forest behind it.</span>
        </h1>
        <p className="mt-8 text-cream/70 text-lg leading-relaxed max-w-3xl">
          Kalinga begins where most supply chains end — deep in the forest
          belts of Odisha, among tribal communities who have gathered wild
          honey for generations. We are not a factory. We are a bridge
          between that knowledge and your kitchen shelf.
        </p>
      </section>

      <div className="hairline" />

      {/* Roots */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="label">The Roots</div>
          <h2 className="font-display text-5xl text-cream mt-3">
            Naturally sourced. Nothing added.
          </h2>
          <div className="space-y-5 mt-6 text-cream/75 leading-relaxed">
            <p>
              Every drop is harvested in the wild — by hand, using traditional
              low-smoke methods that respect both the colony and the forest. We
              do not feed sugar. We do not heat-process. We do not blend
              origins to hit a price point.
            </p>
            <p>
              What goes in a Kalinga jar is exactly what came out of the comb.
              Raw, unfiltered beyond a fine strain, and bottled in small batches
              near the source so nothing sits around long enough to go stale.
            </p>
            <p>
              This is why our honey crystallises in cooler months. Why it
              smells like the flowers that fed it. Why the color changes with
              the season. It is alive — as honey is meant to be.
            </p>
          </div>
        </div>
        <div className="image-placeholder aspect-[4/5] rounded-2xl">
          Image · Harvester at work
        </div>
      </section>

      <div className="hairline" />

      {/* Community */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="image-placeholder aspect-[4/5] rounded-2xl order-last md:order-first">
          Image · Self-help group members
        </div>
        <div>
          <div className="label">The People</div>
          <h2 className="font-display text-5xl text-cream mt-3">
            Built with tribal self-help groups.
          </h2>
          <div className="space-y-5 mt-6 text-cream/75 leading-relaxed">
            <p>
              Kalinga works directly with tribal self-help groups (SHGs)
              across Odisha. These groups — often led by women — are the
              backbone of honey collection, quality control, and packaging in
              their regions.
            </p>
            <p>
              By buying from SHGs at fair, transparent rates and investing back
              into training and equipment, we help keep forest-based
              livelihoods viable. No middlemen. No volume games. A jar of
              Kalinga is a jar that someone's family was paid properly for.
            </p>
            <p>
              We believe premium quality and social weight are not opposites.
              Done right, they are the same thing.
            </p>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="label">What we refuse to compromise on</div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            {
              t: "Purity",
              d: "Zero preservatives, zero additives, zero sugar syrups. Lab-tested batches, traceable to source.",
            },
            {
              t: "Provenance",
              d: "Every batch tied to a specific forest region and SHG. You know where your honey came from.",
            },
            {
              t: "People",
              d: "Fair, direct procurement. A real share of every jar goes to the hands that harvested it.",
            },
          ].map((v) => (
            <div key={v.t} className="card p-8">
              <div className="font-display text-3xl text-cream">{v.t}</div>
              <p className="mt-4 text-cream/70 leading-relaxed text-sm">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24 text-center">
        <div className="font-display text-4xl text-cream">
          Taste the forest. Support the forest.
        </div>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/catalog" className="btn btn-primary">See the Catalog</Link>
          <Link href="/contact" className="btn btn-ghost">Work with us</Link>
        </div>
      </section>
    </div>
  );
}
