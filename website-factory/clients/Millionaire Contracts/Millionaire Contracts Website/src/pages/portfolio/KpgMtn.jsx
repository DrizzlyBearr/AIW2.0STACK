import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ACCENT = '#D89008'

const metrics = [
  { label: 'New enterprise deals closed', value: '12+' },
  { label: 'Revenue growth', value: '3x' },
  { label: 'Pipeline qualified', value: '200+' },
  { label: 'Meeting success rate', value: '70%' },
]

const ourRole = [
  { title: 'Sales Strategy', desc: 'Built a market entry and expansion strategy for KPG to penetrate MTN Zambia enterprise accounts.' },
  { title: 'Appointment Setting', desc: 'Outreached and qualified decision-makers within MTN Zambia, securing executive-level meetings.' },
  { title: 'Sales Closing', desc: 'Deployed expert closers to negotiate and close high-value technology contracts.' },
  { title: 'Sales Management', desc: 'Provided ongoing sales management to ensure pipeline discipline and forecast accuracy.' },
]

export default function KpgMtn() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #132b2f 100%)' }}>
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Case Study</p>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">KPG / MTN Zambia</h1>
        <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto">
          Driving enterprise sales growth for a leading technology provider within one of Africa's largest telecoms.
        </p>
      </div>

      {/* Business Context */}
      <section className="py-14 px-6">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h2 className="font-headline text-2xl font-bold text-mc-teal mb-4">Business Context</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-3">
            KPG is a technology solutions provider operating across Southern Africa. They needed to expand their commercial presence within MTN Zambia, one of the continent's largest telecoms, and required both a strategic go-to-market approach and the sales execution capacity to back it up.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Millionaire Contracts was engaged to design and execute the full sales cycle, from strategy through to closing, within the MTN Zambia enterprise accounts.
          </p>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-14 px-6" style={{ background: '#f8f9fa' }}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-2xl font-bold text-mc-teal text-center mb-10">Our Role</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourRole.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-3 h-3 rounded-full mb-3" style={{ background: ACCENT }} />
                <h3 className="font-headline font-bold text-mc-teal mb-2">{r.title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-14 px-6">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h2 className="font-headline text-2xl font-bold text-mc-teal mb-4">Scope of Work</h2>
          <ul className="space-y-2">
            {[
              'Enterprise account mapping and decision-maker identification',
              'Outbound outreach and appointment setting at C-suite and VP levels',
              'Sales deck development and presentation coaching',
              'Live deal negotiation and closing support',
              'Pipeline reporting and forecast management',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-gray-700">
                <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: ACCENT }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results */}
      <section className="py-14 px-6 text-white" style={{ background: '#0a1628' }}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-2xl font-bold text-center mb-10" style={{ color: ACCENT }}>Results</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${ACCENT}30` }}>
                <p className="font-headline text-4xl font-bold mb-2" style={{ color: ACCENT }}>{m.value}</p>
                <p className="font-body text-gray-300 text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Case Matters */}
      <section className="py-14 px-6">
        <div className="max-w-screen-xl mx-auto max-w-3xl">
          <h2 className="font-headline text-2xl font-bold text-mc-teal mb-4">Why This Case Matters</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-4">
            The KPG / MTN engagement demonstrates what is possible when a dedicated sales team operates with strategic clarity inside a large enterprise environment. We proved that an outsourced sales function, when done right, can outperform a traditional in-house team, at a fraction of the cost.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            This case is a reference point for any technology business looking to penetrate a tier-one corporate account in Africa.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 text-center" style={{ background: ACCENT }}>
        <h2 className="font-headline text-3xl font-bold text-white mb-4">Ready to Build Your Success Story?</h2>
        <p className="font-body text-amber-50 mb-6">Let us design and execute your sales strategy from day one.</p>
        <Link to="/calender" className="bg-white text-mc-teal font-headline font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block">
          Schedule a Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
