import { useEffect, useState } from 'react'
import SEOMeta from '../components/SEOMeta'
import ProblemForm from '../components/ProblemForm'

// The paid ads landing page (MC-Fulfillment-Engine docs/mc-paid-ads.md). One
// offer: tell us the problem, get a plan back. No main navigation, so the
// only thing to do here is the form. Kept out of search and the sitemap
// (scripts/prerender.js, NOINDEX): it is for ad traffic only.
//
// The headline follows the ad group, read from utm_campaign. The prerendered
// page carries the default, which is also what anyone without a tag sees.

// Keyed by the ad group's utm_campaign. Keyword research for South Africa
// (October 2026) found people search for the service by name, not the
// problem, so each ad group is a service and its headline names it.
const HEADLINES = {
  'lead-generation': {
    title: 'Lead generation, planned before you pay for anything.',
    sub: 'Tell us who you sell to. We send a written plan to find and reach them: who, how, how long, and the first step. Free, within two working days.',
  },
  'appointment-setting': {
    title: 'Appointment setting and cold calling, planned first.',
    sub: 'Tell us who you need to be talking to. We send a written plan to get those meetings booked. Free, within two working days.',
  },
  'business-development': {
    title: "Business development for when there's no time to sell.",
    sub: "Tell us what isn't getting done. We send a written plan to get it done, without you hiring a sales team. Free, within two working days.",
  },
}

const DEFAULT = {
  title: "Tell us what isn't getting done. We'll send you a plan to get it done.",
  sub: 'Finding the right people, following up the leads you already have, booking the meetings you never get to. Free, in writing, within two working days.',
}

const PLAN_PARTS = [
  { h: 'Your problem, in your words', p: 'So you can check we understood it before you read anything else.' },
  { h: 'Who we would reach, and how', p: 'The people, where they are, and the channels that get a reply from them.' },
  { h: 'How long it takes', p: 'A realistic timeline, not a promise we cannot keep.' },
  { h: 'The first step', p: 'What happens in week one, whether you work with us or do it yourself.' },
]

export default function GetAPlan() {
  const [copy, setCopy] = useState(DEFAULT)
  useEffect(() => {
    try {
      const c = new URLSearchParams(window.location.search).get('utm_campaign')
      if (c && HEADLINES[c]) setCopy(HEADLINES[c])
    } catch {
      // keep the default
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-mc-dark">
      <SEOMeta
        title="Get a plan for the problem you are stuck on"
        description="Tell Millionaire Contracts what needs doing that is not getting done. A free written plan within two working days."
        path="/get-a-plan"
      />

      {/* The logo is drawn for a white bar, as in the Navbar. */}
      <header className="bg-white border-b border-gray-100 px-6">
        <div className="max-w-screen-xl mx-auto h-20 flex items-center">
          <a href="/" aria-label="Millionaire Contracts home">
            <img src="/mc-logo.png" alt="Millionaire Contracts" className="h-14 w-auto" style={{ maxWidth: '260px' }} />
          </a>
        </div>
      </header>

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
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="section-label mb-3 block">Free plan</span>
            <h1 className="font-headline text-3xl md:text-5xl font-black text-white leading-tight mb-4">{copy.title}</h1>
            <p className="font-body text-gray-400 text-base md:text-lg leading-relaxed">{copy.sub}</p>
          </div>
          <ProblemForm />
        </div>
      </section>

      {/* Once Sa Lala agrees, a short anonymised account of their project goes
          here: the people they needed, how we found them, what happened.
          Nothing goes here that the client has not approved. */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-mc-teal text-center mb-10">What the plan covers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLAN_PARTS.map((part, i) => (
              <div key={part.h} className="border border-gray-200 rounded-lg p-6">
                <span className="font-headline text-mc-gold font-black text-xl">{i + 1}</span>
                <h3 className="font-headline text-lg font-bold text-mc-teal mt-2 mb-2">{part.h}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{part.p}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-600 text-sm text-center max-w-2xl mx-auto mt-10">
            If you give us your website we read it too, and mention it only if it is part of the problem. If we are not the right people to solve it, we will say so and tell you who might be.
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center">
        <p className="font-body text-xs text-gray-500">
          Millionaire Contracts · <a href="/" className="hover:text-white">millionairecontracts.com</a>
        </p>
      </footer>
    </div>
  )
}
