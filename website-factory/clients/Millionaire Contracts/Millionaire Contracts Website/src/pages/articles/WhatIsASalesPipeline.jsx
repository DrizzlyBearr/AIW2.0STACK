import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is a Sales Pipeline? Stages Explained',
  description: 'A sales pipeline explained: what it is, the typical stages, how it differs from a forecast, what a healthy pipeline looks like, the difference between leading and lagging indicators, and the common mistakes.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/what-is-a-sales-pipeline',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a sales pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sales pipeline is a visual representation of where every active deal sits in your sales process. It breaks the journey from first contact to closed deal into defined stages, and it shows how many opportunities are in each stage at any given moment. The pipeline is a management tool. It tells you what work is in progress, where deals are stuck, and what revenue is realistically in reach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the stages of a sales pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical B2B sales pipeline has five stages: prospecting, qualification, meeting or discovery, proposal, and close. Some businesses add stages for negotiation or onboarding. The exact number matters less than the rule behind it. Each stage should represent a clear change in the buyer commitment, with a defined action that moves a deal from one stage to the next.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a sales pipeline and a sales forecast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pipeline shows all the active deals and where they sit. A forecast is a prediction of what will actually close in a given period, weighted by the probability of each deal. The pipeline is the raw picture of work in progress. The forecast is the interpretation of that picture. A large pipeline does not guarantee a strong forecast if most of the deals are early stage or poorly qualified.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a healthy sales pipeline look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A healthy pipeline has enough volume at the top to cover your revenue target after normal drop-off, deals spread sensibly across the stages rather than clustered at one point, and steady movement from stage to stage over time. It also has consistent new deals entering week after week. A pipeline that looks full but has not moved in weeks is not healthy, it is stalled.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between leading and lagging indicators in a pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leading indicators are the activities and early signals that predict future revenue: new meetings booked, deals entering the pipeline, and movement between stages. Lagging indicators are the outcomes that confirm what already happened: closed deals and revenue booked. Leading indicators let you fix a problem before it shows up in the numbers. Lagging indicators only tell you the result after it is too late to change it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common sales pipeline mistakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common mistakes are leaving dead deals in the pipeline to make it look fuller, defining stages by internal activity instead of buyer commitment, watching only closed revenue instead of leading indicators, and letting the top of the pipeline run dry during busy periods. Each one hides the real state of the pipeline and delays the point at which you can act.',
      },
    },
  ],
}

const stages = [
  {
    title: 'Prospecting',
    description: 'The top of the pipeline. This is where you identify and reach the businesses that match your ideal customer profile. Nothing is qualified yet. The job at this stage is volume and relevance: enough of the right accounts to feed everything below.',
    watch: 'Enough new accounts entering to cover your target after drop-off.',
  },
  {
    title: 'Qualification',
    description: 'You confirm the prospect fits your criteria and has a real need, budget, and timeline. Deals that do not meet the entry standard are removed here, not carried forward. Honest qualification keeps the rest of the pipeline clean.',
    watch: 'A clear yes or no. Maybes that linger are the first sign of a stalled pipeline.',
  },
  {
    title: 'Meeting or discovery',
    description: 'A booked conversation where you understand the problem in depth and the prospect understands what you do. This is the stage where a qualified opportunity becomes a real sales conversation with commitment on both sides.',
    watch: 'Meetings that actually happen, and buyers who show up prepared.',
  },
  {
    title: 'Proposal',
    description: 'You present a specific offer, scope, and price against the need you uncovered. The deal now has a number attached and a decision in front of it. Deals should not reach this stage until the need and fit are confirmed.',
    watch: 'Proposals tied to a defined need, not sent to test interest.',
  },
  {
    title: 'Close',
    description: 'The deal is won or lost. A clear outcome either way is the goal. A won deal moves to onboarding. A lost deal is recorded with the reason, so the pattern of why deals are lost becomes visible over time.',
    watch: 'A definite result. Deals that never close and never die distort everything above.',
  },
]

