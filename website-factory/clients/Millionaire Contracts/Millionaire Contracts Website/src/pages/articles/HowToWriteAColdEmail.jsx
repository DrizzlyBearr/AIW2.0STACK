import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Write a Cold Email That Gets Replies',
  description: 'A practical framework for B2B cold email that books meetings: research and targeting, subject lines, the opener, one clear point, relevance over personalization theatre, the ask, length, follow-up, and the common mistakes.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/how-to-write-a-cold-email',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a cold email get a reply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cold email gets a reply when it reaches the right person, opens with something relevant to their situation, makes one clear point, and asks for a small, specific next step. Replies come from relevance and restraint, not from clever writing. The best cold emails read like a short, useful note from a person who did their homework, not a pitch built from a template.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a cold email be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep a cold email short enough to read on a phone without scrolling much. Around three to five short sentences is a good target. Every sentence should earn its place. If a line does not move the reader toward understanding why you are writing or what you want, cut it. Length is not the goal, but short emails get read and long ones get skimmed or ignored.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best subject line for a cold email?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best subject line is short, specific, and honest about the email. Two to four plain words that hint at the topic tend to work better than anything that looks like marketing. Avoid all caps, fake urgency, and anything that promises more than the email delivers. The subject line only has one job, which is to earn the open. The body has to earn the reply.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you personalize every cold email?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Relevance matters more than personalization theatre. A line that shows you understand the reader\'s role, market, or problem is worth more than a scraped detail about their city or a recent post. Personalization that does not connect to the reason you are writing reads as a trick. Aim for a message that could only have been sent to a person in their specific situation, not their specific name.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many follow-up emails should you send?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A short sequence of follow-ups spaced a few days apart works better than a single email or an endless chase. Two to four follow-ups is a common range. Each one should add something or restate the point in a new way, not just say bumping this. Stop when you have made your case a few times and gotten no response. A no-reply is a soft no, and moving on protects your sender reputation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do most cold emails fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most cold emails fail because they are sent to the wrong people, talk about the sender instead of the reader, ask for too much too soon, or read like they were sent to a thousand others. The writing is rarely the real problem. Poor targeting and a weak, self-focused message are what get emails deleted. Fix the list and the point of the email before you polish the words.',
      },
    },
  ],
}

const steps = [
  {
    title: 'Research and targeting',
    description: 'Before you write anything, decide who this email is for and why they should care. Pull a tight list of people whose role and situation match the problem you solve. A precise list of fifty right people beats a broad list of five hundred wrong ones. The email is only as strong as the fit between the reader and the reason you are reaching out.',
    bestFor: 'Getting the fundamentals right before a single word is written.',
  },
  {
    title: 'The subject line',
    description: 'Write a short, plain subject line that tells the truth about the email. Two to four words that hint at the topic work better than anything that looks like an ad. No all caps, no fake urgency, no promise the body cannot keep. The subject has one job, which is to earn the open. Save your real point for the first line of the body.',
    bestFor: 'Earning the open without setting a false expectation.',
  },
  {
    title: 'The opener',
    description: 'Your first line decides whether the rest gets read. Open with something about the reader, not about you. A specific observation about their role, market, or a problem people like them tend to have. Skip the throat-clearing introductions. Do not open with your company name or your title. Lead with relevance and the reader keeps going.',
    bestFor: 'Holding attention past the first sentence.',
  },
  {
    title: 'One clear point',
    description: 'Make one point per email. Name the problem you help with and hint at how you help, in plain language. Resist the urge to list every service or feature. A reader can hold one idea from a cold email, not five. The goal is not to explain everything, it is to make the reader think this is worth a short conversation.',
    bestFor: 'Being understood in a five second read.',
  },
  {
    title: 'The ask',
    description: 'Close with one small, specific ask. A short call, or a simple yes or no question, is easier to answer than a request for a big meeting. Do not stack two asks or leave the next step vague. Tell the reader exactly what happens if they say yes. The lighter the ask, the more likely the reply.',
    bestFor: 'Converting interest into a response.',
  },
]

