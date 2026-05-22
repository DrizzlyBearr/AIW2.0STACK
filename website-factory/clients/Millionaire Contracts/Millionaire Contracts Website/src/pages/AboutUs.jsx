import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

const HANDSHAKE = 'https://images.pexels.com/photos/7876502/pexels-photo-7876502.jpeg'
const MC_LOGO = 'https://cdn.gamma.app/dk6oknpm67llad7/280fcab067574360b8e6a5cc574b1bdd/original/Add-a-heading-1.png'

const team = [
  {
    name: 'Katleho Mohlomi',
    role: 'Founder & CEO',
    photo: 'https://storage.googleapis.com/msgsndr/A8PmgiSa8bKb0J1mBeLF/media/697a3bdd266d73a70af7464e.png',
  },
  {
    name: 'Miense Mpasa',
    role: 'VP Business Development',
    photo: 'https://storage.googleapis.com/msgsndr/A8PmgiSa8bKb0J1mBeLF/media/697a3bdd1927c83cb243a485.png',
  },
  {
    name: 'Tokollo Legodi',
    role: 'Non-Executive Director',
    photo: 'https://storage.googleapis.com/msgsndr/A8PmgiSa8bKb0J1mBeLF/media/697a3bddf215dab0a54a0320.png',
  },
]

const whatWeDo = [
  'Turning conversations into decisions',
  'Turning demand into revenue',
  'Turning teams into operating systems',
  'Turning chaos into clarity',
]

const howWeWork = [
  { step: 1, heading: 'Ask the right questions', body: 'We start by understanding your business, your market, and the exact friction blocking your revenue.' },
  { step: 2, heading: 'Build with intention', body: 'Every strategy, process, and hire is designed for your specific context, not copied from a generic playbook.' },
  { step: 3, heading: 'Refine through feedback', body: 'We measure what matters, listen to what the data tells us, and adjust in real time.' },
  { step: 4, heading: 'Scale what works', body: 'Once a system proves itself, we build the infrastructure to run it at scale without losing performance.' },
]

const pills = ['About', 'What we do', 'Team', 'Why we exist']

export default function AboutUs() {
  const [activePill, setActivePill] = useState('About')

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-mc-teal py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80)',
            opacity: 0.3,
          }}
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-mc-gold font-semibold uppercase tracking-widest text-sm mb-2">Get to Know the Millionaires!</p>
          <h2 className="text-4xl font-headline font-bold text-white">About Us</h2>
        </div>
      </div>

      {/* Pill nav */}
      <div className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-3 flex-wrap">
        {pills.map((p) => (
          <button
            key={p}
            onClick={() => setActivePill(p)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              activePill === p ? 'bg-mc-teal text-white' : 'bg-gray-100 text-mc-teal hover:bg-gray-200'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Hero card */}
      <section className="bg-mc-teal py-16 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={MC_LOGO} alt="Millionaire Contracts" className="h-16 mb-6 object-contain" onError={(e) => e.target.style.display='none'} />
            <h1 className="font-headline text-4xl font-bold text-white mb-4">Millionaire Contracts</h1>
            <p className="font-body text-gray-300 text-lg leading-relaxed">
              Turning revenue into power through systems that work under pressure.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={HANDSHAKE} alt="Partnership" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* About band */}
      <section className="bg-mc-teal py-14 px-6">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h2 className="font-headline text-2xl font-bold text-white mb-4">About</h2>
          <p className="font-body text-gray-300 leading-relaxed mb-4">
            Millionaire Contracts was built out of necessity. We saw businesses with real potential held back by broken sales processes, poorly trained teams, and strategies that had no teeth. We stepped in to fix it.
          </p>
          <p className="font-body text-gray-300 leading-relaxed">
            Today we partner with ambitious organizations across Africa and beyond to build sales operations that perform under pressure. We are not consultants who hand you a report and leave. We work inside your business until the results are real.
          </p>
        </div>
      </section>

      {/* What We Actually Do */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-mc-teal text-center mb-10">What We Actually Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item) => (
              <div key={item} className="bg-mc-cream rounded-xl p-6 text-center">
                <p className="font-headline font-semibold text-mc-teal text-base leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue philosophy */}
      <section className="bg-mc-teal py-16 px-6">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h2 className="font-headline text-2xl font-bold text-white mb-6">Revenue Philosophy</h2>
          <ul className="space-y-3 mb-8">
            {[
              'Revenue follows process, not hustle.',
              'Clarity in sales structure creates confidence in the field.',
              'The best salespeople have a system behind them.',
              'Strategy without execution is noise.',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 font-body text-gray-300">
                <span className="w-2 h-2 rounded-full bg-mc-gold flex-shrink-0 mt-2" />
                {line}
              </li>
            ))}
          </ul>
          <p className="font-body text-white font-semibold text-lg border-l-4 border-mc-gold pl-4">
            Most revenue problems are not solved by doing more. They are solved by removing friction.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-mc-teal text-center mb-10">The Team</h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=132b2f&color=fff&size=128` }}
                  />
                </div>
                <h3 className="font-headline font-bold text-mc-teal">{member.name}</h3>
                <p className="font-body text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-mc-cream py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-mc-teal text-center mb-10">How We Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6">
                <div className="w-8 h-8 rounded-full bg-mc-gold text-white font-headline font-bold flex items-center justify-center mb-3 text-sm">
                  {step.step}
                </div>
                <h3 className="font-headline font-bold text-mc-teal mb-2">{step.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mc-teal py-14 px-6 text-center">
        <h2 className="font-headline text-3xl font-bold text-white mb-4">Why We Exist</h2>
        <p className="font-body text-gray-300 mb-6 max-w-xl mx-auto">
          We exist to make sure that the best products and services in the world are not lost to poor sales execution.
        </p>
        <a href="/contact-us" className="btn-gold">Get in Touch</a>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
