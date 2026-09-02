# Deployment Guide

The PayOnUs marketing website — a **Next.js 16 (App Router)** application.

> **Important:** this is a **server-rendered** app, not a static site. It has API
> routes (`/api/sales-enquiry`) and dynamic routes (`/careers/[slug]`), plus a
> generated `sitemap.xml` / `robots.txt`. It **must run on a Node.js runtime**
> (`next start`, a Node server, or a platform that runs Next.js). You **cannot**
> serve it as static files from S3/nginx/a CDN bucket alone.

---

## 1. Requirements

| Tool        | Version                          |
| ----------- | -------------------------------- |
| Node.js     | **20.9+** (Node 20 LTS or 22 LTS) |
| npm         | 10+ (bundled with Node)          |
| TypeScript  | 5.1+ (installed via devDeps)     |

Build uses **Turbopack** (the Next.js 16 default) — no extra flags needed.

## 2. Environment variables

Set these in the hosting environment (never commit them — `.env*` is gitignored,
except `.env.example` which documents the shape).

| Variable                   | Required | Purpose                                                                 |
| -------------------------- | -------- | ----------------------------------------------------------------------- |
| `GOOGLE_SHEET_WEBHOOK_URL`  | **Yes**  | Google Apps Script webhook (see `scripts/sales-enquiry-sheet-webhook.gs`) that appends all website form leads as sheet rows. Without it, form submissions return `500 "Not configured"`. |

## 3. Build & run (generic)

```bash
npm ci                 # clean, lockfile-exact install
npm run build          # production build (Turbopack)
npm run start          # starts the server on PORT (default 3000)
```

Change the port with the `PORT` env var, e.g. `PORT=8080 npm run start`.

**Smoke test after deploy:**

```bash
curl -f http://<host>:<port>/            # expect 200
curl -f http://<host>:<port>/sitemap.xml # expect 200
```

---

## 4. Deploy to a VM (EC2 / VPS)

We deploy to a VM — the app runs as a long-lived Node process behind nginx.

### 4.1 One-time server setup

```bash
# Node 20 LTS (via nodesource) + PM2 process manager
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx
sudo npm i -g pm2

# app user + code
git clone git@github.com:payonus/payonus-website.git /var/www/payonus-website
cd /var/www/payonus-website
```

### 4.2 Environment

Put secrets in a file the process manager loads (never commit it):

```bash
# /var/www/payonus-website/.env.production   (chmod 600)
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
```

Next.js auto-loads `.env.production` on `next start`.

### 4.3 Build & run under PM2

```bash
npm ci
npm run build
PORT=3000 pm2 start "npm run start" --name payonus-website
pm2 save          # persist the process list
pm2 startup       # generate the boot service (run the printed command once)
```

### 4.4 nginx reverse proxy (TLS terminates here)

```nginx
server {
  server_name payonus.com www.payonus.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Then issue a cert (e.g. `sudo certbot --nginx -d payonus.com -d www.payonus.com`)
and reload: `sudo nginx -t && sudo systemctl reload nginx`.

### 4.5 Deploying updates

```bash
cd /var/www/payonus-website
git pull
npm ci
npm run build
pm2 restart payonus-website
```

> Optional: containerize on the VM instead of PM2 — `node:20-alpine`, `npm ci &&
> npm run build`, `CMD ["npm","run","start"]`, run with
> `-e GOOGLE_SHEET_WEBHOOK_URL=... -p 3000:3000`. Not required.

---

## 5. Notes

- **Rotate the Slack webhook** before/after go-live if it has been shared around —
  regenerate it in the Slack app → Incoming Webhooks and update the env var.
- The build fails if a `webpack` config is present (Turbopack is the default in
  Next 16); this project has none, so builds are clean.
- Node 18 is **not** supported by Next 16 — use Node 20.9+.
