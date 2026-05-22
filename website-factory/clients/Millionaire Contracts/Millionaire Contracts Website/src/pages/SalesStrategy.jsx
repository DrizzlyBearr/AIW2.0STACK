import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'

export default function SalesStrategy() {
  return (
    <div className="min-h-screen flex flex-col">
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
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
