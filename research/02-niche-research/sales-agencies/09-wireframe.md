# Sales Agencies Niche -- ASCII Wireframe
# Phase 5a: Homepage + sub-page wireframes

Niche: sales-agencies
Mix: Belkins hero + Martal section order + custom risk-reversal

---

## Homepage Wireframe

### Section 1: hero (HeroSection.jsx)

Layout: centered, full-viewport-height
Composition: vertically stacked content block, centered column max-w-3xl

```
+------------------------------------------------------------------+
|  [NAV: Logo | Services  Case Studies  About | Book a Call btn]   |
+------------------------------------------------------------------+
|                                                                  |
|   [eyebrow: OUTSOURCED SALES FOR B2B FOUNDERS]                  |
|                                                                  |
|   [h1: Stop being the only salesperson in                       |
|        your company.]                                            |
|                                                                  |
|   [subheadline: We build the sales infrastructure,              |
|    reps, playbook, and pipeline management, so you              |
|    show up to calls and close.]                                  |
|                                                                  |
|   [btn: Book a Free Strategy Call]  [link: See Our Results]     |
|                                                                  |
|   [Clutch 4.9 ★★★★★ (47 reviews)] [420+ meetings booked]       |
|                                                                  |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.hero.eyebrow`
- `brandDNA.copy.hero.headline`
- `brandDNA.copy.hero.subheadline`
- `brandDNA.copy.buttonText`
- `brandDNA.reviews.rating`
- `brandDNA.reviews.googleCount`
- `brandDNA.trust_badges`

SSIM region weight: 0.25
Above-fold constraint: entire section visible at 900px viewport height

---

### Section 2: stats-bar (StatsBarSection.jsx)

Layout: full-bleed band, 4-column on desktop, 2x2 on mobile
Composition: dark strip immediately below hero, 4 stat cells with vertical dividers

```
+------------------------------------------------------------------+
| [420+           ] | [30+            ] | [12             ] | [4.9]|
| [Meetings Booked] | [Clients Served ] | [Industries     ] | [★ ] |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.heroTrustChips` (array of strings, each chip = one stat)
- `brandDNA.reviews.rating`

SSIM region weight: 0.10

---

### Section 3: problem-agitate (ProblemAgitateSection.jsx)

Layout: centered heading + 2-column card grid on lg+, stack on mobile
Composition: dark background, two pain cards side by side

```
+------------------------------------------------------------------+
|                   "Sound familiar?"                              |
|              [h2, centered, white]                               |
|                                                                  |
|  +-----------------------------+  +----------------------------+ |
|  | [Icon]                      |  | [Icon]                     | |
|  | You're the only one         |  | You hired a rep. It didn't | |
|  | selling in your company.    |  | work. Six months, $80K,    | |
|  | Revenue depends on you      |  | and you're back to doing   | |
|  | showing up every day.       |  | every call yourself.       | |
|  +-----------------------------+  +----------------------------+ |
|                                                                  |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.whyChoose.heading` (repurposed for section heading)
- `brandDNA.copy.whyChoose.body`
- `brandDNA.why_choose_us` (array of strings, pain point labels)

SSIM region weight: 0.08

---

### Section 4: solution (SolutionSection.jsx)

Layout: split-screen 60/40 on lg+, stacked on mobile
Left: heading + positioning copy. Right: 3-column service card strip (single column on mobile)

```
+------------------------------------------------------------------+
|  We build the sales function     | [Card: Dedicated SDR Reps]   |
|  that runs without you.          | [Card: Sales Playbook Build] |
|  [h2, dark ink]                  | [Card: Pipeline Management]  |
|                                  |                               |
|  [body: positioning copy]        |                               |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.services.heading`
- `brandDNA.copy.services.body`
- `brandDNA.services` (array: slug, name, body)

SSIM region weight: 0.07

---

### Section 5: how-it-works (HowItWorksSection.jsx)

Layout: centered column, 3-step horizontal on lg+, vertical stack on mobile
Composition: numbered badges with connector lines between steps

```
+------------------------------------------------------------------+
|            How We Build Your Pipeline                            |
|                                                                  |
|   [1]----[line]----[2]----[line]----[3]                         |
|   [Audit &       ] [Build &       ] [Scale &                   ]|
|   [Onboarding   ] [Launch        ] [Optimise                  ]|
|   [body copy    ] [body copy     ] [body copy                 ]|
|                                                                  |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.process.heading`
- `brandDNA.copy.process.body`
- `brandDNA.process_steps` (array: n, title, body)

SSIM region weight: 0.08

---

