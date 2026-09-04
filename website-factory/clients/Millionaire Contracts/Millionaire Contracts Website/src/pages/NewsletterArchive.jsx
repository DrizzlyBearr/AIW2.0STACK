import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'
import { issues } from '../lib/content'

export default function NewsletterArchive() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Pipeline & Power Archive"
        description="Every issue of Pipeline & Power, the fortnightly newsletter from Millionaire Contracts on global business shifts and what they mean for your revenue."
        path="/newsletter"
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Pipeline &amp; Power</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Every issue,<br /><span className="text-mc-gold">in one place</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              The fortnightly note on what is shifting in global business and what it means for your revenue. Read the back catalogue, then get the next one in your inbox.
            </p>
          </div>
        </div>
      </div>

      {/* Issues list */}
      <section className="py-16 px-6 flex-grow">
        <div className="max-w-3xl mx-auto">
          {issues.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-10 text-center border border-gray-100">
              <p className="font-body text-gray-600 leading-relaxed mb-6">
                The first issue is on its way. Subscribe and it lands in your inbox the moment it goes out.
              </p>
              <Link to="/pipeline-and-power" className="btn-primary">Subscribe</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {issues.map((issue) => (
                <Link
                  key={issue.slug}
                  to={`/newsletter/${issue.slug}`}
                  className="block bg-white rounded-xl p-6 border border-gray-100 hover:border-mc-gold/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {issue.number && (
                      <span className="inline-block bg-mc-gold/10 border border-mc-gold/30 text-mc-gold text-xs font-bold rounded-full px-3 py-1">
                        Issue {String(issue.number).padStart(2, '0')}
                      </span>
                    )}
                    {issue.date && (
                      <span className="font-body text-gray-400 text-xs">
                        {new Date(issue.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    )}
                  </div>
                  <h2 className="font-headline text-xl font-black text-mc-teal leading-snug mb-2 group-hover:text-mc-gold transition-colors">
                    {issue.subject}
                  </h2>
                  {issue.preview && <p className="font-body text-gray-500 text-sm leading-relaxed">{issue.preview}</p>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
