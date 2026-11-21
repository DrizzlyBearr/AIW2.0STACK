// The Meta (Facebook and Instagram) pixel, so a Meta ad for the course can
// learn which clicks became sign-ups (Kat, 21 November 2026).
//
// Off until PIXEL_ID is filled in: the id comes from Meta Events Manager and
// is not a secret (it is visible in every page that loads it). Like
// src/lib/track.js, it only runs on the live site and not for visitors who ask
// not to be tracked (Do Not Track or Global Privacy Control).
//
// Three events, nothing else:
// - PageView on every page
// - CompleteRegistration when someone signs up for Beyond Referrals
// - Subscribe when they confirm by email
// - Lead when someone asks for a free plan
export const PIXEL_ID = ''

const browser = typeof window !== 'undefined' && typeof document !== 'undefined'

function allowed() {
  if (!browser || !PIXEL_ID) return false
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return false
  if (navigator.globalPrivacyControl === true) return false
  return /(^|\.)millionairecontracts\.com$/.test(location.hostname)
}

function load() {
  if (window.fbq) return true
  if (!allowed()) return false
  // Meta's own loader, written out: it queues calls until the script arrives.
  const fbq = function (...args) {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  }
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []
  window.fbq = fbq
  if (!window._fbq) window._fbq = fbq
  const s = document.createElement('script')
  s.async = true
  s.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(s)
  window.fbq('init', PIXEL_ID)
  return true
}

/** A page was viewed. Called on every route change. */
export function metaPageView() {
  if (load()) window.fbq('track', 'PageView')
}

/** One of the standard events above, with a few plain parameters. */
export function metaEvent(name, params = {}) {
  if (load()) window.fbq('track', name, params)
}
