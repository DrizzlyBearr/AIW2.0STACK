// Content-as-data layer.
//
// Automated articles (and later newsletter issues) live as structured data
// modules under src/content. A generic template renders them, and the build
// auto-discovers published entries into routes, prerendering, and the sitemap.
// Adding content becomes adding a data file, which the content engine can do
// without touching code. Existing hand-coded pages are unaffected.

const articleModules = import.meta.glob('../content/articles/*.js', { eager: true })

export const articles = Object.values(articleModules)
  .map((m) => m.default)
  .filter((a) => a && a.status === 'published' && a.slug)
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''))

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null
}
