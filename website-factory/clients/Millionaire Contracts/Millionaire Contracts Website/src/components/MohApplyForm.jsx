import { useId, useState } from 'react'
import { trackGoal } from '../lib/track'
import { sendEnquiry, visitSource } from '../lib/enquiry'

// The University of Moh' application (Kat, 27 November 2026). An application
// rather than a buy button, so Kat chooses who gets in. It posts to MC's
// enquiry address in Command like the plan form, with "Needs most" set to the
// application so it is easy to tell apart from a business enquiry.

export const MOH_TRACKS = [
  { key: 'full', label: 'The full journey', price: 'R10,000' },
  { key: 'closer', label: 'Sales closer', price: 'R7,000' },
  { key: 'setter', label: 'Appointment setter', price: 'R5,000' },
]
const NOW = ['Employed', 'Looking for work', 'Studying', 'Running my own business', 'Freelancing already']
const EXPERIENCE = ['None yet', 'Some (under a year)', '1 year or more']
const HOURS = ['Under 5 hours a week', '5 to 10 hours a week', 'More than 10 hours a week']

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function MohApplyForm({ defaultTrack = 'full' }) {
  const id = useId()
  const [data, setData] = useState({
    track: defaultTrack, name: '', email: '', phone: '', now: '', experience: '', hours: '', laptop: '', why: '', gotcha: '',
  })
  const [status, setStatus] = useState('idle')
  const set = (k) => (v) => setData((d) => ({ ...d, [k]: v }))
  const track = MOH_TRACKS.find((t) => t.key === data.track)

  const missing = [
    !data.name.trim() && 'your name',
    !EMAIL.test(data.email.trim()) && 'your email',
    data.phone.replace(/\D/g, '').length < 9 && 'a WhatsApp number',
    !data.now && 'where you are now',
    !data.experience && 'your sales experience',
    !data.hours && 'your time each week',
    !data.laptop && 'laptop and internet',
  ].filter(Boolean)

  async function submit(e) {
    e.preventDefault()
    if (missing.length || status === 'loading') return
    setStatus('loading')
    const from = visitSource('website:university-of-moh')
    try {
      await sendEnquiry({
        message: ["Application: University of Moh'", data.why.trim()].filter(Boolean).join('\n\n'),
        'Needs most': "Application: University of Moh'",
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        Track: track ? `${track.label} (${track.price})` : data.track,
        'Right now': data.now,
        'Sales experience': data.experience,
        'Time each week': data.hours,
        'Laptop and steady internet': data.laptop,
        form: 'university-of-moh',
        source: from.source,
        term: from.term,
        _gotcha: data.gotcha,
      })
    } catch {
      // The applicant sees the thank-you either way.
    }
    trackGoal('moh application')
    if (typeof window.gtag === 'function') window.gtag('event', 'moh_application', { track: data.track })
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
        <p className="font-headline text-2xl font-black text-white mb-3">Application received</p>
        <p className="font-body text-gray-300">
          Thanks, {data.name.trim().split(/\s+/)[0]}. We read every application ourselves and you'll hear from us on WhatsApp or email within one working day
        </p>
      </div>
    )
  }

  const input = 'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-mc-gold transition-colors'
  const chip = (on) => `text-left px-4 py-3 rounded-lg border font-body text-sm transition-colors ${on ? 'border-mc-gold bg-mc-gold/10 text-white' : 'border-white/15 bg-white/5 text-gray-300 hover:border-white/30'}`
  const label = 'block font-body text-sm text-gray-300 mb-2'
  const Choices = ({ name, options, value, onPick }) => (
    <fieldset className="mb-5">
      <legend className={label}>{name}</legend>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((o) => (
          <button type="button" key={o} className={chip(value === o)} aria-pressed={value === o} onClick={() => onPick(o)}>{o}</button>
        ))}
      </div>
    </fieldset>
  )

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8" noValidate>
      <fieldset className="mb-5">
        <legend className={label}>Which track?</legend>
        <div className="grid gap-2">
          {MOH_TRACKS.map((t) => (
            <button type="button" key={t.key} className={chip(data.track === t.key)} aria-pressed={data.track === t.key} onClick={() => set('track')(t.key)}>
              <span className="font-semibold">{t.label}</span> <span className="text-mc-gold">· {t.price}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor={`${id}-name`} className={label}>Full name</label>
          <input id={`${id}-name`} className={input} value={data.name} onChange={(e) => set('name')(e.target.value)} autoComplete="name" />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>WhatsApp number</label>
          <input id={`${id}-phone`} className={input} value={data.phone} onChange={(e) => set('phone')(e.target.value)} autoComplete="tel" inputMode="tel" />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor={`${id}-email`} className={label}>Email</label>
        <input id={`${id}-email`} type="email" className={input} value={data.email} onChange={(e) => set('email')(e.target.value)} autoComplete="email" />
      </div>

      <Choices name="Where are you right now?" options={NOW} value={data.now} onPick={set('now')} />
      <Choices name="Sales experience" options={EXPERIENCE} value={data.experience} onPick={set('experience')} />
      <Choices name="How much time can you give it?" options={HOURS} value={data.hours} onPick={set('hours')} />
      <Choices name="Do you have a laptop and steady internet?" options={['Yes', 'Not yet']} value={data.laptop} onPick={set('laptop')} />

      <div className="mb-6">
        <label htmlFor={`${id}-why`} className={label}>Why do you want to do this? (optional)</label>
        <textarea id={`${id}-why`} rows={3} className={input} value={data.why} onChange={(e) => set('why')(e.target.value)} />
      </div>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={data.gotcha} onChange={(e) => set('gotcha')(e.target.value)} />

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
        {status === 'loading' ? 'Sending…' : 'Send my application'}
      </button>
      {missing.length > 0 && (
        <p className="mt-3 font-body text-xs text-gray-400">Still needed: {missing.join(', ')}</p>
      )}
      <p className="mt-3 font-body text-xs text-gray-500">No payment now. If you're a fit, we'll talk first</p>
    </form>
  )
}
