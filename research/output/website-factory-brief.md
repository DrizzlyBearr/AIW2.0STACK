# Website Factory Brief
# Niche: sales-agencies
# Student: Katleho Mohlomi
# Generated: 2026-05-22
# Status: LOCKED

---

## Part A: Niche identity

```
niche: sales-agencies
nicheLabel: Sales Agencies and Sales Infrastructure Businesses
nicheCategory: professional-services / B2B

endCustomerProfile:
  who: "A founder or SMB owner with a working product, stuck doing every sales call themselves, one failed hire away from their next bad decision."
  decisionMoment:
    - Revenue plateau -- flat for 2+ consecutive quarters despite product-market fit, founder physically maxed out
    - The bad hire -- lost $60K-$80K on a rep who did not ramp, now needs a system before another hire
    - Growth mandate -- investor or board deadline forcing a pipeline the founder cannot fill alone
    - Burnout -- doing sales, delivery, product, and admin; sales is the last thing they want but the first thing the business needs
  topFears:
    - "They won't understand my business well enough to sell it"
    - "I'll pay for months and get nothing"
    - "I'll have to manage them constantly and it'll create more work, not less"
  topPains:
    - "I'm the only one selling"
    - "I hired a rep and it didn't work"
    - "I don't have time to manage a sales team"

agencyPositioningSentence: "I help sales agencies win the trust of founders who are stuck doing every sales call themselves -- exhausted, short on bandwidth, and afraid that handing off sales will make things worse -- so they choose your agency over every other option they are considering."

agencyOneLiner: "I build high-converting websites for sales agencies and sales infrastructure businesses."
```

---

## Part B: Niche-tailoring directives

### Active template

- Path: `website-factory/templates/sales-agencies/`
- Niche template registered in: `website-factory/config/template-routes.json` under `"byNiche": { "sales-agencies": "templates/sales-agencies" }`
- Source inspiration mix: Belkins.io hero + trust stack / Martal.ca section order + objection handling
- Visual personality: Dark authority -- navy/slate base with electric blue accent, single-family Inter typography, zero photography of generic sales teams, data and numbers as the primary trust mechanism

---

### Trust stack (top 5, in priority order for Stage 6 copy and Stage 10.3 uplift)

**1. Quantified case studies -- named client, specific number, timeframe**
- Format: "MRR from $X to $Y in Z months" or "22 qualified meetings and $760K pipeline in 120 days"
- Template already has: CaseStudiesSection.jsx with industry tag pill, 48px outcome stat, timeframe caption
- Copy rule: If the client cannot provide at least one case study with a real number and a real timeframe, the CaseStudiesSection must not render placeholder copy. Insert placeholder cards with copy that explicitly invites the client to add their first result. Never invent an outcome.
- Placement: Section 6 (after How It Works), and the case-studies page (`/case-studies`)

**2. Clutch / G2 review badges with star rating and review count**
- Badge registry in `niche-playbook/trust-signals.json`: clutch-top-b2b-sales.svg, g2-high-performer.svg
- Template badge slots: hero trust chips, floating strip, reviews section, footer
- Copy rule: Render the badge only if `brandDNA.reviews.googleCount` or a Clutch review count is available. "4.9 stars" alone is not enough -- must show the review count next to it. Minimum: "4.9 stars, 47 reviews."
- Note for operator: Badge SVG files must be manually placed in the client's `/badges/` folder before Stage 10 build. The MANUAL-DROP-NEEDED.md in the template notes this.

**3. Founder/client video testimonial, 60-90 seconds, specific outcome number**
- Template has: TestimonialsSection.jsx with 16:9 video embed (max-width 720px) plus two text pull-quotes
- Copy rule: The video embed must be sourced from the client's own Loom, YouTube, or Vimeo URL (`brandDNA.social.youtube` or a custom video URL field). If no video exists, the video slot must render a placeholder card that reads "Video testimonial coming soon -- we'll film this in week 4" rather than a broken embed.
- What a good video contains: 10-sec before state, 10-sec decision, 40-sec after with a specific outcome number. Speaker's name, title, company on screen.

**4. Named client logos in a social proof bar**
- Template has: StatsBarSection.jsx (4-cell stat strip) and trust_badges array in brand-dna
- Logos must be real, legible, named. No stock silhouettes. No "trusted by 200+ companies" without names.
- Copy rule: If the client has fewer than 3 recognisable client logos, do not render a generic logo wall. Show the stats bar only (meetings booked, clients served, industries, star rating). Logos can be added as the client grows.

