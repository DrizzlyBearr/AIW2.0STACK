import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lead Qualification: A Practical Framework That Actually Works',
  description: 'Lead qualification explained plainly: why it is the highest-leverage step in sales, how BANT, MEDDIC, and CHAMP compare, and a simple scoring approach that puts your effort on winnable deals.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/lead-qualification-framework',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is lead qualification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lead qualification is the process of deciding which prospects are worth your time and which are not. It sorts your pipeline by fit and readiness so your selling effort lands on deals you can actually win. A qualified lead matches your ideal customer profile, has a real need, gives you access to the decision maker, and can act within a workable timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between BANT, MEDDIC, and CHAMP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BANT checks Budget, Authority, Need, and Timeline and is the simplest of the three. MEDDIC is more detailed and built for complex, enterprise deals, covering Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, and Champion. CHAMP leads with Challenges before money, which suits businesses that sell a solution to a problem rather than a fixed budget line. The right one depends on your deal size and sales cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is lead qualification the most important step in sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because time is the one resource a sales team cannot get back. Every hour spent on a deal that was never going to close is an hour not spent on one that could. Qualification is the step that decides where that time goes. Get it right and every other part of the process gets easier, because the pipeline is full of deals that fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a disqualifier in lead qualification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A disqualifier is a condition that removes a lead from your pipeline regardless of how promising it looks on other measures. Common examples include being far outside your target size, no access to a decision maker, no active need, or a timeline measured in years. Naming your disqualifiers in advance stops you from talking yourself into deals that will not close.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you score a lead in practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A practical approach scores each lead on a small set of factors that predict a win: revenue fit, access to the decision maker, and timeline. Rate each one high, medium, or low, then apply any hard disqualifiers. A lead that scores high across the board and trips no disqualifier is where your effort belongs. This keeps qualification fast enough to use on every lead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you over-qualify leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Qualification that is too strict throws away deals that would have closed with a little patience. The goal is not to shrink the pipeline. It is to spend your effort where it pays. A good framework is a filter, not a wall. It ranks leads by how winnable they are so you work the best ones first, rather than deleting everything that is not perfect on day one.',
      },
    },
  ],
}

const frameworks = [
  {
    title: 'BANT',
    description: 'Budget, Authority, Need, Timeline. The oldest and simplest of the three. It asks whether the prospect has money, the power to spend it, a reason to, and a date to do it by. Fast to apply and easy to teach.',
    bestFor: 'Shorter cycles and straightforward offers where budget is a clear line item.',
    tradeoff: 'Leads with budget last. If the prospect has a real problem but has not scoped a budget yet, BANT can disqualify a good deal too early.',
  },
  {
    title: 'MEDDIC',
    description: 'Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion. Built for complex deals with many stakeholders. It maps how the buying decision actually gets made inside the organisation.',
    bestFor: 'Large, multi-stakeholder deals with long cycles and formal buying processes.',
    tradeoff: 'Heavy. Applying it to every small lead wastes time. It earns its detail only when the deal is big enough to justify the work.',
  },
  {
    title: 'CHAMP',
    description: 'Challenges, Authority, Money, Prioritisation. A reorder of BANT that leads with the prospect\'s problem instead of their budget. It qualifies on whether there is a challenge worth solving first.',
    bestFor: 'Solution selling where the value is tied to a problem, not a fixed budget line.',
    tradeoff: 'Softer on budget. You can invest in a compelling challenge and reach the money question only to find nothing is there.',
  },
]

