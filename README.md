# desigr.monster

Premium domain sales desk. Static site built with **Astro 7** + **Tailwind CSS 4**, deployed as **Cloudflare Workers Static Assets** (free plan) with a thin Worker for SEO host canonicalization.

Production: **https://desigr.monster**

Desk: `sales@desertrich.com`

## Stack

- Astro 7 (static output)
- Tailwind CSS 4 via `@tailwindcss/vite`
- `@astrojs/sitemap`
- Open Graph, Twitter cards, Organization + Product JSON-LD
- `robots.txt`, sitemap, custom `404`, apex-host redirects

## Pages

- `/` — desigr.monster for sale, price, buy / offer / agent
- `/portfolio/` — filter by keyword, TLD, price, category
- `/domain/[slug]/` — one page per name
- `/guides/` — valuation and escrow notes
- `/about/` — transfer terms

## Local development

```bash
npm install
npm run dev
```

## Build & deploy (Cloudflare Workers, free plan)

```bash
npm run build
npm run deploy
```

`wrangler.toml` runs the Worker first (`run_worker_first = true`) so `www` 301s to `https://desigr.monster` before assets are served.

After deploy: Search Console → URL Inspection → request indexing, and submit `https://desigr.monster/sitemap-index.xml`.
