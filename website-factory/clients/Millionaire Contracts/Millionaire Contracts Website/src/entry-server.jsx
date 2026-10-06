import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
export { articles as contentArticles, issues as contentIssues } from './lib/content'

// Renders the app for a given route to an HTML string. Used by the prerender
// script at build time.
//
// The helmet context used to be created and then thrown away, on the grounds
// that the prerender script writes the meta tags itself. That was true of the
// tags it writes, and it silently lost the one thing it does not: JSON-LD.
//
// The result was 28 pages of Article schema and 36 pages of FAQPage schema
// that existed in the source, built, deployed, and never reached a crawler.
// The only structured data in the live HTML was the Organization block in
// index.html, which survived because it is static and was never Helmet's.
// Nothing errored, so nothing said so.
//
// WHY ONLY THE SCRIPTS ARE TAKEN. Title, description, canonical, Open Graph
// and Twitter are baked in by the prerender script from props it parses
// statically out of each page, and it needs to do that because it also builds
// the sitemap from the same pass. Taking them from Helmet as well would
// produce two of each. The schema cannot be parsed statically, because pages
// pass it as a variable rather than a literal, which is exactly why it fell
// through the gap.
export function render(routePath) {
  const helmetContext = {}
  const html = renderToString(
    <StaticRouter location={routePath}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>,
  )

  // SEOMeta is the only component that gives Helmet a script, and the only
  // scripts it gives are application/ld+json, so this is the page's schema
  // and nothing else. Worth re-checking if that ever stops being true.
  const { helmet } = helmetContext
  return { html, ldJson: helmet ? helmet.script.toString() : '' }
}
