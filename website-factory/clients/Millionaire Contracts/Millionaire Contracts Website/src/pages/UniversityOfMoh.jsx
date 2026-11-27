import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'
import MohApplyForm from '../components/MohApplyForm'

// University of Moh' by Millionaire Contracts (Kat, 27 November 2026): paid
// sales training for people who want to earn as appointment setters or
// closers. The course itself lives in Command's academy (modules 1 to 10, the
// role-play packs and the Upwork module). No income promises anywhere on the
// page: real results go in once students agree to be named.

const tracks = [
  {
    label: 'Appointment setter',
    price: 'R5,000',
    time: 'About 3 days of 2-hour sessions, plus role-plays',
    blurb: 'Book qualified sales meetings for a business: get past the front desk, find out who decides, and get the meeting in the diary.',
    modules: ['How buyers think', 'The language of sales', 'Finding the real problem', 'Building trust fast', 'Handling objections'],
  },
  {
    label: 'Sales closer',
    price: 'R7,000',
    time: 'About 3 days of 2-hour sessions, plus role-plays',
    blurb: 'Take the calls setters book and turn them into signed, paid deals.',
    modules: ['Closing', 'Negotiation and price', 'Reading people', 'Keeping clients', 'Scaling yourself'],
  },
  {
    label: 'The full journey',
    price: 'R10,000',
    time: 'About 6 days of 2-hour sessions, plus role-plays',
    blurb: 'Setter and closer: all ten modules and both sets of role-plays. The best value if you want to go all the way.',
    modules: ['All ten modules', 'Setter and closer role-plays', 'Both seats on a sales team'],
    best: true,
  },
]

const steps = [
  ['Learn', 'One-on-one sessions through the modules for your track. Each module has a short test, so you know you have it before you move on.'],
  ['Practise', 'Role-plays of 1 to 2 hours: real scenarios, a partner playing the prospect, and a scoring sheet. This is where it sticks.'],
  ['Find your first contract', 'Every track ends with Upwork: your profile, the right jobs, proposals that get replies, and your first client call.'],
  ['Get prepped for it', 'When you land a contract, we prep you for it personally: their offer, your script, and your first calls.'],
  ['Keep growing', 'Mentorship and the University of Moh\' network, with group sessions as more people reach the same level.'],
]

// Real messages from students (Kat, 27 November 2026), lightly joined where one thought ran over several messages.
// Names stay first name and initial until each student agrees to more. Kat
// asked for the homes and money to show (27 November): proof of what work
// can lead to, framed beside the line that results depend on the work. The
// screenshots are the real chats (public/media/moh), cropped to the chat, with
// a password prompt blurred and a third party's story left out.
const results = [
  {
    name: 'Miense M.',
    outcome: 'Knew nothing about sales. Two months later he was signing R16k agreements, and seven months in he moved out of his parents\' house into his own place',
    quotes: [
      'In 2 months I went from knowing nothing about sales to getting R16k agreements',
      'Going from struggling to stay above 10k a month to knowing imma clock 30k before commission is CRAZY',
      'You have changed my life man',
    ],
    shots: [
      ['miense-r16k', 'Miense: in 2 months from knowing nothing about sales to R16k agreements'],
      ['miense-30k', 'Miense: from struggling to stay above 10k a month to 30k before commission'],
      ['miense-training-paid-off', 'Miense: two contracts at once, all your training has really paid off'],
      ['miense-moves-out', "Miense: seven months in, moving out of his parents' house"],
      ['miense-moved-in', 'Miense: officially moved in'],
    ],
  },
  {
    name: 'Busi D.',
    outcome: 'Trained while studying, then landed a remote SDR role with a base salary and commission',
    quotes: [
      "I got a job today. It has a base pay of $400-800 and earning potential of like $2k. It's so much more than the 0 I've been bringing in",
      "Had my first official calls today as an SDR. I practiced the script a lot but I realized I'm just speaking with people",
      "You actually changed my life from when we started last year. I'm making 10x what I made",
    ],
    shots: [
      ['busi-got-a-job', 'Busi: got a job with a base pay of $400-800'],
      ['busi-first-calls', 'Busi: first official calls as an SDR'],
      ['busi-10x', "Busi: I'm making 10x what I made"],
    ],
  },
  {
    name: 'Callan H.',
    outcome: 'Cold calling for an overseas client within months of training, and bringing in contracts for the team',
    quotes: ['You did tell me during my training days that I would come across strange people, but he is genuinely a nice guy'],
    shots: [['callan-client-call', 'Callan: reporting back after a call with a client']],
  },
  {
    name: 'Lebohang S.',
    outcome: 'Booking meetings for a client as an appointment setter',
    quotes: ['So I did about 5 bookings today'],
    shots: [['lebohang-5-bookings', 'Lebohang: about 5 bookings in a day']],
  },
]

const forYou = [
  'You want to earn from sales, whether you are working, between jobs, studying or freelancing',
  'You are comfortable on the phone and on WhatsApp, or ready to get comfortable',
  'You have a laptop, steady internet and about 10 hours a week',
  'You will do the work between sessions: practice, proposals and follow-ups',
]

