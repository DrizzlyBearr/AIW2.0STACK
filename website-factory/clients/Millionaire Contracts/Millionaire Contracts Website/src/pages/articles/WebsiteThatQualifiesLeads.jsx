import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Make Your Website Qualify Leads Before They Reach You',
  description: 'How to design a website and enquiry flow that pre-qualifies leads: what questions to ask, why a name-and-message form wastes sales time, and how qualification on the site protects rep time and improves close rates.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/website-that-qualifies-leads',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean for a website to qualify leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A website that qualifies leads asks the questions that decide whether an enquiry is worth a sales conversation, before the enquiry reaches a rep. Instead of collecting only a name and a message, the enquiry flow captures budget range, timeline, company size, and the specific problem the visitor is trying to solve. The result is that every enquiry a rep sees already meets a minimum standard, so time goes to the people most likely to buy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is a name-and-message contact form a problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A form that asks only for a name and a message treats every enquiry as equal. It gives the rep nothing to prioritise with, so the first hour of every deal is spent finding out basic facts that could have been captured on the site. It also lets in enquiries that were never a fit, which fills the calendar with meetings that cannot convert and makes the pipeline look healthier than it is.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should a qualifying enquiry form ask?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask the questions that change whether you would take the meeting. For most B2B businesses that means budget range, timeline to a decision, company size or revenue stage, the specific problem being solved, and who is involved in the decision. Keep it to the few questions that actually sort a good fit from a poor one. Every extra field that does not change your decision only lowers completion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will asking more questions reduce the number of enquiries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It usually reduces the raw count and raises the quality. The enquiries you lose are mostly the ones that were never going to buy. The people with a real budget and a real timeline answer a few questions without complaint, because they are trying to solve a problem. Fewer, better enquiries almost always beat a high volume of unqualified ones for a sales team measured on closed revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does website qualification improve close rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Close rate is deals closed divided by deals worked. When the website filters out poor-fit enquiries, reps spend their hours on prospects who match the profile of buyers who already say yes. The same effort lands on better prospects, so a larger share of worked deals closes. It also shortens calls, because the basic facts are already known and the conversation can start on the actual problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a qualifying website fit with the rest of the sales function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The website is the first stage of qualification, not the whole of it. It sorts inbound enquiries before a human spends time on them, using the same criteria the sales team uses on a call. Outbound outreach, appointment setting, and the sales process that follows all run on the same profile. When the site, the outreach, and the call all qualify against one definition of a good customer, the pipeline stays clean end to end.',
      },
    },
  ],
}

const askFields = [
  {
    title: 'Budget range',
    description: 'The single fact that decides whether you can help. A range is enough, not an exact figure. If a visitor is far below what your work costs, both sides are better off knowing before the call. If they are well above it, that enquiry moves to the top of the list.',
    bestFor: 'Sorting affordability before anyone spends an hour on a call.',
  },
  {
    title: 'Timeline to a decision',
    description: 'Someone buying this quarter is a different prospect from someone researching for next year. Timeline tells the rep how to sequence the follow-up and which enquiries deserve attention today. It also stops fast-moving buyers sitting in a queue behind people who are only looking.',
    bestFor: 'Prioritising the enquiries that are ready to move.',
  },
  {
    title: 'Company size or revenue stage',
    description: 'Most offers fit a band of businesses and not the ones above or below it. Capturing size or stage on the site tells you immediately whether the enquiry sits inside your target profile, without a discovery call to find out.',
    bestFor: 'Matching the enquiry against your ideal customer profile.',
  },
  {
    title: 'The specific problem',
    description: 'One open question about what the visitor is trying to solve does more than a long form of tick boxes. It shows intent, it shows whether the problem is one you handle, and it gives the rep a real opening line instead of a cold introduction.',
    bestFor: 'Reading intent and starting the call on the real issue.',
  },
]

