import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cold Calling Services: Do They Still Work?',
  description: 'An honest look at cold calling services: where the phone still works, where it does not, why it is one channel in a multi-channel motion, and what a good service actually does.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/cold-calling-services',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does cold calling still work in B2B?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but not on its own and not the way it was run twenty years ago. Cold calling still works when the list is tight, the calls target the right role, and the phone is coordinated with email and LinkedIn rather than used in isolation. It fails when it is treated as a volume game where the only metric is dials per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a cold calling service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cold calling service is an external team that makes outbound calls to prospects on your behalf. A good one does more than dial. It builds the target list, writes the call framework, handles objections, qualifies the prospect against your criteria, and books meetings that meet an agreed standard. The call is one step in a defined process, not the whole thing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cold calling better than email or LinkedIn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No single channel is better than the others in every case. The phone is direct and gets a real-time answer, but reach is limited by who picks up. Email scales but is easy to ignore. LinkedIn builds familiarity over time. The strongest results come from using all three together, sequenced by how the prospect responds, rather than betting on one channel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a cold calling service different from appointment setting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cold calling is a tactic. Appointment setting is the outcome. A cold calling service that only counts dials and conversations is measuring activity. An appointment setting service uses the phone as one of several channels and is measured on qualified meetings booked. Most businesses are better served by paying for the meeting, not the call.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cold calls does it take to book a meeting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends entirely on the market, the list quality, and how well the phone is combined with other channels, so any fixed number quoted out of context is misleading. What matters more than the ratio is whether the meetings that get booked are with the right people and hold up. A smaller number of qualified meetings beats a large number of calls that lead nowhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I outsource cold calling or hire in-house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fully loaded in-house SDR costs $110,000 to $150,000 per year once salary, tools, management, and ramp are counted. Outsourcing the same function typically runs 30 to 50 percent less and is operational sooner. In-house makes sense when calling is core to your long-term team. Outsourcing makes sense when you need qualified meetings now without the hiring risk.',
      },
    },
  ],
}

const worksWhen = [
  {
    title: 'The list is tight and role-specific',
    description: 'Calls into a narrow, well-built list of the right decision makers convert. Calls into a broad, generic list do not. Most of the outcome is decided before the first dial, in how the list was built.',
    bestFor: 'Markets where the buyer is identifiable and the deal value justifies the effort.',
  },
  {
    title: 'The phone supports the other channels',
    description: 'A call that follows an email the prospect has seen, or references a LinkedIn touch, lands differently than a cold dial out of nowhere. The phone works best as a step in a sequence, not a standalone push.',
    bestFor: 'Multi-channel motions where the caller has context on what the prospect has already received.',
  },
  {
    title: 'The offer is clear and the caller can qualify',
    description: 'The value of a call is the two-way conversation. A skilled caller can read the response, handle an objection, and qualify in real time. That only works when the offer is defined and the criteria for a good meeting are agreed.',
    bestFor: 'Businesses that know what a qualified prospect looks like and can brief the caller on it.',
  },
]

