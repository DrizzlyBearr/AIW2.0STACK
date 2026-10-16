// Records booking actions (WhatsApp, call, form, profile links) so we can see which
// pages and services bring appointments. Sends to GA4 when GA_ID is set; otherwise does nothing.
export function track(event, params = {}) {
  if (typeof window === 'undefined') return
  const payload = { page_path: window.location.pathname, ...params }
  if (typeof window.gtag === 'function') window.gtag('event', event, payload)
}

// One listener for every link on the site, so new buttons are tracked without extra code.
// Add data-cta="hero" (etc.) to a link to record where on the page it was clicked.
export function trackClicks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest && e.target.closest('a[href]')
    if (!link) return
    const href = link.getAttribute('href')
    const params = { cta_location: link.dataset.cta || 'unlabelled', service: link.dataset.service || undefined }
    if (href.startsWith('https://wa.me/')) track('whatsapp_click', params)
    else if (href.startsWith('tel:')) track('call_click', params)
    else if (href.startsWith('mailto:')) track('email_click', params)
    else if (/sa-psychics\.com|gogoonline\.co\.za/.test(href)) track('profile_click', { ...params, link_url: href })
    else if (/facebook\.com|instagram\.com|tiktok\.com/.test(href)) track('social_click', { ...params, link_url: href })
  })
}
