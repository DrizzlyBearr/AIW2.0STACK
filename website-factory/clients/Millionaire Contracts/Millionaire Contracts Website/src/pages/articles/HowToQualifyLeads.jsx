import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Qualify Leads: A Step by Step Process',
  description: 'A practical process for qualifying leads: the questions to ask, the signals to read, how to disqualify fast and kindly, when to advance a lead, and how qualification protects rep time.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/how-to-qualify-leads',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean to qualify a lead?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qualifying a lead means confirming, through direct questions and observed signals, that a prospect has a real problem you solve, the authority or access to buy, the budget range to make it viable, and a reason to act now. It is a decision about where a lead goes next, not a score for its own sake. A qualified lead advances. An unqualified one gets disqualified or parked.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should I ask to qualify a lead?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask what problem prompted them to take the call, what it is costing them now, what they have tried already, who else is involved in the decision, what budget range they expect, and what happens if they do nothing. These questions surface need, authority, budget, and urgency in the flow of a normal conversation, without turning the call into an interrogation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I disqualify a lead without damaging the relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Be direct and be quick. Tell the prospect plainly that based on what they have described, this is not the right fit right now, and say why in one sentence. Offer a useful pointer if you have one. Prospects respect a clear no far more than a slow drift into silence, and a clean disqualification keeps the door open for later.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I advance a lead versus park it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Advance a lead when the need, authority, budget, and timing are all present and the prospect is willing to take the next step. Park a lead when the fit is real but the timing is not, for example a live problem with no budget until the next cycle. A parked lead is not a dead lead. It is a scheduled follow-up with a clear reason to reconnect.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is qualifying leads different from a qualification framework?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A framework such as BANT gives you the categories to check. Qualifying leads is the act of working through those categories in a real conversation and a live pipeline: what to ask, how to read the answers, and what to do next. The framework is the map. Qualifying is the driving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does qualification protect sales rep time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every hour a rep spends on a lead that was never going to buy is an hour taken from a lead that would. Disciplined qualification removes the wrong conversations early, so closing effort concentrates on prospects who can and will move. This is the same discipline behind our 65 percent average meeting success rate: only advancing what meets defined entry criteria.',
      },
    },
  ],
}

const questions = [
  {
    title: 'What prompted you to take this call?',
    description: 'This surfaces the real trigger. A prospect who can name a specific event has an active problem. A vague answer usually means there is no urgency yet, which is useful to know in the first two minutes.',
    reads: 'Confirms there is a live problem, not idle curiosity.',
  },
  {
    title: 'What is this costing you now?',
    description: 'Quantifying the pain in time, money, or missed revenue tells you whether the problem is worth solving. If the prospect cannot describe a cost, the problem is not painful enough to fund a solution.',
    reads: 'Confirms the problem is expensive enough to act on.',
  },
  {
    title: 'What have you already tried?',
    description: 'Past attempts tell you how serious they are and what has failed. It also tells you where your solution has to be different, and whether they have realistic expectations about what a fix involves.',
    reads: 'Confirms commitment and sets expectations.',
  },
  {
    title: 'Who else is involved in this decision?',
    description: 'This finds the real decision structure early. If the person on the call cannot sign or influence the signer, you need to know before you invest a full cycle selling to someone who cannot say yes.',
    reads: 'Confirms authority or maps the path to it.',
  },
  {
    title: 'What happens if you do nothing?',
    description: 'This is the clearest test of urgency. If the honest answer is nothing much, the deal will stall no matter how good the fit looks. If doing nothing has a cost that grows, the timing is real.',
    reads: 'Confirms there is a reason to act now.',
  },
]

