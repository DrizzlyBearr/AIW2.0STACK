import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outsourced Sales for Professional Services Firms',
    provider: {
      '@type': 'Organization',
      name: 'Millionaire Contracts',
      url: 'https://millionairecontracts.com',
    },
    description:
      'Millionaire Contracts builds and runs business development, appointment setting, and closing for professional services firms that have outgrown referral-led growth and need a proactive, predictable pipeline.',
    areaServed: ['US', 'GB', 'ZA', 'SG'],
    serviceType: 'Outsourced Sales',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does outsourced sales work for professional services firms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Professional services firms that rely on referrals and reputation grow only as fast as word of mouth allows. A dedicated business development function builds a proactive pipeline of qualified conversations alongside the referral base, so growth is no longer capped by who happens to recommend you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our work is relationship-driven. Will outbound feel too aggressive?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional services outreach is not a volume play. It opens with a specific, credible observation about the prospect\'s situation, not a pitch. Done correctly it reads as relevant and considered, which is exactly what a partner-level buyer expects before they will take a meeting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will an outsourced team understand our service well enough to represent us?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The role of the outbound function is to open the right conversations and qualify intent, not to deliver the engagement. Your partners run the substantive conversations. We make sure those conversations are with decision-makers who fit your ideal client profile and have a genuine reason to talk now.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long before we see pipeline from an outsourced sales team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most engagements produce first qualified meetings within 30 to 45 days. A consistent weekly cadence of discovery conversations typically follows within 60 to 90 days as the outreach is refined on early response data.',
        },
      },
      {
        '@type': 'Question',
        name: 'We have partners who sell between client work. Why change that?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Partner-led business development stalls every time delivery demands attention, which creates a feast or famine pipeline. A dedicated function keeps outreach consistent regardless of how busy the partners are, so the pipeline does not empty the moment the firm gets busy.',
        },
      },
    ],
  },
]

const challenges = [
  {
    number: '01',
    title: 'Growth is capped by referrals',
    body: 'Reputation and word of mouth are a strong foundation, but they are a slow one. New relationships arrive at the pace of referrals, not the pace of opportunity. There is no way to accelerate it.',
  },
  {
    number: '02',
    title: 'Partners sell between client work',
    body: 'When business development depends on partner availability, the pipeline stalls every time a major engagement demands attention. The firm grows in bursts, then goes quiet.',
  },
  {
    number: '03',
    title: 'The buyer is cautious and senior',
    body: 'General counsel, COOs, finance directors, and HR leaders are risk-averse and time-poor. Generic outreach does not reach them. It takes a specific, credible approach to earn a meeting.',
  },
  {
    number: '04',
    title: 'No pipeline visibility or forecast',
    body: 'Without a structured process, leadership cannot see where new business stands or plan around it. Revenue feels unpredictable because the pipeline that drives it is invisible.',
  },
]

const proofCards = [
  {
    name: 'Keen People',
    category: 'Staffing & Talent',
    tagline: 'Building a repeatable pipeline of corporate retainer clients for a specialist staffing firm.',
    metrics: [
      { value: '40+', label: 'Corporate meetings booked' },
      { value: '5', label: 'New retainer clients won' },
      { value: '60%', label: 'Meeting acceptance rate' },
      { value: '2x', label: 'Retainer revenue growth' },
    ],
    slug: 'keen-people',
  },
  {
    name: 'iLawyer Marketing',
    category: 'Legal Marketing Agency',
    tagline: 'Sales management and closing infrastructure for a specialist legal marketing agency.',
    metrics: [
      { value: '50%', label: 'Close rate on qualified leads' },
      { value: '8+', label: 'New law firm clients won' },
      { value: '2', label: 'Sales reps managed and performing to target' },
      { value: '25%', label: 'Reduction in average sales cycle' },
    ],
    slug: 'ilawyer-marketing',
  },
  {
    name: 'Martino Law Group',
    category: 'Legal Services',
    tagline: 'Building a proactive business development function for a corporate law firm.',
    metrics: [
      { value: '15+', label: 'Corporate client meetings secured' },
      { value: '3', label: 'Retainer agreements initiated' },
      { value: '50%', label: 'Referral partner engagement rate' },
      { value: '6 months', label: 'Zero pipeline to active funnel' },
    ],
    slug: 'martino-law',
  },
  {
    name: 'Morecorp',
    category: 'Corporate Services',
    tagline: 'Installing a sales management function to take growth beyond what the founder could carry.',
    metrics: [
      { value: '30%', label: 'Revenue growth in engagement' },
      { value: '2', label: 'Reps ramped and hitting targets' },
      { value: '40%', label: 'Improvement in pipeline velocity' },
      { value: '3x', label: 'Forecasting accuracy improvement' },
    ],
    slug: 'morecorp',
  },
]

