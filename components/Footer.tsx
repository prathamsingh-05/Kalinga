import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(230,192,121,0.12)] bg-[rgba(26,15,6,0.7)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-3xl tracking-[0.18em] text-cream">
            KALINGA
          </div>
          <div className="text-[10px] tracking-[0.5em] text-honey-200/70 mt-1">
            HONEY
          </div>
          <p className="mt-6 text-sm text-cream/70 leading-relaxed">
            Raw, single-origin honey from the forests of Odisha. Harvested with
            tribal self-help groups. No additives. No shortcuts.
          </p>
        </div>

        <div>
          <div className="label mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/story">Our Story</Link></li>
            <li><Link href="/catalog">Catalog</Link></li>
            <li><Link href="/health">Health & Nutrition</Link></li>
            <li><Link href="/socials">Socials</Link></li>
          </ul>
        </div>

        <div>
          <div className="label mb-4">Work With Us</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/contact?type=retailer">Retailers</Link></li>
            <li><Link href="/contact?type=corporate">Corporate Orders</Link></li>
            <li><Link href="/contact?type=events">Events & Gifting</Link></li>
            <li><Link href="/contact?type=general">General Inquiry</Link></li>
          </ul>
        </div>

        <div>
          <div className="label mb-4">Reach Us</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Email — <span className="text-honey-200">TBA</span></li>
            <li>Phone — <span className="text-honey-200">TBA</span></li>
            <li>Instagram — <span className="text-honey-200">TBA</span></li>
            <li>LinkedIn — <span className="text-honey-200">TBA</span></li>
            <li>Address — <span className="text-honey-200">TBA, Odisha, India</span></li>
          </ul>
        </div>
      </div>

      <div className="hairline" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-xs tracking-[0.22em] uppercase text-cream/50">
          © {new Date().getFullYear()} Kalinga Honey · All rights reserved
        </div>
        <div className="text-xs tracking-[0.22em] uppercase text-cream/40">
          Sourced in Odisha · Made with care
        </div>
      </div>
    </footer>
  );
}
