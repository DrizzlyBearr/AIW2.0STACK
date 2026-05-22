import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

const LOGO = 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/66fe6791c6d28935508f7ce5.png'
const TEAM_IMG = 'https://images.pexels.com/photos/7876502/pexels-photo-7876502.jpeg'

const services = [
  {
    title: 'Sales Strategy Development',
    to: '/sales-strategy-development',
    desc: 'We craft winning, data-driven sales strategies tailored to your market, your team, and your growth targets.',
  },
  {
    title: 'Sales Management',
    to: '/sales-management',
    desc: 'End-to-end management of your sales operation — structured, optimized, and relentlessly executed.',
  },
  {
    title: 'Sales Closing',
    to: '/sales-closing',
    desc: 'We deploy expert closers directly into your pipeline to seal deals and drive measurable revenue growth.',
  },
  {
    title: 'Appointment Setting',
    to: '/appointment-setting',
    desc: 'High-quality, pre-qualified appointments delivered consistently so your team focuses on closing.',
  },
]

const testimonials = [
  {
    quote: 'Millionaire Contracts transformed our entire sales operation. Their strategic approach gave us the structure and pipeline discipline we were missing. The results have been outstanding.',
    name: 'Dallen S.',
    company: 'Eads Bridge Holdings',
  },
  {
    quote: 'The appointment setting service exceeded every expectation. They delivered qualified leads consistently and their team integrated seamlessly with ours from day one.',
    name: 'Alex M.',
    company: 'MTN Zambia',
  },
  {
    quote: 'Working with Millionaire Contracts on our private equity outreach was a game-changing decision. Their closing team drove a 65% meeting success rate across targeted investor accounts.',
    name: 'Jamil V.',
    company: 'BaseHome Capital',
  },
  {
    quote: 'From strategy to execution, the Millionaire Contracts team delivered a level of sales intelligence we had not experienced before. They truly operate like an extension of our business.',
    name: 'Haroon I.',
    company: 'Sigma Health Technologies',
  },
]

const partners = [
  { name: 'MTN Zambia', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/69538090e889d355d2fbdd82.jpg' },
  { name: 'BaseHome Capital', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/6953809073a5e015a8b56b76.png' },
  { name: 'Eads Bridge Holdings', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/69538090e2519585d9da3509.webp' },
  { name: 'Sigma Health Technologies', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/69538090ee10476b334bbf9f.jpg' },
  { name: 'Keen People', image: 'https://assets.cdn.filesafe.space/A8PmgiSa8bKb0J1mBeLF/media/69538090a61a7eda49cbfd75.png' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-mc-teal text-white py-28 px-6 text-center">
        <p className="font-headline text-mc-gold text-lg font-semibold tracking-widest uppercase mb-3">WELCOME!</p>
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-white mb-6">We are Millionaire Contracts</h1>
        <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          We engineer high-performance sales operations that convert conversations into decisions, and demand into revenue.
        </p>
        <Link to="/contact-us" className="btn-gold text-base px-8 py-4">
          Reach Out to Us
        </Link>
      </section>

      {/* Trusted Partners */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-headline text-2xl font-bold text-mc-teal mb-8">Trusted Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-16 w-24 object-contain grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="hidden text-sm font-body font-semibold text-gray-500">{p.name}</span>
              </div>
            ))}
          </div>
          <Link to="/portfolio" className="btn-gold-outline">See Our Portfolio Here</Link>
        </div>
      </section>

      {/* About */}
      <section className="bg-mc-cream py-16 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-mc-teal mb-4">About Millionaire Contracts</h2>
            <p className="font-body text-gray-700 mb-4">
              Millionaire Contracts was built out of necessity. We saw businesses with real potential held back by broken sales processes, poorly trained teams, and strategies that had no teeth. We stepped in to fix it.
            </p>
            <p className="font-body text-gray-700 mb-6">
              Today we partner with ambitious organizations across Africa and beyond to build sales operations that perform under pressure. We are not consultants who hand you a report and leave. We work inside your business until the results are real.
            </p>
            <ul className="space-y-3">
              {['Strategic Insights', 'Operational Efficiency', 'Organizational Development'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body font-semibold text-mc-teal">
                  <span className="w-2 h-2 rounded-full bg-mc-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={TEAM_IMG} alt="Millionaire Contracts team" className="w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-mc-teal text-center mb-10">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="bg-mc-gold rounded-xl p-6 text-white hover:bg-amber-600 transition-colors flex flex-col gap-3"
              >
                <h3 className="font-headline font-bold text-lg leading-tight">{s.title}</h3>
                <p className="font-body text-sm text-amber-50 flex-grow">{s.desc}</p>
                <span className="font-body font-bold text-sm underline">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-mc-teal py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-white text-center mb-10">What Our Clients Say</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex flex-col gap-4">
                <p className="font-body text-gray-700 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-body font-bold text-mc-teal">{t.name}</p>
                  <p className="font-body text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