export default function LeadQualificationFramework() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Lead Qualification: A Practical Framework That Actually Works"
        description="Lead qualification explained plainly: why it is the highest-leverage step in sales, how BANT, MEDDIC, and CHAMP compare, and a simple scoring approach that puts your effort on winnable deals."
        path="/lead-qualification-framework"
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
            <span className="section-label mb-4 block">Sales Strategy</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Lead Qualification<br />
              <span className="text-mc-gold">A Practical Framework That Actually Works</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most sales teams do not have a lead problem. They have a qualification problem. The deals are there, but the effort is spread across all of them instead of the ones that can be won. This is how to fix that, plainly.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '3 frameworks', label: 'BANT, MEDDIC, and CHAMP compared' },
            { value: '4 factors', label: 'A simple score any rep can apply' },
            { value: 'Highest leverage', label: 'The step that makes every other one easier' },
            { value: '65%', label: 'Our average meeting success rate, built on qualification' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why it matters */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The case for it</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why qualification is the highest-leverage step</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Time is the one thing a sales team cannot buy more of. Every hour spent on a deal that was never going to close is an hour taken from one that could have. Qualification is the step that decides where that time goes, which makes it the point in the process with the most impact for the least effort.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Get it wrong and the damage compounds quietly. Reps chase prospects who were never a fit. Pipelines look full but forecast poorly. Deals sit in limbo for months because nobody was willing to call them dead. The team stays busy and the revenue stays flat.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Get it right and everything downstream gets easier. The demo lands because the prospect actually has the problem. The proposal gets read because the decision maker is in the room. The close happens on time because the timeline was real from the start. You are not selling harder. You are selling to people who were going to buy.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            This is why qualification, not closing, is where sharp teams put their attention. Closing skill matters, but no amount of it saves a deal that should never have been in the pipeline. The best conversation in the world with the wrong prospect still ends in a no.
          </p>
        </div>
      </section>

      {/* The three frameworks */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The frameworks</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-4">BANT, MEDDIC, and CHAMP, explained plainly</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            There are three qualification frameworks you will hear about most. None of them is right or wrong. Each was built for a different kind of deal, and the mistake most teams make is picking one out of habit instead of matching it to what they actually sell.
          </p>
          <div className="space-y-5">
            {frameworks.map((f, i) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{f.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{f.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5 mb-3">
                      <span className="text-mc-gold text-xs font-bold">Best for:</span>
                      <span className="font-body text-gray-600 text-xs">{f.bestFor}</span>
                    </div>
                    <p className="font-body text-gray-500 text-xs leading-relaxed"><span className="font-bold text-gray-600">The tradeoff:</span> {f.tradeoff}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A simple practical score */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The practical version</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">A simple score you can use on every lead</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The frameworks above are useful for understanding what to look for. But in day-to-day selling you need something faster: a score you can apply to every lead in under a minute. Rate each lead on three factors, then apply your disqualifiers. That is the whole system.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Revenue fit', body: 'Is this prospect the size and type you sell to well? Match them against your best existing clients, not your dream client. High, medium, or low.' },
              { heading: 'Decision-maker access', body: 'Can you get in front of the person who signs? A warm conversation with someone who cannot decide is a low score, however friendly it is.' },
              { heading: 'Timeline', body: 'Is there a reason to act inside a workable window? A real trigger event scores high. Someday scores low, no matter how large the deal.' },
              { heading: 'Explicit disqualifiers', body: 'A short, named list of conditions that remove a lead outright: no budget path, no need, no authority, or a timeline measured in years. Decide these before you feel the pull of a deal.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The disqualifiers are the part most teams skip, and they are the part that matters most. A lead can look strong on fit and access and still be dead because there is no active need. Naming your disqualifiers in advance means you make the hard call with a clear head, before you have invested three calls and talked yourself into the deal.
          </p>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              A lead that scores high on revenue fit, high on decision-maker access, high on timeline, and trips no disqualifier is where your effort belongs today. Everything else waits, gets nurtured, or gets let go. The score is not there to shrink the pipeline. It is there to rank it, so the best deals get worked first.
            </p>
          </div>
        </div>
      </section>

      <ArticleCTA
        heading="Want a qualification standard your pipeline runs on?"
        body="One call is enough to map your ideal customer and the criteria that separate a real deal from a distraction."
      />

      {/* How to apply it */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Putting it to work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How to make effort land on winnable deals</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A framework is worth nothing if it lives in a document nobody opens. The point of qualification is to change what you do next, so the process has to be built into how the team works, not bolted on as an afterthought.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Qualify before you invest, not after.', note: 'Run the score at the first real conversation. Qualifying after you have built a proposal is just confirming a decision you already made emotionally.' },
              { q: 'Write your disqualifiers down and agree them as a team.', note: 'A disqualifier that lives only in one rep\'s head is not a standard. Put the list where everyone can see it and hold the line together.' },
              { q: 'Rank the pipeline, then work it top down.', note: 'Sort by score and spend your best hours on the highest-ranked deals. Lower scores get lighter touch until something changes.' },
              { q: 'Requalify when the facts change.', note: 'A lead\'s score is a snapshot, not a verdict. A new trigger event or a change in the buying group can move a medium into a high. Revisit it.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Done consistently, this changes the shape of the team's week. Instead of a long list of maybes worked at random, you have a ranked pipeline and a clear answer to the only question that matters each morning: what is the best use of the next hour. That is what qualification buys you.
          </p>
        </div>
      </section>

      {/* How Millionaire Contracts uses it */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How qualification drives our results</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Millionaire Contracts books meetings for B2B businesses, and the quality of those meetings comes from qualification, not volume. We only book a meeting when it meets defined entry criteria: the prospect fits the ideal customer profile, there is real access to the decision maker, and there is a reason to talk now. That discipline is why the meetings convert.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The 65 percent average meeting success rate across the 20+ companies we have scaled is a direct result of this. It is not a product of sending more messages. It is a product of saying no to the wrong meetings so the ones that get booked are worth your time. We stand behind the quality of what gets booked, because the criteria are set before the outreach starts.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led criteria', body: 'Every engagement starts by building the ideal customer profile from your best existing clients. The qualification bar is set from that, not from a generic template.' },
              { heading: 'Entry criteria on every meeting', body: 'A meeting only gets booked when it clears a defined standard for fit, access, and timing. No filling the calendar for the sake of a number.' },
              { heading: 'Accountability for quality', body: 'No-show replacement and weekly reporting on the metrics that predict outcomes, not vanity counts. The standard is built into the engagement.' },
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
              { to: '/how-to-qualify-leads', label: 'How to Qualify Leads', desc: 'The step-by-step version of the qualification call.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Where qualification fits in a repeatable pipeline.' },
              { to: '/how-to-write-a-cold-email', label: 'How to Write a Cold Email That Gets Replies', desc: 'Getting the right prospects into the pipeline first.' },
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'How qualified meetings get booked at scale.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means and whether it fits your business.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'Our process from ideal customer profile to booked meeting.' },
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
          Put your effort<br className="hidden md:block" /> on the deals you can win
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to map your ideal customer and set the qualification standard your pipeline runs on, so every meeting you take is worth your time.
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
