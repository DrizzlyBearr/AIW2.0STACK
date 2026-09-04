import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Write Sales Scripts That Convert',
  description: 'How to write sales scripts for cold calls and discovery calls: why a script is a structure not a recital, how to build openers, discovery questions, objection handling, and closes, and why per-client scripts beat generic templates.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/how-to-write-sales-scripts',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a sales script?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sales script is a planned structure for a sales conversation. It sets out how to open, what to ask, how to respond to common objections, and how to move toward a clear next step. A good script is a map, not a word-for-word recital. It keeps the caller on track while leaving room to listen and respond to the person on the other end.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should a cold call script be read word for word?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Reading word for word makes the caller sound rehearsed and stops them from listening. The script should define the beats of the call and the key phrases that matter, then leave the exact wording to the caller. The goal is a natural conversation that still hits every point the structure was built to cover.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a cold call opener do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An opener has one job: earn the next thirty seconds. It should be short, name a reason for the call that is relevant to the buyer, and ask for permission to continue. Openers that lead with a long pitch or a fake compliment tend to get shut down. Openers that are direct and give the buyer a reason to keep listening tend to hold the line.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many discovery questions should a script include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enough to understand the buyer\'s situation, not so many that the call feels like an interview. Most strong discovery sections carry a small set of open questions that surface the current state, the problem, the cost of the problem, and the timeline. The caller follows the answers rather than marching through a fixed list.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle objections in a sales script?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Map the objections you hear most often, then write a response for each that acknowledges the point before answering it. The pattern is to listen, confirm you understood, and respond with something specific rather than defensive. A script should prepare the caller for the common objections so they are not improvising under pressure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do per-client sales scripts beat generic templates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A generic template does not know the buyer\'s language, the market, or the specific objections a given offer triggers. A per-client script is built from the client\'s offer, their best customers, and the words those customers actually use. It matches the market, which is what makes the conversation land. Generic scripts sound generic, and buyers can tell.',
      },
    },
  ],
}

const parts = [
  {
    title: 'The opener',
    description: 'The first fifteen seconds decide whether the call continues. A good opener states who is calling, gives a relevant reason, and asks for permission to keep going. It does not open with a pitch or a scripted compliment. It respects the buyer\'s time and gives them a reason to stay on the line.',
    bestFor: 'Earning the next thirty seconds of attention.',
  },
  {
    title: 'Discovery',
    description: 'A short set of open questions that surface the buyer\'s current state, the problem, what the problem costs them, and the timeline. The caller follows the answers rather than reading a fixed list. Good discovery makes the buyer do most of the talking and gives the caller the ground to stand on later.',
    bestFor: 'Understanding the buyer before you ever propose a next step.',
  },
  {
    title: 'Objection handling',
    description: 'A prepared response for each objection you hear most often. The pattern is to acknowledge the point, confirm you understood it, then answer with something specific. Preparing these in advance keeps the caller calm and stops them from getting defensive when the pushback arrives.',
    bestFor: 'Staying steady when the buyer resists.',
  },
  {
    title: 'The close',
    description: 'A clear, low-friction ask for the next step. In outbound, that step is usually a booked meeting, not a signed deal. The close names a specific action, makes it easy to say yes to, and confirms the details before the call ends. Vague closes produce vague outcomes.',
    bestFor: 'Turning a good conversation into a concrete next step.',
  },
]

