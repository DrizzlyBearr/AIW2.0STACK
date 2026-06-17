import { Link } from 'react-router-dom'

const LOGO = 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/66fe6791c6d28935508f7ce5.png'

const links = [
  { label: 'Home', to: '/home' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/about-us' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact-us' },
]

const services = [
  { label: 'Sales Strategy', to: '/sales-strategy-development' },
  { label: 'Sales Management', to: '/sales-management' },
  { label: 'Sales Closing', to: '/sales-closing' },
  { label: 'Appointment Setting', to: '/appointment-setting' },
]

export default function Footer() {
  return (
    <footer className="bg-mc-dark border-t border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/home">
            <img src={LOGO} alt="Millionaire Contracts" className="h-8 w-auto mb-4" style={{ maxWidth: '180px' }} />
          </Link>
          <p className="font-body text-gray-500 text-sm leading-relaxed mb-4">
            Sales operations built for companies that refuse to lose.
          </p>
          <a href="https://www.linkedin.com/company/millionaire-contracts" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="text-gray-500 hover:text-mc-gold transition-colors inline-block">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-body font-semibold text-white text-sm mb-4">Company</p>
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="font-body text-gray-500 text-sm hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="font-body font-semibold text-white text-sm mb-4">Services</p>
          <div className="flex flex-col gap-2">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="font-body text-gray-500 text-sm hover:text-white transition-colors">{s.label}</Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-body font-semibold text-white text-sm mb-4">Contact</p>
          <a href="mailto:neo@millionairecontracts.com" className="font-body text-gray-500 text-sm hover:text-white transition-colors block mb-3">
            neo@millionairecontracts.com
          </a>
          <Link to="/calender" className="btn-primary text-sm py-2.5 px-5 inline-block">
            Book a Call
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5 max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-body text-gray-600 text-xs">© {new Date().getFullYear()} Millionaire Contracts. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/terms-and-conditions" className="font-body text-gray-600 text-xs hover:text-gray-400">Terms</Link>
          <Link to="/privacy-policy" className="font-body text-gray-600 text-xs hover:text-gray-400">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
