import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const contactDetails = [
  { icon: Phone,  label: 'Phone',   value: '064 643 7107',                              href: 'tel:+27646437107' },
  { icon: Mail,   label: 'Email',   value: 'info@tnmirrigation.co.za',                  href: 'mailto:info@tnmirrigation.co.za' },
  { icon: MapPin, label: 'Address', value: '18 Janssens Rd, Maitland, Cape Town, 7405', href: 'https://maps.google.com/?q=18+Janssens+Rd+Maitland+Cape+Town' },
  { icon: Clock,  label: 'Hours',   value: 'Mon - Sat: Open until 6pm',                 href: null },
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
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#F8FAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="section-title mb-4">Request a Free Quote</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Tell us about your project and we will get back to you within one business day with a quote or to arrange a free site visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0F4848, #1A2035)' }}>
            <h3 className="font-display font-bold text-xl mb-2">Contact Information</h3>
            <p className="text-sm mb-8" style={{ color: '#6DD0D0' }}>Based in Maitland, Cape Town. Serving the Western Cape.</p>

            <div className="space-y-6">
              {contactDetails.map((d) => {
                const Icon = d.icon
                const Inner = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(69,191,191,0.2)' }}>
                      <Icon className="w-5 h-5" style={{ color: '#6DD0D0' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: '#6DD0D0' }}>{d.label}</p>
                      <p className="text-white font-medium mt-0.5">{d.value}</p>
                    </div>
                  </div>
                )
                return d.href
                  ? <a key={d.label} href={d.href} className="block hover:opacity-80 transition-opacity">{Inner}</a>
                  : <div key={d.label}>{Inner}</div>
              })}
            </div>

            <div className="mt-10 p-4 rounded-xl" style={{ backgroundColor: 'rgba(69,191,191,0.15)' }}>
              <p className="text-white font-semibold text-sm mb-1">Emergency callouts available</p>
              <p className="text-sm" style={{ color: '#6DD0D0' }}>Burst pipes, failed pumps, system failures. Call us anytime.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#E8F8F8' }}>
                  <CheckCircle2 className="w-8 h-8" style={{ color: '#45BFBF' }} />
                </div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: '#2A334D' }}>Message Sent</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you. We will be in touch within one business day to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm transition-all outline-none"
                      style={{}} onFocus={e => e.target.style.boxShadow = '0 0 0 2px #45BFBF'} onBlur={e => e.target.style.boxShadow = ''} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="+27 000 000 0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm transition-all outline-none"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px #45BFBF'} onBlur={e => e.target.style.boxShadow = ''} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none"
                    onFocus={e => e.target.style.boxShadow = '0 0 0 2px #45BFBF'} onBlur={e => e.target.style.boxShadow = ''} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button key={s} type="button"
                        onClick={() => setForm((f) => ({ ...f, service: s }))}
                        className="px-3 py-1.5 rounded-full text-sm font-medium border transition-all"
                        style={
                          form.service === s
                            ? { backgroundColor: '#45BFBF', borderColor: '#45BFBF', color: 'white' }
                            : { backgroundColor: 'white', borderColor: '#e5e7eb', color: '#4b5563' }
                        }
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Describe your site, property size, what you need, any questions..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm resize-none outline-none"
                    onFocus={e => e.target.style.boxShadow = '0 0 0 2px #45BFBF'} onBlur={e => e.target.style.boxShadow = ''} />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  <Send className="w-5 h-5" />
                  Send My Request
                </button>
                <p className="text-center text-gray-400 text-xs">No spam. We will only use your details to respond to your enquiry.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
