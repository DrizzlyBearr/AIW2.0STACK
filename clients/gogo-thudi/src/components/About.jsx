import { BadgeCheck, Languages, Clock3, Award } from 'lucide-react'
import { business, socials } from '../content'
import SocialIcon from './SocialIcon'

export default function About() {
  return (
    <section id="about" className="py-24 bg-night text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <p className="section-label !text-ochre-light mb-3">About Gogo Thudi</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-4">
            She left the classroom to answer her calling.
          </h2>
          <p className="font-display italic text-xl text-ochre-light mb-6">{business.motto}.</p>
          <ul className="flex flex-wrap gap-2 mb-8">
            {business.titles.map((t) => (
              <li key={t} className="rounded-full border border-ochre/40 px-3 py-1 text-xs uppercase tracking-widest text-cream/80">
                {t}
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-cream/75 leading-relaxed">
            <p>"{business.story}"</p>
            <p>"{business.session}"</p>
            <p>
              In her words: "{business.bio}" Today she is a Premier Advisor on SA Psychics with {business.rating.count}{' '}
              client reviews, and a verified healer on Gogo Online. She sees clients at her practice in{' '}
              {business.area} and by video call across South Africa and beyond.
            </p>
          </div>
          <blockquote className="mt-8 pl-5 border-l-2 border-ochre font-display italic text-2xl text-ochre-light">
            "{business.quote}"
          </blockquote>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 content-start">
          <div className="rounded-3xl bg-night-mid p-7 sm:col-span-2">
            <p className="font-display text-6xl font-semibold text-ochre-light leading-none">{business.yearsPractising}</p>
            <p className="text-cream/60 mt-2">years of guiding people through loss, confusion, and the questions only the ancestors can answer</p>
          </div>
          <div className="rounded-3xl bg-night-mid p-7">
            <Award className="w-6 h-6 text-ochre mb-4" />
            <p className="font-semibold mb-2">{business.rating.badges.join(' and ')}</p>
            <a href={business.saPsychicsUrl} target="_blank" rel="noopener noreferrer" className="text-cream/60 text-sm underline decoration-ochre/50 underline-offset-4 hover:text-ochre-light">
              {business.rating.count} reviews on SA Psychics
            </a>
          </div>
          <div className="rounded-3xl bg-night-mid p-7">
            <BadgeCheck className="w-6 h-6 text-ochre mb-4" />
            <p className="font-semibold mb-2">Verified healer</p>
            <a href={business.gogoOnlineUrl} target="_blank" rel="noopener noreferrer" className="text-cream/60 text-sm underline decoration-ochre/50 underline-offset-4 hover:text-ochre-light">
              See her profile on Gogo Online
            </a>
          </div>
          <div className="rounded-3xl bg-night-mid p-7">
            <Languages className="w-6 h-6 text-ochre mb-4" />
            <p className="font-semibold mb-2">Consults in six languages</p>
            <p className="text-cream/60 text-sm leading-relaxed">{business.languages.join(', ')}</p>
          </div>
          <div className="rounded-3xl bg-night-mid p-7">
            <p className="text-ochre font-display text-2xl leading-none mb-4">Tools</p>
            <p className="font-semibold mb-2">What she works with</p>
            <p className="text-cream/60 text-sm leading-relaxed">{business.tools.join(', ')}</p>
          </div>
          <div className="rounded-3xl bg-night-mid p-7 sm:col-span-2 flex items-start gap-4">
            <Clock3 className="w-6 h-6 text-ochre shrink-0" />
            <div>
              <p className="font-semibold mb-1">Open six days a week</p>
              <p className="text-cream/60 text-sm">Monday to Saturday from 08:00. Late consultations until 20:00 on Thursdays and Fridays.</p>
            </div>
          </div>
          <div className="rounded-3xl bg-night-mid p-7 sm:col-span-2">
            <p className="font-semibold mb-4">Follow Gogo Thudi</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {socials.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-cream/75 hover:text-ochre-light">
                    <span className="w-9 h-9 rounded-full bg-night flex items-center justify-center text-ochre shrink-0">
                      <SocialIcon platform={s.platform} className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="block text-cream">{s.label}</span>
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="max-w-6xl mx-auto px-4 sm:px-6 mt-14 font-display italic text-2xl text-center text-cream/70">
        "{business.invitation}"
      </p>
    </section>
  )
}
