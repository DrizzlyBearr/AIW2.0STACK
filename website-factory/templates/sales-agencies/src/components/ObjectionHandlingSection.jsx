import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * ObjectionHandlingSection -- Martal build-vs-buy style with "burned before" objection.
 * Three named objection cards. Dark background. Named section, not a FAQ.
 * Reads only canonical brand-dna paths.
 */

const OBJECTION_ICONS = [
  // Market understanding
  <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Risk / burned before
  <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Management overhead
  <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

const DEFAULT_OBJECTIONS = [
  {
    q: '"You won\'t understand my business well enough to sell it."',
    a: 'Every engagement starts with a deep-dive onboarding. We research your ICP, map the competitive landscape, and brief your reps on buying triggers and common objections before the first call goes out. Clients repeatedly tell us that our reps sound like insiders within two weeks.',
  },
  {
    q: '"I\'ll pay for months and get nothing. I\'ve been burned before."',
    a: 'Most clients see their first qualified meeting within 30 days. If we reach the end of month two without a single meeting booked, we extend the program at no additional cost until we hit the target. You pay for outcomes, not time.',
  },
  {
    q: '"This will create more work for me, not less."',
    a: 'Here is the division of labour. You show up to the calls. We handle the prospecting, messaging, sequence management, CRM updates, follow-up, and booking. Your only job is to be ready when a discovery call lands in your calendar.',
  },
];

export default function ObjectionHandlingSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const _faqData = brandDNA.faq;
  const faqs = Array.isArray(_faqData) && _faqData.length >= 3
    ? _faqData.slice(0, 3)
    : DEFAULT_OBJECTIONS;

  return (
    <section
      id="objection-handling"
      ref={sectionRef}
      aria-labelledby="objections-heading"
      className="bg-[#0F1923] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium tracking-[0.14em] uppercase text-sky-400 mb-3"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 0ms' }}
          >
            Real Answers
          </p>
          <h2
            id="objections-heading"
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms',
            }}
          >
            What you&rsquo;re probably thinking
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#1A2535] border border-[#1E3A5F] rounded-lg p-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${160 + i * 80}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${160 + i * 80}ms`,
              }}
            >
              <div className="text-sky-400 mb-5">{OBJECTION_ICONS[i] || OBJECTION_ICONS[0]}</div>
              <h3 className="text-base font-semibold text-white mb-4 leading-snug italic">
                {item.q}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
