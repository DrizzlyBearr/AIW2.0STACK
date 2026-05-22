import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ACCENT = '#d8920e'

const metrics = [
  { label: 'Meeting success rate', value: '65%' },
  { label: 'Client satisfaction', value: '100%' },
  { label: 'Strategic partnerships formed', value: '8+' },
  { label: 'Pipeline quality', value: 'Stronger' },
]

const deliverables = [
  'Investor outreach strategy and target account mapping',
  'Appointment setting with qualified private equity decision-makers',
  'Meeting preparation briefs and pitch support',
  'Objection handling frameworks for institutional investor conversations',
  'Pipeline reporting and relationship tracking',
]

export default function BasehomeCapital() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: 'Heebo, Montserrat, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #132b2f 0%, #1e3d42 100%)' }}>
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Case Study</p>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">BaseHome Capital</h1>
        <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto">
          Appointment setting for a private equity firm targeting institutional partnerships and high-net-worth investor relationships.
        </p>
      </div>

      {/* Context */}
      <section className="py-14 px-6">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h2 className="font-headline text-2xl font-bold text-mc-teal mb-4">Business Context</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-3">
            BaseHome Capital is a private equity firm focused on real estate and infrastructure investment across emerging markets. Growing their investor network required consistent access to qualified institutional partners and family offices, exactly the kind of relationship-sensitive outreach that demands precision.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Millionaire Contracts was brought in to build and run an appointment setting function that could open doors at the right level, consistently and professionally.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-14 px-6" style={{ background: '#132b2f' }}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-2xl font-bold text-center mb-10" style={{ color: ACCENT }}>Results at a Glance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center p-6 rounded-xl bg-white bg-opacity-5 border border-white border-opacity-10">
                <p className="font-headline text-4xl font-bold mb-2" style={{ color: ACCENT }}>{m.value}</p>
                <p className="font-body text-gray-300 text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-14 px-6">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h2 className="font-headline text-2xl font-bold text-mc-teal mb-6">What We Delivered</h2>
          <ul className="space-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-gray-700">
                <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: ACCENT }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insight */}
      <section className="py-14 px-6" style={{ background: '#f8f9fa' }}>
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h2 className="font-headline text-2xl font-bold text-mc-teal mb-4">The Key Insight</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-4">
            In the world of private equity, access is everything. The difference between a closed fund and an open one often comes down to a single well-placed introduction at the right moment. Our appointment setting function delivered exactly that, qualified, timed, and prepared meetings with investors who were ready to engage.
          </p>
          <p className="font-body text-gray-700 leading-relaxed border-l-4 pl-4" style={{ borderColor: ACCENT }}>
            A 65% meeting success rate in institutional investor outreach is exceptionally high for this space. It reflects the quality of targeting, the professionalism of the outreach, and the precision of the follow-through.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 text-center" style={{ background: ACCENT }}>
        <h2 className="font-headline text-3xl font-bold text-white mb-4">Start Building Your Pipeline</h2>
        <p className="font-body text-amber-50 mb-6">We bring the right conversations to your door. You close them.</p>
        <Link to="/calender" className="bg-white text-mc-teal font-headline font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block">
          Book a Discovery Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