export default function ColdCallingServices() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Cold Calling Services: Do They Still Work?"
        description="An honest look at cold calling services: where the phone still works, where it does not, why it is one channel in a multi-channel motion, and what a good service actually does."
        path="/cold-calling-services"
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
            <span className="section-label mb-4 block">Buyer's Guide</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Cold Calling Services:<br />
              <span className="text-mc-gold">Do They Still Work?</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              The short answer is yes, but not on its own and not the way it used to be run. This is an honest look at where cold calling still earns its place, where it does not, and what separates a service worth paying for from a room full of dials.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'One channel', label: 'The phone in a multi-channel motion' },
            { value: '65%', label: 'Millionaire Contracts average meeting success rate' },
            { value: '30 to 50%', label: 'Typical cost saving vs an in-house caller' },
            { value: '20+', label: 'Companies scaled with outbound' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The honest answer */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The honest answer</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Cold calling is not dead, but the old version is</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            People declare cold calling dead every year, and every year businesses keep booking meetings from the phone. Both things are true at once. The version that is dead is the one built on volume alone: a room of callers working a bad list, reading a stiff script, judged only on how many dials they made. That never worked well, and it works worse now that buyers screen calls and expect relevance.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The version that still works is quieter and more disciplined. It starts with a tight list of the right people. It uses the phone alongside email and LinkedIn, not instead of them. And it treats the call as a conversation to qualify a prospect, not a pitch to survive. Run that way, the phone remains one of the most direct ways to reach a decision maker and get a real answer in real time.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            So the useful question is not whether cold calling works. It is where it works, where it does not, and what a service has to do to make it worth the spend. That is what this guide covers.
          </p>
        </div>
      </section>

      {/* Where it works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Where it works</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">Where cold calling still earns its place</h2>
          <div className="space-y-5">
            {worksWhen.map((m, i) => (
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

      {/* Where it does not */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Where it does not</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Where cold calling falls down</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The phone is not a fix for every gap. When it is used in the wrong situation, it burns budget and, worse, burns good prospects who now associate your brand with a bad interruption. These are the cases where calling is the wrong tool or the wrong first move.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'The list is broad and generic, so most calls reach the wrong person and the good prospects get diluted by the noise.',
              'The buyer is almost impossible to reach by phone, screens every unknown number, and only responds through email or LinkedIn.',
              'The offer is not yet clear, so the caller cannot explain the value or qualify against a defined standard.',
              'The only measure is dials per day, which optimises for activity and quietly rewards booking meetings that will not hold.',
              'The phone is used in isolation, with no email or social touch to give the call context or warm the prospect first.',
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
            If any of these describe your situation, more calls will not help. Fixing the list, the offer, or the channel mix comes first. A service that pushes volume without addressing those is selling activity, not results.
          </p>
        </div>
      </section>

      {/* One channel, not the whole thing */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>One channel</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The phone is one channel, not the whole motion</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The single biggest mistake with cold calling is treating it as the entire outbound strategy. It is one channel among several, and each channel does something the others cannot. The strongest outbound motions use all of them, sequenced by how the prospect responds.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'The phone', body: 'Direct and immediate. You get a real answer in real time and can qualify or handle an objection on the spot. Limited by who actually picks up.' },
              { heading: 'Email', body: 'Scales and gives the prospect time to read on their own terms. Easy to ignore, so it works best when the message is relevant and short.' },
              { heading: 'LinkedIn', body: 'Builds familiarity over time and reaches people who never answer an unknown number. Slower, and better for warming than for a hard ask.' },
              { heading: 'The sequence', body: 'The channels working together. A call that follows an email the prospect has seen lands far better than a dial out of nowhere. Coordination is the point.' },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            When you buy a cold calling service in isolation, you are buying one instrument and hoping it carries the whole piece. It rarely does. What you actually want is the motion, with the phone playing its part inside it.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want the phone used as one part of a real outbound motion?"
        body="One call is enough to work out whether outbound fits your market and what the right channel mix looks like for you."
      />

      {/* What a good service does */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The standard</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What a good cold calling service actually does</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Most of the value sits in the work around the call, not the call itself. When you evaluate a service, look for the parts that decide whether the phone works before anyone dials.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Builds the target list', note: 'Defines who to call from your best existing customers, then builds a tight, role-specific list. Bad lists cannot be rescued by good calling.' },
              { q: 'Writes a framework, not a script', note: 'A rigid script sounds like a script. A framework gives the caller a structure and the freedom to have a real conversation.' },
              { q: 'Qualifies against agreed criteria', note: 'Every meeting booked meets a defined standard, agreed with you up front, so what lands in your calendar is worth your time.' },
              { q: 'Coordinates with the other channels', note: 'The call is sequenced with email and LinkedIn, informed by what the prospect has already seen, not fired off in isolation.' },
              { q: 'Reports on quality, not just activity', note: 'You see meetings booked, show rate, and how the pipeline is moving, not a vanity count of dials made.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              If a service leads with how many calls it will make and cannot explain how it builds the list or qualifies a meeting, you are being sold volume. Volume is the cheap part. The list, the qualification, and the coordination are where the results come from.
            </p>
          </div>
        </div>
      </section>

      {/* Quality vs volume */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Quality vs volume</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Fewer good meetings beat more bad ones</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Volume is easy to sell because it is easy to count. A big number of dials feels like progress. But dials are not the product. Qualified meetings that show up and turn into pipeline are the product, and those two numbers are not the same thing.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            When a service is paid for activity, it books meetings that hit the count and worries about quality later. Your calendar fills with conversations that go nowhere, your team loses faith in the pipeline, and the engagement feels like it failed even though the reports looked busy. The failure was in what was being measured.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            The better model measures the outcome. Book fewer meetings, but book the right ones, with the right people, against a standard agreed in advance. That is why the Millionaire Contracts 65 percent average meeting success rate is a product of qualification discipline, not dial count. The team only books meetings that meet the entry criteria and stands behind the quality of what gets booked.
          </p>
        </div>
      </section>

      {/* How it fits appointment setting */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How it fits</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Cold calling is a tactic, appointment setting is the outcome</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            This is the distinction that clears up most of the confusion. Cold calling is a tactic: one way to reach a prospect. Appointment setting is the outcome you are actually buying: qualified meetings on your calendar. A cold calling service that only counts calls is selling you the tactic and leaving the outcome to chance.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            An appointment setting function uses the phone as one of its channels, coordinated with email and LinkedIn, and is measured on the meetings it books, not the calls it makes. For most businesses that is the better thing to pay for. You want the result, and you want the provider accountable for it, rather than paying for effort and hoping it converts.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'The list is built from your best existing customers before anyone dials. Precision in the list decides most of the result.' },
              { heading: 'Multi-channel sequences', body: 'Email, LinkedIn, and phone coordinated by how the prospect responds. The call has context, not a cold start.' },
              { heading: 'Meetings, not dials', body: 'Measured on qualified meetings booked and held, with no-show replacement and weekly reporting on what matters.' },
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
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'What appointment setting is and how it turns outreach into qualified meetings.' },
              { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions that separate real qualification discipline from volume plays.' },
              { to: '/how-to-build-a-sales-cadence', label: 'How to Build a Sales Cadence', desc: 'How to sequence phone, email, and LinkedIn into one coordinated motion.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The definition, the engagement models, and who it works for.' },
              { to: '/appointment-setting', label: 'Appointment Setting', desc: 'How the Millionaire Contracts appointment setting function works.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'The process from first call to qualified meetings on your calendar.' },
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
          Want meetings booked,<br className="hidden md:block" /> not just calls made
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether outbound fits your market and what the right channel mix looks like for your business.
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