**5. Team expertise and individual founder credibility**
- Template has: AboutPage.jsx with founder section and team section
- Copy rule: For single-founder/small-team sales agencies, the founder bio is the primary credibility signal. It must include: specific past role or achievement ("closed $2M ARR at [company]" or "led team of 8 SDRs at [company]"), a LinkedIn link, and a professional photo. Generic "passion for sales" bios do not pass the SOP QA gate.

---

### Hero composition (already in template -- brief carries forward for copy-deck and uplift stages)

- Background treatment: `#0F1923` dark base with radial gradient. No stock photography of sales teams.
  - Option A (default): abstract geometric grid SVG at 8% opacity (signals precision)
  - Option B: single high-quality founder photo, right-aligned, 50% hero width, with left-side gradient fade
- Subject: Founder or team photo if available; geometric grid if not
- Mood: Authoritative, data-driven, dark-professional. No warmth-over-substance. The buyer is sophisticated.
- H1 format: Max 12 words, Inter 800, white. Locked template default: "Stop being the only salesperson in your company."
  - Per-client variant: "[Audience] get [specific outcome] in [timeframe] -- or we keep working until they do."
- Primary CTA (locked): "Book a Free Strategy Call" -- from `niche-playbook/copy-locks.json`
- Secondary CTA (locked): "See Our Results" -- from `niche-playbook/copy-locks.json`
- Social proof inline: Clutch star rating + review count + one outcome stat ("420+ meetings booked")
  - Trust chips (locked defaults): "SDR reps deployed within 14 days" / "Full sales playbook built in week one" / "First qualified meetings typically in week two or three" / "Weekly pipeline reporting included"

---

### Section-by-section copy rules

For Stage 6 (copy-deck agent) and Stage 10.3 (uplift agent). These rules apply to every client in this niche. Per-client specifics overlay on top.

| Section | What the copy must convey for the end customer |
|---|---|
| HeroSection | The founder's exhaustion is named directly. The outcome is specific and time-bound. The risk reversal is implicit ("Book a Free Strategy Call" -- no commitment). |
| StatsBarSection | Four scannable numbers: meetings booked (total), clients served, industries covered, star rating. All numbers must be real client data or the locked niche defaults from copy-locks.json. |
| ProblemAgitateSection | Card 1: "I'm the only one selling" -- the personal cost of founder-led sales, named without softening. Card 2: "I hired a rep and it didn't work" -- the bad hire, named with the cost ($60K-$80K average). Heading: "Sound familiar?" No CTA in this section. |
| SolutionSection | Names the three things the agency does so the founder does not have to: prospecting, playbook build, pipeline management. Uses the phrase "you show up to calls and close" or a variant. |
| HowItWorksSection | 3-step process (already in `niche-playbook/process.json`). Step titles must use action verbs. No "we begin by" or "we start with." Copy must echo "hit the ground running" -- the customer's exact language. |
| CaseStudiesSection | At least one card with: industry tag, 48px outcome stat, timeframe, 1-sentence problem, 1-sentence result. No invented outcomes. If no client cases exist yet, the locked niche default card (SaaS example from synthesis.md: "MRR from $80K to $162K in 4 months") is used as a placeholder until replaced. |
| ObjectionHandlingSection | Three named objections with direct responses: (1) "They won't understand my business" -- answered with market depth proof. (2) "I'll pay for months and get nothing" -- answered with the risk-reversal guarantee. (3) "I'll have to manage them constantly" -- answered with the reporting cadence and weekly Monday reports. |
| TestimonialsSection | One video embed + two text pull-quotes. Pull-quote format: specific outcome in the quote body, founder name + company below. |
| RiskReversalSection | Exact locked phrase: "Most clients see their first qualified meeting within 30 days. If month two ends without a single meeting booked, we extend at no cost until we hit the target." -- from `niche-playbook/copy-locks.json`. This section must not be softened. |
| PricingAnchorSection | Eyebrow: "Investment" in accent caps. Anchor price statement: the client's actual starting price or "Engagements from $X/month." 3-item bullet list of what is included. Do not hide pricing. RevBoss publishes $2,500/month; it converts price-sensitive buyers faster. |
| FaqSection | 5-7 questions. Locked starter questions: (1) How quickly can you start? (2) What industries do you work with? (3) What does success look like in month one? (4) Do you work on commission or retainer? (5) What happens if we don't see results? |
| CtaSection | Form locked: First name, Work email, Company, Revenue range (dropdown), Sales challenge (textarea). Locked form header: "Tell us about your pipeline." Privacy line: "No spam. One call, no commitment. We review your situation before we talk." |
| FooterSection | Locked tagline: "Outsourced sales infrastructure for B2B founders." Clutch badge bottom-right. |

