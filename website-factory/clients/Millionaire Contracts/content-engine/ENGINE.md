# Millionaire Contracts Content Engine

How the site produces SEO articles (and, later, newsletter issues) at volume,
safely. The engine drafts. You approve. Then it ships. Nothing goes live or gets
sent without your explicit approval.

## The loop

1. **Pick a topic** from `backlog.md` (top of the queued list) or a topic you name.
2. **Draft** it as a data file at
   `../Millionaire Contracts Website/src/content/articles/<slug>.js` with
   `status: 'draft'`. A draft is invisible to the live site and the sitemap.
3. **Review** the draft. Read it. Fix anything.
4. **Publish**: change `status: 'draft'` to `status: 'published'`, move the row
   in `backlog.md` to Published, then deploy. The build auto-discovers it into
   the routes, prerendering, and sitemap. No code or route wiring needed.

To draft, run the `/mc-draft-article` command (a topic, or "next" for the top of
the backlog), or ask Claude to draft from the backlog.

## Article data schema

Each article is one file exporting a default object:

```js
export default {
  slug: 'how-to-...',            // URL path, kebab-case, matches the file name
  status: 'draft',               // 'draft' (hidden) or 'published' (live)
  date: 'YYYY-MM-DD',
  category: 'Sales Strategy',    // one of the Resources categories
  label: 'Sales Strategy',       // hero eyebrow, usually same as category
  title: 'Plain, specific title the buyer would search',
  description: 'One-sentence meta description, plain, no hype.',
  intro: 'One short paragraph under the hero H1.',
  stats: [                        // optional 4 tiles; qualitative or approved figures only
    { value: '65%', label: 'Our average meeting success rate' },
  ],
  sections: [                     // the body; each body is markdown
    { heading: 'Section heading', body: 'Markdown paragraphs.\n\nSecond paragraph.' },
  ],
  faqs: [                         // powers the on-page FAQ and FAQ schema
    { q: 'Question the buyer asks?', a: 'Plain answer.' },
  ],
  related: [                      // internal links to real routes only
    { to: '/how-to-write-a-cold-email', label: 'How to Write a Cold Email', desc: 'Short line.' },
  ],
  ctaHeading: 'Mid-article CTA heading',
  ctaBody: 'Mid-article CTA body.',
}
```

The generic renderer (`src/components/ArticleTemplate.jsx`) turns this into a
page in the same style as the hand-built articles: hero, optional stats bar,
body sections, a mid-article CTA, related reading, FAQ, and the final CTA.

## The rules (non-negotiable, same as every MC output)

- No em dashes. Ever. Use commas, periods, or "to" for ranges.
- No emojis.
- No invented statistics or results. The only numbers allowed are the approved
  set below. If you cannot back a number, write the point qualitatively.
- No buzzwords: no leverage, synergize, robust, seamless, game-changer,
  cutting-edge.
- Calm, direct, professional US voice. Plain words, short sentences, one idea
  per sentence.
- We do not mention any South African cost advantage. Position Millionaire
  Contracts as equal footing and better equipped than the market.
- Internal `related` and body links must point only to routes that exist.

### Approved figures (the only numbers you may use)

- In-house SDR fully loaded cost: $110,000 to $150,000 per year.
- SDR base salary: $55,000 to $70,000.
- Fully loaded overhead adds roughly 80 to 130 percent on top of base in year one.
- Ramp time for a new hire: 3 to 6 months. A wrong hire costs 6 to 9 months of that.
- Outsourced sales costs 30 to 50 percent less than a fully loaded in-house hire.
- Outsourced retainers commonly run $3,000 to $15,000 per month.
- Pay-per-appointment commonly runs $75 to $500 per qualified meeting.
- Millionaire Contracts: 65 percent average meeting success rate, 20+ companies scaled.
- In-house sales hire, fully loaded, by market (comparison pages): United States
  $112,000, United Kingdom $78,000, Canada $88,000, Australia $92,000, Germany
  $85,000, South Africa R480,000. Show one market's figure per page.

Never state what Millionaire Contracts pays its own reps.

## Quality bar

- 1,200 to 1,600 words across the sections.
- Genuinely useful. A reader should get value even if they never buy.
- One clear target search per article. Avoid writing two articles that compete
  for the same keyword.
- Always include FAQs (they win featured snippets and power the FAQ schema).

## Publish checklist

- [ ] `status` set to `'published'`
- [ ] Reads cleanly, rules followed, no invented numbers
- [ ] `related` links all resolve
- [ ] Row moved to Published in `backlog.md`
- [ ] Deployed, and the page loads with content in View Source
