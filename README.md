# Kalinga Honey

A full-stack website for **Kalinga Honey** — a premium, naturally sourced honey brand from Odisha.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **SQLite (better-sqlite3)**, and **Zod**.

---

## Pages

| Route       | Purpose                                                            |
| ----------- | ------------------------------------------------------------------ |
| `/`         | Homepage with three-word hero (Raw · Rooted · Rare)               |
| `/story`    | Brand story, tribal SHG partnerships, values                       |
| `/catalog`  | Four flavors — Tulsi, Jamun, Ginger, Multi-Flora (pricing TBA)     |
| `/order`    | Full order form — 250ml / 500ml / 1L, address, Razorpay TODO       |
| `/health`   | Nutrition snapshot, traditional uses, a word of care               |
| `/socials`  | Instagram / LinkedIn handles (TBA), posts grid, collab pitch       |
| `/contact`  | One form, four inquiry paths (retailer, corporate, events, general)|
| `/admin`    | Internal dashboard to view inquiries + orders (token-gated)        |

## Backend

- `POST /api/inquiries` — handles all four inquiry types, stored in `inquiries` table.
- `POST /api/orders` — places an order (no payment yet), stored in `orders` table.
- SQLite file lives at `./data/kalinga.db` by default.
- All forms are validated server-side with Zod.

## Running locally

```bash
npm install
cp .env.example .env.local   # fill in ADMIN_TOKEN
npm run dev
# open http://localhost:3000
# admin: http://localhost:3000/admin?token=YOUR_TOKEN
```

## Placeholders / TBA — things to fill in before launch

Contact info (all currently marked **TBA**):

- Email, phone, address — `components/Footer.tsx`, `app/contact/page.tsx`
- Instagram / LinkedIn / YouTube — `app/socials/page.tsx`, `components/Footer.tsx`

Pricing:

- Every jar size shows **Pricing TBA**. Add prices in `lib/products.ts`
  (extend `SIZES` with `price` per flavor if needed) and update
  `app/catalog/page.tsx`, `components/OrderForm.tsx`.

Payments:

- `components/OrderForm.tsx` exposes a `Razorpay link` option — backend
  integration is a TODO in `app/api/orders/route.ts`.
- Also: email notifications (customer + NOTIFY_EMAIL) are TODO.

Images:

- Every image is a placeholder tile labelled with the intent.
  Drop JPG/PNG assets into `public/images/…` and replace the
  `<div className="image-placeholder">` blocks with `<Image>` / `<img>` tags.

Fonts:

- Currently using **Fraunces** (display) + **Inter** (body) as an
  editorial pairing close to the Echelle Ventures look.
- To swap to the exact Echelle Ventures fonts, edit `app/layout.tsx`
  and `tailwind.config.ts` — both reference a single `--font-display`
  and `--font-body` CSS variable.

Social posts:

- `/socials` currently has 6 placeholder tiles. Swap with a real
  Instagram oEmbed / Instagram Graph API feed when the account is live.

## Notes

- This site uses SQLite for portability. For production, consider
  switching to Postgres (Neon / Supabase) and adding proper admin auth.
- `/admin` is gated on `ADMIN_TOKEN` via query string — fine for an
  early internal tool, but replace with a real auth layer before public exposure.
