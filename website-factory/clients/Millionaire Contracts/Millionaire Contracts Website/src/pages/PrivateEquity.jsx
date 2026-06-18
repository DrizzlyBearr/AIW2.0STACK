import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outsourced Deal Origination for Private Equity and M&A',
    provider: {
      '@type': 'Organization',
      name: 'Millionaire Contracts',
      url: 'https://millionairecontracts.com',
    },
    description:
      'Millionaire Contracts builds and runs deal origination, owner outreach, and discovery-call booking for private equity firms, search funds, and acquirers that need proprietary deal flow instead of brokered auctions.',
    areaServed: ['US', 'GB', 'ZA', 'SG'],
    serviceType: 'Outsourced Deal Origination',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does outsourced appointment setting work for private equity firms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Acquirers that rely on brokered deal flow end up competing in auctions and paying more for the same deals everyone else is looking at. A dedicated origination function builds proprietary deal flow by reaching business owners directly, often before the business is ever listed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you reach business owners who are not actively selling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most good acquisitions are not on the market. We reach owners directly with trust-first outreach that leads with an understanding of their situation rather than an acquisition pitch. The goal of the first conversation is rapport and qualification, not a deal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our partners handle origination themselves. Why change that?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Partners running deal conversations is the right use of their time. Partners spending hours cold calling owners is not. We carry the volume of outreach and qualification so your team only enters the conversations that are worth their attention.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you qualify a target before booking a call?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We screen every target against your buy box: sector, revenue and profitability range, ownership structure, and genuine willingness to have a conversation. Only owners who fit the criteria and are open to talking get booked onto your calendar.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long before we see qualified seller conversations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Acquisition outreach warms more slowly than typical B2B sales because owners are cautious about who they talk to. Most engagements produce first qualified discovery calls within 30 to 60 days, with a steadier cadence as trust builds and targeting sharpens on early response data.',
        },
      },
    ],
  },
]

const challenges = [
  {
    number: '01',
    title: 'Proprietary deal flow is hard to manufacture',
    body: 'Relying on brokers means competing in auctions, paying up, and seeing the same deals as every other buyer. The acquisitions worth having are usually the ones nobody else has reached yet.',
  },
  {
    number: '02',
    title: 'Partners are too senior to prospect all day',
    body: 'The people who should be running deal conversations are not the people who should be cold calling owners for hours. When origination sits on senior shoulders, it is the first thing to slip when a live deal demands attention.',
  },
  {
    number: '03',
    title: 'Owners are guarded and slow to trust',
    body: 'Business owners are protective of what they have built and sceptical of strangers calling about buying it. Generic outreach gets ignored. Getting a real conversation takes a disciplined, patient approach most teams are not set up to run.',
  },
  {
    number: '04',
    title: 'Pipeline is feast or famine',
    body: 'Without a systematic origination engine, deal flow depends on timing and luck. A thin pipeline erodes confidence with limited partners and forces rushed decisions on weaker opportunities.',
  },
]

const proofCards = [
  {
    name: 'BaseHome Capital',
    category: 'Private Equity / M&A',
    tagline: 'High-quality meetings that lead to real acquisitions.',
    metrics: [
      { value: '66%', label: 'Meeting success rate' },
      { value: '100%', label: 'Client satisfaction' },
      { value: 'Multiple', label: 'Acquisitions closed from booked meetings' },
      { value: 'Stronger', label: 'Predictable acquisition pipeline' },
    ],
    slug: 'basehome-capital',
  },
  {
    name: 'Eads Bridge Holdings',
    category: 'Private Equity / Behavioral Health',
    tagline: 'Fixing appointment setting and pipeline execution for a behavioral health acquisition firm.',
    metrics: [
      { value: '50%', label: 'More confirmed appointments booked' },
      { value: 'Higher', label: 'Meeting-to-opportunity conversion' },
      { value: 'Faster', label: 'Sales cycle from first contact to close' },
      { value: 'Better', label: 'CRM visibility and pipeline health' },
    ],
    slug: 'eads-bridge-holdings',
  },
  {
    name: 'Sigma Health Technologies',
    category: 'Healthcare Technology / M&A',
    tagline: 'Building a disciplined acquisition engine to find and book the right healthcare technology deals.',
    metrics: [
      { value: 'More', label: 'Discovery calls with genuinely open sellers' },
      { value: 'Better', label: 'Conversation quality and information exchange' },
      { value: 'Vetted', label: 'Targets meeting acquisition criteria' },
      { value: 'Structured', label: 'Pipeline from scattered to intentional' },
    ],
    slug: 'sigma-health-technologies',
  },
]

const services = [
  {
    to: '/sales-strategy-development',
    label: 'Sales Strategy',
    desc: 'Buy box definition, target market mapping, origination strategy, and the outreach playbook your team runs from.',
  },
  {
    to: '/appointment-setting',
    label: 'Appointment Setting',
    desc: 'Discovery calls booked directly with business owners and decision-makers who are genuinely open to a conversation.',
  },
  {
    to: '/sales-closing',
    label: 'Deal Conversation Support',
    desc: 'Support through seller conversations, from first discovery call to the structured discussions that move a deal forward.',
  },
  {
    to: '/sales-management',
    label: 'Sales Management',
    desc: 'CRM structure, pipeline visibility, origination team accountability, and the forecasting leadership needs to plan.',
  },
]

