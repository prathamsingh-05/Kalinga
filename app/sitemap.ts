import type { MetadataRoute } from "next";

const BASE = "https://kalingahoney.in"; // TODO: replace with real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/story",
    "/catalog",
    "/order",
    "/health",
    "/socials",
    "/reviews",
    "/faq",
    "/shipping",
    "/privacy",
    "/contact",
  ];
  return pages.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
