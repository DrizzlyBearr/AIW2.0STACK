import { business, socials } from '../content'
import Beadwork from './Beadwork'
import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer className="bg-night text-cream/60">
      <Beadwork />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-[1fr_auto] gap-8 text-sm">
        <div>
          <p className="font-display text-2xl text-cream">{business.name}</p>
          <p className="mt-1">{business.tagline}, {business.area}</p>
          <p className="mt-1 italic">{business.motto}. Thobela.</p>
          <ul className="flex gap-3 mt-5">
            {socials.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} ${s.handle}`}
                  title={`${s.label} ${s.handle}`}
                  className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-cream/70 hover:text-ochre-light hover:border-ochre/50"
                >
                  <SocialIcon platform={s.platform} className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-cream/40">
            Spiritual guidance is offered alongside, not instead of, medical, psychological, legal, or financial
            advice. Please see a qualified professional for those needs.
          </p>
        </div>
        <div className="md:text-right space-y-1">
          <a href={business.phoneHref} className="block hover:text-ochre-light">{business.phoneDisplay}</a>
          <a href={`mailto:${business.email}`} className="block hover:text-ochre-light">{business.email}</a>
          <p>{business.address}</p>
          <a href={business.saPsychicsUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-ochre-light">
            SA Psychics profile
          </a>
          <a href={business.gogoOnlineUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-ochre-light">
            Gogo Online profile
          </a>
          <p className="pt-4 text-xs text-cream/40">&copy; {new Date().getFullYear()} {business.name}</p>
        </div>
      </div>
    </footer>
  )
}
