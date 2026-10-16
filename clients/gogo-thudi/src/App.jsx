import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Reviews />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
