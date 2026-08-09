"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/story", label: "Story" },
  { href: "/catalog", label: "Catalog" },
  { href: "/order", label: "Order" },
  { href: "/health", label: "Health" },
  { href: "/reviews", label: "Reviews" },
  { href: "/socials", label: "Socials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(26,15,6,0.72)] border-b border-[rgba(230,192,121,0.12)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <div className="font-display text-2xl tracking-[0.18em] text-cream leading-none">
            KALINGA
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={pathname === l.href}
              className="nav-link"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/order" className="btn btn-primary">
            Order
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden text-honey-200"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgba(230,192,121,0.12)] bg-ink-900/95">
          <div className="px-6 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/order" className="btn btn-primary self-start" onClick={() => setOpen(false)}>
              Order
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6c079" />
          <stop offset="1" stopColor="#8c6218" />
        </linearGradient>
      </defs>
      <polygon
        points="32,4 56,18 56,46 32,60 8,46 8,18"
        fill="none"
        stroke="url(#g1)"
        strokeWidth="2"
      />
      <polygon
        points="32,16 46,24 46,40 32,48 18,40 18,24"
        fill="url(#g1)"
        opacity="0.15"
      />
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="18"
        fill="url(#g1)"
      >
        K
      </text>
    </svg>
  );
}
