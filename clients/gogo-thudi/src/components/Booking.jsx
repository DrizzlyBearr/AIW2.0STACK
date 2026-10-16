import { useState } from 'react'
import { MessageCircle, Phone, Clock, MapPin } from 'lucide-react'
import { business, services } from '../content'
import { waLink } from '../whatsapp'

// No backend needed: the form builds a WhatsApp message and opens it.
export default function Booking() {
  const [form, setForm] = useState({ name: '', service: services[0].title, mode: 'In person', note: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      `Hello Gogo Thudi, my name is ${form.name}.`,
      `I would like to book: ${form.service} (${form.mode}).`,
      form.note && `A little about what I need: ${form.note}`,
    ].filter(Boolean)
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
              <a href={business.phoneHref} className="hover:text-ochre-light">{business.phoneDisplay}</a>
            </li>
            <li className="flex gap-4">
              <MapPin className="w-5 h-5 text-ochre shrink-0 mt-0.5" />
              <span>
                {business.area}, {business.region}
                <span className="block text-sm text-cream/50">Exact address shared when you book</span>
              </span>
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
        </div>

        <form onSubmit={submit} className="bg-cream text-ink rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-night mb-2">Your name</label>
            <input id="name" required value={form.name} onChange={set('name')} className="field" placeholder="First name is fine" />
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
              {['In person', 'Phone or video'].map((m) => (
                <label
                  key={m}
                  className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors ${
                    form.mode === m ? 'border-ochre bg-ochre/15 text-night' : 'border-cream-deep bg-white text-ink/70'
                  }`}
                >
                  <input type="radio" name="mode" value={m} checked={form.mode === m} onChange={set('mode')} className="sr-only" />
                  {m}
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
            Send on WhatsApp
          </button>
          <p className="text-xs text-ink/50 text-center">Your message goes straight to Gogo Thudi and stays private.</p>
        </form>
      </div>
    </section>
  )
}
