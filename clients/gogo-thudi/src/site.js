// Public address of the site. Set VITE_SITE_URL in Vercel once a domain is bought
// (e.g. https://gogothudi.co.za). Used for canonical links, sitemap and social previews.
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://gogo-thudi.vercel.app').replace(/\/$/, '')

// Google Analytics 4 measurement ID (G-XXXXXXX). Tracking stays off until this is set.
export const GA_ID = import.meta.env.VITE_GA_ID || ''

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '/' : path}`

// Shown on service pages and guides, and used as dateModified in structured data.
export const LAST_UPDATED = '2026-10-17'
export const LAST_UPDATED_LABEL = '17 October 2026'
