import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outsourced Sales for Marketing and Growth Agencies',
    provider: {
      '@type': 'Organization',
      name: 'Millionaire Contracts',
      url: 'https://millionairecontracts.com',
    },
    description:
      'Millionaire Contracts builds and runs new business development, appointment setting, and closing for marketing and growth agencies that need a consistent client pipeline beyond founder-led sales and inbound luck.',
    areaServed: ['US', 'GB', 'ZA', 'SG'],
    serviceType: 'Outsourced Sales',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does outbound new business work for marketing agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The agencies that grow consistently have a dedicated new business function running in parallel with delivery. Outbound does not replace referrals or inbound. It adds a predictable layer of qualified conversations so growth is not held hostage to who happens to call this month.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our work speaks for itself. Why do we need a sales function?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Work quality and new business development are separate problems. Exceptional work earns referrals and renewals. It does not automatically fill the pipeline with new clients at the pace you need. A dedicated sales function makes sure the right people see your work and have a reason to talk now.',
        },
      },
      {
        '@type': 'Question',
        name: 'We already have a marketing team. Can they handle new business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Marketing generates attention. Sales converts it. Most agency marketing teams are optimised for client campaigns, not for opening sales conversations with their own prospects. New business development requires its own discipline, its own outreach cadence, and someone who owns the outcome.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you represent our agency without knowing our work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The outbound function opens conversations and qualifies intent. It does not pitch creative or explain strategy. Once a prospect is qualified and interested, your senior team takes the relationship. We handle the front end of the sales process so your best people spend time on the conversations that are actually worth having.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long before we see new business pipeline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most engagements produce first qualified conversations within 30 to 45 days. A consistent weekly cadence of new business meetings typically follows within 60 to 90 days as outreach is refined on early response data.',
        },
      },
    ],
  },
]

const challenges = [
  {
    number: '01',
    title: "The cobbler's shoes problem",
    body: 'Agencies are expert at generating demand for clients. Their own new business is often the last thing that gets proper attention. When delivery is busy, prospecting stops. When it stops, the pipeline empties.',
  },
  {
    number: '02',
    title: 'The founder is the sales team',
    body: 'Most agencies grow through the principal. When the founder is in delivery, new business stalls. Growth becomes a function of how much breathing room the founder has, not how strong the offer is.',
  },
  {
    number: '03',
    title: 'Pitch culture replaces sales discipline',
    body: "Responding to RFPs and doing speculative work is not a sales strategy. It is expensive, low-conversion, and means you are only in conversations that someone else controls. You need outbound that puts you in rooms you chose.",
  },
  {
    number: '04',
    title: 'Retainer renewals and upsells get left to chance',
    body: 'When no one owns the commercial relationship, existing clients churn quietly and expansion opportunities get missed. Revenue becomes a set of pleasant surprises and disappointing surprises rather than something you can plan around.',
  },
]

const proofCards = [
  {
    name: 'HighSail Marketing',
    category: 'Marketing Agency',
    tagline: 'Turning cold email into real, qualified sales conversations for a performance marketing firm.',
    metrics: [
      { value: '89%', label: 'Better-quality sales conversations' },
      { value: '66%', label: 'Less time spent on low-intent prospects' },
      { value: 'Higher', label: 'Reply-to-call conversion rate' },
      { value: 'Predictable', label: 'Monthly pipeline, not lucky weeks' },
    ],
    slug: 'highsail-marketing',
  },
  {
    name: 'iLawyer Marketing',
    category: 'Legal Marketing Agency',
    tagline: 'Owning the intake and conversion layer that turned leads into signed cases for law firm clients.',
    metrics: [
      { value: 'Higher', label: 'Lead-to-consultation conversion' },
      { value: 'Better', label: 'Attorney calendar utilization' },
      { value: 'Stronger', label: 'Law firm satisfaction and renewals' },
      { value: 'Fewer', label: 'Lead quality complaints' },
    ],
    slug: 'ilawyer-marketing',
  },
  {
    name: 'Demand Growth AI',
    category: 'AI & Digital Growth',
    tagline: 'Owning the full outbound sales loop from cold message to closed deal for a growth solutions firm.',
    metrics: [
      { value: 'Higher', label: 'Cold-outreach-to-call conversion' },
      { value: 'Faster', label: 'Deal velocity through stages' },
      { value: 'Consistent', label: 'Repeatable client acquisition' },
      { value: 'Lower', label: 'Founder involvement in sales' },
    ],
    slug: 'demand-growth-ai',
  },
]

