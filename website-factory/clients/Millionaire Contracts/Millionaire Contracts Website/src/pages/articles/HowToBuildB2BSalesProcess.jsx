import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Build a B2B Sales Process from Scratch',
  description: 'A practical guide to building a B2B sales process that generates consistent pipeline. Six steps covering ICP definition, outreach sequencing, qualification criteria, pipeline stages, and reporting.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/how-to-build-a-b2b-sales-process',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a B2B sales process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A B2B sales process is a defined, repeatable sequence of steps that moves a prospect from first contact to closed deal. It covers who you target, how you reach them, how you qualify them, and how you measure performance at each stage. Without a defined process, results depend on individual effort and luck rather than a system that compounds over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the stages of a B2B sales process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core stages are: prospect identification (who fits the ICP), outreach (making contact through email, LinkedIn, and phone), qualification (confirming they have the problem, budget, and authority to buy), discovery (understanding the specifics of the situation), proposal or presentation, negotiation, and close. Each stage should have defined entry criteria and a clear action that moves the prospect forward.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a B2B sales process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core architecture of a B2B sales process can be built in two to four weeks: ICP definition, outreach sequences, qualification criteria, and pipeline stages. What takes longer is iteration, adjusting the ICP based on response data, refining messaging based on what resonates, and calibrating qualification criteria based on which meetings close.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a sales process and a sales playbook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sales process defines the stages and the flow. A sales playbook adds the detail: the specific language to use at each stage, objection responses, qualification questions, discovery frameworks, and proposal templates. The process is the architecture; the playbook is the execution guide. Both are needed for a team to perform consistently without depending on individual skill.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I build a B2B sales process myself or outsource it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Building it yourself is worth doing if you have the time and sales experience. The risk is three to six months of trial and error while your pipeline stays thin. An outsourced team brings a proven process from day one and generates pipeline while the learning happens. Many businesses outsource first, then build in-house once the playbook is proven.',
      },
    },
  ],
}

