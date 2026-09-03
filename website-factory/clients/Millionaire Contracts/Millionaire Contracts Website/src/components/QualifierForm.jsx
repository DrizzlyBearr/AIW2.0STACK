import { useState } from 'react'

const FN_BASE = 'https://yhktwznlnfzcfzrmpniv.supabase.co/functions/v1'

// Country -> currency. The market chosen in step 2 decides which currency
// the deal-value and budget bands are shown in. We never convert between them.
const MARKETS = [
  { code: 'US', label: 'United States', currency: 'USD', symbol: '$' },
  { code: 'GB', label: 'United Kingdom', currency: 'GBP', symbol: '£' },
  { code: 'CA', label: 'Canada', currency: 'CAD', symbol: 'C$' },
  { code: 'AU', label: 'Australia', currency: 'AUD', symbol: 'A$' },
  { code: 'DE', label: 'Germany', currency: 'EUR', symbol: '€' },
  { code: 'ZA', label: 'South Africa', currency: 'ZAR', symbol: 'R' },
  { code: 'OTHER', label: 'Somewhere else', currency: 'USD', symbol: '$' },
]

// Deal-value and budget bands per currency. ZAR uses local scale.
const BANDS = {
  USD: {
    deal: ['Under $1,000', '$1,000 to $5,000', '$5,000 to $25,000', '$25,000 to $100,000', 'More than $100,000'],
    budget: ['Under $5,000', '$5,000 to $15,000', '$15,000 to $50,000', 'More than $50,000'],
  },
  GBP: {
    deal: ['Under £1,000', '£1,000 to £5,000', '£5,000 to £20,000', '£20,000 to £80,000', 'More than £80,000'],
    budget: ['Under £4,000', '£4,000 to £12,000', '£12,000 to £40,000', 'More than £40,000'],
  },
  CAD: {
    deal: ['Under C$1,000', 'C$1,000 to C$6,000', 'C$6,000 to C$30,000', 'C$30,000 to C$120,000', 'More than C$120,000'],
    budget: ['Under C$6,000', 'C$6,000 to C$18,000', 'C$18,000 to C$60,000', 'More than C$60,000'],
  },
  AUD: {
    deal: ['Under A$1,000', 'A$1,000 to A$6,000', 'A$6,000 to A$30,000', 'A$30,000 to A$120,000', 'More than A$120,000'],
    budget: ['Under A$6,000', 'A$6,000 to A$18,000', 'A$18,000 to A$60,000', 'More than A$60,000'],
  },
  EUR: {
    deal: ['Under €1,000', '€1,000 to €5,000', '€5,000 to €25,000', '€25,000 to €90,000', 'More than €90,000'],
    budget: ['Under €5,000', '€5,000 to €14,000', '€14,000 to €45,000', 'More than €45,000'],
  },
  ZAR: {
    deal: ['Under R15,000', 'R15,000 to R80,000', 'R80,000 to R400,000', 'R400,000 to R1.5m', 'More than R1.5m'],
    budget: ['Under R80,000', 'R80,000 to R250,000', 'R250,000 to R800,000', 'More than R800,000'],
  },
}

const SELLERS = ['Nobody yet', 'One person', 'Two to five', 'More than five']
const SOURCES = ['Referral', 'Inbound enquiries', 'Paid ads', 'Outbound', 'Not sure']
const TIMING = ['Now', 'This quarter', 'Just exploring']

const TOTAL_STEPS = 9

