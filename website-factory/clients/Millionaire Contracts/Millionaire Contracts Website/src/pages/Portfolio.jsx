import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { portfolioClients } from '../data/portfolio'

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-mc-teal py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80)',
            opacity: 0.3,
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl font-headline font-bold text-white">Portfolio of Winners!</h2>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-white py-14 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioClients.map((client) => (
              <div key={client.slug} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-40 bg-gray-100 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x200/132b2f/ffffff?text=${encodeURIComponent(client.name)}`
                    }}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow gap-3">
                  <h3 className="font-portfolio font-semibold text-mc-teal text-sm leading-tight">{client.name}</h3>
                  <div className="mt-auto">
                    {client.internal ? (
                      <Link
                        to={`/${client.slug}`}
                        className="block text-center bg-mc-gold text-white text-sm font-headline font-bold py-2 px-4 rounded hover:bg-amber-600 transition-colors"
                      >
                        View Case Study
                      </Link>
                    ) : (
                      <Link
                        to="/contact-us"
                        className="block text-center bg-mc-gold text-white text-sm font-headline font-bold py-2 px-4 rounded hover:bg-amber-600 transition-colors"
                      >
                        Get Started
                      </Link>
                    )}
                  </div>
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