const steps = [
  {
    number: '01',
    heading: 'Define your ideal customer profile with precision',
    body: [
      'Every B2B sales process starts here, and most businesses do this step too loosely. An ideal customer profile is not an industry and a company size. It is a specific set of observable criteria that tell you, before you invest time in a prospect, whether they are likely to buy.',
      'Start with your best existing customers. What do they have in common beyond the obvious? Look at company size, industry vertical, technology stack or business model, the seniority and function of the person who bought, and the specific problem that made them seek a solution. Look at the customers who stayed longest and paid most consistently. Those are the people your process should be designed to find more of.',
      'The ICP should also capture negative signals: the company characteristics or buyer profiles that consistently lead to bad deals, long sales cycles, or difficult client relationships. Knowing who not to pursue is as valuable as knowing who to target.',
      'Write the ICP down in specific, observable terms. Not "mid-sized B2B companies" but "B2B SaaS businesses with 10 to 100 employees, selling to enterprise buyers, with a sales team of at least two people and an ACV above $15,000." The more specific the ICP, the more targeted the outreach, and the higher the conversion rate at every stage of the process.',
    ],
  },
  {
    number: '02',
    heading: 'Map the buyer journey for your specific market',
    body: [
      'Your sales process needs to match the way your buyers actually make decisions, not the way you would like them to. Before designing outreach sequences or discovery frameworks, understand what the purchase journey looks like from the buyer\'s side.',
      'In most B2B markets, the buyer is not actively looking for a solution when you first reach them. They may be aware of the problem but managing around it, or not yet aware that what you offer exists. The first contact is interrupting their day, not responding to a request. This shapes everything: the tone of the outreach, the subject lines, the first message, and the ask you make in that first interaction.',
      'Map out the typical decision process: who is involved, what their concerns are, what information they need before they will agree to a call, and what happens internally after a positive conversation. In a business with a single decision-maker, the process is short. In a business where procurement, legal, and the CFO all need to weigh in, it is not. Your process needs to account for the actual dynamics, not an idealised version.',
      'The buyer journey map is also where you identify the moments of friction that slow deals down. The more specifically you understand those moments, the more you can design your process to address them before they become obstacles.',
    ],
  },
  {
    number: '03',
    heading: 'Build a multi-channel outreach sequence',
    body: [
      'Single-channel outreach is not a sales process. Sending a sequence of emails and waiting for replies is the approach of someone who has not yet built a real process. A properly constructed outreach sequence uses email, LinkedIn, and phone in a coordinated pattern based on prospect behaviour.',
      'The sequence should have clear decision points. A prospect who opens an email three times without replying gets a different next step than one who has not engaged at all. A LinkedIn connection that accepts your request and views your profile is a warmer signal than one that ignores it. The sequence adapts based on what the prospect does, not just based on days elapsed.',
      'The messaging in the sequence should do one thing: make the prospect curious enough to reply. It should not explain your whole offer, list your features, or make a detailed case for why they should buy. It should identify a problem they recognise, hint at a perspective they have not considered, or reference a result you have achieved for someone in their situation. The goal of the first message is a reply, not a sale.',
      'Plan the sequence length carefully. Most B2B outreach sequences are too short. Buying decisions take time and multiple touchpoints. A sequence that ends after three emails misses the majority of prospects who would have responded later. Seven to ten touchpoints across four to six weeks is a more effective window for most B2B markets.',
    ],
  },
  {
    number: '04',
    heading: 'Define your qualification criteria before the first call',
    body: [
      'Qualification is not something that happens during a discovery call. It starts before the call is booked. A meeting that gets on the calendar without meeting basic qualification criteria wastes the time of both parties and produces data that distorts your conversion metrics.',
      'The minimum qualification criteria for booking a meeting should include: the prospect is in the right role to influence or make the decision, the company fits the ICP, and there is at least one signal that the problem you solve is relevant to their current situation. These can be confirmed through LinkedIn research, a brief pre-qualifying question in the outreach sequence, or the prospect\'s own response to your messaging.',
      'During the meeting itself, qualification goes deeper. The classic framework covers four areas: Does the prospect have the problem? Do they have the budget or the ability to find it? Do they have the authority to make or influence the decision? And is there a timeline or urgency that makes a decision realistic in a reasonable window? A deal that fails on any of these criteria is not a real opportunity. Treating it as one distorts your pipeline and your forecast.',
      'Document the qualification criteria and apply them consistently. A sales process where qualification depends on the individual judgement of whoever took the call is not a process. It is a series of individual decisions that cannot be replicated, measured, or improved.',
    ],
  },
  {
    number: '05',
    heading: 'Design your pipeline stages and conversion benchmarks',
    body: [
      'Pipeline stages are the structured path from first contact to closed deal. Each stage should have a precise definition, a clear action that moves the prospect to the next stage, and a reason why they might exit the pipeline at that point.',
      'A basic B2B pipeline typically has five to seven stages: prospecting, contacted, engaged (replied or booked), qualified, proposal sent, negotiation, and closed. The exact stages depend on your sales cycle. What matters is that each stage represents a genuine progression in the relationship, not just time passing.',
      'Once the stages are defined, establish conversion benchmarks for each transition. What percentage of contacted prospects become engaged? What percentage of engaged prospects qualify? What percentage of qualified prospects receive a proposal and close? These benchmarks turn your pipeline from a list of deals into a predictable system. If the close rate on proposals is healthy but the qualified-to-proposal rate is low, you know exactly where to focus.',
      'Review the benchmarks monthly for the first six months. In a new process, the early numbers reflect the imprecision of early targeting and messaging. As the ICP tightens and the outreach improves, the conversion rates should improve with it. A pipeline that is not getting better over time is not being managed. It is being operated.',
    ],
  },
  {
    number: '06',
    heading: 'Build a reporting cadence that shows leading indicators',
    body: [
      'Revenue is a lagging metric. By the time a shortfall in closed deals shows up in the numbers, the problem started weeks or months earlier in the pipeline. A reporting cadence built around leading indicators gives you enough time to diagnose and fix problems before they become expensive.',
      'The metrics that matter most are the ones at the top of the funnel: emails sent and open rates, reply rates broken down by segment and message variant, conversation-to-meeting conversion rate, meeting show rate, and qualified meeting rate. These tell you whether the campaign is healthy well before the impact reaches revenue.',
      'Review leading metrics weekly. A single week of poor reply rates might be noise. Two consecutive weeks is a signal. Three weeks is a problem. Weekly review means you catch it at week two, not week eight.',
      'Monthly, review the full pipeline: conversion rates at each stage, average deal size by segment, sales cycle length, and win rate by ICP criteria. This is where you identify which parts of the process are working and which need to change. A B2B sales process that is not being actively reviewed is not a process. It is a procedure that gradually drifts from its original design until it stops producing results.',
    ],
  },
]

