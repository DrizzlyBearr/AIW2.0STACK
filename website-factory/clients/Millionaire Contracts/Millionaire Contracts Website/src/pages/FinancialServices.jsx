import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outsourced Sales for Financial Services and Fintech Companies',
    provider: {
      '@type': 'Organization',
      name: 'Millionaire Contracts',
      url: 'https://millionairecontracts.com',
    },
    description:
      'Millionaire Contracts builds and runs sales strategy, appointment setting, and commercial execution for financial services and fintech companies that need a disciplined, trust-led pipeline rather than high-pressure tactics.',
    areaServed: ['US', 'GB', 'ZA', 'SG'],
    serviceType: 'Outsourced Sales',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does outsourced sales work for financial services and fintech companies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Financial services and fintech companies with strong products often underperform commercially because they treat sales as secondary to the product. A structured sales function built around trust and education rather than volume and pressure unlocks the commercial traction the product already deserves.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our industry is highly regulated. How do you handle compliance constraints?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build sales processes that work within regulatory boundaries, not around them. Messaging is education-first and factual. We avoid anything that creates undue pressure, overpromises on returns, or runs into compliance grey areas. The goal is a sales function your legal and compliance team would be comfortable with.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our product is complex. How does an outsourced team represent it accurately?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The outbound function opens qualified conversations, not product demos. We position around the buyer\'s pain and use case, qualify for genuine fit, and hand over to your technical or product team once intent is confirmed. Your experts close and explain. We make sure only the right conversations reach them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Trust is everything in finance. Will outbound damage our reputation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'High-pressure, volume-driven outreach would. Trust-led outreach does not. When messaging is honest, relevant, and respects the buyer\'s intelligence, it signals credibility rather than undermining it. Financial buyers respond to clarity, specificity, and an absence of hard-sell tactics.',
        },
      },
      {
        '@type': 'Question',
        name: 'We are pre-revenue and still finding our go-to-market. Can you help?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Early-stage financial services and fintech companies benefit from having a sales function built correctly from the start rather than retrofitted later. We can build the entire commercial foundation: ICP, positioning, acquisition playbooks, and the management structure to track what is working.',
        },
      },
    ],
  },
]

const challenges = [
  {
    number: '01',
    title: 'Trust is the hardest thing to manufacture',
    body: 'Buyers in financial services are risk-averse and slow to commit. Generic outreach reads as noise at best and a red flag at worst. The only thing that earns a conversation is credibility built before the first ask.',
  },
  {
    number: '02',
    title: 'The product needs explaining before it can sell',
    body: 'Financial products are not impulse buys. Prospects need to understand what they are getting into before they can make a decision. When sales jumps straight to the pitch, buyers disengage or stall indefinitely.',
  },
  {
    number: '03',
    title: 'Technical founders are running sales',
    body: 'The people who built the product understand it deeply. They do not always know how to run a commercial pipeline. The result is uneven sales effort, deals that drag on, and growth that depends on who happens to ask.',
  },
  {
    number: '04',
    title: 'No structured acquisition system',
    body: 'Most financial services companies grow through networks and referrals early on. When those dry up, there is no engine underneath. Building one from scratch mid-growth is harder, slower, and more expensive than starting right.',
  },
]

const proofCards = [
  {
    name: 'Thutsé',
    category: 'Fintech / Financial Wellness',
    tagline: 'Building a complete sales function from zero for a financial wellness platform with no prior revenue structure.',
    metrics: [
      { value: '1K+', label: 'Monthly subscriber target set' },
      { value: '90%', label: 'Month-over-month retention signal' },
      { value: '77%', label: 'Active usage in first 30 days' },
      { value: '83%', label: 'Acquisition efficiency benchmark' },
    ],
    slug: 'thutse',
  },
  {
    name: 'TD Markets',
    category: 'Trading / Financial Markets',
    tagline: 'Replacing low-quality traffic conversion with an education-first channel that brought in funded, committed traders.',
    metrics: [
      { value: 'Steady', label: 'Flow of qualified traders' },
      { value: 'Higher', label: 'Funded account quality' },
      { value: 'Reduced', label: 'Early trader churn' },
      { value: 'Scalable', label: 'Partner-led acquisition channel' },
    ],
    slug: 'td-markets',
  },
  {
    name: 'KPG / MTN Zambia',
    category: 'Technology / Telecoms',
    tagline: 'Leading commercial coordination and implementation for a device financing platform rollout across MTN Zambia.',
    metrics: [
      { value: 'Same-day', label: 'Device financing approvals at point of sale' },
      { value: 'Significant', label: 'Reduction in approval waiting times' },
      { value: 'On time', label: 'All project objectives delivered' },
      { value: 'Higher', label: 'Device sales through the financing channel' },
    ],
    slug: 'kpg-mtn',
  },
]

