# Copy-deck rules for sales-agencies

Seeded from AIW 2.0 research stack, niche: sales-agencies.
Agency: Millionaire Contracts. Seeded: 2026-05-22.

Every copy-deck for a client in this niche must satisfy the rules below.
These are summary pointers. The build agent loads the canonical sources
directly at Stage 10.1 -- do not duplicate niche data here.

---

## Hero headline pattern

Pull from this format (from `03-copy-patterns.md`):

- "[Audience] get [specific outcome] in [timeframe] -- or we keep working until they do."
- "Stop being the only salesperson in your company."
- "Predictable pipeline. Without the overhead."
- "You've built a great product. Now let's build the sales function that sells it."

Max 12 words. Inter 800. White on dark. No hedging. No adjectives that are not outcomes.

## Primary CTA (locked -- never change without updating copy-locks.json)

"Book a Free Strategy Call"

Source: `templates/sales-agencies/niche-playbook/copy-locks.json` -> `ctaPrimary`

## Secondary CTA (locked)

"See Our Results"

Source: `templates/sales-agencies/niche-playbook/copy-locks.json` -> `ctaSecondary`

---

## End-customer phrases to echo verbatim (top 5)

These exact phrases or close variants must appear in the body copy somewhere in the deck:

1. "I'm the only one selling"
2. "I hired a rep and it didn't work"
3. "I need someone who can hit the ground running"
4. "We need consistent pipeline"
5. "They won't understand my business"

Source: `research/02-niche-research/sales-agencies/02-customer-voice.md`

---

## End-customer fears to address in FAQ (top 5)

The FAQ must contain answers to at least 3 of these 5 fears:

1. "They won't understand my business well enough to sell it" -- address with market-depth proof and named client industries
2. "I'll pay for months and get nothing" -- address with the risk-reversal guarantee from copy-locks.json
3. "I'll have to manage them constantly" -- address with the reporting cadence (weekly Monday reports, live CRM)
4. "The reps won't care as much as I do" -- address with rep placement model and quota alignment
5. "I'll lose control of how my company is positioned" -- address with playbook-first approach and brand briefing process

Source: `research/02-niche-research/sales-agencies/02-customer-voice.md`

---

## Banned phrases (hard stops -- SOP QA gate will catch these)

These phrases are blocked for this niche. Do not write them in any section:

- "leverage" / "leveraging"
- "synergize" / "synergies"
- "robust"
- "seamless"
- "game-changer" / "game changing"
- "cutting-edge"
- "unlock your potential"
- "revolutionize"
- "we love what we do"
- "passion for sales"
- Generic claim without a number: "we help companies grow revenue" -- refused

Full blocklist: `references/copy/ai-vocab-blocklist.md` + `templates/sales-agencies/niche-playbook/copy-blocklist-additions.md`

---

## Trust elements to lead with (top 5, in order)

Copy must support these trust signals -- the component already renders them; the copy-deck feeds them:

1. Quantified case study: named client + specific number + timeframe. Format: "MRR from $80K to $162K in 4 months." Never invent an outcome.
2. Clutch/G2 badge with star rating AND review count. "4.9 stars, 47 reviews" -- not just the badge.
3. Founder video testimonial: 60-90 seconds, specific outcome number in the body copy near the embed.
4. Named client logos only -- no silhouettes, no "trusted by 200+ companies" without names.
5. Founder bio: specific past result required ("closed $2M ARR at [company]"). Generic bio fails SOP QA.

Source: `research/02-niche-research/sales-agencies/05-trust-signals.md`

---

## Section order (from niche template HomePage.jsx -- do not reorder)

1. HeroSection
2. StatsBarSection
3. ProblemAgitateSection
4. SolutionSection
5. HowItWorksSection
6. CaseStudiesSection
7. ObjectionHandlingSection
8. TestimonialsSection
9. RiskReversalSection
10. PricingAnchorSection
11. FaqSection
12. CtaSection
13. FooterSection

ProblemAgitate is mandatory. Do not skip it even for well-known agencies.
ObjectionHandling is a standalone section -- not part of FAQ.

Source: `research/02-niche-research/sales-agencies/09-template-spec.md`

---

## Canonical sources (build agent loads these directly -- do not duplicate data here)

- Locked phrases: `templates/sales-agencies/niche-playbook/copy-locks.json`
- Voice + tone: `templates/sales-agencies/niche-playbook/copywriting.md`
- Vocabulary approved/banned: `templates/sales-agencies/niche-playbook/vocabulary.json`
- Per-niche SOP for copy: `templates/sales-agencies/.claude/sops/05-copy-deck.sop.md`
- Universal copy blocklist: `references/copy/ai-vocab-blocklist.md`
- Universal typographic standards: `references/copy/typographic-standards.md`

Source: `research/02-niche-research/sales-agencies/`, generated 2026-05-21
Template: `website-factory/templates/sales-agencies/`
Brief: `research/output/website-factory-brief.md`
