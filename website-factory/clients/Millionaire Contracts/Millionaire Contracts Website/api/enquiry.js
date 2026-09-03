// Server-side proxy for the qualifier form. Holds the Command secret (as a
// Vercel environment variable) so it never reaches the browser, maps the
// answers to Command's payload shape, forwards the enquiry, and sends two
// emails via Resend: a confirmation to the person who submitted, and an alert
// to the team.
//
// We never surface an error from the Command endpoint to the visitor, so this
// returns success once it has a usable email, then forwards and emails as a
// best effort and logs any failure server-side.

const COMMAND_URL = 'https://command.millionairecontracts.com/api/inbound/enquiry'
const TEAM_EMAIL = 'neo@millionairecontracts.com'
const FROM = 'Millionaire Contracts <neo@millionairecontracts.com>'
const LOGO = 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/66fe6791c6d28935508f7ce5.png'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {})
  const email = (body.email || '').toString().trim()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required.' })
  }

  const name = body.name || ''
  const company = body.company || ''

  const payload = {
    email,
    company,
    contact_name: name,
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

  // Forward to Command (best effort).
  const secret = process.env.COMMAND_ENQUIRY_SECRET
  if (secret) {
    try {
      const r = await fetch(COMMAND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-command-secret': secret },
        body: JSON.stringify(payload),
      })
      if (r.status !== 202) {
        const text = await r.text().catch(() => '')
        console.error('Command enquiry non-202', r.status, text)
      }
    } catch (err) {
      console.error('Command enquiry forward failed', err)
    }
  } else {
    console.error('COMMAND_ENQUIRY_SECRET is not set')
  }

  // Send confirmation + team alert (best effort).
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    await Promise.allSettled([
      sendEmail(resendKey, {
        from: FROM,
        to: [email],
        reply_to: TEAM_EMAIL,
        subject: 'We received your enquiry',
        html: confirmationHtml(name),
      }),
      sendEmail(resendKey, {
        from: FROM,
        to: [TEAM_EMAIL],
        reply_to: email,
        subject: `New enquiry: ${company || name || email}`,
        html: alertHtml(body),
      }),
    ])
  } else {
    console.error('RESEND_API_KEY is not set')
  }

  return res.status(200).json({ success: true })
}

async function sendEmail(key, message) {
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    })
    if (!r.ok) {
      const text = await r.text().catch(() => '')
      console.error('Resend send failed', r.status, text)
    }
  } catch (err) {
    console.error('Resend send error', err)
  }
}

function confirmationHtml(name) {
  const first = (name || '').split(' ')[0]
  const greeting = first ? `Thanks, ${escapeHtml(first)}.` : 'Thanks.'
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>We received your enquiry</title></head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:40px 20px;"><tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0a1a1d;border-radius:8px;overflow:hidden;">
      <tr><td style="padding:32px 40px;text-align:center;"><img src="${LOGO}" alt="Millionaire Contracts" style="height:52px;width:auto;max-width:220px;" /></td></tr>
      <tr><td style="height:4px;background:#d8920e;"></td></tr>
      <tr><td style="padding:44px 40px 40px;text-align:center;">
        <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;color:#ffffff;line-height:1.3;">${greeting}</h1>
        <p style="margin:0 0 20px;font-size:15px;color:#9ca3af;line-height:1.8;max-width:440px;display:inline-block;">
          We have your answers, and a real person is reading them. You will hear back from us within one business day with a clear next step, not a generic reply.
        </p>
        <p style="margin:0;font-size:15px;color:#9ca3af;line-height:1.8;">If anything changes in the meantime, just reply to this email.</p>
      </td></tr>
      <tr><td style="padding:24px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.08);">
        <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6;">Millionaire Contracts &bull; <a href="https://millionairecontracts.com" style="color:#d8920e;text-decoration:none;">millionairecontracts.com</a></p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`
}

function alertHtml(b) {
  const rows = [
    ['Contact', b.name],
    ['Email', b.email],
    ['Company', b.company],
    ['Website', b.website],
    ['What they sell', b.whatYouSell],
    ['Market', b.territory],
    ['People selling today', b.sellers],
    ['Who signs off', b.whoBuys],
    ['Lead sources', b.leadSource],
    ['Typical deal value', b.dealValue],
    ['Budget', b.budget],
    ['Timeline', b.timing],
    ['Tried before', b.tried],
  ]
  const cells = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 14px;font-size:12px;font-weight:700;color:#132b2f;background:#f5f3ee;width:180px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;font-size:13px;color:#333;vertical-align:top;">${escapeHtml(value || '—')}</td>
        </tr>`
    )
    .join('')
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>New enquiry</title></head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:40px 20px;"><tr><td align="center">
    <table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e5e5;">
      <tr><td style="background:#0a1a1d;padding:20px 24px;">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;color:#d8920e;text-transform:uppercase;">New Enquiry</p>
        <p style="margin:4px 0 0;font-size:18px;font-weight:800;color:#ffffff;">${escapeHtml(b.company || b.name || b.email || 'Website enquiry')}</p>
      </td></tr>
      <tr><td style="padding:8px 24px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:16px;">${cells}</table>
        <p style="margin:20px 0 0;font-size:12px;color:#999;">Reply to this email to respond directly to the lead.</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`
}

function escapeHtml(s) {
  return (s == null ? '' : String(s))
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function safeParse(s) {
  try {
    return JSON.parse(s)
  } catch {
    return {}
  }
}
