import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'
import LeadMagnetForm from '../components/LeadMagnetForm'
import { COURSE } from '../lib/leadMagnet'

// Beyond Referrals: the free 5-day course that grows the Pipeline & Power
// list (Kat, 20 November 2026). Written for owners of businesses that are
// already doing well, where growth still depends on referrals and on them.
// The lessons themselves live in Command as the list's welcome steps.

const days = [
  ['Why good businesses stay small', 'Referrals bring your best clients, and they also cap how fast you can grow. The number to keep in mind all week.'],
  ['Your website should sort, not just sit there', 'The one change that more than tripled how many people got through our own form, and what every enquiry should tell you.'],
  ['The right calls, not more calls', 'How we booked 120+ qualified appointments for one client, the 3 questions that decide who is worth your time, and the 7 messages we use to book meetings.'],
  ['Where the money actually leaks', 'It is almost never the enquiries. It is what happens after. How to find the quotes already sitting on the table.'],
  ['Stop waiting for the work', 'Why your best future clients are not searching, how to go to them instead, and how to think about sales as an investment.'],
]

const forYou = [
  'Your business is already profitable, and most of your best clients came by referral',
  'Growth still depends on you, and nobody is selling for the business full time',
  'Your website exists but does not really bring in work',
  'You have tried ads or agents and not got much from them',
  'One new client is worth a proper amount to you, and you are ready to invest in getting more',
]

const proof = [
  { value: '120+', label: 'qualified appointments booked for Skayle 360' },
  { value: '$1.8M', label: 'in a year for Atlas Management, once the structure was in' },
  { value: '3.5% → 12%', label: 'more people finishing our own enquiry form, from one change' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Beyond Referrals',
  description: 'A free 5-day email course for owners of established businesses who want to grow past word of mouth: the website, qualifying, what to say, the pipeline and outreach.',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
  isAccessibleForFree: true,
}

export default function BeyondReferrals() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Beyond Referrals: a free 5-day course for business owners"
        description="A free 5-day course for owners of established businesses who want to grow past referrals. One short lesson a day: your website, who is worth your time, what to say, your pipeline and outreach."
        path="/beyond-referrals"
        schema={schema}
      />
      <Navbar />

      <section className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <span className="section-label mb-4 block">Free 5-day course</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-5">
              Beyond <span className="text-mc-gold">Referrals</span>
            </h1>
            <p className="font-body text-gray-200 text-xl leading-relaxed mb-4 max-w-xl">
              Your business is good. Your best clients came by word of mouth. So why does growth still depend on you?
            </p>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-xl">
              One short lesson a day for 5 days, with one thing to do each day. Built for owners of established businesses who are ready to grow on purpose, not just when the phone rings
            </p>
          </div>
          <div>
            <LeadMagnetForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-3 block">What you'll learn</span>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight mb-10">
            Five days, the whole system
          </h2>
          <ol className="space-y-6">
            {days.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-mc-teal text-mc-gold font-headline font-black flex flex-col items-center justify-center leading-none">
                  <span className="text-[9px] tracking-widest uppercase text-gray-400">Day</span>{i + 1}
                </span>
                <div>
                  <p className="font-headline font-bold text-mc-teal text-lg">{t}</p>
                  <p className="font-body text-gray-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mc-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-3 block">Who it's for</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal leading-tight mb-8">
            Built for owners whose business already works
          </h2>
          <ul className="space-y-3 mb-8">
            {forYou.map((t) => (
              <li key={t} className="flex gap-3 font-body text-gray-700">
                <span className="text-mc-gold font-bold">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-gray-600">
            If you're just starting out, you'll still get something from it, but it's written for businesses with clients, a team and quotes going out
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-lg mx-auto grid sm:grid-cols-3 gap-6">
          {proof.map((p) => (
            <div key={p.value} className="bg-mc-cream rounded-xl p-6 border border-gray-200">
              <p className="font-headline text-3xl font-black text-mc-gold mb-1">{p.value}</p>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-3 block">Who it's from</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal leading-tight mb-5">
            The best businesses aren't always the biggest
          </h2>
          <div className="font-body text-gray-700 leading-relaxed space-y-4">
            <p>
              I'm Kat, and I started Millionaire Contracts because I kept seeing the same thing. There are businesses out there with better service, better delivery and better people than the big brands, and they still have to fight twice as hard to win the same client
            </p>
            <p>
              Most of the time it's not the product holding them back, it's that nobody is actually selling. This course is the system we build for our clients, laid out over 5 days, so you can see exactly how it works and start on it yourself
            </p>
            <p>
              After the course you'll keep getting Pipeline &amp; Power, one useful thing every week or so, usually from our own numbers. If it's not for you, one click and you're off the list
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mc-teal py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-headline text-3xl font-black text-white leading-tight mb-3">Start {COURSE.title}</h2>
          <p className="font-body text-gray-300 mb-8">Free. Day 1 lands in your inbox as soon as you confirm</p>
          <div className="text-left"><LeadMagnetForm button="Send me day 1" /></div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