export default function QualifierForm() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [data, setData] = useState({
    company: '',
    website: '',
    market: '',
    sellers: '',
    source: '',
    dealValue: '',
    budget: '',
    timing: '',
    tried: '',
    name: '',
    email: '',
  })

  const market = MARKETS.find((m) => m.code === data.market)
  const currency = market ? market.currency : 'USD'
  const bands = BANDS[currency] || BANDS.USD

  function set(field, value) {
    setData((d) => ({ ...d, [field]: value }))
  }

  function next() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }
  function back() {
    setStep((s) => Math.max(s - 1, 1))
  }

  // Whether the current step has enough to advance. Steps 8 (tried) is optional.
  const canAdvance = {
    1: data.company.trim().length > 1,
    2: !!data.market,
    3: !!data.sellers,
    4: !!data.source,
    5: !!data.dealValue,
    6: !!data.budget,
    7: !!data.timing,
    8: true,
    9: data.name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email),
  }

  async function handleSubmit() {
    if (status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${FN_BASE}/qualifier-submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, currency }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  const optionClass = (selected) =>
    `w-full text-left px-5 py-4 rounded-lg border font-body text-sm transition-colors ${
      selected
        ? 'border-mc-gold bg-mc-gold/10 text-white'
        : 'border-white/15 bg-white/5 text-gray-300 hover:border-white/30'
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
          Thank you, {data.name.split(' ')[0]}. We read every answer before we reply, so you hear from a person who already understands your situation. Expect a response within one business day.
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
          <div
            className="h-full bg-mc-gold transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
        <span className="font-body text-xs text-gray-500 flex-shrink-0">{step} of {TOTAL_STEPS}</span>
      </div>

      {/* Step 1 — company + website */}
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

      {/* Step 2 — market */}
      {step === 2 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Which market are you in?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">This sets the currency for the next questions. We never convert between markets.</p>
          <div className="grid grid-cols-2 gap-3">
            {MARKETS.map((m) => (
              <button key={m.code} type="button" className={optionClass(data.market === m.code)} onClick={() => set('market', m.code)}>
                {m.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 — sellers */}
      {step === 3 && (
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

      {/* Step 4 — source */}
      {step === 4 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Where does new business come from now?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">Pick the one that brings you the most.</p>
          <div className="space-y-3">
            {SOURCES.map((s) => (
              <button key={s} type="button" className={optionClass(data.source === s)} onClick={() => set('source', s)}>{s}</button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5 — deal value */}
      {step === 5 && (
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

      {/* Step 6 — budget */}
      {step === 6 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">What is your budget for fixing this?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">In {currency}. If you do not know yet, that is a fine answer.</p>
          <div className="space-y-3">
            {bands.budget.map((b) => (
              <button key={b} type="button" className={optionClass(data.budget === b)} onClick={() => set('budget', b)}>{b}</button>
            ))}
            <button type="button" className={optionClass(data.budget === 'Not sure yet')} onClick={() => set('budget', 'Not sure yet')}>
              Not sure yet
            </button>
          </div>
        </div>
      )}

      {/* Step 7 — timing */}
      {step === 7 && (
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

      {/* Step 8 — tried */}
      {step === 8 && (
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

      {/* Step 9 — contact */}
      {step === 9 && (
        <div>
          <h3 className="font-headline text-xl font-black text-white mb-2">Where do we reach you?</h3>
          <p className="font-body text-gray-400 text-sm mb-6">A real person reads your answers before replying.</p>
          <div className="space-y-3">
            <input className={inputClass} placeholder="Your name" value={data.name} onChange={(e) => set('name', e.target.value)} autoFocus />
            <input className={inputClass} type="email" placeholder="Work email" value={data.email} onChange={(e) => set('email', e.target.value)} />
          </div>
          {status === 'error' && <p className="text-red-400 text-xs mt-3 leading-relaxed">{errorMsg}</p>}
        </div>
      )}

      {/* Nav */}
      <div className="flex items-center justify-between gap-4 mt-8">
        {step > 1 ? (
          <button type="button" onClick={back} className="font-body text-sm text-gray-400 hover:text-white transition-colors">
            Back
          </button>
        ) : <span />}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance[step]}
            className="btn-primary text-sm py-3 px-7 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canAdvance[9] || status === 'loading'}
            className="btn-primary text-sm py-3 px-7 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send it through'}
          </button>
        )}
      </div>
    </div>
  )
}
