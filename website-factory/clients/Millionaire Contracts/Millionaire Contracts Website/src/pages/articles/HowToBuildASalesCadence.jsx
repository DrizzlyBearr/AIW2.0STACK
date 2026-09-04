import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Build an Outbound Sales Cadence',
  description: 'A practical guide to building an outbound sales cadence: what a cadence is, how to choose channels, how to space and time your touches, how many touches to run, how to vary the message, when to stop, and how to measure and improve it.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/how-to-build-a-sales-cadence',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a sales cadence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sales cadence is a planned sequence of outreach touches to a single prospect over a set period. It defines the channels you use, the order of the touches, the spacing between them, and the message at each step. A cadence turns outreach from a scattered activity into a repeatable process that every prospect moves through the same way.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many touches should a sales cadence have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most effective B2B cadences run several touches across two to four weeks, combining email, phone, and LinkedIn. The right number depends on your market and deal value. Higher value deals justify more touches over a longer window. The principle is to give a prospect enough contact to notice you without becoming a nuisance, then stop cleanly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What channels work best in an outbound cadence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Email, phone, and LinkedIn are the three core channels for B2B outbound. Email carries detail and scales well. Phone creates real conversations and stands out when inboxes are crowded. LinkedIn adds a familiar face and a lower-pressure touch. The strongest cadences combine all three rather than relying on one, because different prospects respond on different channels.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far apart should cadence touches be spaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Space touches close enough that the prospect remembers the last one, and far enough that you do not feel like pressure. Early touches often sit a day or two apart. Later touches spread out to several days. The exact spacing matters less than being deliberate about it and keeping it consistent across every prospect so you can measure what works.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you stop a sales cadence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stop when the cadence reaches its planned end and the prospect has not engaged. Running touches past that point rarely converts and usually damages your standing. A clean final message that closes the loop respects the prospect and often earns a reply on its own. Prospects who do not respond can move to a lighter, longer-term nurture rather than being pushed harder.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure whether a sales cadence is working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Measure the cadence step by step, not just at the end. Track how many prospects enter, how many reply, and how many book a meeting, then look at which touch and which channel produced the response. This shows you where prospects drop off and which steps carry the load, so you can change one variable at a time and see the effect.',
      },
    },
  ],
}

const channels = [
  {
    title: 'Email',
    description: 'The backbone of most cadences. Email carries detail, scales without extra effort, and gives the prospect time to read on their own schedule. It works best when each message is short, specific to the prospect, and easy to reply to. Volume without relevance is what gets email ignored.',
    bestFor: 'Delivering context and a clear reason to talk at scale.',
  },
  {
    title: 'Phone',
    description: 'The channel that creates actual conversations. A call cuts through a crowded inbox and gives you a live read on interest that no email can. It takes more time per touch, so it belongs at the points in the cadence where a real conversation is most likely to move things forward.',
    bestFor: 'Turning attention into a booked meeting through direct conversation.',
  },
  {
    title: 'LinkedIn',
    description: 'A lower-pressure touch that puts a face to the name. A connection request, a comment, or a short message keeps you visible between email and phone touches without asking for much. It works because it feels less like selling and more like a professional showing up in the same room.',
    bestFor: 'Staying familiar and warming a prospect between heavier touches.',
  },
]

