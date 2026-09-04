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
- The send secret is available in the environment as `NEWSLETTER_SEND_SECRET`.
  It must NOT be pasted into chat or written to any file. If it is not set, tell
  the owner to run the command with the secret prefixed, for example:
  `NEWSLETTER_SEND_SECRET=... node scripts/send-issue.mjs <slug>`
  (they add the same value to the Supabase project's edge-function secrets).

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
   This sends to all confirmed, active subscribers. Report the result (recipients
   and sent counts). The function also records the send in
   `newsletter_audit_log`.

## Rules

- Never run the real send (`--send`) without explicit owner approval in this
  conversation, given after they have seen the test.
- Never echo the value of `NEWSLETTER_SEND_SECRET`.
- If any step returns an error, stop and report it. Do not retry a real send
  blindly.
- One issue is sent once. If asked to resend, confirm that is intended before
  running `--send` again.
