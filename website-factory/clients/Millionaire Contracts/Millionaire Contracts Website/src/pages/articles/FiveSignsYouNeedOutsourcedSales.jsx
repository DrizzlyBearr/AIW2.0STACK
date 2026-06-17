import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '5 Signs Your Business Needs an Outsourced Sales Team',
  description: 'Not sure if outsourcing your sales function is the right move? These five signs tell you when an in-house sales team is costing you more than it is producing.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/5-signs-your-business-needs-outsourced-sales',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if outsourced sales is right for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The clearest indicators are: your pipeline is inconsistent or founder-dependent, you have hired sales reps who have not produced results, your sales cycle is not documented, your cost per acquired customer keeps climbing, or you are approaching a growth stage that requires immediate pipeline without a long ramp period.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can outsourced sales work for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Outsourced sales is often better suited to small and mid-sized businesses than enterprise. You get immediate access to a senior sales operation without the overhead of a full in-house team. The model works particularly well for businesses with deal values above $5,000 where the economics of a structured sales process are clear.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between outsourced sales and a lead generation agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lead generation agency fills the top of your funnel with names. An outsourced sales function covers the full process: ICP definition, outreach, qualification, appointment setting, and in some cases closing. You are buying a sales operation, not a list.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can an outsourced sales team produce results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-structured outsourced sales engagement should produce first qualified meetings within two to three weeks of launch. Contrast this with an in-house hire, which typically takes three to six months to ramp to consistent output.',
      },
    },
  ],
}

const signs = [
  {
    number: '01',
    heading: 'Your pipeline depends entirely on you',
    body: [
      'The most common sales problem in founder-led businesses is not a bad product or a wrong market. It is that every deal flows through one person.',
      'When the founder is the only one who can open doors, qualify prospects, and close deals, the business has a ceiling. Revenue growth requires more founder hours, and founder hours are finite. The pipeline stalls the moment attention shifts to delivery, operations, or anything else.',
      'An outsourced sales team breaks this dependency. It creates a pipeline that generates without you in the room. Appointments land in your calendar from outreach you did not personally run. Qualified prospects arrive already understanding the context.',
      'If you have caught yourself thinking that growth would be faster if you could clone yourself, you are describing the problem outsourced sales solves.',
    ],
  },
  {
    number: '02',
    heading: 'You have hired sales reps who have not delivered',
    body: [
      'Hiring a sales rep who does not produce is one of the most expensive mistakes a growing business can make. The cost is not just the salary. It is the six to nine months of runway, the management time, the missed pipeline, and the delayed realisation that the hire was wrong.',
      'The failure is rarely the individual. It is the system around them. No clear ICP. No documented process. No outreach infrastructure. No accountability framework. A capable sales professional placed into an undefined environment will drift, fill their time with activity that looks like selling, and eventually leave.',
      'Outsourcing puts a tested infrastructure around the function before anyone makes a single call. The ICP is defined. The sequences are built. The qualification criteria are set. The reporting shows you whether the activity is producing. There is no guesswork about whether the rep is doing the right things.',
      'If you have had two or more sales hires not work out in the last three years, the issue is almost certainly the system, not the people. Outsourcing gives you the system first.',
    ],
  },
  {
    number: '03',
    heading: 'You have no documented sales process',
    body: [
      'Ask yourself: if your best salesperson left today, would the next person know exactly what to do? If the answer is no, you do not have a sales process. You have a set of individual habits that happen to produce results.',
      'An undocumented sales process is a liability. It cannot be scaled. It cannot be trained. It cannot be measured or improved with any precision. Every rep reinvents the wheel, and the wheel looks different every time.',
      'Outsourced sales functions come with a process. ICP definition, outreach sequencing, qualification criteria, objection handling frameworks, and handoff protocols are all documented before the first message goes out. You are not just buying activity. You are buying a repeatable system.',
      'Many businesses use an outsourced engagement to build the playbook they then bring in-house later. The documentation produced during the engagement becomes the foundation for everything that follows.',
    ],
  },
  {
    number: '04',
    heading: 'Your cost per acquired customer is climbing',
    body: [
      'Growing businesses often see revenue increase while margins compress. More customers, but each one costs more to win. Marketing spend goes up. Sales cycles lengthen. The number of touches required to close a deal increases.',
      'Rising cost per acquisition is often a qualification problem. When outreach is not targeted and meetings are not properly qualified, your closers spend time on prospects who were never going to buy. Each hour in a low-probability meeting is an hour not spent on a high-probability one.',
      'An outsourced sales team with strict qualification discipline reduces the volume of low-quality meetings reaching your senior people. Closers get fewer meetings, but the meetings they get convert at a higher rate. The cost per acquired customer falls not because you are spending less on outreach, but because you are spending it better.',
      'If your close rate has been declining while your meeting volume stays flat or grows, qualification is almost certainly the issue.',
    ],
  },
  {
    number: '05',
    heading: 'You need pipeline now, not in six months',
    body: [
      'There are moments in a business when pipeline cannot wait. A product launch. A new market entry. A growth target with a hard deadline. An investor conversation that requires demonstrable traction.',
      'In these moments, the in-house option is not viable. Posting a job takes three to four weeks. Interviewing and selecting takes two to four more. Onboarding takes one to two months. Ramp time takes three to six. By the time a new hire is producing meaningful pipeline, the window you needed to hit has passed.',
      'An outsourced sales function is operational in days. The infrastructure already exists. The team already knows how to run the process. The only input required from you is the ICP brief and the offer. First meetings can land in two to three weeks from contract sign.',
      'Speed is not always the primary reason to outsource. But when the clock is the constraint, it is the decisive one.',
    ],
  },
]

