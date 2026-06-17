import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sales Management',
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  description: 'We step in as your fractional sales management layer: setting targets, running pipeline reviews, coaching reps, and building reporting infrastructure.',
  areaServed: ['US', 'GB', 'ZA', 'SG'],
}

export default function SalesManagement() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Sales Management Services"
        description="Sales team active but not hitting targets? Millionaire Contracts steps in as your sales management layer: pipeline reviews, rep coaching, and accountability that drives consistent results."
        path="/sales-management"
        schema={schema}
      />
      <Navbar />
      <ServicePageHero title="Sales Management" />

      <section className="bg-white py-16 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h1 className="font-service text-4xl font-bold text-mc-teal mb-8">
            Leading Your Sales Force to Unstoppable Success
          </h1>

          <div className="space-y-5 font-body text-gray-700 text-base leading-relaxed">
            <p>
              At Millionaire Contracts, we are the undisputed experts in sales management. We do not simply oversee sales processes, we engineer high-performance sales operations that deliver results. Our Sales Management Service transforms your team from ordinary to elite, building a culture of accountability, precision, and consistent achievement.
            </p>
            <p>
              Our approach is both intelligent and relentless. We structure, optimize, and manage your entire sales operation with precision, ensuring each step, from lead generation to closing, is flawlessly executed. We implement proven systems, coach your team to peak performance, and continuously track and refine every metric that drives revenue.
            </p>
            <p>
              By choosing Millionaire Contracts, you are investing in a results-driven sales engine that ensures your team meets and exceeds targets every time. We do not just manage your sales, we elevate your entire revenue function.
            </p>
            <p>
              Millionaire Contracts: The pioneers of sales management excellence. Let us take your sales team to the top.
            </p>
          </div>

          <div className="mt-10">
            <Link to="/calender" className="btn-gold">Schedule a Consultation</Link>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { to: '/sales-stall-without-you', label: 'Why Sales Stall Every Time You Step Back from Them', desc: 'How to remove yourself as the bottleneck in your own pipeline.' },
                { to: '/founder-led-sales-stops-working', label: 'Founder-Led Sales: Why It Stops Working', desc: 'The point where running sales yourself starts to cap the business.' },
                { to: '/why-sales-outsourcing-partnerships-fail', label: 'Why Most Sales Outsourcing Partnerships Fail', desc: 'Five failure points and what separates partnerships that deliver.' },
                { to: '/what-is-sales-outsourcing', label: 'What Is Sales Outsourcing?', desc: 'The four models explained and who each one is right for.' },
                { to: '/how-to-choose-an-appointment-setting-company', label: 'How to Choose an Appointment Setting Company', desc: '7 questions to ask before you hire any external sales provider.' },
                { to: '/what-does-outsourced-sales-cost', label: 'What Does Outsourced Sales Actually Cost?', desc: 'Every pricing model explained with what drives the number.' },
                { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'Diagnostic guide for knowing when outsourced is the right move.' },
                { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'The six steps to a process that produces predictable pipeline.' },
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
