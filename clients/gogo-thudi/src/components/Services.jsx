import { Eye, Feather, Flame, HeartPulse, Moon, HeartHandshake, Leaf, Sparkles, ArrowRight } from 'lucide-react'
import { business, services } from '../content'
import { waLink } from '../whatsapp'

const icons = {
  divination: Eye,
  ancestors: Feather,
  cleansing: Flame,
  trauma: HeartPulse,
  dreams: Moon,
  love: HeartHandshake,
  medicine: Leaf,
  purpose: Sparkles,
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="section-label mb-3">How Gogo Thudi can help</p>
            <h2 className="section-title">Healing and guidance for every part of your life</h2>
          </div>
          <div className="flex gap-3 text-sm">
            <div className="rounded-2xl bg-night text-cream px-5 py-3">
              <p className="text-cream/60 text-xs uppercase tracking-widest">In person</p>
              <p className="font-display text-3xl font-semibold text-ochre-light">{business.fees.inPerson}</p>
            </div>
            <div className="rounded-2xl bg-night text-cream px-5 py-3">
              <p className="text-cream/60 text-xs uppercase tracking-widest">Virtual</p>
              <p className="font-display text-3xl font-semibold text-ochre-light">{business.fees.virtual}</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = icons[s.key] || Sparkles
            return (
              <article key={s.key} className="card p-6 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-night text-ochre-light flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[1.4rem] leading-snug font-semibold text-night mb-2">{s.title}</h3>
                <p className="text-ink/70 text-[15px] leading-relaxed mb-5 flex-1">{s.summary}</p>
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-cream-deep">
                  <span className="text-[11px] uppercase tracking-wider text-ink/50">{s.detail}</span>
                  <a
                    href={waLink(`Hello Gogo Thudi, I would like to book: ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-clay hover:text-clay-dark"
                  >
                    Book <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
