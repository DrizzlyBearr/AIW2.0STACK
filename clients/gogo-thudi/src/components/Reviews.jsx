import { useState } from 'react'
import { Star, Quote, Award, ArrowUpRight } from 'lucide-react'
import { business, reviews, featuredReviewCount, reviewPageSize } from '../content'

function Stars({ count = 5, size = 'w-4 h-4' }) {
  return (
    <div className="flex" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} ${i < count ? 'text-ochre fill-ochre' : 'text-ochre/30'}`} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [visible, setVisible] = useState(featuredReviewCount)
  const shown = reviews.slice(0, visible)
  const remaining = reviews.length - visible
  const { rating } = business

  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Client reviews</p>
            <h2 className="section-title">Why people keep coming back to Gogo Thudi</h2>
          </div>
          <p className="flex items-center gap-2 text-sm text-ink/60">
            <Award className="w-4 h-4 text-clay" />
            {rating.badges.join(' and ')} on {rating.source}
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-3 sm:gap-5 mb-12">
          <div className="rounded-2xl bg-night text-cream p-5 sm:p-6">
            <dt className="text-cream/60 text-xs uppercase tracking-widest">Average rating</dt>
            <dd className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-display text-4xl sm:text-5xl font-semibold text-ochre-light leading-none">{rating.average}</span>
              <Stars size="w-4 h-4" />
            </dd>
          </div>
          <div className="rounded-2xl bg-night text-cream p-5 sm:p-6">
            <dt className="text-cream/60 text-xs uppercase tracking-widest">Client reviews</dt>
            <dd className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-ochre-light leading-none">{rating.count}</dd>
          </div>
          <div className="rounded-2xl bg-night text-cream p-5 sm:p-6">
            <dt className="text-cream/60 text-xs uppercase tracking-widest">Five-star</dt>
            <dd className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-ochre-light leading-none">{rating.fiveStar}</dd>
          </div>
        </dl>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((r) => (
            <figure key={r.id} className="card p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-7 h-7 text-ochre" />
                <Stars count={r.stars} />
              </div>
              <blockquote className="text-ink/80 leading-relaxed flex-1">"{r.text}"</blockquote>
              <figcaption className="mt-6 pt-4 border-t border-cream-deep text-sm flex items-center justify-between gap-3">
                <span className="font-semibold text-night">{r.name}</span>
                <span className="text-ink/50 text-xs">{r.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-sm text-ink/50">
            Showing {shown.length} of {reviews.length} reviews, from {rating.since} to today
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {remaining > 0 && (
              <button
                onClick={() => setVisible(visible + reviewPageSize)}
                className="btn-primary !bg-night !text-cream hover:!bg-night-mid"
              >
                Show {Math.min(reviewPageSize, remaining)} more reviews
              </button>
            )}
            {visible > featuredReviewCount && (
              <button onClick={() => setVisible(featuredReviewCount)} className="text-sm font-semibold text-ink/60 hover:text-night">
                Show fewer
              </button>
            )}
            <a
              href={business.saPsychicsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-clay hover:text-clay-dark"
            >
              See them on SA Psychics <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