export default function HowToWriteSalesScripts() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How to Write Sales Scripts That Convert"
        description="How to write sales scripts for cold calls and discovery calls: why a script is a structure not a recital, how to build openers, discovery questions, objection handling, and closes, and why per-client scripts beat generic templates."
        path="/how-to-write-sales-scripts"
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
              How to Write Sales Scripts<br />
              <span className="text-mc-gold">That Convert</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              A sales script is not a speech to read. It is a structure that keeps a conversation on track while the caller listens and responds. This is how to build one for cold calls and discovery calls, from the opener to the close, in language the buyer actually uses.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '4 parts', label: 'Opener, discovery, objections, close' },
            { value: 'Structure', label: 'A map, not a word-for-word recital' },
            { value: 'Per client', label: 'Built from the client offer and market' },
            { value: '65%', label: 'MC average meeting success rate' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What a script is */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The foundation</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">A script is a structure, not a recital</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The most common mistake with sales scripts is treating them as a speech to read out loud. A script that is read word for word makes the caller sound rehearsed, and it stops them from doing the one thing that matters most on a sales call: listening. The buyer can tell when someone is reading. The moment they hear it, the conversation is already slipping.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A better way to think about a script is as a map. It defines the route the conversation should take and the key points along the way. It sets out how to open, what to find out, how to respond when the buyer pushes back, and how to ask for the next step. Inside that structure, the caller uses their own words and follows the buyer's answers.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            This distinction is what separates a script that converts from one that gets hung up on. The structure keeps the caller from wandering or forgetting a key point. The freedom inside the structure keeps the conversation human. You need both.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            A good script also protects the new caller. Under pressure, people freeze or ramble. A clear structure gives them something to hold onto so they can stay calm, stay on track, and still sound like a person rather than a machine.
          </p>
        </div>
      </section>

      {/* The four parts */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The structure</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">The four parts of a sales script</h2>
          <div className="space-y-5">
            {parts.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">Its job:</span>
                      <span className="font-body text-gray-600 text-xs">{m.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The opener in depth */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The opener</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Write an opener that earns the next thirty seconds</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The opener has one job. It is not to pitch, and it is not to build rapport with a scripted compliment. It is to earn the next thirty seconds. The buyer picked up the phone in the middle of their day, and they are deciding within seconds whether to stay on the line.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A strong opener does three things in a short space. It says who is calling. It gives a reason for the call that is relevant to that specific buyer. And it asks for permission to keep going. The permission step matters more than it looks. Asking for a short window of time signals respect and gives the buyer a small yes to say, which makes the next part of the call easier.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The reason for the call should connect to something the buyer cares about, not something the seller cares about. A reason framed around the seller's product tends to trigger a reflex to end the call. A reason framed around a problem the buyer is likely to have gives them a reason to keep listening. That framing comes from knowing the market, which is the point we return to at the end.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Keep it short. The longer the opener runs, the more it sounds like a pitch, and the faster the buyer looks for an exit. Say who you are, give the relevant reason, ask for the time, then stop and listen.
          </p>
        </div>
      </section>

      {/* Discovery */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Discovery</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Discovery questions that make the buyer talk</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Discovery is where most of the value on a call is created, and where most scripts go wrong. A weak script turns discovery into an interrogation, marching through a fixed list of questions while the buyer's answers go unheard. A strong script gives the caller a small set of open questions and the discipline to follow the answers.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The questions should surface a few specific things. What the buyer's current situation looks like. What problem they are dealing with. What that problem is costing them, in time, money, or missed opportunity. And what their timeline is for doing something about it. These four areas give the caller enough to understand whether there is a fit and enough to frame the next step.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Current state', body: 'How the buyer handles this today. Understanding the current setup tells you what you are actually competing against, which is often the status quo rather than another provider.' },
              { heading: 'The problem', body: 'What is not working, in the buyer\'s own words. Let them describe it. The language they use here is the language you will use for the rest of the call.' },
              { heading: 'The cost', body: 'What the problem costs them. A problem with no cost attached rarely gets solved. This is where a mild issue turns into a reason to act.' },
              { heading: 'The timeline', body: 'When they want this handled. Timeline separates a real opportunity from a polite conversation, and it shapes how you frame the next step.' },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Open questions do the heavy lifting here. A question that can be answered with yes or no ends a thread. A question that starts with how or what invites the buyer to explain, and the explanation is where the useful information lives. The caller's job in discovery is to ask, then listen, then ask a better follow up based on what they heard.
          </p>
        </div>
      </section>

      {/* Objection handling */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Objection handling</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Prepare for the objections you already know are coming</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Objections are predictable. Any offer triggers the same handful of pushbacks again and again: not the right time, no budget, already have a provider, send me an email. Because they are predictable, they can be prepared for. A caller who is improvising a response to an objection they hear on every call is at a disadvantage they created themselves.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The script should map the common objections and give the caller a response for each. The pattern that works is simple. Listen to the full objection without interrupting. Acknowledge it so the buyer knows they were heard. Then respond with something specific rather than defensive. Rushing to counter an objection before the buyer has finished making it usually makes things worse.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'List the objections you hear most often for this specific offer.',
              'Write a response for each that acknowledges the point before it answers it.',
              'Keep responses short and specific, not a second pitch dressed as an answer.',
              'Separate a real objection from a reflex brush-off, and handle each differently.',
              'Practise the responses so they sound natural rather than memorised.',
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
            The goal is not to win an argument. It is to keep the conversation alive long enough for the buyer to decide whether the next step is worth taking. Preparation is what lets the caller stay calm and steady when the pushback arrives, instead of reaching for whatever comes to mind under pressure.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want a sales script built for your offer, not a template?"
        body="One call is enough to talk through your market and what a script tuned to it would actually cover."
      />

      {/* The close */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The close</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Close on a clear, specific next step</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The close is where a good conversation either turns into something or fades out with a promise to be in touch. In outbound work, the close is usually not asking for a signed deal. It is asking for the next step, which most often is a booked meeting with the right person and enough time to have a real conversation.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A strong close names a specific action and makes it easy to say yes to. Vague closes produce vague outcomes. Asking whether the buyer wants to learn more leaves them nothing to act on. Offering a specific time for a specific conversation gives them a clear choice. Confirm the details before the call ends so there is no ambiguity about what happens next.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Name a specific next step, not a general offer to stay in touch.', note: 'A booked meeting at a named time beats "I\'ll follow up" every time.' },
              { q: 'Make the yes small and easy.', note: 'Ask for a short, defined slot rather than an open-ended commitment.' },
              { q: 'Confirm the details before you hang up.', note: 'Time, attendees, and what the meeting will cover. Ambiguity costs meetings.' },
              { q: 'Match the close to what discovery uncovered.', note: 'If the timeline is real and the cost is clear, the close writes itself.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              A close only works when the earlier parts of the call did their job. If the opener earned attention, the discovery surfaced a real problem, and the objections were handled, the close is a short, natural step. If those parts were skipped, no clever closing line will save the call.
            </p>
          </div>
        </div>
      </section>

      {/* Write for the buyer */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The language</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Write in the buyer's language, for the buyer's market</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A script converts when it sounds like the buyer's world, not the seller's. Every market has its own words for the problems it deals with, and buyers trust a caller who uses those words correctly. A script written in the seller's internal jargon signals an outsider. A script written in the buyer's language signals someone who understands the situation.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The source for that language is the buyer's own market. It comes from the words the best existing customers use to describe the problem, the objections that a given industry tends to raise, and the way decisions get made in that specific market. This is research, not guesswork. The words a caller uses on the phone should be borrowed from the people they are trying to reach.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            This is also why a script is never finished on the first draft. The first version is a hypothesis. Real calls reveal which openers hold the line, which questions open buyers up, and which objections come up most. The script improves as those calls come in, and a script that is never revised is a script that stops improving.
          </p>
        </div>
      </section>

      {/* Per-client vs generic */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why per-client scripts beat generic templates</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A generic script template cannot know the offer, the market, or the specific objections a given business triggers. It fills the gaps with vague language that fits everyone and lands with no one. Buyers can tell when they are hearing a template, and a template is easy to dismiss.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            At Millionaire Contracts, scripts are built per client from the client's offer, their best existing customers, and the language that market uses. The 65 percent average meeting success rate across the 20+ companies scaled is not the product of a clever template. It comes from matching the script to the market and then refining it against real calls. The script is treated as a working document, not a fixed asset.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'Built from the offer', body: 'Every script starts with the client\'s offer and their best existing customers. The words on the call come from the market, not from a template that fits everyone and no one.' },
              { heading: 'Tuned to real objections', body: 'The objections a script prepares for are the ones that specific market actually raises. Generic objection handling prepares the caller for the wrong pushbacks.' },
              { heading: 'Refined against calls', body: 'The script is a working document. What holds the line and what opens buyers up gets learned from real calls, and the script is updated as that data comes in.' },
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
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Go deeper</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable pipeline.' },
              { to: '/how-to-write-a-cold-email', label: 'How to Write a Cold Email That Gets Replies', desc: 'The same principles applied to written outreach.' },
              { to: '/lead-qualification-framework', label: 'A Lead Qualification Framework That Works', desc: 'Decide which conversations are worth having.' },
              { to: '/sales-closing', label: 'Sales Closing: How to Ask for the Next Step', desc: 'Turn good conversations into booked outcomes.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means, who it fits, and how to decide.' },
              { to: '/services', label: 'Our Services', desc: 'How Millionaire Contracts runs outbound end to end.' },
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
          Want scripts that convert<br className="hidden md:block" /> without hiring a sales team?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          Millionaire Contracts builds and runs the outbound for you, with scripts tuned to your offer and your market. One call is enough to see what that would look like.
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