export default function HowToQualifyLeads() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How to Qualify Leads: A Step by Step Process"
        description="A practical process for qualifying leads: the questions to ask, the signals to read, how to disqualify fast and kindly, when to advance a lead, and how qualification protects rep time."
        path="/how-to-qualify-leads"
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
            <span className="section-label mb-4 block">Sales Process</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              How to Qualify Leads<br />
              <span className="text-mc-gold">A Step by Step Process</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Qualification is a decision, not a score. It is the work of deciding, in a real conversation and in a live pipeline, whether a lead moves forward, gets parked, or gets a clean no. This is the process: the questions to ask, the signals to read, and what to do with the answers.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '5 questions', label: 'Cover need, authority, budget, and timing' },
            { value: '65%', label: 'Our average meeting success rate' },
            { value: 'Early', label: 'When a bad fit should be disqualified' },
            { value: '3 outcomes', label: 'Advance, park, or disqualify' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What qualifying means */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The starting point</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Qualifying is a decision about what happens next</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Most reps treat qualification as paperwork. They collect answers, drop them into a field, and move on. That is not qualifying. Qualifying a lead means deciding, based on what the prospect tells you and what you observe, whether this conversation should continue and how. The output is a decision: advance, park, or disqualify.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A qualified lead has four things at once. A real problem you solve. The authority or access to buy. A budget range that makes the deal viable. And a reason to act inside a timeframe you can work with. Miss one and the deal usually stalls later, after both sides have spent time they will not get back.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The point of doing this well is speed. The faster you can tell a good fit from a bad one, the more of your day goes to prospects who can actually move. Everything below is built to make that call quickly and fairly, in the flow of a normal conversation, without turning the call into an interrogation.
          </p>
        </div>
      </section>

      {/* The questions to ask */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The questions</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">Five questions that qualify a lead in conversation</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            These questions do the work of a framework without sounding like one. Ask them in order, listen to the answer, and read what the answer tells you. You are not filling in fields. You are deciding what to do next.
          </p>
          <div className="space-y-5">
            {questions.map((q, i) => (
              <div key={q.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{q.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{q.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">What it reads:</span>
                      <span className="font-body text-gray-600 text-xs">{q.reads}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The signals to read */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The signals</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The signals to read behind the answers</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The words a prospect says are only half the information. How they answer tells you as much as what they answer. These are the signals to weigh alongside the questions.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { heading: 'Specific over vague', body: 'A prospect who gives concrete numbers, names, and dates is closer to buying than one who speaks in generalities. Specificity is a sign the problem is real and top of mind.' },
              { heading: 'They ask about the how', body: 'Questions about implementation, timelines, and onboarding signal a buyer imagining the solution in place. That is buying behaviour. Questions only about price with no interest in fit is not.' },
              { heading: 'Willingness to book the next step', body: 'A qualified prospect will commit to a defined next action. Reluctance to schedule anything concrete, even when interested, usually means a blocker they have not named yet.' },
              { heading: 'The problem has an owner', body: 'When the person on the call owns the outcome, they move. When they are gathering information for someone else with no urgency of their own, the deal will move at that other person’s pace, if at all.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">How to disqualify fast and kindly</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The hardest part of qualification is saying no. Reps avoid it because it feels like losing a deal. It is the opposite. A slow no wastes both sides. A fast, respectful no frees your time and keeps the relationship intact for later.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Decide early. If two or three questions in the fit is clearly wrong, do not keep going out of politeness.',
              'Say it plainly. Tell them this is not the right fit right now, and give the one reason why in a single sentence.',
              'Be useful if you can. Point them to a better fit, a resource, or a timeframe to reconnect. A helpful no is remembered.',
              'Leave the door open. Make clear this is about timing or fit today, not a closed door forever.',
              'Log why. Record the disqualification reason so the same lead is not reworked from scratch in six months.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center mt-0.5">
                  <span className="text-gray-500 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-gray-700 text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <p className="font-body text-gray-700 leading-relaxed">
            Prospects respect a clear no far more than a slow drift into unanswered follow-ups. The rep who disqualifies well is trusted, and trust is what brings the prospect back when the timing changes.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want a qualification process built into your pipeline?"
        body="One call is enough to see where leads are slipping through and what a disciplined process would change."
      />

      {/* When to advance vs park */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The decision</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">When to advance a lead and when to park it</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Every qualified conversation ends in one of three places. Knowing which is the whole point of the process. Here is how to tell them apart.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Advance the lead', note: 'Need, authority, budget, and timing are all present, and the prospect will commit to a defined next step. Move it forward now while the problem is live.' },
              { q: 'Park the lead', note: 'The fit is real but one factor is missing, usually timing or budget cycle. Set a follow-up date with a specific reason to reconnect. A parked lead is a scheduled return, not a dead one.' },
              { q: 'Disqualify the lead', note: 'The problem is not painful enough, there is no path to a decision, or the economics do not work. Say so, be useful, and free the time for a better fit.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              The mistake most teams make is having only two outcomes: advance or forget. The parked lane is where a large share of future revenue lives. Track it, schedule it, and work it on time.
            </p>
          </div>
        </div>
      </section>

      {/* How qualification protects rep time */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Why it matters</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How qualification protects rep time</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Every hour a rep spends on a lead that was never going to buy is an hour taken from one that would. Poor qualification does not just lose the bad deal. It quietly starves the good ones of attention. Time is the scarcest resource in any sales team, and qualification is how you protect it.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            This is the discipline behind our 65 percent average meeting success rate. We only advance what meets defined entry criteria, and we stand behind the quality of what gets booked. Across the 20 plus companies we have scaled, the pattern holds: teams that qualify hard close a higher share of what they pursue, because they pursue less of the wrong thing. It is also why an outsourced function can run at 30 to 50 percent less than the fully loaded cost of an in-house SDR, which sits at $110,000 to $150,000 per year. The saving comes from concentrating effort, not spreading it thin.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Defined entry criteria', body: 'A lead only advances when it meets criteria set in advance. No advancing on hope. The bar is the same for every prospect, every day.' },
              { heading: 'Fast disqualification', body: 'The wrong conversations end early, not after three cycles. That returns hours to the leads that can actually close.' },
              { heading: 'A worked parked lane', body: 'Real fits with wrong timing are scheduled and tracked, not lost. Future revenue is managed, not left to chance.' },
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
              { to: '/lead-qualification-framework', label: 'The Lead Qualification Framework Explained', desc: 'The categories behind every qualified lead.' },
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'How qualified meetings get booked at scale.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable pipeline.' },
              { to: '/how-to-write-a-cold-email', label: 'How to Write a Cold Email That Gets Replies', desc: 'The outreach that fills the pipeline you qualify.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means, who it fits, and how to decide.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'The way we run an outsourced sales function.' },
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
          Put a real qualification<br className="hidden md:block" /> process behind your pipeline
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to see where leads are being lost and what a disciplined qualification process would change for your team.
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
