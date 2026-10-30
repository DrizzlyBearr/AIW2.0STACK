// Manual newsletter sender for Pipeline & Power.
//
// Reads one issue data file, renders it to email HTML, and asks Command to
// send it to the Pipeline & Power list (Command, POST /api/lists/send).
// Nothing goes out unless you say so: the default only reports how many
// confirmed subscribers would receive it. A test send goes to one address. A
// real send needs --send, a published issue, and a key that may approve.
//
// Command adds each subscriber's own unsubscribe link and footer, sends each
// person their own copy, and sends an issue once: running --send again with
// the same issue only finishes whatever is left.
//
// The key NEVER lives in the repo. It is MC's api key from Command (Ops,
// Keys), issued with "may approve" for a real send. Supply it in the
// environment:
//   COMMAND_API_KEY=... node scripts/send-issue.mjs <slug> [flags]
//
// Flags:
//   (none)            dry run  -> how many subscribers would receive it
//   --test=you@x.com  sends one [TEST] email to that address only
//   --send            sends to ALL confirmed subscribers (real send)
//
// Examples:
//   COMMAND_API_KEY=xxx node scripts/send-issue.mjs issue-01-the-market-everyone-left
//   COMMAND_API_KEY=xxx node scripts/send-issue.mjs issue-01-the-market-everyone-left --test=neo@millionairecontracts.com
//   COMMAND_API_KEY=xxx node scripts/send-issue.mjs issue-01-the-market-everyone-left --send

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { marked } from 'marked'

marked.setOptions({ mangle: false, headerIds: false })

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const ISSUES_DIR = path.join(ROOT, 'src', 'content', 'issues')
const SITE = 'https://www.millionairecontracts.com'

const SEND_URL = process.env.COMMAND_SEND_URL || 'https://command.millionairecontracts.com/api/lists/send'
const LIST = 'Pipeline & Power'
// Where a subscriber's reply goes. The issues invite replies.
const REPLY_TO = process.env.NEWSLETTER_REPLY_TO || 'neo@millionairecontracts.com'

function die(msg) {
  console.error(`\n  ${msg}\n`)
  process.exit(1)
}

// ── args ──
const args = process.argv.slice(2)
const slugArg = args.find((a) => !a.startsWith('--'))
const testFlag = args.find((a) => a.startsWith('--test='))
const testTo = testFlag ? testFlag.split('=')[1] : null
const doSend = args.includes('--send')

if (!slugArg) die('Usage: node scripts/send-issue.mjs <issue-slug> [--test=email] [--send]')
if (testTo && doSend) die('Choose --test or --send, not both.')

const key = process.env.COMMAND_API_KEY
if (!key) die('COMMAND_API_KEY is not set. Prefix the command with it; never paste it into a file.')

// ── locate the issue file (match by slug field or file name) ──
const files = fs.existsSync(ISSUES_DIR)
  ? fs.readdirSync(ISSUES_DIR).filter((f) => f.endsWith('.js'))
  : []
if (files.length === 0) die(`No issue files found in ${ISSUES_DIR}`)

const match =
  files.find((f) => f.replace(/\.js$/, '') === slugArg) ||
  files.find((f) => f.includes(slugArg))
if (!match) die(`No issue file matches "${slugArg}". Files: ${files.join(', ')}`)

const mod = await import(url.pathToFileURL(path.join(ISSUES_DIR, match)).href)
const issue = mod.default
if (!issue) die(`${match} has no default export.`)

if (issue.status !== 'published' && doSend) {
  die(`Issue "${issue.slug}" is status: ${issue.status}. Publish it (status: 'published') before a real send.`)
}

// ── render the issue to email-ready HTML ──
// A masthead, then each section as on the on-site IssueTemplate: a bold teal
// heading, then the markdown body. Command wraps this in the list's shell and
// adds each subscriber's unsubscribe footer.
function toEmailHtml(issue) {
  const masthead = `<p style="margin:0 0 20px"><img src="${SITE}/mc-logo.png" alt="Millionaire Contracts" width="160" style="display:block;height:auto;border:0"></p>
<p style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8a6d1f;margin:0 0 8px">Pipeline &amp; Power${issue.number ? ` &middot; Issue ${issue.number}` : ''}</p>
<h1 style="font-family:Arial,sans-serif;font-size:26px;line-height:1.25;font-weight:800;color:#132b2f;margin:0 0 20px">${issue.subject}</h1>`
  const sections = (issue.sections || [])
    .map((sec) => {
      const head = sec.heading
        ? `<h2 style="font-family:Arial,sans-serif;font-size:20px;font-weight:800;color:#0f766e;margin:28px 0 12px;">${sec.heading}</h2>`
        : ''
      return head + marked.parse(sec.body || '')
    })
    .join('\n')
  const online = `<p style="margin-top:28px;font-size:13px"><a href="${SITE}/newsletter/${issue.slug}" style="color:#0f766e">Read this issue on the site</a></p>`
  return masthead + sections + online
}

const payload = {
  list: LIST,
  ref: issue.slug,
  subject: issue.subject,
  preview: issue.preview,
  html: toEmailHtml(issue),
  reply_to: REPLY_TO,
  mode: testTo ? 'test' : doSend ? 'send' : 'count',
  ...(testTo ? { test_to: testTo } : {}),
  ...(doSend ? { confirm: 'SEND' } : {}),
}

const mode = testTo ? `TEST -> ${testTo}` : doSend ? 'REAL SEND -> all confirmed subscribers' : 'DRY RUN (count only)'
console.log(`\n  Issue:   ${issue.slug}`)
console.log(`  Subject: ${issue.subject}`)
console.log(`  Mode:    ${mode}\n`)

async function call() {
  const res = await fetch(SEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}`, 'x-command-agent': 'send-issue' },
    body: JSON.stringify(payload),
  })
  const text = await res.text()
  let json
  try {
    json = JSON.parse(text)
  } catch {
    die(`Unexpected response (${res.status}): ${text.slice(0, 300)}`)
  }
  if (!res.ok || !json.ok) die(`Refused (${res.status}): ${json.error || JSON.stringify(json)}`)
  return json
}

if (!doSend) {
  const json = await call()
  if (testTo) console.log(`  Test sent to ${json.test}.\n`)
  else {
    console.log(`  ${json.confirmed} confirmed subscriber(s) on ${json.list} would receive it.`)
    if (json.already) console.log(`  Already started under this slug: ${json.already.sent} sent, ${json.already.pending} still to go.`)
    console.log('')
  }
} else {
  // Command sends a batch per call; keep calling until nothing is left.
  for (let round = 1; round <= 200; round++) {
    const json = await call()
    console.log(`  ${json.line}`)
    if (json.done) break
  }
  console.log('')
}
