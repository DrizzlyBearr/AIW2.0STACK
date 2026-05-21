import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * PricingAnchorSection -- Anchor pricing statement with included items.
 * Dark background. NOT a full pricing page. One anchor + 3-item inclusion list.
 * Reads only canonical brand-dna paths.
 */

const DEFAULT_OFFER = {
  label: 'Investment',
  heading: 'Typical engagements start at $5,000 per month.',
  detail: 'A single $50,000 client contract pays back the full year\'s investment in one signature.',
};

const DEFAULT_INCLUSIONS = [
  'Full-time SDR rep (or two part-time) trained on your ICP',
  'Sales playbook build and competitive objection mapping',
  'Pipeline management, CRM setup, and weekly reporting',
];

const CHECK_ICON = (
  <svg aria-hidden="true" className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingAnchorSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const _specialOffers = brandDNA.special_offers;
  const offer =
    Array.isArray(_specialOffers) && _specialOffers.length > 0
      ? _specialOffers[0]
      : DEFAULT_OFFER;

  const label = brandDNA.copy.offers.label || DEFAULT_OFFER.label;
  const heading = brandDNA.copy.offers.heading || DEFAULT_OFFER.heading;
  const detail = brandDNA.copy.offers.detail || DEFAULT_OFFER.detail;
  const cta = brandDNA.copy.buttonText || 'Book a Strategy Call';

  return (
    <section
      id="pricing-anchor"
      ref={sectionRef}
      aria-labelledby="pricing-heading"
      className="bg-[#0F1923] py-16 lg:py-24"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-xs font-medium tracking-[0.14em] uppercase text-sky-400 mb-4"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 0ms' }}
        >
          {label}
        </p>

        <h2
          id="pricing-heading"
          className="text-3xl lg:text-4xl font-bold text-white mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms',
          }}
        >
          {heading}
        </h2>

        <div
          className="bg-[#1A2535] border border-[#1E3A5F] rounded-xl p-8 mb-8 text-left"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 140ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 140ms',
          }}
        >
          <p className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wide">What is included</p>
          <ul className="space-y-3">
            {DEFAULT_INCLUSIONS.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {CHECK_ICON}
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {detail && (
          <p
            className="text-slate-400 text-base leading-relaxed mb-8"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 200ms' }}
          >
            {detail}
          </p>
        )}

        <div
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 260ms' }}
        >
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-md bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-sky-600 active:scale-[0.97] transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0F1923]"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
