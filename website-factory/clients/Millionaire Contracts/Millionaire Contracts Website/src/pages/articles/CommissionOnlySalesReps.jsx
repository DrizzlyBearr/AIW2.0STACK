import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Commission-Only Sales Reps: Do They Actually Work?',
  description: 'An honest look at commission-only sales reps: why they are appealing, why they usually fail for complex B2B, when the model can work, and the alternatives that keep the cost alignment without the downsides.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/commission-only-sales-reps',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a commission-only sales rep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A commission-only sales rep is paid solely on results, with no base salary. They earn a percentage of the revenue or a fixed amount per deal they close. The business carries no fixed payroll cost for the role, which is why owners find the model appealing. The trade-off is that the rep carries all the income risk, which shapes how they behave.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do commission-only sales reps actually work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They can work in narrow situations: a simple product, a short sales cycle, a warm lead flow, and a large market of interchangeable prospects. For complex B2B sales with long cycles and consultative selling, commission-only reps usually fail. The rep needs income before the first deal closes, and without it they either leave or chase only the easiest short-term wins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do commission-only sales reps fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main reasons are misaligned incentives, no ramp support, and high churn. A rep with no income during ramp cannot afford to learn a complex offer. They prioritise fast, easy deals over the right ones, and they leave the moment a salaried role appears. The business ends up recruiting and re-recruiting for the same seat with nothing to show for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does the commission-only model make sense?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It makes sense when the deal is simple to explain, the sales cycle is short, leads are supplied to the rep rather than self-sourced, and the commission per deal is high enough to produce a living income quickly. Retail, some insurance, and certain high-volume consumer sales fit this shape. Most considered B2B services do not.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a commission-only rep and an outsourced sales team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A commission-only rep is one individual carrying all the risk, with no infrastructure behind them. An outsourced sales team supplies the targeting, outreach systems, qualification process, management, and reporting, and prices the engagement so the incentive to perform stays aligned. You keep the cost-alignment benefit of paying for output without the single-person fragility of the commission-only model.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the cost of a commission-only rep compare to other options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A commission-only rep has no fixed cost, which looks cheapest on paper. A fully loaded in-house SDR costs $110,000 to $150,000 per year, with a base of $55,000 to $70,000. Outsourced sales typically runs 30 to 50 percent less than the in-house cost. The right comparison is not just the sticker price. It is the cost per qualified result and the risk of churn eating the return.',
      },
    },
  ],
}

const failures = [
  {
    title: 'Misaligned incentives',
    description: 'A rep paid only per closed deal optimises for the fastest close, not the best-fit customer. They skip qualification, oversell, and push prospects who will churn. For a considered B2B offer, that behaviour damages the pipeline and the brand at the same time.',
    bestFor: 'Any offer where the wrong customer costs more than no customer.',
  },
  {
    title: 'No ramp support',
    description: 'Complex sales take time to learn. A rep with no income during that ramp cannot afford to stay and learn. They need to earn this month, so they never build the product knowledge a real close requires. The learning curve and the pay model work against each other.',
    bestFor: 'Offers that need weeks of ramp before a rep can sell them well.',
  },
  {
    title: 'High churn',
    description: 'Commission-only roles attract people between jobs and lose them the moment a salaried offer appears. The seat turns over constantly. Each turnover resets relationships, pipeline, and product knowledge, and the recruiting cost is paid again and again.',
    bestFor: 'Nothing. Churn is pure cost with no offsetting benefit.',
  },
  {
    title: 'Poor fit for complex B2B',
    description: 'Multi-stakeholder deals with long cycles need patience, process, and coordination. A rep who only eats what they kill this month has no reason to nurture a deal that closes in four months. The economics of the pay model reject the economics of the sale.',
    bestFor: 'Simple, fast, transactional sales only.',
  },
]

