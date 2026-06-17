import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Does Outsourced Sales Actually Cost? (2026 Pricing Guide)',
  description: 'A breakdown of outsourced sales pricing models, what you should expect to pay, and how to evaluate whether the cost makes sense for your business.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/what-does-outsourced-sales-cost',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does outsourced sales cost per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourced sales retainers typically range from $3,000 to $15,000 per month depending on the scope. Appointment setting only sits at the lower end. Full sales operation including strategy, management, and closing sits at the higher end. Pay-per-appointment models charge $75 to $500 per booked meeting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is outsourced sales cheaper than hiring in-house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases, yes. A fully loaded in-house SDR in the US costs $110,000 to $150,000 per year when you account for salary, benefits, tools, onboarding, and management time. An outsourced equivalent typically runs $42,000 to $55,000 per year. The gap widens further when you factor in hiring risk and ramp time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best pricing model for outsourced sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your stage. Retainer models give you a dedicated team and consistent process, which suits businesses that need pipeline built from scratch. Pay-per-appointment works when you have a tight ICP and want to reduce upfront risk, but incentivises meeting volume over quality. Hybrid models balance both.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should be included in an outsourced sales retainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-structured retainer should include ICP development, outreach tool licences, sequence copywriting and management, rep deployment and oversight, weekly reporting on leading metrics, and regular strategy reviews. Anything outside this scope should be explicitly itemised.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see ROI from outsourced sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-run outsourced sales engagement should produce first meetings within two to three weeks. ROI depends on your deal size and close rate, but most businesses with an average deal value above $5,000 see positive return within 60 to 90 days. Businesses with longer sales cycles see pipeline build in the same period, with revenue following.',
      },
    },
  ],
}

const models = [
  {
    name: 'Monthly retainer',
    range: '$3,000 to $15,000 / month',
    description: 'You pay a fixed monthly fee for a dedicated sales function. This covers the team, the tools, the process, and the management. The agency is accountable for output across the full engagement.',
    pros: ['Consistent, predictable cost', 'Dedicated team focused on your pipeline', 'Process and infrastructure built over time', 'Easier to scale up or adjust scope'],
    cons: ['Higher upfront commitment', 'Output varies if agency is stretched across clients', 'Requires clear scope definition to avoid drift'],
    best: 'Best for businesses that need pipeline built from scratch or a complete sales function deployed.',
  },
  {
    name: 'Pay per appointment',
    range: '$75 to $500 per meeting',
    description: 'You pay only for meetings booked. No monthly retainer, no overhead. The agency earns when they deliver.',
    pros: ['Lower financial risk upfront', 'Clear cost-per-output metric', 'Easy to evaluate ROI per meeting'],
    cons: ['Incentivises volume over quality', 'No-shows and poor-fit meetings can erode value quickly', 'Less investment in your ICP and brand from the agency'],
    best: 'Best when you have a tight, well-defined ICP and need a volume boost rather than a full engagement.',
  },
  {
    name: 'Pay per qualified lead',
    range: '$150 to $600 per lead',
    description: 'You pay for leads that meet defined qualification criteria. Similar to pay-per-appointment but with a tighter quality gate before the cost triggers.',
    pros: ['Stronger alignment on quality standards', 'Only pay when criteria are genuinely met', 'Easier to dispute delivery against agreed criteria'],
    cons: ['Qualification criteria need precise definition upfront', 'Can create friction if agency and client disagree on what qualified means', 'Higher per-unit cost than pay-per-appointment'],
    best: 'Best when you have experienced closers and need to improve the quality of what enters the pipeline, not just the volume.',
  },
  {
    name: 'Hybrid model',
    range: 'Base retainer + performance bonus',
    description: 'A smaller monthly retainer combined with a per-meeting or per-revenue bonus. Aligns incentives while ensuring the agency has enough base to build properly.',
    pros: ['Shared risk and reward', 'Agency has skin in the game beyond just showing up', 'Retainer ensures infrastructure investment, bonus rewards results'],
    cons: ['More complex to structure and track', 'Bonus definitions need careful scoping', 'Can create disputes if KPIs are unclear'],
    best: 'Best for established businesses looking to scale a proven process with an agency they trust.',
  },
]

