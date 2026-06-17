import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sales and Website Engagements',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  description: 'Millionaire Contracts offers website audit and rebuild, appointment setting, sales closing, and full sales operation. Services can be taken individually or as a complete build.',
}

const steps = [
  {
    number: '01',
    heading: 'Strategy call',
    body: 'We spend 45 minutes understanding your business, your current sales process, and exactly where revenue is leaking. No pitch. Just diagnosis.',
  },
  {
    number: '02',
    heading: 'Engagement design',
    body: 'We propose the right engagement model for your stage, your target market, and your goals. You see exactly what we will do, what we will measure, and what success looks like.',
  },
  {
    number: '03',
    heading: 'Deployment',
    body: 'We integrate into your operation. Your calendar starts filling, your pipeline starts moving, or your sales team starts closing. Operational from day one.',
  },
  {
    number: '04',
    heading: 'Optimise and scale',
    body: 'We measure every outcome, refine what is working, and build the infrastructure to scale what is proven. You own the playbook at the end.',
  },
]

const engagements = [
  {
    name: 'Appointment Setting',
    tag: 'Outbound',
    description: 'We run your outbound engine. Target identification, outreach, qualification, and booking. Qualified decision-maker meetings in your calendar every week.',
    includes: [
      'Ideal customer profile build',
      'Multi-channel outreach sequences',
      'Lead qualification and vetting',
      'Calendar management and booking',
      'Weekly pipeline reporting',
    ],
    ideal: 'Best for businesses that need consistent top-of-funnel flow without building an internal SDR team.',
    to: '/appointment-setting',
  },
  {
    name: 'Sales Closing',
    tag: 'Revenue',
    description: 'Senior closers working your pipeline. We join calls, run demos, handle objections, and close deals. Your team focuses on delivery while we focus on revenue.',
    includes: [
      'Senior closer deployment',
      'Call handling and demo execution',
      'Objection management',
      'Proposal and follow-up management',
      'Deal reporting and conversion tracking',
    ],
    ideal: 'Best for businesses with pipeline but poor close rates, or founders who are closing everything themselves.',
    to: '/sales-closing',
  },
  {
    name: 'Full Sales Operation',
    tag: 'Complete',
    description: 'End-to-end sales infrastructure. Strategy, management, outbound, and closing fully deployed into your business. The complete outsourced sales team.',
    includes: [
      'Sales strategy and process design',
      'Pipeline architecture and CRM setup',
      'Outbound engine and appointment setting',
      'Closing team deployment',
      'Sales management and performance oversight',
      'Monthly strategy reviews',
    ],
    ideal: 'Best for businesses ready to scale revenue without the cost and risk of building an internal sales team.',
    to: '/sales-strategy-development',
  },
]

