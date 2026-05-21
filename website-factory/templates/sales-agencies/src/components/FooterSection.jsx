import brandDNA from '../config/brand-dna';

/**
 * FooterSection -- 4-column nav, legal, social, Clutch badge slot.
 * Deep dark background. Semantic footer element.
 * Reads only canonical brand-dna paths.
 */

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/#pricing-anchor' },
];

const SECONDARY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/#faq' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function FooterSection() {
  const year = new Date().getFullYear();
  const badges = Array.isArray(brandDNA.trust_badges) ? brandDNA.trust_badges : [];
  const linkedin = brandDNA.social.linkedin;
  const companyName = brandDNA.company.name || 'Sales Agency';
  const tagline = brandDNA.company.tagline || 'Outsourced sales infrastructure for B2B founders.';
  const copyright = brandDNA.copy.copyright || `Copyright ${year} ${companyName}. All rights reserved.`;

  return (
    <footer id="footer" className="bg-[#080E14] border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-base font-bold text-white mb-2">{companyName}</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{tagline}</p>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${companyName} on LinkedIn`}
                className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#1A2535] text-slate-400 hover:text-sky-400 hover:bg-[#243447] transition-colors"
              >
                <LinkedInIcon />
              </a>
            )}
          </div>

          {/* Primary nav */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Services</p>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary nav */}
          <nav aria-label="Footer secondary navigation">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Company</p>
            <ul className="space-y-2">
              {SECONDARY_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Trust / badges */}
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Trust</p>
            {badges.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                  <img
                    key={i}
                    src={`/badges/${badge.filename}`}
                    alt={badge.alt}
                    className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-600 italic">Trust badges added at Stage 4.</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E3A5F] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">{copyright}</p>
          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-4">
              {LEGAL_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
