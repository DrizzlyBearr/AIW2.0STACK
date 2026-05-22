import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LOGO = 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/66fe6791c6d28935508f7ce5.png'

const services = [
  { label: 'Sales Strategy Development', to: '/sales-strategy-development' },
  { label: 'Sales Management', to: '/sales-management' },
  { label: 'Sales Closing', to: '/sales-closing' },
  { label: 'Appointment Setting', to: '/appointment-setting' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `font-body font-semibold text-[17px] text-mc-teal hover:text-mc-gold transition-colors px-2 py-1${isActive ? ' text-mc-gold' : ''}`

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-3">
        <Link to="/home">
          <img src={LOGO} alt="Millionaire Contracts" className="h-12 w-auto" style={{ width: '300px' }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/home" className={navLinkClass}>Home</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/about-us" className={navLinkClass}>About</NavLink>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="font-body font-semibold text-[17px] text-mc-teal hover:text-mc-gold transition-colors px-2 py-1 flex items-center gap-1">
              Services
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[220px] py-1 z-50">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2 text-sm font-body font-semibold text-gray-800 hover:bg-gray-50 hover:text-mc-gold"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact-us" className={navLinkClass}>Contact</NavLink>
        </div>

        <div className="hidden md:block">
          <Link to="/calender" className="btn-gold text-sm">
            Schedule an Appointment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-mc-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          <Link to="/home" className="font-body font-semibold text-mc-teal" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/portfolio" className="font-body font-semibold text-mc-teal" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/about-us" className="font-body font-semibold text-mc-teal" onClick={() => setMenuOpen(false)}>About</Link>
          <div>
            <button
              className="font-body font-semibold text-mc-teal mb-2"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="text-sm font-body text-gray-700"
                    onClick={() => { setMenuOpen(false); setServicesOpen(false) }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact-us" className="font-body font-semibold text-mc-teal" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/calender" className="btn-gold text-sm text-center" onClick={() => setMenuOpen(false)}>
            Schedule an Appointment
          </Link>
        </div>
      )}
    </nav>
  )
}
