import { Link } from 'react-router-dom'

const LOGO = 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/66fe6791c6d28935508f7ce5.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-6">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/home">
            <img src={LOGO} alt="Millionaire Contracts" className="h-10 w-auto" style={{ width: '250px' }} />
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-1 text-sm font-body font-bold text-mc-teal">
          <a href="mailto:neo@millionairecontracts.com" className="hover:text-mc-gold transition-colors">
            Email: neo@millionairecontracts.com
          </a>
          <div className="flex gap-4">
            <Link to="/terms-and-conditions" className="hover:text-mc-gold transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-mc-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/millionaire-contracts"
          target="_blank"
          rel="noreferrer noopener"
          className="text-mc-gold hover:text-amber-600 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
