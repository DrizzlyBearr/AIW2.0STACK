# Brand DNA Extraction Report
# Client: Millionaire Contracts
# Generated: 2026-05-22
# Stage: 7

---

## Confidence Score: 0.77 / 1.00

Above the 0.70 gate. Proceeding. Operator approval required before Stage 9.

---

## Pass Scores

| Pass | Score | Notes |
|------|-------|-------|
| Pass 1: Logo analysis | 0.40 | No logo available. MANUAL-NEEDED.md filed. All logo-dependent values derived from research signals and niche defaults. |
| Pass 2: Palette synthesis | 0.85 | Niche default palette applied. Values are validated against WCAG AA for white text on primary (#0F1923 passes at ~14:1 contrast). Accent (#0EA5E9) passes on dark primary. No logo dominants to cross-check against. |
| Pass 3: Typography | 1.00 | Inter locked by brief instruction. Clean sans register matches professional-peer voice. No logo character to cross-check. |
| Pass 4: Hero mood | 1.00 | Dark, high-contrast aesthetic confirmed by copy voice, niche positioning, and SalesHive-register reference. Dark panel hero prescribed. |
| Pass 5: Motif | 0.60 | No logo motif. "Contracts" keyword maps loosely to geometric precision. "geometric-grid" niche default applied. No keyword-to-motif table match. |

**Aggregate: (0.40 + 0.85 + 1.00 + 1.00 + 0.60) / 5 = 0.77**

---

## Uncertain Fields

### Logo-dependent (all flagged LOW confidence)

- `palette.primary` and all palette tokens: derived from niche defaults, not logo dominants. Once the logo is supplied, run Pass 2 again to verify the palette matches or update accordingly.
- `shape_motif`: set to `geometric-grid` (niche default). If the logo contains a distinctive mark (lightning bolt, shield, angular monogram, etc.), update `shape_motif` to match.
- `corner_overlay.motif`: same as shape_motif, update when logo is supplied.
- `typography.heading` / `typography.body`: set to Inter (locked by brief). If the actual logo uses a different typeface, brief specifies Inter regardless. No change needed.
- `copy.hero.imageAlt`: written to describe a generic sales dashboard. Update when hero image is generated in Stage 9.

### Pending from Katleho

- `reviews.items`: no client testimonials available. Two pull-quote slots in copy-deck.json are marked PENDING with format instructions for Katleho.
- `copy.testimonials.videoPlaceholder`: PENDING. A 60-90 second founder video testimonial should be supplied and embedded.
- `team.founder` photo: no founder photo available. Filed in asset-manifest.json as non-blocking for Stage 9.

---

## Source Map

| Field group | Source |
|-------------|--------|
| company.name, shortName, url | research.json > company |
| company.description | research.json > company.description |
| company.serviceRegion | research.json > region_marketing |
| contact.email | research.json > contact.email |
| contact.phone | research.json > contact.phone (null, intentionally) |
| address | research.json > address (all null, remote-first) |
| hours, businessHours | research.json > business_hours (null, not applicable) |
| social.linkedin | research.json > social.linkedin |
| team.founder | research.json > team.founder |
| palette | Niche defaults prescribed in factory brief + WCAG validation |
| typography | Brief instruction (Inter locked) |
| voice_register | research.json > brand_voice_keywords + copywriting.md |
| shape_motif | Niche default (geometric-grid) |
| services | research.json > services (all 4) |
| process_steps | strategy.json > processSteps |
| faq | copy-deck.json > faq.items |
| copy.hero | copy-deck.json > hero |
| copy.heroTrustChips | copy-deck.json > hero.trustChips |
| copy.cta, formHeader, etc. | copy-locks.json (locked phrases) |
| copy.founder | about.md |
| reviews | research.json > reviews (all zero, no public profiles) |
| serviceAreas | [] (remote-first, confirmed) |
| trust_badges | [] (no badges yet, confirmed) |
| credit.agency | "Millionaire Contracts" (student-facing attribution) |

---

## Flags for Operator

1. **Logo is the primary gap.** All palette, motif, and corner-overlay values are niche defaults. Once Katleho supplies the logo (SVG preferred, high-res PNG acceptable), re-run Pass 1 and Pass 2 to confirm or update. File required at: `Millionaire Contracts Assets/logo/logo-original.[ext]`

2. **Testimonials are pending.** Two pull-quote slots and one video embed slot are PENDING in copy-deck.json. The build will render placeholder tiles. Katleho must supply verbatim quotes and a video before the site goes live.

3. **Founder photo is pending.** Stage 9 hero image generation can proceed without it, but the about page and founder section will be text-only until a photo is supplied. File required at: `Millionaire Contracts Assets/founder-photos/katleho-mohlomi.[ext]`

4. **Palette approved on niche defaults.** If Katleho has brand colour preferences that differ from the navy + sky-blue palette, flag them before Stage 9. Changing the palette after Stage 10.1 build requires a rebuild.

5. **No review data.** The reviews section will render zero stars and no review cards. The stats bar and case study cards carry the trust load instead. This is consistent with the copy-deck's trust strategy.

---

## Decision Gate

Confidence 0.77 is above the 0.70 gate. The brand-dna.json is complete and passes structural validation.

**HALT: Human approval required before Stage 9.**

Run `/approve-brand-dna` after the operator reviews and confirms the values above.
