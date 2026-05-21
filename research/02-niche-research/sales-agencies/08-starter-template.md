# Sub-task 8: Starter Design Template
# Vite + React factory template spec for sales agencies / sales infrastructure businesses

Research date: 2026-05-21

---

## 1. Page structure (section order)

1. **Nav bar** -- Logo left, 3-4 nav links center, sticky "Book a Call" CTA button right. Dark background. Stays fixed on scroll.
2. **Hero** -- Headline + subheadline + primary CTA button + secondary CTA link + social proof bar. Above the fold. Dark background.
3. **Social proof bar** -- Client logos in a horizontal row with a Clutch star rating badge. Immediately below the hero, full width, lighter dark background to create visual separation.
4. **Problem / Agitate** -- Two-column layout. Left: the founder-as-sole-salesperson pain. Right: the cost of a failed first hire. Short, punchy. Exists because this agency does not yet have Belkins-level brand recognition.
5. **Solution** -- One-paragraph positioning statement followed by a 3-column service card grid. Names the offer and the mechanism (outsourced reps + playbook + systems).
6. **How it works** -- Numbered 3-step process. Simple, no jargon. Step 1: Onboarding and playbook. Step 2: Outreach and qualification. Step 3: Meetings land in your calendar.
7. **Case studies** -- 2-3 card layout. Each card is a named client, a one-sentence problem, and a bolded outcome stat. Section CTA: "See all results."
8. **Objection handling** -- Dedicated named section, not a FAQ. Title: "What you're probably thinking." Three objections addressed directly in plain language.
9. **Testimonials** -- 1 video embed (Loom or YouTube) + 2 text pull-quotes below it. Background: light contrast to break visual rhythm.
10. **Team credibility** -- 2-4 team member cards. Photo, name, one-line background ("Closed $2M ARR at [past company]"). Optional LinkedIn icon.
11. **Primary CTA section** -- Full-width band. Large headline, one subline, one form or one Calendly embed. No distractions.
12. **FAQ** -- 5-6 questions in accordion format. Addresses remaining operational questions (contract length, onboarding time, industries served, reporting cadence).
13. **Footer** -- Logo, nav links, Clutch badge, privacy policy link, copyright.

---

## 2. Hero section spec

### Headline formula
"[Specific audience] get [specific outcome] in [timeframe] -- or we keep working until they do."

Fill-in example:
"B2B founders get 10 qualified sales meetings in 30 days -- or we keep working until they do."

Second option (pain-led):
"Stop being the only salesperson in your company."

Third option (system-led):
"Predictable pipeline starts with a system, not a superstar hire."

### Subheadline formula
"We build the sales infrastructure -- reps, playbook, and pipeline management -- so you show up to calls and close."

Max 20 words. One idea. No em-dashes (use a comma or period instead).

### Primary CTA
Label: "Book a Free Strategy Call"
Destination: Calendly embed or inline form (Section 11). Opens same page anchor or modal.

### Secondary CTA
Label: "See Our Results" (text link, no button border)
Destination: Anchors down to Case Studies section (Section 7).
Lower visual weight: no background, smaller font, placed directly below or beside the primary button.

### Social proof bar content
Placed below the CTA buttons, above the fold on desktop.
Contents:
- Clutch badge with star rating: "4.9 stars on Clutch" (or G2 equivalent)
- Review count: "(47 reviews)" in smaller type beside the badge
- One outcome stat in plain text: "420+ qualified meetings booked for clients"
- Optional: "Trusted by 30+ businesses" if logo count is insufficient for a full logo row

