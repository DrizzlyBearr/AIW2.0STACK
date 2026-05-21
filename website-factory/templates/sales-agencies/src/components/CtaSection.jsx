import { useState, useEffect, useRef } from 'react';
import brandDNA from '../config/brand-dna';

/**
 * CtaSection -- Primary conversion form with 5 fields.
 * Dark background. Inline confirmation on submit (no redirect).
 * Reads only canonical brand-dna paths.
 */

const REVENUE_OPTIONS = [
  { value: '', label: 'Select your monthly revenue...' },
  { value: 'under-500k', label: 'Under $500K/year' },
  { value: '500k-2m', label: '$500K to $2M/year' },
  { value: '2m-10m', label: '$2M to $10M/year' },
  { value: '10m-plus', label: '$10M+/year' },
];

const CONFIRMATION_MSG =
  "You're booked. Check your email for a calendar confirmation. Before we talk, we'll review your website, your ICP, and any public information about your market so we can use the call on strategy, not introductions. See you soon.";

export default function CtaSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    workEmail: '',
    company: '',
    revenue: '',
    challenge: '',
  });
  const [errors, setErrors] = useState({});

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

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required.';
    if (!form.workEmail.trim()) e.workEmail = 'Work email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) e.workEmail = 'Enter a valid email address.';
    if (!form.company.trim()) e.company = 'Company name is required.';
    if (!form.revenue) e.revenue = 'Please select a revenue range.';
    if (!form.challenge.trim()) e.challenge = 'Please describe your biggest sales challenge.';
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  }

  const inputClass =
    'w-full rounded-md bg-[#243447] border border-[#1E3A5F] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors';
  const labelClass = 'block text-xs font-medium text-slate-400 mb-1.5';
  const errorClass = 'mt-1 text-xs text-red-400';

  return (
    <section
      id="lead-form"
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className="bg-[#0F1923] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="cta-heading"
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 0ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 0ms',
            }}
          >
            {brandDNA.copy.cta.heading || 'Ready to stop being the only salesperson?'}
          </h2>
          <p
            className="text-slate-400 text-lg max-w-xl mx-auto"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 400ms ease 80ms',
            }}
          >
            {brandDNA.copy.cta.body || 'Book a free 30-minute strategy call. We will review your pipeline situation and tell you exactly what we would do in month one.'}
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 120ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 120ms',
          }}
        >
          {submitted ? (
            <div className="bg-[#1A2535] border border-[#1E3A5F] rounded-xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-sky-500/20 flex items-center justify-center mx-auto mb-6">
                <svg aria-hidden="true" className="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">You are booked.</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">{CONFIRMATION_MSG}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#1A2535] border border-[#1E3A5F] rounded-xl p-8"
            >
              <p className="text-base font-semibold text-white mb-6">
                {brandDNA.copy.formHeader || 'Tell us about your pipeline.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="cta-firstName" className={labelClass}>First name *</label>
                  <input
                    id="cta-firstName"
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    placeholder="Alex"
                    aria-required="true"
                    aria-describedby={errors.firstName ? 'cta-firstName-err' : undefined}
                    className={inputClass}
                  />
                  {errors.firstName && <p id="cta-firstName-err" className={errorClass} role="alert">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="cta-email" className={labelClass}>Work email *</label>
                  <input
                    id="cta-email"
                    type="email"
                    name="workEmail"
                    value={form.workEmail}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="alex@company.com"
                    aria-required="true"
                    aria-describedby={errors.workEmail ? 'cta-email-err' : undefined}
                    className={inputClass}
                  />
                  {errors.workEmail && <p id="cta-email-err" className={errorClass} role="alert">{errors.workEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="cta-company" className={labelClass}>Company name *</label>
                  <input
                    id="cta-company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder="Acme Corp"
                    aria-required="true"
                    aria-describedby={errors.company ? 'cta-company-err' : undefined}
                    className={inputClass}
                  />
                  {errors.company && <p id="cta-company-err" className={errorClass} role="alert">{errors.company}</p>}
                </div>
                <div>
                  <label htmlFor="cta-revenue" className={labelClass}>Annual revenue *</label>
                  <select
                    id="cta-revenue"
                    name="revenue"
                    value={form.revenue}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.revenue ? 'cta-revenue-err' : undefined}
                    className={`${inputClass} cursor-pointer`}
                  >
                    {REVENUE_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.revenue && <p id="cta-revenue-err" className={errorClass} role="alert">{errors.revenue}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="cta-challenge" className={labelClass}>Your biggest sales challenge right now *</label>
                <textarea
                  id="cta-challenge"
                  name="challenge"
                  value={form.challenge}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Briefly describe what is holding your sales back..."
                  aria-required="true"
                  aria-describedby={errors.challenge ? 'cta-challenge-err' : undefined}
                  className={`${inputClass} resize-none`}
                />
                {errors.challenge && <p id="cta-challenge-err" className={errorClass} role="alert">{errors.challenge}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-sky-500 py-4 text-base font-bold text-white hover:bg-sky-600 active:scale-[0.98] transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#1A2535]"
              >
                {brandDNA.copy.submitButton || 'Book My Free Strategy Call'}
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                {brandDNA.copy.privacyLine || 'No spam. One call, no commitment.'}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
