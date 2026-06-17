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

          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you hire an appointment setting provider.' },
                { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'Diagnostic guide for knowing when outsourced is the right move.' },
                { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The four models explained and how to choose the right fit.' },
                { to: '/why-sales-outsourcing-partnerships-fail', label: 'Why Most Sales Outsourcing Partnerships Fail', desc: 'Five failure points and how to avoid them before you sign.' },
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
