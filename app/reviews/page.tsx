import Link from "next/link";

export const metadata = {
  title: "Reviews & Testimonials — Kalinga",
  description:
    "Customer reviews and testimonials for Kalinga. Collected and published after our first 50 orders.",
};

export default function ReviewsPage() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Reviews & Testimonials</div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-cream mt-4">
          In their <span className="italic gold-text">own words.</span>
        </h1>
        <p className="mt-6 text-cream/70 text-lg max-w-2xl">
          We're holding this page back until it has something real to say.
        </p>
      </section>

      <div className="hairline" />

      {/* Coming soon banner */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div className="card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 honeycomb-bg opacity-30 pointer-events-none" />
          <div className="relative">
            <div className="label">Coming Soon</div>
            <h2 className="font-display text-4xl md:text-6xl text-cream mt-4">
              After our <span className="italic gold-text">first 50 orders.</span>
            </h2>
            <p className="mt-6 text-cream/75 max-w-2xl mx-auto leading-relaxed">
              We'd rather show you a wall of honest, verified feedback than
              stock photography with stock words. This page will go live
              once the first fifty Kalinga jars have found their homes — and
              the people holding them have had a chance to taste, review,
              and tell us what they really think.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/order" className="btn btn-primary">
                Be among the first 50
              </Link>
              <Link href="/story" className="btn btn-ghost">
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Placeholder review tiles */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="label">What you'll see here (soon)</div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-8 opacity-60">
              <div className="text-honey-200 text-xl tracking-[0.4em]">★★★★★</div>
              <p className="mt-4 text-cream/70 italic leading-relaxed">
                "Review copy · TBA. A verified customer's own words about
                their Kalinga jar will appear here after our first fifty
                orders."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full image-placeholder !border-0 text-[9px]">
                  TBA
                </div>
                <div>
                  <div className="text-cream text-sm">Customer Name · TBA</div>
                  <div className="text-honey-200/70 text-xs tracking-[0.2em] uppercase">
                    City · TBA
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* Already ordered? Share */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="label">Already a customer?</div>
          <h2 className="font-display text-4xl text-cream mt-3">
            We'd love your words.
          </h2>
          <p className="mt-4 text-cream/75 leading-relaxed">
            If you've already received your Kalinga jar, please share how it
            tasted, how it travelled, and how you used it. Your feedback
            will shape this page — and the product itself.
          </p>
          <div className="mt-8">
            <Link href="/contact?type=general" className="btn btn-primary">
              Share your feedback
            </Link>
          </div>
        </div>

        <div className="card p-8">
          <div className="label">Or tag us on Instagram</div>
          <div className="mt-4 font-display text-3xl text-honey-200">
            @TBA
          </div>
          <p className="mt-4 text-cream/70 text-sm">
            We repost our favourites every month.
          </p>
        </div>
      </section>
    </div>
  );
}
