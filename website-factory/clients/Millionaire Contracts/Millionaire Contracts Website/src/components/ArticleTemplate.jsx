import { Link } from 'react-router-dom'
import { marked } from 'marked'
import Navbar from './Navbar'
import Footer from './Footer'
import SEOMeta from './SEOMeta'
import ArticleCTA from './ArticleCTA'
import NewsletterSignup from './NewsletterSignup'

const SITE = 'https://www.millionairecontracts.com'

marked.setOptions({ mangle: false, headerIds: false })

// Generic renderer for a data-driven article entry. Same visual language as the
// hand-coded article pages, but driven entirely by a content data object so the
// content engine can produce new articles without writing components.
export default function ArticleTemplate({ entry }) {
  if (!entry) return null
  const {
    slug,
    title,
    description,
    category = 'Guide',
    label,
    intro,
    stats = [],
    sections = [],
    faqs = [],
    related = [],
    ctaHeading,
    ctaBody,
  } = entry

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: SITE },
    mainEntityOfPage: `${SITE}/${slug}`,
  }
  const faqSchema = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  // Insert the mid-article CTA a little past halfway through the sections.
  const ctaAt = sections.length > 3 ? Math.ceil(sections.length / 2) : sections.length

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title={title}
        description={description}
        path={`/${slug}`}
        type="article"
        schema={faqSchema ? [schema, faqSchema] : schema}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">{label || category}</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">{title}</h1>
            {intro && <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">{intro}</p>}
          </div>
        </div>
      </div>

      {/* Stats bar (optional) */}
      {stats.length > 0 && (
        <div className="bg-mc-teal">
          <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-headline text-3xl font-black text-mc-gold mb-1">{s.value}</div>
                <div className="font-body text-sm text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Body sections */}
      {sections.map((sec, i) => (
        <div key={i}>
          <section className={`py-14 px-6 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
            <div className="max-w-3xl mx-auto">
              {sec.heading && (
                <h2 className="font-headline text-2xl md:text-3xl font-black text-mc-teal mb-6">{sec.heading}</h2>
              )}
              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: marked.parse(sec.body || '') }}
              />
            </div>
          </section>
          {i + 1 === ctaAt && (
            <ArticleCTA
              heading={ctaHeading || 'Want this handled for you?'}
              body={ctaBody || 'One call is enough to work out whether we are the right fit for where your business is right now.'}
            />
          )}
        </div>
      ))}

      {/* Related reading */}
      {related.length > 0 && (
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Go deeper</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((link) => (
                <Link key={link.to} to={link.to} className="block bg-white rounded-xl p-5 border border-gray-100 hover:border-mc-gold/40 transition-colors group">
                  <p className="font-headline font-bold text-mc-teal text-sm mb-1 group-hover:text-mc-gold transition-colors">{link.label}</p>
                  {link.desc && <p className="font-body text-gray-500 text-xs">{link.desc}</p>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl font-black text-mc-teal mb-10">Common questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-headline font-bold text-mc-teal mb-3">{f.q}</h3>
                  <p className="font-body text-gray-700 leading-relaxed text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter capture for readers not ready to book a call */}
      <NewsletterSignup />

      {/* Final CTA */}
      <section className="bg-mc-gold py-16 px-6 text-center">
        <h2 className="font-headline text-4xl font-black text-white mb-4 leading-tight">
          Ready to build a pipeline that produces?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether outsourced sales is the right fit for where your business is right now.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Book a Free Strategy Call
          </Link>
          <Link to="/services#qualify" className="inline-block border-2 border-white text-white font-headline font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
            See If We Are a Fit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