---

### Copy voice

**voice_register:** professional-peer (not authoritative-institution, not casual-brand)

The copy speaks from one experienced sales operator to another. It does not explain what sales is. It does not use startup slang. It names the exact things the prospect is experiencing without hedging. It is direct, uses short sentences, and trusts the reader to be sophisticated.

**Sample headlines (swipeable, from research):**

1. "Stop being the only salesperson in your company."
2. "Predictable pipeline. Without the overhead."
3. "We built the playbook so you don't have to."
4. "You've built a great product. Now let's build the sales function that sells it."
5. "[X] clients. [Y] industries. [$Z] in pipeline generated."

**Sample CTAs (from niche playbook + research):**

1. "Book a Free Strategy Call" (primary, locked)
2. "See Our Results" (secondary, locked)
3. "Start Building Pipeline" (variant for section CTAs)
4. "See Pricing" (variant for price-transparent clients)
5. "Talk to a Sales Expert" (variant for contact page)

**End-customer phrases to echo verbatim in copy-deck (top 10 from Sub-task 2):**

1. "I'm the only one selling"
2. "I hired a rep and it didn't work"
3. "I can't afford to build an in-house team yet"
4. "I need someone who can hit the ground running"
5. "We need consistent pipeline"
6. "I don't have time to manage a sales team"
7. "They won't understand my business"
8. "We booked [X] meetings in [Y] days"
9. "You can't hire salespeople until you know what works"
10. "Early sales is as much about learning as it is about selling"

**What the copy must NOT do:**

- Say "leverage" or "synergize" or "robust" or "seamless" -- see `niche-playbook/copy-blocklist-additions.md` and `references/copy/ai-vocab-blocklist.md`
- Use em-dashes
- Vague claims without numbers ("we help companies grow" -- refused by SOP QA gate)
- Generic headings ("Our Services," "Why Choose Us" -- replace with specifics: "What We Build for You," "Why Founders Trust Us Instead of Hiring In-House")
- Stock photography of smiling sales teams -- explicitly banned in hero composition rules

---

### SEO targets

**Primary keywords (high competition, contested by domain-authority incumbents):**

| Keyword | Intent | Who currently ranks |
|---|---|---|
| outsourced sales team | High | SalesHive, Martal, O8 Agency |
| sales outsourcing companies | High | Belkins, CIENCE, Martal, Clutch.co |
| B2B sales outsourcing | High | Belkins blog, CIENCE blog |
| fractional sales team | High | Sales Xceleration, Victory Lap |
| outsourced SDR | High | Operatix, SalesHive, Belkins |

**Secondary / long-tail keywords (lower competition, viable entry points for a new site):**

Cluster 1 -- Founder-led sales transition (ranking content is editorial, not service pages -- opportunity):
- "how to transition from founder-led sales"
- "when to hire first sales rep"
- "sales playbook for founders"
- "stop being the only salesperson"

Cluster 2 -- Sales infrastructure:
- "sales infrastructure for small business"
- "how to build a sales process"
- "sales system for B2B company"

Cluster 3 -- Cost and ROI (high conversion intent):
- "how much does outsourced sales cost"
- "outsourced sales ROI"
- "fractional VP of sales cost"
- "sales outsourcing pricing"

Cluster 5 -- Niche-specific (minimal competition, viable from day one):
- "outsourced sales for SaaS"
- "sales agency for startups"
- "fractional sales for professional services"
- "outsourced sales for small business"
- "sales consulting for founder-led business"

**Primary page targets:**

| Page | Title tag pattern | Primary keyword |
|---|---|---|
| Home (`/`) | "[Agency Name] -- Outsourced Sales Agency for B2B Founders" | outsourced sales team |
| Services (`/services`) | "Our Sales Services -- [SDR placement, playbook build, pipeline management]" | outsourced sales for founder-led business |
| Case Studies (`/case-studies`) | "Client Results -- [X] Meetings Booked, [Y] Pipeline Generated" | case studies / social proof |
| About (`/about`) | "About [Agency Name] -- Built by Founders Who Have Done It" | brand + trust |
| Contact (`/contact`) | "Book a Strategy Call -- [Agency Name]" | conversion page |

**Service pages:** Defined by sitemap (`/services`) -- outsourced SDR, sales playbook development, rep placement, pipeline management.

**Service-area pages:** Not applicable for this niche. Sales agencies serve clients nationally/globally. No city-specific service area pages required. `brandDNA.serviceAreas` should be left as `[]` unless the client specifically targets a geographic region.

