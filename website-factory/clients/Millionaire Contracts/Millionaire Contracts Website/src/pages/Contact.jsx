import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import ServicePageHero from '../components/ServicePageHero'
import SEOMeta from '../components/SEOMeta'

const FORM_ID = '3UOsb9RonEACTOuRjaKW'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Contact Us"
        description="Get in touch with Millionaire Contracts. Talk to our team about sales strategy, closing, appointment setting, or building your sales operation from the ground up."
        path="/contact-us"
      />
      <Navbar />
      <ServicePageHero title="Contact Us" />

      {/* Body */}
      <section className="bg-white py-16 px-6 flex-grow">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="font-headline text-3xl font-bold text-mc-teal mb-2">Get In Touch</h2>
            <p className="font-body text-gray-600 mb-6">
              Thank you for considering Millionaire Contracts. We look forward to learning about your business and exploring how we can help you grow.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:neo@millionairecontracts.com"
                className="block font-body font-semibold text-mc-teal hover:text-mc-gold transition-colors"
              >
                neo@millionairecontracts.com
              </a>
              <div className="font-body text-gray-600 text-sm">
                <p>Monday - Saturday: 9:00am - 8:00pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right, GHL form embed */}
          <div>
            <iframe
              src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
              style={{ width: '100%', height: '520px', border: 'none' }}
              id={FORM_ID}
              title="Contact Form"
              loading="lazy"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" async />
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}
