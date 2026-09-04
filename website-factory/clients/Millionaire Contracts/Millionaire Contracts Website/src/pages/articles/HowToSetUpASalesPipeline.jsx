import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Set Up a Sales Pipeline in Your CRM',
  description: 'A practical, CRM-agnostic guide to setting up a sales pipeline: how to define stages that map to the buyer decision, entry and exit criteria, logging discipline, what to track, and the mistakes to avoid.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/how-to-set-up-a-sales-pipeline',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a sales pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sales pipeline is the structured view of how deals move from first contact to closed. Each stage represents a step in the buyer decision, and every open opportunity sits in one stage with a defined next action. Set up well, the pipeline tells you where each deal stands, what has to happen next, and whether the forecast is realistic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many stages should a sales pipeline have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most B2B pipelines work best with four to six stages. Enough to reflect the real steps a buyer takes, few enough that reps actually keep them updated. If you cannot describe in one sentence what has to be true for a deal to be in a stage, you have too many. Add stages only when each one changes what you do next.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are entry and exit criteria for a pipeline stage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entry criteria are the conditions that must be true for a deal to be in a stage. Exit criteria are what must be true to move it to the next stage. For example, a deal enters Discovery Complete only when the problem, its impact, and the decision process are all understood. Criteria make a stage mean the same thing for every deal and every rep, which is what makes a forecast trustworthy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you keep a sales pipeline clean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Set one rule and hold it: every open deal has a scheduled next action with a date. Review deals that have not moved and either advance them, push them with a real reason, or close them as lost. A pipeline full of stalled deals hides the real number. Closing lost is not failure, it is accuracy, and it keeps the pipeline reflecting reality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should you track in a sales pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep the field list short so it gets filled. For each deal, track the current stage, the next action and its date, deal value, expected close date, days in the current stage, lead source, and the reason for any close lost. That is enough to see stage-by-stage conversion, spot deals that are aging, and understand where deals are being won and lost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most common sales pipeline mistake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The two most common mistakes are stages that describe your internal process instead of the buyer decision, and deals sitting in a stage with no next step. Stages like Demo Done measure your activity, not the buyer commitment that predicts a close. Deals with no next action are not in play, they are wishes. Fixing both makes the pipeline predictive rather than decorative.',
      },
    },
  ],
}

const stages = [
  {
    title: 'Qualified lead',
    description: 'The contact fits your ideal customer profile, has a problem you solve, and has agreed to a real conversation. This is the top of the pipeline, not a raw list of names.',
    entersWhen: 'Fit is confirmed and the prospect has agreed to talk.',
  },
  {
    title: 'Discovery complete',
    description: 'You understand the problem, what it is costing them, and how the decision gets made. You know who is involved and what has to be true for them to move.',
    entersWhen: 'Problem, impact, and decision process are all understood.',
  },
  {
    title: 'Solution agreed',
    description: 'The buyer agrees your approach fits their problem and has asked to see a proposal or scope. They have moved from looking to evaluating.',
    entersWhen: 'The buyer confirms the fit and requests a proposal.',
  },
  {
    title: 'Proposal under review',
    description: 'The decision maker has the proposal and a date to decide by. The commercial terms are on the table and the buyer is comparing them against their alternatives.',
    entersWhen: 'The proposal is with the decision maker and a decision date is set.',
  },
  {
    title: 'Verbal commitment',
    description: 'The buyer has said yes in principle. What remains is contracting, procurement, or sign-off. The selling is done and the deal is being finished.',
    entersWhen: 'The buyer has committed and only paperwork remains.',
  },
]

