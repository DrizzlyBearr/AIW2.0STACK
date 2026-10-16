import { useState } from 'react'
import { MessageCircle, Phone, Clock, MapPin, Mail, ArrowUpRight } from 'lucide-react'
import { business, services } from '../content'
import { waLink } from '../whatsapp'
import { track } from '../track'

// No backend needed: the form builds a WhatsApp message and opens it.
export default function Booking({ defaultService, source = 'home page' }) {
  const modes = [
    { value: 'In person', fee: business.fees.inPerson },
    { value: 'Virtual', fee: business.fees.virtual },
  ]
  const [form, setForm] = useState({ name: '', service: defaultService || services[0].title, mode: modes[0].value, note: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const [started, setStarted] = useState(false)
  const onStart = () => {
    if (started) return
    setStarted(true)
    track('booking_form_start', { cta_location: 'booking-form' })
  }

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      `Hello Gogo Thudi, my name is ${form.name}. I found you on your website (${source}).`,
      `I would like to book: ${form.service} (${form.mode}).`,
      form.note && `A little about what I need: ${form.note}`,
    ].filter(Boolean)
    track('booking_form_submit', { cta_location: 'booking-form', service: form.service, session_type: form.mode })
    track('generate_lead', { lead_source: 'booking-form' })
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  return (
    <section id="book" className="py-24 bg-night text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <p className="section-label !text-ochre-light mb-3">Book a consultation</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-6">
            Take the first step. Gogo Thudi will take it from there.
          </h2>
          <p className="text-cream/70 leading-relaxed mb-10">
            Fill in the form and it will open WhatsApp with your message ready to send. Or call directly. Gogo Thudi
            replies personally.
          </p>

          <ul className="space-y-5 text-cream/85">
            <li className="flex gap-4">
              <Phone className="w-5 h-5 text-ochre shrink-0 mt-0.5" />
              <a href={business.phoneHref} data-cta="booking-contact" className="hover:text-ochre-light">{business.phoneDisplay}</a>
            </li>
            <li className="flex gap-4">
              <MapPin className="w-5 h-5 text-ochre shrink-0 mt-0.5" />
              <span>
                {business.address}
                <span className="block text-sm text-cream/50">{business.region}</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="w-5 h-5 text-ochre shrink-0 mt-0.5" />
              <a href={`mailto:${business.email}`} className="hover:text-ochre-light break-all">{business.email}</a>
            </li>
            <li className="flex gap-4">
              <Clock className="w-5 h-5 text-ochre shrink-0 mt-0.5" />
              <span className="space-y-1">
                {business.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: <span className="text-cream/60">{h.time}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>

          <div className="mt-10 rounded-2xl border border-cream/15 p-6">
            <p className="font-semibold mb-1">Prefer to book through SA Psychics?</p>
            <p className="text-cream/60 text-sm leading-relaxed mb-4">
              Gogo Thudi is a {business.rating.badges[0]} on SA Psychics, where she has {business.rating.count} client
              reviews. You can book a phone reading with her there too.
            </p>
            <a
              href={business.saPsychicsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ochre-light hover:text-ochre"
            >
              Visit her SA Psychics profile <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <form onSubmit={submit} onFocus={onStart} className="bg-cream text-ink rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-night mb-2">Your name</label>
            <input id="name" required autoComplete="given-name" value={form.name} onChange={set('name')} className="field" placeholder="First name is fine" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-night mb-2">What do you need help with?</label>
            <select id="service" value={form.service} onChange={set('service')} className="field">
              {services.map((s) => (
                <option key={s.key}>{s.title}</option>
              ))}
              <option>Not sure yet</option>
            </select>
          </div>
          <fieldset>
            <legend className="block text-sm font-semibold text-night mb-2">How would you like to meet?</legend>
            <div className="grid grid-cols-2 gap-3">
              {modes.map((m) => (
                <label
                  key={m.value}
                  className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors ${
                    form.mode === m.value ? 'border-ochre bg-ochre/15 text-night' : 'border-cream-deep bg-white text-ink/70'
                  }`}
                >
                  <input type="radio" name="mode" value={m.value} checked={form.mode === m.value} onChange={set('mode')} className="sr-only" />
                  {m.value}
                  <span className="block text-xs text-ink/50 mt-0.5">{m.fee}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor="note" className="block text-sm font-semibold text-night mb-2">
              Anything you would like her to know? <span className="font-normal text-ink/50">(optional)</span>
            </label>
            <textarea id="note" rows={4} value={form.note} onChange={set('note')} className="field resize-none" placeholder="Share as much or as little as you like" />
          </div>
          <button type="submit" className="btn-primary w-full !bg-night !text-cream hover:!bg-night-mid py-4 text-base">
            <MessageCircle className="w-5 h-5" />
            Send my booking on WhatsApp
          </button>
          <p className="text-xs text-ink/50 text-center">
            This opens WhatsApp with your message ready. Nothing is sent until you press send. Your message goes
            straight to Gogo Thudi and stays private.
          </p>
        </form>
      </div>
    </section>
  )
}
