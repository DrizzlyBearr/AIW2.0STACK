import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'B2B Appointment Setting Services: How They Work and What to Expect',
  description: 'What B2B appointment setting services actually do, what a good one includes, how qualification discipline separates real providers from volume plays, what results to expect, and how to choose.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/b2b-appointment-setting-services',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What do B2B appointment setting services do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'B2B appointment setting services find your target buyers, reach out across email, LinkedIn, and phone, qualify the ones who respond, and book them into your calendar as sales meetings. Your team runs the sales conversations and closes the deals. A good provider handles the entire top of the funnel as an integrated process, not a handoff of raw contact lists.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between appointment setting and lead generation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lead generation produces contacts and interest. Appointment setting produces confirmed meetings with qualified buyers on your calendar. Lead generation can hand you a list of names to work yourself. Appointment setting takes those prospects through outreach and qualification and books the meeting for you. Appointment setting is the more complete service because it delivers a conversation, not a data point.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes a qualified appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A qualified appointment meets defined entry criteria agreed before outreach starts. This usually covers company fit, the seniority of the person attending, a real need for your service, and a genuine willingness to have the conversation. A meeting that fails these criteria is a wasted slot on your calendar, which is why qualification discipline matters more than raw meeting count.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do B2B appointment setting services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on the model. Monthly retainers commonly run $3,000 to $15,000 per month depending on scope and outreach volume. Pay-per-appointment models range from $75 to $500 per qualified meeting. In most cases, outsourced appointment setting costs 30 to 50 percent less than the fully loaded cost of an in-house SDR, which runs $110,000 to $150,000 per year once salary, tools, and management are counted.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before appointment setting produces results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A qualified outsourced team can be operational quickly, often within the first days of an engagement once targeting and messaging are agreed. First meetings usually start landing in the first few weeks. The campaign then improves as response data comes in and the messaging and targeting are tuned. Judge the first month on activity and meeting quality, and the following months on booked meetings and pipeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose retainer or pay-per-appointment pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retainers suit businesses that want a predictable, invested partner building a durable outreach system and reporting on the health of the process. Pay-per-appointment suits businesses that want to tie cost directly to meetings and test the channel with less commitment. The risk with pay-per-appointment is that it can reward volume over quality, so the qualification criteria and no-show terms need to be clear before you sign.',
      },
    },
  ],
}

const included = [
  {
    title: 'ICP build and target list',
    description: 'The engagement starts by defining the ideal customer profile from your best existing clients, then building a precise target list. Outreach does not begin until the targeting is right. A vague list is the most common reason a campaign underperforms.',
    bestFor: 'Getting the right companies and the right people in front of the outreach from day one.',
  },
  {
    title: 'Multi-channel outreach',
    description: 'Coordinated email, LinkedIn, and phone sequencing driven by how each prospect behaves. Not a single blast on one channel. The channels reinforce each other, and the sequencing adjusts as prospects engage or go quiet.',
    bestFor: 'Reaching busy buyers who ignore any single channel on its own.',
  },
  {
    title: 'Qualification against set criteria',
    description: 'Every responding prospect is checked against the entry criteria agreed up front: company fit, seniority, need, and willingness to talk. Only the ones who meet the bar get booked. This is the step that separates a real service from a volume play.',
    bestFor: 'Protecting your calendar and your closers from meetings that were never going to convert.',
  },
  {
    title: 'Calendar booking',
    description: 'Qualified prospects are booked directly into your calendar with the context your team needs to run the call. Reminders and confirmations reduce no-shows. A good provider stands behind the meetings it books and replaces the ones that fall through.',
    bestFor: 'Handing your sales team meetings that are ready to run, not names to chase.',
  },
  {
    title: 'Reporting on leading indicators',
    description: 'Weekly reporting on the numbers that predict results: outreach sent, response rates, meetings booked, and meeting quality. Leading indicators show whether the campaign is healthy before the closed deals show up, so problems get caught early.',
    bestFor: 'Knowing the engagement is working weeks before revenue confirms it.',
  },
]

