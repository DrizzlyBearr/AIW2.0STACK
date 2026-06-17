import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sales Strategy Development',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  description: 'We build precise, market-specific sales strategies and execution-ready playbooks that turn your sales function into a competitive weapon.',
  areaServed: ['US', 'GB', 'ZA', 'SG'],
}

export default function SalesStrategy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Sales Strategy Development"
        description="No repeatable way to sell your product? Millionaire Contracts builds sales playbooks, pricing strategy, pitch frameworks, and KPIs your team executes from day one."
        path="/sales-strategy-development"
        schema={schema}
      />
      <Navbar />
      <ServicePageHero title="Sales Strategy Development" />

      <section className="bg-white py-16 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h1 className="font-service text-4xl font-bold text-mc-teal mb-8">
            Dominating the Market with Winning Strategies
          </h1>

          <div className="space-y-5 font-body text-gray-700 text-base leading-relaxed">
            <p>
              At Millionaire Contracts, we are the undisputed experts in sales strategy development. We do not offer generic advice or recycled frameworks. We build precise, market-specific strategies that turn your sales function into a competitive weapon.
            </p>
            <p>
              Our process begins with a deep analysis of your market position, your buyers, and the gap between where you are and where your revenue targets sit. From that foundation, we craft a strategy that addresses every stage of your sales cycle with intention.
            </p>
            <p>
              We handle the hard work of translating strategy into execution-ready playbooks. Your team receives clear processes, defined metrics, and the tools to operate with confidence. Nothing is left to interpretation.
            </p>
            <p>
              Millionaire Contracts: The architects of sales strategy that wins markets. Let us build yours.
            </p>
          </div>

          <div className="mt-10">
            <Link to="/calender" className="btn-gold">Schedule a Consultation</Link>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'Six steps to a repeatable process that generates consistent pipeline.' },
                { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The four engagement models and how to choose the right fit.' },
                { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'Diagnostic guide for businesses with a working offer but inconsistent pipeline.' },
                { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Full number breakdown comparing both options.' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-mc-gold/40 transition-colors group"
                >
                  <p className="font-headline font-bold text-mc-teal text-sm mb-1 group-hover:text-mc-gold transition-colors">{link.label}</p>
                  <p className="font-body text-gray-500 text-xs">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
