// Writes every page out as finished HTML after `vite build`, so search engines and
// link previews get the full content without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const server = await import(pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const pages = [...server.routes, { path: '/404', page: 'notfound' }]
for (const route of pages) {
  const html = template
    .replace('<!--app-head-->', server.headFor(route))
    .replace('<!--app-html-->', server.render(route.path))
  const file = route.path === '/' ? 'index.html' : route.path === '/404' ? '404.html' : `${route.path.slice(1)}/index.html`
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), html)
}

fs.writeFileSync(path.join(dist, 'sitemap.xml'), server.sitemapXml())
fs.writeFileSync(path.join(dist, 'robots.txt'), server.robotsTxt())
fs.writeFileSync(path.join(dist, 'llms.txt'), server.llmsTxt())
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true })
console.log(`Prerendered ${pages.length} pages, sitemap.xml, robots.txt, llms.txt`)
