// Server-side proxy for the qualifier form. Holds the Command secret (as a
// Vercel environment variable) so it never reaches the browser, maps the
// answers to Command's payload shape, and forwards the enquiry.
//
// We never surface an error from the Command endpoint to the visitor, so this
// returns success once it has a usable email, then forwards as a best effort
// and logs any failure server-side.

const COMMAND_URL = 'https://command.millionairecontracts.com/api/inbound/enquiry'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {})
  const email = (body.email || '').toString().trim()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required.' })
  }

  const secret = process.env.COMMAND_ENQUIRY_SECRET
  if (!secret) {
    console.error('COMMAND_ENQUIRY_SECRET is not set')
    return res.status(200).json({ success: true })
  }

  const payload = {
    email,
    company: body.company || '',
    contact_name: body.name || '',
    website: body.website || '',
    source: 'website',
    answers: {
      website: body.website || '',
      avg_deal: body.dealValue || '',
      lead_sources: body.leadSource || '',
      territory: body.territory || '',
      what_you_sell: body.whatYouSell || '',
      who_buys: body.whoBuys || '',
    },
    budget_band: body.budget || '',
    timeline: body.timing || '',
    tried_before: body.tried || '',
    sellers: body.sellers || '',
  }

  try {
    const r = await fetch(COMMAND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-command-secret': secret,
      },
      body: JSON.stringify(payload),
    })
    if (r.status !== 202) {
      const text = await r.text().catch(() => '')
      console.error('Command enquiry non-202', r.status, text)
    }
  } catch (err) {
    console.error('Command enquiry forward failed', err)
  }

  return res.status(200).json({ success: true })
}

function safeParse(s) {
  try {
    return JSON.parse(s)
  } catch {
    return {}
  }
}
