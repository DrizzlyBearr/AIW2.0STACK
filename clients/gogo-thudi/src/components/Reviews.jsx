import { Star, Quote, BadgeCheck } from 'lucide-react'
import { business, reviews } from '../content'

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Client reviews</p>
            <h2 className="section-title">Why people keep coming back to Gogo Thudi</h2>
          </div>
          {business.rating ? (
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-ochre fill-ochre" />
                ))}
              </div>
              <p className="text-sm text-ink/70">
                <span className="font-semibold text-night">{business.rating.score}</span> from {business.rating.count} reviews
                on {business.rating.source}
              </p>
            </div>
          ) : (
            <a href={business.gogoOnlineUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink/70 hover:text-clay">
              <BadgeCheck className="w-5 h-5 text-ochre" />
              Verified healer on Gogo Online
            </a>
          )}
        </div>

        {reviews.length === 0 ? (
          <div className="card p-10 text-center border-dashed">
            <p className="text-ink/60">
              Real client reviews go here. Add them to <code className="text-clay">src/content.js</code>.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name + r.text.slice(0, 12)} className="card p-7 flex flex-col">
                <Quote className="w-7 h-7 text-ochre mb-4" />
                <blockquote className="text-ink/80 leading-relaxed flex-1">{r.text}</blockquote>
                <figcaption className="mt-6 pt-4 border-t border-cream-deep text-sm">
                  <span className="font-semibold text-night">{r.name}</span>
                  {r.source && <span className="text-ink/50"> via {r.source}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
