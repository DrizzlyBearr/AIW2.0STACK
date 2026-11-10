import { useEffect, useRef, useState } from 'react'
import { trackGoal } from '../lib/track'
import { sendEnquiry, visitSource } from '../lib/enquiry'
import { MARKETS } from '../lib/markets'
import { testimonials } from './Testimonials'
import { BOOKING_URL } from '../pages/Calendar'

// The ad landing form (MC-Fulfillment-Engine docs/mc-paid-ads.md), in three
// short steps: the problem first, the easy first yes; three one-tap answers;
// contact details last, once they have already put something in. Research
// for the page (30 October 2026) found B2B forms of six or more fields do
// better split into steps, and that each extra field costs some visitors, so
// it asks only what the plan needs or what says whether we can help.
//
// Tuned for bookings (Kat, 9 November 2026, after the first Google Ads
// enquiry): who they sell to is asked here, so the first reply does not spend
// its one question on it; a WhatsApp number and a website are offered, never
// required, because a message or a call inside ten minutes books far more
// conversations than email; and the thank-you holds the calendar itself, with
// their name and email filled in, instead of a button to another page.
//
// Step 1 is one tap (10 November 2026). In its first week 86 ad visitors came,
// 84% on phones, about 15 started the form and 3 got past step 1, which asked
// them to type their problem out. Everyone who passed it finished step 2,
// which is all taps. So step 1 now asks what they need most as buttons, South
// Africa comes first since nearly every ad visitor is there, and their own
// words are an optional box on the last step.
//
// It posts to MC's enquiry address in Command (src/lib/enquiry.js): the
// problem arrives as the message, every other answer and the ad's source as
// labelled lines beneath it.

const SIZES = ['Just me', '2 to 10 people', '11 to 50 people', 'More than 50']
const TIMING = ['Now', 'This quarter', 'Just exploring']
// Replaced a budget question: nobody knows what solving it should cost before
// they have seen a plan, and asking felt like a sales trap. This one tells us
// what the plan has to work around, and size already says roughly who can pay.
const FINDING = ['Referrals and word of mouth', 'Our own outreach', 'Ads or online', 'No steady way yet']
// What they need most, as one tap. Their own words are optional, on step 3.
const NEEDS = ['More enquiries', 'Turn enquiries into sales', 'Someone to do the outreach', 'Something else']
// South Africa first and on its own row: almost every ad visitor is there, and
// down the list it was mis-tapped as Australia or the United States.
const PLAN_MARKETS = [...MARKETS.filter((m) => m.code === 'ZA'), ...MARKETS.filter((m) => m.code !== 'ZA')]

// Whether we can help at all: MC's work is reaching other businesses.
const SELLS_TO = ['Other businesses', 'The public', 'Both']

// The one quote shown beside the button: specific, named, and about the
// result a buyer here wants.
const BESIDE_BUTTON = testimonials.find((t) => t.company === 'BaseHome Capital')

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Optional, but if it is there it has to be a number someone can message.
const phoneOk = (p) => !p.trim() || p.replace(/\D/g, '').length >= 9

/** The calendar on the thank-you, filled in with what they already typed, tagged so a booking traces back here. */
function bookingEmbed(name, email, source) {
  const q = new URLSearchParams({
    embed_domain: 'www.millionairecontracts.com',
    embed_type: 'Inline',
    hide_gdpr_banner: '1',
    name,
    email,
    utm_source: 'website',
    utm_campaign: 'get-a-plan',
    utm_content: source,
  })
  return `${BOOKING_URL}?${q.toString()}`
}