const services = [
  {
    to: '/sales-strategy-development',
    label: 'Sales Strategy',
    desc: 'ICP definition, vertical prioritisation, positioning, and the business development playbook your firm executes from.',
  },
  {
    to: '/appointment-setting',
    label: 'Appointment Setting',
    desc: 'Qualified discovery conversations booked with senior decision-makers on a consistent weekly cadence.',
  },
  {
    to: '/sales-closing',
    label: 'Sales Closing',
    desc: 'Closing support tuned to cautious, senior buyers who scrutinise everything before they commit.',
  },
  {
    to: '/sales-management',
    label: 'Sales Management',
    desc: 'KPIs, pipeline visibility, rep accountability, and the forecasting structure leadership needs to plan.',
  },
]

const faqItems = [
  {
    question: 'Does outsourced sales work for professional services firms?',
    answer:
      'Yes. Professional services firms that rely on referrals and reputation grow only as fast as word of mouth allows. A dedicated business development function builds a proactive pipeline of qualified conversations alongside the referral base, so growth is no longer capped by who happens to recommend you.',
  },
  {
    question: 'Our work is relationship-driven. Will outbound feel too aggressive?',
    answer:
      'Professional services outreach is not a volume play. It opens with a specific, credible observation about the prospect\'s situation, not a pitch. Done correctly it reads as relevant and considered, which is exactly what a partner-level buyer expects before they will take a meeting.',
  },
  {
    question: 'Will an outsourced team understand our service well enough to represent us?',
    answer:
      'The role of the outbound function is to open the right conversations and qualify intent, not to deliver the engagement. Your partners run the substantive conversations. We make sure those conversations are with decision-makers who fit your ideal client profile and have a genuine reason to talk now.',
  },
  {
    question: 'How long before we see pipeline from an outsourced sales team?',
    answer:
      'Most engagements produce first qualified meetings within 30 to 45 days. A consistent weekly cadence of discovery conversations typically follows within 60 to 90 days as the outreach is refined on early response data.',
  },
  {
    question: 'We have partners who sell between client work. Why change that?',
    answer:
      'Partner-led business development stalls every time delivery demands attention, which creates a feast or famine pipeline. A dedicated function keeps outreach consistent regardless of how busy the partners are, so the pipeline does not empty the moment the firm gets busy.',
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

export default function ProfessionalServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Outsourced Sales for Professional Services Firms"
        description="Millionaire Contracts builds business development, appointment setting, and closing for professional services firms that need a proactive pipeline beyond referrals."
        path="/outsourced-sales-for-professional-services"
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
            <span className="section-label mb-4 block">Professional Services</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Outsourced sales built for<br />
              <span className="text-mc-gold">professional services firms</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Referrals are a strong foundation but a slow one. When you need a proactive pipeline of senior conversations, booked consistently and without pulling your partners off client work, that is what we build.
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
              The growth blockers that show up in professional services firms
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
              How Millionaire Contracts works with professional services firms
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">1</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">ICP and positioning</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We define exactly which clients are worth pursuing. Industry, size, the buying trigger that makes them need you, and the senior decision-maker who owns the problem. Then we position your firm around their situation, not your service list.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">2</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Outreach senior buyers respect</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                Cautious, senior buyers ignore generic outreach. We build sequences that open with a specific, credible observation about the prospect&apos;s situation, which is what earns a meeting from a general counsel, a COO, or a finance director.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">3</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Closing and pipeline management</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We provide closing support tuned to risk-averse buyers who scrutinise everything, and install the management layer that keeps the pipeline visible, the reps accountable, and leadership able to forecast.
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
              Results from the professional services vertical
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
              What we build for professional services firms
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
              Questions from professional services firms
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
            Ready to grow beyond referrals?
          </h2>
          <p className="font-body text-amber-100 text-lg leading-relaxed mb-8">
            One call is enough to understand your current pipeline situation and what a dedicated business development function would look like for your firm.
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
