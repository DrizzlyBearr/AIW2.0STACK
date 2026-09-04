import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fractional Sales Team: What It Is and When It Makes Sense',
  description: 'A fractional sales team explained: what it is, how it differs from a full-time hire and a fractional VP of Sales, what it includes, the stages of business it fits, and the cost logic against building in-house.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/fractional-sales-team',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a fractional sales team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fractional sales team is an external group that runs part or all of your sales function on a part-time or shared basis. You get the roles you need, such as prospecting, appointment setting, or sales leadership, without carrying the full-time salaries and overhead of hiring those people yourself. The team works under your brand and toward your targets, but the cost is a fraction of an equivalent in-house build.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a fractional sales team different from a full-time hire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full-time hire is one person you employ, pay a full salary, and manage directly. A fractional sales team gives you access to several roles at once, on a shared basis, for less than the fully loaded cost of a single in-house rep. A fully loaded in-house SDR runs $110,000 to $150,000 per year and takes 3 to 6 months to ramp. A fractional team is operational faster and carries no hiring risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a fractional sales team and a fractional VP of Sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fractional VP of Sales is one senior leader who sets strategy and manages an existing team on a part-time basis. A fractional sales team is the working function itself: the people who do the prospecting, outreach, and meeting booking. The two are different layers. A VP designs and directs. A team executes. Some businesses need one, some need both.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a fractional sales team include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fractional sales team usually includes targeting and list building, multi-channel outreach, qualification, appointment setting, and reporting on leading indicators. Depending on the engagement it can also include sales leadership, process design, and full sales cycle management. The scope is matched to where the gap is, rather than sold as a fixed package.',
      },
    },
    {
      '@type': 'Question',
      name: 'What stage of business does a fractional sales team fit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fractional sales teams fit businesses that have a defined offer and a clear target customer but do not yet have the revenue to justify a full in-house team. This includes early-stage B2B companies, businesses moving off founder-led sales, and established firms testing a new market. The common thread is a real need for pipeline without the budget or appetite for a permanent build.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a fractional sales team cheaper than building in-house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases, yes. Outsourced and fractional sales typically costs 30 to 50 percent less than the fully loaded cost of the equivalent in-house team. A single in-house SDR carries a base of $55,000 to $70,000 and a fully loaded cost of $110,000 to $150,000 once tooling, management, and ramp are counted. A fractional team spreads senior capability across that same budget with no ramp period.',
      },
    },
  ],
}

const includes = [
  {
    title: 'Targeting and list building',
    description: 'The team builds the ideal customer profile from your best existing clients, then sources and verifies the prospect list. Nothing goes out until the targeting is precise.',
    bestFor: 'Businesses that know who buys but have never had the list built properly.',
  },
  {
    title: 'Multi-channel outreach and appointment setting',
    description: 'Email, LinkedIn, and phone coordinated by prospect behaviour, with qualified meetings booked into your calendar. This is the working core of most fractional engagements.',
    bestFor: 'Businesses that can close but do not have enough qualified conversations.',
  },
  {
    title: 'Sales leadership',
    description: 'A senior operator sets the strategy, designs the process, and holds the standard. This is the fractional VP of Sales layer, added when the function needs direction as well as execution.',
    bestFor: 'Businesses moving off founder-led sales that need someone to own the number.',
  },
  {
    title: 'Reporting and accountability',
    description: 'Weekly reporting on leading indicators, not just closed deals. You see the health of the pipeline as it builds, so problems surface early rather than at quarter end.',
    bestFor: 'Businesses that have been burned by outreach with no visibility.',
  },
]