const guarantees = [
  { heading: 'No long-term lock-in', body: 'Engagements are structured around results, not retainer length. You are not locked into a 12-month contract hoping it works.' },
  { heading: 'Replacement guarantee', body: 'If a rep is not performing, we replace them. No delays, no HR complexity, no lost months waiting for a new hire.' },
  { heading: 'You own the playbook', body: 'Every process, sequence, and strategy we build is yours. When the engagement ends, your business keeps the infrastructure.' },
]

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How It Works"
        description="Three engagement models. No long-term lock-in. Millionaire Contracts deploys appointment setting, sales closing, or a full sales operation into your business from day one."
        path="/how-it-works"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Engagements</span>
            <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              How We Work<br />
              <span className="text-mc-gold">With You</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most businesses come to us with the same problem: a website that does not convert and a sales process that cannot close. We fix both. Each service can be taken on its own or as a complete build, depending on where you are starting from.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '20+', label: 'Companies scaled' },
            { value: '65%', label: 'Average meeting success rate' },
            { value: 'Day 1', label: 'Operational from' },
            { value: '4 steps', label: 'From call to deployment' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block" style={{ color: '#d8920e' }}>The process</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              From first call to full deployment in days
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="relative">
                <div className="font-headline text-6xl font-black text-mc-gold/15 leading-none mb-3">{s.number}</div>
                <h3 className="font-headline font-bold text-mc-teal text-lg mb-3">{s.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block" style={{ color: '#d8920e' }}>Pick your starting point</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              Every service, standalone or complete
            </h2>
            <p className="font-body text-gray-500 mt-4 text-base">
              Take one service or let us build the whole system. Most clients start with the website and scale into sales from there.
            </p>
          </div>

          {/* Website foundation card */}
          <div className="bg-mc-dark rounded-2xl border border-mc-gold/30 overflow-hidden mb-6">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="px-8 py-8 border-b lg:border-b-0 lg:border-r border-white/10">
                <span className="text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block bg-mc-gold/20 text-mc-gold">
                  Foundation
                </span>
                <h3 className="font-headline text-2xl font-black text-white mb-3">Website Audit and Rebuild</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed mb-4">
                  Most businesses lose deals before the sales conversation even starts. A slow, unconvincing, or outdated website kills credibility before your team picks up the phone. We audit what you have, identify where it is costing you, and rebuild it to convert.
                </p>
                <p className="font-body text-gray-500 text-xs italic">
                  The natural starting point for businesses whose website is not pulling its weight.
                </p>
              </div>
              <div className="px-8 py-8">
                <p className="font-body text-xs font-semibold uppercase tracking-wider mb-4 text-mc-gold">What is included</p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    'Full website audit and conversion review',
                    'Custom design built for your market and audience',
                    'Copy written to convert, not just inform',
                    'SEO structure, schema markup, and sitemap',
                    'Speed optimisation and mobile-first build',
                    'Handoff with full ownership of code and assets',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-mc-gold flex-shrink-0 mt-2" />
                      <span className="font-body text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/calender" className="inline-block bg-mc-gold text-white font-headline font-bold text-sm py-3 px-6 rounded-lg hover:bg-mc-gold-light transition-colors">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </div>

          {/* Sales service cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            {engagements.map((e, i) => (
              <div key={e.name} className={`rounded-2xl overflow-hidden flex flex-col ${i === 2 ? 'border-2 border-mc-gold' : 'border border-gray-200'}`}>
                <div className={`px-7 py-6 ${i === 2 ? 'bg-mc-dark' : 'bg-white'}`}>
                  <span className={`text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block ${i === 2 ? 'bg-mc-gold/20 text-mc-gold' : 'bg-mc-teal/10 text-mc-teal'}`}>
                    {e.tag}
                  </span>
                  <h3 className={`font-headline text-xl font-black mb-3 ${i === 2 ? 'text-white' : 'text-mc-teal'}`}>{e.name}</h3>
                  <p className={`font-body text-sm leading-relaxed ${i === 2 ? 'text-gray-400' : 'text-gray-600'}`}>{e.description}</p>
                </div>
                <div className={`px-7 py-6 flex-grow ${i === 2 ? 'bg-mc-dark/95 border-t border-white/10' : 'bg-white border-t border-gray-100'}`}>
                  <p className={`font-body text-xs font-semibold uppercase tracking-wider mb-4 ${i === 2 ? 'text-mc-gold' : 'text-mc-teal'}`}>What is included</p>
                  <ul className="space-y-2.5 mb-6">
                    {e.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-mc-gold flex-shrink-0 mt-2" />
                        <span className={`font-body text-sm ${i === 2 ? 'text-gray-300' : 'text-gray-600'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`font-body text-xs italic leading-relaxed mb-6 ${i === 2 ? 'text-gray-500' : 'text-gray-400'}`}>{e.ideal}</p>
                  <Link
                    to="/calender"
                    className={`block text-center font-headline font-bold text-sm py-3 px-6 rounded-lg transition-colors ${i === 2 ? 'bg-mc-gold text-white hover:bg-mc-gold-light' : 'border border-mc-teal text-mc-teal hover:bg-mc-teal hover:text-white'}`}
                  >
                    Book a Strategy Call
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block" style={{ color: '#d8920e' }}>Our commitment</span>
            <h2 className="font-headline text-3xl font-black text-mc-teal">What we stand behind</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {guarantees.map((g) => (
              <div key={g.heading} className="bg-mc-dark rounded-xl p-7 border border-white/10">
                <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-5" />
                <h3 className="font-headline font-bold text-white mb-3">{g.heading}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mc-gold py-16 px-6 text-center">
        <h2 className="font-headline text-4xl font-black text-white mb-4 leading-tight">
          Not sure which model fits?<br className="hidden md:block" /> The call will tell us both.
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One 45-minute conversation is enough to diagnose where your revenue is leaking and which engagement closes the gap.
        </p>
        <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
          Book a Free Strategy Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
