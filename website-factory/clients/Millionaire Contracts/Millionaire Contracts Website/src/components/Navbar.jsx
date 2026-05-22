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

  const linkClass = 'font-body font-semibold text-sm text-mc-teal hover:text-mc-gold transition-colors px-3 py-2'

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/home" className="flex-shrink-0">
          <img src={LOGO} alt="Millionaire Contracts" className="h-10 w-auto" style={{ maxWidth: '220px' }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/home" className={({ isActive }) => `${linkClass}${isActive ? ' text-mc-gold' : ''}`}>Home</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `${linkClass}${isActive ? ' text-mc-gold' : ''}`}>Portfolio</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `${linkClass}${isActive ? ' text-mc-gold' : ''}`}>About</NavLink>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={`${linkClass} flex items-center gap-1`}>
              Services
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-lg min-w-[240px] py-2 shadow-xl">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2.5 text-sm font-body text-mc-teal hover:text-mc-gold hover:bg-gray-50 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact-us" className={({ isActive }) => `${linkClass}${isActive ? ' text-mc-gold' : ''}`}>Contact</NavLink>
        </div>

        <div className="hidden md:block">
          <Link to="/calender" className="btn-primary text-sm py-2.5 px-5">
            Schedule a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-mc-teal" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          <Link to="/home" className="font-body text-mc-teal py-2 hover:text-mc-gold" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/portfolio" className="font-body text-mc-teal py-2 hover:text-mc-gold" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/about-us" className="font-body text-mc-teal py-2 hover:text-mc-gold" onClick={() => setMenuOpen(false)}>About</Link>
          <div>
            <button className="font-body text-mc-teal py-2 hover:text-mc-gold w-full text-left" onClick={() => setServicesOpen(!servicesOpen)}>Services</button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1 pb-2">
                {services.map((s) => (
                  <Link key={s.to} to={s.to} className="font-body text-gray-500 py-1.5 text-sm hover:text-mc-gold" onClick={() => { setMenuOpen(false); setServicesOpen(false) }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact-us" className="font-body text-mc-teal py-2 hover:text-mc-gold" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/calender" className="btn-primary text-center mt-2 text-sm" onClick={() => setMenuOpen(false)}>Schedule a Call</Link>
        </div>
      )}
    </nav>
  )
}
