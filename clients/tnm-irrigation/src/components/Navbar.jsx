import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            {scrolled ? (
              <img src="/logo.jpeg" alt="TNM Irrigation Projects" className="h-10 w-auto" />
            ) : (
              <div className="bg-white rounded-lg p-1 inline-flex">
                <img src="/logo.jpeg" alt="TNM Irrigation Projects" className="h-8 w-auto" />
              </div>
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-brand-teal'
                    : 'text-white/90 hover:text-white'
                }`}
                style={scrolled ? {} : {}}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm py-2 px-5"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open
              ? <X className={scrolled ? 'text-gray-900' : 'text-white'} />
              : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium py-3 px-2 rounded-lg transition-colors"
                style={{}}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E8F8F8'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = ''}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
