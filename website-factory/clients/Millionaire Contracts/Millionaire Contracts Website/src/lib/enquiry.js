// Where the site's forms send an enquiry: MC's own enquiry address in
// Command (Command, Enquiries). It is Command's door for a business's website
// form, public by design, so no secret is needed and forms post to it
// directly. Each enquiry lands on MC's "Website enquiries" campaign, the
// ten-minute alert fires, and the email-replies worker drafts the first
// answer for a person to approve. If the address is ever replaced in Command,
// paste the new one here.
//
// It replaced the enquiry-submit edge function, which as of 30 October 2026
// had never delivered an enquiry to Command.
export const ENQUIRY_URL = 'https://command.millionairecontracts.com/api/enquiries/bqUElO3i33p8i2X01M9P9QtauVR-UB8h'

/** Where the visit came from, from the page's link: utm_source:utm_campaign, or the fallback. */
export function visitSource(fallback) {
  try {
    const q = new URLSearchParams(window.location.search)
    const source = q.get('utm_source')
    const campaign = q.get('utm_campaign')
    return {
      source: source ? [source, campaign].filter(Boolean).join(':').slice(0, 120) : fallback,
      term: (q.get('utm_term') || '').slice(0, 120),
    }
  } catch {
    return { source: fallback, term: '' }
  }
}

/**
 * Sends an enquiry. Fields Command recognises (name, email, company, message)
 * fill its record; every other field arrives as a labelled line under the
 * message, so label them the way a person should read them.
 */
export function sendEnquiry(fields) {
  return fetch(ENQUIRY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  })
}
