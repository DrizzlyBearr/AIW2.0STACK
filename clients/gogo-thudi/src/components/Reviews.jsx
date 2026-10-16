import { useState } from 'react'
import { Star, Quote, Award, ArrowUpRight } from 'lucide-react'
import { business, reviews, featuredReviewCount } from '../content'

function Stars({ size = 'w-4 h-4' }) {
  return (
    <div className="flex" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} text-ochre fill-ochre`} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? reviews : reviews.slice(0, featuredReviewCount)

  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Client reviews</p>
            <h2 className="section-title">Why people keep coming back to Gogo Thudi</h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-3">
              <Stars size="w-5 h-5" />
              <p className="text-sm text-ink/70">
                <span className="font-semibold text-night">{business.rating.count} reviews</span> on {business.rating.source}
              </p>
            </div>
            <p className="flex items-center gap-2 text-sm text-ink/60">
              <Award className="w-4 h-4 text-clay" />
              {business.rating.badges.join(' and ')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((r) => (
            <figure key={r.name + r.date} className="card p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-7 h-7 text-ochre" />
                <Stars />
              </div>
              <blockquote className="text-ink/80 leading-relaxed flex-1">"{r.text}"</blockquote>
              <figcaption className="mt-6 pt-4 border-t border-cream-deep text-sm flex items-center justify-between gap-3">
                <span className="font-semibold text-night">{r.name}</span>
                <span className="text-ink/50 text-xs">{r.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {reviews.length > featuredReviewCount && (
            <button onClick={() => setShowAll(!showAll)} className="btn-primary !bg-night !text-cream hover:!bg-night-mid">
              {showAll ? 'Show fewer reviews' : `Show all ${reviews.length} reviews`}
            </button>
          )}
          <a
            href={business.saPsychicsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-clay hover:text-clay-dark"
          >
            Read all {business.rating.count} on SA Psychics <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
