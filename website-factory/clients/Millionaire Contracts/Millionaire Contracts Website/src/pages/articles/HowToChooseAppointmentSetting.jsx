import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Choose an Appointment Setting Company: 7 Questions to Ask Before You Hire',
  description: 'Before you hire an appointment setting company, ask these 7 questions. They separate the agencies with real qualification discipline from the ones running volume plays on your brand.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/how-to-choose-an-appointment-setting-company',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you define a qualified appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A qualified appointment should meet defined criteria around role seniority, company size, industry fit, and buying intent. Any agency that cannot give you a precise answer to this question is not qualifying leads — they are booking meetings and calling them qualified.',
      },
    },
    {
      '@type': 'Question',
      name: 'What outreach channels do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Single-channel outreach is a volume play. A serious appointment setting agency uses a multi-channel approach combining email, LinkedIn, and phone, sequenced based on prospect behaviour and response patterns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a meeting does not show?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agencies with genuine qualification discipline replace no-shows without hesitation. Agencies that are booking meetings to hit a number will find reasons why the no-show is your problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before we see the first meetings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-run appointment setting engagement should produce first meetings within two to three weeks of launch. Longer than that suggests slow ramp processes or a lack of infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does your reporting look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Good reporting includes leading metrics: emails sent, open rates, reply rates, conversations started, and meetings booked. Agencies that only report on meetings booked are hiding the health of the campaign from you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have experience in my industry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industry experience matters because buyer language, objections, and decision-making cycles vary significantly. Ask for specific case studies, not general claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in your pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four main models are monthly retainer, pay-per-appointment, pay-per-qualified-lead, and hybrid. Understand exactly what the fee covers: ICP build, outreach tools, rep management, and reporting should all be included or explicitly scoped.',
      },
    },
  ],
}

const questions = [
  {
    number: '01',
    question: 'How do you define a qualified appointment?',
    body: [
      'This is the most important question on the list. The word "qualified" does the most work in appointment setting, and most agencies use it loosely.',
      'A qualified appointment should meet specific criteria before it lands in your calendar: the right seniority level, the right company profile, the right industry, and some signal of buying intent or relevant pain. Not just someone who agreed to a call.',
      'Ask the agency to describe, in exact terms, what makes a meeting qualified by their standard. If they cannot give you a precise answer — if they talk around it with phrases like "decision-makers" or "interested prospects" without specifics — that is your answer. They are booking meetings and calling them qualified.',
      'The best agencies will be able to tell you the exact job title range, company size band, and intent signals they use as entry criteria. Some will build the ICP with you before a single outreach sequence starts.',
    ],
  },
  {
    number: '02',
    question: 'What outreach channels do you use and how do you sequence them?',
    body: [
      'Single-channel outreach is a volume play. Sending 500 cold emails per day is not appointment setting — it is spray and pray. The conversion rates are poor and the reputational risk to your domain is real.',
      'A serious appointment setting agency uses a multi-channel approach: email, LinkedIn, and phone, sequenced based on prospect behaviour. Someone who opens your email three times without replying gets a different follow-up than someone who has not opened at all. Someone who visits your website mid-sequence should trigger a different step.',
      'Ask specifically how they sequence outreach. Ask what happens after a prospect opens but does not reply. Ask how they use LinkedIn alongside email. If their answer is "we send a follow-up email on day three", you are looking at a template-based volume shop.',
    ],
  },
  {
    number: '03',
    question: 'What happens when a meeting does not show?',
    body: [
      'No-shows tell you everything about how well meetings were actually qualified.',
      'A meeting booked with a prospect who had genuine intent, understood the context, and confirmed the time shows up. A meeting booked because someone said yes to end a conversation does not.',
      'Agencies with real qualification discipline replace no-shows without argument. They stand behind the quality of what they booked. Agencies that are booking meetings to hit a number will find reasons why the no-show is your problem — the prospect was hard to reach, your team did not send a reminder, the timing was not ideal.',
      'Ask this question directly and watch how they answer. Confidence and clarity here means accountability. Hedging means volume.',
    ],
  },
  {
    number: '04',
    question: 'How long before we see the first meetings?',
    body: [
      'Ramp time matters. Every week without meetings is a week of pipeline you are not building.',
      'A well-structured appointment setting agency should be operational quickly. ICP definition, sequence build, outreach launch — none of this should take months. A serious provider should be able to show you the first meetings within two to three weeks of engagement start.',
      'Be cautious of agencies that quote four to six week onboarding periods. That is often a sign of internal bottlenecks, not a signal of thoroughness. The best operators have refined processes that move fast because they have done this hundreds of times.',
      'Ask for the typical timeline from contract signed to first meeting booked. Then ask what the record is. Both answers tell you something useful.',
    ],
  },
  {
    number: '05',
    question: 'What does your reporting look like and how often do we see it?',
    body: [
      'Reporting transparency is how you know whether the campaign is healthy or whether it is only looking good on the surface.',
      'Meetings booked is a lagging metric. By the time meetings slow down, the problem started weeks ago in the outreach data. Good reporting shows you the leading indicators: emails sent, open rates, reply rates, positive reply rates, conversations started, and meetings booked. You should be able to see where in the funnel performance is strong and where it is leaking.',
      'Ask what metrics are included in their reporting. Ask how frequently you receive updates. Ask whether you have live access to a dashboard or whether reporting is a PDF at the end of the month.',
      'Weekly visibility on leading metrics is the standard you should hold them to. Monthly reporting means you are always reacting to problems that are four weeks old.',
    ],
  },
  {
    number: '06',
    question: 'Do you have case studies or experience in my industry?',
    body: [
      'Sales conversations in financial services sound different from sales conversations in technology. Healthcare has different compliance constraints. Professional services buyers make decisions differently from product buyers.',
      'Industry experience is not everything, but it accelerates results. An agency that has worked in your space already knows the language your buyers use, the objections that come up most often, and the decision-making cycles you are working within. They do not have to learn these things on your pipeline.',
      'Ask for specific case studies, not general claims about industries served. Ask for metrics: meetings booked, response rates, ramp time. If they cannot produce specifics, they either have not done it or the results were not worth talking about.',
      'An agency that has delivered in your space and can prove it is worth paying for. One that cannot is a risk.',
    ],
  },
  {
    number: '07',
    question: 'What is included in your pricing and what is not?',
    body: [
      'The headline number is rarely the full number. Understanding exactly what is in scope prevents the surprises that erode the relationship three months in.',
      'The four common pricing models are monthly retainer ($3,000 to $10,000 or more per month), pay-per-appointment ($75 to $500 per booked meeting), pay-per-qualified-lead, and hybrid. Each has trade-offs. Retainers give you a team, consistency, and process. Pay-per-appointment aligns incentives but can encourage low-quality bookings.',
      'Ask what the fee covers. ICP development, outreach tools and licences, copywriting and sequence management, rep management, and reporting should all be accounted for. Ask what happens if you want to adjust the ICP mid-engagement. Ask about the contract length and what the exit process looks like.',
      'An agency that is confident in its results will not need a long lock-in to protect its revenue. Transparency about pricing structure is a signal of the same confidence.',
    ],
  },
]

