import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * CaseStudiesSection -- Card grid with outcome stats, industry tags, and context.
 * Light background. Minimum 2 cards. Stat is largest element on each card.
 * Reads only canonical brand-dna paths.
 */

const DEFAULT_STUDIES = [
  {
    filename: null,
    alt: 'B2B SaaS Client',
    caption: 'Was the only salesperson; revenue flat for 3 quarters. We built a cold email and LinkedIn program and placed a full-time SDR.',
    category: 'B2B SaaS',
    stat: '22 Qualified Meetings',
    timeframe: 'in 30 days',
  },
  {
    filename: null,
    alt: 'Professional Services Firm',
    caption: 'No outbound process. All revenue from referrals. We built sequences, qualified the ICP, and launched multi-channel outreach.',
    category: 'Professional Services',
    stat: '$760K Pipeline',
    timeframe: 'in 120 days',
  },
  {
    filename: null,
    alt: 'Manufacturing Company',
    caption: 'Founder doing all sales between production calls. We took over outbound and booked discovery calls with mid-market buyers.',
    category: 'Manufacturing',
    stat: '14 Discovery Calls',
    timeframe: 'in 45 days',
  },
];

function CaseStudyCard({ study, delay, visible }) {
  const stat = study.stat || study.alt || '';
  const industry = study.category || '';
  const problem = study.caption || '';
  const timeframe = study.timeframe || '';

  return (
    <div
      className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {industry && (
        <span className="inline-flex self-start rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 mb-6">
          {industry}
        </span>
      )}

      <div className="mb-4">
        <p className="text-3xl lg:text-4xl font-extrabold text-sky-500 leading-none tabular-nums">
          {stat}
        </p>
        {timeframe && (
          <p className="text-sm text-slate-400 mt-1">{timeframe}</p>
        )}
      </div>

      {problem && (
        <p className="text-sm text-slate-600 leading-relaxed mt-auto">
          {problem}
        </p>
      )}
    </div>
  );
}

export default function CaseStudiesSection() {
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

  const _prevProjects = brandDNA.previous_projects;
  const studies =
    Array.isArray(_prevProjects) && _prevProjects.length >= 2
      ? _prevProjects.slice(0, 3)
      : DEFAULT_STUDIES;

  const shownStudies = studies.length >= 2 ? studies : DEFAULT_STUDIES;

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      aria-labelledby="case-studies-heading"
      className="bg-[#F8FAFC] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium tracking-[0.14em] uppercase text-sky-600 mb-3"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 0ms' }}
          >
            {brandDNA.copy.gallery.label || 'Client Results'}
          </p>
          <h2
            id="case-studies-heading"
            className="text-3xl lg:text-4xl font-bold text-slate-900"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms',
            }}
          >
            {brandDNA.copy.gallery.heading || 'What We Have Built for Clients'}
          </h2>
          {brandDNA.copy.gallery.body && (
            <p
              className="mt-4 text-slate-500 max-w-xl mx-auto"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 120ms' }}
            >
              {brandDNA.copy.gallery.body}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shownStudies.map((study, i) => (
            <CaseStudyCard
              key={i}
              study={study}
              delay={160 + i * 80}
              visible={visible}
            />
          ))}
        </div>

        <div
          className="mt-10 text-center"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 400ms' }}
        >
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-md border border-sky-500 px-6 py-3 text-sm font-semibold text-sky-600 hover:bg-sky-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Book a call to discuss your situation
          </a>
        </div>
      </div>
    </section>
  );
}