export default function HowToBuildASalesCadence() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How to Build an Outbound Sales Cadence"
        description="A practical guide to building an outbound sales cadence: what a cadence is, how to choose channels, how to space and time your touches, how many touches to run, how to vary the message, when to stop, and how to measure and improve it."
        path="/how-to-build-a-sales-cadence"
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
              How to Build an<br />
              <span className="text-mc-gold">Outbound Sales Cadence</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              A cadence is the difference between outreach that produces meetings and outreach that produces nothing. This is how to build one that is consistent, multi-channel, and measurable, from the first touch to the last.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '3 channels', label: 'Email, phone, and LinkedIn working together' },
            { value: 'One sequence', label: 'Every prospect moves through the same steps' },
            { value: 'Consistency', label: 'What beats intensity over the long run' },
            { value: 'Clean stop', label: 'A defined end point on every cadence' },
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
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What a sales cadence actually is</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A sales cadence is a planned sequence of outreach touches to a single prospect over a set period. It defines the channels you use, the order of the touches, the spacing between them, and the message at each step. Everything a prospect receives from you is decided in advance, not improvised on the day.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The point of a cadence is to remove chance from outreach. Without one, reps send a message, forget to follow up, chase the prospects they happen to remember, and drop the rest. A cadence makes sure every prospect gets the same deliberate sequence, which is the only way to know what works and to repeat it.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            A cadence is not a single email blast, and it is not calling the same list until someone picks up. It is a structured combination of touches designed to earn attention, give a reason to respond, and make it easy to say yes to a conversation. The structure is what turns scattered activity into a repeatable process.
          </p>
        </div>
      </section>

      {/* Consistency over intensity */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The principle</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why consistency beats intensity</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Most outreach fails for one reason. It stops too early. A rep sends one or two messages, hears nothing, and moves on. The prospect was not offended, they were busy, and the message arrived on a bad day. The deal was never lost. It was just abandoned.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A cadence solves this by making follow-up automatic. The prospect who ignores the first email sees a call two days later, a LinkedIn touch after that, and a second email the following week. None of it is aggressive. All of it is steady. That steadiness is what gets you noticed, because the prospect who was too busy the first time eventually has a moment when the timing is right.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Intensity, by contrast, is what happens when a rep tries to make up for a lack of process with pressure. More emails in a day, longer messages, harder asks. It does not work, and it costs you the relationship. A calm cadence that shows up reliably over three weeks will always outperform a burst of pressure over three days.
          </p>
        </div>
      </section>

      {/* Choosing channels */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The channels</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">Choosing your channels</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The strongest cadences use email, phone, and LinkedIn together. Prospects respond on different channels, and combining them means you reach the same person in more than one way without repeating yourself. Each channel does a different job.
          </p>
          <div className="space-y-5">
            {channels.map((m, i) => (
              <div key={m.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
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

      {/* Timing and spacing */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The rhythm</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Timing and spacing your touches</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The rhythm of a cadence matters as much as the messages in it. Touches that come too fast feel like pressure. Touches that come too slow lose the thread, and the prospect forgets the earlier ones. The aim is a rhythm the prospect barely notices, where each touch lands while the last one is still fresh.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Start closer together', body: 'Early touches can sit a day or two apart. The prospect is fresh, the first message is still in mind, and a quick follow-up feels natural rather than pushy.' },
              { heading: 'Widen the gaps over time', body: 'As the cadence goes on, spread the touches out to several days. This keeps you present without turning steady contact into a stream the prospect wants to escape.' },
              { heading: 'Alternate channels between touches', body: 'Do not send two emails in a row. Follow an email with a call, a call with a LinkedIn touch. Switching channels feels less repetitive and covers more ground.' },
              { heading: 'Keep the spacing consistent', body: 'Use the same rhythm for every prospect. Consistency is what lets you compare results and see whether a change to timing actually made a difference.' },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            There is no single correct schedule. A higher value deal justifies a longer window and more touches, because the payoff is worth the patience. A smaller, faster sale runs a tighter cadence. What matters is that the rhythm is deliberate and the same for everyone, so the results mean something.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want a cadence built and run for you?"
        body="One call is enough to work out what a cadence for your market should look like and whether running it in-house or outsourced is the better move."
      />

      {/* Message variation */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The messages</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Varying the message across the sequence</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A cadence is not the same message sent five times. Repeating yourself tells the prospect you have nothing new to say, and it trains them to ignore your name. Each touch should add something, so that a prospect who reads all of them sees a case building rather than a broken record.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Open with the reason you are reaching out.', note: 'The first touch names the specific problem or trigger that made this prospect worth contacting. It earns the right to a second touch.' },
              { q: 'Follow with proof or a different angle.', note: 'The next touch adds something the first did not. A relevant result, a short observation about their situation, or a new way into the same conversation.' },
              { q: 'Make the ask easy and specific.', note: 'A middle touch offers a clear, low-effort next step. A short call at a named time is easier to accept than an open-ended request to talk.' },
              { q: 'Close the loop cleanly.', note: 'The final touch acknowledges that this is the last one and leaves the door open. Done well, it often earns a reply on its own.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Keep every message short and written to the person, not to a list. Personalisation does not mean a longer note. It means one line that proves you know who they are and why you are contacting them specifically, and that line is worth more than three paragraphs of generic value.
          </p>
        </div>
      </section>

      {/* When to stop */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The end point</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Knowing when to stop</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Every cadence needs a defined end. Running touches past the planned sequence rarely converts, and it moves you from persistent to unwelcome. A prospect who has ignored a full, well-built cadence is telling you something, and the respectful response is to stop, not to push harder.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The final touch should close the loop cleanly. A short message that says you will stop reaching out, with an easy way to reconnect later, respects the prospect's time and often earns a reply from people who meant to respond and never got to it. A clean exit protects your reputation and keeps the door open.
          </p>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              Prospects who reach the end of a cadence without engaging do not need to be dropped forever. Move them to a lighter, longer-term nurture with occasional, low-pressure contact. Timing changes. The prospect who was not ready this quarter may be ready in six months, and a clean stop is what keeps that option alive.
            </p>
          </div>
        </div>
      </section>

      {/* Measure and improve */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The feedback loop</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Measuring and improving the cadence</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A cadence you do not measure is a guess you keep repeating. The value of a structured sequence is that it produces data you can read. Track it step by step: how many prospects enter, how many reply, and how many book a meeting, then look at which touch and which channel produced each response.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            This step-level view shows where prospects drop off and which touches carry the load. If most replies come from the phone touch, you know where to invest. If the third email gets nothing, you know what to rewrite. Reading the cadence this way turns improvement from opinion into evidence.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Change one thing at a time', body: 'Adjust a single variable, a subject line, a touch, a channel order, then measure. Changing several at once means you never learn which one mattered.' },
              { heading: 'Read leading indicators', body: 'Replies and booked meetings tell you the cadence is working long before revenue does. Watch the early signals so you can correct fast.' },
              { heading: 'Keep the structure stable', body: 'Improve the cadence without abandoning it. Consistent structure over time is what makes each change measurable and each result trustworthy.' },
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

      {/* How Millionaire Contracts runs cadences */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How Millionaire Contracts runs cadences</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Millionaire Contracts builds and runs multi-channel cadences as a core part of every engagement. Email, LinkedIn, and phone are coordinated around prospect behaviour, not sent on a fixed timer regardless of what the prospect does. When a signal shows interest, the cadence responds to it.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            That discipline is what sits behind a 65 percent average meeting success rate across the 20+ companies we have helped scale. The rate is not a product of volume. It comes from running a deliberate sequence, measuring it step by step, and only booking meetings that meet defined entry criteria, so the cadence produces conversations that convert rather than noise that does not.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Go deeper</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/how-to-write-a-cold-email', label: 'How to Write a Cold Email That Gets Replies', desc: 'The structure behind every message in your cadence.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Where the cadence fits in the wider pipeline.' },
              { to: '/lead-qualification-framework', label: 'A Simple Lead Qualification Framework', desc: 'Decide which prospects belong in the cadence.' },
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'What a full appointment setting engagement covers.' },
              { to: '/appointment-setting', label: 'Appointment Setting', desc: 'How a booked meeting turns into pipeline.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'The way we run an outsourced sales function.' },
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
          Get a cadence that books<br className="hidden md:block" /> meetings that convert
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out what an outbound cadence for your market should look like and whether running it yourself or outsourcing it is the right move.
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
