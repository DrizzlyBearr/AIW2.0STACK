import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '5 Signs Your Business Needs an Outsourced Sales Team',
  description: 'Most businesses that need outsourced sales do not realise it until they have spent months trying to fix the wrong problem. These five signs tell you where the issue actually sits.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/five-signs-you-need-outsourced-sales',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if I need an outsourced sales team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The clearest signals are: your pipeline is inconsistent despite having a product that closes well, you are spending founder time on prospecting, you have tried hiring salespeople and it has not produced results, or your revenue has flatlined without an obvious product or market reason. Any one of these points to a sales execution gap, not a product problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is outsourced sales right for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourced sales is often a better fit for small businesses than hiring in-house. A fully loaded in-house SDR costs $110,000 to $150,000 per year before you see results. An outsourced team is operational immediately, carries no hiring risk, and costs a fraction of that. For businesses under $10M revenue, outsourced is typically faster and lower risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between outsourced sales and a freelance salesperson?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A freelance salesperson is a single individual with their own methods. An outsourced sales team brings a full sales operation: ICP development, outreach infrastructure, sequence management, rep oversight, and reporting. The difference is between a person and a process.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is outsourced sales NOT the right answer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourced sales is not the right answer when you do not have a defined offer, when your product is still in development, or when you have no idea who your ideal customer is. Sales execution cannot fix a positioning problem. Get the offer clear first, then bring in the team to sell it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can an outsourced sales team produce results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-run outsourced sales engagement should produce first meetings within two to three weeks of launch. Pipeline that converts to revenue typically follows within 30 to 90 days depending on your sales cycle length. Compare that to a three to six month ramp for an in-house hire.',
      },
    },
  ],
}

const signs = [
  {
    number: '01',
    heading: 'Your pipeline is inconsistent and you cannot explain why',
    body: [
      'Some months the calendar is full. Other months it is empty. You cannot point to a specific reason for the difference, and you cannot reliably predict what next month will look like. This is not a market problem. It is a process problem.',
      'Consistent pipeline comes from consistent outreach. When there is no systematic, repeatable process for generating conversations, revenue mirrors the attention given to sales in any given week. Founders give sales full attention when things are quiet, and stop paying attention to it the moment delivery demands increase. The result is a cycle of feast and famine.',
      'An outsourced sales team breaks this cycle because sales execution is not competing with delivery. The outreach runs on schedule regardless of what else is happening in the business. Pipeline becomes something you can forecast instead of something you hope for.',
      'If you have been in business for more than a year and still cannot predict your next month of revenue with reasonable confidence, the pipeline is not an occasional problem. It is the structural problem.',
    ],
  },
  {
    number: '02',
    heading: 'You are spending founder or executive time on prospecting',
    body: [
      'When the person who should be building the product, managing the team, or serving existing clients is also the one making cold calls and sending outreach emails, the business has a resource allocation problem.',
      'Founder-led sales is appropriate in the earliest stages, when you are still figuring out what the market wants and every conversation is research as much as it is sales. Once that discovery phase is over and you have a repeatable offer, founder time on prospecting is expensive. The opportunity cost of a founder doing outreach is far higher than the cost of a dedicated sales team doing the same work at scale and with better process.',
      'The signal to watch for is this: are you choosing between working on the business and working in the business every week, because sales takes up the time that should go to growth? If the answer is yes, the business needs a sales function that does not depend on you.',
      'Outsourcing the sales function does not mean abandoning it. The founder should still be close to what the team is hearing in the market. But the daily execution, the outreach, the follow-ups, the meeting qualification, should be handled by people whose entire job is to do them well.',
    ],
  },
  {
    number: '03',
    heading: 'You have tried hiring sales reps and it has not worked',
    body: [
      'You hired someone. They were enthusiastic in the interview. Three months in, the pipeline was thin. Six months in, you were having difficult conversations about performance. At nine months, they were gone and you were starting over.',
      'This pattern is more common than most businesses admit. Hiring sales talent is genuinely difficult. The skills that make someone effective in an interview are not the same skills that generate pipeline. Without a defined ICP, a structured outreach process, and proper sequence infrastructure, even a capable rep will underperform. You cannot hire your way out of a process problem.',
      'Outsourced sales removes the hiring problem entirely. You are not employing an individual who needs to be recruited, onboarded, managed, and replaced if it does not work. You are engaging a team that already has the process, the tools, and the track record. If performance falls short, that is the provider\'s problem to solve, not a hiring decision you need to undo.',
      'If you have been through one or more sales hire cycles without lasting results, the issue is almost never the individual rep. It is the absence of the infrastructure they needed to succeed. An outsourced team brings that infrastructure with them.',
    ],
  },
  {
    number: '04',
    heading: 'Your close rate is healthy but your conversation volume is too low',
    body: [
      'This is one of the clearest diagnostic signals in B2B sales. When a business closes a high percentage of the meetings it gets but does not get enough meetings, the problem is not the product, the pitch, or the pricing. The problem is top-of-funnel volume.',
      'A 40 percent close rate on 5 meetings per month produces 2 new clients. The same close rate on 20 meetings per month produces 8. The offer is working. The execution on generating conversations is not.',
      'Appointment setting is exactly this function: generating qualified conversations at volume, consistently. An outsourced appointment setting team can take a business with a working close rate and compound its revenue by solving the only problem that actually exists, which is not enough opportunities in the pipeline.',
      'Before concluding that the offer needs rebuilding or the pricing needs to change, check whether the close rate holds up on the meetings you do get. If it does, the fix is not a new strategy. It is more of what is already working.',
    ],
  },
  {
    number: '05',
    heading: 'Revenue has been flat for more than two consecutive quarters',
    body: [
      'Growth stalls for two reasons: the market does not want what you are selling, or you are not getting in front of enough of the market. These require different fixes. Confusing one for the other is costly.',
      'If you have existing clients who are satisfied, if referrals come in occasionally and convert well, and if the clients you do close stay and pay, the market wants what you are selling. The flatness is not a product problem. It is a reach problem. The business is not generating enough new conversations to produce growth beyond what referrals and word of mouth deliver.',
      'Two flat quarters is a signal worth taking seriously. A third flat quarter is a pattern. Flat revenue with a working product means the business is not growing at the pace it could, and the gap between current revenue and potential revenue is widening every month that outreach does not run.',
      'An outsourced sales team addresses this directly. The pipeline starts moving, the calendar fills, and the close rate that already works starts compounding into growth instead of sitting idle waiting for inbound leads.',
    ],
  },
]

