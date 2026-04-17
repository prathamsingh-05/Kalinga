import Link from "next/link";

export const metadata = {
  title: "Socials — Kalinga Honey",
  description:
    "Follow Kalinga Honey on Instagram, view our latest posts, and explore brand collaborations.",
};

const POSTS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  caption: "Post caption · TBA",
}));

export default function SocialsPage() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Socials</div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-cream mt-4">
          Follow the <span className="italic gold-text">forest.</span>
        </h1>
        <p className="mt-6 text-cream/70 text-lg max-w-2xl">
          Harvests, kitchen experiments, collaborations, and the people behind
          each jar. Find us and tag us — we'd love to see how you use Kalinga.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid md:grid-cols-4 gap-6">
        <Handle platform="Instagram" handle="TBA" href="#" />
        <Handle platform="LinkedIn" handle="TBA" href="#" />
        <Handle platform="YouTube" handle="TBA" href="#" />
        <Handle platform="Email" handle="TBA" href="mailto:tba@example.com" />
      </section>

      <div className="hairline" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="label">Latest posts</div>
            <h2 className="font-display text-4xl md:text-5xl text-cream mt-2">
              From our feed
            </h2>
          </div>
          <Link href="/contact" className="btn btn-ghost">Pitch a collab</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {POSTS.map((p) => (
            <div key={p.id} className="card overflow-hidden">
              <div className="image-placeholder aspect-square">
                Instagram · Post {p.id}
              </div>
              <div className="p-5">
                <div className="text-xs tracking-[0.28em] uppercase text-honey-200/70">
                  @kalingahoney · TBA
                </div>
                <p className="mt-2 text-cream/75 text-sm">{p.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div className="card p-8 md:p-12 text-center">
          <div className="label">Brand Collaborations</div>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-cream">
            Create something with us.
          </h2>
          <p className="mt-4 text-cream/70 max-w-2xl mx-auto">
            Chefs, cafés, wellness studios, creators, and ethical brands —
            we're always open to a good collaboration. Tell us what you have
            in mind.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/contact?type=events" className="btn btn-primary">
              Propose a Collab
            </Link>
            <Link href="/contact?type=general" className="btn btn-ghost">
              Say Hello
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Handle({
  platform,
  handle,
  href,
}: {
  platform: string;
  handle: string;
  href: string;
}) {
  return (
    <a href={href} className="card p-6 block hover:border-honey-300/40 transition">
      <div className="text-xs tracking-[0.3em] uppercase text-honey-200/70">
        {platform}
      </div>
      <div className="font-display text-2xl text-cream mt-2">@{handle}</div>
    </a>
  );
}
