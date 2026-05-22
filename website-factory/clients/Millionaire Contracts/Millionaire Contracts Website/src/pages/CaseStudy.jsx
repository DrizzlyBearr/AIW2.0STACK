import { Link, useParams, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { caseStudies } from '../data/caseStudies'
import { portfolioClients } from '../data/portfolio'

export default function CaseStudy() {
  const { slug } = useParams()
  const data = caseStudies[slug]

  if (!data) return <Navigate to="/portfolio" replace />

  const client = portfolioClients.find((c) => c.slug === slug)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <div className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #0a1a1d 0%, #132b2f 100%)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-mc-gold border border-mc-gold/40 rounded-full px-3 py-1">
              Case Study
            </span>
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-gray-400 border border-white/10 rounded-full px-3 py-1">
              {data.category}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight mb-4">
                {data.name}
              </h1>
              <p className="font-body text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                {data.tagline}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.services.map((s) => (
                  <span key={s} className="text-xs font-body font-semibold text-mc-gold bg-mc-gold/10 border border-mc-gold/30 rounded-full px-3 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {client?.image && (
              <div className="flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-10 h-44">
                <img
                  src={client.image}
                  alt={data.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="bg-mc-teal">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-headline text-4xl font-black text-mc-gold mb-1">{m.value}</div>
              <div className="font-body text-sm text-gray-300">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Context */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Background</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Business Context</h2>
          <div className="space-y-4">
            {data.context.map((para, i) => (
              <p key={i} className="font-body text-gray-700 leading-relaxed text-base">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Engagement</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-8">Scope of Work</h2>
          <ul className="space-y-4">
            {data.scope.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-mc-gold/10 border border-mc-gold/40 flex items-center justify-center mt-0.5">
                  <span className="text-mc-gold text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-gray-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>What This Means</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">The Outcome</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-8">{data.outcome}</p>
          <blockquote className="border-l-4 border-mc-gold pl-6 py-2">
            <p className="font-body text-gray-600 italic leading-relaxed text-base">"{data.insight}"</p>
          </blockquote>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-mc-gold py-16 px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4">
          Ready to build your own success story?
        </h2>
        <p className="font-body text-amber-100 text-base mb-8 max-w-lg mx-auto">
          One call is enough to show you where your revenue is leaking and how we fix it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/calender" className="bg-white text-mc-teal font-headline font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Book a Strategy Call
          </Link>
          <Link to="/portfolio" className="border border-white text-white font-headline font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
