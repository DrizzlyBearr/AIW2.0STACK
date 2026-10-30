import { useEffect, useRef, useState } from 'react'
import SEOMeta from '../components/SEOMeta'
import ProblemForm from '../components/ProblemForm'
import { caseStudies } from '../data/caseStudies'
import { testimonials, upworkStats, upworkReviews, UPWORK_URL } from '../components/Testimonials'

// The paid ads landing page (MC-Fulfillment-Engine docs/mc-paid-ads.md),
// built as a funnel: the offer and proof first, the form near the top for
// people who arrive ready, then the evidence and the answers for those who
// need more before they ask. No main navigation, so the only thing to do here
// is the form. Kept out of search and the sitemap (scripts/prerender.js,
// NOINDEX): it is for ad traffic only.
//
// Every result shown comes from the site's published case studies, client
// testimonials and the Upwork record. Nothing here is written for the page.
//
// The headline and the case studies follow the ad group, read from
// utm_campaign. The prerendered page carries the default, which is also what
// anyone without a tag sees.

// Keyed by the ad group's utm_campaign. Keyword research for South Africa
// (October 2026) found people search for the service by name, not the
// problem, so each ad group is a service and its headline names it. `work`
// is the case studies closest to that service, most relevant first.
const HEADLINES = {
  'lead-generation': {
    title: 'Lead generation, planned before you pay for anything.',
    sub: 'Tell us who you sell to. We send a written plan to find and reach them: who, how, how long, and the first step. Free, within two working days.',
    work: ['saas-lead-flow', 'skayle360', 'highsail-marketing'],
  },
  'appointment-setting': {
    title: 'Appointment setting and cold calling, planned first.',
    sub: 'Tell us who you need to be talking to. We send a written plan to get those meetings booked. Free, within two working days.',
    work: ['skayle360', 'basehome-capital', 'eads-bridge-holdings'],
  },
  'business-development': {
    title: "Business development for when there's no time to sell.",
    sub: "Tell us what isn't getting done. We send a written plan to get it done, without you hiring a sales team. Free, within two working days.",
    work: ['morecorp', 'demand-growth-ai', 'keen-people'],
  },
}

const DEFAULT = {
  title: "Tell us what isn't getting done. We'll send you a plan to get it done.",
  sub: 'Finding the right people, following up the leads you already have, booking the meetings you never get to. Free, in writing, within two working days.',
  work: ['skayle360', 'basehome-capital', 'morecorp'],
}

// Three results for the strip under the headline, each a figure a published
// case study stands behind.
const HEADLINE_RESULTS = [
  { value: '120+', label: 'qualified appointments for Skayle 360', slug: 'skayle360' },
  { value: '66%', label: 'meeting success rate for BaseHome Capital', slug: 'basehome-capital' },
  { value: 'R1.8M', label: 'revenue impact for Morecorp', slug: 'morecorp' },
]

// How it works and what the plan covers, in one: the research for the page
// found shorter pages convert better, and the two said the same thing twice.
const STEPS = [
  { h: 'Tell us what needs doing', p: 'Three short steps, about two minutes. Your words, not a brief.' },
  { h: 'Get a written plan', p: 'Within two working days: your problem in your words, who we would reach and how, how long it takes, and the first step.' },
  { h: 'You decide', p: 'Have us run it, or take the plan and do it yourself. Either way it is yours.' },
]

// The three strongest pieces of feedback, specific and named. BaseHome's
// quote sits beside the form's button instead (ProblemForm).
const FEEDBACK = [
  ...testimonials.filter((t) => ['Eads Bridge Holdings', 'MTN Zambia'].includes(t.company)).map((t) => ({ quote: t.quote, by: `${t.name}, ${t.company}` })),
  ...upworkReviews.slice(0, 1).map((r) => ({ quote: r.quote, by: `Upwork client, ${r.job}`, upwork: true })),
]

