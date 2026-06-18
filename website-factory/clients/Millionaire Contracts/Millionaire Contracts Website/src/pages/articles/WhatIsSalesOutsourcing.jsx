import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Sales Outsourcing and Is It Right for Your Business?',
  description: 'Sales outsourcing explained: what it means, the different forms it takes, who it works for, who it does not, and how to make the decision for your specific situation.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/what-is-sales-outsourcing',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is sales outsourcing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sales outsourcing means engaging an external provider to handle part or all of your sales function. This can include prospecting, lead generation, appointment setting, full sales cycle management, or sales strategy. The provider operates as an extension of your business, with the same goals but without the overhead of a permanent hire.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between sales outsourcing and appointment setting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Appointment setting is a specific type of sales outsourcing focused on generating qualified meetings. Full sales outsourcing can cover the entire cycle from first contact to closed deal. Most businesses outsource appointment setting first and handle the closing themselves, which is the most common and cost-effective model for B2B companies under $20M revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is outsourced sales different from a sales agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sales agency typically refers to a reseller or distributor that sells on your behalf in exchange for a margin or commission. Outsourced sales is more commonly used to describe a team that operates as an extension of your internal function: they use your brand, your positioning, and your offer, but their execution replaces or supplements what an in-house team would do.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of businesses use outsourced sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'B2B businesses at growth stage are the most common users of outsourced sales. This includes SaaS companies, professional services firms, consultancies, agencies, and any business selling a service or solution to other businesses with a deal value above $5,000 and a defined target customer. Businesses with complex, highly technical products that require deep in-house expertise are less suited to full sales outsourcing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does sales outsourcing work for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sales outsourcing is often a better fit for small businesses than hiring in-house, because the cost is lower, there is no hiring risk, and the team is operational immediately. The key requirement is having a defined offer and a clear target customer. Outsourced sales cannot replace a missing offer or an unclear value proposition.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does outsourced sales cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourced sales pricing varies by scope and model. Monthly retainers for full appointment setting typically run $3,000 to $15,000 per month. Pay-per-appointment models range from $75 to $500 per qualified meeting. In most cases, outsourced sales costs 30 to 50 percent less than the fully loaded cost of an equivalent in-house hire.',
      },
    },
  ],
}

const models = [
  {
    title: 'Appointment setting',
    description: 'The provider handles outreach and meeting booking. Your team runs the sales conversations and closes the deals. The most common model for businesses that already know how to close but need more conversations.',
    bestFor: 'Businesses with a working close rate but not enough qualified meetings.',
  },
  {
    title: 'Full sales cycle outsourcing',
    description: 'The provider handles everything from prospecting to closing. Suited to businesses that want to enter a new market, test an offer, or scale without building an internal team from scratch.',
    bestFor: 'Early-stage businesses and market expansion plays.',
  },
  {
    title: 'Sales management outsourcing',
    description: 'A senior sales leader is embedded into the business to oversee an existing team. Brings strategy, process design, and coaching without the cost of a full-time VP of Sales.',
    bestFor: 'Businesses with a sales team that is underperforming relative to its potential.',
  },
  {
    title: 'Sales strategy and process design',
    description: 'The provider designs the ICP, outreach architecture, qualification criteria, and pipeline stages. The client\'s team executes. A lower-cost engagement that leaves the client with a working playbook.',
    bestFor: 'Businesses building an internal capability and needing the architecture designed correctly from the start.',
  },
]