export default function CommissionOnlySalesReps() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Commission-Only Sales Reps: Do They Actually Work?"
        description="An honest look at commission-only sales reps: why they are appealing, why they usually fail for complex B2B, when the model can work, and the alternatives that keep the cost alignment without the downsides."
        path="/commission-only-sales-reps"
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
              Commission-Only Sales Reps<br />
              <span className="text-mc-gold">Do They Actually Work?</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              The commission-only rep is the model owners reach for when they want sales without payroll risk. Sometimes it works. For most considered B2B businesses it quietly fails. This is an honest look at why the model is appealing, where it breaks, and what carries the same upside without the downside.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'No base', label: 'Why the model looks appealing' },
            { value: '4 reasons', label: 'The model usually fails in B2B' },
            { value: 'Narrow', label: 'The situations where it works' },
            { value: '30 to 50%', label: 'Outsourced cost reduction vs in-house' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The appeal */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The appeal</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why commission-only looks like the obvious answer</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The pitch writes itself. You bring on a sales rep, you pay nothing until they close, and every dollar you pay them is a dollar they already earned you. There is no fixed payroll cost, no salary to carry through a slow month, and no risk of paying for a hire who does not perform. On a spreadsheet, it is the cleanest deal in business.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            For an owner who has been burned by a salaried hire that did not work out, the appeal is even stronger. A full-time sales hire is expensive and slow to prove. A fully loaded in-house SDR costs $110,000 to $150,000 per year, with a base of $55,000 to $70,000 before commission. Commission-only removes that fixed number entirely. You only pay for output.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The logic is sound as far as it goes. The problem is that the pay model does not just decide what you pay. It decides who applies, how they behave, and how long they stay. Those three things are where the model breaks for most businesses.
          </p>
        </div>
      </section>

      {/* Why it fails */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The reality</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">Why commission-only reps usually fail</h2>
          <div className="space-y-5">
            {failures.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">Applies to:</span>
                      <span className="font-body text-gray-600 text-xs">{m.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed text-base mt-8">
            None of these are the fault of the individual rep. A good salesperson in a commission-only seat with a complex offer and no ramp support is being set up to fail. The model rewards the wrong behaviour and punishes the patience a considered sale needs. The best reps know this, which is why the strongest people rarely take commission-only roles for anything that takes real skill to sell.
          </p>
        </div>
      </section>

      {/* When it works */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The fit</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">When commission-only can actually work</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The model is not always wrong. There are specific conditions where commission-only is a reasonable fit. The pattern is the same in every case: the rep can earn a living income quickly, without needing months of ramp or a long cycle to get paid.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Simple, fast offer', body: 'The product can be explained and closed in a single conversation. There is little to learn and little to lose by selling it fast. The rep can be productive in days, not months.' },
              { heading: 'Short sales cycle', body: 'Deals close in the same week or the same call. The rep gets paid quickly enough that the lack of a base does not force them out before they can earn.' },
              { heading: 'Leads are supplied', body: 'The rep is handed a flow of interested prospects rather than sourcing their own. When the pipeline is provided, closing is the only variable, and commission maps to it cleanly.' },
              { heading: 'High commission per deal', body: 'The payout per close is large enough to produce a real income from a normal week of results. If a rep needs fifty deals a month to survive, the model will not hold.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Retail floors, some insurance sales, and certain high-volume consumer categories fit this shape. Most B2B services do not. If your sale involves multiple stakeholders, a cycle measured in weeks or months, and a rep who has to source their own conversations, the conditions that make commission-only work are absent.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want the cost alignment without the churn?"
        body="One call is enough to work out whether an outsourced model fits your sale better than a commission-only rep would."
      />

      {/* The alternative */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The alternative</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Keeping the upside without the downside</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The real appeal of commission-only is cost alignment: paying for output rather than carrying fixed payroll for a role that may not perform. That benefit is worth keeping. The failure points are the single-person fragility and the missing infrastructure around the rep. The alternatives keep the first and remove the second.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Outsourced sales', note: 'You pay for a team that supplies its own targeting, outreach systems, qualification process, management, and reporting. The engagement is priced so the incentive to perform stays aligned, but there is a system behind the results rather than one person carrying all the risk. Outsourced sales typically runs 30 to 50 percent less than the fully loaded in-house cost.' },
              { q: 'A fractional sales team', note: 'Instead of one full-time seat or one commission-only rep, you get part-time access to a team and a sales leader. The cost is variable, the capability is broader than a single hire, and there is process and management built in from the start.' },
              { q: 'Performance-structured outsourcing', note: 'Many outsourced engagements build accountability into the structure directly, for example replacing no-show meetings or reporting on leading metrics weekly. You get the pay-for-output feel of commission-only with standards and infrastructure that a lone rep cannot provide.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              The question is not really commission-only versus a salary. It is whether you want sales results to depend on one person's willingness to work without a safety net, or on a system built to produce results and priced so both sides are aligned on output.
            </p>
          </div>
        </div>
      </section>

      {/* How to decide */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The decision</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How to decide what your sale needs</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Before you post a commission-only role, answer four questions honestly. They tell you whether the model fits or whether you are about to spend months recruiting for a seat that will keep turning over.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Can a new rep close a deal in their first week?', note: 'If yes, commission-only may hold. If it takes weeks of ramp, the pay model will force people out before they are productive.' },
              { q: 'Do you supply the leads, or does the rep source them?', note: 'Supplied leads suit commission-only. If the rep has to build their own pipeline with no base, the risk they carry is usually too high to keep them.' },
              { q: 'Is your sale simple and transactional, or complex and consultative?', note: 'Simple and transactional can work on commission-only. Complex and consultative almost never does.' },
              { q: 'Do you actually want the cost alignment more than the specific pay model?', note: 'If it is the alignment you want, an outsourced or fractional model gives you that with infrastructure the commission-only rep will never have.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            If your honest answers point away from commission-only, that is useful to know before you invest the time. The instinct behind the model, paying for results, is right. The mechanism is just often the wrong one for the kind of sale you are running.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Go deeper</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full number breakdown for both options.' },
              { to: '/fractional-sales-team', label: 'What Is a Fractional Sales Team?', desc: 'Part-time access to a team and a sales leader.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means, how it works, and who it fits.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'A diagnostic for knowing when to make the move.' },
              { to: '/services', label: 'What We Do', desc: 'How an outsourced sales function is structured.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'The process behind an outsourced engagement.' },
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
          Pay for results without<br className="hidden md:block" /> betting on one person
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether an outsourced sales function fits your sale better than a commission-only rep, and what that would look like in practice.
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
