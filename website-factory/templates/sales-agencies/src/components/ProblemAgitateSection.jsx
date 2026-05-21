import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * ProblemAgitateSection -- Martal-style named pain points.
 * "Sound familiar?" framing. Two pain cards side by side on dark background.
 * Reads only canonical brand-dna paths.
 */

const DEFAULT_PAINS = [
  {
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "You're the only salesperson in your company",
    body: "Every deal depends on your personal energy. When you stop selling, the pipeline stops. You can't scale a business where revenue depends on you showing up every single day.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "You hired a rep and it did not work",
    body: "Six months. $60K to $80K. No closed deals. And you ended up back on the calls yourself. The problem was not the rep. You needed a system before you hired a person into it.",
  },
];

function PainCard({ icon, title, body, delay, visible }) {
  return (
    <div
      className="bg-[#1A2535] border border-[#1E3A5F] rounded-lg p-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div className="text-sky-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{body}</p>
    </div>
  );
}

export default function ProblemAgitateSection() {
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

  const _whyChoose = brandDNA.why_choose_us;
  const painPoints = Array.isArray(_whyChoose) && _whyChoose.length >= 2
    ? _whyChoose.slice(0, 2).map((label, i) => ({
        icon: DEFAULT_PAINS[i]?.icon,
        title: label,
        body: DEFAULT_PAINS[i]?.body || '',
      }))
    : DEFAULT_PAINS;

  return (
    <section
      id="problem-agitate"
      ref={sectionRef}
      aria-labelledby="problem-heading"
      className="bg-[#0F1923] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="problem-heading"
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 0ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 0ms',
            }}
          >
            {brandDNA.copy.whyChoose.heading || 'Sound familiar?'}
          </h2>
          {brandDNA.copy.whyChoose.body && (
            <p
              className="mt-4 text-slate-400 max-w-2xl mx-auto"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 80ms',
              }}
            >
              {brandDNA.copy.whyChoose.body}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {painPoints.map((pain, i) => (
            <PainCard
              key={i}
              icon={pain.icon}
              title={pain.title}
              body={pain.body}
              delay={160 + i * 80}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
