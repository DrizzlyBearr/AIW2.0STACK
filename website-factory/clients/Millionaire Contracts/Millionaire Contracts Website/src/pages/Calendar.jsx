import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'
import SEOMeta from '../components/SEOMeta'
import { UPWORK } from '../components/Footer'

// MC's booking calendar is Calendly, the same link Command's record and the
// outreach kits give anyone who wants to talk (Command, business record,
// booking_link). It replaced a GoHighLevel calendar on 30 October 2026. Every
// "book a call" button on the site links here, so changing it here changes it
// everywhere, and a visit here still counts as a goal (src/lib/track.js).
export const BOOKING_URL = 'https://calendly.com/katlehomoh/30min'
const EMBED = `${BOOKING_URL}?embed_domain=www.millionairecontracts.com&embed_type=Inline&hide_gdpr_banner=1`

export default function Calendar() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Book a Strategy Call"
        description="Book a free strategy call with Millionaire Contracts. We will show you where your revenue is leaking and what it will take to fix it. No pitch, no fluff."
        path="/calender"
      />
      <Navbar />
      <ServicePageHero title="Book a call" />

      {/* Intro */}
      <section className="bg-mc-cream py-10 px-6">
        <div className="max-w-screen-xl mx-auto text-center max-w-2xl mx-auto">
          <p className="font-body text-mc-teal text-lg leading-relaxed">
            Pick a time for a discovery call. We look at what needs doing and tell you plainly whether we are the right people to help.
          </p>
        </div>
      </section>

      {/* Calendar widget */}
      <section className="bg-gray-50 py-12 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto">
          <iframe
            src={EMBED}
            style={{ width: '100%', minWidth: '320px', height: '760px', border: 'none' }}
            title="Book a call with Millionaire Contracts"
          />
          <p className="font-body text-gray-500 text-sm text-center mt-4">
            Calendar not loading?{' '}
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="text-mc-teal underline hover:text-mc-gold">Open it on Calendly</a>
          </p>
          <p className="font-body text-gray-500 text-sm text-center mt-6">
            Rather work through Upwork, with its contracts and payment protection?{' '}
            <a href={UPWORK} target="_blank" rel="me noopener" className="text-mc-teal underline hover:text-mc-gold">
              Hire us on Upwork
            </a>
          </p>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
