import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sales Closing',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  description: 'We deploy trained closers directly into your pipeline to handle discovery, objection handling, and final conversion on high-value deals.',
  areaServed: ['US', 'GB', 'ZA', 'SG'],
}

export default function SalesClosing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Sales Closing Services"
        description="Deals stalling at the finish line? Millionaire Contracts deploys trained closers directly into your pipeline to convert high-value prospects into paying clients."
        path="/sales-closing"
        schema={schema}
      />
      <Navbar />
      <ServicePageHero title="Sales Closing" />

      <section className="bg-white py-16 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h1 className="font-service text-4xl font-bold text-mc-teal mb-8">
            Deploying Experts to Seal the Deal
          </h1>

          <div className="space-y-5 font-body text-gray-700 text-base leading-relaxed">
            <p>
              At Millionaire Contracts, we do not just provide advice, we send in the experts to close deals on your behalf. Our Sales Closing service is designed to integrate our highly skilled closers directly into your sales operations, bringing the expertise and execution power needed to turn prospects into paying clients.
            </p>
            <p>
              Our team specializes in guiding prospects through the final, most crucial stages of the sales cycle. We leverage proven strategies, handle objections with precision, and apply the right pressure at the right moment to convert high-value opportunities into revenue.
            </p>
            <p>
              By deploying our personnel into your closing operations, we guarantee results, optimizing your sales funnel and driving revenue growth. Our closers become part of your team, aligned to your targets and committed to your outcomes.
            </p>
            <p>
              With Millionaire Contracts, you can be confident that your sales opportunities turn into measurable wins, fueling your business's growth.
            </p>
          </div>

          <div className="mt-10">
            <Link to="/calender" className="btn-gold">Schedule a Consultation</Link>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'Including the sign most businesses miss: a healthy close rate but not enough conversations.' },
                { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model explained with what drives the number.' },
                { to: '/in-house-vs-outsourced-sales', label: 'In-House vs Outsourced Sales: The Real Cost', desc: 'Side-by-side comparison including time to first results.' },
                { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you hire any external sales provider.' },
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
