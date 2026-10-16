import { createElement } from 'react'
import { page } from './page'

// The content articles and newsletter issues as routes, each fetched only when
// it is needed, the same way the hand-written pages are (see page.js).
//
// The route list comes from the file names, which are the slugs, so no
// article's text is downloaded just to know the address exists. The text and
// the template arrive with the page. A draft still renders as not found.

const articleFiles = import.meta.glob('../content/articles/*.js')
const issueFiles = import.meta.glob('../content/issues/*.js')

const slugOf = (file) => file.split('/').pop().replace(/\.js$/, '')

function contentPage(loadEntry, loadTemplate) {
  return page(() =>
    Promise.all([loadEntry(), loadTemplate(), import('../pages/NotFound')]).then(([m, t, nf]) => ({
      default: (props) =>
        m.default && m.default.status === 'published'
          ? createElement(t.default, { ...props, entry: m.default })
          : createElement(nf.default),
    })),
  )
}

export const articlePages = Object.entries(articleFiles).map(([file, load]) => ({
  slug: slugOf(file),
  Page: contentPage(load, () => import('../components/ArticleTemplate')),
}))

export const issuePages = Object.entries(issueFiles).map(([file, load]) => ({
  slug: slugOf(file),
  Page: contentPage(load, () => import('../components/IssueTemplate')),
}))
