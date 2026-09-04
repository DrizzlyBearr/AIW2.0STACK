import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SDR vs BDR: What Is the Difference and Which Do You Need?',
  description: 'SDR vs BDR explained: what each role does, the real difference between inbound and outbound focus, how the terms are used loosely in practice, how the two fit together, and how to decide which your business needs.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/sdr-vs-bdr',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between an SDR and a BDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the most common usage, an SDR (Sales Development Representative) qualifies inbound leads that come from marketing, while a BDR (Business Development Representative) generates new opportunities through outbound prospecting. Both sit at the top of the funnel and both book qualified meetings for closers. The core split is inbound versus outbound. In practice, many companies use the two titles interchangeably and assign the same person both jobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do SDRs and BDRs close deals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Neither role closes deals in most B2B sales teams. Both are top-of-funnel roles focused on qualifying interest and booking meetings. The closing is handled by an Account Executive or the business owner. Asking an SDR or BDR to prospect, qualify, and close usually means one of the three jobs gets done poorly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which role should I hire first, an SDR or a BDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on where your pipeline comes from. If you already generate inbound leads from marketing and they are not being worked fast enough, hire for the SDR function first. If you have little or no inbound and need to create demand from a cold market, hire for the BDR function first. Most early-stage B2B companies need outbound before they have enough inbound to justify a dedicated inbound role.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can one person do both the SDR and BDR job?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One person can do both, and many small teams run it that way, but there is a cost. Inbound and outbound require different rhythms. Inbound is reactive and time-sensitive. Outbound is proactive and requires long uninterrupted blocks. When one person handles both, inbound interruptions tend to eat the outbound time, and the outbound pipeline quietly dries up.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an SDR or BDR cost to hire in-house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The base salary for an in-house SDR or BDR typically runs $55,000 to $70,000. Once you add benefits, tools, management time, and ramp, the fully loaded cost is $110,000 to $150,000 per year. New hires also take 3 to 6 months to ramp to full productivity, which is a real cost while the seat produces little pipeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I hire an SDR or BDR or outsource the function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourcing usually makes sense when you need pipeline now and cannot absorb 3 to 6 months of ramp, or when you do not have the management to run the role well. An outsourced team is operational quickly and typically costs 30 to 50 percent less than the fully loaded cost of an equivalent in-house hire. Hiring in-house makes sense when sales require deep product knowledge that is hard to transfer and you have the management to support the seat.',
      },
    },
  ],
}

const roles = [
  {
    title: 'SDR, Sales Development Representative',
    description: 'Works the inbound side. When a lead comes in from marketing, a content download, a demo request, or a form fill, the SDR responds fast, qualifies the interest against defined criteria, and books a meeting for a closer. The lead already has some awareness of your business.',
    bestFor: 'Businesses with a working marketing engine producing inbound leads that need to be qualified and booked quickly.',
  },
  {
    title: 'BDR, Business Development Representative',
    description: 'Works the outbound side. The BDR builds target lists, runs cold outreach across email, phone, and LinkedIn, and creates opportunities from prospects who have never heard of you. This is demand creation, not demand capture. The prospect starts cold.',
    bestFor: 'Businesses that need to create pipeline from a cold market rather than wait for inbound to arrive.',
  },
]

