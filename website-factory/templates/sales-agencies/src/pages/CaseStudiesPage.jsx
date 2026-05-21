import brandDNA from '../config/brand-dna';
import StatsBarSection from '../components/StatsBarSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';

/**
 * CaseStudiesPage -- Hero + stats + full case study grid + testimonials + CTA.
 */
export default function CaseStudiesPage() {
  return (
    <main>
      {/* Page hero */}
      <section
        id="case-studies-hero"
        aria-label="Case studies hero"
        className="bg-[#0F1923] py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-sky-400 mb-4">
            Proof
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Client Results
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            {brandDNA.copy.gallery.body ||
              'Numbers from real engagements. Named clients where permitted. Specific outcomes in every case.'}
          </p>
        </div>
      </section>

      <StatsBarSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
