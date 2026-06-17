import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Most Sales Outsourcing Partnerships Fail (And How to Avoid It)',
  description: 'Most outsourced sales engagements that fail do so for predictable reasons. This article explains the five most common failure points and what separates partnerships that deliver from ones that disappoint.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/why-sales-outsourcing-partnerships-fail',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do outsourced sales partnerships fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common causes are starting without a defined ideal customer profile, choosing a provider based on price rather than process, no accountability structure in the contract, measuring success by activity metrics instead of qualified pipeline, and the client disengaging after sign-off. Most failures are predictable and avoidable if both parties are honest about what they each need to bring to the engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if an outsourced sales provider is serious about results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask them what happens when a meeting does not show. Ask them what metrics they report on and how frequently. Ask them to describe, in specific terms, what a qualified appointment means by their standard. Providers with real accountability are specific and direct. Providers running volume plays hedge and generalise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should an outsourced sales contract include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-structured outsourced sales contract should include: a defined ICP and qualification criteria, a clear definition of what counts as a qualified meeting, reporting frequency and the metrics covered, a no-show replacement policy, performance thresholds and what happens if they are not met, and exit terms. If the contract is vague on any of these, get clarity before signing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the client\'s responsibility in an outsourced sales engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The client needs to define who they are selling to, show up to the meetings that get booked, provide feedback on meeting quality, and stay close enough to the campaign to catch positioning drift early. Outsourcing the execution does not mean outsourcing the judgment. The client who disengages after signing is the most common source of failed engagements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should an outsourced sales engagement run before judging results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First meetings should appear within two to three weeks. By weeks four to six, there should be enough data on open rates, reply rates, and meeting quality to assess whether the campaign is healthy. Do not wait three months to review performance. Weekly leading metrics prevent small problems from becoming expensive ones.',
      },
    },
  ],
}

const reasons = [
  {
    number: '01',
    heading: 'The engagement starts without a defined ideal customer profile',
    body: [
      'The most avoidable failure in outsourced sales is also the most common. A business signs with a provider, the provider starts outreach, and three months later the meetings that do come in are not converting. The diagnosis is almost always the same: nobody defined who the right customer actually is before the campaign launched.',
      'An ideal customer profile is not a job title. It is a set of specific, observable criteria: company size, industry vertical, technology stack or business model indicators, seniority of the decision-maker, and some signal that the pain being solved is active. Without this, the provider is targeting anyone who looks roughly like a potential buyer. The meetings reflect that.',
      'A provider worth working with will insist on building the ICP before outreach starts. They will ask specific questions about your best existing clients, what made those deals close, what the losing deals had in common, and where the most satisfied clients came from. If a provider wants to start outreach before those conversations have happened, that is a flag.',
      'The ICP should be a live document, not a one-time exercise. It should update as the campaign generates data. If the reply rate on one segment is double the average, that is a signal to weight it more heavily. Campaigns that do not iterate on their targeting get worse over time. Campaigns that do get better.',
    ],
  },
  {
    number: '02',
    heading: 'The provider measures success by activity, not by pipeline quality',
    body: [
      'Emails sent. Calls made. Meetings booked. These are the metrics many outsourced sales providers lead with in their reporting. They are also the metrics that tell you the least about whether the engagement is actually working.',
      'Activity metrics are easy to hit. You can send a thousand emails in a week with no targeting discipline and report impressive numbers. The meetings booked from that kind of outreach will have poor show rates, weak intent, and low conversion downstream. But the monthly report will look fine.',
      'What you actually need to see is the quality funnel: positive reply rate, conversation to meeting conversion, show rate, and the percentage of meetings that progress to a proposal or next step. If a provider cannot give you this data, they either do not have it or they do not want you to see it. Neither is acceptable.',
      'The question to ask before you sign is simple: what does your reporting look like and can I see an example? A provider with nothing to hide will show you the full picture. One that leads with volume metrics and avoids talking about downstream conversion has built a model around looking busy rather than being effective.',
    ],
  },
  {
    number: '03',
    heading: 'There is no accountability structure in the contract',
    body: [
      'A contract that only specifies what the provider will do, without specifying what happens when it does not meet the standard, is a contract that protects the provider and not the client.',
      'Accountability in an outsourced sales contract means concrete answers to concrete questions. What happens if the agreed monthly meeting target is not reached? What is the no-show replacement policy? What are the quality criteria that define a qualified meeting, and what recourse does the client have if meetings consistently do not meet them? What are the exit terms if performance does not improve after a defined review period?',
      'Providers who are confident in their results will not resist accountability structures. They have delivered before and they are not worried about being held to a standard. Providers who push back on accountability clauses are telling you something important about their confidence in their own process.',
      'Before signing any outsourced sales contract, check what it says about performance. If the answer is vague, make it specific before you sign. A conversation about accountability before the engagement starts is far easier than a dispute about it after three months of disappointing results.',
    ],
  },
  {
    number: '04',
    heading: 'The client disengages after the contract is signed',
    body: [
      'Outsourcing the sales execution does not mean outsourcing the judgment that makes the execution work. The businesses that get the most from outsourced sales are the ones that stay close to the campaign without micromanaging it.',
      'The client needs to do specific things to protect the investment. They need to show up to the meetings that get booked. If the meetings the provider books have a poor show rate or a low conversion rate, the client needs to say so quickly and specifically, not wait until the quarterly review to mention it. They need to provide feedback that helps the provider refine the targeting and the messaging. They need to flag when the positioning in the outreach drifts from how they actually want to be presented.',
      'None of this is heavy lifting. It is a weekly review of a dashboard, a short debrief after meetings, and a direct conversation with the provider when something is not right. Clients who do this consistently get compounding returns from the engagement. Clients who sign and disappear get exactly what the provider produces without any of the refinement that makes it better over time.',
      'Think of the outsourced team as an internal function that does not sit in your building. You would not leave an internal sales team running without any oversight and expect it to improve. The same logic applies here.',
    ],
  },
  {
    number: '05',
    heading: 'The decision to hire was made on price rather than process',
    body: [
      'The cheapest outsourced sales option is almost always cheap for a reason. Either the team is junior, the process is thin, the qualification standards are low, or all three. A provider charging $2,000 per month for appointment setting is not offering the same product as one charging $5,000. The question is whether the difference is visible before you sign.',
      'Price is a proxy for process. High-quality outreach requires experienced copywriters, skilled appointment setters, proper sequence infrastructure, and a management layer that monitors quality and catches problems early. These things cost money. A provider that cannot account for where their pricing comes from has not built a real process. They have built a volume play and priced it to win the sale.',
      'The evaluation should focus on process, not price. What does the ICP build look like? How do they sequence outreach? How do they handle a prospect who opens but does not reply? What does their reporting cover? How do they define a qualified meeting? These questions reveal the operation behind the price. A provider with a real process can answer all of them specifically. One without cannot.',
      'Cheap outsourced sales does not save money. It costs you the three to six months you spend on an engagement that does not deliver, the brand exposure from low-quality outreach, and the opportunity cost of not having a working pipeline during that time. Pay for the process. It is less expensive than not having one.',
    ],
  },
]