export default function B2BAppointmentSettingServices() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="B2B Appointment Setting Services: How They Work and What to Expect"
        description="What B2B appointment setting services actually do, what a good one includes, how qualification discipline separates real providers from volume plays, what results to expect, and how to choose."
        path="/b2b-appointment-setting-services"
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
            <span className="section-label mb-4 block">Appointment Setting</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              B2B Appointment Setting Services<br />
              <span className="text-mc-gold">How They Work and What to Expect</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              A B2B appointment setting service fills your calendar with qualified sales meetings so your team can focus on closing. This is what a good one actually does, what separates real qualification from volume, what results to expect, and how to choose a provider.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '65%', label: 'Average meeting success rate at Millionaire Contracts' },
            { value: '20+', label: 'Companies scaled with outsourced appointment setting' },
            { value: '30 to 50%', label: 'Typical cost reduction vs an in-house SDR' },
            { value: 'Day 1', label: 'When a qualified outsourced team is operational' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What they do */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The definition</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What appointment setting services actually do</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A B2B appointment setting service owns the top of your sales funnel. It finds the companies and people who fit your target market, reaches out to them across multiple channels, qualifies the ones who respond, and books the qualified prospects into your calendar as sales meetings. Your team takes it from there, running the conversations and closing the deals.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The point of the service is simple. Prospecting and outreach take time and consistency that most sales teams cannot protect while also closing. Appointment setting removes that work from your closers so they spend their hours in meetings with qualified buyers instead of chasing cold contacts.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            This is not the same as lead generation. Lead generation hands you a list of names and interest. Appointment setting hands you a confirmed meeting with a qualified buyer on your calendar. The difference is the difference between a data point and a conversation.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            It is also not a call centre reading a script at volume. A real appointment setting service operates as an extension of your business, using your positioning and your offer, and is judged on the quality of the meetings it books, not the number of dials it makes.
          </p>
        </div>
      </section>

      {/* What a good one includes */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>What is included</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">What a good appointment setting service includes</h2>
          <div className="space-y-5">
            {included.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">What it gets you:</span>
                      <span className="font-body text-gray-600 text-xs">{m.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification vs volume */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The real difference</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Qualification discipline vs the volume play</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Most of the difference between a good appointment setting service and a poor one comes down to one thing: whether the provider is disciplined about qualification or just chasing meeting counts. A volume play books anyone who says yes, hits a headline number, and leaves your closers to discover on the call that the meeting was never real. A disciplined service books fewer meetings that actually convert.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Agreed entry criteria', body: 'A real service defines what a qualified meeting is before outreach starts: company fit, seniority, need, and willingness to talk. A volume play measures success by the raw number of bookings.' },
              { heading: 'Meetings that show up', body: 'Confirmations, reminders, and clear context reduce no-shows. A good provider stands behind its meetings and replaces the ones that fall through rather than counting them and moving on.' },
              { heading: 'Quality reported honestly', body: 'Weekly reporting shows meeting quality, not just meeting quantity. If every report is a big number with no view of fit, the provider is optimising for the wrong thing.' },
              { heading: 'Your closers protected', body: 'The whole value of the service is giving your closers time in front of qualified buyers. Filling their calendar with unqualified calls destroys that value and burns their trust in the pipeline.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            When you compare providers, ask exactly how they define a qualified meeting and what happens when a booked meeting does not meet the criteria. The answer tells you whether you are buying qualified appointments or just booked slots.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want appointments that actually convert?"
        body="One call is enough to see what qualified meetings on your calendar would look like, with no pitch if it is not the right fit."
      />

      {/* What results to expect */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The results</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What results to expect and when</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Set expectations by phase. Appointment setting is a system that improves as data comes in, so the early weeks look different from the settled months. A qualified outsourced team can be operational quickly, often within the first days once targeting and messaging are agreed.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'First week: setup and launch', note: 'The provider builds the ICP, target list, and messaging, then launches outreach. Judge this phase on the quality of the targeting and the speed of the start, not on booked meetings yet.' },
              { q: 'First few weeks: first meetings land', note: 'Early responses come in and the first qualified meetings start hitting your calendar. Expect the messaging and targeting to be tuned as real data shows what lands with your market.' },
              { q: 'Month two onward: consistent pipeline', note: 'A tuned campaign produces a steady flow of qualified meetings. This is where a disciplined provider shows its meeting success rate. Millionaire Contracts runs a 65 percent average meeting success rate.' },
              { q: 'Ongoing: compounding improvement', note: 'The longer the campaign runs, the more the data sharpens targeting and messaging. Results should trend up, not plateau, if the provider is genuinely optimising.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              Judge the first month on activity and meeting quality. Judge the months after on booked meetings and the pipeline they create. A provider that has scaled 20 or more companies has a track record you can check against these phases.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing models */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Pricing</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How pricing works at a high level</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Appointment setting is usually priced one of two ways. Both are common, and the right one depends on how you want to balance predictability against tying cost to output.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Monthly retainer', body: 'A fixed monthly fee, commonly $3,000 to $15,000 per month depending on scope and outreach volume. Suits businesses that want an invested partner building a durable system and reporting on the health of the process.' },
              { heading: 'Pay per appointment', body: 'A set fee for each qualified meeting, commonly $75 to $500 per meeting. Suits businesses that want cost tied directly to output. The qualification criteria and no-show terms must be clear, or it can reward volume over quality.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Whichever model you choose, the useful comparison is against the alternative. A fully loaded in-house SDR costs $110,000 to $150,000 per year once salary, tools, and management are counted. Outsourced appointment setting typically costs 30 to 50 percent less than that, with no hiring risk and a team that is operational far faster.
          </p>
        </div>
      </section>

      {/* How to choose */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The decision</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How to choose a provider</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Comparing providers gets easier when you ask the questions that expose how they actually work rather than how they market themselves.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'How do you define a qualified meeting, and what happens when a booked meeting does not meet the criteria?',
              'What channels do you use, and how do they work together rather than as separate blasts?',
              'What does your reporting show each week, and does it include meeting quality or only quantity?',
              'What is your average meeting success rate, and can you point to companies you have scaled?',
              'How quickly are you operational, and what do the first weeks look like?',
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
            A provider that answers these clearly, with specifics rather than slogans, is one you can hold accountable. A provider that dodges them is selling booked slots and hoping you do not measure the quality.
          </p>
        </div>
      </section>

      {/* What Millionaire Contracts offers */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How Millionaire Contracts runs appointment setting</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Millionaire Contracts operates as an outsourced sales function, not a lead list service. Appointment setting is run as an integrated process: targeting, outreach, qualification, and booking handled end to end, then reported on with leading indicators so you can see the campaign working before the revenue confirms it.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The 65 percent average meeting success rate is a product of qualification discipline, not volume. Only meetings that meet the agreed entry criteria get booked, and the team stands behind the quality of what lands on your calendar. That discipline is how Millionaire Contracts has scaled 20 or more companies.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'Every engagement starts with building the ideal customer profile from your best existing clients. Outreach does not start until the targeting is precise.' },
              { heading: 'Multi-channel sequences', body: 'Email, LinkedIn, and phone coordinated by prospect behaviour. Signal-driven sequencing that improves as data comes in, not a single-channel blast.' },
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
              { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you sign.' },
              { to: '/appointment-setting', label: 'Appointment Setting Services', desc: 'How our appointment setting engagement works.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The models, the fit, and how to decide.' },
              { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model with what drives the number.' },
              { to: '/how-much-does-an-sdr-cost', label: 'How Much Does an SDR Cost?', desc: 'The fully loaded number for an in-house rep.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'A diagnostic for knowing when to make the move.' },
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
          See what qualified appointments<br className="hidden md:block" /> on your calendar look like
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether appointment setting is the right move for where you are and what that would look like in practice.
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
