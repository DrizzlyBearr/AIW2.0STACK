import { MessageCircle, Phone, Star, BadgeCheck, MapPin, Award } from 'lucide-react'
import { business } from '../content'
import { waLink, defaultMessage } from '../whatsapp'
import Beadwork from './Beadwork'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-night text-cream">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #C8963E 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-48 -left-32 w-[520px] h-[520px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #B5532F 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <p className="text-ochre-light text-sm tracking-[0.2em] uppercase mb-5">
              Sawubona. Molo. Dumela. Thobela.
            </p>
            <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-6">
              When life feels blocked,
              <span className="block italic text-ochre-light">your ancestors have answers.</span>
            </h1>
            <p className="text-cream/75 text-lg leading-relaxed mb-8 max-w-xl">
              Gogo Thudi is a traditional healer, medium, and prophet in {business.area} with{' '}
              {business.yearsPractising} years of experience. She reads the bones, carries messages from your
              ancestors, and cleanses and heals what is holding you back. In person, or by video call from anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href={waLink(defaultMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
              <a href={business.phoneHref} className="btn-ghost text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {business.phoneDisplay}
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream/80">
              <li>
                <a href="#reviews" className="flex items-center gap-2 hover:text-ochre-light">
                  <Star className="w-4 h-4 text-ochre fill-ochre" />
                  {business.rating.average} from {business.rating.count} reviews on {business.rating.source}
                </a>
              </li>
              <li>
                <a href={business.saPsychicsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ochre-light">
                  <Award className="w-4 h-4 text-ochre" />
                  {business.rating.badges[0]} on SA Psychics
                </a>
              </li>
              <li>
                <a href={business.gogoOnlineUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ochre-light">
                  <BadgeCheck className="w-4 h-4 text-ochre" />
                  Verified healer on Gogo Online
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-ochre font-semibold">R</span>
                {business.fees.inPerson} in person, {business.fees.virtual} virtual
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ochre" />
                {business.area}, {business.region}
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm">
            <div className="absolute -inset-3 rounded-t-full border border-ochre/40" aria-hidden="true" />
            <div className="relative aspect-[3/4] rounded-t-full overflow-hidden bg-night-mid">
              <img
                src="/gogo-thudi.jpg"
                alt="Gogo Thudi, spiritual healer in Pretoria North"
                className="w-full h-full object-cover object-[50%_35%]"
                width="960"
                height="1280"
                fetchpriority="high"
              />
            </div>
            <div className="absolute bottom-10 -left-4 sm:-left-10 bg-cream text-night rounded-2xl shadow-xl px-5 py-4">
              <p className="font-display text-4xl font-semibold leading-none">{business.yearsPractising}</p>
              <p className="text-xs uppercase tracking-widest text-ink/60 mt-1">Years as a medium</p>
            </div>
          </div>
        </div>
      </div>
      <Beadwork />
    </section>
  )
}
