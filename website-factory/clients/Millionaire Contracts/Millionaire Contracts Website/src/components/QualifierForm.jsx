import { useEffect, useState } from 'react'
import { trackGoal } from '../lib/track'
import { sendEnquiry, visitSource } from '../lib/enquiry'
import { BANDS, MARKETS } from '../lib/markets'

// Posts to MC's enquiry address in Command (src/lib/enquiry.js). The two
// answers in their own words make the message; every other answer arrives as
// a labelled line beneath it, so whoever replies reads the whole picture.

const SELLERS = ['Nobody yet', 'One person', 'Two to five', 'More than five']
const LEAD_SOURCES = ['Referral', 'Inbound enquiries', 'Paid ads', 'Outbound', 'Not sure']
const TIMING = ['Now', 'This quarter', 'Just exploring']

const TOTAL_STEPS = 11

export default function QualifierForm() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState({
    company: '',
    website: '',
    whatYouSell: '',
    market: '',
    sellers: '',
    whoBuys: '',
    leadSource: [],
    dealValue: '',
    budget: '',
    timing: '',
    tried: '',
    name: '',
    email: '',
    gotcha: '',
  })
  const [from, setFrom] = useState({ source: 'website:services', term: '' })
  useEffect(() => setFrom(visitSource('website:services')), [])

  const market = MARKETS.find((m) => m.code === data.market)
  const currency = market ? market.currency : 'USD'
  const bands = BANDS[currency] || BANDS.USD

  const set = (field, value) => setData((d) => ({ ...d, [field]: value }))
  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const canAdvance = {
    1: data.company.trim().length > 1,
    2: data.whatYouSell.trim().length > 2,
    3: !!data.market,
    4: !!data.sellers,
    5: data.whoBuys.trim().length > 1,
    6: data.leadSource.length > 0,
    7: !!data.dealValue,
    8: !!data.budget,
    9: !!data.timing,
    10: true,
    11: data.name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email),
  }

  async function handleSubmit() {
    if (status === 'loading') return
    setStatus('loading')
    // Best effort. We never surface an error from the enquiry endpoint to the
    // visitor, so the thank-you shows either way.
    try {
      await sendEnquiry({
        message: [`What we sell: ${data.whatYouSell}`, data.tried && `What we have tried: ${data.tried}`].filter(Boolean).join('\n\n'),
        name: data.name,
        company: data.company,
        email: data.email,
        Website: data.website,
        Market: market ? market.label : '',
        'People selling today': data.sellers,
        'Who signs off': data.whoBuys,
        'New business comes from': data.leadSource.join(', '),
        'Typical deal': data.dealValue,
        Budget: data.budget,
        Timing: data.timing,
        source: from.source,
        term: from.term,
        _gotcha: data.gotcha,
      })
    } catch {
      // swallow: the visitor still sees a thank-you
    }
    trackGoal('qualifier sent')
    setStatus('success')
  }

  const optionClass = (selected) =>
    `w-full text-left px-5 py-4 rounded-lg border font-body text-sm transition-colors ${
      selected ? 'border-mc-gold bg-mc-gold/10 text-white' : 'border-white/15 bg-white/5 text-gray-300 hover:border-white/30'
    }`

  const inputClass =
    'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-mc-gold transition-colors'

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto text-center py-10">
        <div className="w-14 h-14 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-mc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline text-2xl font-black text-white mb-3">We have what we need</h3>
        <p className="font-body text-gray-400 leading-relaxed mb-6">
          Thank you, {data.name.split(' ')[0] || 'and thanks'}. We read every answer before we reply, so you hear from a person who already understands your situation. Expect a response within one business day.
        </p>
        <a href="/calender" className="btn-primary">Book a time now instead</a>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex-grow h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-mc-gold transition-all duration-300" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
        </div>
        <span className="font-body text-xs text-gray-500 flex-shrink-0">{step} of {TOTAL_STEPS}</span>
      </div>

      {step === 1 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Let’s start with your business</h3>
          <p className="font-body text-gray-400 text-sm mb-6">Company name, and your website if you have one.</p>
          <div className="space-y-3">
            <input className={inputClass} placeholder="Company name" value={data.company} onChange={(e) => set('company', e.target.value)} autoFocus />
            <input className={inputClass} placeholder="Website (optional)" value={data.website} onChange={(e) => set('website', e.target.value)} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">What do you sell, in one sentence?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">Plain words. What a customer actually pays you for.</p>
          <textarea
            className={`${inputClass} min-h-[90px] resize-none`}
            placeholder="We sell..."
            value={data.whatYouSell}
            onChange={(e) => set('whatYouSell', e.target.value)}
            autoFocus
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Which market are you in?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">This sets the currency for the next questions. We never convert between markets.</p>
          <div className="grid grid-cols-2 gap-3">
            {MARKETS.map((m) => (
              <button key={m.code} type="button" className={optionClass(data.market === m.code)} onClick={() => set('market', m.code)}>{m.label}</button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">How many people sell for you today?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">Anyone whose job includes closing business.</p>
          <div className="space-y-3">
            {SELLERS.map((s) => (
              <button key={s} type="button" className={optionClass(data.sellers === s)} onClick={() => set('sellers', s)}>{s}</button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Who signs off on buying it?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">The role that says yes to the money. A title is fine.</p>
          <input className={inputClass} placeholder="Owner, CFO, Head of Sales..." value={data.whoBuys} onChange={(e) => set('whoBuys', e.target.value)} autoFocus />
        </div>
      )}

      {step === 6 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Where does new business come from now?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">Select all that apply.</p>
          <div className="space-y-3">
            {LEAD_SOURCES.map((s) => {
              const selected = data.leadSource.includes(s)
              return (
                <button
                  key={s}
                  type="button"
                  className={optionClass(selected)}
                  onClick={() =>
                    set('leadSource', selected ? data.leadSource.filter((x) => x !== s) : [...data.leadSource, s])
                  }
                >
                  <span className="flex items-center justify-between">
                    {s}
                    {selected && (
                      <svg className="w-4 h-4 text-mc-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {step === 7 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">What is a typical deal worth to you?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">Roughly, in {currency}. One closed contract or customer.</p>
          <div className="space-y-3">
            {bands.deal.map((b) => (
              <button key={b} type="button" className={optionClass(data.dealValue === b)} onClick={() => set('dealValue', b)}>{b}</button>
            ))}
          </div>
        </div>
      )}

      {step === 8 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">What is your budget for fixing this?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">In {currency}. If you do not know yet, that is a fine answer.</p>
          <div className="space-y-3">
            {bands.budget.map((b) => (
              <button key={b} type="button" className={optionClass(data.budget === b)} onClick={() => set('budget', b)}>{b}</button>
            ))}
            <button type="button" className={optionClass(data.budget === 'Not sure yet')} onClick={() => set('budget', 'Not sure yet')}>Not sure yet</button>
          </div>
        </div>
      )}

      {step === 9 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">When do you want this working?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">Be honest. Exploring is a real answer.</p>
          <div className="space-y-3">
            {TIMING.map((t) => (
              <button key={t} type="button" className={optionClass(data.timing === t)} onClick={() => set('timing', t)}>{t}</button>
            ))}
          </div>
        </div>
      )}

      {step === 10 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Anything you have tried that did not work?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">Optional, but the most useful thing you can tell us.</p>
          <textarea
            className={`${inputClass} min-h-[120px] resize-none`}
            placeholder="An agency, a hire, a tool, a channel. What happened?"
            value={data.tried}
            onChange={(e) => set('tried', e.target.value)}
          />
        </div>
      )}

      {step === 11 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Where do we reach you?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">A real person reads your answers before replying.</p>
          <div className="space-y-3">
            <input className={inputClass} placeholder="Your name" value={data.name} onChange={(e) => set('name', e.target.value)} autoFocus />
            <input className={inputClass} type="email" placeholder="Work email" value={data.email} onChange={(e) => set('email', e.target.value)} />
          </div>
        </div>
      )}

      {/* Only a bot fills this in; Command drops the enquiry if it is. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={data.gotcha} onChange={(e) => set('gotcha', e.target.value)} />

      {/* Nav */}
      <div className="flex items-center justify-between gap-4 mt-8">
        {step > 1 ? (
          <button type="button" onClick={back} className="font-body text-sm text-gray-400 hover:text-white transition-colors">Back</button>
        ) : <span />}

        {step < TOTAL_STEPS ? (
          <button type="button" onClick={next} disabled={!canAdvance[step]} className="btn-primary text-sm py-3 px-7 disabled:opacity-40 disabled:cursor-not-allowed">
            Continue
          </button>
        ) : (
          <button type="button" onClick={handleSubmit} disabled={!canAdvance[11] || status === 'loading'} className="btn-primary text-sm py-3 px-7 disabled:opacity-40 disabled:cursor-not-allowed">
            {status === 'loading' ? 'Sending...' : 'Send it through'}
          </button>
        )}
      </div>
    </div>
  )
}
