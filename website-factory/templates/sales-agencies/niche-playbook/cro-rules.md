# Sales Agencies Niche -- CRO Rules

Five conversion rules derived from niche research (Sub-tasks 2, 3, 5, 7, and 8).
These override generic CRO guidance for this niche.

---

## Rule 1: The primary CTA is always "Book a Strategy Call"

Not "Contact Us." Not "Get a Quote." Not "Learn More."

The buyer in this niche has one decision to make: whether to have a conversation. Every primary CTA across every page anchors to the lead form or a Calendly embed. The label must be specific: "Book a Free Strategy Call" or "Book My Free Strategy Call." Never vague verbs.

**Enforcement:** The CTA label is locked in copy-locks.json. Stage 6 copy-deck agent does not vary it.

---

## Rule 2: Outcome stat is the largest element on every proof card

On case study cards, testimonial cards, and stats-bar cells: the number is the headline. Not the client name. Not the service label. The result: "22 qualified meetings," "$760K pipeline," "4.9 stars."

Buyers in this category have been conditioned by Belkins, SalesHive, and Martal to expect specific numbers above the fold on every card. Generic claims are ignored.

**Enforcement:** CaseStudiesSection renders stat text at `text-4xl font-extrabold text-sky-500` above the problem/solution copy.

---

## Rule 3: The form has exactly five fields

The five fields in the lead form (first name, work email, company, revenue range, sales challenge) are the minimum qualification data needed before a call. Every field has a reason.

Adding a sixth field raises drop-off. Removing the revenue dropdown makes the conversation less prepared. This is the locked set.

**Enforcement:** CtaSection.jsx implements exactly these five fields. No additions without explicit client override and documented rationale.

---

## Rule 4: Trust elements appear above and below the fold

Trust is not a section. It is a layer. The pattern is:
- Hero: Clutch badge, star rating, review count.
- Stats-bar: outcome numbers immediately below hero.
- Case studies: named client outcomes as primary proof block.
- Testimonials: video first (video outperforms text 60,000:1 per niche research).
- Footer: Clutch badge repeated.

Buyers who scroll past the hero without committing need a second trust encounter before the form. The risk-reversal section serves as the final trust layer before the CTA.

**Enforcement:** Section order in HomePage.jsx mirrors this trust layering. Do not reorder without validating conversion impact.

---

## Rule 5: Risk reversal must be explicit, not implied

"We do our best" is not risk reversal. "If month two ends without a single meeting, we extend at no cost" is risk reversal.

The "burned before" fear is the second-highest objection in this niche (Sub-task 2). The guarantee or risk-reversal statement must be stated plainly in the ObjectionHandlingSection and repeated in the RiskReversalSection. It must name the specific condition, the specific remedy, and not require the buyer to ask for the terms.

If the client is not prepared to honor a guarantee, the risk-reversal section states the minimum commitment and what the client receives if targets are not met. It does not omit the risk-reversal block.

**Enforcement:** RiskReversalSection is always rendered in the page. Its content comes from brandDNA.copy.offers. Stage 6 copy-deck agent must populate these fields with a real guarantee or a real fallback statement.
