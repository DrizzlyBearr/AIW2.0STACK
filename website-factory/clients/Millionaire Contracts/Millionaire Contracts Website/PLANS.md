# Free plans as pages

Every free plan goes two ways: in the body of the email, and as a page the
prospect can keep, at `https://www.millionairecontracts.com/plan/<slug>`.
The page has diagrams (where enquiries leak today, how it works with the
plan, a timeline) and a Save as PDF button. It is private by link only: the
slug carries a random code, `/plan/` and `/plans/` are kept out of search
(robots.txt and a noindex tag), and nothing about any prospect is in the
site's code.

## Adding one

1. Make a slug: the business, a hyphen, and 8 random hex characters
   (`python3 -c "import secrets;print(secrets.token_hex(4))"`), for example
   `cyber-care-68a855a5`.
2. Copy `public/plans/cyber-care-68a855a5.json` to `public/plans/<slug>.json`
   and rewrite it for the prospect. Write only what they told us and what is
   on their own public website.
3. Publish the site. The page is live at `/plan/<slug>`.
4. Put the link in the email: "Your plan is also here to keep, with the
   diagrams: <link>".

## The file

| Field | What it is |
|---|---|
| `business`, `person`, `date`, `from` | Who it is for, when, and who wrote it |
| `headline` | The plan's title, about their problem |
| `told` | What they told us, in their words, one line each |
| `todayTitle`, `today` | The flow as it is now: `{ "step", "leak" }`, the leak in red under the step |
| `futureTitle`, `future` | The flow with the plan: `{ "step", "note" }` |
| `noticed` | What we saw on their website, plainly, including one thing they do well |
| `planTitle`, `plan` | The steps: `{ "title", "body" }` |
| `timelineWeeks`, `timeline` | Bars over the weeks: `{ "label", "when", "from", "to", "body" }` |
| `worth` | `{ "title", "stats": [{ "value", "label" }], "body" }`, the money in their own terms |
| `next` | `{ "title", "body", "cta", "href" }`, the call or the booking |

Every field is optional; a section with nothing in it is left out. No MC
prices in a plan: those go in the pack after the first call.