export default function SDRvsBDR() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="SDR vs BDR: What Is the Difference and Which Do You Need?"
        description="SDR vs BDR explained: what each role does, the real difference between inbound and outbound focus, how the terms are used loosely in practice, how the two fit together, and how to decide which your business needs."
        path="/sdr-vs-bdr"
        type="article"
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Sales Fundamentals</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              SDR vs BDR: What Is the Difference<br />
              <span className="text-mc-gold">and Which Do You Need?</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              SDR and BDR are two of the most confused titles in B2B sales. They sit in the same part of the funnel and often do overlapping work, which is why the terms get used loosely. This is what each role actually does, the real difference between them, how they fit together, and how to decide which your business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2 roles', label: 'Top-of-funnel sales development titles' },
            { value: 'Inbound', label: 'The SDR focus in common usage' },
            { value: 'Outbound', label: 'The BDR focus in common usage' },
            { value: '$55k to $70k', label: 'Typical in-house base salary for either' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Definition */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The short answer</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What SDR and BDR actually mean</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            SDR stands for Sales Development Representative. BDR stands for Business Development Representative. Both are top-of-funnel sales roles. Both qualify interest and book meetings for someone else to close. Neither role, in most B2B teams, closes the deal itself.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The most common distinction is direction. The SDR works inbound. They handle leads that come to the business through marketing, content, referrals, or website forms. The BDR works outbound. They build target lists and run cold outreach to prospects who have never heard of the business.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Put simply, the SDR captures demand that already exists. The BDR creates demand from a cold market. That is the clean version of the difference, and it is a useful way to think about the two jobs.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The complication is that the market does not apply these titles consistently. Some companies use SDR for their outbound reps. Some use BDR for their inbound qualifiers. Many use one title for both jobs and give a single person the whole top of the funnel. So the title on the job listing tells you less than the actual responsibilities behind it. When you evaluate a role, a hire, or a provider, look at what the work is, not what it is called.
          </p>
        </div>
      </section>

      {/* The two roles */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The two roles</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">What each role does, side by side</h2>
          <div className="space-y-5">
            {roles.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">Best for:</span>
                      <span className="font-body text-gray-600 text-xs">{m.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The real difference */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The real difference</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why the split matters more than the title</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The reason to separate inbound and outbound is not about job titles. It is that the two jobs run on different rhythms and reward different skills. Treating them as one role is where most teams lose pipeline.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Inbound is reactive and time-sensitive', body: 'A lead that fills out a form expects a fast response. Speed to the first contact is one of the biggest drivers of whether an inbound lead converts. The inbound rep has to be available and quick.' },
              { heading: 'Outbound is proactive and slow to build', body: 'Cold prospecting needs long uninterrupted blocks for research, list building, and sequenced outreach. It compounds over weeks. It does not reward being interrupted every time a form comes in.' },
              { heading: 'Different mindsets', body: 'Inbound work is about qualifying and routing existing interest. Outbound work is about earning attention from people who did not ask for it. The temperament that suits one does not always suit the other.' },
              { heading: 'Different metrics', body: 'Inbound is measured on speed to lead, qualification accuracy, and meetings booked from marketing volume. Outbound is measured on activity, reply rates, and meetings created from a cold list. Mixing them hides which side is actually working.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            When one person carries both jobs, the inbound interruptions almost always win. They feel urgent, they arrive during the day, and they are easy to justify. The outbound blocks get pushed, then skipped, then abandoned. The cold pipeline quietly dries up while everyone stays busy. This is the single most common reason a combined role underperforms.
          </p>
        </div>
      </section>

      {/* How they fit together */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The full funnel</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How the two roles fit together</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            In a mature sales team, both functions feed the same closers. They work two different sources of pipeline into one qualified meeting stream.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'The BDR creates opportunities from cold outreach, qualifies them, and books meetings for closers.',
              'The SDR captures and qualifies inbound interest from marketing, then books those meetings for the same closers.',
              'The Account Executive or business owner runs the sales conversations and closes the deals.',
              'Both top-of-funnel roles hand off only meetings that meet defined qualification criteria, so the closer spends time on real opportunities.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                  <span className="text-mc-gold text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-gray-700 text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <p className="font-body text-gray-700 leading-relaxed">
            Most businesses do not start with both. They start with one source of pipeline and add the other when the first is working. The question is which one to build first, and that depends entirely on where your leads come from today.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Not sure whether you need inbound, outbound, or both?"
        body="One call is enough to work out where your pipeline should come from and which function to build first."
      />

      {/* Which do you need */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The decision</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Which one does your business need?</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The decision is simpler than the titles suggest. Answer four questions honestly.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Do you already generate inbound leads from marketing or content?', note: 'If yes and they are not being worked fast, you need the SDR function. If no, inbound is not your first problem.' },
              { q: 'Is your pipeline too thin or too dependent on referrals and word of mouth?', note: 'If yes, you need outbound to create demand, which is the BDR function.' },
              { q: 'Are inbound leads slipping because nobody responds fast enough?', note: 'If yes, a dedicated inbound role usually pays for itself in recovered leads.' },
              { q: 'Do you have the management time to run and coach the role well?', note: 'If no, an outsourced function may be a faster and lower-risk way to get the same output.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              For most early-stage B2B companies, outbound comes first. There is rarely enough inbound in the early days to justify a dedicated inbound seat, and the business needs pipeline it can control rather than pipeline it has to wait for. The SDR function becomes worth building once marketing is producing enough inbound to keep a person busy.
            </p>
          </div>
        </div>
      </section>

      {/* Hire vs outsource */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Hire or outsource</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Should you hire the role or outsource it?</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Once you know which function you need, the next question is whether to build it in-house or bring in an external team. The economics are worth understanding before you decide.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The base salary for an in-house SDR or BDR typically runs $55,000 to $70,000. Once you add benefits, tools, management time, and ramp, the fully loaded cost of the seat is $110,000 to $150,000 per year. On top of the cost, a new hire takes 3 to 6 months to ramp to full productivity, which is a stretch of time where you are paying for the seat while it produces little pipeline.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            An outsourced team changes both variables. It is operational quickly rather than after months of ramp, and it typically costs 30 to 50 percent less than the fully loaded cost of an equivalent in-house hire. That makes it a strong fit when you need pipeline now, when you do not have the management to run the role well, or when you want to test outbound before committing to a permanent seat.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Hiring in-house still makes sense in specific cases. If sales require deep product knowledge that is hard to transfer, or you already have the management structure to coach and hold the seat accountable, an internal hire can be the right call. The point is to decide on the economics and the readiness, not on the assumption that in-house is the default.
          </p>
        </div>
      </section>

      {/* What Millionaire Contracts offers */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How Millionaire Contracts runs the top of your funnel</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Millionaire Contracts operates as an outsourced sales development function. Whether the gap is inbound qualification, outbound demand creation, or both, the team runs the top of the funnel as an integrated process and hands your closers meetings that meet defined criteria.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The 65 percent average meeting success rate is not a product of volume. It comes from qualification discipline: only booking meetings that meet defined entry criteria, and standing behind the quality of what gets booked. That is how the team has helped 20+ companies scale their pipeline.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Inbound and outbound', body: 'One team can cover fast inbound qualification, cold outbound demand creation, or both, so you do not have to choose a single function and hope it covers the gap.' },
              { heading: 'ICP-led targeting', body: 'Every engagement starts with building the ideal customer profile from your best existing clients. Outreach does not start until the targeting is precise.' },
              { heading: 'Full accountability', body: 'No-show replacement. Weekly reporting on leading metrics. Performance standards built into the engagement structure from day one.' },
            ].map((c) => (
              <div key={c.heading} className="bg-mc-dark rounded-xl p-6 border border-white/10">
                <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
                <h3 className="font-headline font-bold text-white mb-2">{c.heading}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Go deeper</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/what-is-an-sdr', label: 'What Is an SDR?', desc: 'The sales development role explained in full.' },
              { to: '/how-much-does-an-sdr-cost', label: 'How Much Does an SDR Cost?', desc: 'The true cost of the seat, in-house and outsourced.' },
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'How qualified meetings get booked for your closers.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full number breakdown for both options.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The forms it takes and who it works for.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable pipeline.' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block bg-white rounded-xl p-5 border border-gray-100 hover:border-mc-gold/40 transition-colors group"
              >
                <p className="font-headline font-bold text-mc-teal text-sm mb-1 group-hover:text-mc-gold transition-colors">{link.label}</p>
                <p className="font-body text-gray-500 text-xs">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-10">Common questions</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((q) => (
              <div key={q.name} className="border-b border-gray-100 pb-6">
                <h3 className="font-headline font-bold text-mc-teal mb-3">{q.name}</h3>
                <p className="font-body text-gray-700 leading-relaxed text-sm">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mc-gold py-16 px-6 text-center">
        <h2 className="font-headline text-4xl font-black text-white mb-4 leading-tight">
          Work out which sales role<br className="hidden md:block" /> your business needs
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether your pipeline gap is inbound, outbound, or both, and whether hiring or outsourcing is the faster way to fill it.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Book a Free Strategy Call
          </Link>
          <Link to="/how-it-works" className="inline-block border-2 border-white text-white font-headline font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
            See How It Works
          </Link>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  )
}