const services = [
  {
    to: '/sales-strategy-development',
    label: 'Sales Strategy',
    desc: 'ICP definition, service positioning, target client profile, and the new business playbook your team executes from.',
  },
  {
    to: '/appointment-setting',
    label: 'Appointment Setting',
    desc: 'Qualified new business conversations booked on a consistent weekly cadence, without the founder doing all the prospecting.',
  },
  {
    to: '/sales-closing',
    label: 'Sales Closing',
    desc: 'Closing support that turns qualified conversations into signed engagements without defaulting to spec work and RFP responses.',
  },
  {
    to: '/sales-management',
    label: 'Sales Management',
    desc: 'Pipeline visibility, activity accountability, and the forecasting structure that keeps new business on track month to month.',
  },
]

const faqItems = [
  {
    question: 'Does outbound new business work for marketing agencies?',
    answer:
      'Yes. The agencies that grow consistently have a dedicated new business function running in parallel with delivery. Outbound does not replace referrals or inbound. It adds a predictable layer of qualified conversations so growth is not held hostage to who happens to call this month.',
  },
  {
    question: 'Our work speaks for itself. Why do we need a sales function?',
    answer:
      'Work quality and new business development are separate problems. Exceptional work earns referrals and renewals. It does not automatically fill the pipeline with new clients at the pace you need. A dedicated sales function makes sure the right people see your work and have a reason to talk now.',
  },
  {
    question: 'We already have a marketing team. Can they handle new business?',
    answer:
      'Marketing generates attention. Sales converts it. Most agency marketing teams are optimised for client campaigns, not for opening sales conversations with their own prospects. New business development requires its own discipline, its own outreach cadence, and someone who owns the outcome.',
  },
  {
    question: 'How do you represent our agency without knowing our work?',
    answer:
      'The outbound function opens conversations and qualifies intent. It does not pitch creative or explain strategy. Once a prospect is qualified and interested, your senior team takes the relationship. We handle the front end of the sales process so your best people spend time on the conversations that are actually worth having.',
  },
  {
    question: 'How long before we see new business pipeline?',
    answer:
      'Most engagements produce first qualified conversations within 30 to 45 days. A consistent weekly cadence of new business meetings typically follows within 60 to 90 days as outreach is refined on early response data.',
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

export default function MarketingAgencies() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Outsourced Sales for Marketing and Growth Agencies"
        description="Millionaire Contracts builds new business development, appointment setting, and closing for marketing and growth agencies that need a consistent client pipeline beyond founder-led sales."
        path="/outsourced-sales-for-marketing-agencies"
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
            <span className="section-label mb-4 block">Marketing &amp; Growth Agencies</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Outsourced sales built for<br />
              <span className="text-mc-gold">marketing and growth agencies</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Agencies grow for clients all day. Their own new business is a different story. When delivery is full, prospecting stops, and the pipeline empties on a predictable schedule. We build the sales function that runs alongside delivery so new client conversations never stop.
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
              The growth blockers that show up in marketing agencies
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
              How Millionaire Contracts works with marketing agencies
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">1</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">ICP and service positioning</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We define exactly which clients are worth pursuing: the industry, the company size, the buying trigger that makes them need an agency right now, and the decision-maker who controls the budget. Then we position your agency around their problem, not your capability list.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">2</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Consistent new business outreach</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We run the outbound so new business conversations happen on schedule, not when the founder has breathing room. Messaging is built to start conversations rather than pitch services, with reply handling and qualification that keeps momentum moving.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">3</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Pipeline management and conversion</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We install the visibility layer that tells you where every prospect stands, provide closing support that converts qualified conversations into signed engagements, and give leadership the forecasting structure to plan around new business rather than react to it.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/calender" className="btn-primary">
              Talk to us about your pipeline
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
              Results from the marketing and agencies vertical
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mt-4">
              These are real engagements, real numbers, and the same sales infrastructure we build for every client we work with.
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
              What we build for marketing and growth agencies
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
              Questions from marketing agencies
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
            Ready to build a new business pipeline?
          </h2>
          <p className="font-body text-amber-100 text-lg leading-relaxed mb-8">
            One call is enough to understand where your current pipeline stands and what a dedicated new business function would look like for your agency.
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
