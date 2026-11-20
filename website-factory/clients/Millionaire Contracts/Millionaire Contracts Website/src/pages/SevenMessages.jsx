import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'
import LeadMagnetForm from '../components/LeadMagnetForm'
import { LEAD_MAGNET } from '../lib/leadMagnet'

// The page that grows the Pipeline & Power list: one promise, what's inside,
// a little proof, and first name plus email. The PDF itself is handed over
// on /newsletter-confirm once they click the link in the confirmation email.

const inside = [
  ['The first message', 'One real detail about them and one easy question. No pitch'],
  ['The bump', 'What to send 3 working days later, and why giving them a way out gets replies'],
  ['When they ask "how much?"', 'How to say the number early without scaring anyone off'],
  ['When they say "send me some info"', 'Usually a polite no. This turns it back into a conversation'],
  ['When they say "not right now"', 'How to get a yes to a later date you can put in the diary'],
  ['Asking for the call', 'Two days, not a calendar link. Easy to say yes to'],
  ['The honest exit', 'The one that gets more replies than any other message'],
]

const proof = [
  { value: '120+', label: 'qualified appointments booked for Skayle 360' },
  { value: '$1.8M', label: 'in a year for Atlas Management, once the structure was in' },
  { value: '3.5% → 12%', label: 'more people finishing our own enquiry form, from one change' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: LEAD_MAGNET.long,
  description: 'A free download of 7 short, natural messages that get replies and book meetings with business owners, from Millionaire Contracts.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
}

function Cover() {
  return (
    <div className="relative mx-auto w-56 md:w-64 aspect-[210/297] rounded-lg bg-mc-dark shadow-2xl ring-1 ring-white/10 overflow-hidden rotate-[-3deg]">
      <div className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
      <div className="relative p-5 flex flex-col h-full">
        <img src="/mc-logo.png" alt="" className="w-28 bg-white rounded px-1.5 py-0.5" />
        <p className="mt-auto text-[9px] font-bold tracking-[0.18em] uppercase text-mc-gold">Free download</p>
        <p className="font-headline text-white font-black leading-tight text-xl mt-1">
          The 7 messages that <span className="text-mc-gold">book meetings</span>
        </p>
        <p className="text-[10px] text-gray-400 mt-2 mb-3">with South African business owners</p>
      </div>
    </div>
  )
}

export default function SevenMessages() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="The 7 messages that book meetings (free download)"
        description="7 short messages that get business owners to reply and book a meeting: the first message, the follow-up, the price question and more. Free from Millionaire Contracts."
        path="/7-messages"
        schema={schema}
      />
      <Navbar />

      <section className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <span className="section-label mb-4 block">Free download</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              The 7 messages that <span className="text-mc-gold">book meetings</span> with South African business owners
            </h1>
            <p className="font-body text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Most cold messages sound like a pitch, and people stop reading after one line. These don't. Copy them, change the names, and send them this week. You'll also get Beyond Referrals, our free 5-day course for growing past word of mouth
            </p>
            <div className="max-w-md">
              <LeadMagnetForm button="Send me the 7 messages" />
            </div>
          </div>
          <div className="hidden md:block"><Cover /></div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-3 block">What's inside</span>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight mb-10">
            Every message you need, from hello to booked
          </h2>
          <ol className="space-y-5">
            {inside.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-mc-teal text-mc-gold font-headline font-black flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-headline font-bold text-mc-teal text-lg">{t}</p>
                  <p className="font-body text-gray-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="font-body text-gray-600 mt-8">
            Plus the 3 rules that matter more than the words: how many to send, what to write down, and how often to follow up
          </p>
        </div>
      </section>

      <section className="bg-mc-cream py-16 px-6">
        <div className="max-w-screen-lg mx-auto grid sm:grid-cols-3 gap-6">
          {proof.map((p) => (
            <div key={p.value} className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-headline text-3xl font-black text-mc-gold mb-1">{p.value}</p>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-3 block">Who it's from</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal leading-tight mb-5">
            The best businesses aren't always the biggest
          </h2>
          <div className="font-body text-gray-700 leading-relaxed space-y-4">
            <p>
              I'm Kat, and I started Millionaire Contracts because I kept seeing the same thing. There are smaller businesses out there with better processes, better service and a better customer experience than the big brands. They just have to fight a lot harder to win the exact same client
            </p>
            <p>
              So that's who we work for. We build the structure that lets them compete: who to go after, what to say, the follow-ups and a pipeline so nothing slips. These 7 messages are a small piece of that, the part you can start using today
            </p>
            <p>
              After the download I'll send you something every few days that we've actually seen work, usually from our own numbers. If it's not for you, one click and you're off the list
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mc-teal py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-headline text-3xl font-black text-white leading-tight mb-3">Get the 7 messages</h2>
          <p className="font-body text-gray-300 mb-8">Free. It lands in your inbox in a minute</p>
          <div className="text-left"><LeadMagnetForm button="Send them to me" /></div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
