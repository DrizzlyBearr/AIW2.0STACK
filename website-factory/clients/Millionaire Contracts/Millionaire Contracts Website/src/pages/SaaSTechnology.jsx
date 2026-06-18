import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outsourced Sales for SaaS and Technology Companies',
    provider: {
      '@type': 'Organization',
      name: 'Millionaire Contracts',
      url: 'https://millionairecontracts.com',
    },
    description:
      'Millionaire Contracts builds and runs outbound sales, appointment setting, and enterprise closing for SaaS and technology companies that have outgrown product-led growth and need a repeatable pipeline.',
    areaServed: ['US', 'GB', 'ZA', 'SG'],
    serviceType: 'Outsourced Sales',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does outsourced sales work for SaaS companies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Outsourced sales works well for SaaS companies that have validated product-market fit but lack the go-to-market infrastructure to scale outbound. A dedicated team builds the ICP, runs the outreach, and generates consistent demo volume faster than hiring and ramping in-house.',
        },
      },
      {
        '@type': 'Question',
        name: 'We rely on product-led growth. Can outsourced sales complement PLG?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PLG and outbound are not in conflict. PLG converts users who find you. Outbound creates conversations with the companies that never will. Most SaaS businesses that rely on PLG alone are leaving a substantial share of their addressable market untouched.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our product needs a technical demo. How do you handle that?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The outbound team fills your calendar with qualified prospects. The demo is run by your team. The role of appointment setting is to make sure every demo is with someone who genuinely fits your ICP and has the authority to act, so your team is not spending time on conversations that go nowhere.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long before we see pipeline from an outsourced sales team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most engagements produce first qualified meetings within 30 to 45 days. A consistent weekly cadence of demos or enterprise introductions typically follows within 60 to 90 days as sequences are refined on early response data.',
        },
      },
      {
        '@type': 'Question',
        name: 'We have only sold to SMBs. Can you help us move upmarket to enterprise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Moving upmarket requires a different ICP, different outreach, and a different closing process. Enterprise deals involve more stakeholders, longer timelines, and procurement stages that SMB sales do not have. We build the strategy and the execution for the segment you are moving into, not the one you already know.',
        },
      },
    ],
  },
]

const challenges = [
  {
    number: '01',
    title: 'Product-led growth has a ceiling',
    body: 'PLG converts the users who find you. It does not reach the enterprise accounts that need a conversation before they buy. The segment you cannot reach with self-serve is often your highest-value market.',
  },
  {
    number: '02',
    title: 'The founder is running every demo',
    body: 'When every sales conversation still routes through the founder, pipeline is capped by one person\'s calendar. The company cannot close faster than one person can talk.',
  },
  {
    number: '03',
    title: 'Enterprise deals die in committee',
    body: 'Multi-stakeholder evaluations, procurement stages, security reviews, IT signoff. Selling to enterprise buyers is a different process than selling to SMBs, and most early-stage teams are not built for it.',
  },
  {
    number: '04',
    title: 'Inbound dries up and there is no fallback',
    body: 'When paid acquisition slows or the content engine stalls, businesses without an outbound function have nothing to activate. Pipeline stops. Revenue follows shortly after.',
  },
]

const proofCards = [
  {
    name: 'SaaS Lead Flow',
    category: 'Software / SaaS',
    tagline: 'Building the outbound engine that turned product traction into a predictable B2B pipeline.',
    metrics: [
      { value: '50+', label: 'Qualified demos booked' },
      { value: '35%', label: 'Demo-to-trial conversion' },
      { value: '3x', label: 'Monthly qualified lead volume' },
      { value: '28%', label: 'Reduction in cost per acquisition' },
    ],
    slug: 'saas-lead-flow',
  },
  {
    name: 'Sigma Health Technologies',
    category: 'Health Technology',
    tagline: 'Taking a health technology platform from early traction to an active enterprise sales pipeline.',
    metrics: [
      { value: '3x', label: 'Pipeline growth' },
      { value: '8+', label: 'Enterprise accounts in active evaluation' },
      { value: '50%', label: 'Proposal-to-close rate' },
      { value: '40%', label: 'Reduction in average sales cycle' },
    ],
    slug: 'sigma-health-technologies',
  },
  {
    name: 'Demand Growth AI',
    category: 'AI & Digital Growth',
    tagline: 'Installing a closing and management layer for a fast-moving AI growth agency.',
    metrics: [
      { value: '40%', label: 'Improvement in close rate' },
      { value: '6+', label: 'Enterprise retainers closed' },
      { value: '2x', label: 'Pipeline value doubled' },
      { value: '30 days', label: 'Time to full sales function ramp' },
    ],
    slug: 'demand-growth-ai',
  },
  {
    name: 'Unified Communications',
    category: 'Telecoms / B2B Technology',
    tagline: 'Winning enterprise contracts in a crowded, price-competitive communications market.',
    metrics: [
      { value: '8+', label: 'Enterprise contracts signed' },
      { value: '2x', label: 'Average contract value increase' },
      { value: '45%', label: 'Competitive displacement win rate' },
      { value: '$500K+', label: 'ARR added in engagement period' },
    ],
    slug: 'unified-communications',
  },
]