const services = [
  {
    to: '/sales-strategy-development',
    label: 'Sales Strategy',
    desc: 'ICP definition, go-to-market design, compliant messaging, and the acquisition playbook built around your specific product and buyer.',
  },
  {
    to: '/appointment-setting',
    label: 'Appointment Setting',
    desc: 'Education-first outreach that qualifies buyers on fit and intent before a single meeting is booked, protecting your team\'s time and your reputation.',
  },
  {
    to: '/sales-management',
    label: 'Sales Management',
    desc: 'Pipeline structure, rep accountability, KPIs, and the forecasting visibility financial services leadership needs to plan around.',
  },
  {
    to: '/sales-closing',
    label: 'Sales Closing',
    desc: 'Closing support built for long, considered sales cycles with multiple stakeholders, compliance gatekeepers, and risk-conscious buyers.',
  },
]

const faqItems = [
  {
    question: 'Does outsourced sales work for financial services and fintech companies?',
    answer:
      'Yes. Financial services and fintech companies with strong products often underperform commercially because they treat sales as secondary to the product. A structured sales function built around trust and education rather than volume and pressure unlocks the commercial traction the product already deserves.',
  },
  {
    question: 'Our industry is highly regulated. How do you handle compliance constraints?',
    answer:
      'We build sales processes that work within regulatory boundaries, not around them. Messaging is education-first and factual. We avoid anything that creates undue pressure, overpromises on returns, or runs into compliance grey areas. The goal is a sales function your legal and compliance team would be comfortable with.',
  },
  {
    question: 'Our product is complex. How does an outsourced team represent it accurately?',
    answer:
      "The outbound function opens qualified conversations, not product demos. We position around the buyer's pain and use case, qualify for genuine fit, and hand over to your technical or product team once intent is confirmed. Your experts close and explain. We make sure only the right conversations reach them.",
  },
  {
    question: 'Trust is everything in finance. Will outbound damage our reputation?',
    answer:
      "High-pressure, volume-driven outreach would. Trust-led outreach does not. When messaging is honest, relevant, and respects the buyer's intelligence, it signals credibility rather than undermining it. Financial buyers respond to clarity, specificity, and an absence of hard-sell tactics.",
  },
  {
    question: 'We are pre-revenue and still finding our go-to-market. Can you help?',
    answer:
      'Yes. Early-stage financial services and fintech companies benefit from having a sales function built correctly from the start rather than retrofitted later. We can build the entire commercial foundation: ICP, positioning, acquisition playbooks, and the management structure to track what is working.',
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

export default function FinancialServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Outsourced Sales for Financial Services and Fintech Companies"
        description="Millionaire Contracts builds sales strategy, appointment setting, and commercial execution for financial services and fintech companies that need a disciplined, trust-led pipeline."
        path="/outsourced-sales-for-financial-services"
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
            <span className="section-label mb-4 block">Financial Services &amp; Fintech</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Outsourced sales built for<br />
              <span className="text-mc-gold">financial services and fintech</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Finance is a high-trust industry. Buyers are careful, cycles are long, and a wrong-footed approach does more damage than no approach at all. We build sales processes that earn trust before asking for anything, and convert that trust into a pipeline your business can count on.
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
              The growth blockers that show up in financial services companies
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
              How Millionaire Contracts works with financial services companies
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">1</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">ICP and compliant positioning</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We define exactly who you are trying to reach, what problem you solve for them, and how to communicate it in a way that is clear, credible, and compliant. Messaging is built around the buyer's situation, not your product features.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">2</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Education-first outreach</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We open conversations by demonstrating understanding of the buyer's world rather than leading with a pitch. Prospects are qualified on fit, urgency, and readiness before a meeting is booked, so every conversation your team takes is worth taking.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">3</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Commercial structure and execution</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We install the pipeline structure, KPIs, and management layer that turns scattered sales activity into a visible, forecastable commercial operation. From founding-team selling to a system that runs without you in every call.
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
              Results from the financial services vertical
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
              What we build for financial services companies
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
              Questions from financial services companies
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
            Ready to build a pipeline your buyers trust?
          </h2>
          <p className="font-body text-amber-100 text-lg leading-relaxed mb-8">
            One call is enough to understand your current commercial situation and what a trust-led sales function would look like for your business.
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
