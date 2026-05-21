# Sales Agencies Niche -- Template Design Spec
# Phase 5a: Pixel-accurate design specification

Research date: 2026-05-21
Niche: sales-agencies
Winner mix: Belkins hero + trust stack / Martal section order + objection handling

---

## 1. Color System

| Token | Hex | RGB | Use |
|---|---|---|---|
| `primary` | #0F1923 | 15 25 35 | Hero, nav, footer, all dark sections |
| `primary-dark` | #080E14 | 8 14 20 | Deepest dark -- hover states, nav scroll |
| `primary-slate` | #1A2535 | 26 37 53 | Dark surface cards, elevated dark panels |
| `accent` | #0EA5E9 | 14 165 233 | CTA buttons, stat numbers, active links, borders |
| `accent-light` | #38BDF8 | 56 189 248 | Hover accent, secondary highlights |
| `accent-dark` | #0284C7 | 2 132 199 | Pressed CTA, focus ring |
| `neutral` | #F8FAFC | 248 250 252 | Light section backgrounds (testimonials, FAQ) |
| `neutral-dim` | #F1F5F9 | 241 245 249 | Slightly deeper light, alternating rows |
| `silver` | #94A3B8 | 148 163 184 | Secondary text on dark, captions |
| `ink` | #1E293B | 30 41 59 | Body text on light sections |

Two-accent rule: `#0EA5E9` carries ALL action meaning. No second accent color in any component. Decorative variety stays in the slate/navy family only.

---

## 2. Typography

All text uses **Inter** (Google Fonts). Single-family system.

Google Fonts import:
`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`

### Size and weight scale

| Level | CSS size | Weight | Line-height | Use |
|---|---|---|---|---|
| h1 | 3.5rem (56px) | 800 | 1.1 | Hero headline only |
| h2 | 2.25rem (36px) | 700 | 1.2 | Section headings |
| h3 | 1.5rem (24px) | 600 | 1.3 | Card titles, sub-section heads |
| h4 | 1.125rem (18px) | 600 | 1.4 | Form labels, nav labels |
| body | 1rem (16px) | 400 | 1.6 | All body copy |
| caption | 0.875rem (14px) | 400 | 1.5 | Helper text, legal, footnotes |
| label | 0.75rem (12px) | 500 | 1.4 | Eyebrows, badge text, small-caps labels |
| stat | 3rem (48px) | 800 | 1.0 | Stats bar numbers, case study outcome numbers |

Mobile scale-down: h1 -> 2.25rem, h2 -> 1.75rem, stat -> 2.25rem.

---

## 3. Spacing and Grid System

Base unit: 4px (Tailwind default spacing scale).

| Scale label | Value | Tailwind class |
|---|---|---|
| xs | 8px | p-2 / gap-2 |
| sm | 16px | p-4 / gap-4 |
| md | 24px | p-6 / gap-6 |
| lg | 32px | p-8 / gap-8 |
| xl | 48px | p-12 / gap-12 |
| 2xl | 64px | p-16 / gap-16 |
| 3xl | 96px | p-24 / gap-24 |

Page max-width: `max-w-7xl` (1280px). Horizontal padding: `px-4 sm:px-6 lg:px-8`.

Section padding: `py-16 lg:py-24` for full sections. `py-8 lg:py-12` for compact sections (stats bar, trust bar).

Grid: 12-column on desktop (lg+). Components use named column spans:
- Full bleed: `col-span-12`
- Split 50/50: `col-span-6` each
- Split 60/40: `col-span-7` / `col-span-5`
- Thirds: `col-span-4` each
- Quarter cards: `col-span-3` each

---

## 4. Hero Composition (Belkins-style)

The hero is the highest-fidelity section. It must be above the fold on 1440px desktop without scrolling.

### Layout
- Full-width, full-viewport-height min (`min-h-screen`)
- Background: `#0F1923` with subtle radial gradient to `#0D1117` in corners
- Optional: low-opacity geometric grid texture (12% opacity SVG pattern) or radial glow at `#0EA5E9` 3% opacity
- Centered content column, max-width 860px, centered horizontally
- Vertical rhythm: eyebrow | h1 | subheadline | CTA group | trust chips | stats bar

