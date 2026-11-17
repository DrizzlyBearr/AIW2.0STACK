import { useId, useState } from 'react'
import { NEWSLETTER } from '../lib/newsletter'

// First name and email to the Pipeline & Power list, for the free download.
// Used by the download page and the box at the foot of every article. The
// honeypot catches simple bots; Command limits sign-ups per hour.
export default function LeadMagnetForm({ dark = true, button = 'Send me the 7 messages' }) {
  const id = useId()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(NEWSLETTER.join, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, _hp: honeypot, source: window.location.pathname }),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        if (window.gtag) window.gtag('event', 'sign_up', { method: 'lead_magnet', page: window.location.pathname })
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
          We just sent you an email from Millionaire Contracts. Click the link in it and the download opens straight away. If it isn't there in a minute or two, check your spam or promotions folder
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
        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
          {status === 'loading' ? 'Sending...' : button}
        </button>
      </div>
      {status === 'error' && <p className={`font-body text-xs mt-2 ${dark ? 'text-amber-200' : 'text-red-600'}`}>{errorMsg}</p>}
      <p className={`font-body text-xs mt-3 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
        You'll also get Pipeline &amp; Power, a short note every few days. Leave any time with one click
      </p>
    </form>
  )
}
