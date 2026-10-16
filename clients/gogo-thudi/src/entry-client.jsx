import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { trackClicks } from './track'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
)

// Built pages arrive as finished HTML, so React attaches to it. In local dev the page is empty.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)

trackClicks()