### Content layers (top to bottom)
1. **Eyebrow** -- 12px uppercase Inter 500, `#0EA5E9`, letter-spacing 0.12em. E.g. "Outsourced Sales for B2B Founders"
2. **H1 headline** -- 56px Inter 800, white, line-height 1.1. Max 12 words.
3. **Subheadline** -- 18px Inter 400, `#94A3B8`, line-height 1.6. Max 25 words.
4. **CTA group** -- Primary button left, secondary text-link right. Stack vertically on mobile.
   - Primary: bg `#0EA5E9`, text white, rounded-md, `px-8 py-4`, Inter 600, 16px. Hover: bg `#0284C7`.
   - Secondary: text `#94A3B8`, underline on hover, same size.
5. **Trust chips** -- Inline row below CTA. Clutch badge, star rating, review count, one stat.
6. **Divider** -- 1px `#1E3A5F`, full width, at bottom of hero or top of stats-bar

### Background treatment
No stock photography of sales teams. Two acceptable options:
- Option A: Abstract geometric grid SVG at 8% opacity on `#0F1923` (signals precision)
- Option B: Single high-quality founder photo, right-aligned, 50% of hero width, with left-side gradient fade

---

## 5. Section-by-Section Visual Spec

### Section 1: HeroSection
See Hero Composition above.
SSIM weight: 0.25. Threshold: 0.90.
Background: dark (`primary`).

### Section 2: StatsBarSection
- Full-width band. Background: `#1A2535` (slightly lighter than hero to create separation).
- 4-column layout on desktop, 2x2 on mobile.
- Each cell: large stat number in `#0EA5E9` at 48px / 800 weight, label in small-caps `#94A3B8` at 12px below.
- Padding: `py-8 lg:py-12`.
- No card borders. Vertical dividers between cells (`border-r border-[#1E3A5F]`).
SSIM weight: 0.10. Threshold: 0.88.

### Section 3: ProblemAgitateSection
- Background: dark (`primary`).
- Heading: h2, white. "Sound familiar?"
- Two cards side by side (lg:grid-cols-2). Each card: dark surface (`#1A2535`), 1px border `#1E3A5F`, rounded-lg, p-8.
- Card 1: founder-as-only-salesperson pain. Card 2: failed-hire cost pain.
- Each card: icon (accent color), bold pain statement, 2-3 sentence body in `#94A3B8`.
- Section CTA: none. Pure problem statement.
SSIM weight: 0.08. Threshold: 0.85.

### Section 4: SolutionSection
- Background: alternates to light (`#F8FAFC`) for visual rhythm break.
- Split-screen lg:grid-cols-2. Left: heading + copy. Right: 3-column service card strip.
- Heading: h2, dark ink. Subhead: body, ink.
- Service cards: white bg, 1px border `#E2E8F0`, rounded-md, `p-6`. Icon (accent), title h3, body caption.
SSIM weight: 0.07. Threshold: 0.85.

### Section 5: HowItWorksSection
- Background: dark (`primary`).
- Centered column, max-width 760px.
- 3 steps in vertical stack on mobile, horizontal flex with connectors on lg+.
- Each step: circle number badge (accent bg, white text), h3 step title, body copy.
- Connector lines between steps: 1px dashed `#1E3A5F` on desktop.
- Badge circle: 48px diameter, `bg-sky-500`, Inter 700 number.
SSIM weight: 0.08. Threshold: 0.85.

### Section 6: CaseStudiesSection
- Background: `#F8FAFC` light.
- `lg:grid-cols-3` card grid (2 cols + CTA below on mobile).
- Each card: white bg, 1px border `#E2E8F0`, rounded-lg, `p-8`, shadow-sm.
  - Industry tag pill at top: small pill, sky-500/10 bg, sky-700 text, text-xs.
  - Outcome stat: 48px, `#0EA5E9`, bold. Timeframe in caption below.
  - Problem sentence: caption, ink, mt-4.
  - Solution sentence: caption, `#64748B`.
- Section CTA: outlined button in accent, centered below grid.
SSIM weight: 0.20. Threshold: 0.90.

### Section 7: ObjectionHandlingSection
- Background: dark (`primary`).
- Heading h2: "What you're probably thinking"
- Three cards in `lg:grid-cols-3`. Each card: dark surface, border, p-8.
  - Objection in bold Inter 600 (h3 size). 2-4 sentence response in body.
  - Icon: X or shield or question mark in accent.
SSIM weight: 0.08. Threshold: 0.85.

