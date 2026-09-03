import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Renders the app for a given route to an HTML string. Used by the prerender
// script at build time. Per-page meta tags are injected separately by the
// prerender script, so the helmet context here is created but not consumed.
export function render(routePath) {
  const helmetContext = {}
  const html = renderToString(
    <StaticRouter location={routePath}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>,
  )
  return { html }
}
