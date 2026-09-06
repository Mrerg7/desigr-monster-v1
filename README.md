# desigr.monster

Mysterious, image-driven static site built with **Astro 7** + **Tailwind CSS 4**, deployed as **Cloudflare Workers Static Assets** with a thin Worker for SEO host canonicalization.

## Stack

- Astro 7 (static output)
- Tailwind CSS 4 via `@tailwindcss/vite`
- `@astrojs/sitemap`
- Cloudflare Images CDN for the primary visual
- Open Graph + Twitter cards + JSON-LD structured data
- `robots.txt`, sitemap, custom `404`, and apex-host redirects

## Search / indexing notes

This build addresses common Search Console “not indexed” reasons:

| Issue | Fix in this repo |
| --- | --- |
| Alternate page with proper canonical | Worker 301 `www` → `https://desigr.monster` |
| Duplicate without user-selected canonical | Absolute apex `<link rel="canonical">` + trailing-slash HTML handling |
| Not found (404) | Custom `404` page + `not_found_handling = "404-page"`; favicon.ico restored |
| Blocked due to access forbidden (403) | Worker never returns 403 for public GET/HEAD; maps to 404 instead |
| Mobile usability | ≥12px body type, 48px CTA tap target, viewport meta, reduced-motion |

After deploy, use URL Inspection → Request indexing on the homepage and clear outdated URLs.

## Local development

```bash
npm install
npm run dev
```

## Build & Deploy (Cloudflare Workers)

```bash
npm run build
# outputs static files to ./dist

npm run deploy
# or
npx wrangler deploy
```

`wrangler.toml` runs a small Worker first (`run_worker_first = true`) so host redirects apply before assets are served.

## Domain

Production: **https://desigr.monster** (canonical host)

CTA: `erg@desigr.monster`
