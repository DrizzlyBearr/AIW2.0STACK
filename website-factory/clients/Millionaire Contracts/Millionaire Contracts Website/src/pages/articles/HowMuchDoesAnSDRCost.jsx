import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Does an SDR Cost? Salary, OTE, and the Fully Loaded Number',
  description: 'The real cost of an SDR broken down: base salary, on-target earnings, and the fully loaded annual number once payroll tax, benefits, tools, management, recruiting, and ramp are added.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/how-much-does-an-sdr-cost',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does an SDR cost per year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The base salary for a US SDR typically runs $55,000 to $70,000 per year. The fully loaded cost, once you add payroll taxes, benefits, tools, onboarding, management time, and recruiting, comes to $110,000 to $150,000 per year. The fully loaded number is the one that matters for budgeting, because it reflects what the role actually costs the business.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between base salary and OTE for an SDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Base salary is the fixed pay an SDR receives regardless of performance. OTE, or on-target earnings, is the total expected pay including variable commission or bonus when the SDR hits quota. OTE is higher than base, and it is what most candidates compare when evaluating offers. Neither figure includes the additional costs the employer carries on top of pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the fully loaded cost so much higher than the base salary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Base salary is only part of the cost. Payroll taxes, health benefits, software and data tools, onboarding, management time, and recruiting add substantially on top. In year one these additions roughly amount to 80 to 130 percent on top of base once ramp and hiring costs are included. That is why a $60,000 base salary becomes a six-figure line item.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take an SDR to ramp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A new SDR typically takes 3 to 6 months to ramp to full productivity. During that period you are paying full cost for partial output. If the hire does not work out and you have to replace them, a wrong hire can cost 6 to 9 months of that investment before you are back to a productive seat.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a bad SDR hire cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A wrong hire can cost 6 to 9 months of the fully loaded investment. That includes the salary and overhead paid while the SDR underperformed, the lost pipeline during that time, the recruiting cost to replace them, and a second ramp period. On a fully loaded cost of $110,000 to $150,000 per year, that is a significant amount of budget with no return.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does hiring an SDR compare to outsourcing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourced sales typically costs 30 to 50 percent less than the fully loaded cost of an in-house SDR. Monthly retainers commonly run $3,000 to $15,000 per month and pay-per-appointment models run $75 to $500 per qualified meeting. Outsourcing also removes the ramp risk, the hiring risk, and the management burden, because the provider carries all three.',
      },
    },
  ],
}

const costLayers = [
  {
    title: 'Base salary',
    description: 'The fixed pay for the role. For a US SDR this typically sits between $55,000 and $70,000 per year. This is the number most people picture when they think about the cost of the hire, and it is the smallest part of the real figure.',
    bestFor: 'The starting point, not the full cost.',
  },
  {
    title: 'Payroll taxes and benefits',
    description: 'Employer payroll taxes, health insurance, retirement contributions, and paid time off. These are mandatory or expected costs that sit on top of base pay for every employee, and they scale with salary.',
    bestFor: 'A fixed percentage added to every salaried seat.',
  },
  {
    title: 'Tools and data',
    description: 'CRM seats, sales engagement software, contact data and enrichment, dialers, and email infrastructure. An SDR cannot produce without a stack, and that stack carries a per-seat cost that recurs every month.',
    bestFor: 'Recurring monthly overhead the role cannot work without.',
  },
  {
    title: 'Management and recruiting',
    description: 'The time a sales manager spends coaching, reviewing, and running one-on-ones, plus the cost to source, interview, and hire the SDR in the first place. Management time is real cost even when it is not on the SDR payroll line.',
    bestFor: 'The hidden cost that rarely makes the budget.',
  },
]

