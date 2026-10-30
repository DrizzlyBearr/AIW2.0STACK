---
description: Send an approved Pipeline & Power issue to subscribers (manual, owner-confirmed, test-first)
---

You are running the manual newsletter send for Pipeline & Power. Sending is
approval-gated at every step. Nothing goes to the full list until the owner says
so in this conversation, in words.

Issue slug: $ARGUMENTS

Base directory:
`website-factory/clients/Millionaire Contracts/Millionaire Contracts Website`

## Preconditions

- The issue file exists at `src/content/issues/<slug>.js`.
- The owner has reviewed it and set `status: 'published'`. If it is still
  `status: 'draft'`, STOP and tell the owner to publish it first (a real send is
  refused for drafts).
- MC's Command api key is available in the environment as `COMMAND_API_KEY`.
  It must NOT be pasted into chat or written to any file. If it is not set, tell
  the owner to run the command with the key prefixed, for example:
  `COMMAND_API_KEY=... node scripts/send-issue.mjs <slug>`
  The key comes from Command, Ops, Keys, for Millionaire Contracts. A real send
  needs a key issued with "may approve"; a dry run and a test do not.
- Sending goes through Command (`POST /api/lists/send`) to the Pipeline & Power
  list. Subscribers join on the site and confirm by email; only confirmed
  subscribers receive an issue.

## The send flow (do these in order, stop for approval where marked)

1. **Dry run.** From the website directory, run:
   `node scripts/send-issue.mjs <slug>`
   This sends nothing. It reports how many confirmed, active subscribers would
   receive the issue. Report that count to the owner.

2. **Test send.** Run:
   `node scripts/send-issue.mjs <slug> --test=neo@millionairecontracts.com`
   This delivers one `[TEST]` email so the owner can see exactly what subscribers
   will get. Tell the owner to check it (subject line, layout, links, logo,
   unsubscribe). WAIT for their explicit approval.

3. **Real send.** ONLY after the owner has seen the test and said to send, run:
   `node scripts/send-issue.mjs <slug> --send`
   This sends to all confirmed subscribers. The script keeps calling Command
   until the whole list is done and prints a line per batch; report the last
   one. Command records the send and every recipient (`list_sends`,
   `list_deliveries`).

## Rules

- Never run the real send (`--send`) without explicit owner approval in this
  conversation, given after they have seen the test.
- Never echo the value of `COMMAND_API_KEY`.
- If any step returns an error, stop and report it. Running `--send` again with
  the same issue is safe: Command only sends to whoever has not had it yet, and
  never re-sends to anyone whose send started but was not confirmed.
- One issue is sent once. Command refuses a second send of the same slug with
  changed words; a corrected issue that must go again needs a new slug, and the
  owner's say-so.
