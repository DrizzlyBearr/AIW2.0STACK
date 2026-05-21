import HeroSection from '../components/HeroSection';
import StatsBarSection from '../components/StatsBarSection';
import ProblemAgitateSection from '../components/ProblemAgitateSection';
import SolutionSection from '../components/SolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ObjectionHandlingSection from '../components/ObjectionHandlingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import RiskReversalSection from '../components/RiskReversalSection';
import PricingAnchorSection from '../components/PricingAnchorSection';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';

/**
 * HomePage -- Thin shell. Imports and renders all 13 sections in wireframe order.
 * No business logic here. Section composition lives in the individual components.
 */
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBarSection />
      <ProblemAgitateSection />
      <SolutionSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <ObjectionHandlingSection />
      <TestimonialsSection />
      <RiskReversalSection />
      <PricingAnchorSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
