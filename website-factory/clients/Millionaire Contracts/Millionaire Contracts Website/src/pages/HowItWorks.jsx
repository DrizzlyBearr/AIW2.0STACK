import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sales Function Installation',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  description:
    'How Millionaire Contracts installs a sales function: a pre-qualifying website, a qualification framework, scripts, CRM and pipeline setup, and an outreach engine, plus a trained rep who works the pipeline daily with weekly reporting.',
}

const steps = [
  {
    number: '01',
    heading: 'The qualifier, then a call',
    body: 'You answer the qualifier on our site, then we talk. We use the call to confirm which builds you need and what a rep would work, not to pitch you.',
  },
  {
    number: '02',
    heading: 'The build plan',
    body: 'We map which of the five builds you need and in what order, what the rep will work once it is live, and what success looks like. You see it before we start.',
  },
  {
    number: '03',
    heading: 'Installation',
    body: 'We build. Inside your account you watch each piece move from in progress, to ready for your review, to approved. Nothing happens off to the side.',
  },
  {
    number: '04',
    heading: 'Live, and reported',
    body: 'The rep works your pipeline every day. A written report lands every Friday covering that week’s activity, pipeline movement, and value closed.',
  },
]

const pillars = [
  { name: 'Pre-Qualifying Website', line: 'A site that qualifies enquiries before they reach a human.', to: '/services#pre-qualifying-website' },
  { name: 'Qualification Framework', line: 'The scoring that decides which enquiries deserve pursuit.', to: '/services#qualification-framework' },
  { name: 'Scripts and Conversation Flows', line: 'Openers, discovery, objections and closes, written for your market.', to: '/services#scripts-and-conversation-flows' },
  { name: 'CRM and Pipeline Setup', line: 'The pipeline installed so nothing leaks between quote and close.', to: '/services#crm-and-pipeline-setup' },
  { name: 'Outreach Engine', line: 'Cadences and channels for consistent outbound volume.', to: '/services#outreach-engine' },
]

const guarantees = [
  { heading: 'No long-term lock-in', body: 'Engagements are structured around results, not retainer length. You are not tied into a year and hoping it works.' },
  { heading: 'Replacement guarantee', body: 'If a rep is not performing, we replace them. No delays, no HR complexity, no lost months waiting on a new hire.' },
  { heading: 'You own the playbook', body: 'Every build, script and process we install is yours. When an engagement ends, your business keeps the infrastructure.' },
]

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="How It Works"
        description="How Millionaire Contracts installs a sales function: the qualifier and a call, a build plan, installation you watch inside your account, then a rep working your pipeline daily with a written report every Friday."
        path="/how-it-works"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">How It Works</span>
            <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              You watch us build it,<br />
              <span className="text-mc-gold">then a rep works it.</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              We install a sales function in a set order and place a trained rep on your account to work it. Every step is visible inside your own account, so you are never waiting on a status update to know where things stand.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '20+', label: 'Companies scaled' },
            { value: '65%', label: 'Average meeting success rate' },
            { value: 'Day 1', label: 'Visible in your account' },
            { value: 'Weekly', label: 'Written reporting' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
              <div className="font-body text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block" style={{ color: '#d8920e' }}>The process</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              From the qualifier to a working pipeline
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="relative">
                <div className="font-headline text-6xl font-black text-mc-gold/15 leading-none mb-3">{s.number}</div>
                <h3 className="font-headline font-bold text-mc-teal text-lg mb-3">{s.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What gets installed */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block" style={{ color: '#d8920e' }}>What gets installed</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              Five builds, one system, one rep
            </h2>
            <p className="font-body text-gray-500 mt-4 text-base">
              Take one build on its own, or install the whole function as The Full Stack. Either way, a trained rep can work the pipeline once it is live.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {pillars.map((p, i) => (
              <Link
                key={p.to}
                to={p.to}
                className="group bg-white rounded-xl border border-gray-200 p-7 hover:border-mc-gold/60 hover:shadow-md transition-all flex flex-col"
              >
                <span className="font-headline text-4xl font-black text-mc-gold/25 leading-none mb-4">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-headline font-bold text-mc-teal text-lg leading-snug mb-2 group-hover:text-mc-gold transition-colors">{p.name}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{p.line}</p>
              </Link>
            ))}
            <Link to="/services" className="group bg-mc-gold rounded-xl p-7 flex flex-col justify-between hover:bg-mc-gold-light transition-colors">
              <div>
                <h3 className="font-headline font-black text-mc-dark text-lg leading-snug mb-2">The rep, and The Full Stack</h3>
                <p className="font-body text-mc-dark/80 text-sm leading-relaxed">
                  A trained rep who works your pipeline daily, paid on what they close. See the whole system and the package.
                </p>
              </div>
              <span className="font-headline font-bold text-mc-dark text-sm inline-flex items-center gap-2 mt-6">
                See what we install
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <Testimonials heading="Trusted by the companies we scale" label="Client Feedback" />

      {/* Guarantees */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block" style={{ color: '#d8920e' }}>Our commitment</span>
            <h2 className="font-headline text-3xl font-black text-mc-teal">What we stand behind</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {guarantees.map((g) => (
              <div key={g.heading} className="bg-mc-dark rounded-xl p-7 border border-white/10">
                <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-5" />
                <h3 className="font-headline font-bold text-white mb-3">{g.heading}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mc-gold py-16 px-6 text-center">
        <h2 className="font-headline text-4xl font-black text-white mb-4 leading-tight">
          Start with the qualifier.
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          A few questions tell us which builds you need and whether a rep can work on a share of what they close. Then we talk.
        </p>
        <Link to="/services" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
          See What We Install
        </Link>
      </section>

      <Footer />
    </div>
  )
}
