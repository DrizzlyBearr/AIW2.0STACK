---
description: Draft a Pipeline & Power newsletter issue as a review-ready data file (does not publish or send)
---

You are the Millionaire Contracts newsletter engine. Draft one issue of Pipeline
& Power as a data file. Do NOT publish it and do NOT send it. It is for the owner
to review.

Topic or angle: $ARGUMENTS
(If empty, take the top row of the Queued list under "Newsletter: Pipeline &
Power issue ideas" in `content-engine/backlog.md`, or propose one that fits the
format below.)

Base directory:
`website-factory/clients/Millionaire Contracts/`

## What Pipeline & Power is

A fortnightly note. Each issue takes ONE real shift in global business, explains
what is actually happening underneath it, and turns it into one concrete move the
reader can make for their own revenue. The house structure is: short welcome or
hook, "The shift", "Why it matters for your pipeline", "The move", and one line to
keep. On-theme subjects: global business shifts, where demand and capital are
moving, markets that are growing but under-served, changes in how B2B buying
works. It is useful on its own even if the reader never buys.

## Steps

1. Read `content-engine/ENGINE.md` in full: the hard rules, the approved figures
   (the ONLY numbers you may use), the newsletter (issue) schema, and "The bar:
   make it worth finishing" (the six craft rules). Before you write, decide the
   one reframe this issue gives the reader (bar rule 2): the non-obvious way of
   seeing the shift they would not reach on their own. If you cannot name it,
   pick a sharper shift.
2. Read the latest existing issue as the format reference:
   `Millionaire Contracts Website/src/content/issues/issue-01-where-growth-is-moving.js`
3. Pick the next issue `number` (highest existing number plus one) and a slug of
   the form `issue-NN-short-topic`.
4. Research the shift enough to write something genuinely useful (web search is
   fine). Do not fabricate statistics. State trends qualitatively unless the
   number is in the approved figures list.
5. Write the issue to
   `Millionaire Contracts Website/src/content/issues/<slug>.js` with
   `status: 'draft'`, following the schema exactly and clearing all six rules in
   "The bar." 700 to 1,000 words, dense the whole way, never padded. Open with a
   turn, not a definition. `subject` is the email subject line: plain, specific,
   built on curiosity, no hype. `preview` is the inbox preview line, one sentence
   that earns the open.
6. Read it back as the busy operator it is for. Confirm they would finish it,
   there is one line worth screenshotting, and the ending makes them want the
   next issue. If not, rewrite before saving.
7. Verify the file is valid JavaScript (balanced braces, no stray apostrophes
   breaking strings, no em dashes anywhere, no emojis).
8. In `content-engine/backlog.md`, move the idea from the newsletter Queued list
   to the newsletter Drafted list with its slug and number.
9. Report: the slug, the file path, the subject line, a two-line summary, and the
   exact line the owner changes to publish (`status: 'draft'` to
   `status: 'published'`), plus a reminder that sending is a separate step
   (`/mc-send-issue`).

## Hard rules (repeat, because breaking them is worse than shipping nothing)

- No em dashes. No emojis. No buzzwords (leverage, synergize, robust, seamless,
  game-changer, cutting-edge).
- No invented statistics. Only the approved figures in ENGINE.md, or write
  qualitatively.
- Calm, direct, professional US voice. Short sentences. One idea per sentence.
- Do not mention any South African cost advantage. Position Millionaire
  Contracts as equal footing and better equipped than the market.
- Never state what Millionaire Contracts pays its reps. Never publish prices.
- Leave `status: 'draft'`. Do not publish, deploy, or send. Do not commit unless
  the owner asks.
