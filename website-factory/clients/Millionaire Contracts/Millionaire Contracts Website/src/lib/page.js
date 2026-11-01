import { createElement, lazy } from 'react'

// A page whose code is fetched only when it is needed.
//
// Every page used to be in one 1.6 MB script that every visitor downloaded
// before anything worked, whichever page they came for. Now each page is its
// own small file.
//
// On the server (the prerender) every page is loaded before rendering, so the
// HTML is complete. In the browser the prerendered HTML stays on screen while
// the page's code arrives, then React takes it over. preload() lets a link
// fetch its page's code before it is clicked.
export function page(load) {
  let Loaded = null
  let pending = null
  const preload = () => {
    if (!pending) {
      pending = load().then((m) => {
        Loaded = m.default
        return m
      })
    }
    return pending
  }
  const Lazy = lazy(preload)
  function Page(props) {
    return createElement(Loaded || Lazy, props)
  }
  Page.preload = preload
  all.push(Page)
  return Page
}

const all = []

/** Load every page. The prerender calls this once before rendering. */
export const preloadAll = () => Promise.all(all.map((p) => p.preload()))
