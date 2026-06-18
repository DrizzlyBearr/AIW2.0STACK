import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Founder-Led Sales: Why It Stops Working and What to Do Next',
  description: 'Founder-led sales gets a business off the ground, then quietly becomes the ceiling. Here is why it stops scaling, the signs you have hit the wall, and how to move past it.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/founder-led-sales-stops-working',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is founder-led sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Founder-led sales is when the founder is the primary salesperson for the business. They run the outreach, the meetings, and the closing themselves. It is the natural starting point for most companies because the founder knows the product best and carries the most conviction, but it becomes a constraint once the business needs to grow beyond the founder’s available hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does founder-led sales stop working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It stops working because the founder has a fixed number of hours and selling competes with every other demand on the business. Growth through founder-led sales is capped at whatever time the founder can give to it, and that time shrinks as the company gets more complex. The result is a ceiling that effort alone cannot lift.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I move away from founder-led sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You move away from it by documenting what makes your selling work, then transferring it to a dedicated sales function with the process and oversight to run it without you. That can be an in-house team once you are large enough to support one, or an outsourced team that brings the process with it. The goal is for pipeline to keep moving when the founder steps back.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you outsource founder-led sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The parts that depend on founder conviction can stay with the founder while the repeatable execution, prospecting, qualification, and follow-up, moves to a dedicated team. A well-run outsourced sales function captures the founder’s approach, then runs it at a volume and consistency the founder could never sustain alone.',
      },
    },
  ],
}

const signs = [
  {
    number: '01',
    heading: 'Growth tracks your calendar, not your market',
    body: 'When you have time to sell, revenue grows. When you get pulled into delivery, hiring, or operations, it stalls. The market did not change. Your available selling hours did. That is the clearest sign the business has hit the founder ceiling.',
  },
  {
    number: '02',
    heading: 'Deals stall the moment you step back',
    body: 'A prospect goes quiet when anyone other than you handles the conversation. Every deal needs your personal involvement to move. That dependency feels like proof you are good at selling. It is actually proof the business cannot sell without you.',
  },
  {
    number: '03',
    heading: 'You are the bottleneck in your own pipeline',
    body: 'Leads sit waiting because you have not had time to follow up. Good opportunities cool off, not because they were not interested, but because the one person who could move them was busy elsewhere. The pipeline moves at the speed of your spare time.',
  },
  {
    number: '04',
    heading: 'You cannot take a real break',
    body: 'Stepping away for two weeks means the pipeline goes cold for two weeks, and weeks more to recover. The business is not an asset that runs. It is a job that depends entirely on you showing up to sell.',
  },
]