### Section 6: case-studies (CaseStudiesSection.jsx)

Layout: 3-column card grid on lg+, 1-column on mobile
Each card: industry tag pill | outcome stat | problem sentence | solution sentence | timeframe

```
+------------------------------------------------------------------+
|                   Client Results                                 |
|                                                                  |
|  +--------------------+ +-------------------+ +----------------+|
|  | [B2B SaaS]         | | [Professional Svcs| | [Manufacturing]||
|  |                    | |                   | |                ||
|  | 22 Qualified       | | $760K Pipeline    | | 14 Meetings    ||
|  | Meetings           | | Generated         | | in 45 Days     ||
|  | in 30 days         | | in 120 days       | |                ||
|  |                    | |                   | |                ||
|  | [1-line problem]   | | [1-line problem]  | | [1-line prob.] ||
|  | [1-line solution]  | | [1-line solution] | | [1-line sol.]  ||
|  +--------------------+ +-------------------+ +----------------+|
|                                                                  |
|            [Book a call to discuss your situation]               |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.gallery.heading` (repurposed for section label)
- `brandDNA.previous_projects` (case study data: alt, caption, category)

SSIM region weight: 0.20

---

### Section 7: objection-handling (ObjectionHandlingSection.jsx)

Layout: centered heading + 3-column card grid on lg+
Each card: objection in bold, 2-4 sentence response, icon

```
+------------------------------------------------------------------+
|            "What you're probably thinking"                       |
|                                                                  |
|  +-------------------+ +-------------------+ +----------------+ |
|  | [?]               | | [$]               | | [Clock]        | |
|  | "You won't        | | "I'll pay for     | | "This will     | |
|  | understand my     | | months and get    | | create more    | |
|  | business."        | | nothing."         | | work for me."  | |
|  |                   | |                   | |                | |
|  | [response copy]   | | [response copy]   | | [response copy]| |
|  +-------------------+ +-------------------+ +----------------+ |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.faq` (q/a pairs, first 3 used as objection/response)
- `brandDNA.copy.whyChoose.heading`

SSIM region weight: 0.08

---

### Section 8: testimonials (TestimonialsSection.jsx)

Layout: centered column, video top, 2-column pull-quotes below
Video: 16:9 embed, max-w-2xl centered. Pull quotes: lg:grid-cols-2

```
+------------------------------------------------------------------+
|                What Our Clients Say                              |
|                                                                  |
|     +----------------------------------------------+            |
|     |   [16:9 VIDEO EMBED -- Loom/YouTube]         |            |
|     |   brandDNA.images.testimonialVideo           |            |
|     +----------------------------------------------+            |
|                                                                  |
|   "----large quote----"     "----large quote----"               |
|   [Name, Title, Company]    [Name, Title, Company]              |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.reviews.items` (array of review objects: author, source, text)
- `brandDNA.reviews.rating`
- `brandDNA.reviews.googleLabel`

SSIM region weight: 0.10

---

### Section 9: risk-reversal (RiskReversalSection.jsx)

Layout: full-bleed accent gradient strip, centered content
Unique section -- not present in reference sites, built from scratch

```
+------------------------------------------------------------------+
| [sky gradient: from-sky-600 to-sky-800]                         |
|                                                                  |
|   "You don't pay for time. You pay for outcomes."               |
|   [h2, white]                                                    |
|                                                                  |
|   Most clients see their first qualified meeting within          |
|   30 days. If month two ends with no meeting booked, we         |
|   extend at no cost until we hit the target.                     |
|   [body, white/90]                                               |
|                                                                  |
|          [btn: Claim Your Guarantee -- white bg]                 |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.offers.heading` (repurposed for risk-reversal heading)
- `brandDNA.copy.offers.body`
- `brandDNA.copy.offers.detail`
- `brandDNA.copy.buttonText`

SSIM region weight: 0.08

---

### Section 10: pricing-anchor (PricingAnchorSection.jsx)

Layout: dark, centered column, max-w-2xl
Eyebrow | h2 | 3-bullet inclusion list | primary CTA

```
+------------------------------------------------------------------+
|                  [INVESTMENT]                                    |
|   Typical engagements start at $5,000 per month.                |
|   [h2, white]                                                    |
|                                                                  |
|   What's included:                                               |
|   * Dedicated SDR rep (or 2 part-time)                          |
|   * Sales playbook and ICP research                             |
|   * Pipeline management and weekly reporting                    |
|                                                                  |
|   A single $50K client contract pays back the full year.        |
|   [body, #94A3B8]                                               |
|                                                                  |
|          [btn: Book a Strategy Call]                             |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.offers.label`
- `brandDNA.copy.offers.heading`
- `brandDNA.copy.offers.detail`
- `brandDNA.special_offers` (array: label, description)
- `brandDNA.copy.buttonText`

