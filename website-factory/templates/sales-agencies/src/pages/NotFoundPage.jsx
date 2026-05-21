import brandDNA from '../config/brand-dna';
import FooterSection from '../components/FooterSection';

/**
 * NotFoundPage -- Semantic 404 with primary CTA back to home.
 */
export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#0F1923] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-lg mx-auto">
          <p
            aria-hidden="true"
            className="text-8xl font-extrabold text-[#1A2535] select-none mb-4"
          >
            404
          </p>
          <h1 className="text-3xl font-bold text-white mb-4">
            Page not found
          </h1>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            The page you are looking for does not exist or has been moved.
            Let us take you back to the right place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-8 py-4 text-base font-semibold text-white hover:bg-sky-600 active:scale-[0.97] transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0F1923]"
            >
              Back to Home
            </a>
            <a
              href="/#lead-form"
              className="inline-flex items-center justify-center rounded-md border border-[#1E3A5F] px-8 py-4 text-base font-semibold text-slate-300 hover:border-sky-500 hover:text-sky-400 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0F1923]"
            >
              {brandDNA.copy.buttonText || 'Book a Strategy Call'}
            </a>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
