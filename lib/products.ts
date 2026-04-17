export type Flavor = {
  slug: "tulsi" | "jamun" | "ginger" | "multiflora";
  name: string;
  tagline: string;
  description: string;
  notes: string[];
  pairing: string;
  imagePlaceholder: string;
};

export const FLAVORS: Flavor[] = [
  {
    slug: "tulsi",
    name: "Tulsi Honey",
    tagline: "Sacred basil, gentle warmth.",
    description:
      "Gathered where tulsi blooms line the forest edge, this honey carries a clean, herbal finish with soft floral top notes. Traditionally valued for daily wellness and seasonal immunity.",
    notes: ["Herbal", "Subtly minty", "Light amber"],
    pairing: "Warm water with lemon, herbal teas, morning toast.",
    imagePlaceholder: "/images/flavors/tulsi-placeholder.jpg",
  },
  {
    slug: "jamun",
    name: "Jamun Honey",
    tagline: "Deep, dark, quietly bold.",
    description:
      "Collected during the short jamun bloom, this is our darkest pour — rich, slightly astringent, with a malt-like depth. A longstanding favourite in traditional Indian households.",
    notes: ["Malty", "Mineral", "Dark amber"],
    pairing: "Black coffee, aged cheese, sourdough, dark chocolate.",
    imagePlaceholder: "/images/flavors/jamun-placeholder.jpg",
  },
  {
    slug: "ginger",
    name: "Ginger Honey",
    tagline: "A slow, warming finish.",
    description:
      "Our raw honey gently infused with fresh Odisha ginger. Sharp at first, then round and warm — a pantry staple for cold mornings and sore throats.",
    notes: ["Warming", "Spiced", "Golden"],
    pairing: "Hot water, chai, marinades, roasted vegetables.",
    imagePlaceholder: "/images/flavors/ginger-placeholder.jpg",
  },
  {
    slug: "multiflora",
    name: "Multi-Flora Honey",
    tagline: "The forest, in a jar.",
    description:
      "A wild blend drawn from the many flowering trees across Odisha's forest belts. Every batch is a little different — expect layered florals, a soft fruitiness, and a long, clean finish.",
    notes: ["Floral", "Balanced", "Golden amber"],
    pairing: "Yogurt, pancakes, cheese boards, drizzled on fruit.",
    imagePlaceholder: "/images/flavors/multiflora-placeholder.jpg",
  },
];

export type SizeOption = {
  id: "250ml" | "500ml" | "1l";
  label: string;
  ml: number;
};

export const SIZES: SizeOption[] = [
  { id: "250ml", label: "250 ml", ml: 250 },
  { id: "500ml", label: "500 ml", ml: 500 },
  { id: "1l", label: "1 litre", ml: 1000 },
];

export const INQUIRY_TYPES = [
  {
    id: "retailer",
    label: "Retailer",
    hint: "Stock Kalinga Honey in your store, cafe, or deli.",
  },
  {
    id: "corporate",
    label: "Corporate / Office",
    hint: "Pantry supply, wellness programs, or bulk office orders.",
  },
  {
    id: "events",
    label: "Events & Gifting",
    hint: "Weddings, festive hampers, corporate gifting, curated events.",
  },
  {
    id: "general",
    label: "General Inquiry",
    hint: "Anything else — we'd love to hear from you.",
  },
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number]["id"];
