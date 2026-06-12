import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

const serviceLinks = [
  'Drip Irrigation',
  'Sprinkler Systems',
  'Borehole & Pump',
  'Plumbing Services',
  'Maintenance',
  'Irrigation Design',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A2035', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/logo.jpeg" alt="TNM Irrigation Projects" className="h-10 w-auto mb-4 rounded" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Professional irrigation design, installation, and maintenance for residential and commercial properties. We also handle plumbing.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#45BFBF'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#45BFBF'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#45BFBF'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+27646437107" className="flex items-start gap-3 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#45BFBF'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  064 643 7107
                </a>
              </li>
              <li>
                <a href="mailto:info@tnmirrigation.co.za" className="flex items-start gap-3 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#45BFBF'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  info@tnmirrigation.co.za
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=18+Janssens+Rd+Maitland+Cape+Town" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#45BFBF'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  18 Janssens Rd, Maitland, Cape Town
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} TNM Irrigation Projects. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Designed to help your plants thrive.</p>
        </div>
      </div>
    </footer>
  )
}
