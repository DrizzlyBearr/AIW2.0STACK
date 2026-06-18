import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outsourced Sales for Healthcare and Health Services Businesses',
    provider: {
      '@type': 'Organization',
      name: 'Millionaire Contracts',
      url: 'https://millionairecontracts.com',
    },
    description:
      'Millionaire Contracts builds and runs patient acquisition, appointment setting, and sales strategy for healthcare and health services businesses that need a proactive, ethical pipeline beyond referrals and inbound.',
    areaServed: ['US', 'GB', 'ZA', 'SG'],
    serviceType: 'Outsourced Sales',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does outbound sales work for healthcare businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Healthcare businesses that rely on referrals and word of mouth grow only as fast as those channels allow. A proactive outreach function built around education, community presence, and ethical outreach creates a parallel acquisition engine that does not require waiting for someone to recommend you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is outbound sales appropriate in healthcare and wellness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Appropriate outreach in healthcare is community-focused, education-first, and built around genuine helpfulness rather than pressure. Done that way, it reflects positively on the practice and builds the kind of trust that converts prospective patients into long-term clients.',
        },
      },
      {
        '@type': 'Question',
        name: 'We already get referrals. Why do we need anything else?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Referrals are valuable but passive. You cannot control the volume, the timing, or the fit of who comes through that channel. A proactive acquisition function runs in parallel to referrals and gives your practice the ability to grow on purpose rather than grow whenever the network feels like sending someone.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our team is clinical, not commercial. Can an outsourced sales function fit our culture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A sales function in healthcare does not mean aggressive closing. It means having a system for proactive outreach, a consistent intake process, and a way to follow up with interested prospects. When built correctly it feels like an extension of your care culture, not something foreign to it.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long before we see new patient or client flow from a structured outreach system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most engagements produce measurable outreach activity from day one and new patient or client conversations within 30 to 60 days. Building a fully self-sustaining internal acquisition team typically takes 60 to 90 days depending on team size and starting capability.',
        },
      },
    ],
  },
]

const challenges = [
  {
    number: '01',
    title: 'Growth depends entirely on passive sources',
    body: 'Referrals, reviews, and word of mouth are real assets. They are also outside your control. When those channels slow down, there is no lever to pull. Proactive growth requires a system, not just a reputation.',
  },
  {
    number: '02',
    title: 'Clinical teams are not built to sell',
    body: 'Healthcare professionals are trained to deliver outcomes, not to open conversations with prospective patients. Expecting clinical staff to also drive acquisition is asking for a skill set most teams do not have and should not need.',
  },
  {
    number: '03',
    title: 'Intake is inconsistent and leaks revenue',
    body: 'Interested prospects contact the practice, then go quiet. Follow-up is slow or non-existent. The intake experience is different every time. Good demand is being lost not because the offer is wrong, but because nothing catches it consistently.',
  },
  {
    number: '04',
    title: 'No visibility into where growth comes from',
    body: 'When acquisition is passive and informal, leadership cannot forecast, measure, or improve it. Growth feels unpredictable because there is nothing structured underneath it.',
  },
]

const proofCards = [
  {
    name: 'StarBrite Orthodontics',
    category: 'Healthcare / Orthodontics',
    tagline: 'Building an outbound patient acquisition engine from scratch for a growing orthodontic practice.',
    metrics: [
      { value: 'Daily', label: 'Consistent outbound activity running' },
      { value: '100%', label: 'Outreach activity visibility for leadership' },
      { value: 'Trainable', label: 'Repeatable acquisition system built' },
      { value: 'More', label: 'Control over new patient flow' },
    ],
    slug: 'starbrite-ortho',
  },
  {
    name: 'Medellin Health',
    category: "Men's Health / DTC",
    tagline: "Turning casual Instagram DMs into a structured, predictable path to booked consultations.",
    metrics: [
      { value: 'Higher', label: 'DM-to-call conversion' },
      { value: 'More', label: 'Sales-ready prospects on calls' },
      { value: 'Less', label: 'Ghosting and stalled threads' },
      { value: 'Lower', label: 'Owner dependency on the DMs' },
    ],
    slug: 'medellin-health',
  },
]