**GBP optimization:** Optional. If the client has a physical address or local presence, a Google Business Profile with the `ProfessionalService` schema type is recommended. Most sales agencies are remote-first and do not have a GBP -- set `contact.googleMapsUrl = null` in those cases.

**Schema markup for this niche:**
1. `Organization` -- root-level
2. `ProfessionalService` -- correct type for sales consulting / outsourced sales (not `LocalBusiness`)
3. `Service` -- per service page
4. `FAQPage` -- for FAQ sections (Stage 10.2 personalise)
5. `AggregateRating` -- if Clutch/G2 reviews are available

---

### Form pattern

**Already in template (CtaSection.jsx):** 5-field form.

| Field | Type | Required | Notes |
|---|---|---|---|
| First name | text | yes | |
| Work email | email | yes | |
| Company | text | yes | |
| Revenue range | dropdown | yes | Options: Under $500K / $500K-$2M / $2M-$10M / $10M+ |
| Sales challenge | textarea | yes | Placeholder: "Describe where your pipeline is breaking down" |

- Friction-removal pattern: Revenue range dropdown prequalifies the lead before the call. Sales agencies serving founder-led businesses filter by company size.
- Multi-step pattern: Stage 10.3 uplift may convert this to a 3-step form if A/B testing data suggests uplift. Default build uses single-form for simplicity.
- Form header (locked): "Tell us about your pipeline."
- Privacy line (locked): "No spam. One call, no commitment. We review your situation before we talk."
- Submit CTA (locked): "Book a Free Strategy Call"
- Thank-you message (locked): "You're booked. Check your email for a calendar confirmation. Before we talk, we'll review your website, your ICP, and any public information about your market so we can use the call on strategy, not introductions."

---

### What the factory must NOT do (anti-patterns)

From `09-template-spec.md` and niche research:

1. **Do not use stock photography of smiling sales teams.** The hero and any team section must use real founder or team photography, or the abstract geometric grid background. Generic stock images signal inauthenticity to a sophisticated B2B buyer.

2. **Do not skip Problem/Agitate.** Established agencies (Belkins, CIENCE) can skip it because they have brand recognition. New and growing agencies cannot. The ProblemAgitateSection is mandatory -- it sets up the solution with emotional resonance.

3. **Do not bury objection handling in the FAQ.** The ObjectionHandlingSection is a standalone section between Testimonials and Risk Reversal. The top buyer fear ("they won't understand my business") is addressed explicitly as a section heading, not as item 4 of a FAQ accordion.

4. **Do not show logos without context.** A logo wall without a named quote or outcome beside it is weak. If logos are shown in the stats bar or as part of the social proof strip, each must be accompanied by at least a company name and a one-line result.

5. **Do not invent case study numbers.** If the client does not provide a real outcome, the CaseStudiesSection must use the locked niche placeholder copy or a clear "results coming at day 90" placeholder -- never a made-up metric.

6. **Do not hide pricing.** The PricingAnchorSection must show either a starting price ("Engagements from $X/month") or a clear pricing framework. Hiding price behind "contact us" increases bounce rate among qualified buyers.

7. **Do not use a second accent color.** The two-accent rule from the template spec: `#0EA5E9` carries all action meaning. No secondary accent color.

8. **Do not use em-dashes.** Universal. Zero tolerance. SOP QA gate halts on any em-dash found.

---

## Part C: Brand-dna defaults for the sales-agencies niche

These are the niche-level defaults. Stage 10.1 overlays per-client values on top of these. Per-client values from `Pipeline Data/brand/brand-dna.json` always win.

```
palette:
  primary:       "#0F1923"   # Hero, nav, footer, all dark sections
  primary_dark:  "#080E14"   # Hover states, nav on scroll
  primary_slate: "#1A2535"   # Dark surface cards, elevated panels
  accent:        "#0EA5E9"   # CTA buttons, stat numbers, active links -- ALL action meaning
  accent_light:  "#38BDF8"   # Hover accent, secondary highlights
  accent_dark:   "#0284C7"   # Pressed CTA, focus ring
  neutral:       "#F8FAFC"   # Light section backgrounds
  neutral_dim:   "#F1F5F9"   # Alternating rows, slightly deeper light
  silver:        "#94A3B8"   # Secondary text on dark, captions
  ink:           "#1E293B"   # Body text on light sections

typography:
  heading:        "Inter"
  body:           "Inter"
  headingFontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
  bodyFontUrl:    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"

voice_register: "professional-peer"

shape_motif: "geometric-grid"
  # Abstract geometric grid SVG at 8% opacity on dark sections
  # Signals precision, data, systematic thinking -- matches niche identity

theme_mode_default: "dark-with-light-alternates"
  # Dark sections: hero, stats-bar, problem-agitate, how-it-works,
  #   objection-handling, pricing-anchor, cta-section, footer
  # Light sections: solution, case-studies, testimonials, faq
  # Accent strip: risk-reversal (sky-600 to sky-800 gradient)
```