const FAQ = [
  { q: 'Is the plan really free?', a: 'Yes. No card, no contract, and you keep the plan whether or not you work with us.' },
  { q: 'Do I have to get on a call?', a: 'No. The plan comes in writing. If you want to talk it through, there is a link to book a discovery call, but it is your choice.' },
  { q: 'What does working with you cost?', a: 'It depends on what the plan says needs doing, so we price it once you have seen the plan and only for that scope. No retainer is assumed.' },
  { q: 'Do you only work in South Africa?', a: 'No. We are South African and have run outreach and sales for clients in the US, Zambia and elsewhere, as the case studies show.' },
  { q: 'What if you are not the right fit?', a: 'We will say so in the plan and tell you who might be. A wrong fit wastes both our time.' },
]

function scrollToForm() {
  document.getElementById('get-a-plan-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function GetAPlan() {
  const [copy, setCopy] = useState(DEFAULT)
  const [formInView, setFormInView] = useState(true)
  const formRef = useRef(null)

  useEffect(() => {
    try {
      const c = new URLSearchParams(window.location.search).get('utm_campaign')
      if (c && HEADLINES[c]) setCopy(HEADLINES[c])
    } catch {
      // keep the default
    }
  }, [])

  // The bar at the foot of a phone screen shows only while the form is out of
  // view, so it never covers the form itself.
  useEffect(() => {
    if (!formRef.current || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => setFormInView(e.isIntersecting), { threshold: 0.05 })
    io.observe(formRef.current)
    return () => io.disconnect()
  }, [])

  const work = copy.work.map((slug) => ({ slug, ...caseStudies[slug] })).filter((c) => c.name)
  const caseStudyCount = Object.keys(caseStudies).length

  return (
    <div className="min-h-screen flex flex-col bg-mc-dark">
      <SEOMeta
        title="Get a plan for the problem you are stuck on"
        description="Tell Millionaire Contracts what needs doing that is not getting done. A free written plan within two working days."
        path="/get-a-plan"
      />

      {/* The logo is drawn for a white bar, as in the Navbar. */}
      <header className="bg-white border-b border-gray-100 px-6">
        <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between gap-4">
          <a href="/" aria-label="Millionaire Contracts home">
            <img src="/mc-logo.png" alt="Millionaire Contracts" className="h-14 w-auto" style={{ maxWidth: '260px' }} />
          </a>
          <button type="button" onClick={scrollToForm} className="hidden sm:inline-block btn-primary text-sm py-3 px-5">
            Get my free plan
          </button>
        </div>
      </header>

      {/* Offer, proof, form */}
      <section className="relative px-6 pt-12 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="section-label mb-3 block">Free plan</span>
            <h1 className="font-headline text-3xl md:text-5xl font-black text-white leading-tight mb-4">{copy.title}</h1>
            <p className="font-body text-gray-400 text-base md:text-lg leading-relaxed">{copy.sub}</p>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-6">
              {upworkStats.map((s) => (
                <span key={s} className="font-body text-sm text-gray-300">
                  <span className="text-mc-gold mr-1" aria-hidden="true">★</span>{s}
                </span>
              ))}
              <span className="font-body text-sm text-gray-300">
                <span className="text-mc-gold mr-1" aria-hidden="true">★</span>{caseStudyCount} client case studies
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {HEADLINE_RESULTS.map((r) => (
                <a key={r.slug} href={`/${r.slug}`} target="_blank" rel="noopener" className="rounded-lg border border-white/10 bg-white/5 p-3 text-center hover:border-mc-gold/50 transition-colors">
                  <div className="font-headline text-xl md:text-3xl font-black text-mc-gold">{r.value}</div>
                  <div className="font-body text-[11px] md:text-xs text-gray-400 leading-snug mt-1">{r.label}</div>
                </a>
              ))}
            </div>
          </div>

          <div id="get-a-plan-form" ref={formRef} className="scroll-mt-6">
            <ProblemForm />
          </div>
        </div>
      </section>

      {/* Work for clients, matched to the ad group */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label mb-3 block">Work we have done</span>
            <h2 className="font-headline text-2xl md:text-4xl font-black text-mc-teal leading-tight">Results we have delivered for clients like you</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {work.map((c) => (
              <article key={c.slug} className="border border-gray-200 rounded-xl p-6 flex flex-col">
                <div className="font-body text-xs uppercase tracking-wider text-gray-400 mb-2">{c.category}</div>
                <h3 className="font-headline text-xl font-black text-mc-teal mb-2">{c.name}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{c.tagline}</p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {(c.metrics || []).slice(0, 2).map((m) => (
                    <div key={m.label} className="rounded-lg bg-gray-50 p-3">
                      <div className="font-headline text-xl font-black text-mc-gold">{m.value}</div>
                      <div className="font-body text-xs text-gray-600 leading-snug mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
                <a href={`/${c.slug}`} target="_blank" rel="noopener" className="mt-auto font-body text-sm font-semibold text-mc-teal underline hover:text-mc-gold">
                  Read the case study
                </a>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <button type="button" onClick={scrollToForm} className="btn-primary">Get my free plan</button>
          </div>
        </div>
      </section>

      {/* How it works, and what the plan covers */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-mc-teal text-center mb-10">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.h} className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-mc-teal text-white font-headline font-black flex items-center justify-center">{i + 1}</div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-mc-teal mb-1">{s.h}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{s.p}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-gray-600 text-sm text-center max-w-2xl mx-auto mt-10">
            If you give us your website we read it too, and mention it only if it is part of the problem. If we are not the right people to solve it, we will say so and tell you who might be.
          </p>
        </div>
      </section>

      {/* What clients say */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label mb-3 block">Client feedback</span>
            <h2 className="font-headline text-2xl md:text-4xl font-black text-mc-teal leading-tight">What clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEEDBACK.map((f) => (
              <figure key={f.by} className="border border-gray-200 rounded-xl p-6 flex flex-col gap-3">
                {f.upwork && <div className="text-mc-gold text-sm font-semibold" aria-label="Rated 5.0 out of 5 on Upwork">★★★★★ 5.0 on Upwork</div>}
                <blockquote className="font-body text-gray-700 text-sm leading-relaxed flex-grow">"{f.quote}"</blockquote>
                <figcaption className="font-body text-xs text-gray-500">{f.by}</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center mt-6">
            <a href={UPWORK_URL} target="_blank" rel="me noopener" className="font-body text-sm text-mc-teal underline hover:text-mc-gold">See every review on Upwork</a>
          </p>
        </div>
      </section>

      {/* Questions people ask before they send it */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-mc-teal text-center mb-8">Before you ask</h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-lg p-5 group">
                <summary className="font-headline font-bold text-mc-teal cursor-pointer list-none flex justify-between items-center gap-4">
                  {f.q}
                  <span className="text-mc-gold text-xl group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="font-body text-gray-600 text-sm leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Last ask */}
      <section className="px-6 py-16 text-center">
        <h2 className="font-headline text-2xl md:text-4xl font-black text-white leading-tight max-w-2xl mx-auto mb-4">Two minutes now, a written plan in two working days.</h2>
        <p className="font-body text-gray-400 mb-8">Free, no call needed, and yours to keep.</p>
        <button type="button" onClick={scrollToForm} className="btn-primary">Get my free plan</button>
      </section>

      <footer className="px-6 pt-4 pb-24 sm:pb-8 text-center">
        <p className="font-body text-xs text-gray-500">
          Millionaire Contracts · <a href="/" className="hover:text-white">millionairecontracts.com</a>
        </p>
      </footer>

      {/* On a phone, a way back to the form from anywhere on the page. */}
      {!formInView && (
        <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-mc-dark/95 border-t border-white/10 p-3">
          <button type="button" onClick={scrollToForm} className="btn-primary w-full text-center py-3">Get my free plan</button>
        </div>
      )}
    </div>
  )
}
