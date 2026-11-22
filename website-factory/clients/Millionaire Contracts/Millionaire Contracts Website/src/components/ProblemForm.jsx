import { useEffect, useRef, useState } from 'react'
import { trackGoal } from '../lib/track'
import { sendEnquiry, visitSource } from '../lib/enquiry'
import { MARKETS } from '../lib/markets'
import { testimonials } from './Testimonials'
import { joinList } from '../lib/newsletter'
import { COURSE, TURNOVER } from '../lib/leadMagnet'
import { metaEvent } from '../lib/metaPixel'

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
// Roughly what the business turns over (Kat, 22 November 2026). Only a
// business above the first band counts as a conversion in Google Ads, so the
// bidding learns to find businesses that can afford MC rather than more of
// the one-person enquiries it was bringing. Everyone still gets an answer.
const SMALLEST = TURNOVER[0]
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

export default function ProblemForm({ source = 'website:get-a-plan' }) {
  const [status, setStatus] = useState('idle')
  // Step 3's extras (company, website, a note), folded away until asked for.
  const [more, setMore] = useState(false)
  // The 7 messages download (Kat, 17 November 2026): ticked here, or asked for
  // on the thank-you, it joins them to Pipeline & Power. Off by default: they
  // came for a plan, and the list only takes people who chose it (and then
  // confirm by email). 'idle' | 'sending' | 'asked' | 'failed'
  const [alsoMessages, setAlsoMessages] = useState(false)
  const [messages, setMessages] = useState('idle')
  const [step, setStep] = useState(1)
  const [from, setFrom] = useState({ source, term: '' })
  const [data, setData] = useState({ name: '', company: '', email: '', phone: '', website: '', problem: '', need: '', market: '', size: '', timing: '', finding: '', sellsTo: '', turnover: '', gotcha: '' })
  const top = useRef(null)

  useEffect(() => setFrom(visitSource(source)), [source])

  const market = MARKETS.find((m) => m.code === data.market)
  const qualified = Boolean(data.turnover) && data.turnover !== SMALLEST
  const set = (field, value) => setData((d) => ({ ...d, [field]: value }))

  // What each step still needs, so a grey button always says why it is grey.
  const needs = {
    1: [!data.need && 'what you need most', !data.market && 'where you are based'],
    2: [!data.sellsTo && 'who you sell to', !data.size && 'business size', !data.turnover && 'roughly what it turns over', !data.timing && 'when you need it', !data.finding && 'how customers find you'],
    3: [data.name.trim().length < 2 && 'your name', !EMAIL.test(data.email) && 'a valid email', !phoneOk(data.phone) && 'a full WhatsApp number, or leave it empty'],
  }
  const missing = needs[step].filter(Boolean)
  const touched = {
    1: data.need || data.market,
    2: data.sellsTo || data.size || data.turnover || data.timing || data.finding,
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

  async function askForMessages() {
    if (messages === 'sending' || messages === 'asked') return
    setMessages('sending')
    const ok = await joinList({ firstName: data.name.trim().split(/\s+/)[0], email: data.email, source: '/get-a-plan', answers: { ...(data.size ? { team: data.size } : {}), ...(data.turnover ? { turnover: data.turnover } : {}) } })
    setMessages(ok ? 'asked' : 'failed')
    if (ok && typeof window.gtag === 'function') window.gtag('event', 'sign_up', { method: 'lead_magnet', page: '/get-a-plan' })
    if (ok) metaEvent('CompleteRegistration', { content_name: 'Beyond Referrals' })
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
        Turnover: data.turnover,
        Timing: data.timing,
        'Customers find them through': data.finding,
        source: from.source,
        term: from.term,
        _gotcha: data.gotcha,
      })
    } catch {
      // swallow
    }
    if (alsoMessages && !data.gotcha) await askForMessages()
    // GA4 key event, imported into Google Ads as the conversion: only for a
    // business above the smallest turnover band. A smaller one is recorded as
    // its own event, which is not a conversion, so the ads stop learning to
    // find more of them.
    if (qualified) {
      trackGoal('plan requested')
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { form: 'get-a-plan' })
      metaEvent('Lead', { content_name: 'Free plan' })
    } else {
      trackGoal('plan requested (small)')
      if (typeof window.gtag === 'function') window.gtag('event', 'plan_request_small', { form: 'get-a-plan' })
    }
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
        {/* No calendar here any more (Kat, 21 November 2026). Calls booked
            seconds after the form, before anything was sent, mostly did not
            happen. The plan now comes first, and the email it comes in asks
            them to book a time to go through it. */}
        {/* A smaller business sees the course first: it is the more useful next
            step for them, and the plan still follows. */}
        <div className="flex flex-col gap-6">
        <div className={`rounded-xl border border-mc-gold/30 bg-mc-gold/5 p-5 sm:p-6 text-left ${qualified ? 'order-1' : 'order-2'}`}>
          <p className="font-headline text-lg font-bold text-white mb-3 text-center">What happens next</p>
          <ol className="font-body text-sm text-gray-300 space-y-2 list-decimal pl-5">
            <li>We reply to say we've got it, usually within minutes in working hours</li>
            <li>Your written plan arrives within one working day, by email: what we'd do, in what order, and what it's worth to you</li>
            <li>If it makes sense, you book a time in the same email to go through it with Kat</li>
          </ol>
        </div>
        <div className={`rounded-xl border border-white/10 bg-white/5 p-5 text-center ${qualified ? 'order-2' : 'order-1'}`}>
          {messages === 'asked' ? (
            <p className="font-body text-sm text-gray-300">
              The course is on its way. Check your inbox and click the confirm link, and day 1 arrives straight after
            </p>
          ) : (
            <>
              <p className="font-body text-sm text-gray-300 mb-3">
                {qualified ? 'Not ready for a call? Start' : 'The best place to start:'} <span className="text-white font-semibold">{COURSE.title}</span>, our free 5-day course, {qualified ? 'while you wait for your plan' : 'one short lesson a day while we put your plan together'}
              </p>
              <button type="button" onClick={askForMessages} disabled={messages === 'sending'} className="btn-primary disabled:opacity-60">
                {messages === 'sending' ? 'Sending...' : 'Send me the free course'}
              </button>
              {messages === 'failed' && (
                <p className="font-body text-xs text-amber-200 mt-2">That didn't go through. You can also start it at millionairecontracts.com/beyond-referrals</p>
              )}
            </>
          )}
        </div>
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
            <span className={label}>Roughly what does it turn over?</span>
            <div className="grid grid-cols-2 gap-3">
              {TURNOVER.map((t) => (
                <button key={t} type="button" className={optionClass(data.turnover === t)} onClick={() => set('turnover', t)}>{t}</button>
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
          {/* Three fields, then the rest only if they want (16 November): in
              the week after the one-tap step 1, 6 visitors reached this step
              and 1 sent it, when it asked for six things at once. */}
          <div className="space-y-3">
            <input className={inputClass} placeholder="Your name" autoComplete="name" value={data.name} onChange={(e) => set('name', e.target.value)} />
            <input className={inputClass} type="email" placeholder="Email" autoComplete="email" value={data.email} onChange={(e) => set('email', e.target.value)} />
            <input className={inputClass} type="tel" inputMode="tel" placeholder="WhatsApp number (optional)" autoComplete="tel" value={data.phone} onChange={(e) => set('phone', e.target.value)} />
            {more ? (
              <>
                <input className={inputClass} placeholder="Company (optional)" autoComplete="organization" value={data.company} onChange={(e) => set('company', e.target.value)} />
                <input className={inputClass} type="text" inputMode="url" placeholder="Website (optional)" autoComplete="url" value={data.website} onChange={(e) => set('website', e.target.value)} />
                <textarea
                  id="pf-problem"
                  aria-label="Anything else we should know"
                  className={`${inputClass} min-h-[80px] resize-none`}
                  placeholder="Anything else we should know? A line is plenty."
                  value={data.problem}
                  onChange={(e) => set('problem', e.target.value)}
                />
              </>
            ) : (
              <button type="button" onClick={() => setMore(true)} className="font-body text-sm text-mc-gold hover:underline">
                + Add your company, website or a note (optional)
              </button>
            )}
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={alsoMessages} onChange={(e) => setAlsoMessages(e.target.checked)} className="mt-0.5 h-4 w-4 accent-mc-gold flex-shrink-0" />
            <span className="font-body text-sm text-gray-300">
              Also send me <span className="text-white">{COURSE.title}</span>, a free 5-day course on growing past referrals, then a short note from Kat every week or so
            </span>
          </label>
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
      <p className="font-body text-xs text-gray-500 text-center">Free. No call needed to get it. We only use your details to reply{alsoMessages ? ' and to send what you ticked' : ''}.</p>
    </form>
  )
}
