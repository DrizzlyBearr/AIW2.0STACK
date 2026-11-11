import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import About from '../components/About'
import Reviews from '../components/Reviews'
import AreasServed from '../components/AreasServed'
import LocalTerms from '../components/LocalTerms'
import FAQ from '../components/FAQ'
import Booking from '../components/Booking'
import { faqs } from '../content'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <Reviews />
      <LocalTerms />
      <AreasServed />
      <FAQ items={faqs} />
      <Booking />
    </>
  )
}
