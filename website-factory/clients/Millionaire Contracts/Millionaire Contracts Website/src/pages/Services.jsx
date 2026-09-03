import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

// Working name for the complete package. Swap in one place when finalised.
const PACKAGE_NAME = 'The Full Stack'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sales Function Installation',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  description:
    'Millionaire Contracts installs a complete sales function: a pre-qualifying website, a qualification framework, scripts and conversation flows, CRM and pipeline setup, and an outreach engine, plus a trained rep who works the pipeline daily.',
}

const pillars = [
  {
    name: 'Pre-Qualifying Website',
    what: 'We review your existing site, then rebuild it so enquiries are pre-qualified before they ever reach a human.',
    changes: 'The site asks the questions that decide whether an enquiry is worth an hour, instead of collecting a name and a message.',
  },
  {
    name: 'Qualification Framework',
    what: 'The scoring system that decides which enquiries deserve pursuit, so effort lands on winnable work.',
    changes: 'Revenue fit, decision-maker level, timeline, and explicit disqualifiers, applied the same way every time.',
  },
  {
    name: 'Scripts and Conversation Flows',
    what: 'Openers, discovery, objection handling and closes, written for your market in your buyers’ language.',
    changes: 'Not templates. Written per client, so the words fit the room your rep is walking into.',
  },
  {
    name: 'CRM and Pipeline Setup',
    what: 'The pipeline, stages and logging discipline installed and configured inside your system.',
    changes: 'Nothing leaks between quote and close, because every deal has a place to sit and a next step.',
  },
  {
    name: 'Outreach Engine',
    what: 'Cadences, templates and channel setup for consistent outbound volume.',
    changes: 'New business stops depending on who felt motivated this week.',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="What We Install"
        description="Millionaire Contracts installs a sales function for businesses that do not have one. Five builds plus a trained rep who works your pipeline daily, with a client portal that shows the work as it happens."
        path="/services"
        schema={schema}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-mc-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">What We Install</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-[1.08] mb-6">
              We install a sales function<br />
              <span className="text-mc-gold">for businesses that do not have one.</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
              Five builds, plus a trained rep who works your pipeline every day. Each build stands on its own. Together they are a sales function that runs whether or not you are in the room.
            </p>
            <p className="font-body text-gray-500 text-base leading-relaxed max-w-2xl">
              This is one system, not a menu. A website that qualifies is worth less without scripts that convert and a rep who calls.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE FIVE PILLARS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-3 block">The Five Builds</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              The order you see them in is the order we build them
            </h2>
          </div>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.name}
                className="group bg-mc-dark rounded-xl border border-white/10 p-7 md:p-9 flex flex-col md:flex-row gap-6 md:gap-10 hover:border-mc-gold/40 transition-colors"
              >
                <div className="flex-shrink-0">
                  <span className="font-headline text-5xl md:text-6xl font-black text-mc-gold/25 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:pt-1">
                  <h3 className="font-headline text-xl md:text-2xl font-black text-white mb-3">{p.name}</h3>
                  <p className="font-body text-gray-300 text-base leading-relaxed mb-3 max-w-2xl">{p.what}</p>
                  <div className="flex items-start gap-3 max-w-2xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-mc-gold flex-shrink-0 mt-2.5" />
                    <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed">{p.changes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-gray-500 text-sm leading-relaxed mt-8 max-w-2xl">
            You can buy one build on its own. Most businesses miss revenue because two or three of these are absent at once, which is why we install them as a set.
          </p>
        </div>
      </section>

      {/* ── THE REP ── */}
      <section className="bg-mc-gold py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-mc-dark/70 mb-4 block">
                The part nobody else offers
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-mc-dark leading-[1.1] mb-6">
                A trained rep, on your account, working the pipeline daily
              </h2>
              <p className="font-body text-mc-dark/80 text-lg leading-relaxed mb-5 max-w-xl">
                Every build above hands work to a person. So we place a launch-certified rep on your account. They work your pipeline every day and report on it every week.
              </p>
              <p className="font-headline text-mc-dark text-xl md:text-2xl font-black leading-snug max-w-xl">
                This line costs nothing up front. We are paid a share of what the rep closes.
              </p>
            </div>
            <div className="bg-mc-dark rounded-xl p-8">
              <p className="font-body text-gray-400 text-sm leading-relaxed mb-5">
                What the rep does, week to week:
              </p>
              <ul className="space-y-4">
                {[
                  'Works every live enquiry through the pipeline',
                  'Runs discovery and closing conversations from your scripts',
                  'Logs every deal so nothing goes quiet',
                  'Reports what moved, and what it was worth, every Friday',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="text-mc-gold font-bold text-lg leading-none mt-0.5">+</span>
                    <span className="font-body text-gray-200 text-sm leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE COMPLETE PACKAGE ── */}
      <section className="bg-mc-teal py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="section-label mb-4 block">The Complete Install</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            {PACKAGE_NAME}
          </h2>
          <p className="font-body text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            All five builds and the rep, as one engagement. The website that qualifies, the framework that scores, the scripts that convert, the pipeline that holds, the outreach that fills it, and the person who works it. A sales function, installed and running.
          </p>
          <Link to="/contact-us" className="btn-primary">
            Start the qualifier
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
