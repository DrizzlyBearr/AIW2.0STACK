import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is an SDR? The Sales Development Rep Role Explained',
  description: 'A clear definition of the sales development representative role: what an SDR does day to day, how they differ from a closer, where they fit in a pipeline, what they cost, and when to hire versus outsource.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/what-is-an-sdr',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an SDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An SDR is a sales development representative. This is the person at the top of the sales pipeline who finds potential customers, reaches out to them, qualifies whether they are a fit, and books meetings for the closers. An SDR does not close deals. Their job is to turn a target list into a steady flow of qualified conversations for the rest of the sales team.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an SDR and an AE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An SDR opens conversations and an account executive, or AE, closes them. The SDR handles prospecting, first contact, qualification, and booking the meeting. The AE takes the qualified meeting, runs the sales process, handles objections, and signs the deal. Splitting the two roles lets each person focus on what they are best at, which usually produces more revenue than asking one person to do both.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does an SDR do all day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical SDR day is built around outbound activity. They research target accounts, build and clean prospect lists, send personalised emails, make calls, follow up on LinkedIn, and log every touch in the CRM. When a prospect responds and meets the qualification criteria, the SDR books a meeting and hands it to a closer. The role is repetitive by design, because consistency is what produces a predictable pipeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'What skills does a good SDR need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A strong SDR is organised, resilient, and a clear writer. They can handle rejection without losing momentum, personalise outreach at scale without sounding like a template, ask qualifying questions that surface real intent, and stay disciplined about follow up. Product knowledge matters, but the core skill is running a consistent outreach process every day and improving it as data comes in.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an SDR cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An in-house SDR base salary typically runs $55,000 to $70,000 per year. Once you add commission, benefits, tools, management time, and onboarding, the fully loaded cost of an in-house SDR reaches $110,000 to $150,000 per year. You also carry the ramp period of 3 to 6 months before that person is producing consistently. Outsourced SDR teams usually cost 30 to 50 percent less than the fully loaded in-house figure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I hire an SDR or outsource the role?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hire in-house if you already have a proven outbound process, a manager who can coach the role, and the budget to absorb a slow ramp. Outsource if you need pipeline sooner, want to avoid hiring and ramp risk, or do not yet have the internal process and management to make a new SDR successful. Many businesses outsource first to build a working system, then decide later whether to bring it in-house.',
      },
    },
  ],
}

const dayInLife = [
  {
    title: 'Research and list building',
    description: 'The SDR identifies accounts that match the ideal customer profile, finds the right contacts inside them, and cleans the data so outreach lands on real people. Bad data at this step wastes every step that follows.',
    bestFor: 'Turning a broad market into a specific, workable target list.',
  },
  {
    title: 'Outreach across channels',
    description: 'Personalised email, phone calls, and LinkedIn messages, sequenced so a prospect hears from the SDR more than once in a coordinated way. The goal is a reply, not a sale.',
    bestFor: 'Starting conversations with people who did not ask to be contacted.',
  },
  {
    title: 'Qualification',
    description: 'When a prospect responds, the SDR asks questions to confirm fit: the right role, a real problem, budget in range, and timing that makes sense. Only prospects that clear these checks move forward.',
    bestFor: 'Protecting closers from meetings that were never going to convert.',
  },
  {
    title: 'Booking and handoff',
    description: 'The SDR books the meeting, briefs the closer on what was learned, and logs everything in the CRM. A clean handoff means the closer walks into the call already understanding the prospect.',
    bestFor: 'Passing a warm, qualified conversation to the person who closes.',
  },
]