const services = [
  {
    to: '/sales-strategy-development',
    label: 'Sales Strategy',
    desc: 'ICP definition, segment prioritisation, outbound motion design, and the playbook your team executes from.',
  },
  {
    to: '/appointment-setting',
    label: 'Appointment Setting',
    desc: 'Qualified demos and discovery calls booked with the right buyers on a consistent weekly cadence.',
  },
  {
    to: '/sales-closing',
    label: 'Sales Closing',
    desc: 'Live closing support on enterprise and high-value opportunities with multi-stakeholder evaluation processes.',
  },
  {
    to: '/sales-management',
    label: 'Sales Management',
    desc: 'KPIs, pipeline visibility, rep accountability, and performance coaching for your sales team.',
  },
]

const faqItems = [
  {
    question: 'Does outsourced sales work for SaaS companies?',
    answer:
      'Yes. Outsourced sales works well for SaaS companies that have validated product-market fit but lack the go-to-market infrastructure to scale outbound. A dedicated team builds the ICP, runs the outreach, and generates consistent demo volume faster than hiring and ramping in-house.',
  },
  {
    question: 'We rely on product-led growth. Can outsourced sales complement PLG?',
    answer:
      'PLG and outbound are not in conflict. PLG converts users who find you. Outbound creates conversations with the companies that never will. Most SaaS businesses that rely on PLG alone are leaving a substantial share of their addressable market untouched.',
  },
  {
    question: 'Our product needs a technical demo. How do you handle that?',
    answer:
      'The outbound team fills your calendar with qualified prospects. The demo is run by your team. The role of appointment setting is to make sure every demo is with someone who genuinely fits your ICP and has the authority to act, so your team is not spending time on conversations that go nowhere.',
  },
  {
    question: 'How long before we see pipeline from an outsourced sales team?',
    answer:
      'Most engagements produce first qualified meetings within 30 to 45 days. A consistent weekly cadence of demos or enterprise introductions typically follows within 60 to 90 days as sequences are refined on early response data.',
  },
  {
    question: 'We have only sold to SMBs. Can you help us move upmarket to enterprise?',
    answer:
      'Yes. Moving upmarket requires a different ICP, different outreach, and a different closing process. Enterprise deals involve more stakeholders, longer timelines, and procurement stages that SMB sales do not have. We build the strategy and the execution for the segment you are moving into, not the one you already know.',
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

export default function SaaSTechnology() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Outsourced Sales for SaaS and Technology Companies"
        description="Millionaire Contracts builds outbound sales, appointment setting, and enterprise closing for SaaS and technology companies that need a repeatable pipeline beyond product-led growth."
        path="/outsourced-sales-for-saas"
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
            <span className="section-label mb-4 block">SaaS / Technology</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Outsourced sales built for<br />
              <span className="text-mc-gold">SaaS and technology companies</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Product-led growth works until it does not. When you need a repeatable outbound motion, qualified enterprise demos, and a pipeline that runs without the founder in every conversation, that is what we build.
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
              The growth blockers that show up in technology companies
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
              How Millionaire Contracts works with technology companies
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">1</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">ICP and segment design</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We start by defining exactly who you are selling to. Company size, industry, buying trigger, job title of the decision-maker, and the specific pain your product solves for that person. Vague ICPs produce vague pipelines.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">2</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Outbound built for technical buyers</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                Technology buyers are sceptical of generic outreach. We build sequences that speak to the specific operational problem your product solves, not a product brochure disguised as a cold email. The result is a higher response rate and better-qualified conversations.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">3</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Enterprise closing and pipeline management</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                For enterprise deals, we provide closing support through multi-stakeholder evaluation stages. For growing teams, we install the management layer that keeps reps accountable, pipeline moving, and conversion rates visible.
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
              Results from the technology and software vertical
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
              What we build for technology companies
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
              Questions from SaaS and technology teams
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
            Ready to build a pipeline that runs without you?
          </h2>
          <p className="font-body text-amber-100 text-lg leading-relaxed mb-8">
            One call is enough to understand your current pipeline situation and what a dedicated sales function would look like for your business.
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
