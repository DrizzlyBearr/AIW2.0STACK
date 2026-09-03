import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import SEOMeta from '../components/SEOMeta'

const LOGO = '/mc-logo.png'

const stats = [
  { value: '65%', label: 'Meeting success rate' },
  { value: '20+', label: 'Companies scaled' },
  { value: '3x', label: 'Average pipeline growth' },
  { value: '8+', label: 'Strategic partnerships closed' },
]

const partnerLogos = [
  { name: 'MTN Zambia', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/69538090e889d355d2fbdd82.jpg' },
  { name: 'BaseHome Capital', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/6953809073a5e015a8b56b76.png' },
  { name: 'Eads Bridge Holdings', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/69538090e2519585d9da3509.webp' },
  { name: 'Sigma Health Technologies', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/69538090ee10476b334bbf9f.jpg' },
  { name: 'Keen People', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/69538090a61a7eda49cbfd75.png' },
]

const painPoints = [
  { heading: 'Your reps are busy but revenue is flat', body: 'Activity without a system produces noise, not results. Effort alone does not close enterprise deals.' },
  { heading: 'You built a team but not a process', body: 'Hiring salespeople without sales infrastructure is like buying cars with no roads. Speed without direction.' },
  { heading: 'You are losing deals you should be winning', body: 'The best product does not always win. The best-sold product does. Objection handling and closing discipline decide the outcome.' },
  { heading: 'Outreach is inconsistent', body: 'Without a repeatable appointment-setting engine, your pipeline depends on who showed up energized this week.' },
]

const comparison = [
  { label: 'Time to first results', inhouse: '6–12 months', mc: '30 days' },
  { label: 'Monthly cost', inhouse: '$15k+ per rep (salary + benefits)', mc: 'Performance-aligned engagement' },
  { label: 'Management overhead', inhouse: 'You hire, train, manage, retain', mc: 'Done for you, end to end' },
  { label: 'Ramp time', inhouse: '3–6 months before they produce', mc: 'Operational from day one' },
  { label: 'Results guarantee', inhouse: 'None', mc: 'Results-driven structure' },
  { label: 'Expertise level', inhouse: 'Depends on who you can afford to hire', mc: 'Senior closers and strategists immediately' },
]

const pillars = [
  { name: 'Pre-Qualifying Website', line: 'A site that qualifies enquiries before they ever reach a human.', to: '/services#pre-qualifying-website' },
  { name: 'Qualification Framework', line: 'The scoring that decides which enquiries deserve your time.', to: '/services#qualification-framework' },
  { name: 'Scripts and Conversation Flows', line: 'Openers, discovery, objections and closes, written for your market.', to: '/services#scripts-and-conversation-flows' },
  { name: 'CRM and Pipeline Setup', line: 'The pipeline installed so nothing leaks between quote and close.', to: '/services#crm-and-pipeline-setup' },
  { name: 'Outreach Engine', line: 'Cadences and channels for consistent outbound volume.', to: '/services#outreach-engine' },
]

const caseResults = [
  { client: 'KPG / MTN Zambia', metric: '12+', label: 'Enterprise deals closed', slug: '/kpg-mtn' },
  { client: 'BaseHome Capital', metric: '65%', label: 'Meeting success rate', slug: '/basehome-capital' },
  { client: 'Sigma Health Technologies', metric: '3x', label: 'Pipeline growth', slug: '/portfolio' },
  { client: 'Eads Bridge Holdings', metric: '100%', label: 'Client satisfaction', slug: '/portfolio' },
]

const featuredGuides = [
  {
    to: '/what-is-sales-outsourcing',
    category: 'Start here',
    title: 'What Is Sales Outsourcing and Is It Right for Your Business?',
    desc: 'The definition, the four engagement models, and a framework for deciding whether it fits where you are.',
  },
  {
    to: '/five-signs-you-need-outsourced-sales',
    category: 'Diagnostic',
    title: '5 Signs Your Business Needs an Outsourced Sales Team',
    desc: 'The patterns that show up in businesses with a working offer that are not growing at the pace they should be.',
  },
  {
    to: '/what-does-outsourced-sales-cost',
    category: 'Pricing',
    title: 'What Does Outsourced Sales Actually Cost?',
    desc: 'Every pricing model explained, the factors that drive the number, and how to think about return.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Millionaire Contracts | We Install Your Sales Function"
        description="Millionaire Contracts installs a complete sales function: a pre-qualifying website, a qualification framework, scripts, CRM and pipeline setup, and an outreach engine, plus a trained rep who works your pipeline daily. 65% meeting success rate, 20+ companies scaled."
        path="/home"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-mc-dark relative overflow-hidden">
        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Global Sales Agency</span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              We Build Sales Operations<br />
              <span className="text-mc-gold">That Win.</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              We install a complete sales function, then place a trained rep who works your pipeline every day. Five builds and a person, not another report.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">See What We Install</Link>
              <Link to="/portfolio" className="btn-secondary">View Our Work</Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="bg-white border-b border-gray-100 py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-body text-xs uppercase tracking-widest text-gray-400 text-center mb-8">
            Trusted by ambitious companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partnerLogos.map((p) => (
              <div key={p.name} className="bg-white border border-gray-100 rounded-xl px-6 py-4 flex items-center justify-center h-20 w-44 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-12 max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  onError={(e) => { e.target.parentNode.style.display = 'none' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM / AGITATE ── */}
      <section className="bg-mc-teal py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-3 block">The Real Problem</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight">
              Most companies don't have a sales problem.<br />
              <span className="text-mc-gold">They have a systems problem.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.heading} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-mc-gold/40 transition-colors">
                <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
                <h3 className="font-headline font-bold text-white text-lg mb-2">{p.heading}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILD VS BUY ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block">Build vs. Buy</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-mc-teal leading-tight">
              Why companies choose us over building in-house
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 font-body font-semibold text-gray-500 text-sm bg-gray-50 w-1/3">Capability</th>
                  <th className="text-left px-6 py-4 font-body font-semibold text-gray-400 text-sm bg-gray-50">In-house sales team</th>
                  <th className="text-left px-6 py-4 font-headline font-bold text-mc-teal text-sm bg-mc-gold/10">Millionaire Contracts</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-6 py-4 font-body font-semibold text-mc-teal text-sm">{row.label}</td>
                    <td className="px-6 py-4 font-body text-gray-500 text-sm">{row.inhouse}</td>
                    <td className="px-6 py-4 font-body font-semibold text-mc-teal text-sm bg-mc-gold/5">
                      <span className="flex items-center gap-2">
                        <span className="text-mc-gold font-bold">✓</span>
                        {row.mc}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-mc-dark py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-3 block">What We Install</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              We install a sales function, then a rep who works it
            </h2>
            <p className="font-body text-gray-400 text-base md:text-lg leading-relaxed">
              Five builds that work as one system. A website that qualifies is worth less without scripts that convert and a rep who calls, so we build them together.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <Link
                key={p.to}
                to={p.to}
                className="group bg-white/5 border border-white/10 rounded-xl p-7 hover:border-mc-gold/50 transition-all duration-200 flex flex-col"
              >
                <span className="font-headline text-4xl font-black text-mc-gold/25 leading-none mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-headline font-bold text-white text-lg leading-snug mb-2 group-hover:text-mc-gold transition-colors">{p.name}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{p.line}</p>
              </Link>
            ))}
            {/* The rep + package tile */}
            <Link
              to="/services"
              className="group bg-mc-gold rounded-xl p-7 flex flex-col justify-between hover:bg-mc-gold-light transition-colors"
            >
              <div>
                <h3 className="font-headline font-black text-mc-dark text-lg leading-snug mb-2">Plus a trained rep, and the full package</h3>
                <p className="font-body text-mc-dark/80 text-sm leading-relaxed">
                  A rep who works your pipeline daily, paid on what they close. Take one build, or take The Full Stack.
                </p>
              </div>
              <span className="font-headline font-bold text-mc-dark text-sm inline-flex items-center gap-2 mt-6">
                See the whole system
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY RESULTS ── */}
      <section className="bg-mc-teal-light py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block">Proven Results</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight">
              Numbers from real engagements
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {caseResults.map((r) => (
              <Link
                key={r.client}
                to={r.slug}
                className="group bg-mc-dark/60 border border-white/10 rounded-xl p-6 hover:border-mc-gold/40 transition-all text-center"
              >
                <div className="font-headline text-5xl font-black text-mc-gold mb-2">{r.metric}</div>
                <div className="font-body text-sm text-gray-300 mb-1">{r.label}</div>
                <div className="font-body text-xs text-gray-500">{r.client}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── RESOURCES STRIP ── */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div className="max-w-xl">
              <span className="section-label mb-3 block">Resources</span>
              <h2 className="font-headline text-4xl font-black text-mc-teal leading-tight">
                Deciding how to grow your pipeline?
              </h2>
              <p className="font-body text-gray-500 text-base leading-relaxed mt-3">
                Straight answers on outsourced sales, pricing, and building a process that works. No pitch.
              </p>
            </div>
            <Link to="/resources" className="font-headline font-bold text-mc-gold inline-flex items-center gap-2 flex-shrink-0 hover:gap-3 transition-all">
              View all guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredGuides.map((g) => (
              <Link
                key={g.to}
                to={g.to}
                className="flex flex-col bg-white rounded-xl p-7 border border-gray-100 hover:border-mc-gold/40 hover:shadow-md transition-all group"
              >
                <span className="inline-block self-start bg-mc-teal/5 border border-mc-teal/10 text-mc-teal text-xs font-bold rounded-full px-3 py-1 mb-4">{g.category}</span>
                <h3 className="font-headline text-lg font-black text-mc-teal leading-snug mb-3 group-hover:text-mc-gold transition-colors">{g.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{g.desc}</p>
                <span className="font-headline font-bold text-mc-gold text-sm inline-flex items-center gap-2 mt-auto">
                  Read the guide
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI WEB AGENCY ── */}
      <section className="bg-mc-dark py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <span className="section-label mb-3 block">For Sales Businesses</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Your website should close deals<br />
                <span className="text-mc-gold">before your team picks up the phone.</span>
              </h2>
              <p className="font-body text-gray-400 text-base leading-relaxed mb-8">
                Sales businesses run on credibility. When a prospect visits your site before a call, what they see decides whether they show up ready to buy or ready to interrogate. We build AI-powered websites for sales agencies and sales-driven businesses that convert before the first conversation starts.
              </p>
              <Link to="/contact-us" className="btn-primary">Build Your Sales Website</Link>
            </div>

            {/* Right: benefit cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  label: 'Conversion-first architecture',
                  body: 'Every section is sequenced to move a prospect from curious to confident. No filler, no fluff, only what earns trust and pushes action.',
                },
                {
                  label: 'Built in days, not months',
                  body: 'AI-assisted development means a fully custom, production-ready site delivered in a fraction of the traditional agency timeline and cost.',
                },
                {
                  label: 'Designed for the sales niche',
                  body: 'Not a generic template. Built to reflect the authority, proof, and results that decision-makers in sales-driven businesses expect to see.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 hover:border-mc-gold/40 transition-colors">
                  <div className="flex-shrink-0 w-1.5 bg-mc-gold rounded-full" />
                  <div>
                    <h3 className="font-headline font-bold text-white text-base mb-1">{item.label}</h3>
                    <p className="font-body text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-mc-gold py-16 px-6 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
          Ready to build a sales operation<br className="hidden md:block" /> that actually delivers?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to show you where your revenue is leaking and how we fix it.
        </p>
        <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-base">
          Book Your Free Strategy Call
        </Link>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
