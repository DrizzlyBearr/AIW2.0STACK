import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outsourced Sales and Intake for Law Firms',
    provider: {
      '@type': 'Organization',
      name: 'Millionaire Contracts',
      url: 'https://www.millionairecontracts.com',
    },
    description:
      'Millionaire Contracts builds and runs the intake side of small law firms: the part between someone finding the firm and a consultation in the diary. Immediate first contact, qualification, same-day booking, and the reporting that shows what happens to every enquiry.',
    areaServed: ['US', 'GB', 'ZA'],
    serviceType: 'Legal Intake and Client Acquisition',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this legal marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Marketing decides how many people contact the firm. This decides what happens to them afterwards. Most small firms have more enquiries than they realise and convert fewer of them than they think, because nothing records the ones who arrived, waited, and went elsewhere.',
        },
      },
      {
        '@type': 'Question',
        name: 'We already use an answering service. Is this the same thing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An answering service takes a message. Intake qualifies the matter, sets expectations about what happens next, and books the consultation while the person is still on the phone. The difference shows up in the number of consultations that actually get into the diary, and in how many of them turn up.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who actually speaks to our prospective clients?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A trained intake person working to your criteria, not an attorney and never presented as one. They gather the facts you need to decide whether the matter is one you want, and book the consultation. No legal advice is given and no fee agreement is discussed. The substantive conversation stays with your attorneys.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle confidentiality and conflicts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Intake collects only what the firm needs to run a conflicts check and decide whether to take the matter. Everything captured belongs to the firm and lives in the firm’s own system. Conflicts checking stays with the firm, before any consultation is confirmed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our work comes from referrals. Why change anything?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Referrals still have to get through the door. A referred client who calls on a Friday evening, reaches voicemail, and hears nothing until Tuesday is as lost as a stranger. Fixing intake protects the referral base first, before it adds anything new.',
        },
      },
    ],
  },
]

const challenges = [
  {
    number: '01',
    title: 'The enquiry arrives while you are in court',
    body: 'Someone with a legal problem contacts the firm at the worst possible moment for the firm and the most urgent one for them. The partner is in a hearing, the paralegal is on another matter, and the enquiry sits until somebody is free.',
  },
  {
    number: '02',
    title: 'A contact form is not an intake system',
    body: 'A form that asks for a name and a message tells you nothing about whether the matter is worth taking. It also tells the person nothing about what happens next, which is the moment they open a second tab.',
  },
  {
    number: '03',
    title: 'The first firm to answer usually gets the case',
    body: 'People with a legal problem are frightened and they are shopping. They contact several firms and instruct whichever one makes them feel handled first. That is usually decided in the first ten minutes, not by the quality of the eventual advice.',
  },
  {
    number: '04',
    title: 'Nobody counts the ones who left',
    body: 'A firm can say how many matters it opened last month. Almost none can say how many people made contact and never became a matter. From the inside that looks like a quiet month rather than a leak.',
  },
]

const proofCards = [
  {
    name: 'Martino Law Group',
    category: 'Legal Services',
    tagline: 'Turning anxious legal inquiries into same-day attorney consultations.',
    metrics: [
      { value: 'Faster', label: 'Inquiry-to-consultation conversion' },
      { value: 'Higher', label: 'Quality of attorney conversations' },
      { value: 'Same-day', label: 'Consultations booked' },
      { value: 'Fewer', label: 'No-shows and drop-offs' },
    ],
    slug: 'martino-law',
  },
  {
    name: 'iLawyer Marketing',
    category: 'Legal Marketing Agency',
    tagline: 'Turning legal leads into signed cases through intake and conversion.',
    metrics: [
      { value: 'Higher', label: 'Lead-to-consultation conversion' },
      { value: 'Better', label: 'Attorney calendar utilization' },
      { value: 'Stronger', label: 'Law firm satisfaction and renewals' },
      { value: 'Fewer', label: 'Lead quality complaints' },
    ],
    slug: 'ilawyer-marketing',
  },
]