export default function FiveSignsYouNeedOutsourcedSales() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="5 Signs Your Business Needs an Outsourced Sales Team"
        description="Not sure if outsourcing your sales function is the right move? These five signs tell you when an in-house sales team is costing you more than it is producing."
        path="/5-signs-your-business-needs-outsourced-sales"
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Decision Framework</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              5 Signs Your Business Needs<br />
              <span className="text-mc-gold">an Outsourced Sales Team</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most businesses wait too long. By the time they recognise the problem clearly enough to act, they have already paid for it in missed pipeline, failed hires, and stalled growth. These five signs tell you when the in-house model has stopped working.
            </p>
          </div>
        </div>
      </div>

      {/* Key stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '3 to 6 months', label: 'Average in-house ramp time before consistent output' },
            { value: '6 to 9 months', label: 'Cost of a wrong sales hire' },
            { value: '2 to 3 weeks', label: 'Time to first meetings with outsourced sales' },
            { value: '65%', label: 'Millionaire Contracts meeting success rate' },
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
            Outsourced sales is not right for every business at every stage. But there are clear signals that the in-house model is costing you more than it is producing. These are the five most consistent ones.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            If more than two of these apply to your business right now, you are likely carrying the cost of an underperforming sales function without fully accounting for it. The cost shows up in founder hours, in hiring spend, in below-target close rates, and in the pipeline you needed last quarter that never materialised.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            Read through each one carefully. The pattern matters as much as any individual sign.
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

      {/* What to do next */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">What to do if you recognise these signs</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Recognising the problem is step one. Step two is understanding your options clearly before making a decision.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The comparison between in-house and outsourced sales is more nuanced than most providers make it. There are situations where building in-house is the right call. There are also situations where outsourcing is clearly the better path. Understanding the real cost difference between the two options is the right place to start.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            If the signs above are familiar and you want to understand exactly what outsourced sales would cost and what it would deliver for your business, the strategy call is the right next step.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/calender" className="bg-mc-gold text-white font-headline font-bold px-8 py-3 rounded-lg hover:bg-mc-gold-light transition-colors">
              Book a Strategy Call
            </Link>
            <Link to="/in-house-vs-outsourced-sales" className="border border-mc-teal text-mc-teal font-headline font-bold px-8 py-3 rounded-lg hover:bg-mc-teal hover:text-white transition-colors">
              In-House vs Outsourced: The Cost Comparison
            </Link>
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
          Recognise more than two of these signs?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One conversation is enough to show you what a properly structured sales function would look like for your business.
        </p>
        <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
          Book a Free Strategy Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
