import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-mc-dark">
      <SEOMeta
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-lg">
          <div className="font-headline text-[120px] font-black text-mc-gold leading-none mb-4">
            404
          </div>
          <h1 className="font-headline text-3xl font-black text-white mb-4">
            This page does not exist
          </h1>
          <p className="font-body text-gray-400 text-base leading-relaxed mb-10">
            The link may be broken, or the page may have been removed. Head back to the homepage or book a call with us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/home"
              className="bg-mc-gold text-white font-headline font-bold px-8 py-3 rounded-lg hover:bg-mc-gold-light transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/calender"
              className="border border-white/20 text-white font-headline font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
