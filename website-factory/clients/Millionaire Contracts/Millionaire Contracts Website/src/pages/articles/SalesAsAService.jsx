import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sales as a Service: The Model Explained',
  description: 'Sales as a service explained: what the subscription sales model is, how it differs from a traditional agency or a staffing firm, what is included, who it fits, and the pros and cons.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/sales-as-a-service',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is sales as a service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sales as a service is a model where an external provider runs a defined part of your sales function on a recurring subscription or retainer. Instead of hiring, training, and managing your own reps, you pay a fixed monthly fee and the provider delivers the outcome: targeting, outreach, qualification, and booked meetings. It works the same way software as a service does, except the thing delivered is a working sales function rather than a product login.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is sales as a service different from a traditional sales agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A traditional agency often sells project work or campaigns with a defined start and end. Sales as a service is a continuous engagement priced on a subscription, structured to install and run an ongoing sales function rather than deliver a one-off campaign. The relationship is built to compound, because outreach data improves the targeting month over month.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is it different from a staffing firm or a recruiter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A staffing firm places a person into your business and then steps back. You still manage, train, and carry the risk of that hire. Sales as a service delivers the whole function, including the people, the process, the tools, and the management, as one accountable unit. You are buying the outcome, not the headcount.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a sales as a service subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical subscription includes ideal customer profile definition, list building, multi-channel outreach across email, LinkedIn, and phone, qualification against agreed criteria, meeting booking, and weekly reporting on leading indicators. The tooling and the management of the team are carried by the provider. Some engagements extend into full cycle selling and closing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does sales as a service cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly retainers for a subscription sales engagement typically run $3,000 to $15,000 per month depending on scope and volume. For comparison, a fully loaded in-house SDR costs $110,000 to $150,000 per year. In most cases the outsourced route costs 30 to 50 percent less than the equivalent in-house hire, and it is operational far faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is sales as a service a good fit for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It fits B2B businesses with a defined offer, a clear target customer, and a deal value that justifies the cost of outreach. It works well for founders who are still the main seller, for companies with inconsistent pipeline, and for teams that have tried hiring reps without consistent results. It is a poor fit where the offer is unproven or the problem is product-market fit rather than pipeline volume.',
      },
    },
  ],
}

const differences = [
  {
    title: 'Versus a traditional sales agency',
    description: 'An agency usually sells campaigns or projects with a start and an end. Sales as a service is continuous and priced on a subscription, so the engagement is built to install and run a function rather than deliver a one-off push. The value compounds, because each month of outreach data sharpens the next month of targeting.',
    bestFor: 'Businesses that want an ongoing function, not a single campaign.',
  },
  {
    title: 'Versus a staffing or recruiting firm',
    description: 'A staffing firm places a person and then leaves you to manage them. You still carry the training load and the hiring risk. Sales as a service delivers the people, the process, the tooling, and the management as one accountable unit, so you buy the outcome instead of the headcount.',
    bestFor: 'Businesses that do not want to build and manage a sales team internally.',
  },
  {
    title: 'Versus a lead list or data provider',
    description: 'A data provider hands you contacts and stops there. Sales as a service takes those contacts through outreach, qualification, and booking, then reports on the health of the process. The list is an input, not the deliverable.',
    bestFor: 'Businesses that need booked meetings, not raw data to work themselves.',
  },
  {
    title: 'Versus a full in-house build',
    description: 'Building in-house means recruiting, onboarding, tooling, and managing reps before the first meeting is booked. Sales as a service is operational quickly and carries the management burden for you. It is the faster, lower-risk path to a working function at growth stage.',
    bestFor: 'Businesses that need pipeline now and cannot wait on a hiring cycle.',
  },
]