export default function FractionalSalesTeam() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Fractional Sales Team: What It Is and When It Makes Sense"
        description="A fractional sales team explained: what it is, how it differs from a full-time hire and a fractional VP of Sales, what it includes, the stages of business it fits, and the cost logic against building in-house."
        path="/fractional-sales-team"
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
            <span className="section-label mb-4 block">Build vs Buy</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Fractional Sales Team<br />
              <span className="text-mc-gold">What It Is and When It Makes Sense</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              A fractional sales team gives you the roles you need to build pipeline without the salaries, ramp, and hiring risk of a permanent team. This is what it is, how it differs from the alternatives, what it includes, and when it is the right move.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '30 to 50%', label: 'Typical cost reduction vs in-house' },
            { value: '$110k to $150k', label: 'Fully loaded cost of one in-house SDR' },
            { value: '3 to 6 months', label: 'Ramp time you skip with a fractional team' },
            { value: 'Day 1', label: 'When a qualified fractional team is operational' },
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
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What a fractional sales team actually is</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A fractional sales team is an external group that runs part or all of your sales function on a part-time or shared basis. Instead of hiring one person full-time and hoping they cover everything, you get access to the specific roles you need, only for the share of time your business actually requires. The team works under your brand, uses your positioning, and works toward your revenue targets. To the buyer, they are your sales team.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The word fractional describes the cost and commitment, not the quality. You are buying a fraction of a full sales department, not a fraction of the capability. A well-run fractional team brings senior operators, a defined process, and the tooling already in place. You carry none of the fixed overhead that makes an in-house build slow and expensive.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The scope can be narrow or broad. Some businesses want only the prospecting and appointment setting and close the deals themselves. Others want the whole function, including leadership. The point of a fractional model is that you size it to the gap, then scale it as the revenue justifies more.
          </p>
        </div>
      </section>

      {/* How it differs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The distinction</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How it differs from the alternatives</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            Fractional sales gets confused with two other things: hiring a full-time rep, and bringing in a fractional VP of Sales. They are not the same, and the difference changes what you should buy.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-headline font-bold text-mc-teal mb-2">Fractional team vs a full-time hire</h3>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                A full-time hire is one person on your payroll, carrying a base of $55,000 to $70,000 and a fully loaded cost of $110,000 to $150,000 per year once tooling, management, and ramp are counted. They take 3 to 6 months to become productive, and if the hire is wrong, you absorb the loss. A fractional team gives you several roles at once, operational from day one, for a fraction of that single salary and with no ramp period to fund.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-headline font-bold text-mc-teal mb-2">Fractional team vs a fractional VP of Sales</h3>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                A fractional VP of Sales is one senior leader who sets strategy and manages a team a few days a month. That is the direction layer. A fractional sales team is the working function underneath it: the people who do the prospecting, outreach, and booking. A VP with no team to run is a plan with no execution. A team with no leadership can drift. Depending on your stage, you need one, the other, or both, and a good provider will tell you which.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-headline font-bold text-mc-teal mb-2">Fractional team vs a lead list</h3>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                A lead list is data. A fractional sales team is a function. The list tells you who to contact. The team does the contacting, the qualifying, and the booking, then reports on how the pipeline is building. Buying a list and calling it a sales team is the most common mistake at this stage, and it is why so many outreach efforts stall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it includes */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The scope</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">What a fractional sales team includes</h2>
          <div className="space-y-5">
            {includes.map((m, i) => (
              <div key={m.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
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

      {/* Which stage it fits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The fit</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Which stage of business it fits</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A fractional sales team is a stage decision. It fits businesses that have proven they can sell but cannot yet justify the cost of a permanent team. The offer is defined, the target customer is clear, and the constraint is execution capacity, not product-market fit.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Moving off founder-led sales', body: 'The founder has closed the early customers and proven the offer, but their time is now the bottleneck. A fractional team takes the pipeline work off their plate without a full internal build.' },
              { heading: 'Early-stage B2B, pre-scale', body: 'Revenue is real but not yet at the level that supports $110,000 to $150,000 per full-time rep. A fractional team gives you a working function inside a smaller budget.' },
              { heading: 'Testing a new market or offer', body: 'You want to know if a segment responds before you commit headcount. A fractional team lets you run the test and read the result without a permanent hire attached to it.' },
              { heading: 'Inconsistent or referral-dependent pipeline', body: 'The business relies on word of mouth and the flow is unpredictable. A fractional team adds a controllable, repeatable source of qualified meetings.' },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">When it is the wrong call</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A fractional team is not a fix for every situation. There are stages where the model does not hold, and forcing it wastes time and money.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'The offer is still being tested and you do not yet know what converts.',
              'You have not closed any customers and cannot say what a good prospect looks like.',
              'The real problem is positioning or product-market fit, not pipeline volume.',
              'The deal value is too low for outreach economics to work.',
              'You are already at the scale where a dedicated in-house team is clearly justified.',
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
            If any of these apply, fix the upstream issue first. A fractional team executing into a market that is not ready will produce activity, but the activity will not turn into revenue, and the model will get blamed for a problem it was never able to solve.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Not sure if a fractional team fits your stage?"
        body="One call is enough to work out whether it is the right move for where you are, with no pitch if it is not."
      />

      {/* Cost logic */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The math</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The cost logic against building in-house</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The case for fractional is a budget case first. When you hire in-house, you pay for one role and carry the full weight of it: the base salary, the tooling, the management time, and the months of ramp before that person produces. A fractional team spreads senior capability across the same money with none of the fixed overhead.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'A single in-house SDR is not cheap.', note: 'Base salary of $55,000 to $70,000, and a fully loaded cost of $110,000 to $150,000 once tooling, management, and ramp are counted.' },
              { q: 'Ramp is dead time you still pay for.', note: 'A new rep takes 3 to 6 months to become productive. You fund the salary through all of it, before a single deal lands.' },
              { q: 'One hire is one point of failure.', note: 'If the hire is wrong, you absorb the cost of the salary, the ramp, and the rehire. A fractional team removes that single point of risk.' },
              { q: 'Fractional spreads the spend across roles.', note: 'Outsourced and fractional sales typically costs 30 to 50 percent less than the fully loaded in-house equivalent, and gives you several roles instead of one.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              The decision is not fractional versus in-house forever. It is which one fits your revenue stage now. Most businesses use a fractional team to build pipeline while they grow into the revenue that makes an in-house team worth the fixed cost. Fractional first, in-house when the numbers say so.
            </p>
          </div>
        </div>
      </section>

      {/* How it maps to installing a sales function */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How a fractional team maps to installing a sales function</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Millionaire Contracts treats a fractional engagement as installing a sales function, not renting activity. The difference is process. A rented team runs outreach and hands you whatever comes back. An installed function is built around your business: the targeting, the sequences, the qualification criteria, and the reporting all sit inside a repeatable system that produces the same result month after month.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The 65 percent average meeting success rate is a product of that discipline, not volume. Meetings are only booked when they meet defined entry criteria, and the team stands behind the quality of what gets set. Across 20+ companies scaled, the pattern is the same: precise targeting first, then execution, then reporting that shows the pipeline building before the deals close.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'Every engagement starts by building the ideal customer profile from your best existing clients. Outreach does not start until the targeting is precise.' },
              { heading: 'Multi-channel sequences', body: 'Email, LinkedIn, and phone coordinated by prospect behaviour. Signal-driven sequencing that sharpens as data comes in.' },
              { heading: 'Full accountability', body: 'No-show replacement and weekly reporting on leading metrics. Performance standards built into the engagement from day one.' },
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
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Go deeper</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/cost-of-building-a-sales-team', label: 'The Real Cost of Building a Sales Team', desc: 'Every line item in a full in-house build.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full number breakdown for both options.' },
              { to: '/how-much-does-an-sdr-cost', label: 'How Much Does an SDR Cost?', desc: 'The fully loaded number behind one hire.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The models, the fit, and how to decide.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'A diagnostic for knowing when to move.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'How an engagement runs, step by step.' },
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
          Find out if a fractional sales team<br className="hidden md:block" /> is the right fit for you
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether your business is at the stage where a fractional team makes sense, and what that would look like in practice.
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
