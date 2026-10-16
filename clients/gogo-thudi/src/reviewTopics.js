import { reviews } from './content'
import { servicePages } from './servicePages'

// Reviews that describe her and the experience, used on service pages. The health
// prediction review stays on the reviews page only, so service pages make no medical claims.
const SERVICE_PAGE_EXCLUDE = new Set([23])

export function reviewsFor(page, count = 4) {
  const matched = reviews
    .filter((r) => !SERVICE_PAGE_EXCLUDE.has(r.id) && page.reviewMatch.test(r.text))
    .sort((a, b) => b.text.length - a.text.length)
  return matched.slice(0, count)
}

// Groups every review under the first service page whose topic it mentions.
export function reviewsByTopic() {
  const groups = servicePages.map((p) => ({ page: p, reviews: [] }))
  const other = []
  for (const r of reviews) {
    const g = groups.find((x) => x.page.reviewMatch.test(r.text))
    if (g) g.reviews.push(r)
    else other.push(r)
  }
  return { groups: groups.filter((g) => g.reviews.length), other }
}
