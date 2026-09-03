// Post-build prerender.
//
// This site is a client-side React SPA. react-helmet-async sets per-page
// meta tags at runtime, which Google reads but most social scrapers
// (LinkedIn, Facebook, iMessage, WhatsApp, Slack) do not, because they do
// not run JavaScript. They only read the static HTML the server returns.
//
// This script runs after `vite build`. For every route it writes a
// dist/<route>/index.html whose <title> and Open Graph / Twitter tags are
// baked in for that specific page. Vercel serves static files before
// applying the catch-all rewrite in vercel.json, so these prerendered
// files win for crawlers, and the SPA fallback still handles everything
// else. The base dist/index.html stays as the homepage card.

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const PAGES = path.join(ROOT, 'src', 'pages')
const SITE = 'https://millionairecontracts.com'

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')

// ── escape helpers ──
const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const fullTitle = (title) =>
  title.includes('Millionaire Contracts') ? title : `${title} | Millionaire Contracts`

// ── collect static routes from page source ──
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name)
    if (d.isDirectory()) return walk(p)
    return d.name.endsWith('.jsx') ? [p] : []
  })
}

const SKIP = new Set(['CaseStudy.jsx', 'NotFound.jsx'])
const routes = []

for (const file of walk(PAGES)) {
  if (SKIP.has(path.basename(file))) continue
  const src = fs.readFileSync(file, 'utf8')
  const block = src.match(/<SEOMeta\b([\s\S]*?)\/>/)
  if (!block) continue
  const attrs = block[1]
  const grab = (name) => {
    const m = attrs.match(new RegExp(`${name}="([^"]*)"`))
    return m ? m[1] : null
  }
  const routePath = grab('path')
  const title = grab('title')
  const description = grab('description')
  if (!routePath || !title || !description) continue // dynamic / non-literal props
  routes.push({ path: routePath, title, description, type: grab('type') || 'website' })
}

// ── load the server render function (built by `vite build --ssr`) ──
const { render } = await import(url.pathToFileURL(path.join(ROOT, 'dist-server', 'entry-server.js')).href)

// ── add case-study routes from the data module ──
const { caseStudies } = await import(url.pathToFileURL(path.join(ROOT, 'src', 'data', 'caseStudies.js')).href)
for (const [slug, data] of Object.entries(caseStudies)) {
  const metrics = data.metrics.map((m) => `${m.value} ${m.label}`).join(', ')
  routes.push({
    path: `/${slug}`,
    title: `${data.name} Case Study`,
    description: `${data.tagline} See how Millionaire Contracts delivered results for ${data.name}: ${metrics}.`,
    type: 'website',
  })
}

// ── write a prerendered file per route ──
// Bakes in per-page meta tags AND the server-rendered page content, so the
// page has real HTML before any JavaScript runs (fast paint, crawlable).
function renderPage({ path: routePath, title, description, type }) {
  const ft = fullTitle(title)
  const canonical = `${SITE}${routePath}`
  let html = template

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(ft)}</title>`)
  html = html.replace(/(<meta name="description" content=")[^"]*("\s*\/>)/, `$1${escAttr(description)}$2`)
  html = html.replace(/(<meta property="og:type" content=")[^"]*("\s*\/>)/, `$1${type}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/, `$1${escAttr(ft)}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*("\s*\/>)/, `$1${escAttr(description)}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*("\s*\/>)/, `$1${canonical}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*("\s*\/>)/, `$1${escAttr(ft)}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*("\s*\/>)/, `$1${escAttr(description)}$2`)

  // canonical link is not in the static template; inject one
  html = html.replace(/(<meta name="description"[^>]*\/>)/, `$1\n    <link rel="canonical" href="${canonical}" />`)

  // Render the page content and inject it into the root element.
  let body = ''
  try {
    body = render(routePath).html
  } catch (err) {
    console.error(`prerender: content render failed for ${routePath}:`, err.message)
  }
  if (body) {
    html = html.replace(/<div id="root"><\/div>/, `<div id="root">${body}</div>`)
  }

  return html
}

let count = 0
let content = 0
for (const route of routes) {
  const slug = route.path.replace(/^\//, '')
  if (!slug) continue // skip "/" (redirects to /home)
  const outDir = path.join(DIST, slug)
  fs.mkdirSync(outDir, { recursive: true })
  const out = renderPage(route)
  if (out.includes('<div id="root"><div')) content++
  fs.writeFileSync(path.join(outDir, 'index.html'), out)
  count++
}

console.log(`prerender: wrote ${count} routes (${content} with baked-in content)`)
