import { useEffect, useState } from 'react'
import { trackGoal } from '../lib/track'

// The ad landing form: who you are and the problem you need solved, nothing
// else. Posts through the same edge function as the qualifier, which holds
// the Command secret. Command takes `problem` as something to work on its
// own, so a request with no website still becomes a lead, with the problem
// first on its notes (MC-Fulfillment-Engine docs/mc-paid-ads.md).
const ENQUIRY_ENDPOINT = 'https://yhktwznlnfzcfzrmpniv.supabase.co/functions/v1/enquiry-submit'

const SIZES = ['Just me', '2 to 10 people', '11 to 50 people', 'More than 50']

// Where the visit came from, read once from the ad's link. Command keeps it
// as the lead's source, e.g. enquiry:google-ads:finding-people.
function adSource() {
  try {
    const q = new URLSearchParams(window.location.search)
    const source = q.get('utm_source')
    const campaign = q.get('utm_campaign')
    return {
      source: source ? [source, campaign].filter(Boolean).join(':').slice(0, 120) : 'website:get-a-plan',
      term: (q.get('utm_term') || '').slice(0, 120),
    }
  } catch {
    return { source: 'website:get-a-plan', term: '' }
  }
}

export default function ProblemForm() {
  const [status, setStatus] = useState('idle')
  const [from, setFrom] = useState({ source: 'website:get-a-plan', term: '' })
  const [data, setData] = useState({ name: '', company: '', email: '', problem: '', website: '', size: '' })

  useEffect(() => setFrom(adSource()), [])

  const set = (field, value) => setData((d) => ({ ...d, [field]: value }))
  const ready =
    data.name.trim().length > 1 &&
    data.company.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    data.problem.trim().length > 10 &&
    !!data.size

  async function handleSubmit(e) {
    e.preventDefault()
    if (!ready || status === 'loading') return
    setStatus('loading')
    // Best effort, as on the qualifier: the visitor sees a thank-you either way.
    try {
      await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          company: data.company,
          website: data.website,
          problem: data.problem,
          size: data.size,
          source: from.source,
          term: from.term,
        }),
      })
    } catch {
      // swallow
    }
    trackGoal('plan requested')
    // GA4 key event, imported into Google Ads as the conversion.
    if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { form: 'get-a-plan' })
    setStatus('success')
  }

  const inputClass =
    'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-mc-gold transition-colors'
  const optionClass = (selected) =>
    `text-left px-4 py-3 rounded-lg border font-body text-sm transition-colors ${
      selected ? 'border-mc-gold bg-mc-gold/10 text-white' : 'border-white/15 bg-white/5 text-gray-300 hover:border-white/30'
    }`

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto text-center py-10">
        <div className="w-14 h-14 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-mc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline text-2xl font-black text-white mb-3">Got it</h3>
        <p className="font-body text-gray-400 leading-relaxed">
          Thanks, {data.name.split(' ')[0] || 'and thanks'}. A person reads what you wrote and replies soon, in working hours usually within minutes. Your plan follows within two working days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
      <div>
        <label className="block font-body text-sm text-gray-300 mb-2" htmlFor="pf-problem">
          What do you need done that isn't getting done?
        </label>
        <textarea
          id="pf-problem"
          className={`${inputClass} min-h-[130px] resize-none`}
          placeholder="In your own words. For example: we need the right people found and brought on board, our enquiries go nowhere, or nobody has time to book meetings."
          value={data.problem}
          onChange={(e) => set('problem', e.target.value)}
        />
      </div>

      <div>
        <span className="block font-body text-sm text-gray-300 mb-2">How big is the business?</span>
        <div className="grid grid-cols-2 gap-3">
          {SIZES.map((s) => (
            <button key={s} type="button" className={optionClass(data.size === s)} onClick={() => set('size', s)}>{s}</button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <input className={inputClass} placeholder="Your name" value={data.name} onChange={(e) => set('name', e.target.value)} />
        <input className={inputClass} placeholder="Company" value={data.company} onChange={(e) => set('company', e.target.value)} />
        <input className={inputClass} type="email" placeholder="Work email" value={data.email} onChange={(e) => set('email', e.target.value)} />
        <input className={inputClass} placeholder="Website (optional)" value={data.website} onChange={(e) => set('website', e.target.value)} />
      </div>

      <button type="submit" disabled={!ready || status === 'loading'} className="btn-primary w-full text-center disabled:opacity-40 disabled:cursor-not-allowed">
        {status === 'loading' ? 'Sending...' : 'Send me a plan'}
      </button>
      <p className="font-body text-xs text-gray-500 text-center">Free. No call needed to get it. We only use your details to reply.</p>
    </form>
  )
}
