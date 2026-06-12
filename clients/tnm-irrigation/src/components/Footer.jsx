import { Droplets, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Drip Irrigation',
  'Sprinkler Systems',
  'Borehole & Pump',
  'Smart Controllers',
  'Maintenance',
  'Irrigation Design',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-white">T.N.M</span>
                <span className="block text-xs text-green-400">Irrigation Projects</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional irrigation design, installation, and maintenance for residential, commercial, and agricultural properties.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">
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
                  <a href="#services" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
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
                <a href="tel:+27000000000" className="flex items-start gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  +27 (0) 00 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@tnmirrigation.co.za" className="flex items-start gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  info@tnmirrigation.co.za
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  Gauteng, Limpopo &amp; Mpumalanga
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} T.N.M Irrigation Projects. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed to help your plants thrive.
          </p>
        </div>
      </div>
    </footer>
  )
}
