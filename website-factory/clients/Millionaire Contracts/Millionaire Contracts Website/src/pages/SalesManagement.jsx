import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'

export default function SalesManagement() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ServicePageHero title="Sales Management" />

      <section className="bg-white py-16 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h1 className="font-service text-4xl font-bold text-mc-teal mb-8">
            Leading Your Sales Force to Unstoppable Success
          </h1>

          <div className="space-y-5 font-body text-gray-700 text-base leading-relaxed">
            <p>
              At Millionaire Contracts, we are the undisputed experts in sales management. We do not simply oversee sales processes — we engineer high-performance sales operations that deliver results. Our Sales Management Service transforms your team from ordinary to elite, building a culture of accountability, precision, and consistent achievement.
            </p>
            <p>
              Our approach is both intelligent and relentless. We structure, optimize, and manage your entire sales operation with precision, ensuring each step, from lead generation to closing, is flawlessly executed. We implement proven systems, coach your team to peak performance, and continuously track and refine every metric that drives revenue.
            </p>
            <p>
              By choosing Millionaire Contracts, you are investing in a results-driven sales engine that ensures your team meets and exceeds targets every time. We do not just manage your sales — we elevate your entire revenue function.
            </p>
            <p>
              Millionaire Contracts: The pioneers of sales management excellence. Let us take your sales team to the top.
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
