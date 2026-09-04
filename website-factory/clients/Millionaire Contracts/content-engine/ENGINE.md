# Millionaire Contracts Content Engine

How the site produces SEO articles and Pipeline & Power newsletter issues at
volume, safely. The engine drafts. You approve. Then it ships. Nothing goes live
or gets sent without your explicit approval.

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

## Newsletter: Pipeline & Power

The fortnightly newsletter. Each issue takes ONE real shift in global business,
explains what is happening underneath it, and turns it into one concrete move the
reader can make for their revenue. Every issue is also a permanent page on the
site (`/newsletter/<slug>`), so late subscribers can read the back catalogue and
the content is indexable. The same data file feeds both the on-site page and the
email.

### The loop (drafting)

1. **Draft** an issue with `/mc-draft-issue "<topic or angle>"` (or ask Claude to
   draft the next one). It writes a data file with `status: 'draft'`. A draft is
   invisible to the archive page and the sitemap, and a real send is refused.
2. **Review** the draft. Read it. Fix anything.
3. **Publish** the page: change `status: 'draft'` to `status: 'published'`, then
   deploy. The build auto-discovers it into the archive, the issue page, the
   prerender, and the sitemap. No route wiring needed.

### The loop (sending)

Sending is a separate, manual, approval-gated step. Run `/mc-send-issue <slug>`.
It always goes: dry run (count only) -> test email to the owner -> WAIT for
approval -> real send to all confirmed, active subscribers. See that command and
`scripts/send-issue.mjs`. The send secret (`NEWSLETTER_SEND_SECRET`) lives in the
environment and in the Supabase edge-function secrets, never in the repo or chat.

### Issue data schema

Each issue is one file at
`../Millionaire Contracts Website/src/content/issues/<slug>.js` exporting a
default object:

```js
export default {
  slug: 'issue-NN-short-topic',   // URL path + file name, kebab-case
  status: 'draft',                // 'draft' (hidden, send refused) or 'published'
  number: 1,                      // issue number, increments each issue
  date: 'YYYY-MM-DD',
  subject: 'Plain, specific email subject line',
  preview: 'One-sentence inbox preview line.',
  sections: [                     // body; each body is markdown. Empty heading = no heading.
    { heading: '', body: 'Welcome / hook paragraph.' },
    { heading: 'The shift', body: 'What is actually happening.' },
    { heading: 'Why it matters for your pipeline', body: 'The translation.' },
    { heading: 'The move', body: 'One concrete thing to do.' },
    { heading: 'One line to keep', body: 'A memorable close.' },
  ],
}
```

`src/components/IssueTemplate.jsx` renders this on-site; `scripts/send-issue.mjs`
renders the same `sections` into the branded email. The house structure above
(hook, The shift, Why it matters, The move, One line to keep) is the default;
vary it only with reason.

### Newsletter length

- 700 to 1,000 words across the sections. One shift per issue, taken somewhere
  the reader would not have gone on their own.
- Everything in "The bar" below applies to issues too.

## The bar: make it worth finishing

Length is not the goal. Getting read to the end and leaving the reader wanting
more is the goal. Anything that does not serve that gets cut. Every piece the
engine ships, article or issue, has to clear all six of these.

1. **Open with a turn, not a definition.** The first two sentences either name
   something the reader half-knew but never had words for, or overturn something
   they assumed was true. Never open with "X is..." Never open with throat
   clearing ("In today's fast-moving world..."). Earn the second paragraph.

2. **One idea they have not heard.** Every piece must contain at least one real
   reframe: a way of seeing the problem the reader would not have reached alone.
   If the whole thing could be guessed from the title, it failed. This is the
   line they screenshot, quote, or forward to a colleague. Find the non-obvious
   angle before you write, not while you write.

3. **Earn every section.** Each heading answers the exact question the previous
   section made the reader ask. It reads as one moving argument, not a list of
   tips. End sections on a small turn or an open loop so the next one pulls.

4. **Concrete beats abstract, every time.** One specific, recognisable situation
   is worth three claims. Name the moment, the buyer, the room. Numbers only from
   the approved figures; specificity of situation is free and required.

5. **Density.** No padding, no filler sentences, no restating the heading in the
   first line of the section. If a sentence does not carry information or move the
   argument, delete it. A tight piece that ends early beats a padded one that
   overstays. Length should come from having more to say, never from a target.

6. **Close on an opened door.** End on the next question the reader now has, not a
   summary. Resolve it just enough to make them want the answer, then point them
   to the next piece, the archive, or the call. The last line is the one that
   decides whether they come back. Make it work.

Before shipping, read the whole thing once as the busy operator it is for and ask
three questions. Would they finish it? Is there one line worth screenshotting?
Does the ending make them want the next one? If any answer is no, it is not done.

### Article length and SEO

- Aim 1,300 to 1,700 words, dense the whole way. Never pad to hit it; a tight
  1,300 that keeps momentum beats a bloated 1,800 that loses the reader.
- One clear target search per article. Do not write two articles that compete
  for the same keyword.
- Always include FAQs (they win featured snippets and power the FAQ schema), and
  hold them to the same bar: real answers, no filler.

## Publish checklist

- [ ] `status` set to `'published'`
- [ ] Reads cleanly, rules followed, no invented numbers
- [ ] `related` links all resolve
- [ ] Row moved to Published in `backlog.md`
- [ ] Deployed, and the page loads with content in View Source
