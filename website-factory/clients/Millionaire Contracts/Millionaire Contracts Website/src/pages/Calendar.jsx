import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'

const CALENDAR_ID = '9Kr2oElVpUJaJAq02dl1'

export default function Calendar() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ServicePageHero title="Calendar" />

      {/* Intro */}
      <section className="bg-mc-cream py-10 px-6">
        <div className="max-w-screen-xl mx-auto text-center max-w-2xl mx-auto">
          <p className="font-body text-mc-teal text-lg leading-relaxed">
            We are excited to have you join us for these enriching experiences that can contribute to your professional journey. Be sure to bookmark this page and check back regularly, as we are constantly adding new events to ensure you have access to valuable opportunities that can drive your business forward.
          </p>
        </div>
      </section>

      {/* Calendar widget */}
      <section className="bg-gray-50 py-12 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
            style={{ width: '100%', height: '700px', border: 'none' }}
            scrolling="yes"
            id={CALENDAR_ID}
            title="Appointment Booking"
            loading="lazy"
          />
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
