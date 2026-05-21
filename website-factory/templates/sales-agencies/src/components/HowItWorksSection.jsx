import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * HowItWorksSection -- 3-step process with numbered badges and connectors.
 * Dark background. Horizontal layout on desktop, stacked on mobile.
 * Reads only canonical brand-dna paths.
 */

const DEFAULT_STEPS = [
  {
    n: 1,
    title: 'Audit and Onboarding',
    body: 'We learn your ICP, buying triggers, and competitive landscape. We document the playbook your reps will use on every call.',
  },
  {
    n: 2,
    title: 'Build and Launch',
    body: 'Your SDR team goes live. Outreach starts within 14 days. First qualified conversations typically appear in week two or three.',
  },
  {
    n: 3,
    title: 'Scale and Refine',
    body: 'Weekly reporting, A/B testing of sequences, and pipeline reviews. You see what we see. We adjust until the system is predictable.',
  },
];

export default function HowItWorksSection() {
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

  const _processSteps = brandDNA.process_steps;
  const steps =
    Array.isArray(_processSteps) && _processSteps.length > 0
      ? _processSteps.slice(0, 3)
      : DEFAULT_STEPS;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      aria-labelledby="hiw-heading"
      className="bg-[#0F1923] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p
            className="text-xs font-medium tracking-[0.14em] uppercase text-sky-400 mb-3"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 0ms',
            }}
          >
            {brandDNA.copy.process.label || 'The Process'}
          </p>
          <h2
            id="hiw-heading"
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms',
            }}
          >
            {brandDNA.copy.process.heading || 'How We Build Your Pipeline'}
          </h2>
          {brandDNA.copy.process.body && (
            <p
              className="mt-4 text-slate-400 max-w-xl mx-auto"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 120ms',
              }}
            >
              {brandDNA.copy.process.body}
            </p>
          )}
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
          {/* Desktop connector lines */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-[calc(33.33%+24px)] right-[calc(33.33%+24px)] h-px border-t border-dashed border-[#1E3A5F]"
          />

          {steps.map((step, i) => (
            <div
              key={step.n || i}
              className="flex flex-col items-center text-center lg:px-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 80}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 80}ms`,
              }}
            >
              {/* Step badge */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center mb-6 shadow-lg shadow-sky-500/20">
                <span className="text-lg font-bold text-white">{step.n || i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        {brandDNA.copy.process.badgeText && (
          <div
            className="mt-14 text-center"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 500ms',
            }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-6 py-2 text-sm font-medium text-sky-300">
              <span aria-hidden="true">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              {brandDNA.copy.process.badgeText}
              {brandDNA.copy.process.badgeSubtext && (
                <span className="text-slate-400">{brandDNA.copy.process.badgeSubtext}</span>
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
