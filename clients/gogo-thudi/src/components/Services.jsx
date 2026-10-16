import { Eye, Feather, Flame, Shield, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react'
import { services } from '../content'
import { waLink } from '../whatsapp'

const icons = {
  reading: Eye,
  medium: Feather,
  cleansing: Flame,
  protection: Shield,
  calling: Sparkles,
  life: HeartHandshake,
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="section-label mb-3">How Gogo Thudi can help</p>
          <h2 className="section-title">Healing and guidance for every part of your life</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = icons[s.key] || Sparkles
            return (
              <article key={s.key} className="card p-7 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-night text-ochre-light flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-night mb-2">{s.title}</h3>
                <p className="text-ink/70 leading-relaxed mb-5 flex-1">{s.summary}</p>
                <div className="flex items-center justify-between pt-4 border-t border-cream-deep">
                  <span className="text-xs uppercase tracking-widest text-ink/50">{s.detail}</span>
                  <a
                    href={waLink(`Hello Gogo Thudi, I would like to book: ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-clay hover:text-clay-dark"
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
