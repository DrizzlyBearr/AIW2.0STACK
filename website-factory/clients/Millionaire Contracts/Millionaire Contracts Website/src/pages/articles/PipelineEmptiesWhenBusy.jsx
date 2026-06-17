import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Your Pipeline Empties Every Time You Get Busy',
  description: 'The feast or famine cycle is not a discipline problem. It is a structural one. Here is why pipeline dries up the moment delivery picks up, and the fix that ends the cycle.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/why-your-pipeline-empties-when-you-get-busy',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the feast or famine cycle in sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The feast or famine cycle is the pattern where a business wins work, gets busy delivering it, stops doing outreach, then faces an empty pipeline once that work is finished. Revenue swings between full and empty because sales only happens when delivery is quiet. It is caused by sales and delivery competing for the same attention, not by a lack of effort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my pipeline dry up when I get busy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pipeline dries up when the same people responsible for delivering the work are also responsible for generating new business. When delivery demands rise, outreach stops, because there are only so many hours. Two to three months later the delivered work ends and there is nothing in the pipeline behind it. The gap is structural, not a matter of willpower.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop the feast or famine cycle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You stop it by separating sales execution from delivery so outreach runs on schedule no matter how busy delivery gets. That means a dedicated function, whether hired or outsourced, that owns prospecting and meeting generation as its only job. When sales no longer competes with delivery for attention, pipeline becomes consistent and predictable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the feast or famine cycle a sign I need to outsource sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often, yes. If you have a working offer and satisfied clients but cannot keep outreach running while you deliver, the problem is capacity and consistency, not strategy. An outsourced sales team runs the outreach independently of your delivery load, which is the specific thing that ends the cycle.',
      },
    },
  ],
}

const stages = [
  {
    number: '01',
    heading: 'The win',
    body: 'You close a good piece of work. Maybe two. The relief is real, because the pipeline was thin and you needed it. Attention shifts immediately to delivery, because the work that pays now matters more than the work that might pay later.',
  },
  {
    number: '02',
    heading: 'The busy stretch',
    body: 'Delivery takes over. Outreach stops, because the hours that went to prospecting now go to clients. It feels fine, because revenue is healthy and the calendar is full. This is the most dangerous moment in the cycle, and it never feels dangerous.',
  },
  {
    number: '03',
    heading: 'The cliff',
    body: 'The work wraps up. You look at the pipeline and it is empty, because nothing was fed into it for the last two or three months. Now you are starting outreach from cold, and the results of that outreach are weeks away.',
  },
  {
    number: '04',
    heading: 'The scramble',
    body: 'Revenue drops while you rebuild the pipeline from nothing. You take work you would normally pass on. You discount to close faster. Then something lands, you get busy again, and the cycle restarts. The business never compounds because it keeps resetting.',
  },
]

