import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'

export default function SalesClosing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ServicePageHero title="Sales Closing" />

      <section className="bg-white py-16 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h1 className="font-service text-4xl font-bold text-mc-teal mb-8">
            Deploying Experts to Seal the Deal
          </h1>

          <div className="space-y-5 font-body text-gray-700 text-base leading-relaxed">
            <p>
              At Millionaire Contracts, we do not just provide advice — we send in the experts to close deals on your behalf. Our Sales Closing service is designed to integrate our highly skilled closers directly into your sales operations, bringing the expertise and execution power needed to turn prospects into paying clients.
            </p>
            <p>
              Our team specializes in guiding prospects through the final, most crucial stages of the sales cycle. We leverage proven strategies, handle objections with precision, and apply the right pressure at the right moment to convert high-value opportunities into revenue.
            </p>
            <p>
              By deploying our personnel into your closing operations, we guarantee results, optimizing your sales funnel and driving revenue growth. Our closers become part of your team — aligned to your targets and committed to your outcomes.
            </p>
            <p>
              With Millionaire Contracts, you can be confident that your sales opportunities turn into measurable wins, fueling your business's growth.
            </p>
          </div>

          <div className="mt-10">
            <Link to="/calender" className="btn-gold">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
