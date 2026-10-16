import { business } from '../content'
import Beadwork from './Beadwork'

export default function Footer() {
  return (
    <footer className="bg-night text-cream/60">
      <Beadwork />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-[1fr_auto] gap-8 text-sm">
        <div>
          <p className="font-display text-2xl text-cream">{business.name}</p>
          <p className="mt-1">{business.tagline}, {business.area}</p>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-cream/40">
            Spiritual guidance is offered alongside, not instead of, medical, psychological, legal, or financial
            advice. Please see a qualified professional for those needs.
          </p>
        </div>
        <div className="md:text-right space-y-1">
          <a href={business.phoneHref} className="block hover:text-ochre-light">{business.phoneDisplay}</a>
          {business.email && (
            <a href={`mailto:${business.email}`} className="block hover:text-ochre-light">{business.email}</a>
          )}
          <a href={business.gogoOnlineUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-ochre-light">
            Gogo Online profile
          </a>
          <p className="pt-4 text-xs text-cream/40">&copy; {new Date().getFullYear()} {business.name}</p>
        </div>
      </div>
    </footer>
  )
}
