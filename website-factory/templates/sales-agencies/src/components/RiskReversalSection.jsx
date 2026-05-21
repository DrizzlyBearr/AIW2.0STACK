import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * RiskReversalSection -- The guarantee block. Full-width accent strip.
 * Unique section not found in reference sites. Built from research.
 * Reads only canonical brand-dna paths.
 */

export default function RiskReversalSection() {
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

  const heading = brandDNA.copy.offers.heading || 'You do not pay for time. You pay for outcomes.';
  const body =
    brandDNA.copy.offers.body ||
    'Most clients see their first qualified meeting within 30 days. If we reach the end of month two without a single meeting booked, we extend the program at no additional cost until we hit the target. That is not a sales pitch. That is how we stay in business.';
  const detail =
    brandDNA.copy.offers.detail ||
    'A single closed deal from our pipeline typically covers the investment for the entire year.';
  const cta = brandDNA.copy.buttonText || 'Claim Your Guarantee';

  return (
    <section
      id="risk-reversal"
      ref={sectionRef}
      aria-labelledby="risk-heading"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 50%, #075985 100%)' }}
    >
      {/* Subtle pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Shield icon */}
        <div
          className="flex justify-center mb-8"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 0ms' }}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <svg aria-hidden="true" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        <h2
          id="risk-heading"
          className="text-3xl lg:text-4xl font-bold text-white mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms',
          }}
        >
          {heading}
        </h2>

        <p
          className="text-white/85 text-lg leading-relaxed mb-4 max-w-2xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 400ms ease 160ms',
          }}
        >
          {body}
        </p>

        {detail && (
          <p
            className="text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 400ms ease 220ms',
            }}
          >
            {detail}
          </p>
        )}

        <div
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 280ms' }}
        >
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold text-sky-700 shadow-lg hover:bg-sky-50 active:scale-[0.97] transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