export default function WhatIsAnSDR() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="What Is an SDR? The Sales Development Rep Role Explained"
        description="A clear definition of the sales development representative role: what an SDR does day to day, how they differ from a closer, where they fit in a pipeline, what they cost, and when to hire versus outsource."
        path="/what-is-an-sdr"
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
              What Is an SDR?<br />
              <span className="text-mc-gold">The Sales Development Rep Role Explained</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              The SDR sits at the top of the sales pipeline. They find potential customers, start the conversation, qualify the fit, and book meetings for the people who close. This is what the role is, what an SDR does day to day, how it differs from a closer, what it costs, and when to hire versus outsource.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '$55k to $70k', label: 'Typical in-house SDR base salary' },
            { value: '$110k to $150k', label: 'Fully loaded in-house SDR per year' },
            { value: '3 to 6 months', label: 'Typical ramp before consistent output' },
            { value: '30 to 50%', label: 'Cost reduction with outsourced SDRs' },
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
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The definition</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What an SDR actually is</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            SDR stands for sales development representative. It is the role at the front of the sales pipeline. The SDR finds potential customers, reaches out to them, works out whether they are a genuine fit, and books qualified meetings for the closers. An SDR does not sign contracts. Their entire job is to create a steady flow of qualified conversations for the rest of the sales team.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The role exists because prospecting and closing are different jobs. Finding new buyers and starting cold conversations takes patience, consistency, and a thick skin. Closing takes deal instinct and the ability to hold a room. Most people are better at one than the other. Splitting the two lets each person focus, which usually produces more revenue than asking a single person to do everything.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            You will see the role written a few ways. SDR and BDR, business development representative, are often used to mean the same thing. Some teams use SDR for people who work inbound leads and BDR for people who run outbound to cold accounts. The titles matter less than the function. In both cases, the person opens conversations and hands qualified ones forward.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            What an SDR is not: they are not a closer, they are not a marketer, and they are not a support function waiting for the phone to ring. The SDR is an active, outbound role. Their output is measured in qualified meetings, not in volume of activity for its own sake.
          </p>
        </div>
      </section>

      {/* A day in the life */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">What an SDR does day to day</h2>
          <div className="space-y-5">
            {dayInLife.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">The point:</span>
                      <span className="font-body text-gray-600 text-xs">{m.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed text-base mt-8">
            The work is repetitive by design. A good SDR runs the same disciplined process every day, then reads the results and adjusts the message, the targeting, or the sequence. Consistency is the whole point. A pipeline built on a steady daily habit is predictable. A pipeline built on bursts of effort is not.
          </p>
        </div>
      </section>

      {/* SDR vs closer */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The distinction</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">SDR versus closer, or account executive</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The clearest way to understand an SDR is to compare the role to the account executive, often called the AE or the closer. The SDR opens. The AE closes. Each owns a different part of the same pipeline, and the handoff between them is where a lot of revenue is won or lost.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'The SDR opens', body: 'Prospecting, first contact, qualification, and booking. The SDR turns a cold list into warm, qualified meetings. Success is measured in the number and quality of meetings created.' },
              { heading: 'The AE closes', body: 'The account executive takes the qualified meeting, runs the sales process, handles objections, builds the proposal, and signs the deal. Success is measured in revenue closed.' },
              { heading: 'Different skill sets', body: 'The SDR needs discipline, resilience, and clear writing. The AE needs deal instinct and negotiation. Asking one person to be excellent at both is possible but rare.' },
              { heading: 'The handoff is critical', body: 'A qualified meeting with a clean brief helps the AE walk in prepared. A vague or unqualified handoff wastes the AE\'s time and sours the prospect. The handoff makes or breaks the model.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Smaller businesses often start with one person doing both jobs. That works until the pipeline needs to grow. At that point, the prospecting gets neglected whenever there are deals to close, and the pipeline dries up right after a good month. Splitting the SDR role out is usually the first fix, because it protects the top of the pipeline from being starved.
          </p>
        </div>
      </section>

      {/* Where the SDR fits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The pipeline</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Where the SDR fits in the pipeline</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The sales pipeline is a sequence, and the SDR owns the front of it. Understanding the flow makes the role easier to place.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Targeting: the ideal customer profile is defined, and the SDR builds a list of accounts and contacts that match it.',
              'Outreach: the SDR runs coordinated email, phone, and LinkedIn sequences to start conversations.',
              'Qualification: the SDR confirms fit, need, budget range, and timing before anyone moves forward.',
              'Meeting booked: a qualified conversation is scheduled and briefed to the closer.',
              'Close: the account executive takes it from the meeting through to a signed deal.',
              'Handback: closed and lost outcomes feed back into targeting so the next round is sharper.',
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
            The SDR owns steps one through four. When that part of the pipeline is healthy, the closers always have qualified meetings to work, and revenue becomes a function of throughput rather than luck. When the SDR function is missing or weak, the whole pipeline runs on referrals and inbound, which are hard to control and easy to run out of.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Need a steady flow of qualified meetings without hiring?"
        body="One call is enough to work out whether a dedicated SDR function is the right move for where you are, with no pitch if it is not."
      />

      {/* What a good SDR costs */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The cost</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What a good SDR costs</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The headline salary is only part of the picture. An in-house SDR base salary usually runs $55,000 to $70,000 per year. That number alone understates the real cost, because a base salary is not what it takes to run the role.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Once you add commission, benefits, payroll taxes, software, data and list tools, a laptop, management time, and the cost of onboarding, the fully loaded cost of an in-house SDR reaches $110,000 to $150,000 per year. That is the honest figure to plan around, not the base salary.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            There is also a time cost. A new SDR does not produce from day one. Ramp time typically runs 3 to 6 months before a rep is booking meetings consistently. During that window you are paying full cost for partial output. If the hire does not work out, you absorb that ramp cost again with the next person. This is why the cost of an SDR is best understood as a fully loaded, multi-month commitment rather than a monthly salary line.
          </p>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              An outsourced SDR team usually costs 30 to 50 percent less than the fully loaded cost of an equivalent in-house hire, and it is operational far sooner because there is no hire-and-ramp period to sit through. That trade is the core of the hire-versus-outsource decision below.
            </p>
          </div>
        </div>
      </section>

      {/* Hire vs outsource */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The decision</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">When to hire an SDR versus outsource the role</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            There is no universally right answer. The right call depends on what you already have in place. Work through these four questions honestly.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Do you already have a proven outbound process?', note: 'If yes, a new hire has a system to plug into. If no, an in-house SDR has to invent the process while learning the job, which is where most SDR hires struggle.' },
              { q: 'Is there a manager who can coach the role?', note: 'SDRs need coaching and feedback to improve. If nobody owns that, the rep is left to figure it out alone, and ramp gets longer and less certain.' },
              { q: 'Can you absorb a 3 to 6 month ramp?', note: 'If you need pipeline sooner than that, hiring in-house is the slower path. An outsourced team is operational far faster because the process already exists.' },
              { q: 'Do you want to carry the hiring risk?', note: 'A wrong hire costs the salary, the ramp, and the lost pipeline time. Outsourcing shifts that risk off your balance sheet.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            The pattern is straightforward. Hire in-house when you have a proven process, a manager to run it, and the budget and patience to absorb a slow ramp. Outsource when you need pipeline sooner, want to skip the hiring and ramp risk, or do not yet have the internal process and management to make a new SDR successful. Many businesses outsource first to build a working system with a partner, then decide later whether to bring it in-house once the process is proven.
          </p>
        </div>
      </section>

      {/* What Millionaire Contracts offers */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How Millionaire Contracts runs the SDR function for you</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Millionaire Contracts operates as your outsourced SDR function, not a list of leads handed over with no context. The team handles the whole front of the pipeline: targeting, outreach, qualification, and meeting booking, run as one process and reported on with leading indicators so you can see the health of the pipeline before revenue shows up.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            We have scaled 20+ companies this way. The 65 percent average meeting success rate is not the result of high volume. It comes from qualification discipline: only booking meetings that meet defined entry criteria, and standing behind the quality of what gets handed to your closers.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'Every engagement starts by building the ideal customer profile from your best existing clients. Outreach does not start until the targeting is precise.' },
              { heading: 'Multi-channel sequences', body: 'Email, LinkedIn, and phone coordinated by prospect behaviour. Signal-driven sequencing that sharpens as data comes in, not spray and pray.' },
              { heading: 'Qualified handoffs', body: 'Only meetings that clear the entry criteria reach your closers, each one briefed so the closer walks in prepared. No-show replacement included.' },
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
              { to: '/how-much-does-an-sdr-cost', label: 'How Much Does an SDR Cost?', desc: 'The full number behind an SDR, in-house and outsourced.' },
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'What the service covers and how it fills a pipeline.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means, the forms it takes, and who it fits.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full number breakdown for both options.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'A diagnostic for knowing when to make the move.' },
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
          Get an SDR function<br className="hidden md:block" /> without the hire
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether a dedicated SDR function is right for where you are and what a steady flow of qualified meetings would look like in practice.
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