const faqItems = [
  {
    question: 'Does outsourced appointment setting work for private equity firms?',
    answer:
      'Yes. Acquirers that rely on brokered deal flow end up competing in auctions and paying more for the same deals everyone else is looking at. A dedicated origination function builds proprietary deal flow by reaching business owners directly, often before the business is ever listed.',
  },
  {
    question: 'How do you reach business owners who are not actively selling?',
    answer:
      'Most good acquisitions are not on the market. We reach owners directly with trust-first outreach that leads with an understanding of their situation rather than an acquisition pitch. The goal of the first conversation is rapport and qualification, not a deal.',
  },
  {
    question: 'Our partners handle origination themselves. Why change that?',
    answer:
      'Partners running deal conversations is the right use of their time. Partners spending hours cold calling owners is not. We carry the volume of outreach and qualification so your team only enters the conversations that are worth their attention.',
  },
  {
    question: 'How do you qualify a target before booking a call?',
    answer:
      'We screen every target against your buy box: sector, revenue and profitability range, ownership structure, and genuine willingness to have a conversation. Only owners who fit the criteria and are open to talking get booked onto your calendar.',
  },
  {
    question: 'How long before we see qualified seller conversations?',
    answer:
      'Acquisition outreach warms more slowly than typical B2B sales because owners are cautious about who they talk to. Most engagements produce first qualified discovery calls within 30 to 60 days, with a steadier cadence as trust builds and targeting sharpens on early response data.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-lg overflow-hidden border transition-colors ${open ? 'border-mc-gold/40' : 'border-white/10'}`}>
      <button
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-body font-semibold text-sm text-white leading-snug">{question}</span>
        <span className={`text-mc-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 font-body text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-4">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function PrivateEquity() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Outsourced Sales and Deal Origination for Private Equity and M&A"
        description="Millionaire Contracts builds deal origination, owner outreach, and discovery-call booking for private equity firms, search funds, and acquirers that need proprietary deal flow beyond brokered auctions."
        path="/outsourced-sales-for-private-equity"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-mc-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Private Equity / M&A</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Deal origination built for<br />
              <span className="text-mc-gold">private equity and acquirers</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Brokered deal flow means competing in auctions for the same deals as everyone else. We build proprietary deal flow by reaching business owners directly, booking discovery calls with sellers who are genuinely open to a conversation, often before the business ever hits the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/calender" className="btn-primary text-center">
                Book a Free Strategy Call
              </Link>
              <Link
                to="/how-it-works"
                className="font-headline font-bold text-white border border-white/20 rounded-lg px-6 py-3 text-sm hover:border-mc-gold/50 hover:text-mc-gold transition-colors text-center"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-3 block">The problem</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              The deal flow blockers that show up in acquisition firms
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <div key={c.number} className="bg-mc-dark rounded-xl p-8 border border-white/10 group hover:border-mc-gold/30 transition-colors">
                <span className="font-headline text-5xl font-black text-mc-gold/20 leading-none block mb-4">{c.number}</span>
                <h3 className="font-headline text-xl font-black text-white mb-3">{c.title}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-mc-dark py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-3 block">Our approach</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-white leading-tight">
              How Millionaire Contracts works with acquisition firms
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">1</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Buy box and target mapping</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We start by defining exactly what you want to buy. Sector, revenue and profitability range, ownership structure, and the signals that make a target worth pursuing. Then we map and screen the market against that buy box before any outreach begins.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">2</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Trust-first owner outreach</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                Owners do not respond to acquisition pitches from strangers. We lead with an understanding of their business and their situation, listening before we ever raise the idea of a sale. That patience is what turns a cold contact into a real conversation.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">3</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Discovery booking and pipeline control</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We book discovery calls with owners who are genuinely open to talking, capture detailed context from every conversation, and track everything in your CRM. Your team enters each call fully briefed, and nothing slips through the cracks.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/calender" className="btn-primary">
              Talk to us about your deal flow
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-3 block">Proof</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              Results from the private equity and M&A vertical
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mt-4">
              These are real engagements, real numbers, and the same origination infrastructure we build for every client we work with.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {proofCards.map((cs) => (
              <div key={cs.slug} className="bg-mc-dark rounded-xl border border-white/10 overflow-hidden hover:border-mc-gold/30 transition-colors group">
                <div className="p-8">
                  <span className="inline-block bg-mc-gold/10 border border-mc-gold/30 text-mc-gold text-xs font-bold rounded-full px-3 py-1 mb-4">
                    {cs.category}
                  </span>
                  <h3 className="font-headline text-xl font-black text-white mb-2">{cs.name}</h3>
                  <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">{cs.tagline}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-white/5 rounded-lg p-4">
                        <div className="font-headline text-2xl font-black text-mc-gold leading-none mb-1">{m.value}</div>
                        <div className="font-body text-xs text-gray-400 leading-snug">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/${cs.slug}`}
                    className="font-headline font-bold text-mc-gold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read the full case study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className="font-headline font-bold text-mc-teal text-sm inline-flex items-center gap-2 hover:text-mc-gold transition-colors">
              View all case studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mc-teal/5 border-y border-mc-teal/10 py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="section-label mb-3 block">Services</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              What we build for acquisition firms
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="flex flex-col bg-white rounded-xl p-6 border border-gray-100 hover:border-mc-gold/40 hover:shadow-md transition-all group"
              >
                <h3 className="font-headline text-base font-black text-mc-teal mb-3 group-hover:text-mc-gold transition-colors">{s.label}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed flex-grow">{s.desc}</p>
                <span className="font-headline font-bold text-mc-gold text-xs inline-flex items-center gap-1 mt-5">
                  Learn more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mc-dark py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label mb-3 block">FAQ</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-white">
              Questions from private equity and acquisition teams
            </h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqItems.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-mc-gold py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Ready to build proprietary deal flow?
          </h2>
          <p className="font-body text-amber-100 text-lg leading-relaxed mb-8">
            One call is enough to understand your current deal flow and what a dedicated origination function would look like for your firm.
          </p>
          <Link
            to="/calender"
            className="inline-block bg-white text-mc-teal font-headline font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-base"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
