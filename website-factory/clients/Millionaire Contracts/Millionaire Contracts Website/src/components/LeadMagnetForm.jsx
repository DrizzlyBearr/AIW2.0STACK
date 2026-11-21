import { useId, useState } from 'react'
import { NEWSLETTER } from '../lib/newsletter'
import { TURNOVER, TEAM } from '../lib/leadMagnet'
import { metaEvent } from '../lib/metaPixel'

// Sign-up for Beyond Referrals, the free course that joins the Pipeline &
// Power list: first name, email, and two questions that tell us roughly how
// big the business is (Kat, 20 November 2026: ask both). Used on the course
// page, the 7 messages page, the homepage and the box after every article.
// The honeypot catches simple bots; Command limits sign-ups per hour.
export default function LeadMagnetForm({ dark = true, button = 'Start the free course' }) {
  const id = useId()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [turnover, setTurnover] = useState('')
  const [team, setTeam] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'loading') return
    if (!turnover || !team) {
      setStatus('error')
      setErrorMsg('Please pick roughly what the business turns over and how many people work in it.')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(NEWSLETTER.join, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, answers: { turnover, team }, _hp: honeypot, source: window.location.pathname }),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        if (window.gtag) window.gtag('event', 'sign_up', { method: 'lead_magnet', page: window.location.pathname })
        metaEvent('CompleteRegistration', { content_name: 'Beyond Referrals' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  const input = `w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-mc-gold ${
    dark ? 'border-white/20 bg-white/95 text-mc-dark placeholder-gray-400' : 'border-gray-300 bg-white text-mc-dark placeholder-gray-400'
  }`

  if (status === 'success') {
    return (
      <div role="status" className={`rounded-xl p-6 ${dark ? 'bg-white/5 border border-white/10' : 'bg-mc-cream border border-mc-gold/30'}`}>
        <p className={`font-headline text-xl font-black mb-2 ${dark ? 'text-white' : 'text-mc-teal'}`}>Nearly there, check your inbox</p>
        <p className={`font-body text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          We just sent you an email from Millionaire Contracts. Click the confirm link in it and day 1 of Beyond Referrals is on its way, with the 7 messages download straight away. If it isn't there in a minute or two, check your spam or promotions folder
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" aria-hidden="true" />
      <div className="flex flex-col gap-3">
        <label className="sr-only" htmlFor={`${id}-first`}>First name</label>
        <input id={`${id}-first`} name="firstName" type="text" autoComplete="given-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" className={input} />
        <label className="sr-only" htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} name="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className={input} />
        <label className="sr-only" htmlFor={`${id}-turnover`}>Roughly what the business turns over</label>
        <select id={`${id}-turnover`} name="turnover" required value={turnover} onChange={(e) => setTurnover(e.target.value)} className={`${input} ${turnover ? '' : 'text-gray-400'}`}>
          <option value="" disabled>Roughly what the business turns over</option>
          {TURNOVER.map((o) => <option key={o} value={o} className="text-mc-dark">{o}</option>)}
        </select>
        <label className="sr-only" htmlFor={`${id}-team`}>How many people work in the business</label>
        <select id={`${id}-team`} name="team" required value={team} onChange={(e) => setTeam(e.target.value)} className={`${input} ${team ? '' : 'text-gray-400'}`}>
          <option value="" disabled>How many people work in it</option>
          {TEAM.map((o) => <option key={o} value={o} className="text-mc-dark">{o}</option>)}
        </select>
        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
          {status === 'loading' ? 'Sending...' : button}
        </button>
      </div>
      {status === 'error' && <p className={`font-body text-xs mt-2 ${dark ? 'text-amber-200' : 'text-red-600'}`}>{errorMsg}</p>}
      <p className={`font-body text-xs mt-3 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
        Five short lessons, one a day, then Pipeline &amp; Power, a useful note from Kat every week or so. The two questions just help us send you what fits. Leave any time with one click
      </p>
    </form>
  )
}