export default function HowToSetUpASalesPipeline() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How to Set Up a Sales Pipeline in Your CRM"
        description="A practical, CRM-agnostic guide to setting up a sales pipeline: how to define stages that map to the buyer decision, entry and exit criteria, logging discipline, what to track, and the mistakes to avoid."
        path="/how-to-set-up-a-sales-pipeline"
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
              How to Set Up a Sales Pipeline<br />
              <span className="text-mc-gold">in Your CRM</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              A sales pipeline is only useful when it reflects reality. This is how to define stages that map to the buyer decision, set clear criteria for each stage, and keep the pipeline clean enough to forecast from. The principles work in any CRM.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'Buyer-led', label: 'Stages map to the buyer decision, not your process' },
            { value: 'Entry + exit', label: 'Every stage carries defined criteria' },
            { value: 'Next step', label: 'Every open deal has a scheduled next action' },
            { value: 'One record', label: 'The CRM is the single source of truth' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why setup matters */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The starting point</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">A pipeline is only as good as its definitions</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A sales pipeline is the map of how a deal moves from first contact to closed. Set up well, it tells you where every opportunity stands, what has to happen next, and whether the number is realistic. Set up badly, it becomes a list of names that nobody trusts and nobody updates.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The difference is not the CRM. The same tool can hold a pipeline that forecasts accurately or one that hides the truth. The difference is in how the stages are defined and how the pipeline is maintained. Get those two things right and any CRM will do the job.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            What follows is the setup in order: define the stages around the buyer, set entry and exit criteria for each one, enforce a next-step rule, keep the pipeline clean, and track the few things that matter. Each step is CRM-agnostic. The names of the fields will differ, the logic will not.
          </p>
        </div>
      </section>

      {/* Map to the buyer */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Step one</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Define stages around the buyer decision</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The most common setup mistake is naming stages after your own activity. Demo Done, Proposal Sent, Follow Up Made. These describe what your team did, not what the buyer decided. A deal can have a demo, a proposal, and three follow-ups and still be going nowhere.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Good stages describe the buyer state. What has the buyer acknowledged, agreed, or committed to? Those are the things that predict a close, because they measure commitment rather than effort. A stage should move forward only when the buyer has moved forward, not when your team has been busy.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            The test is simple. Read each stage name and ask whether it describes something the buyer has done or something you have done. If it is about you, rewrite it. Sending a proposal is your activity. The buyer putting that proposal in front of a decision maker with a date to decide is the state that matters.
          </p>
        </div>
      </section>

      {/* A default pipeline */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>A working example</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">A five-stage pipeline you can adapt</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            This is a default B2B pipeline built around the buyer decision. Most businesses can start here and adjust the stage names to match how their own buyers actually move. Note the entry condition on each one. That condition is what keeps the stage honest.
          </p>
          <div className="space-y-5">
            {stages.map((m, i) => (
              <div key={m.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">Enters when:</span>
                      <span className="font-body text-gray-600 text-xs">{m.entersWhen}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed mt-8">
            Closed sits after these as two outcomes, Closed Won and Closed Lost. Keep them separate and always record a reason for a loss. Those reasons are some of the most useful data the pipeline produces.
          </p>
        </div>
      </section>

      {/* Entry and exit criteria */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Step two</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Set entry and exit criteria for every stage</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A stage without criteria means different things to different people. One rep moves a deal to Proposal when they email a quote. Another waits until the decision maker has confirmed a date. The forecast built on those two reps is meaningless because the same stage holds two different realities.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Criteria fix this. For each stage, write down what must be true for a deal to enter and what must be true for it to leave. Keep them short and observable. A rep should be able to look at a deal and know, without judgment calls, whether it belongs in the stage.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Make criteria observable', body: 'Base them on things you can point to: a confirmed decision date, a named decision maker, a stated budget. Avoid criteria that rest on how a rep feels the call went.' },
              { heading: 'One clear condition to advance', body: 'Each stage should have a single, obvious condition that lets a deal move forward. If it takes a paragraph to explain, the stage is doing too much.' },
              { heading: 'Allow deals to move back', body: 'If a deal no longer meets a stage criteria, move it back. A deal that was verbal but has gone quiet is not a late-stage deal. Honest stages beat optimistic ones.' },
              { heading: 'Write them where reps see them', body: 'Put the criteria in the CRM stage descriptions or a short one-page reference. Criteria that live only in a manager head are not being applied.' },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            When every stage has criteria, the pipeline becomes a shared language. A deal in Discovery Complete means the same thing whoever owns it, and the numbers you roll up mean something.
          </p>
        </div>
      </section>

      {/* Next step rule */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Step three</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Enforce one rule: every deal has a next step</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            This is the single rule that keeps a pipeline alive. Every open deal must have a scheduled next action with a date. A deal with no next step is not in play. It is a wish. The rule is easy to state and it is the one most often broken.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The discipline behind it is logging. Update the deal the same day the interaction happens, while the detail is fresh. Keep notes short and factual: what was discussed, what was agreed, what happens next and when. You are not writing a report, you are leaving the next action clear enough that anyone could pick it up.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            When this rule holds, the pipeline stops being a snapshot and becomes a working list. Every morning a rep can open the CRM and see exactly what to do, in order, with no guessing. That is the point of setting it up.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want a pipeline that fills itself with qualified deals?"
        body="A clean pipeline still needs a steady flow of the right conversations going into it. One call is enough to see whether outsourced sales fits how you sell."
      />

      {/* Keeping it clean */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Step four</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Keep the pipeline clean</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A pipeline decays if nobody maintains it. Deals stall, close dates slip, and old opportunities pile up until the forecast is fiction. Cleaning is not a one-time task, it is a weekly habit. Review the deals that have not moved and make a call on each one.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            For every stalled deal there are three honest options. Advance it, because something real has changed. Push it, with a specific reason and a new date. Or close it lost, because it is not going to happen. What you cannot do is leave it sitting with a close date that keeps sliding to the last day of the quarter.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Closing a deal lost is not an admission of failure. It is accuracy. A pipeline that only ever grows is not a pipeline, it is a graveyard. The businesses that forecast well are the ones willing to close deals lost early, so the number they are left with is one they can act on.
          </p>
        </div>
      </section>

      {/* What to track */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Step five</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Track the few things that matter</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The temptation is to capture everything. Resist it. Every field you add is a field someone has to fill, and a pipeline that is tedious to update stops being updated. Keep the list short enough that reps keep it current without thinking about it.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Stage and next action', body: 'Where the deal sits and what happens next, with a date. This is the core of the pipeline and the two fields you never let slip.' },
              { heading: 'Deal value and close date', body: 'What the deal is worth and when you expect it to close. These two turn the pipeline into a forecast you can plan around.' },
              { heading: 'Days in stage', body: 'How long the deal has sat where it is. Aging deals are the early warning that something has stalled and needs attention.' },
              { heading: 'Source and loss reason', body: 'Where the deal came from and, if lost, why. Over time this shows which sources produce real revenue and where deals are being lost.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            With these in place you can see stage-by-stage conversion, spot the deals that are aging, and understand where you win and where you lose. That is enough to run a pipeline well. Add more only when a specific decision needs it.
          </p>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Avoid these</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The common pipeline mistakes</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Most broken pipelines fail in the same few ways. If your forecast keeps missing, check this list first. The fixes are usually setup and discipline, not the CRM.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Stages that describe your process, not the buyer decision, so the pipeline measures activity instead of commitment.',
              'Deals sitting in a stage with no next step, which quietly turn the pipeline into a list of wishes.',
              'No exit criteria, so the same stage means different things to different reps and the numbers cannot be trusted.',
              'Too many stages, so updating the CRM becomes a chore and reps stop doing it accurately.',
              'Close dates that never move or always land on the last day of the quarter, which makes the forecast fiction.',
              'Treating the CRM as a reporting task for managers rather than the working record reps actually run their day from.',
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
            Fix the stages and the next-step rule first. Those two changes alone move most pipelines from decorative to predictive. Everything else is refinement.
          </p>
        </div>
      </section>

      {/* How Millionaire Contracts helps */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">A clean pipeline still needs deals to fill it</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A well-built pipeline organizes the deals you have. It does not create new ones. If the top of the pipeline is thin, the discipline downstream cannot fix it. That is the gap Millionaire Contracts fills: a steady flow of qualified conversations entering the pipeline, so the structure you built has something to work with.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            We run outreach, qualification, and meeting booking as an integrated process, and we only book meetings that meet defined entry criteria. That is what sits behind our 65 percent average meeting success rate, and it is how we have helped scale more than 20 companies. Meetings that meet real criteria drop into your pipeline as qualified leads, not names your team has to sort through.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'Every engagement starts by building the ideal customer profile from your best clients, so the deals entering your pipeline are ones worth working.' },
              { heading: 'Qualified handoff', body: 'Meetings are booked against defined criteria, so a deal arrives in your pipeline already meeting the entry bar for a real conversation.' },
              { heading: 'Leading indicators', body: 'Weekly reporting on the metrics ahead of revenue, so you can see the health of the top of your pipeline before it shows up in the number.' },
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
              { to: '/what-is-a-sales-pipeline', label: 'What Is a Sales Pipeline?', desc: 'The concept explained before you build one.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable pipeline.' },
              { to: '/lead-qualification-framework', label: 'A Lead Qualification Framework That Works', desc: 'How to decide which leads earn a pipeline stage.' },
              { to: '/how-to-build-a-sales-cadence', label: 'How to Build a Sales Cadence', desc: 'The outreach that feeds the top of the pipeline.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'When to run sales in-house and when to outsource it.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'How an engagement with Millionaire Contracts runs.' },
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
          Build the pipeline.<br className="hidden md:block" /> We will help fill it.
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether a steady flow of qualified meetings into your pipeline is the right next move, and what that would look like for your business.
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
