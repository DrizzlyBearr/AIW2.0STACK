import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { routes } from './routes'
import { headFor, sitemapXml, robotsTxt, llmsTxt } from './seo'

export function render(path) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
}

export { routes, headFor, sitemapXml, robotsTxt, llmsTxt }
