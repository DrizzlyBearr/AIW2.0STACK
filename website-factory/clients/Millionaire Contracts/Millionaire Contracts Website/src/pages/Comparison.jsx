import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'In-House Sales Team vs Outsourced Sales: The Real Cost Comparison',
  description: 'A detailed breakdown of what it actually costs to build an in-house sales team versus outsourcing your sales function, including the South African cost arbitrage advantage.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/in-house-vs-outsourced-sales',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does an in-house SDR cost per year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fully loaded in-house SDR in the US costs between $110,000 and $150,000 per year when you account for salary, benefits, payroll taxes, equipment, software, training, and management time. The average US SDR base salary alone sits around $55,000 to $70,000 before those additional costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does outsourced sales cost compared to in-house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourced sales functions typically run $42,000 to $55,000 per year for comparable output, representing a 30 to 50 percent reduction against a fully loaded in-house hire. You get senior sales professionals, end-to-end process management, and performance accountability without the overhead of a full-time hire.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take an in-house SDR to ramp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most in-house SDRs take 3 to 6 months to produce meaningful pipeline. During that period you are paying full salary and management costs for sub-target output. An outsourced function from Millionaire Contracts is operational from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does it make sense to build in-house instead?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In-house makes sense when you need deep product expertise that takes years to develop, when your sales cycle requires someone embedded in your company culture long-term, or when you have already proven the outsourced model works and are scaling a validated playbook. For most businesses under $10M revenue, outsourced is faster and lower risk.',
      },
    },
  ],
}

const rows = [
  { label: 'Time to first results', inhouse: '3 to 6 months to ramp', mc: 'Operational from day one' },
  { label: 'Annual cost (fully loaded)', inhouse: '$110,000 to $150,000 per rep', mc: 'Fraction of in-house cost' },
  { label: 'Hiring risk', inhouse: 'Wrong hire costs 6 to 9 months of salary', mc: 'No hiring risk, full replacement guarantee' },
  { label: 'Management overhead', inhouse: 'You hire, onboard, coach, retain', mc: 'Done for you, end to end' },
  { label: 'Performance guarantee', inhouse: 'None', mc: 'Results-driven engagement structure' },
  { label: 'Expertise level', inhouse: 'Depends on budget and hiring luck', mc: 'Senior closers and strategists immediately' },
  { label: 'Scalability', inhouse: 'Slow, each hire takes 3 to 6 months', mc: 'Scale up or down without headcount risk' },
  { label: 'Termination cost', inhouse: 'Severance, legal exposure, morale impact', mc: 'Contractual exit, no HR complexity' },
]