const services = [
  {
    to: '/sales-strategy-development',
    label: 'Sales Strategy',
    desc: 'Patient ICP, ethical outreach strategy, compliant messaging, and the acquisition playbook your team executes from day to day.',
  },
  {
    to: '/appointment-setting',
    label: 'Appointment Setting',
    desc: 'Consistent outbound that books qualified consultations and first appointments without requiring clinical staff to prospect.',
  },
  {
    to: '/sales-management',
    label: 'Sales Management',
    desc: 'Activity tracking, rep accountability, intake performance metrics, and the management structure that makes growth visible and improvable.',
  },
  {
    to: '/sales-closing',
    label: 'Sales Closing',
    desc: 'Conversion support that guides interested prospects from enquiry to commitment without pressure and without friction.',
  },
]

const faqItems = [
  {
    question: 'Does outbound sales work for healthcare businesses?',
    answer:
      'Yes. Healthcare businesses that rely on referrals and word of mouth grow only as fast as those channels allow. A proactive outreach function built around education, community presence, and ethical outreach creates a parallel acquisition engine that does not require waiting for someone to recommend you.',
  },
  {
    question: 'Is outbound sales appropriate in healthcare and wellness?',
    answer:
      'Appropriate outreach in healthcare is community-focused, education-first, and built around genuine helpfulness rather than pressure. Done that way, it reflects positively on the practice and builds the kind of trust that converts prospective patients into long-term clients.',
  },
  {
    question: 'We already get referrals. Why do we need anything else?',
    answer:
      'Referrals are valuable but passive. You cannot control the volume, the timing, or the fit of who comes through that channel. A proactive acquisition function runs in parallel to referrals and gives your practice the ability to grow on purpose rather than grow whenever the network feels like sending someone.',
  },
  {
    question: 'Our team is clinical, not commercial. Can an outsourced sales function fit our culture?',
    answer:
      'A sales function in healthcare does not mean aggressive closing. It means having a system for proactive outreach, a consistent intake process, and a way to follow up with interested prospects. When built correctly it feels like an extension of your care culture, not something foreign to it.',
  },
  {
    question: 'How long before we see new patient or client flow from a structured outreach system?',
    answer:
      'Most engagements produce measurable outreach activity from day one and new patient or client conversations within 30 to 60 days. Building a fully self-sustaining internal acquisition team typically takes 60 to 90 days depending on team size and starting capability.',
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

export default function Healthcare() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Outsourced Sales for Healthcare and Health Services Businesses"
        description="Millionaire Contracts builds patient acquisition, appointment setting, and sales strategy for healthcare businesses that need a proactive pipeline beyond referrals and passive word of mouth."
        path="/outsourced-sales-for-healthcare"
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
            <span className="section-label mb-4 block">Healthcare &amp; Health Services</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Outsourced sales built for<br />
              <span className="text-mc-gold">healthcare and health services</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Healthcare businesses grow through reputation and referrals. Then they plateau. When the passive channels stop being enough, a proactive acquisition system gives you the ability to create demand rather than wait for it, without compromising the trust your practice runs on.
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
              The growth blockers that show up in healthcare businesses
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
              How Millionaire Contracts works with healthcare businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">1</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Ethical outreach strategy</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We build patient or client acquisition around education, community, and genuine helpfulness. Messaging is designed for your specific patient profile, the problem they are experiencing, and the outcome they want, never generic, never pressured, never anything that would embarrass the practice.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">2</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Intake and conversion systems</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We standardize the experience between first contact and booked appointment so interested prospects stop falling through. Speed to response, consistent qualification, and a clear next step every time, regardless of who picks up.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">3</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Team structure and internal capability</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We build acquisition as an internal function your team can own, not a dependency on an external party. Defined roles, training, playbooks, and performance tracking so the system keeps running and improving after the engagement ends.
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
              Results from the healthcare vertical
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mt-4">
              These are real engagements, real numbers, and the same sales infrastructure we build for every client we work with.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
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
          <div className="mt-10">
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
              What we build for healthcare businesses
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
              Questions from healthcare businesses
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
            One call is enough to understand your current patient acquisition situation and what a proactive, structured system would look like for your practice.
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
