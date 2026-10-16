import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../content'
import { waLink } from '../whatsapp'

// Closing call to action used on inner pages. The low-commitment option ("ask a question
// first") is for visitors who are not ready to book yet.
export default function BookingCta({ heading, message, service, cta = 'page-end' }) {
  return (
    <section className="py-20 bg-night text-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-5">{heading}</h2>
        <p className="text-cream/70 mb-8">
          {business.fees.inPerson} in person in {business.area}, {business.fees.virtual} by video call. Your message
          goes straight to Gogo Thudi and stays private.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" data-cta={cta} data-service={service} className="btn-primary text-base px-8 py-4">
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </a>
          <a href={business.phoneHref} data-cta={cta} data-service={service} className="btn-ghost text-base px-8 py-4">
            <Phone className="w-5 h-5" />
            Call {business.phoneDisplay}
          </a>
        </div>
        <a
          href={waLink('Hello Gogo Thudi, I have a question before I book.')}
          target="_blank"
          rel="noopener noreferrer"
          data-cta={`${cta}-question`}
          data-service={service}
          className="inline-block mt-6 text-sm text-ochre-light underline decoration-ochre/40 underline-offset-4 hover:text-ochre"
        >
          Not ready to book? Ask a question first on WhatsApp
        </a>
      </div>
    </section>
  )
}
