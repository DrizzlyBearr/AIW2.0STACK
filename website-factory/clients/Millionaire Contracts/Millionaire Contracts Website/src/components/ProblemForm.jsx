import { useEffect, useState } from 'react'
import { trackGoal } from '../lib/track'
import { sendEnquiry, visitSource } from '../lib/enquiry'
import { BANDS, MARKETS } from '../lib/markets'

// The ad landing form: the problem you need solved, and only what the plan
// needs to be written or tells us whether we can help
// (MC-Fulfillment-Engine docs/mc-paid-ads.md). Every field here costs some
// visitors, so a new one has to earn its place the same way.
//
// It posts to MC's enquiry address in Command (src/lib/enquiry.js): the
// problem arrives as the message, every other answer and the ad's source as
// labelled lines beneath it.

const SIZES = ['Just me', '2 to 10 people', '11 to 50 people', 'More than 50']
const TIMING = ['Now', 'This quarter', 'Just exploring']

export default function ProblemForm() {
  const [status, setStatus] = useState('idle')
  const [from, setFrom] = useState({ source: 'website:get-a-plan', term: '' })
  const [data, setData] = useState({ name: '', company: '', email: '', problem: '', who: '', market: '', size: '', timing: '', budget: '', tried: '', website: '', gotcha: '' })

  useEffect(() => setFrom(visitSource('website:get-a-plan')), [])

  // The budget is asked in the market's own currency, never converted. A new
  // market clears a budget picked in another currency.
  const market = MARKETS.find((m) => m.code === data.market)
  const budgets = [...(BANDS[market ? market.currency : 'USD'] || BANDS.USD).budget, 'Not sure yet']
  const set = (field, value) => setData((d) => ({ ...d, [field]: value, ...(field === 'market' ? { budget: '' } : {}) }))
  const ready =
    data.name.trim().length > 1 &&
    data.company.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    data.problem.trim().length > 10 &&
    !!data.market &&
    !!data.size &&
    !!data.timing &&
    !!data.budget

  async function handleSubmit(e) {
    e.preventDefault()
    if (!ready || status === 'loading') return
    setStatus('loading')
    // Best effort, as on the qualifier: the visitor sees a thank-you either way.
    try {
      await sendEnquiry({
        message: data.problem,
        name: data.name,
        company: data.company,
        email: data.email,
        Website: data.website,
        'Who they need to reach': data.who,
        'Based in': market ? market.label : '',
        Size: data.size,
        Timing: data.timing,
        Budget: data.budget,
        'Tried so far': data.tried,
        source: from.source,
        term: from.term,
        _gotcha: data.gotcha,
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
        <label className="block font-body text-sm text-gray-300 mb-2" htmlFor="pf-who">
          Who do you need to reach? <span className="text-gray-500">(optional)</span>
        </label>
        <input
          id="pf-who"
          className={inputClass}
          placeholder="For example: law firm partners in Gauteng, academic writers, our own past enquiries"
          value={data.who}
          onChange={(e) => set('who', e.target.value)}
        />
      </div>

      <div>
        <span className="block font-body text-sm text-gray-300 mb-2">Where is the business based?</span>
        <div className="grid grid-cols-2 gap-3">
          {MARKETS.map((m) => (
            <button key={m.code} type="button" className={optionClass(data.market === m.code)} onClick={() => set('market', m.code)}>{m.label}</button>
          ))}
        </div>
      </div>

      <div>
        <span className="block font-body text-sm text-gray-300 mb-2">How big is the business?</span>
        <div className="grid grid-cols-2 gap-3">
          {SIZES.map((s) => (
            <button key={s} type="button" className={optionClass(data.size === s)} onClick={() => set('size', s)}>{s}</button>
          ))}
        </div>
      </div>

      <div>
        <span className="block font-body text-sm text-gray-300 mb-2">When do you need this working?</span>
        <div className="grid grid-cols-3 gap-3">
          {TIMING.map((t) => (
            <button key={t} type="button" className={optionClass(data.timing === t)} onClick={() => set('timing', t)}>{t}</button>
          ))}
        </div>
      </div>

      {market && (
      <div>
        <span className="block font-body text-sm text-gray-300 mb-2">Roughly what could you spend on solving it, in {market.currency}?</span>
        <div className="grid grid-cols-2 gap-3">
          {budgets.map((b) => (
            <button key={b} type="button" className={optionClass(data.budget === b)} onClick={() => set('budget', b)}>{b}</button>
          ))}
        </div>
      </div>
      )}

      <div>
        <label className="block font-body text-sm text-gray-300 mb-2" htmlFor="pf-tried">
          Anything you've tried that didn't work? <span className="text-gray-500">(optional)</span>
        </label>
        <textarea
          id="pf-tried"
          className={`${inputClass} min-h-[80px] resize-none`}
          placeholder="A hire, an agency, a tool. What happened?"
          value={data.tried}
          onChange={(e) => set('tried', e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <input className={inputClass} placeholder="Your name" value={data.name} onChange={(e) => set('name', e.target.value)} />
        <input className={inputClass} placeholder="Company" value={data.company} onChange={(e) => set('company', e.target.value)} />
        <input className={inputClass} type="email" placeholder="Work email" value={data.email} onChange={(e) => set('email', e.target.value)} />
        <input className={inputClass} placeholder="Website (optional)" value={data.website} onChange={(e) => set('website', e.target.value)} />
      </div>

      {/* Only a bot fills this in; Command drops the enquiry if it is. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={data.gotcha} onChange={(e) => set('gotcha', e.target.value)} />

      <button type="submit" disabled={!ready || status === 'loading'} className="btn-primary w-full text-center disabled:opacity-40 disabled:cursor-not-allowed">
        {status === 'loading' ? 'Sending...' : 'Send me a plan'}
      </button>
      <p className="font-body text-xs text-gray-500 text-center">Free. No call needed to get it. We only use your details to reply.</p>
    </form>
  )
}
