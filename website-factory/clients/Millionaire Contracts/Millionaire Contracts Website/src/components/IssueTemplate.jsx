import { Link } from 'react-router-dom'
import { marked } from 'marked'
import Navbar from './Navbar'
import Footer from './Footer'
import SEOMeta from './SEOMeta'

const SITE = 'https://www.millionairecontracts.com'

marked.setOptions({ mangle: false, headerIds: false })

// Renders one Pipeline & Power newsletter issue as a site-hosted page, so late
// subscribers can read past issues and the content is indexable. Driven by a
// data object; the same object also feeds the email send.
export default function IssueTemplate({ entry }) {
  if (!entry) return null
  const { slug, number, date, subject, preview, sections = [] } = entry

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: subject,
    description: preview,
    datePublished: date,
    publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: SITE },
    mainEntityOfPage: `${SITE}/newsletter/${slug}`,
  }

  const dateLabel = date
    ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title={`${subject} | Pipeline & Power`}
        description={preview}
        path={`/newsletter/${slug}`}
        type="article"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-24">
          <Link to="/newsletter" className="section-label mb-4 inline-block hover:text-white transition-colors">
            Pipeline &amp; Power{number ? `, Issue ${String(number).padStart(2, '0')}` : ''}
          </Link>
          <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-4">{subject}</h1>
          {dateLabel && <p className="font-body text-gray-500 text-sm">{dateLabel}</p>}
        </div>
      </div>

      {/* Body */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          {sections.map((sec, i) => (
            <div key={i} className="mb-6">
              {sec.heading && (
                <h2 className="font-headline text-2xl font-black text-mc-teal mb-4 mt-6">{sec.heading}</h2>
              )}
              <div className="article-prose" dangerouslySetInnerHTML={{ __html: marked.parse(sec.body || '') }} />
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-mc-teal py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-white mb-3">Get the next issue in your inbox</h2>
          <p className="font-body text-gray-300 leading-relaxed mb-6">
            Pipeline &amp; Power goes out every fortnight. One shift in global business, what it means for your revenue, and one move to make.
          </p>
          <Link to="/pipeline-and-power" className="btn-primary">Subscribe</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