export default function HowToChooseAppointmentSetting() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How to Choose an Appointment Setting Company: 7 Questions to Ask Before You Hire"
        description="Before you hire an appointment setting company, ask these 7 questions. They separate the agencies with real qualification discipline from the ones running volume plays on your brand."
        path="/how-to-choose-an-appointment-setting-company"
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
              How to Choose an Appointment Setting Company:<br />
              <span className="text-mc-gold">7 Questions to Ask Before You Hire</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Most appointment setting agencies look similar from the outside. The differences show up after you have signed. These questions separate the ones with real qualification discipline from the ones running volume plays on your brand.
            </p>
          </div>
        </div>
      </div>

      {/* Key stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '80%+', label: 'of B2B buyers read 5+ articles before purchasing' },
            { value: '$500', label: 'Max pay-per-appointment rate in the market' },
            { value: '65%', label: 'Millionaire Contracts meeting success rate' },
            { value: '2-3 weeks', label: 'Time to first meeting, done right' },
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
            The appointment setting market is crowded. There are hundreds of agencies, dozens of platforms, and no shortage of case studies showing impressive numbers. The challenge is not finding a provider. The challenge is finding one that will not damage your brand, waste your budget, or deliver meetings that go nowhere.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The seven questions below are the ones that matter. They are not designed to make the sales process harder. They are designed to tell you, before you commit, whether the agency you are speaking to has the processes and standards your pipeline deserves.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            A good agency will welcome every one of them.
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {questions.map((q) => (
            <div key={q.number} className="border-l-4 border-mc-gold pl-8">
              <div className="font-headline text-5xl font-black text-mc-gold/20 leading-none mb-2">{q.number}</div>
              <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">{q.question}</h2>
              <div className="space-y-4">
                {q.body.map((para, i) => (
                  <p key={i} className="font-body text-gray-700 leading-relaxed text-base">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-6">The bottom line</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            A good appointment setting agency does not need you to take its word for anything. It has case studies that prove performance, processes that can withstand scrutiny, and the confidence to offer accountability structures that protect your investment.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            These seven questions will not guarantee a perfect partnership. But they will eliminate the providers that cannot back up their positioning, and they will give you the context to evaluate the ones that can.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            If you want to see how Millionaire Contracts answers each of these questions, the strategy call is the right place to start. No pitch. Just the answers, and the track record to support them.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/calender" className="bg-mc-gold text-white font-headline font-bold px-8 py-3 rounded-lg hover:bg-mc-gold-light transition-colors">
              Book a Strategy Call
            </Link>
            <Link to="/appointment-setting" className="border border-mc-teal text-mc-teal font-headline font-bold px-8 py-3 rounded-lg hover:bg-mc-teal hover:text-white transition-colors">
              Our Appointment Setting Service
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-10">Quick answers</h2>
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
          Ready to ask these questions<br className="hidden md:block" /> to a team that can answer them?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to show you how Millionaire Contracts approaches qualification, reporting, and accountability.
        </p>
        <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
          Book a Free Strategy Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
