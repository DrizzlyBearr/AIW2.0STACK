import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { portfolioClients } from '../data/portfolio'
import SEOMeta from '../components/SEOMeta'

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-mc-dark">
      <SEOMeta
        title="Client Case Studies"
        description="Twenty real engagements. Enterprise telecoms, private equity, health technology, and more. See the results Millionaire Contracts delivers for ambitious businesses."
        path="/portfolio"
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark border-b border-white/10 py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-label mb-3 block">Our Work</span>
          <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Portfolio of Winners
          </h1>
          <p className="font-body text-gray-400 text-lg max-w-xl">
            Twenty companies. Real engagements. Measurable results.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="flex-grow py-14 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portfolioClients.map((client) => (
              <div
                key={client.slug}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-mc-gold/40 transition-all duration-200"
              >
                <div className="h-40 bg-white flex items-center justify-center p-5 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="font-headline font-bold text-gray-300 text-xs text-center px-4">${client.name}</span></div>`
                    }}
                  />
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="font-body font-semibold text-white text-sm leading-tight">{client.name}</h3>
                  {client.internal ? (
                    <Link
                      to={`/${client.slug}`}
                      className="block text-center bg-mc-gold text-white text-xs font-headline font-bold py-2 px-4 rounded hover:bg-mc-gold-light transition-colors"
                    >
                      View Case Study
                    </Link>
                  ) : (
                    <Link
                      to="/contact-us"
                      className="block text-center border border-mc-gold text-mc-gold text-xs font-headline font-bold py-2 px-4 rounded hover:bg-mc-gold hover:text-white transition-colors"
                    >
                      Get Started
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
