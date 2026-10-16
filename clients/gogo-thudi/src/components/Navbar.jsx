import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business } from '../content'
import { waLink, defaultMessage } from '../whatsapp'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#how', label: 'How it works' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-night/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold text-cream">{business.name}</span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-ochre-light mt-1">{business.area}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-cream/80 hover:text-ochre-light transition-colors">
              {l.label}
            </a>
          ))}
          <a href={waLink(defaultMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5 text-sm">
            Book a session
          </a>
        </div>

        <button
          className="md:hidden text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-6 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-cream/90 border-b border-cream/10">
              {l.label}
            </a>
          ))}
          <a href={waLink(defaultMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
            Book a session
          </a>
        </div>
      )}
    </header>
  )
}
