import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+27 (0) 00 000 0000',
    href: 'tel:+27000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@tnmirrigation.co.za',
    href: 'mailto:info@tnmirrigation.co.za',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Gauteng, Limpopo & Mpumalanga',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Fri: 7am - 5pm | Sat: 8am - 1pm',
    href: null,
  },
]

const services = [
  'Drip Irrigation',
  'Sprinkler System',
  'Borehole / Pump',
  'Plumbing',
  'Maintenance',
  'Other / Not sure',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with actual form handler (e.g. Netlify, Formspree, or your own API)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="section-title mb-4">Request a Free Quote</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Tell us about your project and we will get back to you within one business day with a quote or to arrange a free site visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info panel */}
          <div className="lg:col-span-2 bg-green-700 rounded-2xl p-8 text-white">
            <h3 className="font-display font-bold text-xl mb-2">Contact Information</h3>
            <p className="text-green-200 text-sm mb-8">We respond to all enquiries within one business day.</p>

            <div className="space-y-6">
              {contactDetails.map((d) => {
                const Icon = d.icon
                const Inner = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-green-200" />
                    </div>
                    <div>
                      <p className="text-green-300 text-xs font-medium uppercase tracking-wider">{d.label}</p>
                      <p className="text-white font-medium mt-0.5">{d.value}</p>
                    </div>
                  </div>
                )
                return d.href ? (
                  <a key={d.label} href={d.href} className="block hover:opacity-80 transition-opacity">
                    {Inner}
                  </a>
                ) : (
                  <div key={d.label}>{Inner}</div>
                )
              })}
            </div>

            <div className="mt-10 p-4 bg-green-600 rounded-xl">
              <p className="text-white font-semibold text-sm mb-1">Emergency callouts available</p>
              <p className="text-green-200 text-xs">Burst pipes, failed pumps, system failures. Call us anytime.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Message Sent</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you. We will be in touch within one business day to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+27 000 000 0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, service: s }))}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                          form.service === s
                            ? 'bg-green-600 border-green-600 text-white'
                            : 'border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your site, property size, what you need, any questions..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none transition-all"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  <Send className="w-5 h-5" />
                  Send My Request
                </button>

                <p className="text-center text-gray-400 text-xs">
                  No spam. We will only use your details to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