export default function FiveSignsYouNeedOutsourcedSales() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="5 Signs Your Business Needs an Outsourced Sales Team"
        description="Most businesses that need outsourced sales do not realise it until they have spent months trying to fix the wrong problem. These five signs tell you where the issue actually sits."
        path="/five-signs-you-need-outsourced-sales"
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
            <span className="section-label mb-4 block">Diagnostic Guide</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              5 Signs Your Business Needs<br />
              <span className="text-mc-gold">an Outsourced Sales Team</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most businesses that need outsourced sales do not realise it until they have spent months trying to fix the wrong problem. These five signs tell you where the issue actually sits.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '3 to 6 months', label: 'Average in-house sales rep ramp time' },
            { value: '$110k+', label: 'Fully loaded in-house SDR cost per year' },
            { value: '2 to 3 weeks', label: 'Time to first meeting with outsourced sales' },
            { value: '65%', label: 'Millionaire Contracts average meeting success rate' },
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
            The decision to outsource sales rarely comes with a clear moment of certainty. Most businesses arrive at it after a period of trying other things: a new hire that did not work out, a marketing push that brought in leads but not the right ones, or a stretch of months where revenue flatlined without an obvious explanation.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The five signs below are not hypothetical. They are the patterns that show up repeatedly in businesses that have a working offer but are not growing at the pace they should be. If more than one of them describes your current situation, outsourced sales is likely the faster fix.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The signs are diagnostic, not prescriptive. Read them against your own business and draw your own conclusions.
          </p>
        </div>
      </section>

      {/* Signs */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {signs.map((s) => (
            <div key={s.number} className="border-l-4 border-mc-gold pl-8">
              <div className="font-headline text-5xl font-black text-mc-gold/20 leading-none mb-2">{s.number}</div>
              <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">{s.heading}</h2>
              <div className="space-y-4">
                {s.body.map((para, i) => (
                  <p key={i} className="font-body text-gray-700 leading-relaxed text-base">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA
        heading="Recognize more than one of these?"
        body="If two or more of these signs describe your business, the gap is execution, not strategy. One call is enough to tell you whether outsourced sales is the right fix."
      />

      {/* When outsourced is NOT the answer */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">When outsourced sales is not the answer</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Outsourced sales solves a sales execution problem. It does not solve an offer problem, a positioning problem, or a product problem. Before bringing in an external sales team, be honest about which problem you actually have.
          </p>
          <ul className="space-y-4 mb-6">
            {[
              'You do not have a defined offer with a clear value proposition and a specific target customer.',
              'The product is still in development and not ready to sell.',
              'The few meetings you have had have not converted and you do not know why.',
              'You have no data on who your best customers are or what they have in common.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center mt-0.5">
                  <span className="text-gray-500 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-gray-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <p className="font-body text-gray-700 leading-relaxed">
            If any of these apply, get clear on the offer before investing in sales execution. A good sales team will tell you this themselves. One that does not is worth being cautious about.
          </p>
        </div>
      </section>

      {/* What changes */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">What actually changes when you get the right team</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The difference between a sales function that works and one that does not is rarely the quality of the product. It is the consistency of the outreach, the precision of the targeting, and the discipline of the qualification process.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            When those three things are in place, the close rate you already have starts producing the growth you expected when you built the offer. The meetings are with people who have the problem, have the budget, and are in a position to make a decision. Conversations are shorter and the close rate improves, not because the pitch changed but because the room changed.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Predictable pipeline', body: 'Outreach runs on schedule every week. Pipeline stops being a function of how much attention sales gets and becomes something you can plan around.' },
              { heading: 'Qualified conversations', body: 'Every meeting meets defined entry criteria. No more calls with people who cannot buy, do not need it, or are not the decision-maker.' },
              { heading: 'Faster time to revenue', body: 'No three-month ramp. No hiring risk. An outsourced team is operational from day one and producing meetings within the first two to three weeks.' },
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
              { to: '/why-your-pipeline-empties-when-you-get-busy', label: 'Why Your Pipeline Empties Every Time You Get Busy', desc: 'The feast or famine cycle and how to end it.' },
              { to: '/inconsistent-revenue', label: 'Why Your Revenue Is Inconsistent and What to Do About It', desc: 'The pattern behind revenue that swings month to month.' },
              { to: '/sales-stall-without-you', label: 'Why Sales Stall Every Time You Step Back from Them', desc: 'When you are the bottleneck and how to remove it.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost Comparison', desc: 'The full number breakdown for both options.' },
              { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model explained with what drives the number.' },
              { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you sign.' },
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
          Recognise more than one of these signs?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to tell you whether outsourced sales is the right fix for where you are right now.
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
