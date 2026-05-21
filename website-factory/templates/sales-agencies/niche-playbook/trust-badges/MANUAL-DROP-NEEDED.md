# Manual Trust Badge Drop Required

The following badge image files are referenced in `trust-signals.json` but cannot be
auto-scraped because they require client account access or manual download from the issuing platform.

Stage 4 (asset-scraper) will flag these as MISSING if they are not present before Stage 10 build.

---

## Required badges for this niche

### 1. Clutch Top B2B Sales Outsourcing Company

- **Filename:** `clutch-top-b2b-sales.svg` or `clutch-top-b2b-sales.png`
- **Drop to:** `website-factory/templates/sales-agencies/niche-playbook/trust-badges/`
  OR per-client: `clients/[Client Name] Assets/badges/clutch-top-b2b-sales.svg`
- **Where to get it:** Log in to the client's Clutch.co account and download the current badge SVG from the profile dashboard.
- **Issuer URL:** https://clutch.co/profile/[client-slug] -- check that the badge is current year.
- **Note:** The badge image URL changes annually when Clutch updates rankings. Always download fresh before each build.

---

### 2. G2 High Performer or Leader Badge

- **Filename:** `g2-high-performer.svg` or `g2-high-performer.png`
- **Drop to:** `website-factory/templates/sales-agencies/niche-playbook/trust-badges/`
  OR per-client: `clients/[Client Name] Assets/badges/g2-high-performer.svg`
- **Where to get it:** Log in to the client's G2 account. Navigate to Badges section and download the current badge.
- **Issuer URL:** https://www.g2.com/products/[client-slug]/reviews
- **Note:** Use only if the client has a verified G2 profile with reviews. Do not fabricate G2 badges.

---

## Optional badges

The following badges are recognized by trust-signals.json but are NOT required for launch.
Add them if the client holds the relevant credentials.

### HubSpot Partner Badge
- **Filename:** `hubspot-partner.svg`
- **Issuer URL:** https://www.hubspot.com/partners
- Add if: client is a certified HubSpot partner.

### Salesforce Partner Badge
- **Filename:** `salesforce-partner.svg`
- **Issuer URL:** https://partners.salesforce.com
- Add if: client is a registered Salesforce partner.

### SOC 2 Compliant Badge
- **Filename:** `soc2-compliant.svg`
- **Issuer:** AICPA / audit firm
- Add if: client has completed SOC 2 Type I or Type II audit. Attach audit summary document.

---

## Drop procedure

1. Download the badge file from the issuer.
2. Name the file exactly as listed above (lowercase, hyphens, correct extension).
3. Drop into `public/badges/` in the per-client working directory before Stage 10 build.
4. Stage 4 will confirm the file is present and non-zero during the asset audit.
5. If the badge is missing at Stage 10, the build proceeds but `brand-dna.trust_badges` will be empty and no badges will render.