export default function Comparison() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="In-House Sales Team vs Outsourced Sales: The Real Cost"
        description="Thinking of hiring an in-house SDR? Compare the true cost of building vs buying your sales function. Real numbers, South African cost arbitrage, and a clear framework for the decision."
        path="/in-house-vs-outsourced-sales"
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
            <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              In-House Sales Team vs Outsourced Sales:<br />
              <span className="text-mc-gold">The Real Cost Comparison</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most founders hire a sales rep before they understand what that decision actually costs. This page gives you the honest numbers, the framework for the decision, and the one angle most cost comparisons leave out.
            </p>
          </div>
        </div>
      </div>

      {/* Key numbers bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '$110k+', label: 'Fully loaded in-house SDR cost (US)' },
            { value: '3 to 6 months', label: 'Average in-house ramp time' },
            { value: '30 to 50%', label: 'Cost reduction with outsourced sales' },
            { value: 'Day 1', label: 'When Millionaire Contracts is operational' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The real cost of in-house */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The hidden costs</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What an in-house sales hire actually costs</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The base salary is the number founders anchor on. It is also the least important number. A US-based SDR at a $60,000 base salary becomes a $110,000 to $150,000 annual commitment when you account for the full picture.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { item: 'Base salary', cost: '$55,000 to $70,000' },
              { item: 'Payroll taxes and benefits', cost: '$18,000 to $28,000' },
              { item: 'Sales tools and software', cost: '$6,000 to $12,000' },
              { item: 'Onboarding and training', cost: '$5,000 to $10,000' },
              { item: 'Manager time (coaching, reviews)', cost: '$8,000 to $15,000' },
              { item: 'Recruiting and hiring cost', cost: '$5,000 to $15,000' },
            ].map((r) => (
              <div key={r.item} className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                <span className="font-body text-gray-700 text-sm">{r.item}</span>
                <span className="font-body font-semibold text-mc-teal text-sm">{r.cost}</span>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-5 flex justify-between items-center">
            <span className="font-headline font-bold text-white">Total annual cost (Year 1)</span>
            <span className="font-headline font-black text-mc-gold text-2xl">$110k to $150k</span>
          </div>
          <p className="font-body text-gray-500 text-sm mt-3">
            And that assumes the hire works. A wrong hire costs you 6 to 9 months of that investment before you can recover.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label mb-3 block" style={{ color: '#d8920e' }}>Side by side</span>
            <h2 className="font-headline text-3xl font-black text-mc-teal leading-tight">
              In-house team vs Millionaire Contracts
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 font-body font-semibold text-gray-500 text-sm bg-gray-50 w-1/3">Factor</th>
                  <th className="text-left px-6 py-4 font-body font-semibold text-gray-400 text-sm bg-gray-50">In-house hire</th>
                  <th className="text-left px-6 py-4 font-headline font-bold text-mc-teal text-sm bg-mc-gold/10">Millionaire Contracts</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-6 py-4 font-body font-semibold text-mc-teal text-sm">{row.label}</td>
                    <td className="px-6 py-4 font-body text-gray-500 text-sm">{row.inhouse}</td>
                    <td className="px-6 py-4 font-body font-semibold text-mc-teal text-sm bg-mc-gold/5">
                      <span className="flex items-center gap-2">
                        <span className="text-mc-gold font-bold">+</span>
                        {row.mc}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What sets the team apart */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>What sets our team apart</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">A different level of sales execution</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Most outsourced sales providers give you a script and a dialler. Millionaire Contracts gives you a sales operation. Our team is built from commercially sharp professionals who have operated in competitive B2B environments across multiple markets. They do not learn on your pipeline.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The difference shows in the numbers. A 65% average meeting success rate is not the result of volume. It is the result of preparation, qualification discipline, and sales professionals who understand that a bad meeting costs more than no meeting at all.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            When you engage Millionaire Contracts, you are not getting a vendor. You are getting a team that operates like an internal sales function, with the accountability and performance standards to match.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Communication excellence', body: 'Our team communicates with clarity and commercial confidence across English-speaking markets globally.' },
              { heading: 'Professional calibre', body: 'Formally trained, commercially sharp, and experienced in competitive B2B sales environments across multiple industries.' },
              { heading: 'Proven track record', body: '20+ companies scaled. 65% average meeting success rate. Results built on repeatable process, not luck.' },
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

      {/* When in-house makes sense */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">When does in-house actually make sense?</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            In-house is not always wrong. It makes sense when:
          </p>
          <ul className="space-y-4 mb-6">
            {[
              'You have already proven the sales playbook works and are scaling a validated, repeatable process.',
              'Your product requires years of deep technical knowledge that cannot be transferred to an external team.',
              'You are at a revenue stage ($20M plus) where the economics of a fully internal team make sense.',
              'You need someone embedded in company culture for a long-term strategic account relationship.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                  <span className="text-mc-gold text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-gray-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <p className="font-body text-gray-700 leading-relaxed">
            For most businesses under $10M revenue without a proven sales process, outsourced is faster, lower risk, and materially cheaper.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
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
          Ready to stop paying in-house prices<br className="hidden md:block" /> for unpredictable results?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to show you what your sales function should cost and what it should produce.
        </p>
        <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
          Book a Free Strategy Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
