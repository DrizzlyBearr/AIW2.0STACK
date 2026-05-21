# Sales Agencies Niche -- Design Vocabulary

Visual language guide for the build agent and design fidelity QA.

---

## Color palette

**Primary base:** #0F1923 (near-black, not pure black)
**Surface dark:** #1A2535
**Surface deeper dark:** #080E14
**Accent action:** #0EA5E9 (sky-500)
**Accent hover:** #0284C7 (sky-600)
**Light background:** #F8FAFC
**Body on dark:** #94A3B8 (slate-400)
**Body on light:** #1E293B (slate-800)

The accent (#0EA5E9) is the ONLY color that carries action meaning. Do not use a second accent color for decoration. All decorative variety stays within the slate/navy family.

---

## Typography

**Font family:** Inter, single-family system.
**Weights used:** 400 (body), 500 (labels, nav, captions), 600 (card titles, subheadings), 700 (section headings), 800 (h1, stats bar numbers).
**No other weights.** No italic except for testimonial quotes and objection headers.
**One H1 per page only.** Hero gets it. All other section headings are H2.

Scale:
- H1: 3.5rem / 800 / 1.1
- H2: 2.25rem / 700 / 1.2
- H3: 1.5rem / 600 / 1.3
- Body: 1rem / 400 / 1.6
- Caption: 0.875rem / 400 / 1.5
- Label: 0.75rem / 500 / 1.4 (uppercase, letter-spacing 0.12em)
- Stat: 3rem / 800 / 1.0 (stats bar and case study outcome numbers)

---

## Shape motif

**Sharp with accent radius.**

Cards: `rounded-lg` (8px). NOT round. NOT pill-shaped.
Buttons: `rounded-md` (6px). Compact. No round buttons.
Badges: `rounded-full` for small pill tags only (e.g., industry tags).
No gradient borders. No glass-morphism. No soft shadows on dark backgrounds.

Borders: 1px `#1E3A5F` on dark surfaces. 1px `#E2E8F0` on light surfaces.
Shadow: `shadow-sm` on light-background cards only. No shadows on dark cards.

---

## Layout principles

Max content width: 1280px (max-w-7xl).
Section padding: py-16 lg:py-24 for full sections, py-8 lg:py-12 for compact sections.
Horizontal padding: px-4 sm:px-6 lg:px-8.
Grid: 12-column baseline. Common splits: 50/50, 60/40, thirds, quarters.

**Never center-align body copy.** Center is reserved for eyebrow labels, section headings, and short hero subheadlines only. All body paragraphs are left-aligned.

---

## Theme alternation

Dark sections: hero, stats-bar, problem-agitate, how-it-works, objection-handling, pricing-anchor, cta-section, footer.
Light sections: solution, case-studies, testimonials, faq.
Accent strip: risk-reversal (sky-gradient).

The alternation is intentional. Do not put two light sections back to back. Do not put two dark sections back to back without the accent strip between.

---

## Visual tone

**Professional-aggressive.** Not warm or consultative. Not startup-casual.

Reference: SalesHive's aesthetic (dark, high-contrast, outcome-led) without platform over-engineering.

Prohibited:
- Rounded-corner-heavy "friendly startup" treatment
- Pastel backgrounds
- Lifestyle photography of smiling salespeople
- Decorative gradients not already specified in this vocabulary
- Any stock photography showing people in office meetings

Permitted:
- Abstract geometric grid textures at low opacity (precision signal)
- Single high-quality founder portrait photograph
- Dashboard/pipeline screenshot as supporting visual in case studies
- Accent radial glow on hero background (at 3-6% opacity maximum)

---

## Icon style

All icons use Heroicons outline style. Stroke width: 1.5px for decorative icons, 2px for functional icons (chevrons, close buttons). Icon color: text-sky-400 on dark backgrounds, text-sky-500 on light backgrounds. Never use filled icons for decorative purposes.

---

## Motion

Restrained preset. Entrance animations on scroll. Count-up for stats. Accordion expand for FAQ. No parallax. No auto-play. No looping animations. All wrapped in prefers-reduced-motion guard.
