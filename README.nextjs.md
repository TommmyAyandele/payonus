# PayOnUs Website (Next.js)

The PayOnUs marketing website, built with **Next.js 16 (App Router)** and **React 19**.
This is a server-rendered app (API routes, dynamic routes, generated sitemap/robots),
so it runs on a Node.js runtime — it is **not** a static export.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16.2.4 (App Router, Turbopack) |
| UI | React 19.2 |
| Content | Markdown blog via `gray-matter` + `marked` |
| Lint | ESLint 9 (flat config) |
| Runtime | Node.js **20.9+** |

## Getting started

```bash
npm ci            # install (lockfile-exact)
npm run dev       # dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build (Turbopack)
npm run start     # serve the production build (PORT, default 3000)
npm run lint      # eslint
```

## Environment variables

Copy `.env.example` and fill in the values (never commit real secrets — `.env*` is
gitignored except `.env.example`).

| Variable | Required | Purpose |
| --- | --- | --- |
| `SLACK_LEADS_WEBHOOK_URL` | Yes | Slack Incoming Webhook that receives all website form leads (sales, lead-capture, support). Without it, form submissions return `500 "Not configured"`. |

## Project structure

```
app/                     App Router
  layout.tsx             Root layout — GTM + GA4 tags live here
  page.tsx               Home
  <section>/page.tsx     Product/industry/company/etc. pages
  fr/                    French (/fr) locale
  resources/[slug]/      Blog post pages (SSG from content/blog)
  careers/[slug]/        Job detail pages
  api/sales-enquiry/     Form submission endpoint → posts leads to Slack
  sitemap.ts, robots.ts  Generated SEO routes
content/blog/            Markdown blog posts
public/                  Static assets
```

## Analytics

Google Tag Manager (`GTM-NPHWJ2NK`) and GA4 (`G-KLBGC7GGSZ`) are wired in
`app/layout.tsx` — a single container used on every domain, so no config change is
needed when the site moves to its production domain. Custom events go through
`app/analytics.ts` (`trackEvent`), which pushes to both the GTM dataLayer and GA4
directly via `gtag`.

## Forms

All lead/contact forms (the lead-capture popup, `/sales`, `/support`, and the
industry "Talk to sales" modal) POST to `/api/sales-enquiry`, which formats the
submission and posts it to Slack. The whistleblower form is separate and posts to
the notification service.

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** — the site deploys to a VM (Node + PM2 + nginx).
