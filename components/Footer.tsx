import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(230,192,121,0.12)] bg-[rgba(26,15,6,0.7)]">
      {/* Trust strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-b border-[rgba(230,192,121,0.1)]">
        {[
          { k: "FSSAI Lic.", v: "TBA" },
          { k: "Lab-tested", v: "Every batch" },
          { k: "Made in", v: "Odisha, India" },
          { k: "Shipping", v: "Pan-India" },
        ].map((t) => (
          <div key={t.k}>
            <div className="text-[10px] tracking-[0.3em] uppercase text-honey-200/70">
              {t.k}
            </div>
            <div className="font-display text-xl text-cream mt-1">{t.v}</div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.18em] text-cream">
            KALINGA
          </div>
          <p className="mt-6 text-sm text-cream/70 leading-relaxed max-w-sm">
            Raw, single-origin honey from the forests of Odisha. Harvested with
            tribal self-help groups. No additives. No shortcuts.
          </p>

          <div className="mt-8 max-w-sm">
            <div className="label">Newsletter</div>
            <div className="mt-2">
              <NewsletterForm source="footer" />
            </div>
          </div>
        </div>

        <div>
          <div className="label mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/story">Our Story</Link></li>
            <li><Link href="/catalog">Catalog</Link></li>
            <li><Link href="/health">Health & Nutrition</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/socials">Socials</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
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
          © {new Date().getFullYear()} Kalinga · All rights reserved
        </div>
        <div className="flex items-center gap-5 text-xs tracking-[0.22em] uppercase">
          <Link href="/privacy" className="text-cream/60 hover:text-honey-200">Privacy</Link>
          <Link href="/shipping" className="text-cream/60 hover:text-honey-200">Shipping</Link>
          <Link href="/faq" className="text-cream/60 hover:text-honey-200">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
