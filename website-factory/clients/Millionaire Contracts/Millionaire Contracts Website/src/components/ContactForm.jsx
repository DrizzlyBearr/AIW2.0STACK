import { useState } from 'react'
import { trackGoal } from '../lib/track'
import { sendEnquiry, visitSource } from '../lib/enquiry'

// The contact page's form. It replaced a GoHighLevel form embed on 30 October
// 2026: it posts to MC's enquiry address in Command (src/lib/enquiry.js), like
// the site's other forms, so every message lands on the Website enquiries
// campaign, triggers the ten-minute alert and gets a drafted reply. The
// message is what they wrote; phone and company come as lines beneath it.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState({ name: '', email: '', phone: '', company: '', message: '', gotcha: '' })
  const set = (field, value) => setData((d) => ({ ...d, [field]: value }))

  const missing = [
    data.name.trim().length < 2 && 'your name',
    !EMAIL.test(data.email) && 'a valid email',
    data.message.trim().length < 3 && 'a message',
  ].filter(Boolean)
  const touched = Object.entries(data).some(([k, v]) => k !== 'gotcha' && v.trim())

  async function handleSubmit(e) {
    e.preventDefault()
    if (missing.length || status === 'loading') return
    setStatus('loading')
    const { source, term } = visitSource('website:contact')
    // Best effort, as on the site's other forms: the visitor sees a thank-you either way.
    try {
      await sendEnquiry({
        message: data.message,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        source,
        term,
        _gotcha: data.gotcha,
      })
    } catch {
      // swallow
    }
    trackGoal('contact sent')
    if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { form: 'contact' })
    setStatus('success')
  }

  const inputClass =
    'w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 font-body text-sm text-mc-teal placeholder-gray-400 focus:outline-none focus:border-mc-gold transition-colors'
  const label = 'block font-body text-sm font-semibold text-mc-teal'

  if (status === 'success') {
    return (
      <div className="border border-gray-200 rounded-xl p-8 text-center">
        <h3 className="font-headline text-2xl font-bold text-mc-teal mb-3">Message received</h3>
        <p className="font-body text-gray-600 leading-relaxed mb-6">
          Thanks, {data.name.split(' ')[0] || 'and thanks'}. A person reads it and replies soon, in working hours usually within minutes.
        </p>
        <a href="/calender" className="btn-primary">Book a discovery call</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={label} htmlFor="cf-name">Your name *</label>
        <input id="cf-name" className={inputClass} placeholder="Your name" autoComplete="name" value={data.name} onChange={(e) => set('name', e.target.value)} />
      </div>
      <div>
        <label className={label} htmlFor="cf-email">Email *</label>
        <input id="cf-email" type="email" className={inputClass} placeholder="you@company.com" autoComplete="email" value={data.email} onChange={(e) => set('email', e.target.value)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={label} htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" type="tel" className={inputClass} placeholder="Optional" autoComplete="tel" value={data.phone} onChange={(e) => set('phone', e.target.value)} />
        </div>
        <div>
          <label className={label} htmlFor="cf-company">Company</label>
          <input id="cf-company" className={inputClass} placeholder="Optional" autoComplete="organization" value={data.company} onChange={(e) => set('company', e.target.value)} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="cf-message">How can we help? *</label>
        <textarea id="cf-message" className={`${inputClass} min-h-[110px] resize-none`} placeholder="A sentence or two is plenty." value={data.message} onChange={(e) => set('message', e.target.value)} />
      </div>
      {/* Only a bot fills this in; Command drops the enquiry if it is. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={data.gotcha} onChange={(e) => set('gotcha', e.target.value)} />
      <button type="submit" disabled={missing.length > 0 || status === 'loading'} className="btn-primary w-full text-center disabled:opacity-40 disabled:cursor-not-allowed">
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
      {touched && missing.length > 0 && (
        <p className="font-body text-xs text-mc-gold text-center" aria-live="polite">Still needed: {missing.join(', ')}.</p>
      )}
    </form>
  )
}
