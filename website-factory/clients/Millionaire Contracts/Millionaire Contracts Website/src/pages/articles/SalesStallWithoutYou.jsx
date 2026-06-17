import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Sales Stall Every Time You Step Back from Them',
  description: 'When the founder is the sales process, any absence stops the pipeline. Here is why that dependency forms, why it is hard to break, and what changes when a team carries the sales function instead.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/sales-stall-without-you',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my sales pipeline dry up when I am not involved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sales stalls without you when the pipeline depends on your personal involvement to move forward. If you are the one doing outreach, taking first calls, and closing deals, then any period where your attention shifts, whether because of delivery, travel, or capacity pressure, halts the pipeline entirely. The dependency is structural, not a personnel problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop being the bottleneck in my own sales process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You stop being the bottleneck by separating the sales function from yourself. That means a team that handles outreach, qualification, and meeting generation independently, and a process that does not require your presence to run. You stay involved where your expertise and credibility matter most, typically closing and relationship management, while the pipeline-building runs without you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it bad to be the main salesperson in my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the early stages it is often the right move. Founder involvement in sales builds credibility, closes high-stakes deals, and generates the insight needed to build a repeatable process. The problem is staying in that role past the point where it limits growth. When you cannot take a real break, cannot focus on delivery without sales suffering, or cannot grow without adding more of your own time, the dependency has become a constraint.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fastest way to build sales capacity without hiring a full team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourcing the prospecting and appointment-setting layer is typically the fastest route. It separates pipeline generation from your personal time without the ramp period, management overhead, or fixed cost of an in-house hire. You retain control of qualification standards and closing while the outreach runs independently of your availability.',
      },
    },
  ],
}

const signs = [
  {
    number: '01',
    heading: 'Deals stall the moment you hand them to someone else',
    body: 'Prospects respond to you, not to your team. When someone else follows up, the thread goes quiet. This is not a follow-up skills problem. It is a signal that the relationship and credibility are tied to you personally, which means the sale cannot run without you.',
  },
  {
    number: '02',
    heading: 'Outreach stops when you are heads-down on delivery',
    body: 'The pipeline runs when you have time to work it and stops when you do not. There is no outreach happening independently of your calendar. When a big project lands, sales freezes until the project ends.',
  },
  {
    number: '03',
    heading: 'You cannot take a real break without watching the pipeline empty',
    body: 'A week off does not pause the business. It pauses pipeline generation. You check in, you catch up on emails you should not be handling, and you return to a thinner pipeline than you left. The break was not really a break.',
  },
  {
    number: '04',
    heading: 'Growth tracks your personal capacity, not market demand',
    body: 'Revenue is not limited by demand for what you offer. It is limited by how many hours you can personally put into sales. Adding more time gets you more revenue until you run out of time. Then growth stops.',
  },
]

export default function SalesStallWithoutYou() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Why Sales Stall Every Time You Step Back from Them"
        description="When the founder is the sales process, any absence stops the pipeline. Here is why that dependency forms, why it is hard to break, and what changes when a team carries the sales function instead."
        path="/sales-stall-without-you"
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
            <span className="section-label mb-4 block">Sales Dependency</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Why sales stall<br />
              <span className="text-mc-gold">every time you step back from them</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              You are the best person to sell what your business does. That is true and it is also the problem. When the business can only sell when you are actively selling, every absence creates a gap. That gap has a cost, and over time it caps everything.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            In the early months of a business, founder-led sales is the right move. You know the offer better than anyone. Your credibility closes deals a junior rep cannot. Your relationships open doors that take years to build. The revenue you generate in this phase is real and it matters.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The problem arrives later, not at the start. At some point the business grows to where delivering the work takes most of your time, but the sales process still depends on you personally. You are now trying to run two full-time jobs from the same set of hours, and neither one gets the attention it needs.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The sales dependency that helped you get here is now the thing preventing you from going further. Recognizing it is the first step. Understanding why it is hard to fix is the second.
          </p>
        </div>
      </section>

      {/* The signs */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-10">Four signs you are the bottleneck</h2>
          <div className="space-y-10">
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

      {/* Why it is hard to break */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Why it persists</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The real obstacle to handing it over</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Most founders know they need to get out of the sales function. The difficulty is not recognizing the problem. It is that every attempt to hand it over seems to confirm the fear that it cannot be handed over.
          </p>
          <div className="space-y-6">
            {[
              { heading: 'The first try usually fails', body: 'Handing pipeline generation to one person without a process, without oversight, and without the right infrastructure tends to produce mediocre results. The founder steps back in, which reinforces the belief that they are indispensable. What failed was the handover structure, not the idea itself.' },
              { heading: 'Prospects expect you', body: 'If your name is the one on the email that got a response, the prospect has a relationship with you. That relationship is real. What changes with a team is that the relationship you have with your clients stays intact while a separate function builds the top-of-funnel relationships that eventually reach you.' },
              { heading: 'It feels faster to do it yourself', body: 'In the short term, it is faster to do it yourself. But short-term faster is long-term slower. Every month you stay in the role is another month the business cannot grow past your personal capacity.' },
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

      {/* How to move past it */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How to move past it</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What the transition actually looks like</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Removing yourself from the sales process does not mean removing yourself from sales entirely. In most businesses, the founder stays involved in final conversations and client relationships. What changes is who handles everything upstream of that.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Outreach, first contact, qualification, and meeting generation can all run independently of you. When those functions operate on their own schedule, your time in sales is spent where your presence genuinely matters, and the pipeline does not stall when your attention goes elsewhere.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            The transition takes longer to build in-house than most founders expect, because it requires hiring, ramp time, and a management layer that does not exist yet. The faster route is a team that already operates the function, which can be running in weeks rather than months.
          </p>
        </div>
      </section>

      {/* What changes */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What changes when a team carries it</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Pipeline that does not pause', body: 'Outreach runs on schedule regardless of your workload. A busy delivery week does not create a hole in the pipeline two months later.' },
              { heading: 'Growth not capped by your hours', body: 'Revenue is no longer a function of how much time you can personally put into sales. The ceiling lifts when capacity lifts.' },
              { heading: 'You stop being the fragile point', body: 'Illness, travel, a major delivery push, or a real break no longer carries the risk of stopping the business cold. Sales keeps moving.' },
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
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/founder-led-sales-stops-working', label: 'Founder-Led Sales: Why It Stops Working', desc: 'The longer pattern behind this specific problem.' },
              { to: '/why-your-pipeline-empties-when-you-get-busy', label: 'Why Your Pipeline Empties Every Time You Get Busy', desc: 'What happens to the pipeline when delivery wins the time fight.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'The diagnostic patterns that point to a sales capacity gap.' },
              { to: '/how-it-works', label: 'How Millionaire Contracts Works', desc: 'How we build and run the sales function alongside your business.' },
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
      <section className="py-16 px-6 bg-gray-50">
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
          Ready to take yourself out of the bottleneck?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out what handing off the sales function would look like for where your business is right now.
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
