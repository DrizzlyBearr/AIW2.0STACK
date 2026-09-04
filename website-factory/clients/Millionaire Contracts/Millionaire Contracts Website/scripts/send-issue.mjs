// Manual newsletter sender for Pipeline & Power.
//
// Reads one issue data file, renders its sections to email HTML, and calls the
// Supabase `newsletter-send` edge function. Nothing goes out unless you say so:
// the default is a dry run that only reports the recipient count. A test send
// goes to one address. A real send needs --send AND the confirm gate in the
// function.
//
// The send secret NEVER lives in the repo. Supply it in the environment:
//   NEWSLETTER_SEND_SECRET=... node scripts/send-issue.mjs <slug> [flags]
//
// Flags:
//   (none)            dry run  -> prints how many subscribers would receive it
//   --test=you@x.com  sends one [TEST] email to that address only
//   --send            sends to ALL confirmed, active subscribers (real send)
//
// Examples:
//   NEWSLETTER_SEND_SECRET=xxx node scripts/send-issue.mjs issue-01-the-shift
//   NEWSLETTER_SEND_SECRET=xxx node scripts/send-issue.mjs issue-01-the-shift --test=neo@millionairecontracts.com
//   NEWSLETTER_SEND_SECRET=xxx node scripts/send-issue.mjs issue-01-the-shift --send

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { marked } from 'marked'

marked.setOptions({ mangle: false, headerIds: false })

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const ISSUES_DIR = path.join(ROOT, 'src', 'content', 'issues')

const FN_URL =
  process.env.NEWSLETTER_SEND_URL ||
  'https://yhktwznlnfzcfzrmpniv.supabase.co/functions/v1/newsletter-send'

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

const secret = process.env.NEWSLETTER_SEND_SECRET
if (!secret) die('NEWSLETTER_SEND_SECRET is not set. Prefix the command with it; never paste it into a file.')

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

// ── render the issue sections to email-ready HTML ──
// Matches the on-site IssueTemplate: a bold teal heading per section, then the
// markdown body. The function wraps this in the branded shell (logo, gold rule,
// unsubscribe footer), so we only produce the inner content here.
function toEmailHtml(sections = []) {
  return sections
    .map((sec) => {
      const head = sec.heading
        ? `<h2 style="font-family:Inter,Arial,sans-serif;font-size:20px;font-weight:800;color:#0f766e;margin:28px 0 12px;">${sec.heading}</h2>`
        : ''
      const body = marked.parse(sec.body || '')
      return head + body
    })
    .join('\n')
}

const bodyHtml = toEmailHtml(issue.sections)
const subject = issue.subject

// ── build the request ──
const payload = { secret, subject, bodyHtml, preview: issue.preview }
if (testTo) payload.test = testTo
else if (doSend) payload.confirm = 'SEND'

const mode = testTo ? `TEST -> ${testTo}` : doSend ? 'REAL SEND -> all subscribers' : 'DRY RUN (count only)'
console.log(`\n  Issue:   ${issue.slug}`)
console.log(`  Subject: ${subject}`)
console.log(`  Mode:    ${mode}\n`)

const res = await fetch(FN_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
})

const text = await res.text()
let json
try {
  json = JSON.parse(text)
} catch {
  die(`Unexpected response (${res.status}): ${text}`)
}

if (!res.ok) die(`Send failed (${res.status}): ${JSON.stringify(json)}`)

console.log('  Result:', JSON.stringify(json, null, 2), '\n')
