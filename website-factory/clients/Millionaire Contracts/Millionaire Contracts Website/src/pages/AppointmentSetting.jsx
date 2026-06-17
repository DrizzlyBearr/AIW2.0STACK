import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Appointment Setting',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  description: 'We run your outbound engine, identifying ideal accounts, crafting outreach, and booking qualified decision-maker meetings directly into your calendar every week.',
  areaServed: ['US', 'GB', 'ZA', 'SG'],
}

export default function AppointmentSetting() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Appointment Setting Services"
        description="Thin pipeline? Millionaire Contracts runs your outbound engine and books qualified decision-maker meetings directly into your calendar every week. 65% average meeting success rate."
        path="/appointment-setting"
        schema={schema}
      />
      <Navbar />
      <ServicePageHero title="Appointment Setting" />

      <section className="bg-white py-16 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h1 className="font-service text-4xl font-bold text-mc-teal mb-8">
            Filling Your Pipeline with Qualified Prospects
          </h1>

          <div className="space-y-5 font-body text-gray-700 text-base leading-relaxed">
            <p>
              Our Appointment Setting service is designed to keep your sales pipeline flowing with high-quality leads, allowing your team to focus on closing deals while we handle the outreach. We connect you with the right decision-makers at the right time.
            </p>
            <p>
              Using a strategic approach, we target and qualify leads, ensuring that each appointment is set with someone who fits your ideal customer profile. Every prospect we book has been vetted for intent, budget, and fit, so your team walks into meetings that are worth their time.
            </p>
            <p>
              With our appointment setting service, you will experience a steady flow of pre-qualified prospects, allowing your team to focus on what they do best, closing deals and growing your business. Stop chasing cold contacts and start having real conversations.
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
