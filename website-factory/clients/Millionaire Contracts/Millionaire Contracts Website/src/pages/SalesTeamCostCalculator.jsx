import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'In-House Sales Team Cost Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Calculate the fully loaded annual cost of building an in-house sales team, including salary, benefits, tools, onboarding, management time, and the cost of ramp before the team produces pipeline.',
  url: 'https://millionairecontracts.com/cost-of-building-a-sales-team',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it really cost to build an in-house sales team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The base salary is only part of it. A fully loaded in-house sales hire also carries payroll taxes and benefits, sales tools and software, onboarding and training, management time, and recruiting cost. Together these typically add 80 to 130 percent on top of the base salary in year one, before the hire has produced any pipeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before a new sales hire produces results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most new sales hires take 3 to 6 months to ramp into meaningful pipeline. Throughout that period you are paying full salary, tooling, and management cost for output that is below target. That ramp cost is real money spent before the first deal closes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these numbers exact?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The calculator uses transparent, adjustable assumptions to give you a realistic order of magnitude, not an exact quote. Change the salary and headcount to match your market and the breakdown updates. Treat the result as a planning figure, then validate against your own numbers.',
      },
    },
  ],
}

// Cost assumptions, expressed per rep, per year (year 1). Shown transparently
// so the figure reads as a planning estimate, not a fabricated quote.
const ASSUMPTIONS = [
  { key: 'benefits', label: 'Payroll taxes and benefits', kind: 'rate', value: 0.3, note: '30% of base salary' },
  { key: 'tools', label: 'Sales tools and software', kind: 'flat', value: 9000, note: 'CRM, dialler, data, enrichment' },
  { key: 'onboarding', label: 'Onboarding and training', kind: 'flat', value: 7500, note: 'Ramp materials, enablement, lost productivity' },
  { key: 'management', label: 'Management time', kind: 'flat', value: 11000, note: 'Coaching, pipeline reviews, reporting' },
  { key: 'recruiting', label: 'Recruiting and hiring', kind: 'flat', value: 10000, note: 'Sourcing, interviewing, agency fees' },
]

const RAMP_MONTHS = 4 // midpoint of the 3 to 6 month range

const usd = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.round(n))

export default function SalesTeamCostCalculator() {
  const [reps, setReps] = useState(2)
  const [salary, setSalary] = useState(60000)

  const perRepExtras = ASSUMPTIONS.reduce(
    (sum, a) => sum + (a.kind === 'rate' ? salary * a.value : a.value),
    0,
  )
  const perRepTotal = salary + perRepExtras
  const totalYear1 = perRepTotal * reps
  const rampCost = (totalYear1 / 12) * RAMP_MONTHS

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="In-House Sales Team Cost Calculator"
        description="Calculate what an in-house sales team actually costs you in money and months before the first deal closes. Adjustable, transparent, and built for founders weighing build versus buy."
        path="/cost-of-building-a-sales-team"
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Free Tool</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              What does building an in-house<br />
              <span className="text-mc-gold">sales team actually cost?</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              The base salary is the number founders anchor on. It is also the smallest part of the bill. Set your numbers below and see the fully loaded cost, plus what you spend during ramp before a single deal closes.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Inputs */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <h2 className="font-headline text-2xl font-black text-mc-teal mb-8">Your numbers</h2>

            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="reps" className="font-body font-semibold text-mc-teal text-sm">Sales reps you plan to hire</label>
                <span className="font-headline font-black text-mc-gold text-xl">{reps}</span>
              </div>
              <input
                id="reps"
                type="range"
                min="1"
                max="10"
                step="1"
                value={reps}
                onChange={(e) => setReps(Number(e.target.value))}
                className="w-full accent-mc-gold"
              />
            </div>

            <div className="mb-2">
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="salary" className="font-body font-semibold text-mc-teal text-sm">Average base salary per rep</label>
                <span className="font-headline font-black text-mc-gold text-xl">{usd(salary)}</span>
              </div>
              <input
                id="salary"
                type="range"
                min="30000"
                max="150000"
                step="5000"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full accent-mc-gold"
              />
              <p className="font-body text-gray-500 text-xs mt-3">
                Adjust the salary to match your market. Everything below recalculates from this number.
              </p>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="bg-mc-dark rounded-2xl p-8 mb-6">
              <p className="font-body text-gray-400 text-sm mb-2">Fully loaded cost, year one</p>
              <p className="font-headline text-5xl font-black text-mc-gold leading-none mb-6">{usd(totalYear1)}</p>
              <div className="border-t border-white/10 pt-5">
                <p className="font-body text-gray-400 text-sm mb-1">Spent during ramp, before results</p>
                <p className="font-headline text-2xl font-black text-white">{usd(rampCost)}</p>
                <p className="font-body text-gray-500 text-xs mt-2">
                  Roughly {RAMP_MONTHS} months of cost at full burn before a new hire produces meaningful pipeline.
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="border border-gray-100 rounded-2xl p-6">
              <p className="font-body font-semibold text-mc-teal text-sm mb-4">Cost per rep, per year</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-body text-gray-700">Base salary</span>
                  <span className="font-body font-semibold text-mc-teal">{usd(salary)}</span>
                </div>
                {ASSUMPTIONS.map((a) => (
                  <div key={a.key} className="flex justify-between items-center text-sm">
                    <span className="font-body text-gray-500">
                      {a.label}
                      <span className="block text-gray-400 text-xs">{a.note}</span>
                    </span>
                    <span className="font-body font-semibold text-mc-teal">
                      {usd(a.kind === 'rate' ? salary * a.value : a.value)}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
                  <span className="font-headline font-bold text-mc-teal">Total per rep</span>
                  <span className="font-headline font-black text-mc-gold">{usd(perRepTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The other side of the equation */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The other side of the equation</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The cost is only half the question</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The number above is what you pay to build. The harder question is what you get for it, and when. A new in-house team carries hiring risk, a ramp period, and management overhead before it produces. If the hire does not work out, you absorb the loss and start again.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            Millionaire Contracts is built to remove that gap. You get senior closers and strategists operating from day one, a performance-aligned engagement structure, and a full replacement guarantee. No ramp, no hiring risk, no management layer to build. A sales operation that is better equipped than what you could assemble on your own timeline.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Operational day one', body: 'No 3 to 6 month ramp. The team produces from the first week of the engagement.' },
              { heading: 'No hiring risk', body: 'No wrong-hire write-off. A full replacement guarantee instead of severance and lost months.' },
              { heading: 'No management overhead', body: 'Coaching, pipeline reviews, and reporting are run for you, not added to your plate.' },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
                <h3 className="font-headline font-bold text-mc-teal mb-2">{c.heading}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-mc-dark rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="font-headline font-bold text-white text-lg mb-1">Want the full breakdown?</p>
            <p className="font-body text-gray-400 text-sm">Read the complete in-house versus outsourced comparison, with the framework for the decision.</p>
          </div>
          <Link to="/in-house-vs-outsourced-sales" className="btn-primary flex-shrink-0 whitespace-nowrap">Read the comparison</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-10">Common questions</h2>
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
          See what your sales function<br className="hidden md:block" /> should cost and produce
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to map what building in-house would cost you against what a ready-built sales operation delivers.
        </p>
        <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
          Book a Free Strategy Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
