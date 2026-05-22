import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

const LOGO = 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/66fe6791c6d28935508f7ce5.png'

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
  { label: 'Management overhead', inhouse: 'You hire, train, manage, retain', mc: 'Done for you — end to end' },
  { label: 'Ramp time', inhouse: '3–6 months before they produce', mc: 'Operational from day one' },
  { label: 'Results guarantee', inhouse: 'None', mc: 'Results-driven structure' },
  { label: 'Expertise level', inhouse: 'Depends on who you can afford to hire', mc: 'Senior closers and strategists immediately' },
]

const services = [
  {
    title: 'Sales Strategy Development',
    problem: 'You have a product but no repeatable way to sell it.',
    what: 'We audit your market position, map your buyer journey, and build a sales playbook — pricing strategy, pitch framework, objection responses, and KPIs — specific to your niche and team.',
    outcome: 'A ready-to-run sales playbook your team executes from day one.',
    to: '/sales-strategy-development',
    tag: 'Strategy',
  },
  {
    title: 'Sales Management',
    problem: 'Your sales team is active but not accountable to a system.',
    what: 'We step in as your sales management layer — setting targets, running pipeline reviews, coaching reps, and building the reporting infrastructure that keeps performance visible and consistent.',
    outcome: 'A managed sales operation that hits targets without your constant input.',
    to: '/sales-management',
    tag: 'Management',
  },
  {
    title: 'Sales Closing',
    problem: 'Deals stall at the finish line and you are not sure why.',
    what: 'We deploy trained closers directly into your pipeline. They handle discovery, objection handling, and the final conversion — working as an extension of your team inside active deals.',
    outcome: 'More deals closed, faster, by people who do this every day.',
    to: '/sales-closing',
    tag: 'Closing',
  },
  {
    title: 'Appointment Setting',
    problem: 'Your pipeline is thin because outreach is inconsistent.',
    what: 'We run your outbound engine — identifying your ideal accounts, crafting the outreach, handling follow-up, and booking qualified meetings directly into your calendar.',
    outcome: 'A full calendar of decision-maker meetings, every week.',
    to: '/appointment-setting',
    tag: 'Outbound',
  },
]

const caseResults = [
  { client: 'KPG / MTN Zambia', metric: '12+', label: 'Enterprise deals closed', slug: '/kpg-mtn' },
  { client: 'BaseHome Capital', metric: '65%', label: 'Meeting success rate', slug: '/basehome-capital' },
  { client: 'Sigma Health Technologies', metric: '3x', label: 'Pipeline growth', slug: '/portfolio' },
  { client: 'Eads Bridge Holdings', metric: '100%', label: 'Client satisfaction', slug: '/portfolio' },
]

const testimonials = [
  {
    quote: 'Millionaire Contracts transformed our entire sales operation. Their strategic approach gave us the structure and pipeline discipline we were missing. The results have been outstanding.',
    name: 'Dallen S.',
    company: 'Eads Bridge Holdings',
    initials: 'DS',
  },
  {
    quote: 'The appointment setting service exceeded every expectation. They delivered qualified leads consistently and their team integrated seamlessly with ours from day one.',
    name: 'Alex M.',
    company: 'MTN Zambia',
    initials: 'AM',
  },
  {
    quote: 'Working with Millionaire Contracts on our private equity outreach was a decision that paid off immediately. Their closing team drove a 65% meeting success rate across targeted investor accounts.',
    name: 'Jamil V.',
    company: 'BaseHome Capital',
    initials: 'JV',
  },
  {
    quote: 'From strategy to execution, the Millionaire Contracts team delivered a level of sales intelligence we had not experienced before. They operate like an extension of our business.',
    name: 'Haroon I.',
    company: 'Sigma Health Technologies',
    initials: 'HI',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-mc-dark relative overflow-hidden">
        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Africa's Sales Agency</span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              We Build Sales Operations<br />
              <span className="text-mc-gold">That Win.</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Strategy, management, closing, and appointment setting — fully deployed into your business so your pipeline never stops producing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/calender" className="btn-primary">Schedule a Call</Link>
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
          <div className="flex flex-wrap justify-center items-center gap-10">
            {partnerLogos.map((p) => (
              <img
                key={p.name}
                src={p.image}
                alt={p.name}
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => { e.target.style.display = 'none' }}
              />
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
          <div className="max-w-xl mb-14">
            <span className="section-label mb-3 block">What We Do</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight">
              Four ways we grow your revenue
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group bg-white/5 border border-white/10 rounded-xl p-7 hover:border-mc-gold/50 transition-all duration-200 flex flex-col gap-5"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-headline font-bold text-white text-lg leading-snug group-hover:text-mc-gold transition-colors">{s.title}</h3>
                  <span className="flex-shrink-0 text-xs font-body font-semibold text-mc-gold border border-mc-gold/40 rounded-full px-3 py-1">{s.tag}</span>
                </div>

                {/* Problem */}
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-gray-500 mb-1">The problem</p>
                  <p className="font-body text-gray-300 text-sm leading-relaxed">{s.problem}</p>
                </div>

                {/* What we do */}
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-gray-500 mb-1">What we do</p>
                  <p className="font-body text-gray-400 text-sm leading-relaxed">{s.what}</p>
                </div>

                {/* Outcome */}
                <div className="border-t border-white/10 pt-4 mt-auto flex items-center justify-between">
                  <p className="font-body text-sm text-white font-semibold">{s.outcome}</p>
                  <span className="text-mc-gold text-lg group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
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
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="section-label mb-3 block">Client Feedback</span>
            <h2 className="font-headline text-4xl font-black text-mc-teal leading-tight">
              What our clients say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-gray-200 rounded-xl p-7 flex flex-col gap-4 hover:border-mc-gold/40 hover:shadow-md transition-all">
                <div className="text-mc-gold text-3xl font-headline font-black leading-none">"</div>
                <p className="font-body text-gray-700 text-sm leading-relaxed flex-grow">{t.quote}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-mc-teal flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-mc-teal text-sm">{t.name}</div>
                    <div className="font-body text-gray-400 text-xs">{t.company}</div>
                  </div>
                </div>
              </div>
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
                  body: 'Every section is sequenced to move a prospect from curious to confident. No filler, no fluff — only what earns trust and pushes action.',
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
