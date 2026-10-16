import { servicePages } from './servicePages'
import { guides } from './guides'

export const servicePath = (s) => `/services/${s.slug}`
export const guidePath = (g) => `/guides/${g.slug}`

export const routes = [
  { path: '/', page: 'home' },
  { path: '/services', page: 'services' },
  ...servicePages.map((p) => ({ path: servicePath(p), page: 'service', slug: p.slug })),
  { path: '/reviews', page: 'reviews' },
  ...guides.map((g) => ({ path: guidePath(g), page: 'guide', slug: g.slug })),
]

export function matchRoute(path) {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return routes.find((r) => r.path === clean) || { path: clean, page: 'notfound' }
}
