import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * TestimonialsSection -- Named quotes + video testimonial slot.
 * Light background for visual rhythm contrast.
 * Reads only canonical brand-dna paths.
 */

const DEFAULT_REVIEWS = [
  {
    name: 'Sarah Chen',
    author: 'Sarah Chen',
    source: 'Google',
    rating: 5,
    text: 'Within the first 60 days their outreach efforts resulted in multiple qualified sales conversations with small, mid-market, and enterprise prospects. The pipeline impact was immediate and measurable.',
  },
  {
    name: 'Marcus Okafor',
    author: 'Marcus Okafor',
    source: 'Clutch',
    rating: 5,
    text: 'What impressed us most was their ability to quickly understand our market and dive deep into the research. The reps sounded like insiders from week two. We booked 14 discovery calls in the first month.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          className={`w-4 h-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-slate-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
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

  const _reviewItems = brandDNA.reviews.items;
  const reviews =
    Array.isArray(_reviewItems) && _reviewItems.length >= 2
      ? _reviewItems.slice(0, 2)
      : DEFAULT_REVIEWS;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className="bg-[#F8FAFC] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium tracking-[0.14em] uppercase text-sky-600 mb-3"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 0ms' }}
          >
            {brandDNA.copy.reviews.label || 'Client Testimonials'}
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl lg:text-4xl font-bold text-slate-900"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms',
            }}
          >
            {brandDNA.copy.reviews.heading || 'What Our Clients Say'}
          </h2>
        </div>

        {/* Video testimonial slot */}
        <div
          className="max-w-2xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg bg-[#0F1923] aspect-video flex items-center justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 400ms ease 100ms',
          }}
        >
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mx-auto mb-4">
              <svg aria-hidden="true" className="w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-slate-400 text-sm">
              {brandDNA.reviews.summary || 'Video testimonial from a founder client. Placeholder for Stage 9.'}
            </p>
          </div>
        </div>

        {/* Text pull-quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews.map((review, i) => {
            const name = review.name || review.author || 'Client';
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 80}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 80}ms`,
                }}
              >
                {/* Opening quote mark */}
                <div aria-hidden="true" className="text-5xl leading-none text-sky-300 font-serif mb-3 select-none">
                  &ldquo;
                </div>
                <p className="text-slate-700 text-base leading-relaxed italic mb-6">
                  {review.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{review.source || 'Verified Client'}</p>
                  </div>
                  <StarRating rating={review.rating || 5} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Aggregate rating summary */}
        {brandDNA.reviews.rating > 0 && (
          <div
            className="mt-10 text-center"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 400ms' }}
          >
            <p className="text-sm text-slate-500">
              {brandDNA.reviews.googleLabel || `${brandDNA.reviews.rating} stars on Google`}
              {brandDNA.reviews.totalReviewCount > 0 && (
                <span className="ml-2 text-slate-400">({brandDNA.reviews.totalReviewCount} reviews)</span>
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