SSIM region weight: 0.06

---

### Section 11: faq (FaqSection.jsx)

Layout: light background, centered column, max-w-3xl, accordion
5-7 questions. Chevron rotates on open.

```
+------------------------------------------------------------------+
|                Frequently Asked Questions                        |
|                                                                  |
|   [Q: How long does it take to get started?      ] [v]          |
|   [A: answer copy...]                                            |
|   --------------------------------------------------             |
|   [Q: What industries do you work with?          ] [v]          |
|   [A: answer copy...]                                            |
|   --------------------------------------------------             |
|   [Q: How do I know the reps understand my market?] [v]         |
|   [A: answer copy...]                                            |
|   --------------------------------------------------             |
|   [Q: What's included in onboarding?             ] [v]          |
|   [Q: Can I cancel if it's not working?          ] [v]          |
|   [Q: How do you report results?                 ] [v]          |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.faq.heading`
- `brandDNA.copy.faq.label`
- `brandDNA.faq` (array: q, a)

SSIM region weight: 0.06

---

### Section 12: cta-section (CtaSection.jsx)

Layout: dark, centered form card (max-w-2xl), heading above card
5-field form. inline confirmation on submit.

```
+------------------------------------------------------------------+
|         Ready to stop being the only salesperson?               |
|         [h2, white]                                              |
|         Tell us about your pipeline.                             |
|         [subhead, #94A3B8]                                       |
|                                                                  |
|   +----------------------------------------------------+         |
|   | First name       | Work email                      |         |
|   | Company name     | Monthly revenue [dropdown]      |         |
|   | Biggest sales challenge (textarea, 3 lines)        |         |
|   |                                                    |         |
|   | [Book My Free Strategy Call -- full width btn]     |         |
|   | No spam. One call, no commitment. [caption]        |         |
|   +----------------------------------------------------+         |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.copy.cta.heading`
- `brandDNA.copy.cta.body`
- `brandDNA.copy.formHeader`
- `brandDNA.copy.formSubtext`
- `brandDNA.copy.submitButton`
- `brandDNA.copy.privacyLine`

SSIM region weight: 0.10

---

### Section 13: footer (FooterSection.jsx)

Layout: deep dark, 4-column on lg+, stacked on mobile
Brand | Nav | Secondary | Legal

```
+------------------------------------------------------------------+
| [Logo]                | Services      | Case Studies | [Li] [Tw]|
| [tagline]             | How It Works  | About        |          |
|                       | Pricing       | Contact      |          |
|                       |               | Privacy      |          |
|------------------------------------------------------------------+
| [Copyright 2024 Agency] [Clutch badge]         [Privacy Policy] |
+------------------------------------------------------------------+
```

Brand-dna paths:
- `brandDNA.company.name`
- `brandDNA.company.tagline`
- `brandDNA.copy.copyright`
- `brandDNA.copy.footerCta`
- `brandDNA.social.linkedin`
- `brandDNA.trust_badges`

SSIM region weight: 0.04

---

## Sub-page Wireframes

### /services page (ServicesPage.jsx)

Sections: hero (page-specific) | service-cards (expanded) | how-it-works | case-studies | cta-section

Hero variant: full-width dark, h1 "Our Sales Services", subhead, single CTA.
Service cards: 3-column grid, expanded copy (200 words each).

---

### /case-studies page (CaseStudiesPage.jsx)

Sections: hero | case-study-grid (all studies) | cta-section

Hero: "Client Results", stats row (total meetings booked, avg pipeline per client).
Grid: 3-column, all case study cards with full 6-field spec from 08-starter-template.

---

### /about page (AboutPage.jsx)

Sections: hero | team-section | founder-story | values | cta-section

Team section: 2-4 cards, photo + name + background + LinkedIn.
Founder story: split-screen, photo left, narrative right.

---

### /contact page (ContactPage.jsx)

Sections: hero | cta-section (form) | faq

Simple layout. Primary focus: the form.

---

## Section order (for App.jsx routing reference)

```
1.  HeroSection
2.  StatsBarSection
3.  ProblemAgitateSection
4.  SolutionSection
5.  HowItWorksSection
6.  CaseStudiesSection
7.  ObjectionHandlingSection
8.  TestimonialsSection
9.  RiskReversalSection
10. PricingAnchorSection
11. FaqSection
12. CtaSection
13. FooterSection
```