export default function WebsiteThatQualifiesLeads() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How to Make Your Website Qualify Leads Before They Reach You"
        description="How to design a website and enquiry flow that pre-qualifies leads: what questions to ask, why a name-and-message form wastes sales time, and how qualification on the site protects rep time and improves close rates."
        path="/website-that-qualifies-leads"
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
              How to Make Your Website<br />
              <span className="text-mc-gold">Qualify Leads Before They Reach You</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              A contact form that asks only for a name and a message hands your sales team a pile of enquiries with no way to tell the good ones from the rest. A website built to qualify does the first sort for you, so reps spend their hours on the people most likely to buy.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'First stage', label: 'Where qualification should start' },
            { value: '4 questions', label: 'Usually enough to sort a good fit from a poor one' },
            { value: 'Higher', label: 'Close rate when reps work better-fit enquiries' },
            { value: 'Less time', label: 'Wasted on meetings that were never going to convert' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The problem */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The problem</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">A name-and-message form wastes sales time</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Most business websites end the same way. A contact form asks for a name, an email, and a short message, then drops whatever comes back into an inbox. Every enquiry looks identical. The rep who picks it up has no way to tell the buyer with a real budget from the student writing a research paper, so both get the same treatment.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The cost of that shows up in the first hour of every deal. The rep spends that hour finding out facts that could have been captured on the site: what the visitor actually wants, whether they can afford it, when they need it, and whether they are even the right size of business. Those are the questions that decide whether the enquiry is worth an hour. Asking them on the call, one enquiry at a time, is the slowest possible place to ask.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            It also distorts the pipeline. A calendar full of meetings looks like a healthy sales function. If half of those meetings were never a fit, the number is a mirage. The team is busy, the reporting looks fine, and the close rate quietly sinks because a large share of worked deals could never have closed.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The fix is not more enquiries. It is a website that asks the sorting questions before a human spends time on the answer. This is the pre-qualifying website, and it is one of the highest-leverage changes a business can make to its inbound.
          </p>
        </div>
      </section>

      {/* What to ask */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>What to ask</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">The questions that decide whether an enquiry is worth an hour</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The rule for the enquiry form is simple. Ask only the questions that would change whether you take the meeting. If the answer does not change your decision, the field does not belong on the form. For most B2B businesses, four answers do almost all of the sorting.
          </p>
          <div className="space-y-5">
            {askFields.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">Does the work of:</span>
                      <span className="font-body text-gray-600 text-xs">{m.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed mt-8">
            Four is a guide, not a target. The point is to ask what sorts a good fit from a poor one and nothing more. Every extra field that does not change your decision only lowers the number of people who finish the form, and the people it puts off are often the busy buyers you most want.
          </p>
        </div>
      </section>

      {/* How to design it */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The design</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How to build qualification into the enquiry flow</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Qualification is a design decision, not a longer form bolted onto the old one. The whole site can guide a visitor toward telling you whether they are a fit, and it can do it without feeling like an interrogation.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'State who you are for', body: 'Say plainly on the page what kind of business you work with and the size of problem you solve. A clear fit statement filters visitors before they ever reach the form, because people who are not the right fit read it and leave.' },
              { heading: 'Ask in steps, not all at once', body: 'A single long form reads as a wall. Break the questions across a short sequence, easiest first. Each answered step raises the chance the visitor finishes the next one, so you capture more of what you need.' },
              { heading: 'Use ranges and choices', body: 'Ranges for budget and timeline are faster to answer than open boxes and easier for a visitor to commit to. They also give the rep a clean value to sort by the moment the enquiry lands.' },
              { heading: 'Keep one open question', body: 'One free-text question about the problem is where intent shows. It cannot be faked as easily as a tick box, and it hands the rep a real opening instead of a cold start.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            What happens after the form matters as much as the form. A well-fit enquiry should route straight to a rep and, where the answers clear your bar, to a booking page so the meeting is set while intent is high. A poor-fit enquiry can be handled with an honest reply that points them somewhere more useful. Either way, the rep only spends time on the ones that clear the standard.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            None of this means hiding your contact details or making people work to reach you. It means that the default path into your business collects the few facts that let you treat serious buyers seriously and fast.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want inbound that arrives already qualified?"
        body="One call is enough to map what your enquiry flow should ask and how it feeds the rest of your sales function."
      />

      {/* Why it protects the team */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The payoff</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why it protects rep time and lifts close rates</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A rep has a fixed number of selling hours in a week. Every hour spent on an enquiry that was never a fit is an hour not spent on one that was. That is the real cost of an unqualified pipeline, and it is why website qualification pays off in two ways at once.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Reps work fewer, better enquiries.', note: 'The same selling hours land on prospects who match the profile of buyers who already say yes. Effort is spent where it can convert instead of being spread across enquiries that cannot.' },
              { q: 'Calls start further along.', note: 'The basic facts are already known, so the conversation opens on the actual problem instead of the first ten minutes of discovery. Shorter, sharper calls mean more of them fit in a week.' },
              { q: 'Close rate rises.', note: 'Close rate is deals closed divided by deals worked. Remove the poor-fit deals from the worked pile and a larger share of what is left closes, without the team working any harder.' },
              { q: 'The pipeline tells the truth.', note: 'When the meetings on the calendar are meetings that could convert, the pipeline number means something. Forecasting gets more accurate because the inputs are cleaner.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              The trade is a smaller number of enquiries for a higher share that convert. For a team measured on closed revenue, that trade is almost always worth making. Volume is only useful when the reps have the hours to work it, and they never do.
            </p>
          </div>
        </div>
      </section>

      {/* Connects to the wider function */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The bigger picture</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The website is the first stage of one sales function</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A qualifying website is not a standalone trick. It is the inbound end of a sales function that qualifies the same way at every stage. The site sorts the enquiries that come to you. Outbound outreach and appointment setting go and find prospects who match the same profile. The sales process that follows works against the same definition of a good customer.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            When the site, the outreach, and the call all qualify against one profile, the pipeline stays clean from the first touch to the close. When they do not, the site lets in enquiries the reps then have to filter out by hand, which puts the wasted-time problem right back where it started. The qualification criteria on the form should be the same criteria the sales team uses on a call, written down once and applied everywhere.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'One profile', body: 'Build the ideal customer profile from the clients you already close well, then qualify inbound and outbound against that same profile so nothing conflicts.' },
              { heading: 'Consistent criteria', body: 'The questions the website asks are the questions the sales team would ask on a call. Qualification does not restart at each stage, it carries through.' },
              { heading: 'A clean handover', body: 'A qualified enquiry reaches a rep with the facts attached. The rep opens on the problem, sets the meeting, and works a pipeline made of deals that can actually close.' },
            ].map((c) => (
              <div key={c.heading} className="bg-mc-dark rounded-xl p-6 border border-white/10">
                <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
                <h3 className="font-headline font-bold text-white mb-2">{c.heading}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed mt-8">
            Millionaire Contracts runs sales as one connected function, from the enquiry flow on the site through outreach and appointment setting to the meeting itself. The 65 percent average meeting success rate comes from qualifying every meeting against defined entry criteria before it is booked, and only standing behind meetings that clear the bar. A website that qualifies is the same discipline, applied at the first point of contact.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Go deeper</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/lead-qualification-framework', label: 'The Lead Qualification Framework', desc: 'The criteria that decide which enquiries are worth working.' },
              { to: '/how-to-qualify-leads', label: 'How to Qualify Leads', desc: 'The questions and signals that separate a fit from a waste of time.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable pipeline.' },
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'How qualified meetings get booked and why the standard matters.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means to run sales as an external function.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'The way an engagement runs from first call to booked meetings.' },
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
          Turn your website into<br className="hidden md:block" /> your first qualifier
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to map the questions your enquiry flow should ask and how a qualified inbound feeds the rest of your sales function.
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