export default function HowToWriteAColdEmail() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How to Write a Cold Email That Gets Replies"
        description="A practical framework for B2B cold email that books meetings: research and targeting, subject lines, the opener, one clear point, relevance over personalization theatre, the ask, length, follow-up, and the common mistakes."
        path="/how-to-write-a-cold-email"
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
              How to Write a Cold Email<br />
              <span className="text-mc-gold">That Gets Replies</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most cold emails get deleted in seconds. The ones that book meetings share a simple structure and a discipline about who they target. This is the framework for writing B2B cold email that earns a reply, from the list to the follow-up.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '5 parts', label: 'The structure of a cold email that works' },
            { value: 'Relevance', label: 'What earns a reply, over clever writing' },
            { value: 'One ask', label: 'Per email, kept small and specific' },
            { value: 'Short', label: 'Read in seconds, on a phone' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The premise */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Start here</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why most cold emails never get read</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The reader of a cold email is busy, skeptical, and has seen a hundred versions of what you are about to send. They decide whether to keep reading in about a second, and they decide from the subject line and the first sentence. Everything after that only matters if those two earn the attention.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Most cold emails fail before the writing even comes into play. They go to the wrong people, they talk about the sender, they ask for too much, and they read like they were sent to a thousand others on the same day. Better sentences do not fix any of that. The list and the point of the email do.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            A good cold email does the opposite of what instinct suggests. It is short. It is about the reader. It makes one point. It asks for one small thing. It reads like a note from a person who did their homework, not a pitch built from a template. That restraint is the whole skill.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The framework below breaks the email into its parts. Get each part right and the reply rate follows. Get the targeting wrong and no amount of copywriting will save it.
          </p>
        </div>
      </section>

      {/* The five parts */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The framework</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">The five parts of a cold email that works</h2>
          <div className="space-y-5">
            {steps.map((m, i) => (
              <div key={m.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{m.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{m.description}</p>
                    <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-mc-gold text-xs font-bold">Why it matters:</span>
                      <span className="font-body text-gray-600 text-xs">{m.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevance over personalization */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The real lever</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Relevance beats personalization theatre</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            A lot of advice tells you to personalize every email. Mention their city. Reference a recent post. Compliment the company. Most of that is theatre. The reader can tell when a detail was scraped and dropped in to make a mass email feel handmade, and it often does more harm than a plain, honest note.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            What actually works is relevance. A single line that shows you understand the reader's role, their market, or a problem people in their seat tend to face. The test is simple. Could this email only have been sent to a person in their specific situation, or could it go to anyone? Aim for the first.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'Speak to the role', body: 'Write to the problems that come with their job, not their name. A head of sales cares about pipeline gaps. A founder cares about growth without more headcount. Name the thing they actually think about.' },
              { heading: 'Speak to the market', body: 'Show you understand the pressures in their industry or segment. A specific observation about their world beats a generic compliment about their company every time.' },
              { heading: 'Skip the scraped detail', body: 'A mention of their city or a recent award adds nothing if it does not connect to why you are writing. If the detail is not load-bearing, leave it out. It reads as a trick.' },
              { heading: 'Earn the right to the point', body: 'The opener buys you the second sentence. Use the relevance to make the reader think you might actually understand their situation, then make your point.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Relevance also scales in a way that hand-written trivia does not. If your list is tightly targeted, one well-chosen opening line can speak to a whole segment honestly, because everyone on the list really does share that situation. That is targeting doing the work, not a mail-merge field pretending to.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Want cold outreach handled for you?"
        body="One call is enough to work out whether an outsourced team is the right way to put this framework to work at scale, with no pitch if it is not."
      />

      {/* Example structure */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Putting it together</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What a good cold email looks like</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Here is the shape, described in plain terms rather than a script to copy. The point is the structure, not the exact words. Write it in your own voice for your own reader.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Subject line', note: 'Two to four plain words that hint at the topic. Honest about what the email is. Nothing that looks like an ad.' },
              { q: 'Opening line', note: 'One sentence about the reader. A problem their role or market tends to face. No introduction of yourself yet.' },
              { q: 'The point', note: 'One or two sentences naming what you help with and hinting at how. Plain language, one idea, no feature list.' },
              { q: 'The ask', note: 'One small, specific request. A short call, or a simple yes or no question. Make the next step obvious.' },
              { q: 'Sign off', note: 'Your name and a plain signature. No long footer, no attachments, no links that trip spam filters.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              Read the whole thing back on a phone screen. If it takes more than a few seconds to get the point, or if the first line is about you, rewrite it. The reader should understand who you are, what you help with, and what you want, in one short pass.
            </p>
          </div>
        </div>
      </section>

      {/* Length and follow-up */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Length and cadence</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Keep it short and follow up with purpose</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            Length is where good intentions go to die. The instinct is to explain more so the reader understands the full value. The result is an email that gets skimmed and closed. Aim for three to five short sentences. If a line does not move the reader toward your point or your ask, cut it.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The follow-up is where most of the replies actually come from. One email is easy to miss. A short, patient sequence gives a busy person more than one chance to respond. The rule for a follow-up is simple. Add something or say it a new way. Never send a message that only says bumping this.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              { heading: 'Space them out', body: 'Leave a few days between messages. A follow-up the next morning reads as pressure. A few days of patience reads as a professional who is easy to work with.' },
              { heading: 'Add on each pass', body: 'Each follow-up should give the reader a new reason to reply. A different angle on the problem, a short proof point, or a restated ask. Not a nag.' },
              { heading: 'Know when to stop', body: 'Two to four follow-ups is usually enough to make your case. After that, a no-reply is a soft no. Move on. Chasing hurts your sender reputation and your time.' },
            ].map((c) => (
              <div key={c.heading} className="bg-mc-dark rounded-xl p-6 border border-white/10">
                <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
                <h3 className="font-headline font-bold text-white mb-2">{c.heading}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Sending discipline matters as much as writing discipline. A clean list, a warmed-up sending domain, and a steady volume protect your ability to land in the inbox at all. The best-written email in the world does nothing from the spam folder.
          </p>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Avoid these</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The common mistakes that kill replies</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Most cold email problems come from a short list of habits. Fix these first, because they cost more replies than any wording ever will.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Sending to a broad, poorly matched list instead of a tight one where the reason to write is real.',
              'Opening with your company name, your title, or a long introduction instead of the reader.',
              'Making several points at once so the reader cannot tell what the email is actually about.',
              'Asking for a big meeting up front when a smaller yes would have been easy to give.',
              'Padding the email with features, links, and attachments that slow the read and trip filters.',
              'Faking urgency or dressing the subject line up as marketing so it never earns the open.',
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
            None of these are writing problems. They are decisions about who you send to, what you lead with, and how much you ask for. Get those right and the writing becomes the easy part.
          </p>
        </div>
      </section>

      {/* How Millionaire Contracts approaches it */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How Millionaire Contracts runs cold outreach</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Cold email is one channel inside a coordinated outreach process, not a standalone tactic. Millionaire Contracts builds the target list from your best existing clients, writes to the reader's situation rather than a scraped detail, and keeps every message short and pointed at one small ask.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The 65 percent average meeting success rate is not the product of sending more email. It comes from qualification discipline: reaching the right people, booking only meetings that meet defined criteria, and standing behind the quality of what gets booked. Having scaled 20+ companies, the process is built to be repeatable, not lucky.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'The list is built before a single email is written. Outreach does not start until the reader and the reason to write actually line up.' },
              { heading: 'Multi-channel sequences', body: 'Email works alongside LinkedIn and phone, sequenced by how the prospect behaves. A steady, patient cadence, not a burst of pressure.' },
              { heading: 'Full accountability', body: 'No-show replacement. Weekly reporting on leading metrics. Performance standards built into the engagement from day one.' },
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
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable pipeline.' },
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'How qualified meetings get booked and delivered.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'What it means, who it works for, and how to decide.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'A diagnostic for knowing when to make the move.' },
              { to: '/appointment-setting', label: 'Appointment Setting', desc: 'How we turn outreach into booked meetings.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'The engagement process from first call to booked meetings.' },
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
          Get your cold outreach<br className="hidden md:block" /> booking meetings
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether an outsourced team is the right way to turn this framework into booked meetings for your business.
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
