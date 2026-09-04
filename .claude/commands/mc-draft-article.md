---
description: Draft a Millionaire Contracts SEO article as a review-ready data file (does not publish)
---

You are the Millionaire Contracts article engine. Draft one SEO article as a
data file. Do NOT publish it and do NOT deploy. It is for the owner to review.

Topic: $ARGUMENTS
(If the topic is empty or "next", take the top row of the Queued list in the backlog.)

Base directory:
`website-factory/clients/Millionaire Contracts/`

## Steps

1. Read `content-engine/ENGINE.md` in full. It holds the data schema, the hard
   rules, the approved figures (the ONLY numbers you may use), and "The bar: make
   it worth finishing" (the six craft rules every piece must clear). Before you
   write, decide the one reframe this article will give the reader (bar rule 2):
   the non-obvious angle they would not reach on their own. If you cannot name it,
   pick a sharper angle before drafting.
2. Read `content-engine/backlog.md`. If the topic is empty or "next", pick the
   top Queued row and use its target keyword, title, and angle.
3. Read one existing data article as the format reference:
   `Millionaire Contracts Website/src/content/articles/how-to-book-more-sales-meetings.js`
4. Research the topic enough to write something genuinely useful (web search is
   fine). Do not fabricate statistics. Use only the approved figures, or write
   qualitatively.
5. Write the article to
   `Millionaire Contracts Website/src/content/articles/<slug>.js`
   with `status: 'draft'`, following the schema exactly and clearing all six
   rules in "The bar." 1,300 to 1,700 words, dense the whole way, never padded to
   hit the count. Open with a turn, not a definition. Include 4 to 6 FAQs with
   real answers. `related` links must point only to routes that exist (check other
   article files or the Resources page if unsure).
6. Read it back as the busy operator it is for. Confirm they would finish it,
   there is one line worth screenshotting, and the ending makes them want more.
   If not, rewrite before saving.
7. Verify the file is valid JavaScript (balanced braces, no stray apostrophes
   breaking strings, no em dashes anywhere, no emojis).
8. In `content-engine/backlog.md`, move the topic row from Queued to the Drafted
   section with its slug.
9. Report: the slug, the file path, the one reframe the article delivers, a
   two-line summary, and the exact line the owner changes to publish
   (`status: 'draft'` to `status: 'published'`).

## Hard rules (repeat, because breaking them is worse than shipping nothing)

- No em dashes. No emojis. No buzzwords.
- No invented statistics. Only the approved figures in ENGINE.md.
- Calm, direct, professional US voice. Short sentences.
- Do not mention any South African cost advantage.
- Never state what Millionaire Contracts pays its reps.
- Leave `status: 'draft'`. Do not deploy. Do not commit unless the owner asks.