export default function SalesAsAService() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Sales as a Service: The Model Explained"
        description="Sales as a service explained: what the subscription sales model is, how it differs from a traditional agency or a staffing firm, what is included, who it fits, and the pros and cons."
        path="/sales-as-a-service"
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
              Sales as a Service:<br />
              <span className="text-mc-gold">The Model Explained</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Sales as a service applies the subscription logic of modern software to the sales function. You pay a fixed monthly fee and receive a working sales engine, not a product login. This is what the model is, how it differs from an agency or a staffing firm, what it includes, and who it fits.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'Subscription', label: 'The delivery model, not a one-off project' },
            { value: '$3k to $15k', label: 'Typical monthly retainer by scope' },
            { value: '30 to 50%', label: 'Lower cost than an equivalent in-house hire' },
            { value: 'Day 1', label: 'When a qualified team is operational' },
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
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What sales as a service actually means</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Sales as a service is a way of buying a sales function the same way you buy software. You do not hire the reps, build the process, or manage the day to day. You pay a recurring fee and an external provider delivers the outcome: a defined part of your sales cycle, run as a service, on a subscription.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The name borrows from software as a service, where a company pays monthly for access to a product instead of building it in-house. The parallel holds. In both cases you convert a large upfront investment and an ongoing management burden into a predictable monthly cost, and you get to the result faster.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The difference is what gets delivered. Software as a service delivers a tool. Sales as a service delivers a working function: people doing the outreach, a process behind them, the tools they run on, and the management that keeps the standard high. It arrives as one unit, and it is accountable as one unit.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The scope can be narrow or broad. Some businesses subscribe to appointment setting only, then close the deals themselves. Others extend the engagement into full cycle selling. The common thread is the model: a recurring fee for a running function, not a project with an end date.
          </p>
        </div>
      </section>

      {/* The subscription logic */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The logic</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why the subscription structure matters</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The retainer is not just a billing preference. It shapes how the work gets done. A one-off campaign is optimized for the campaign. A subscription is optimized for the long run, because the provider is paid to keep the function healthy month after month.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            That structure changes the incentives in your favor. Outreach produces data. The data tells you which segments respond, which messages land, and which prospects convert to booked meetings. In a subscription model, that learning is fed back into the next month of targeting, so the function gets sharper over time rather than resetting at the end of a campaign.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            It also makes the cost predictable. A fixed monthly retainer, typically $3,000 to $15,000 depending on scope, is easier to plan around than the variable and often hidden cost of building and running a team yourself. You know the number, and you can hold the outcome against it.
          </p>
        </div>
      </section>

      {/* How it differs */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The comparison</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">How it differs from the alternatives</h2>
          <div className="space-y-5">
            {differences.map((d, i) => (
              <div key={d.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{d.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{d.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">Best for:</span>
                      <span className="font-body text-gray-600 text-xs">{d.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The scope</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What a subscription includes</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            A sales as a service engagement is built to install a function, not hand over a task. The exact scope is agreed at the start, but a standard subscription covers the full path from targeting to a booked meeting.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { heading: 'ICP and list building', body: 'The provider defines the ideal customer profile from your best existing clients, then builds the target list. Nothing goes out until the targeting is precise.' },
              { heading: 'Multi-channel outreach', body: 'Email, LinkedIn, and phone, coordinated by prospect behavior rather than sent at volume. The sequencing improves as response data comes in.' },
              { heading: 'Qualification', body: 'Every prospect is checked against agreed entry criteria before a meeting is booked, so your calendar fills with conversations worth having.' },
              { heading: 'Meeting booking', body: 'Qualified meetings are set directly into your calendar, with the context your team needs to run the call well.' },
              { heading: 'Tooling and management', body: 'The software, the data, and the day to day management of the team are carried by the provider, not by you.' },
              { heading: 'Reporting on leading indicators', body: 'Weekly reporting on the metrics that predict revenue, so you can see the health of the function, not just the final number.' },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ArticleCTA
        heading="Want to see what a subscription sales function would look like for you?"
        body="One call is enough to scope the model to your business, with no pitch if it is not the right fit."
      />

      {/* Pros and cons */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The trade-offs</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The pros and cons</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The model is a strong fit for many B2B businesses, but it is not right for every situation. Weigh both sides honestly.
          </p>

          <h3 className="font-headline text-lg font-black text-mc-teal mb-4">Where it works in your favor</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Predictable monthly cost instead of the variable and hidden cost of building in-house.',
              'A working function fast, often operational from day one rather than after a hiring cycle.',
              'Lower total cost, typically 30 to 50 percent less than the fully loaded cost of an equivalent hire.',
              'The management and hiring risk sits with the provider, not with you.',
              'The targeting compounds, because outreach data feeds back into the next month of work.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                  <span className="text-mc-gold text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-gray-700 text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

          <h3 className="font-headline text-lg font-black text-mc-teal mb-4">Where to be careful</h3>
          <ul className="space-y-3 mb-6">
            {[
              'It cannot fix an unproven offer. If the market does not want what you sell, more outreach will not change that.',
              'It needs a defined target customer. A vague profile produces vague results.',
              'Very low deal values can make the cost of outreach per acquisition too high to justify.',
              'You give up some direct day to day control, so the reporting and the relationship have to be strong.',
              'Highly technical sales that require years of in-house expertise are harder to run through an external team.',
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
            The pattern is consistent. Sales as a service is a force multiplier on a business that already knows what it sells and to whom. It is not a substitute for that clarity. If the offer and the target are in place, the model is usually faster and lower risk than building the same function yourself.
          </p>
        </div>
      </section>

      {/* Installing a full function */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The bigger picture</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How it maps to installing a full sales function</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A full sales function has parts: a targeting method, an outreach engine, a qualification standard, a closing motion, and reporting that shows what is working. Building all of that in-house takes time, money, and management attention that most growing businesses would rather spend elsewhere.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Sales as a service lets you install those parts as a running system rather than assemble them one hire at a time. Many businesses start narrow, with appointment setting, and let their own team close. As trust builds, the engagement can extend deeper into the cycle. The subscription is the vehicle for putting a full function in place without carrying the full build.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            This is the model Millionaire Contracts runs. The team operates as an outsourced sales function under your brand, and it stands behind the quality of what it books. The 65 percent average meeting success rate is a product of qualification discipline, not volume, and the firm has scaled more than 20 companies on the same approach.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Go deeper</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The full definition, the models, and who it fits.' },
              { to: '/fractional-sales-team', label: 'What Is a Fractional Sales Team?', desc: 'Senior sales capability without a full-time hire.' },
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'What a full appointment setting engagement covers.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full number breakdown for both options.' },
              { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model with what drives the number.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'The step-by-step of a Millionaire Contracts engagement.' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-mc-gold/40 transition-colors group"
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
              <div key={q.name} className="border-b border-gray-200 pb-6">
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
          See what a subscription<br className="hidden md:block" /> sales function does for you
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to scope the model to your business and work out what it would deliver in practice.
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
