import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * SolutionSection -- Two-door model: people side + systems side.
 * Split-screen layout on desktop. Light background for visual rhythm break.
 * Reads only canonical brand-dna paths.
 */

const SERVICE_ICONS = [
  // Assigned SDR reps
  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Sales playbook
  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // Pipeline management
  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
];

const DEFAULT_SERVICES = [
  { slug: 'sdr-reps', name: 'Assigned SDR Reps', body: 'Vetted, trained sales reps who know your ICP before their first call. Deploy within 14 days.' },
  { slug: 'playbook', name: 'Sales Playbook Build', body: 'Documented outreach sequences, objection scripts, and qualification criteria. Built once, scales forever.' },
  { slug: 'pipeline', name: 'Pipeline Management', body: 'CRM setup, reporting dashboards, and weekly pipeline reviews. You see what we see, every week.' },
];

export default function SolutionSection() {
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

  const _services = brandDNA.services;
  const services = Array.isArray(_services) && _services.length > 0
    ? _services.slice(0, 3)
    : DEFAULT_SERVICES;

  return (
    <section
      id="solution"
      ref={sectionRef}
      aria-labelledby="solution-heading"
      className="bg-[#F8FAFC] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: heading + copy */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-16px)',
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 0ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 0ms',
            }}
          >
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-sky-600 mb-3">
              {brandDNA.copy.services.label || 'The Solution'}
            </p>
            <h2
              id="solution-heading"
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight"
            >
              {brandDNA.copy.services.heading || 'We build the sales function that runs without you.'}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {brandDNA.copy.services.body ||
                'Outsourced reps, a documented playbook, and pipeline management. You show up to the calls. We handle everything before that.'}
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-sky-600 active:scale-[0.97] transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              {brandDNA.copy.buttonText || 'Book a Strategy Call'}
            </a>
          </div>

          {/* Right: service cards */}
          <div className="space-y-4">
            {services.map((service, i) => (
              <div
                key={service.slug || i}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(16px)',
                  transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${i * 80 + 100}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${i * 80 + 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-sky-50 flex items-center justify-center text-sky-500">
                    {SERVICE_ICONS[i] || SERVICE_ICONS[0]}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.body || ''}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
