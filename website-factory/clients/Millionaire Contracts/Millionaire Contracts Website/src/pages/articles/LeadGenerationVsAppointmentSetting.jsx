import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'
import ArticleCTA from '../../components/ArticleCTA'
import NewsletterSignup from '../../components/NewsletterSignup'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lead Generation vs Appointment Setting vs Sales Outsourcing',
  description: 'The difference between lead generation, appointment setting, and full sales outsourcing: what you actually get from each, where they overlap, the handoff problems between them, and how to choose based on where your gap is.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  mainEntityOfPage: 'https://www.millionairecontracts.com/lead-generation-vs-appointment-setting',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between lead generation and appointment setting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lead generation produces contacts who match your target profile and have shown some interest. Appointment setting takes that a step further and books a confirmed meeting with a decision maker who has agreed to talk. Lead generation hands you a name to work. Appointment setting hands you a calendar slot with someone ready to have a conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is appointment setting the same as sales outsourcing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Appointment setting is one part of sales outsourcing. Sales outsourcing can cover the whole function, from targeting and outreach to booking meetings and, in some models, closing the deal. Appointment setting focuses only on turning outreach into confirmed meetings. Most B2B businesses outsource appointment setting first and keep the closing in-house.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which one do I need, lead generation or appointment setting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on where your gap is. If your team can turn conversations into deals but cannot generate enough conversations, appointment setting fits, because it delivers ready meetings. If you have a strong inside team that just needs a steady flow of raw contacts to work themselves, lead generation may be enough. If the whole function is missing, full sales outsourcing is the better answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do leads from a lead generation vendor often go nowhere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common reason is the handoff. A lead-gen vendor optimises for volume of contacts, and your closers optimise for meetings that convert. When the two are not aligned on what a good lead looks like, your team spends its time chasing contacts that were never going to buy, and the leads get blamed while the real problem is a broken handoff between generation and closing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does appointment setting cost more than lead generation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually, because you are paying for a confirmed meeting rather than a raw contact. Appointment setting and full sales outsourcing commonly run on monthly retainers of $3,000 to $15,000, or pay-per-appointment at $75 to $500 per qualified meeting. A confirmed meeting with a decision maker is worth more than a name on a list, so the higher cost per unit often produces a lower cost per closed deal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can one provider do all three?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and this is often the point. When one team owns targeting, outreach, and meeting booking as a single process, the handoff problems disappear because there is no handoff. Millionaire Contracts operates as an outsourced sales function rather than a lead list vendor, which is why the quality standard holds through to the booked meeting.',
      },
    },
  ],
}

const definitions = [
  {
    title: 'Lead generation',
    description: 'The provider produces contacts who match your target profile and have shown some level of interest. You receive names, roles, companies, and often a signal of intent. What happens next is on you: your team reaches out, qualifies, and books the meetings.',
    getWhat: 'A list of qualified contacts to work.',
    gap: 'You have people who can sell but not enough names to call.',
  },
  {
    title: 'Appointment setting',
    description: 'The provider handles outreach and books confirmed meetings with decision makers who have agreed to talk. You do not chase contacts. You show up to a calendar slot with someone who is expecting the conversation. Your team runs the meeting and closes.',
    getWhat: 'Confirmed meetings on your calendar.',
    gap: 'You can close, but you do not have enough conversations.',
  },
  {
    title: 'Sales outsourcing',
    description: 'The provider runs part or all of the sales function as an extension of your business. This can include targeting, outreach, appointment setting, and in some models the closing itself. It is the broadest of the three and the one that removes the most from your plate.',
    getWhat: 'A working sales function, not just an input to one.',
    gap: 'The whole sales engine is missing or underbuilt.',
  },
]

