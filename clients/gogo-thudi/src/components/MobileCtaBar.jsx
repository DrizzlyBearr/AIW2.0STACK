import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../content'
import { waLink, defaultMessage } from '../whatsapp'

// Always-visible booking bar on phones, where most visitors arrive from search and social.
export default function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-2 p-2 bg-night/95 backdrop-blur border-t border-cream/10">
      <a href={business.phoneHref} data-cta="mobile-bar" className="btn-ghost !px-3 !py-3 text-sm whitespace-nowrap">
        <Phone className="w-4 h-4" />
        Call
      </a>
      <a
        href={waLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="mobile-bar"
        className="btn-primary !px-3 !py-3 text-sm whitespace-nowrap"
      >
        <MessageCircle className="w-4 h-4" />
        Book on WhatsApp
      </a>
    </div>
  )
}