export default function WhatIsASalesPipeline() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="What Is a Sales Pipeline? Stages Explained"
        description="A sales pipeline explained: what it is, the typical stages, how it differs from a forecast, what a healthy pipeline looks like, the difference between leading and lagging indicators, and the common mistakes."
        path="/what-is-a-sales-pipeline"
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
              What Is a Sales Pipeline?<br />
              <span className="text-mc-gold">Stages Explained</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              A sales pipeline is the clearest picture you have of where your revenue is coming from. This is what it is, the stages a deal moves through, how it differs from a forecast, and how to tell a healthy pipeline from one that only looks full.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '5 stages', label: 'A typical B2B sales pipeline' },
            { value: 'Leading', label: 'The indicators that predict revenue' },
            { value: 'Not a forecast', label: 'A pipeline shows work, not a bet' },
            { value: 'Stage by stage', label: 'How deals move toward closed' },
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
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What a sales pipeline actually is</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A sales pipeline is a visual representation of where every active deal sits in your sales process. It takes the journey from first contact to closed deal and breaks it into defined stages. At any moment, you can look at the pipeline and see how many opportunities are in each stage, what work is in progress, and what revenue is realistically within reach.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The value of a pipeline is that it turns something invisible into something you can manage. Without one, sales is a set of separate conversations that live in someone's head or inbox. With one, the whole book of work is laid out in order, and you can see where deals slow down, where they drop out, and where the next quarter of revenue is going to come from.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A pipeline is a management tool, not a sales tactic. It does not create demand. It shows you the state of the demand you already have and where it is getting stuck. That distinction matters, because a lot of teams treat a full pipeline as the goal. The goal is a pipeline that moves.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            Every business runs its pipeline slightly differently, but the underlying logic is the same everywhere. Deals enter at the top, get filtered by qualification, progress through a small number of well-defined stages, and end in a clear outcome. The rest of this page walks through each part.
          </p>
        </div>
      </section>

      {/* The stages */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The stages</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">The five stages of a typical pipeline</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            Most B2B pipelines use some version of these five stages. Your business might add one for negotiation or onboarding, and that is fine. The rule that matters is that each stage represents a real change in buyer commitment, with a defined action that moves a deal to the next stage.
          </p>
          <div className="space-y-5">
            {stages.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">What to watch:</span>
                      <span className="font-body text-gray-600 text-xs">{m.watch}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline vs forecast */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The distinction</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Pipeline is not the same as forecast</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            These two terms get used as if they mean the same thing. They do not. A pipeline shows every active deal and where it sits. A forecast is a prediction of what will actually close in a set period, weighted by how likely each deal is to land.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            Put simply, the pipeline is the raw picture of work in progress. The forecast is the interpretation of that picture. This is why a large pipeline can produce a weak forecast. If most of the deals are early stage, poorly qualified, or sitting still, the volume looks reassuring but very little of it is going to close soon.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">The pipeline answers</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">What deals do we have in progress, and where is each one stuck or moving?</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">The forecast answers</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">Of everything in the pipeline, what will realistically close this period and for how much?</p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA
        heading="Want a pipeline that fills itself instead of running dry?"
        body="One call is enough to see whether a consistent flow of qualified meetings would fix the gap you are dealing with."
      />

      {/* Healthy pipeline */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The health check</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What a healthy pipeline looks like</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A full pipeline and a healthy pipeline are not the same thing. Volume alone tells you nothing if the deals are not moving or not real. A healthy pipeline has a few clear characteristics.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { heading: 'Enough at the top', body: 'The top of the pipeline holds enough qualified deals to cover your revenue target after normal drop-off. If your close rate is one in five, you need five times the coverage, not the exact number.' },
              { heading: 'Sensible spread', body: 'Deals are distributed across the stages rather than clustered at one point. A pipeline that is all early-stage prospects has no near-term revenue. One that is all late-stage deals has nothing behind it.' },
              { heading: 'Steady movement', body: 'Deals move from stage to stage over time. Progression is the sign of a working pipeline. A pile of deals that has not shifted in weeks is stalled, no matter how large it looks.' },
              { heading: 'Consistent new entries', body: 'New deals enter week after week, not in occasional bursts. Consistency at the top is what keeps the bottom from running dry two months later.' },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading vs lagging */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The indicators</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Leading indicators versus lagging indicators</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The single most useful thing a pipeline gives you is early warning. That only works if you watch the right numbers. There are two kinds, and the difference decides whether you can act in time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
              <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
              <h3 className="font-headline font-bold text-white mb-2">Leading indicators</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">The activities and early signals that predict future revenue. New meetings booked, deals entering the pipeline, and movement between stages. These let you fix a problem before it reaches the numbers.</p>
            </div>
            <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
              <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
              <h3 className="font-headline font-bold text-white mb-2">Lagging indicators</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">The outcomes that confirm what already happened. Closed deals and revenue booked. These matter, but by the time they move, the work that caused them is already done. They tell you the result, not what to do next.</p>
            </div>
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Most teams watch only closed revenue, which is a lagging indicator. By the time revenue dips, the cause happened weeks earlier when the top of the pipeline ran dry. Watching leading indicators means you see the gap forming and can add pipeline before it becomes a revenue problem. This is the whole point of managing a pipeline rather than just reporting on it.
          </p>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The pitfalls</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Common pipeline mistakes</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A pipeline is only as useful as it is honest. These are the mistakes that make one look better than it is, and each one hides the truth long enough to delay the fix.
          </p>
          <ul className="space-y-3">
            {[
              'Leaving dead deals in the pipeline because removing them makes it look thinner. A pipeline padded with stalled deals gives you a number you cannot trust.',
              'Defining stages by internal activity rather than buyer commitment. A stage should reflect what the buyer has agreed to, not what your team did.',
              'Watching only closed revenue and ignoring leading indicators, so problems are visible only after they have already cost you a quarter.',
              'Letting the top of the pipeline run dry during busy periods, then facing a quiet stretch two months later when there is no new work to close.',
              'Sending proposals to test interest instead of confirming need first, which fills the proposal stage with deals that were never going to close.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center mt-0.5">
                  <span className="text-gray-500 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-gray-700 text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How Millionaire Contracts thinks about pipeline */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How Millionaire Contracts builds pipeline that moves</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Most pipeline problems start at the top. If new qualified deals do not enter week after week, everything below eventually runs dry. Millionaire Contracts operates as an outsourced sales function that keeps the top of the pipeline full with the right accounts, so the rest of the process has something real to work with.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The focus is qualification discipline, not volume. The 65 percent average meeting success rate comes from only booking meetings that meet defined entry criteria, which keeps the qualification stage clean instead of clogged with deals that were never a fit. Across more than 20 companies scaled, the pattern is the same: a steady flow of qualified meetings at the top is what makes a pipeline predictable.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'Every engagement starts by building the ideal customer profile from your best existing clients. The top of the pipeline fills with accounts that actually fit.' },
              { heading: 'Qualification first', body: 'Meetings are only booked when they meet defined entry criteria. That keeps the early stages honest and the forecast believable.' },
              { heading: 'Leading-metric reporting', body: 'Weekly reporting on the leading indicators, so a gap is visible while there is still time to close it, not after revenue has already dipped.' },
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
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable pipeline.' },
              { to: '/why-your-pipeline-empties-when-you-get-busy', label: 'Why Your Pipeline Empties When You Get Busy', desc: 'The feast and famine cycle and how to break it.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means, the models, and who it fits.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'A diagnostic for when to make the move.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'Our process from ICP to booked meetings.' },
              { to: '/services', label: 'Our Services', desc: 'The full outsourced sales offer.' },
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
          Build a pipeline<br className="hidden md:block" /> that does not run dry
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether a steady flow of qualified meetings would fix the gap at the top of your pipeline and what that would look like in practice.
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