export default function PipelineEmptiesWhenBusy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Why Your Pipeline Empties Every Time You Get Busy"
        description="The feast or famine cycle is not a discipline problem. It is a structural one. Here is why pipeline dries up the moment delivery picks up, and the fix that ends the cycle."
        path="/why-your-pipeline-empties-when-you-get-busy"
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
            <span className="section-label mb-4 block">The Feast or Famine Cycle</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Why your pipeline empties<br />
              <span className="text-mc-gold">every time you get busy</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              You have lived this. Win work, get busy, stop selling, finish the work, face an empty pipeline, scramble. It feels like a discipline problem. It is not. It is structural, and that is why working harder never fixes it.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Almost every founder-led business runs into this. The offer works. Clients are happy. Referrals come in. And yet revenue lurches between full months and empty ones, with no reliable way to predict which is coming.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The usual explanation is personal: I should be more disciplined, I should block time for sales, I should not let outreach slide when I get busy. So you try harder, hold the line for a few weeks, then a big delivery push arrives and the outreach slips again. The cycle repeats, and the guilt that comes with it does nothing to break it.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The reason willpower does not solve this is simple. The problem is not in your habits. It is in the structure of who does the selling.
          </p>
        </div>
      </section>

      {/* The cycle */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-10">How the cycle actually runs</h2>
          <div className="space-y-10">
            {stages.map((s) => (
              <div key={s.number} className="border-l-4 border-mc-gold pl-8">
                <div className="font-headline text-5xl font-black text-mc-gold/20 leading-none mb-2">{s.number}</div>
                <h3 className="font-headline text-2xl font-black text-mc-teal mb-4">{s.heading}</h3>
                <p className="font-body text-gray-700 leading-relaxed text-base">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The root cause */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The root cause</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Sales and delivery are fighting for the same hours</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            In a founder-led business, the same person, or the same small team, does both jobs. They sell the work and they deliver the work. Those two jobs draw from one pool of hours, and delivery always wins that fight, because delivery is the work a client has already paid for.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            So when delivery load rises, outreach is the first thing cut. It is not a decision anyone makes on purpose. It is what happens when there is more work than time and something has to give. The cost of cutting outreach is invisible at the moment you cut it, because the pipeline you are starving will not show the damage for another two or three months.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            By the time the empty pipeline becomes visible, the cause is months in the past and impossible to undo quickly. That delay is what makes the cycle so hard to break from the inside. You are always reacting to a gap that was created a quarter ago.
          </p>
        </div>
      </section>

      {/* Why the common fixes fail */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">Why the usual fixes do not hold</h2>
          <div className="space-y-6">
            {[
              { heading: 'Time blocking', body: 'Blocking two hours a day for sales works until the first real delivery crunch, then the block is the first thing sacrificed. A calendar entry cannot defend itself against a client deadline.' },
              { heading: 'Hiring one salesperson', body: 'A single rep with no process, no infrastructure, and no oversight tends to reproduce the same inconsistency, just one level removed from you. Without a system around them, output still swings.' },
              { heading: 'A burst of marketing', body: 'A campaign can fill the top of the funnel for a month, but if nobody works those leads consistently, they cool off while you are busy delivering, and you are back to cold outreach when the work ends.' },
              { heading: 'Promising yourself it will be different', body: 'It will not be different, because nothing structural has changed. The same person is still doing both jobs from the same pool of hours. Same structure, same result.' },
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

      {/* The structural fix */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The fix</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Take sales out of the pool of hours that delivery drains</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The cycle ends when outreach no longer depends on the time you have left over after delivery. That means a function whose only job is generating pipeline, running on its own schedule, unaffected by how busy the rest of the business gets.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            When that function exists, the win at the start of the cycle no longer triggers a stop in selling. Outreach keeps running through the busy stretch. There is no cliff at the end, because the pipeline was fed the whole way through. Revenue stops swinging and starts compounding, because the business is no longer resetting to zero every quarter.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            You can build this in-house once you are large enough to carry a dedicated sales team and the management layer it needs. Most founder-led businesses are not there yet, and the cost and ramp time of building it make the cycle worse before it gets better. The faster route is to engage a team that already runs as an independent sales function from day one.
          </p>
        </div>
      </section>

      {/* What changes */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What changes when sales runs independently</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Outreach never stops', body: 'Prospecting runs on schedule through your busiest delivery weeks, because it is not competing with delivery for time.' },
              { heading: 'Pipeline you can forecast', body: 'With consistent input, the pipeline stops being a surprise. You can plan hiring, capacity, and cash against it.' },
              { heading: 'Revenue that compounds', body: 'No more quarterly reset to zero. Growth builds on the quarter before it instead of starting over.' },
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
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/founder-led-sales-stops-working', label: 'Founder-Led Sales: Why It Stops Working', desc: 'What to do when every deal still runs through you.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'The patterns that point to a sales execution gap.' },
              { to: '/cost-of-building-a-sales-team', label: 'In-House Sales Team Cost Calculator', desc: 'What building the function yourself would cost.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'The system that makes pipeline repeatable.' },
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
          Ready to break the cycle for good?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to map what an independent sales function would look like for your business and what it would take to run it.
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
