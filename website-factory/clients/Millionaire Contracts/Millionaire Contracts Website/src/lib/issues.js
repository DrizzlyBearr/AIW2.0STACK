// Newsletter issues (Pipeline & Power). Same content-as-data pattern.
const issueModules = import.meta.glob('../content/issues/*.js', { eager: true })

export const issues = Object.values(issueModules)
  .map((m) => m.default)
  .filter((i) => i && i.status === 'published' && i.slug)
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''))

export function getIssueBySlug(slug) {
  return issues.find((i) => i.slug === slug) || null
}
