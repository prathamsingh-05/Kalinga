import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Typography picked to mirror the Echelle Ventures look:
// modern high-contrast editorial serif + a clean neutral sans.
// Swap the two imports below if the final exact fonts are confirmed.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kalinga Honey — Naturally Sourced from Odisha",
  description:
    "Raw, single-origin honey from the forests of Odisha. No preservatives. No additives. Harvested with tribal self-help groups.",
  openGraph: {
    title: "Kalinga Honey",
    description:
      "Raw, single-origin honey from the forests of Odisha. No preservatives. No additives.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
