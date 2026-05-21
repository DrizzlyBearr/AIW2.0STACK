import { useEffect, useRef, useState } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * FaqSection -- Accordion with 5-7 questions from customer voice research.
 * Light background. Chevron rotates on open. Respects prefers-reduced-motion.
 * Reads only canonical brand-dna paths.
 */

const DEFAULT_FAQS = [
  {
    q: 'How long does it take to get started?',
    a: 'Most clients are up and running within 14 days. The first week is onboarding and playbook build. The second week your reps are live and outreach starts. First qualified conversations typically appear in week two or three.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We serve B2B businesses across SaaS, professional services, manufacturing, logistics, and financial services. The playbook is customised per engagement. Your reps are briefed on your specific ICP and buying triggers before the first outreach goes out.',
  },
  {
    q: 'How do I know the reps understand my market?',
    a: 'We spend the first week doing a structured onboarding: ICP research, competitive landscape mapping, and objection scripting. By the end of week one, reps can answer the top five objections your buyers raise. Clients consistently tell us the reps sound like insiders.',
  },
  {
    q: 'What is included in the monthly engagement?',
    a: 'Full-time or part-time SDR coverage (depending on scope), outreach sequence management, weekly pipeline reporting, CRM updates, and a monthly strategy review with you. Everything except showing up to the calls.',
  },
  {
    q: 'Can I pause or cancel if it is not working?',
    a: 'Engagements run on a 30-day rolling basis after the initial 60-day minimum. If the results are not there by the end of month two, we extend at no cost rather than ask you to renew. We are not interested in retaining clients who are not seeing results.',
  },
  {
    q: 'How do you report results?',
    a: 'You get a weekly report every Monday: outreach volume, reply rate, meetings booked, pipeline value added, and tasks for the coming week. A shared live dashboard in your CRM means you can check in any time. No surprises, no waiting for end-of-month summaries.',
  },
];

function FaqItem({ q, a, isOpen, onToggle, index, mountVisible }) {
  const answerRef = useRef(null);
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  return (
    <div
      className="border-b border-slate-200 last:border-b-0"
      style={{
        opacity: mountVisible ? 1 : 0,
        transition: `opacity 300ms ease ${index * 40}ms`,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left text-slate-900 font-semibold hover:text-sky-600 transition-colors focus:outline-none focus:text-sky-600"
      >
        <span className="pr-4">{q}</span>
        <span
          aria-hidden="true"
          className="flex-shrink-0 text-sky-500"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: prefersReduced ? 'none' : 'transform 200ms ease',
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        ref={answerRef}
        hidden={!isOpen}
        className="pb-5 text-slate-600 text-sm leading-relaxed"
      >
        {a}
      </div>
    </div>
  );
}

export default function FaqSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const _faqItems = brandDNA.faq;
  const faqs =
    Array.isArray(_faqItems) && _faqItems.length > 0
      ? _faqItems.slice(0, 7)
      : DEFAULT_FAQS;

  function handleToggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      id="faq"
      ref={sectionRef}
      aria-labelledby="faq-heading"
      className="bg-[#F8FAFC] py-16 lg:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium tracking-[0.14em] uppercase text-sky-600 mb-3"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 400ms ease 0ms' }}
          >
            {brandDNA.copy.faq.label || 'FAQ'}
          </p>
          <h2
            id="faq-heading"
            className="text-3xl lg:text-4xl font-bold text-slate-900"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms',
            }}
          >
            {brandDNA.copy.faq.heading || 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-200 overflow-hidden">
          <div className="px-6">
            {faqs.map((item, i) => (
              <FaqItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={function() { handleToggle(i); }}
                index={i}
                mountVisible={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