### Background treatment
Dark background: near-black or deep navy (#0D1117 or #0F1923). Not pure black.
No stock photography of smiling sales teams. Either:
- Abstract geometric pattern or grid texture in the background at low opacity (signals precision, systems), or
- Solid dark color with a single high-quality photo of the founder or lead strategist (trust, not stock)
Text is white or near-white. The accent color (see Section 7) is used only on the primary CTA button.

---

## 3. Trust stack spec

Elements in order, mapped to page position:

### Trust element 1: Stats bar
- Where: Directly below the hero section (Section 3 of page)
- What: 3-4 scannable numbers in a horizontal row. Examples: "420+ meetings booked," "30+ clients served," "12 industries," "4.9 stars on Clutch"
- Format: Large number in accent color, label text in small caps below. Full-width dark band, slightly lighter than hero.
- Size: Numbers at 48px+, labels at 13px. Desktop: 4 columns. Mobile: 2x2 grid.

### Trust element 2: Named client logos
- Where: Directly below the stats bar, or inline with the stats bar on desktop
- What: 6-10 real client logos. If <6 logos exist at launch, supplement with "industries served" text labels (SaaS, Professional Services, Manufacturing). No silhouettes.
- Format: Grayscale logos at consistent height (~32px). Subtle fade-in animation on scroll optional.
- Size: Logo row at ~80px tall total. No labels under logos unless brand names are not readable at 32px.

### Trust element 3: Clutch / G2 review badge
- Where: Hero section, below primary and secondary CTAs. Also in footer.
- What: Clutch "Top B2B Sales Outsourcing Company" badge + star rating + review count. Linked to live Clutch profile.
- Format: Badge image + text "47 verified reviews on Clutch" beside it. White on dark background in hero. Dark on light background in footer.
- Size: Badge at ~60px tall. Do not blow it up.

### Trust element 4: Video testimonial
- Where: Section 9 (Testimonials), after case studies
- What: 60-90 second video embed from a founder client. Speaker's name, title, and company shown on screen. Specific before/after number mentioned in the video.
- Format: 16:9 embed (YouTube or Loom), centered, max-width 720px. Two text pull-quotes below the video.
- Size: Full-width container on mobile, 720px cap on desktop.

### Trust element 5: Team credibility cards
- Where: Section 10, below testimonials
- What: Photo, name, one-line background ("Led 14-person SDR team at [company]"), LinkedIn link icon.
- Format: 2-4 cards in a row. Square or circular photo, ~120px. Name in bold, background in small regular weight text.
- Size: Cards at ~200px wide on desktop. Stack to single column on mobile.

---

## 4. Case study section spec

### Required fields per case study card
1. Client name or alias (e.g., "FinTech startup" if client does not permit naming)
2. Client industry (1-2 words: "B2B SaaS," "Professional Services," "Manufacturing")
3. Problem statement (1 sentence, max 15 words: "Was the only salesperson; revenue had been flat for 3 quarters.")
4. Solution delivered (1 sentence: "We built a cold email + LinkedIn outreach program and placed 1 dedicated SDR.")
5. Outcome with number (bolded, above the fold on the card: "22 qualified meetings and $760K pipeline in 120 days")
6. Timeframe (how long the engagement ran to achieve the result: "120 days")

### Card layout
- Result stat is the largest element on the card (48px+, accent color or near-white).
- Problem and solution are smaller, below the stat.
- Client industry tag at the top of the card in a small pill/badge.
- Optional: client logo or a small portrait photo if permitted.

### Minimum number to launch
2 case studies minimum. 3 is the recommended target. Do not launch the section with 1 card; it looks like an outlier, not a pattern.

### Section CTA
Label: "Book a call to discuss your situation"
Format: Text link or outlined button below the card row. Not a filled button (reserve filled buttons for primary CTA sections). Destination: anchors to Section 11 (primary CTA / form).

---

## 5. Objection-handling section spec

### Format recommendation
Named section with a clear header. Not a FAQ accordion. Not inline copy buried in other sections.
Title: "What you're probably thinking"
Layout: 3 cards or 3 stacked rows. Each has the objection in bold as the "question," then 2-4 sentences of direct response below it. No hedging. No "great question."

### Objection 1: "You won't understand my business well enough to sell it."
Source: Top fear across all Clutch reviews, SalesAR reviews, every agency FAQ.
Response direction: Describe the onboarding and market research process. Mention that reps are briefed on ICP, buying triggers, and competitive objections before their first call. Reference a case study where a client specifically praised market understanding (SalesAR Clutch review language: "their ability to quickly understand our market").

### Objection 2: "I'll pay for months and get nothing. I've been burned before."
Source: "70% of outsourcing agreements fail to meet expectations" is circulated in founder communities. Failed first hire ($60K-$80K) colors every subsequent outsourcing decision.
Response direction: Address directly. State the agency's timeline to first qualified meeting (e.g., "most clients see first meetings within 30 days"). Reference the risk-reversal or guarantee if one exists. If no formal guarantee, name the minimum commitment and what clients receive if targets are not met.

### Objection 3: "This will create more work for me, not less."
Source: "I don't have time to manage a sales team" is the #6 most-repeated phrase in buyer research.
Response direction: Describe exactly what the client does versus what the agency does. "You show up to the calls. We handle the prospecting, messaging, follow-up, and booking." Use the specific division-of-labour value prop from Sub-task 3.

---

## 6. Form / CTA spec

### Primary conversion action
Book a strategy call. Not "contact us." Not "get a quote." The primary action is a scheduled conversation.
Use a Calendly embed or a short form that triggers a booked call (not just an email capture).

### Form fields
If using a form instead of direct Calendly embed, collect only:

1. First name (required) -- personalises the follow-up
2. Work email (required) -- qualifies business context
3. Company name (required) -- minimum qualification signal
4. Monthly revenue range (required, dropdown: "Under $500K / $500K-$2M / $2M-$10M / $10M+") -- filters fit and allows prep before the call
5. "What is your biggest sales challenge right now?" (required, free text, 2-3 sentences max) -- surfaces context and filters non-serious submitters

Do not ask: phone number (friction, rarely answered honestly at this stage), "how did you hear about us" (handle post-call), full address, or LinkedIn URL. Five fields is the maximum for this buyer type before drop-off rises sharply.

### CTA button copy
Primary: "Book My Free Strategy Call"
Variant A: "Get My Free Sales Audit"
Variant B: "Start Building Pipeline"

### What happens after submission
Display an inline confirmation message (do not redirect to a separate thank-you page -- it breaks analytics attribution unless UTM parameters are passed correctly, which most clients will not have set up).

Confirmation message copy:
"You're booked. Check your email for a calendar confirmation. Before we talk, we'll review your website, your ICP, and any public information about your market so we can use the call on strategy, not introductions. See you soon."

Maximum 3 sentences. No "thank you for reaching out to us." No "a member of our team will be in touch shortly" (vague, low-confidence).

---

## 7. Color and typography direction

### Primary palette

| Label | Hex | Use |
|---|---|---|
| Background (dark) | #0F1923 | Hero, nav, footer, dark sections |
| Primary accent | #0EA5E9 | CTA buttons, stat numbers, active nav link, hover states |
| Light background | #F8FAFC | Testimonials section, objection section, FAQ |
| Body text on dark | #CBD5E1 | Body copy on dark backgrounds |
| Body text on light | #1E293B | Body copy on light backgrounds |
| Border / divider | #1E3A4A | Card borders, section dividers on dark |

Note: Do not use more than 2 accent colors. The blue (#0EA5E9) is the only color that carries action meaning. All other decorative choices stay in the slate/navy family.

### Font pairing

Heading font: **Inter** (Google Fonts)
- Weight: 700 (headings), 600 (subheadings), 500 (card titles)
- Why: Default choice for B2B SaaS and professional services. Clean, authoritative, highly legible at all sizes. Does not look like a template.

Body font: **Inter** (same family)
- Weight: 400 (body), 500 (labels, nav)
- Why: Single-font system reduces load time and maintains visual coherence. Inter handles both display and text weights without a mismatch.

Alternative pairing if the client wants more visual differentiation:
- Heading: **Sora** (Google Fonts, 700) -- slightly more distinctive geometry than Inter
- Body: **Inter** (400)

### Visual tone
Professional-aggressive. Not warm or consultative. Not peer-to-peer casual.
Reference point: SalesHive's aesthetic (dark, high-contrast, outcome-led, zero decoration for its own sake) without the platform/SaaS over-engineering.
The visual hierarchy communicates: "We know what we're doing, we have the numbers to prove it, and here is how to engage."
No rounded-corner-heavy "friendly startup" treatment. No pastel backgrounds. No lifestyle photography.

---

## 8. Copy snippets (paste-ready)

### 3 hero headline options

Option A (outcome + guarantee):
"B2B founders get 10 qualified sales meetings in 30 days -- or we keep working until they do."
Note: Replace the em-dash with a period or comma when implementing. "B2B founders get 10 qualified sales meetings in 30 days. If you don't, we keep working until you do."

Option B (pain-led, identity match):
"Stop being the only salesperson in your company."

Option C (system-led, anti-hire framing):
"Predictable revenue starts with a system, not a superstar hire."

### 3 CTA button label options

1. "Book My Free Strategy Call"
2. "Start Building Pipeline"
3. "Get 10 Qualified Meetings"

### Risk-reversal line
Addresses the "burned before" objection. Place in the Objection Handling section and optionally repeat near the form CTA.

"Most clients see their first qualified meeting within 30 days. If we reach the end of month two without a single meeting booked, we extend the program at no cost until we hit the target. You do not pay for time. You pay for outcomes."

Adjust the specific guarantee to match what the actual agency is willing to commit to. Do not publish a guarantee the client is not prepared to honor.

### ROI anchor sentence
Sourced from Sub-task 7 money math.

"A $6,000-a-month outsourced sales system typically generates its first closed deal within 60 to 90 days, and a single $50,000 client contract makes the entire year's investment pay back in one signature."

Use in: the Solution section, the CTA section subheadline, or the Objection 2 response. Do not use it in all three places; pick one.