const services = [
  {
    to: '/services#pre-qualifying-website',
    label: 'Pre-Qualifying Website',
    desc: 'A site rebuilt so an enquiry arrives with the matter type, the urgency and the jurisdiction already attached.',
  },
  {
    to: '/services#qualification-framework',
    label: 'Qualification Framework',
    desc: 'The criteria that decide which matters the firm wants, applied consistently instead of case by case.',
  },
  {
    to: '/services#scripts-and-conversation-flows',
    label: 'Scripts and Conversation Flows',
    desc: 'What is said in the first ten minutes to someone frightened and shopping, written for your practice areas.',
  },
  {
    to: '/services#crm-and-pipeline-setup',
    label: 'CRM and Pipeline Setup',
    desc: 'Every enquiry logged from first contact to signed matter, so the ones that leak are finally visible.',
  },
  {
    to: '/services#outreach-engine',
    label: 'Outreach Engine',
    desc: 'Follow-up that runs on its own, so an enquiry that goes quiet is not simply forgotten.',
  },
]

const faqItems = [
  {
    question: 'Is this legal marketing?',
    answer:
      'No. Marketing decides how many people contact the firm. This decides what happens to them afterwards. Most small firms have more enquiries than they realise and convert fewer of them than they think, because nothing records the ones who arrived, waited, and went elsewhere.',
  },
  {
    question: 'We already use an answering service. Is this the same thing?',
    answer:
      'An answering service takes a message. Intake qualifies the matter, sets expectations about what happens next, and books the consultation while the person is still on the phone. The difference shows up in the number of consultations that actually get into the diary, and in how many of them turn up.',
  },
  {
    question: 'Who actually speaks to our prospective clients?',
    answer:
      'A trained intake person working to your criteria, not an attorney and never presented as one. They gather the facts you need to decide whether the matter is one you want, and book the consultation. No legal advice is given and no fee agreement is discussed. The substantive conversation stays with your attorneys.',
  },
  {
    question: 'How do you handle confidentiality and conflicts?',
    answer:
      'Intake collects only what the firm needs to run a conflicts check and decide whether to take the matter. Everything captured belongs to the firm and lives in the firm’s own system. Conflicts checking stays with the firm, before any consultation is confirmed.',
  },
  {
    question: 'Our work comes from referrals. Why change anything?',
    answer:
      'Referrals still have to get through the door. A referred client who calls on a Friday evening, reaches voicemail, and hears nothing until Tuesday is as lost as a stranger. Fixing intake protects the referral base first, before it adds anything new.',
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

export default function LawFirms() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Outsourced Sales and Intake for Law Firms"
        description="Millionaire Contracts builds and runs the intake side of small law firms: the part between someone finding you and a consultation in the diary."
        path="/outsourced-sales-for-law-firms"
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
            <span className="section-label mb-4 block">Law Firms</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              The part between someone finding you<br />
              <span className="text-mc-gold">and a consultation in the diary</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Most small firms do not have a marketing problem. They have more enquiries than they realise and convert fewer of them than they think, because nothing records the people who made contact, waited, and instructed somebody else. That is the part we build and run.
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
              Where a small firm loses the case before anyone reads the file
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
              How Millionaire Contracts works with law firms
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">1</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Map what happens now</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                We follow a real enquiry through the firm as it stands. Where it lands, who sees it, how long it waits, and at which point the person gives up. Most firms have never seen this written down, and it is usually the whole diagnosis.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">2</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Answer first, then qualify</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                Immediate first contact, because intent decays by the hour and a slow reply reads as no reply. Then the questions that decide whether the matter is one the firm wants, asked the same way every time so the answer does not depend on who happened to pick up.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center">
                <span className="font-headline font-black text-mc-gold text-sm">3</span>
              </div>
              <h3 className="font-headline text-lg font-black text-white">Book it, and then count it</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                A consultation in the diary while the person is still on the phone, with confirmation and reminders so it is kept. Then the reporting the firm has never had: how many made contact, how many were booked, how many turned up, and where the rest went.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/calender" className="btn-primary">
              Talk to us about your intake
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
              Work in the legal vertical
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mt-4">
              Two engagements in law, one inside a firm and one inside the agency that feeds them. Outcomes are described rather than quantified, at our clients&apos; request.
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
              What we build for law firms
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              Questions from law firms
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
            How many enquiries did you get last month?
          </h2>
          <p className="font-body text-amber-100 text-lg leading-relaxed mb-8">
            If the honest answer is that nobody knows, that is the finding. One call is enough to map what happens to an enquiry at your firm today and what it would take to close the gap.
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