export default function LeadGenerationVsAppointmentSetting() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Lead Generation vs Appointment Setting vs Sales Outsourcing"
        description="The difference between lead generation, appointment setting, and full sales outsourcing: what you actually get from each, where they overlap, the handoff problems between them, and how to choose based on where your gap is."
        path="/lead-generation-vs-appointment-setting"
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
              Lead Generation vs Appointment Setting<br />
              <span className="text-mc-gold">vs Sales Outsourcing</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              These three terms get used as if they mean the same thing. They do not. They deliver different things, cost different amounts, and solve different problems. This is what each one actually gives you, where they overlap, and how to pick the right one based on where your gap is.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '3 things', label: 'Terms that are not interchangeable' },
            { value: 'The handoff', label: 'Where most leads quietly die' },
            { value: '65%', label: 'MC average meeting success rate' },
            { value: '1 team', label: 'Owns targeting through to booked meeting' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why the distinction matters */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Why it matters</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The words are not the same, and neither are the results</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Most businesses looking for help with pipeline start by searching for one of these three terms without a clear sense of which one they need. That is a problem, because buying the wrong one is expensive. You can pay for lead generation, receive exactly what you asked for, and still see no new revenue, because a list of contacts was never your gap.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The three sit on a spectrum. Lead generation is the narrowest. It produces names. Appointment setting produces confirmed meetings. Sales outsourcing produces a working function. As you move along that spectrum, the provider takes on more of the work, the output gets closer to revenue, and the cost per unit goes up.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            The right choice is not the cheapest or the broadest. It is the one that matches where you are actually stuck. Get that match right and the money works. Get it wrong and you buy an input you cannot use.
          </p>
        </div>
      </section>

      {/* The three defined, card comparison */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The comparison</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">What you actually get from each</h2>
          <div className="space-y-5">
            {definitions.map((d, i) => (
              <div key={d.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                    <span className="text-mc-gold text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-mc-teal mb-2">{d.title}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">{d.description}</p>
                    <div className="flex flex-col gap-2">
                      <div className="inline-flex items-center gap-2 bg-mc-gold/5 border border-mc-gold/20 rounded-lg px-3 py-1.5">
                        <span className="text-mc-gold text-xs font-bold">You get:</span>
                        <span className="font-body text-gray-600 text-xs">{d.getWhat}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                        <span className="text-mc-teal text-xs font-bold">Fits when:</span>
                        <span className="font-body text-gray-600 text-xs">{d.gap}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where they overlap and differ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Overlap and difference</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Where they overlap, and where they part ways</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            All three start in the same place. Each one needs a clear target customer and a defined offer to work from. Each one involves reaching out to businesses that fit that profile. That shared front end is why the terms get blurred together. The difference is where each one stops.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { heading: 'The shared start', body: 'Every one of the three begins with an ideal customer profile and outreach to matching companies. If a provider skips the targeting and just works a generic list, it is not doing any of these three properly.' },
              { heading: 'Lead generation stops at the name', body: 'It ends when a matching contact is identified and passed to you. Whether that contact ever takes a meeting is your problem, not the vendor\'s. That is the line that separates it from appointment setting.' },
              { heading: 'Appointment setting stops at the meeting', body: 'It ends when a decision maker has agreed to a specific time and shows up. The provider owns everything up to that point. Running the meeting and closing the deal stays with your team.' },
              { heading: 'Sales outsourcing can go further', body: 'It can stop at the meeting like appointment setting, or carry on through the close. The scope is set by the model you choose. It is the only one of the three that can own revenue end to end.' },
            ].map((c) => (
              <div key={c.heading} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-headline font-bold text-mc-teal text-sm mb-2">{c.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-gray-700 leading-relaxed">
            Put simply, the further along the spectrum you go, the more of the work leaves your plate and the closer the output moves to a closed deal. Lead generation gives you raw material. Appointment setting gives you a conversation. Sales outsourcing can give you the result.
          </p>
        </div>
      </section>

      {/* The handoff problem */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The handoff</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Where leads quietly die: the handoff problem</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The most expensive failure in this space is not a bad list. It is a broken handoff between the team that generates and the team that closes. When you buy lead generation and hand the output to your own closers, you create a seam. On one side, the vendor is measured on volume of contacts. On the other, your closers are measured on deals. The two are optimising for different things.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The result is predictable. The vendor delivers its number. Your closers work through the contacts, find that many were never a real fit, and stop trusting the source. The leads get blamed. The vendor points to the volume it delivered. Nobody owns the gap in the middle, which is exactly where the money is lost.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'No shared definition of a good lead, so the vendor books quantity and your closers want quality.',
              'Context is lost in the pass. Your closer walks into a call knowing far less than the person who set it up.',
              'Speed to follow up drops. Contacts sit while they cool, and a warm signal goes cold before anyone acts on it.',
              'Feedback never loops back. Your closers learn what is wrong with the leads but the vendor never hears it, so nothing improves.',
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
            The fix is to shrink the seam or remove it. Appointment setting shrinks it, because the provider owns more of the process and hands over something closer to a real opportunity. A single team owning targeting through to booked meeting removes it, because there is no handoff to break. The fewer seams between the first contact and the closed deal, the less revenue leaks out.
          </p>
        </div>
      </section>

      <ArticleCTA
        heading="Not sure which of the three you actually need?"
        body="One call is enough to work out where your gap is and which model fits it, with no pitch if the answer is none of them."
      />

      {/* How to choose */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The decision</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">How to choose based on where your gap is</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-6">
            The choice is not about which term sounds best. It is about locating your actual gap and buying against it. Answer these honestly.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Can your team close the meetings it already gets?', note: 'If yes, your gap is conversations, not closing. Appointment setting fits, because it delivers ready meetings straight to your calendar.' },
              { q: 'Do you have a capable inside team that just needs more names to work?', note: 'If yes, and they are good at their own outreach, lead generation may be enough. The raw contacts are the missing input.' },
              { q: 'Is the whole sales function thin, missing, or held together by referrals?', note: 'If yes, full sales outsourcing is the better fit. Buying just names or just meetings will not fix a function that does not exist.' },
              { q: 'Have leads from a past vendor gone nowhere?', note: 'If yes, the problem was likely the handoff. Choose a model where one team owns the process through to the booked meeting so the seam disappears.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="font-headline font-bold text-mc-teal text-sm mb-2">{i + 1}. {item.q}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-mc-dark rounded-xl p-6 border border-white/10">
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              A simple rule holds most of the time. If closing is your strength and conversations are your shortage, buy appointment setting. If the whole engine is missing, outsource the function. Lead generation on its own only pays off when you have a strong inside team ready to turn raw contacts into meetings themselves.
            </p>
          </div>
        </div>
      </section>

      {/* The cost angle */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The cost</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What each one costs, and why cheaper is not always cheaper</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Lead generation tends to carry the lowest price per unit, because a contact is worth less than a confirmed meeting. Appointment setting and full sales outsourcing cost more per unit, and they are usually priced one of two ways. Monthly retainers commonly run $3,000 to $15,000. Pay-per-appointment models run $75 to $500 per qualified meeting.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            The trap is judging on cost per unit. A cheap contact that never converts is not cheap. It cost your closer the hour they spent chasing it and the deal they did not work instead. A more expensive confirmed meeting with a real decision maker can produce a lower cost per closed deal, which is the number that actually matters.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            The other number worth holding next to these is the alternative. A fully loaded in-house SDR costs $110,000 to $150,000 per year once salary, tools, management, and ramp are counted. Outsourced options commonly run 30 to 50 percent less than that fully loaded cost, and they are working from day one rather than after a hiring and training cycle.
          </p>
        </div>
      </section>

      {/* How Millionaire Contracts works */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>How we work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why Millionaire Contracts is not a lead list vendor</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Millionaire Contracts operates as an outsourced sales function, not a lead generation service. That distinction is the whole point of this article. A lead-gen service hands you names and leaves the seam for you to manage. We own targeting, outreach, qualification, and meeting booking as one integrated process, so there is no handoff to break.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            The 65 percent average meeting success rate comes from that ownership. It is not a product of volume. It is a product of only booking meetings that meet defined entry criteria, and standing behind the quality of what lands on your calendar. Across the businesses we have helped scale, the pattern is the same: fewer meetings that were never going to convert, more meetings that do.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'ICP-led targeting', body: 'Every engagement starts with building the ideal customer profile from your best existing clients. Outreach does not begin until the targeting is precise.' },
              { heading: 'One team, no handoff', body: 'Targeting, outreach, and booking sit with the same team. The seam where leads usually die does not exist, because there is nothing to hand off.' },
              { heading: 'Quality-gated meetings', body: 'Only meetings that meet defined entry criteria get booked. No-show replacement and weekly reporting on leading metrics keep the standard honest.' },
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
              { to: '/b2b-appointment-setting-services', label: 'B2B Appointment Setting Services', desc: 'What appointment setting delivers and how it runs.' },
              { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The full definition and the four main models.' },
              { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you sign.' },
              { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model with what drives the number.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'A diagnostic for knowing when to make the move.' },
              { to: '/how-it-works', label: 'How It Works', desc: 'The process from first call to booked meetings.' },
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
          Find out which model<br className="hidden md:block" /> actually fits your gap
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether you need names, meetings, or a full sales function, and what that would look like in practice for your business.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Book a Free Strategy Call
          </Link>
          <Link to="/services" className="inline-block border-2 border-white text-white font-headline font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
            See Our Services
          </Link>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  )
}
