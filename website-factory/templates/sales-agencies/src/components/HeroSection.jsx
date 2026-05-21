import { useEffect, useRef } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * HeroSection -- Belkins-style authority hero.
 * Full-viewport dark section with eyebrow, h1, subheadline,
 * dual CTA, and trust chips. No stock photography.
 * Reads only canonical brand-dna paths.
 */
export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.opacity = '1';
      return;
    }
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1)';
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  const chips = Array.isArray(brandDNA.copy.heroTrustChips)
    ? brandDNA.copy.heroTrustChips
    : [];

  const badges = Array.isArray(brandDNA.trust_badges) ? brandDNA.trust_badges : [];

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col bg-[#0F1923] overflow-hidden"
    >
      {/* Subtle geometric grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(to right, #0EA5E9 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(14,165,233,0.06) 0%, transparent 70%)',
        }}
      />

      <div
        ref={sectionRef}
        className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-sky-400 mb-6">
            {brandDNA.copy.hero.eyebrow}
          </p>

          {/* H1 -- one per page */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            {brandDNA.copy.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {brandDNA.copy.hero.subheadline}
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-sky-600 active:scale-[0.97] transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0F1923]"
            >
              {brandDNA.copy.buttonText}
            </a>
            <a
              href="#case-studies"
              className="text-base text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
            >
              See Our Results
            </a>
          </div>

          {/* Trust chips */}
          {chips.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {chips.map((chip, i) => (
                <span
                  key={i}
                  className="text-sm text-slate-400 flex items-center gap-2"
                >
                  <span aria-hidden="true" className="w-1 h-1 rounded-full bg-sky-500 inline-block" />
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Review badge */}
          {brandDNA.reviews.rating > 0 && (
            <p className="mt-4 text-sm text-slate-500">
              <span className="text-yellow-400" aria-label={`${brandDNA.reviews.rating} stars`}>
                {'★'.repeat(Math.round(brandDNA.reviews.rating))}
              </span>
              {' '}
              <span className="text-white font-semibold">{brandDNA.reviews.rating}</span>
              {' '}
              {brandDNA.reviews.googleLabel}
            </p>
          )}

          {/* Trust badges */}
          {badges.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {badges.map((badge, i) => (
                <img
                  key={i}
                  src={`/badges/${badge.filename}`}
                  alt={badge.alt}
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade into stats-bar */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A2535] to-transparent pointer-events-none"
      />
    </section>
  );
}