export default function ProblemForm({ source = 'website:get-a-plan' }) {
  const [status, setStatus] = useState('idle')
  const [step, setStep] = useState(1)
  const [from, setFrom] = useState({ source, term: '' })
  const [data, setData] = useState({ name: '', company: '', email: '', phone: '', website: '', problem: '', need: '', market: '', size: '', timing: '', finding: '', sellsTo: '', gotcha: '' })
  const top = useRef(null)

  useEffect(() => setFrom(visitSource(source)), [source])

  // A call booked on the thank-you is the goal this page exists for, so it is
  // counted: Calendly tells the page when a booking is made.
  useEffect(() => {
    if (status !== 'success') return undefined
    const onMessage = (e) => {
      if (!/^https:\/\/([a-z0-9-]+\.)*calendly\.com$/.test(e.origin) || e.data?.event !== 'calendly.event_scheduled') return
      trackGoal('call booked')
      if (typeof window.gtag === 'function') window.gtag('event', 'book_call', { form: 'get-a-plan' })
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [status])

  const market = MARKETS.find((m) => m.code === data.market)
  const set = (field, value) => setData((d) => ({ ...d, [field]: value }))

  // What each step still needs, so a grey button always says why it is grey.
  const needs = {
    1: [!data.need && 'what you need most', !data.market && 'where you are based'],
    2: [!data.sellsTo && 'who you sell to', !data.size && 'business size', !data.timing && 'when you need it', !data.finding && 'how customers find you'],
    3: [data.name.trim().length < 2 && 'your name', data.company.trim().length < 2 && 'company', !EMAIL.test(data.email) && 'a valid work email', !phoneOk(data.phone) && 'a full WhatsApp number, or leave it empty'],
  }
  const missing = needs[step].filter(Boolean)
  const touched = {
    1: data.need || data.market,
    2: data.sellsTo || data.size || data.timing || data.finding,
    3: data.name || data.company || data.email || data.phone,
  }[step]

  function go(to) {
    setStep(to)
    // Keep the top of the form in view on a phone, where the next step would
    // otherwise open below the fold.
    top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function next(e) {
    e.preventDefault()
    if (missing.length) return
    trackGoal(`plan step ${step} done`)
    go(step + 1)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (missing.length || status === 'loading') return
    setStatus('loading')
    // Best effort, as on the qualifier: the visitor sees a thank-you either way.
    try {
      await sendEnquiry({
        // The tap first, then their own words if they gave any.
        message: [data.need, data.problem.trim()].filter(Boolean).join('\n\n'),
        'Needs most': data.need,
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone.trim(),
        'Sells to': data.sellsTo,
        Website: data.website.trim(),
        'Based in': market ? market.label : '',
        Size: data.size,
        Timing: data.timing,
        'Customers find them through': data.finding,
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
  const label = 'block font-body text-sm text-gray-300 mb-2'

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto text-center py-10">
        <div className="w-14 h-14 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-mc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline text-2xl font-black text-white mb-3">Got it</h3>
        <p className="font-body text-gray-400 leading-relaxed mb-8">
          Thanks, {data.name.split(' ')[0] || 'and thanks'}. A person reads what you wrote and replies soon, in working hours usually within minutes{data.phone.trim() ? ', on WhatsApp if that is quicker' : ''}. Your plan follows within one working day.
        </p>
        {/* The calendar itself, not a button to it: the moment after they ask
            is the moment they are most likely to book. Their name and email
            are already in it. The plan still follows either way. */}
        <div className="rounded-xl border border-mc-gold/30 bg-mc-gold/5 p-4 sm:p-6 text-left">
          <p className="font-headline text-lg font-bold text-white mb-1 text-center">Want to talk it through sooner?</p>
          <p className="font-body text-gray-400 text-sm mb-4 text-center">Pick a time for a discovery call. Your written plan still follows.</p>
          <iframe
            src={bookingEmbed(data.name, data.email, from.source)}
            title="Book a discovery call with Millionaire Contracts"
            className="w-full rounded-lg bg-white"
            style={{ minWidth: '280px', height: '700px', border: 'none' }}
          />
          <p className="font-body text-xs text-gray-500 text-center mt-3">
            Calendar not loading? <a href={BOOKING_URL} target="_blank" rel="noopener" className="underline hover:text-mc-gold">Open it on Calendly</a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={step < 3 ? next : handleSubmit} className="max-w-xl mx-auto space-y-5 scroll-mt-6" ref={top}>
      <div className="flex items-center gap-3" aria-label={`Step ${step} of 3`}>
        <div className="flex-grow h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-mc-gold transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} />
        </div>
        <span className="font-body text-xs text-gray-500 flex-shrink-0">Step {step} of 3</span>
      </div>

      {step === 1 && (
        <>
          <div>
            <span className={label}>What do you need most?</span>
            <div className="grid grid-cols-2 gap-3">
              {NEEDS.map((n) => (
                <button key={n} type="button" className={optionClass(data.need === n)} onClick={() => set('need', n)}>{n}</button>
              ))}
            </div>
          </div>
          <div>
            <span className={label}>Where is the business based?</span>
            <div className="grid grid-cols-2 gap-3">
              {PLAN_MARKETS.map((m, i) => (
                <button key={m.code} type="button" className={`${optionClass(data.market === m.code)}${i === 0 ? ' col-span-2' : ''}`} onClick={() => set('market', m.code)}>{m.label}</button>
              ))}
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <span className={label}>Who do you sell to?</span>
            <div className="grid grid-cols-3 gap-3">
              {SELLS_TO.map((o) => (
                <button key={o} type="button" className={optionClass(data.sellsTo === o)} onClick={() => set('sellsTo', o)}>{o}</button>
              ))}
            </div>
          </div>
          <div>
            <span className={label}>How big is the business?</span>
            <div className="grid grid-cols-2 gap-3">
              {SIZES.map((s) => (
                <button key={s} type="button" className={optionClass(data.size === s)} onClick={() => set('size', s)}>{s}</button>
              ))}
            </div>
          </div>
          <div>
            <span className={label}>When do you need this working?</span>
            <div className="grid grid-cols-3 gap-3">
              {TIMING.map((t) => (
                <button key={t} type="button" className={optionClass(data.timing === t)} onClick={() => set('timing', t)}>{t}</button>
              ))}
            </div>
          </div>
          <div>
            <span className={label}>How do new customers find you today?</span>
            <div className="grid grid-cols-2 gap-3">
              {FINDING.map((f) => (
                <button key={f} type="button" className={optionClass(data.finding === f)} onClick={() => set('finding', f)}>{f}</button>
              ))}
            </div>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <p className="font-body text-sm text-gray-300">Last step: where should we send your plan?</p>
          <div className="space-y-3">
            <input className={inputClass} placeholder="Your name" autoComplete="name" value={data.name} onChange={(e) => set('name', e.target.value)} />
            <input className={inputClass} placeholder="Company" autoComplete="organization" value={data.company} onChange={(e) => set('company', e.target.value)} />
            <input className={inputClass} type="email" placeholder="Work email" autoComplete="email" value={data.email} onChange={(e) => set('email', e.target.value)} />
            <input className={inputClass} type="tel" inputMode="tel" placeholder="WhatsApp number (optional)" autoComplete="tel" value={data.phone} onChange={(e) => set('phone', e.target.value)} />
            <input className={inputClass} type="text" inputMode="url" placeholder="Website (optional)" autoComplete="url" value={data.website} onChange={(e) => set('website', e.target.value)} />
            <textarea
              id="pf-problem"
              aria-label="Anything else we should know"
              className={`${inputClass} min-h-[80px] resize-none`}
              placeholder="Anything else we should know? Optional, a line is plenty."
              value={data.problem}
              onChange={(e) => set('problem', e.target.value)}
            />
          </div>
          {/* Only a bot fills this in; Command drops the enquiry if it is. */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={data.gotcha} onChange={(e) => set('gotcha', e.target.value)} />
          {BESIDE_BUTTON && (
            <figure className="rounded-lg border border-white/10 bg-white/5 p-4">
              <blockquote className="font-body text-sm text-gray-300 leading-relaxed">"{BESIDE_BUTTON.quote}"</blockquote>
              <figcaption className="font-body text-xs text-gray-500 mt-2">{BESIDE_BUTTON.name}, {BESIDE_BUTTON.company}</figcaption>
            </figure>
          )}
        </>
      )}

      <div className="flex items-center gap-3">
        {step > 1 && (
          <button type="button" onClick={() => go(step - 1)} className="font-body text-sm text-gray-400 hover:text-white px-2 py-3">Back</button>
        )}
        <button type="submit" disabled={missing.length > 0 || status === 'loading'} className="btn-primary flex-grow text-center disabled:opacity-40 disabled:cursor-not-allowed">
          {step < 3 ? 'Next' : status === 'loading' ? 'Sending...' : 'Send me my free plan'}
        </button>
      </div>
      {touched && missing.length > 0 && (
        <p className="font-body text-xs text-mc-gold text-center" aria-live="polite">Still needed: {missing.join(', ')}.</p>
      )}
      <p className="font-body text-xs text-gray-500 text-center">Free. No call needed to get it. We only use your details to reply.</p>
    </form>
  )
}