---

## Part D: Missing fields

These fields are required in `brand-dna.json` at Stage 7 (Brand DNA) and cannot be filled until a real client is onboarded via `/run-factory`. They must be `[MISSING]` until that time.

| Field | Why it is missing | How to fill it |
|---|---|---|
| `company.name` | No client onboarded yet | Provided at Stage 1 intake |
| `company.shortName` | No client | Stage 1 intake |
| `company.tagline` | No client | Stage 7 brand-dna-agent extracts from research |
| `company.url` | No client | Stage 1 intake |
| `company.description` | No client | Stage 7 brand-dna-agent |
| `company.serviceRegion` | No client | Stage 1 intake |
| `contact.phone` | No client | Stage 1 intake |
| `contact.email` | No client | Stage 1 intake |
| `address.*` | Sales agencies are typically remote-first; if no physical address, all address fields remain null | Stage 1 intake or null |
| `hours.*` | Sales agencies typically do not publish business hours | Set null at Stage 7 if not applicable |
| `businessHours.*` | Same as hours | Set null at Stage 7 if not applicable |
| `social.*` | Per-client social profiles | Stage 2 research agent harvests these |
| `team.founder.*` | Per-client founder details | Stage 7 brand-dna-agent |
| `reviews.*` | Per-client Clutch/G2 review data | Stage 2 research agent harvests these |
| `services[]` | Per-client service list | Stage 5 strategy agent populates |
| `serviceAreas[]` | Not applicable for most sales agencies (national/global) -- leave as `[]` unless client targets a specific region | Stage 5 strategy agent |
| `trust_badges[]` | Badge SVG files must be manually placed before Stage 10 build -- see `MANUAL-DROP-NEEDED.md` | Manual drop before Stage 10 |
| `previous_projects[]` | Per-client work samples | Stage 4 asset scraper attempts to harvest; student may need to supply |
| `copy.hero.*` | Per-client; locked defaults from `niche-playbook/copy-locks.json` are the fallback | Stage 6 copy-deck-agent |
| `faq[]` | Per-client FAQ; locked niche starter questions are the fallback | Stage 6 copy-deck-agent |
| `blog_posts[]` | No content yet; `[]` at launch is valid | Added post-launch |
| `pages.*` | Per-client page copy bundles | Stage 6 copy-deck-agent |
| `credit.agency` | **Millionaire Contracts** | Set in `/tailor-factory` -- applies to all clients |
| `meta.title` | Per-client | Stage 10.2 personalise |
| `meta.description` | Per-client | Stage 10.2 personalise |

**Fields with niche-level defaults that do NOT need per-client input (already set by niche template):**

- `palette.*` -- set from niche design tokens
- `typography.*` -- Inter single-family, set from niche design tokens
- `voice_register` -- "professional-peer"
- `shape_motif` -- "geometric-grid"
- `theme_mode` -- "light" (components handle dark/light section switching internally)
- All locked copy (`formHeader`, `ctaPrimary`, `ctaSecondary`, `riskReversalLine`, etc.) -- from `niche-playbook/copy-locks.json`

---

## Validation

Gate check against `research/_structure/Website_Factory_Structure.md`:

| Required field category | Status |
|---|---|
| Intake fields (businessName, websiteUrl, phone, email) | [MISSING] -- correctly marked, filled at Stage 1 |
| Brand-dna shape: all 32 top-level keys | Accounted for -- niche defaults set, per-client fields marked [MISSING] |
| Niche template registered | PASS -- `byNiche["sales-agencies"]` confirmed in `template-routes.json` |
| Trust stack documented | PASS -- top 5 in priority order |
| Copy voice documented | PASS -- voice_register, sample headlines, verbatim phrases, anti-patterns |
| SEO targets documented | PASS -- primary + secondary + schema types |
| Form pattern documented | PASS -- 5 fields, locked phrases, friction-removal |
| Anti-patterns documented | PASS -- 8 named anti-patterns |
| Palette + typography defaults | PASS -- hex values confirmed from `09-template-spec.md` |
| Stage 7 / tailor-factory: `credit.agency` | PASS -- **Millionaire Contracts** |

No required field is silently blank. All missing fields are explicitly marked `[MISSING]` with a reason and the step that fills them.