### Section 8: TestimonialsSection
- Background: `#F8FAFC` light.
- 16:9 video embed centered, max-width 720px, rounded-lg, shadow-md.
- Two text pull-quotes below the video: lg:grid-cols-2. Each quote: italic body copy, name + role in caption below.
- Quote marks: large decorative opener in `#0EA5E9` at 60px.
SSIM weight: 0.10. Threshold: 0.88.

### Section 9: RiskReversalSection
- Background: accent gradient -- `from-sky-600 to-sky-800`.
- Full-width band. Centered content.
- Large h2 in white. Body copy in white/90. Primary white button (white bg, accent text).
- Risk-reversal statement: "Most clients see their first qualified meeting within 30 days."
SSIM weight: 0.08. Threshold: 0.85.

### Section 10: PricingAnchorSection
- Background: dark (`primary`).
- Centered column, max-width 640px.
- Eyebrow: "Investment" in accent caps.
- h2: anchor price statement. Body: what's included (3-item bullet list).
- Bottom CTA: primary button in accent.
SSIM weight: 0.06. Threshold: 0.85.

### Section 11: FaqSection
- Background: `#F8FAFC` light.
- Accordion component: each item has border-b `#E2E8F0`, py-4, question in Inter 600, answer in body.
- Chevron icon rotates 180deg on open (accent color). Transition: 200ms ease.
- 5-7 questions max.
SSIM weight: 0.06. Threshold: 0.82.

### Section 12: CtaSection
- Background: dark (`primary`).
- Heading h2 in white. Subhead in `#94A3B8`.
- Form card: dark surface `#1A2535`, border `#1E3A5F`, rounded-xl, p-8, max-w-2xl centered.
- 5 fields: First name, Work email, Company, Revenue range (dropdown), Sales challenge (textarea).
- Submit button: full-width, accent bg, white text, Inter 700.
- Privacy line: caption, `#64748B`.
SSIM weight: 0.10. Threshold: 0.88.

### Section 13: FooterSection
- Background: `#080E14` (deepest dark).
- 4-column layout: brand/tagline | nav links | secondary nav | social + legal.
- Logo top-left of brand column. Tagline in caption `#94A3B8`.
- Nav links: caption Inter 400, `#94A3B8`, hover white.
- Clutch badge: bottom-right of footer.
- Copyright line: caption `#64748B`, border-t `#1E3A5F`.
SSIM weight: 0.04. Threshold: 0.82.

---

## 6. Motion Preset

Preset: **subtle** -- entrance animations only, no looping, no parallax.

- Fade-in + translate-y-4 on scroll into view (IntersectionObserver).
- Duration: 400ms. Easing: cubic-bezier(0.16, 1, 0.3, 1) (spring-out).
- Stagger between sibling elements: 80ms.
- Stats bar numbers: count-up animation from 0 to final on first viewport entry.
- Accordion: max-height 0 -> auto with 200ms ease, no layout shift.
- CTA button: scale 0.97 on press (transform), 100ms.
- All motion wraps with `@media (prefers-reduced-motion: reduce)` guard: durations collapse to 0.01ms.

---

## 7. Theme Mode

**Dark base with light section alternates.**

Dark sections: hero, stats-bar, problem-agitate, how-it-works, objection-handling, pricing-anchor, cta-section, footer.
Light sections: solution, case-studies, testimonials, faq.
Accent strip (risk-reversal): sky-gradient.

Text on dark: primary `#FFFFFF`, secondary `#94A3B8`, muted `#64748B`.
Text on light: primary `#1E293B`, secondary `#475569`.

---

## 8. Fidelity Thresholds Summary

| Section | SSIM Threshold | Weight |
|---|---|---|
| HeroSection | 0.90 | 0.25 |
| CaseStudiesSection | 0.90 | 0.20 |
| TestimonialsSection | 0.88 | 0.10 |
| CtaSection | 0.88 | 0.10 |
| StatsBarSection | 0.88 | 0.10 |
| ProblemAgitateSection | 0.85 | 0.08 |
| HowItWorksSection | 0.85 | 0.08 |
| ObjectionHandlingSection | 0.85 | 0.08 |
| RiskReversalSection | 0.85 | 0.08 |
| SolutionSection | 0.85 | 0.07 |
| FaqSection | 0.82 | 0.06 |
| PricingAnchorSection | 0.85 | 0.06 |
| FooterSection | 0.82 | 0.04 |

Aggregate weighted mean target: 0.90.