export default function FounderLedSalesStopsWorking() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Founder-Led Sales: Why It Stops Working and What to Do Next"
        description="Founder-led sales gets a business off the ground, then quietly becomes the ceiling. Here is why it stops scaling, the signs you have hit the wall, and how to move past it."
        path="/founder-led-sales-stops-working"
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
            <span className="section-label mb-4 block">Founder-Led Sales</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Founder-led sales got you here.<br />
              <span className="text-mc-gold">It will not get you there.</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              The thing that built the business becomes the thing that caps it. When every deal still runs through you, growth is limited to your hours. Here is why that happens, and how to move past it without losing what made your selling work.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            In the beginning, founder-led sales is the right answer. Nobody understands the product like you do. Nobody carries the conviction you carry. You close deals other people could not, because you believe in the thing more than any hired rep ever will at the start.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            That strength has a built-in limit. The business can only grow as fast as you can sell, and you have a fixed number of hours that keep getting claimed by everything else a growing company demands. At some point, the founder who sells everything becomes the reason the business cannot grow.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The hard part is that hitting this ceiling does not feel like a problem you can solve. It feels like you just need more hours. You do not. You need the selling to stop depending on your hours.
          </p>
        </div>
      </section>

      {/* Signs */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-10">Four signs you have hit the founder ceiling</h2>
          <div className="space-y-12">
            {signs.map((s) => (
              <div key={s.number} className="border-l-4 border-mc-gold pl-8">
                <div className="font-headline text-5xl font-black text-mc-gold/20 leading-none mb-2">{s.number}</div>
                <h3 className="font-headline text-2xl font-black text-mc-teal mb-4">{s.heading}</h3>
                <p className="font-body text-gray-700 leading-relaxed text-base">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it is hard to let go */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The real obstacle</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The problem is not letting go. It is what you would hand over.</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Most founders do not cling to sales because they enjoy it. They hold on because what they do is hard to describe, let alone hand to someone else. The judgement, the way you read a room, the instinct for when to push and when to wait, none of it is written down anywhere. It lives in your head.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            So the first hire fails, not because the person was weak, but because you handed them a job with no map. They had your title for the role and none of the substance behind how you actually do it. They reproduced the activity without the judgement, and the results showed it.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Moving past founder-led sales is not about caring less. It is about capturing what you do well enough that someone else can run it, then giving them the process and oversight to do it consistently. That is a different problem from hiring a body and hoping.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Tired of being the only one who can sell?"
        body="If growth is capped by your personal capacity, the fix is structural. One call maps what handing off the sales function would look like for your business."
      />

      {/* What to do */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">How to move past it</h2>
          <div className="space-y-6">
            {[
              { heading: 'Separate conviction from execution', body: 'Some of what you do needs the founder: the high-stakes close, the strategic relationship. Most of it does not. Prospecting, qualification, and follow-up are repeatable and can be run by a dedicated team. Keep the first, hand over the second.' },
              { heading: 'Document what makes your selling work', body: 'Write down how you qualify, what objections you hear, what makes a good-fit customer, and how you move a deal. This becomes the playbook a team runs from, instead of guessing.' },
              { heading: 'Build the function, not just the headcount', body: 'A single rep with no system reproduces your inconsistency. A sales function, with process, infrastructure, and oversight, is what actually runs without you. That is the thing to put in place.' },
              { heading: 'Stay close without being the bottleneck', body: 'You should still hear what the market is saying. You should not be the reason a follow-up email goes out three days late. Stay in the loop on signal, out of the loop on daily execution.' },
            ].map((c) => (
              <div key={c.heading} className="flex gap-4">
                <div className="flex-shrink-0 w-1.5 bg-mc-gold rounded-full" />
                <div>
                  <h3 className="font-headline font-bold text-mc-teal mb-1">{c.heading}</h3>
                  <p className="font-body text-gray-700 leading-relaxed text-sm">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The outsourced route */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why outsourcing often moves faster than hiring</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Building this in-house means recruiting, onboarding, and managing a team, then waiting months for them to ramp, all while you keep carrying the sales load yourself. For most founder-led businesses, that is a long and expensive road that makes the bottleneck worse before it gets better.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            An outsourced sales team arrives with the process, the infrastructure, and the oversight already built. It captures how your selling works, then runs the repeatable parts at a consistency and volume you could never sustain alone, operating like an extension of your business from day one. You stay the founder. You stop being the pipeline.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/sales-stall-without-you', label: 'Why Sales Stall Every Time You Step Back from Them', desc: 'The bottleneck this creates and how to remove it.' },
              { to: '/why-your-pipeline-empties-when-you-get-busy', label: 'Why Your Pipeline Empties Every Time You Get Busy', desc: 'The feast or famine cycle and how to end it.' },
              { to: '/inconsistent-revenue', label: 'Why Your Revenue Is Inconsistent and What to Do About It', desc: 'The pattern behind revenue that swings month to month.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'The patterns that point to a sales execution gap.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Turn what you do into a system a team can run.' },
              { to: '/how-it-works', label: 'How Millionaire Contracts Works', desc: 'The engagement model and what you get.' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-mc-gold/40 transition-colors group"
              >
                <p className="font-headline font-bold text-mc-teal text-sm mb-1 group-hover:text-mc-gold transition-colors">{link.label}</p>
                <p className="font-body text-gray-500 text-xs">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-10">Common questions</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((q) => (
              <div key={q.name} className="border-b border-gray-200 pb-6">
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
          Ready to stop being the pipeline?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to map what moving past founder-led sales would look like for your business.
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

      <Footer />
    </div>
  )
}
