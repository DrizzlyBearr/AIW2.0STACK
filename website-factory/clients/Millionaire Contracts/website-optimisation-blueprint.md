# Website Optimisation Blueprint

A repeatable playbook based on what we built for Millionaire Contracts. Use this to bring another site up to the same standard: a fast React site, a secure newsletter system, branded email, and clean SEO.

---

## 1. The stack

| Layer | Tool | Role |
|---|---|---|
| Frontend | Vite + React + React Router + Tailwind CSS | The website itself, single-page app |
| Hosting | Vercel | Serves the site, global CDN, deploys via CLI |
| Database | Supabase (Postgres) | Stores newsletter subscribers, private |
| Server logic | Supabase Edge Functions | Handles subscribe/confirm/unsubscribe securely |
| Email | Resend | Sends transactional email from your domain |
| Bot protection | Cloudflare Turnstile | Blocks bots on the signup form |
| DNS / domain | GoDaddy (or wherever the domain lives) | Domain records for email + site |

The key principle: the browser never talks to the database directly. Everything sensitive runs server-side in edge functions. This is what keeps subscriber data safe from outsiders.

---

## 2. Performance optimisation (the speed work)

These are the changes that make a React site load faster. Apply each one.

### a. Code splitting (lazy load routes)
Instead of shipping every page in one giant JavaScript file, load each page only when visited. The home page stays eager (loads immediately) so it paints fast; everything else is lazy.

- In `App.jsx`, wrap every non-home page in `React.lazy(() => import('./pages/...'))`
- Keep the home page as a normal import
- Wrap the routes in `<Suspense>` with a fallback that shows the navbar (so something paints instantly)

### b. Font loading
Only block the page render for fonts used on every page. Load the rest in the background.

- In `index.html`, split the Google Fonts into two `<link>` tags
- Critical fonts (used sitewide): normal stylesheet link
- Secondary fonts (used on a few pages): `media="print" onload="this.media='all'"` so they load async

### c. Self-host the logo
External image CDNs add a DNS lookup and round trip on every page. Host the logo on your own domain instead.

- Save the logo into the `public/` folder
- Reference it as `/logo.png` everywhere (navbar, footer, favicon, schema)
- Add `<link rel="preload" as="image" href="/logo.png" />` in `index.html`

### d. Vendor chunk splitting
Split React itself into its own cached file so returning visitors do not re-download it.

- In `vite.config.js`, add a `manualChunks` rule grouping `react`, `react-dom`, `react-router-dom`

### e. Reality check on testing
PageSpeed Insights on "Slow 4G" is the harshest possible test and punishes all React apps. For a true picture, test on the Desktop tab too, and know that real users on normal connections see much better speeds. The deeper fix (if a top score is required) is pre-rendering the HTML at build time, which is a larger project.

---

## 3. Secure newsletter system

### Database (Supabase)
Three tables, all with Row Level Security on and zero public access:

- `subscribers` — email, hashed email (unique), confirmed flag, confirmation token, unsubscribe token (UUID), active flag, timestamps
- `rate_limits` — hashed IP, action, timestamp (stops signup spam)
- `audit_log` — action, hashed email, hashed IP, metadata (a record of every event)

Emails and IPs are stored as SHA-256 hashes, never plain text where it matters for privacy.

### Edge functions (the server logic)
Three functions, each handling one job, all using the service role key server-side:

1. **subscribe** — runs 7 security checks, then sends a confirmation email
2. **confirm** — verifies the token, marks the subscriber confirmed, sends the welcome email
3. **unsubscribe** — verifies the UUID token, marks them inactive, logs it

### The 7 security layers on subscribe
1. Honeypot field (hidden input bots fill in, humans never see)
2. Cloudflare Turnstile token check
3. IP rate limiting (max 3 attempts per hour)
4. Origin check (only your domain can call it)
5. Email format validation
6. Disposable/temp email domain blocklist
7. Signed UUID tokens for confirm and unsubscribe (cannot be guessed)

### Double opt-in flow
Subscribe → confirmation email → click link → confirmed → welcome email. This keeps your list clean and your sender reputation high.

### Unsubscribe safety
The unsubscribe page asks the user to click a button to confirm, rather than unsubscribing on page load. This stops email security scanners from accidentally unsubscribing people when they preview the email.

---

## 4. Branded email

- Verify your domain in Resend by adding its DNS records at your domain host
- Send from a branded address like `newsletter@yourdomain.com`
- No mailbox needed, Resend handles sending, the DNS records authorise it
- Every email uses an HTML template with your logo in the header, your brand colours, and a footer with your details and an unsubscribe link
- For the sender avatar (the picture next to your name in Gmail): set up a Gravatar on the sending address. For the verified blue tick logo: set up BIMI, which needs DMARC enforcement on your domain

---

## 5. SEO basics (already solid, replicate them)

- `sitemap.xml` in the public folder listing every route with priority and change frequency
- Per-page meta tags (title, description) via a reusable SEO component
- Open Graph and Twitter card tags in `index.html` for link previews
- Organization schema (JSON-LD) in `index.html`
- Newsletter archive: host old issues as pages on the site (not just in email) so they get indexed and pull in search traffic

---

## 6. Deployment workflow

```
cd "path/to/website-folder"
git pull
npx vercel --prod
```

Watch out for: if you have multiple Vercel projects connected to one repo, the unused ones will send failed-build emails. Disconnect Git on any project you deploy manually via CLI.

---

## Order of operations for a new site

1. Build the Vite + React site (or start from the existing one)
2. Apply all five performance optimisations
3. Self-host the logo and key assets
4. Stand up Supabase: three tables with RLS
5. Write and deploy the three edge functions
6. Verify the domain in Resend, build the branded email templates
7. Set up Cloudflare Turnstile, wire the keys in
8. Add sitemap, meta tags, schema
9. Deploy via Vercel CLI
10. Test the full flow: subscribe, confirm, welcome email, unsubscribe