export default function WhySalesOutsourcingFails() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Why Most Sales Outsourcing Partnerships Fail (And How to Avoid It)"
        description="Most outsourced sales engagements that fail do so for predictable reasons. The five most common failure points and what separates partnerships that deliver from ones that disappoint."
        path="/why-sales-outsourcing-partnerships-fail"
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Buyer Intelligence</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Why Most Sales Outsourcing Partnerships Fail<br />
              <span className="text-mc-gold">(And How to Avoid It)</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most outsourced sales engagements that fail do so for predictable reasons. The five failure points below are avoidable. Most buyers never ask the questions that would surface them before signing.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '3 to 6 months', label: 'Typical time wasted on a failing engagement' },
            { value: 'ICP first', label: 'Most common fix for underperforming campaigns' },
            { value: 'Weekly', label: 'Minimum reporting cadence for a healthy campaign' },
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
            Outsourced sales fails more often than it should, and almost always for the same reasons. The market is full of providers who look identical from the outside: case studies, guarantee language, a polished deck. The differences that determine whether an engagement works or does not are buried in the details of how they operate and what happens when things do not go to plan.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The five failure points below account for the majority of disappointing outsourced sales outcomes. None of them are mysteries. They are predictable, they are avoidable, and most buyers sign contracts without ever checking for them.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            Read them before you evaluate a provider. They will change the questions you ask.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {reasons.map((r) => (
            <div key={r.number} className="border-l-4 border-mc-gold pl-8">
              <div className="font-headline text-5xl font-black text-mc-gold/20 leading-none mb-2">{r.number}</div>
              <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">{r.heading}</h2>
              <div className="space-y-4">
                {r.body.map((para, i) => (
                  <p key={i} className="font-body text-gray-700 leading-relaxed text-base">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What a successful engagement looks like */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">What a successful engagement actually looks like</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The engagements that work share a small number of common characteristics. None of them require unusual circumstances or a perfect product. They require both parties to be serious about what it takes.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { heading: 'The ICP is built before outreach starts', body: 'The provider asks hard questions about who the best existing clients are, what they have in common, and what made those deals close. The campaign is built around that answer, not around a generic B2B targeting brief.' },
              { heading: 'Success is defined in writing before the contract is signed', body: 'What counts as a qualified meeting. What happens if a meeting does not show. What the reporting covers and how often it runs. What the exit terms look like. All of this is agreed before work begins.' },
              { heading: 'The client stays close without micromanaging', body: 'Weekly metrics, post-meeting feedback, and a direct line to the provider when something is off. The client treats the outsourced team as a function they own, not a service they consume.' },
              { heading: 'The campaign iterates based on data', body: 'Reply rates by segment, show rates by targeting criteria, conversion rates by message variant. The campaign that runs in month three is materially different from the one that launched in month one, because both parties have been paying attention.' },
            ].map((item) => (
              <div key={item.heading} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal mb-2">{item.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions to ask before signing */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">Five questions to ask before you sign</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Each of these maps directly to one of the failure points above. A provider who can answer all of them clearly and specifically is likely to deliver. One who hedges or goes vague on more than one is worth scrutinising further.
          </p>
          <ol className="space-y-4">
            {[
              'How do you define a qualified appointment, in specific terms?',
              'Can I see a sample of your reporting and what metrics it covers?',
              'What does your contract say about performance and no-shows?',
              'What does the ICP build process look like before outreach starts?',
              'What happens at the end of the first month if the results are not where they should be?',
            ].map((q, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                  <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-gray-700 leading-relaxed pt-1">{q}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              If you want to see how Millionaire Contracts answers each of these, the strategy call is the right place to start. The answers are specific, the reporting is live, and the accountability is written into the engagement structure.
            </p>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you hire.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'Diagnostic guide for knowing when outsourced is the right fix.' },
              { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model with what drives the number.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Side-by-side comparison with full cost breakdown.' },
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
          Ready to work with a team<br className="hidden md:block" /> that has answers to all of it?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to show you what the process looks like, what the accountability structure is, and what results look like in practice.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Book a Free Strategy Call
          </Link>
          <Link to="/how-to-choose-an-appointment-setting-company" className="inline-block border-2 border-white text-white font-headline font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
            The 7 Questions to Ask
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
