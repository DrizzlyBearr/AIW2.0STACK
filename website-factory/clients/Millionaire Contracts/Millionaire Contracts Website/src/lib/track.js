// Tells Command what visitors do on the site, so MC owns its own numbers.
//
// Four things are reported: a page was viewed, a page was read (in view for
// 15 seconds or scrolled half way), a link or button was clicked, and a goal
// (a click towards booking a call or an enquiry sent). Nothing else.
//
// No cookies, no IP, nothing that follows a person between visits. A visit is
// a random id kept in sessionStorage, which the browser forgets when the tab
// closes. Visitors who ask not to be tracked (Do Not Track or Global Privacy
// Control) are not.
//
// Reports go with sendBeacon, so they never slow a page or hold up a click.

const ENDPOINT = 'https://command.millionairecontracts.com/api/site-events'

// Where a click counts as the point of the visit. An external link counts by
// its host: going to hire on Upwork is a goal as much as booking a call.
const GOAL_PATHS = ['/calender', '/contact-us', 'www.upwork.com']

const READ_AFTER_MS = 15000
const FLUSH_AFTER_MS = 4000

const browser = typeof window !== 'undefined' && typeof document !== 'undefined'

function allowed() {
  if (!browser) return false
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return false
  if (navigator.globalPrivacyControl === true) return false
  // Only the live site reports. Previews and local builds would be noise.
  return /(^|\.)millionairecontracts\.com$/.test(location.hostname)
}

function visitId() {
  try {
    let id = sessionStorage.getItem('mc_visit')
    if (!id) {
      const bytes = new Uint8Array(12)
      crypto.getRandomValues(bytes)
      id = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
      sessionStorage.setItem('mc_visit', id)
    }
    return id
  } catch {
    return null
  }
}

function device() {
  const w = window.innerWidth
  if (w < 640) return 'phone'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

// Where the visit came from: a campaign tag if the link carried one, else the
// referring site. Only sent once, with the first view.
function arrival() {
  try {
    const tag = new URLSearchParams(location.search).get('utm_source')
    if (tag) return tag
  } catch {
    // ignore
  }
  return document.referrer || ''
}

let queue = []
let timer = null
let sentArrival = false

function flush() {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  if (queue.length === 0) return
  const session = visitId()
  if (!session) {
    queue = []
    return
  }
  const body = { s: session, d: device(), e: queue.splice(0, 25) }
  if (!sentArrival) {
    body.r = arrival()
    sentArrival = true
  }
  const payload = JSON.stringify(body)
  try {
    if (!navigator.sendBeacon || !navigator.sendBeacon(ENDPOINT, payload)) {
      fetch(ENDPOINT, { method: 'POST', body: payload, keepalive: true, mode: 'cors' }).catch(() => {})
    }
  } catch {
    // A report is never worth an error on the page.
  }
  if (queue.length > 0) flush()
}

function push(event) {
  if (!allowed()) return
  queue.push(event)
  if (!timer) timer = setTimeout(flush, FLUSH_AFTER_MS)
}

const pathOf = (url) => {
  try {
    const u = new URL(url, location.href)
    return u.origin === location.origin ? u.pathname : u.hostname
  } catch {
    return null
  }
}

let readTimer = null
let readPage = null
let onScroll = null

/** Call on every route change. A hash or query change on the same page is not a view. */
export function trackView(path) {
  if (!allowed() || path === readPage) return
  push({ k: 'view', p: path })
  // The view goes at once, so a visitor who leaves in three seconds is still
  // counted.
  flush()

  if (readTimer) clearTimeout(readTimer)
  if (onScroll) window.removeEventListener('scroll', onScroll)
  readPage = path
  let done = false
  const read = () => {
    if (done || readPage !== path) return
    done = true
    if (readTimer) clearTimeout(readTimer)
    window.removeEventListener('scroll', onScroll)
    push({ k: 'engaged', p: path })
  }
  readTimer = setTimeout(() => {
    if (document.visibilityState === 'visible') read()
  }, READ_AFTER_MS)
  onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    if (max > 0 && window.scrollY / max >= 0.5) read()
  }
  window.addEventListener('scroll', onScroll, { passive: true })
}

/** A step that is not a link, such as a form being sent. */
export function trackGoal(name) {
  if (!allowed()) return
  push({ k: 'goal', p: location.pathname, t: name })
  flush()
}

/** Listens for clicks on links and buttons, once, for the life of the page. */
export function startClickTracking() {
  if (!allowed() || window.__mcClicks) return
  window.__mcClicks = true

  document.addEventListener(
    'click',
    (e) => {
      const el = e.target instanceof Element ? e.target.closest('a, button') : null
      if (!el) return
      let target = null
      if (el.tagName === 'A' && el.getAttribute('href')) {
        target = pathOf(el.getAttribute('href'))
      }
      if (!target) {
        target = (el.getAttribute('aria-label') || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80)
      }
      if (!target) return
      const goal = GOAL_PATHS.includes(target)
      push({ k: goal ? 'goal' : 'click', p: location.pathname, t: target })
      // A link that leaves the page has to be sent now or not at all.
      if (el.tagName === 'A') flush()
    },
    { capture: true },
  )

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush()
  })
}