export default function HowMuchDoesAnSDRCost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How Much Does an SDR Cost? Salary, OTE, and the Fully Loaded Number"
        description="The real cost of an SDR broken down: base salary, on-target earnings, and the fully loaded annual number once payroll tax, benefits, tools, management, recruiting, and ramp are added."
        path="/how-much-does-an-sdr-cost"
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
            <span className="section-label mb-4 block">Pricing</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              How Much Does an SDR Cost?<br />
              <span className="text-mc-gold">Salary, OTE, and the Fully Loaded Number</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              The base salary of an SDR is the smallest part of what the role actually costs. This breaks down the base, the on-target earnings, and the fully loaded annual number, so you can budget against what the seat really carries and compare it to the alternatives.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '$55k to $70k', label: 'Typical US SDR base salary' },
            { value: '$110k to $150k', label: 'Fully loaded annual cost' },
            { value: '3 to 6 months', label: 'Time to ramp to full productivity' },
            { value: '30 to 50%', label: 'Cost reduction with outsourcing' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The base number */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The base number</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Base salary is where the confusion starts</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A sales development representative, or SDR, is the person who handles the top of the sales funnel: prospecting, outreach, and booking qualified meetings for the closers. In the US, the base salary for the role typically runs $55,000 to $70,000 per year. That is the figure most businesses anchor to when they plan the hire, and it is the reason the real cost catches so many teams off guard.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Base salary is the fixed pay the SDR receives regardless of performance. On top of base sits OTE, or on-target earnings, which is the total expected pay when the SDR hits quota, including variable commission or bonus. OTE is the number candidates compare when they weigh offers, and it is always higher than base. Neither figure, though, includes what the employer carries on top of pay.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            This is the core mistake in SDR budgeting. Teams plan around base, or at most around OTE, and treat everything else as a rounding error. In reality, the costs that sit above pay are what turn a mid-five-figure salary into a six-figure line item. The number that matters is the fully loaded cost.
          </p>
        </div>
      </section>

      {/* The cost layers */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The breakdown</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">What the fully loaded number is made of</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The fully loaded cost is the base salary plus every other cost the business absorbs to keep the seat productive. These are the layers that stack on top of pay. Each one is real, recurring, and easy to leave out of the plan.
          </p>
          <div className="space-y-5">
            {costLayers.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">In short:</span>
                      <span className="font-body text-gray-600 text-xs">{m.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why loaded is higher */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The gap</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why the fully loaded number is so much higher</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Take a base salary in the $55,000 to $70,000 range. Add payroll taxes and benefits, the tools the role needs to function, onboarding, the management time to coach the seat, and the recruiting cost to fill it. In year one, those additions roughly amount to 80 to 130 percent on top of base. That is how a $60,000 base salary becomes a fully loaded cost of $110,000 to $150,000 per year.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Base salary is fixed cost', body: 'The $55,000 to $70,000 is paid every month whether the SDR is ramped or not, and whether the pipeline is strong or thin. It does not flex with output.' },
              { heading: 'Overhead scales with pay', body: 'Payroll taxes and benefits are a percentage of salary, so a higher base pulls a higher overhead behind it. The two move together.' },
              { heading: 'Tools are per-seat and recurring', body: 'Every SDR needs a CRM seat, engagement software, and data. That stack recurs monthly and adds to the cost of the seat for as long as it exists.' },
              { heading: 'Management is real cost', body: 'The manager time spent coaching and reviewing does not appear on the SDR payroll line, but it is paid time spent on the seat. Leaving it out understates the true figure.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            The fully loaded number is not padding. It is the honest cost of putting one productive SDR seat in place and keeping it there. Any budget built on base salary alone is understating the commitment by a wide margin.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want the fully loaded number for your situation?"
        body="One call is enough to map what a productive sales seat would really cost you, and whether building or outsourcing is the better move."
      />

      {/* Ramp and bad hire */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The risk</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Ramp time and the cost of a wrong hire</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The fully loaded salary is not the only cost to plan for. Two other factors sit alongside it, and both hit the budget hard.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Ramp: 3 to 6 months to full productivity', note: 'A new SDR takes 3 to 6 months to reach full output. During that window you pay the full loaded cost for partial results. The seat is a cost long before it is a contributor.' },
              { q: 'A wrong hire can cost 6 to 9 months of the investment', note: 'If the hire does not work out, a wrong hire can cost 6 to 9 months of the fully loaded investment: salary and overhead paid during underperformance, lost pipeline, the recruiting cost to replace them, and a second ramp.' },
              { q: 'The risk sits entirely on you', note: 'When you build in-house, you carry the ramp risk and the hiring risk. If the seat fails, the cost is yours and the pipeline gap is yours to absorb while you start over.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              Stack the pieces together. A fully loaded cost of $110,000 to $150,000 per year, a 3 to 6 month ramp before that seat is productive, and a wrong hire that can cost 6 to 9 months of the investment. That is the full exposure of a single in-house SDR, and it is why the build-versus-outsource decision is worth running properly.
            </p>
          </div>
        </div>
      </section>

      {/* How it compares to outsourcing */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The comparison</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How the fully loaded cost compares to outsourcing</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Once you hold the fully loaded number in view, the comparison to outsourced sales gets clearer. Outsourced sales typically costs 30 to 50 percent less than the fully loaded cost of an equivalent in-house SDR. Monthly retainers commonly run $3,000 to $15,000 per month, and pay-per-appointment models run $75 to $500 per qualified meeting.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The cost is only half the story. Outsourcing also removes the ramp risk, the hiring risk, and the management burden, because the provider carries all three. There is no six-month wait for productivity and no exposure to a wrong hire draining 6 to 9 months of budget. The team is operational without the build.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Lower cost', body: '30 to 50 percent below the fully loaded cost of an in-house SDR, with retainers commonly $3,000 to $15,000 per month or $75 to $500 per qualified meeting.' },
              { heading: 'No ramp risk', body: 'A qualified outsourced team is operational without the 3 to 6 month ramp. You do not pay full cost for partial output while a new hire learns the seat.' },
              { heading: 'Proven output', body: 'Millionaire Contracts runs at a 65 percent average meeting success rate and has scaled 20+ companies, so the seat is accountable to results from the start.' },
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
              { to: '/what-is-an-sdr', label: 'What Is an SDR?', desc: 'The role, what it does, and where it fits in the funnel.' },
              { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model with what drives the number.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full number breakdown for both options.' },
              { to: '/cost-of-building-a-sales-team', label: 'The Cost of Building a Sales Team', desc: 'What a full in-house sales function really costs to stand up.' },
              { to: '/fractional-sales-team', label: 'What Is a Fractional Sales Team?', desc: 'Senior sales capability without a full-time hire.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means, the models, and who it works for.' },
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
          See what a sales seat<br className="hidden md:block" /> should really cost you
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to map the fully loaded cost of building in-house against what outsourcing would run, so you can make the decision with real numbers.
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