export default function HowToBuildB2BSalesProcess() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How to Build a B2B Sales Process from Scratch"
        description="A practical guide to building a B2B sales process that generates consistent pipeline. Six steps covering ICP definition, outreach sequencing, qualification criteria, pipeline stages, and reporting."
        path="/how-to-build-a-b2b-sales-process"
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
            <span className="section-label mb-4 block">Sales Strategy</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              How to Build a B2B Sales Process<br />
              <span className="text-mc-gold">from Scratch</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              A B2B sales process does not have to be complicated. It has to be specific, documented, and measured. This guide covers the six steps that turn individual sales effort into a system that produces consistent pipeline.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '6 steps', label: 'To a repeatable B2B sales process' },
            { value: '7 to 10', label: 'Touchpoints needed in most B2B outreach sequences' },
            { value: 'Weekly', label: 'Minimum cadence for reviewing leading metrics' },
            { value: '2 to 4 weeks', label: 'Time to build the core architecture' },
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
            Most B2B businesses do not have a sales process. They have sales activity: calls made, emails sent, meetings taken. Activity without a defined process produces results that cannot be predicted, diagnosed, or improved. When pipeline is thin, there is no way to know which part of the system broke. When it is full, there is no way to know which part is responsible.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A sales process converts activity into a system. It defines who you target, how you reach them, what qualifies them, how you move them through the pipeline, and how you measure performance at every stage. The result is a machine that produces predictable output rather than unpredictable results.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The six steps below build that machine from the ground up. Each one is worth doing properly. Skipping any of them produces a process with a gap that will eventually show up as a conversion problem somewhere downstream.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {steps.map((s) => (
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

      {/* Build vs outsource */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">Build it yourself or bring in a team?</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Building a B2B sales process from scratch takes time and produces poor results in the early months while the ICP and messaging are being calibrated. For a founder-led business, that time cost is significant. For a business that needs pipeline now, the learning curve is expensive.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            Many businesses find the most effective path is to engage an outsourced sales team first: get the process running, learn what works, and build in-house once the playbook is proven and the pipeline is consistent. The alternative, building the process internally from scratch, requires three to six months of thin pipeline before results stabilise.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                heading: 'Build in-house when:',
                points: [
                  'You have the time and sales experience to do it well',
                  'You are at a revenue stage where a full internal team makes economic sense',
                  'You already have a working playbook and want to scale it internally',
                ],
                dark: false,
              },
              {
                heading: 'Outsource when:',
                points: [
                  'You need pipeline now and cannot afford a three to six month ramp',
                  'You have tried hiring and the results have not justified the cost',
                  'You want to validate the process before committing to in-house headcount',
                ],
                dark: true,
              },
            ].map((col) => (
              <div key={col.heading} className={`rounded-xl p-6 ${col.dark ? 'bg-mc-dark border border-white/10' : 'bg-white border border-gray-100'}`}>
                <h3 className={`font-headline font-bold mb-4 ${col.dark ? 'text-mc-gold' : 'text-mc-teal'}`}>{col.heading}</h3>
                <ul className="space-y-3">
                  {col.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-mc-gold mt-2" />
                      <p className={`font-body text-sm leading-relaxed ${col.dark ? 'text-gray-300' : 'text-gray-600'}`}>{p}</p>
                    </li>
                  ))}
                </ul>
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
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'Diagnostic guide for knowing when to bring in outside help.' },
              { to: '/why-sales-outsourcing-partnerships-fail', label: 'Why Most Sales Outsourcing Partnerships Fail', desc: 'The five failure points and how to avoid them.' },
              { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you hire.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full cost breakdown for both options.' },
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
          Want the process running without<br className="hidden md:block" /> building it from scratch?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          Millionaire Contracts brings a proven sales process from day one. One call shows you exactly how it works.
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
