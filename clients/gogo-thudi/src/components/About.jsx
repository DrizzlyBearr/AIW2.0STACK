import { BadgeCheck, Languages, Clock3 } from 'lucide-react'
import { business } from '../content'

// TODO: add more of her story once she has shared it: when the calling came,
// where she trained (ukuthwasa) and with whom, and why she does this work.
export default function About() {
  return (
    <section id="about" className="py-24 bg-night text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="section-label !text-ochre-light mb-3">About Gogo Thudi</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-6">
            A calling she answered, and a gift she shares with everyone who comes to her.
          </h2>
          <div className="space-y-4 text-cream/75 leading-relaxed">
            <p>
              Gogo Thudi has worked as a medium for {business.yearsPractising} years. In her words: "{business.bio}"
            </p>
            <p>
              Many of her clients first found her as a spiritual medium on SA Psychics. Today she is a verified healer
              on Gogo Online, and she sees clients at her practice in {business.area} and by video call across South
              Africa and beyond.
            </p>
          </div>
          <blockquote className="mt-8 pl-5 border-l-2 border-ochre font-display italic text-2xl text-ochre-light">
            "{business.quote}"
          </blockquote>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-3xl bg-night-mid p-7 sm:col-span-2">
            <p className="font-display text-6xl font-semibold text-ochre-light leading-none">{business.yearsPractising}</p>
            <p className="text-cream/60 mt-2">years of guiding people through loss, confusion, and the questions only the ancestors can answer</p>
          </div>
          <div className="rounded-3xl bg-night-mid p-7">
            <Languages className="w-6 h-6 text-ochre mb-4" />
            <p className="font-semibold mb-2">Consults in six languages</p>
            <p className="text-cream/60 text-sm leading-relaxed">{business.languages.join(', ')}</p>
          </div>
          <div className="rounded-3xl bg-night-mid p-7">
            <BadgeCheck className="w-6 h-6 text-ochre mb-4" />
            <p className="font-semibold mb-2">Verified healer</p>
            <a href={business.gogoOnlineUrl} target="_blank" rel="noopener noreferrer" className="text-cream/60 text-sm leading-relaxed underline decoration-ochre/50 underline-offset-4 hover:text-ochre-light">
              See her profile on Gogo Online
            </a>
          </div>
          <div className="rounded-3xl bg-night-mid p-7 sm:col-span-2 flex items-start gap-4">
            <Clock3 className="w-6 h-6 text-ochre shrink-0" />
            <div>
              <p className="font-semibold mb-1">Open six days a week</p>
              <p className="text-cream/60 text-sm">Monday to Saturday from 08:00. Late consultations until 20:00 on Thursdays and Fridays.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