export default function WhatDoesOutsourcedSalesCost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="What Does Outsourced Sales Actually Cost? (2026 Pricing Guide)"
        description="A breakdown of outsourced sales pricing models, what you should expect to pay, and how to evaluate whether the cost makes sense for your business stage."
        path="/what-does-outsourced-sales-cost"
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
            <span className="section-label mb-4 block">Pricing Guide</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              What Does Outsourced Sales<br />
              <span className="text-mc-gold">Actually Cost in 2026?</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most agencies are not transparent about pricing until you are already in a sales process with them. This guide gives you the real numbers, the four pricing models, and a framework for deciding which one fits your stage.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '$110k+', label: 'Fully loaded in-house SDR (US, Year 1)' },
            { value: '$3k–$15k', label: 'Monthly outsourced sales retainer range' },
            { value: '$75–$500', label: 'Pay-per-appointment market rate' },
            { value: '60–90 days', label: 'Typical time to positive ROI' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Outsourced sales pricing is one of the least transparent areas in B2B services. Agencies bury numbers behind "it depends" and "book a call to find out." The result is that most buyers enter pricing conversations without a baseline, which puts them at a disadvantage.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            This guide is designed to fix that. It covers what outsourced sales actually costs across the four main pricing models, how those costs compare to building in-house, and how to decide which model makes sense for where your business is right now.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The numbers below reflect the current market as of 2026 and are based on engagements across US, UK, and global markets.
          </p>
        </div>
      </section>

      {/* In-house vs outsourced cost section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The baseline</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What you are comparing against</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Before evaluating outsourced sales costs, you need the right comparison point. Most founders anchor on base salary. That is the wrong number.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { item: 'Base salary (US SDR)', cost: '$55,000 to $70,000' },
              { item: 'Payroll taxes and benefits', cost: '$18,000 to $28,000' },
              { item: 'Sales tools and software', cost: '$6,000 to $12,000' },
              { item: 'Onboarding and training', cost: '$5,000 to $10,000' },
              { item: 'Manager time (coaching, reviews)', cost: '$8,000 to $15,000' },
              { item: 'Recruiting and hiring cost', cost: '$5,000 to $15,000' },
            ].map((r) => (
              <div key={r.item} className="flex justify-between items-center bg-white rounded-lg px-4 py-3 border border-gray-100">
                <span className="font-body text-gray-700 text-sm">{r.item}</span>
                <span className="font-body font-semibold text-mc-teal text-sm">{r.cost}</span>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-5 flex justify-between items-center mb-4">
            <span className="font-headline font-bold text-white">Total annual cost (Year 1, US)</span>
            <span className="font-headline font-black text-mc-gold text-2xl">$110k to $150k</span>
          </div>
          <p className="font-body text-gray-500 text-sm">
            And that assumes the hire works. A wrong hire costs you 6 to 9 months of that investment before you can recover. See the full breakdown in our{' '}
            <Link to="/in-house-vs-outsourced-sales" className="text-mc-gold hover:underline">in-house vs outsourced comparison</Link>.
          </p>
        </div>
      </section>

      {/* Pricing models */}
      <section className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block" style={{ color: '#d8920e' }}>The four models</span>
            <h2 className="font-headline text-3xl font-black text-mc-teal leading-tight">
              How outsourced sales is priced
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {models.map((m) => (
              <div key={m.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-7 py-6 border-b border-gray-100">
                  <h3 className="font-headline text-xl font-black text-mc-teal mb-1">{m.name}</h3>
                  <span className="font-body text-mc-gold font-semibold text-sm">{m.range}</span>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mt-3">{m.description}</p>
                </div>
                <div className="px-7 py-6">
                  <div className="mb-4">
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-mc-teal mb-2">Advantages</p>
                    <ul className="space-y-1.5">
                      {m.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="text-mc-gold font-bold text-sm mt-0.5">+</span>
                          <span className="font-body text-sm text-gray-600">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Watch out for</p>
                    <ul className="space-y-1.5">
                      {m.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <span className="text-gray-400 font-bold text-sm mt-0.5">-</span>
                          <span className="font-body text-sm text-gray-500">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-body text-xs italic text-gray-400 leading-relaxed">{m.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What affects cost */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>What drives the number</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why costs vary so widely</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The range between a $3,000 and $15,000 monthly retainer is not arbitrary. Several factors push the number up or down:
          </p>
          <div className="space-y-5">
            {[
              { factor: 'Scope of service', detail: 'Appointment setting only is cheaper than full sales operation. The more of the sales function you outsource, the higher the engagement cost — and the higher the output.' },
              { factor: 'Target market complexity', detail: 'Enterprise outreach with multi-stakeholder decision processes requires more sophisticated qualification and longer sequences. SMB outreach is faster and cheaper to run.' },
              { factor: 'Deal size and sales cycle', detail: 'Higher deal values justify higher acquisition costs. An agency charging $5,000 per month to bring in $50,000 deals is delivering clear ROI. The same cost to bring in $2,000 deals is not.' },
              { factor: 'Number of reps deployed', detail: 'A single SDR engagement costs less than a team. Scaling the number of active reps scales the retainer accordingly.' },
              { factor: 'Reporting and strategy depth', detail: 'Agencies that provide weekly strategy reviews, ICP refinement, and detailed pipeline reporting charge more than those that book meetings and send a monthly summary.' },
            ].map((item) => (
              <div key={item.factor} className="flex gap-5 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-mc-gold flex-shrink-0 mt-2.5" />
                <div>
                  <span className="font-body font-semibold text-mc-teal text-sm">{item.factor}: </span>
                  <span className="font-body text-gray-600 text-sm leading-relaxed">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI framework */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The only number that matters</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How to evaluate whether the cost makes sense</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Cost without context is meaningless. The right question is not "what does outsourced sales cost?" but "what does it cost relative to what it produces?"
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A simple framework: if your average deal value is $20,000 and you close 20% of qualified meetings, you need five meetings to close one deal. At $500 per meeting (high end of pay-per-appointment), that is $2,500 in acquisition cost against $20,000 in revenue. The math works.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Run this against your own numbers before you engage any provider. Know your average deal value, your current close rate, and how many meetings per month you need to hit your revenue target. That tells you what you can afford to spend on pipeline, and whether outsourced sales pencils out.
          </p>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-mc-gold mb-4">Quick ROI check</p>
            <div className="space-y-3">
              {[
                'Average deal value x target close rate = revenue per meeting',
                'Revenue per meeting vs cost per meeting = your margin per acquisition',
                'Monthly meetings needed to hit target x cost per meeting = maximum viable spend',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-headline text-mc-gold font-bold text-sm flex-shrink-0">{i + 1}.</span>
                  <span className="font-body text-gray-300 text-sm leading-relaxed">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-10">Common questions on cost</h2>
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
          Want to know what an engagement<br className="hidden md:block" /> would cost for your business?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to scope the right model, give you a clear number, and show you what the ROI looks like at your deal size.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Book a Free Strategy Call
          </Link>
          <Link to="/how-it-works" className="inline-block border-2 border-white text-white font-headline font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
            See Our Engagement Models
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