const faqs = [
  ['Do I need sales experience?', 'No. The setter track starts from the beginning. If you have sold before, the closer track or the full journey may suit you better, and we will tell you honestly which fits when we talk.'],
  ['Will I definitely get a contract or earn money?', 'No one can promise that, and we won\'t. We train you, practise with you, show you exactly how to find contracts on Upwork and prep you when one lands. What you earn depends on the work you put in.'],
  ['Can I pay in instalments?', 'Yes. Payment plans are available. Choose it on the application and we will work it out when we talk.'],
  ['What if it is not for me?', 'You get a full refund if nothing has been set up yet. Once you start module 1 a partial refund applies, and after module 3 there is no refund.'],
  ['Do I need to buy anything else?', 'Upwork charges for "connects" to send proposals. Set aside a small budget for them from day one, and we will show you how to spend it well.'],
  ['Where does the training happen?', 'Online, one on one, with the course inside our platform, Command, so your modules, tests and role-play scores are all in one place.'],
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: "University of Moh'",
  description: 'One-on-one sales training for appointment setters and closers, with role-plays, and a module on finding your first contract on Upwork.',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  offers: [
    { '@type': 'Offer', name: 'Appointment setter', price: '5000', priceCurrency: 'ZAR' },
    { '@type': 'Offer', name: 'Sales closer', price: '7000', priceCurrency: 'ZAR' },
    { '@type': 'Offer', name: 'The full journey', price: '10000', priceCurrency: 'ZAR' },
  ],
}

export default function UniversityOfMoh() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="University of Moh': sales training for setters and closers"
        description="One-on-one sales training from Millionaire Contracts. Learn appointment setting or closing, practise in role-plays, and learn how to find your first contract on Upwork."
        path="/university-of-moh"
        schema={schema}
      />
      <Navbar />

      <section className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">By Millionaire Contracts</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-5">
              University of <span className="text-mc-gold">Moh&apos;</span>
            </h1>
            <p className="font-body text-gray-200 text-xl leading-relaxed mb-4">
              Learn to sell for a living. We train you one on one as an appointment setter or a closer, then show you how to find paid contracts on Upwork
            </p>
            <p className="font-body text-gray-400 text-lg leading-relaxed mb-8">
              The same training we use for the people who sell for us, now open to anyone ready to put in the work
            </p>
            <a href="#apply" className="btn-primary inline-block">Apply now</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-lg mx-auto">
          <span className="section-label mb-3 block">Choose your track</span>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight mb-10">
            Setter, closer, or both
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((t) => (
              <div key={t.label} className={`rounded-2xl p-6 border ${t.best ? 'border-mc-gold bg-mc-cream' : 'border-gray-200 bg-white'}`}>
                {t.best && <p className="font-body text-xs uppercase tracking-widest text-mc-gold font-semibold mb-2">Best value</p>}
                <p className="font-headline text-xl font-black text-mc-teal">{t.label}</p>
                <p className="font-headline text-3xl font-black text-mc-gold my-2">{t.price}</p>
                <p className="font-body text-sm text-gray-500 mb-4">{t.time}</p>
                <p className="font-body text-gray-700 mb-4">{t.blurb}</p>
                <ul className="space-y-1.5">
                  {t.modules.map((m) => (
                    <li key={m} className="flex gap-2 font-body text-sm text-gray-600"><span className="text-mc-gold font-bold">✓</span>{m}</li>
                  ))}
                  <li className="flex gap-2 font-body text-sm text-gray-600"><span className="text-mc-gold font-bold">✓</span>Upwork: finding your first contract</li>
                </ul>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-gray-500 mt-6">Payment plans available on every track</p>
        </div>
      </section>

      <section className="bg-mc-dark py-20 px-6">
        <div className="max-w-screen-lg mx-auto">
          <span className="section-label mb-3 block">Results</span>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            In their own words
          </h2>
          <p className="font-body text-gray-400 mb-10 max-w-2xl">
            From messages students sent us. Their results came from their work, and yours will depend on yours
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <p className="font-headline text-lg font-black text-mc-gold">{r.name}</p>
                <p className="font-body text-sm text-gray-400 mb-4">{r.outcome}</p>
                <div className="space-y-3">
                  {r.quotes.map((q) => (
                    <p key={q} className="font-body text-gray-100 leading-relaxed">&ldquo;{q}&rdquo;</p>
                  ))}
                </div>
                {r.shots && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5">
                    {r.shots.map(([file, alt]) => (
                      <a key={file} href={`/media/moh/${file}.jpg`} target="_blank" rel="noopener" className="block rounded-lg overflow-hidden border border-white/10 hover:border-mc-gold/60 transition-colors">
                        <img src={`/media/moh/${file}.jpg`} alt={alt} loading="lazy" className="w-full h-56 object-cover object-top" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-gray-500 mt-6">The actual messages. Tap any screenshot to see it full size</p>
        </div>
      </section>

      <section className="bg-mc-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-3 block">How it works</span>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight mb-10">
            From first lesson to first contract
          </h2>
          <ol className="space-y-6">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-mc-teal text-mc-gold font-headline font-black flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-headline font-bold text-mc-teal text-lg">{t}</p>
                  <p className="font-body text-gray-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-3 block">Who it's for</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal leading-tight mb-8">
            For people ready to do the work
          </h2>
          <ul className="space-y-3 mb-8">
            {forYou.map((t) => (
              <li key={t} className="flex gap-3 font-body text-gray-700"><span className="text-mc-gold font-bold">✓</span><span>{t}</span></li>
            ))}
          </ul>
          <p className="font-body text-gray-600">
            It isn&apos;t for anyone looking for guaranteed income without effort. We say that up front because the people who do well here are the ones who practise, send the proposals and follow up
          </p>
        </div>
      </section>

      <section className="bg-mc-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-3 block">Questions</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal leading-tight mb-8">Before you apply</h2>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="bg-white rounded-xl border border-gray-200 p-5">
                <summary className="font-headline font-bold text-mc-teal cursor-pointer">{q}</summary>
                <p className="font-body text-gray-600 mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-mc-teal py-20 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-white leading-tight mb-3 text-center">Apply for University of Moh&apos;</h2>
          <p className="font-body text-gray-300 mb-8 text-center">Two minutes. We read every application and reply within one working day</p>
          <MohApplyForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
