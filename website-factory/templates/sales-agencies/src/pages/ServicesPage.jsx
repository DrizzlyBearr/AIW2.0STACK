import brandDNA from '../config/brand-dna';
import SolutionSection from '../components/SolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';

/**
 * ServicesPage -- Hero + services detail + how it works + case studies + CTA.
 */
export default function ServicesPage() {
  const companyName = brandDNA.company.name || 'Sales Agency';

  return (
    <main>
      {/* Page-specific hero */}
      <section
        id="services-hero"
        aria-label="Services hero"
        className="bg-[#0F1923] py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-sky-400 mb-4">
            What We Build
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Our Sales Services
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            {brandDNA.copy.services.body ||
              'Full-service outsourced sales infrastructure for B2B founders who want qualified meetings without building a team from scratch.'}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-sky-500 px-8 py-4 text-base font-semibold text-white hover:bg-sky-600 active:scale-[0.97] transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0F1923]"
          >
            {brandDNA.copy.buttonText || 'Book a Strategy Call'}
          </a>
        </div>
      </section>

      {/* Reuse universal sections with same data */}
      <SolutionSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