export default function WhatIsSalesOutsourcing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="What Is Sales Outsourcing and Is It Right for Your Business?"
        description="Sales outsourcing explained: what it means, the different forms it takes, who it works for, who it does not, and how to make the decision for your specific situation."
        path="/what-is-sales-outsourcing"
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
              What Is Sales Outsourcing<br />
              <span className="text-mc-gold">and Is It Right for Your Business?</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Sales outsourcing is used by businesses at every stage to generate pipeline, close deals, and build sales capability without the cost and risk of building everything in-house. This is what it means, how it works, and how to decide if it is right for you.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '4 models', label: 'Main forms of sales outsourcing' },
            { value: '30 to 50%', label: 'Typical cost reduction vs in-house' },
            { value: '$5k+', label: 'Minimum deal value where outsourcing works best' },
            { value: 'Day 1', label: 'When a qualified outsourced team is operational' },
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
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What sales outsourcing actually means</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Sales outsourcing means engaging an external team to handle part or all of your sales function. The provider operates under your brand, uses your positioning, and works toward your revenue targets. From the buyer's perspective, they are talking to your business. From your perspective, you have a sales function running without building the internal headcount to support it.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The scope can be narrow or broad. Some businesses outsource only the prospecting and appointment setting, then close the deals themselves. Others outsource the entire cycle. Some bring in an outsourced sales leader to manage an existing team. The model depends on where the gap is.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            What sales outsourcing is not: it is not a call centre, it is not cold calling at volume, and it is not a list of leads handed to you with no context. The term gets used loosely in the market, which is why evaluating providers on process and track record matters more than taking the description at face value.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            A qualified outsourced sales team brings the infrastructure: a defined targeting methodology, multi-channel outreach sequences, qualification discipline, and reporting that shows leading indicators. The difference between that and a volume outreach shop is the difference between a sales function and a noise generator.
          </p>
        </div>
      </section>

      {/* The four models */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The models</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">The four main forms of outsourced sales</h2>
          <div className="space-y-5">
            {models.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
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

      {/* Who it works for */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The fit</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Who outsourced sales works for</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Outsourced sales produces the best results for businesses that share a few common characteristics. The offer is defined, the target customer is identifiable, and the business is ready to sell. The gap is execution volume, not clarity of what is being sold or to whom.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'B2B deal values above $5,000', body: 'The economics of outreach-to-meeting-to-close work best when deal size justifies the cost of the process. Below this threshold, the math typically does not hold.' },
              { heading: 'Defined target customer', body: 'The provider needs a specific ICP to work from. "Any business that could use our service" is not a target. "SaaS companies with 20 to 200 employees selling to enterprise" is.' },
              { heading: 'Sales cycle under 90 days', body: 'Very long sales cycles make the attribution between outreach and revenue harder to measure and slower to validate. Shorter cycles produce feedback that improves the campaign faster.' },
              { heading: 'Repeatable offer', body: 'The offer needs to be consistent enough to build outreach sequences around. Businesses that customise everything from scratch for each prospect are harder to run at outreach scale.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">Who it does not work for</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Outsourced sales is not a universal fix. There are situations where the economics do not work, where the business is not ready, or where the problem is not a sales execution problem.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'The offer is not yet defined or is still being tested in the market.',
              'The product is consumer-facing or has a very low deal value where the outreach cost per acquisition is too high.',
              'Sales require years of deep technical expertise that cannot be transferred to an external team.',
              'The business has not yet closed any customers and does not know what works.',
              'The problem is positioning or product-market fit, not pipeline volume.',
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
            If any of these apply, the priority is resolving them before investing in a sales function. An outsourced team executing into a market that does not want the offer will produce meetings, but the meetings will not convert and the engagement will feel like it failed. The failure is upstream.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Not sure if outsourced sales fits your business?"
        body="One call is enough to work out whether it is the right move for where you are, with no pitch if it is not."
      />

      {/* How to evaluate */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The decision</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How to decide if it is right for you</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The decision framework is straightforward. Answer four questions honestly.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Do you have a defined offer and a specific target customer?', note: 'If yes, you have the minimum requirements. If no, define these first.' },
              { q: 'Is your pipeline inconsistent, too thin, or too dependent on referrals?', note: 'If yes, the problem is likely execution volume, not the offer.' },
              { q: 'Have you tried hiring sales reps and not gotten consistent results?', note: 'If yes, you likely have a process gap that outsourcing can address faster than rehiring.' },
              { q: 'Is the cost of building in-house justified by your current revenue stage?', note: 'A fully loaded in-house SDR costs $110,000 to $150,000 per year. Outsourced runs at a fraction of that.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              If you answered yes to questions one and two, outsourced sales is likely the right fit. If you answered yes to three or four as well, it is almost certainly faster and lower risk than rebuilding an in-house function.
            </p>
          </div>
        </div>
      </section>

      {/* What Millionaire Contracts offers */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What Millionaire Contracts brings to an outsourced engagement</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Millionaire Contracts operates as an outsourced sales function, not a lead generation service. The difference matters. A lead generation service hands you a list. An outsourced sales function handles targeting, outreach, qualification, and meeting booking as an integrated process, then reports on the health of that process with leading indicators.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The team is built from commercially sharp professionals with experience across B2B markets. The 65 percent average meeting success rate is not a product of volume. It is a product of qualification discipline: only booking meetings that meet defined entry criteria, and standing behind the quality of what gets booked.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'Every engagement starts with building the ideal customer profile from your best existing clients. Outreach does not start until the targeting is precise.' },
              { heading: 'Multi-channel sequences', body: 'Email, LinkedIn, and phone coordinated by prospect behaviour. Not spray and pray. Signal-driven sequencing that improves as data comes in.' },
              { heading: 'Full accountability', body: 'No-show replacement. Weekly reporting on leading metrics. Performance standards built into the engagement structure from day one.' },
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
              { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model with what drives the number.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full number breakdown for both options.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'Diagnostic guide for knowing when to make the move.' },
              { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you sign.' },
              { to: '/why-sales-outsourcing-partnerships-fail', label: 'Why Most Sales Outsourcing Partnerships Fail', desc: 'The five failure points and how to avoid them.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable pipeline.' },
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
          Find out if outsourced sales<br className="hidden md:block" /> is the right fit for you
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether your business is in the right position to benefit from outsourced sales and what that would look like in practice.
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
