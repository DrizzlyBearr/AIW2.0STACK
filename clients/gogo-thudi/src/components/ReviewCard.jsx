import { Star, Quote } from 'lucide-react'

export function Stars({ count = 5, size = 'w-4 h-4' }) {
  return (
    <div className="flex" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} ${i < count ? 'text-ochre fill-ochre' : 'text-ochre/30'}`} />
      ))}
    </div>
  )
}

export default function ReviewCard({ review, source }) {
  return (
    <figure className="card p-7 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Quote className="w-7 h-7 text-ochre" aria-hidden="true" />
        <Stars count={review.stars} />
      </div>
      <blockquote className="text-ink/80 leading-relaxed flex-1">"{review.text}"</blockquote>
      <figcaption className="mt-6 pt-4 border-t border-cream-deep text-sm flex items-center justify-between gap-3">
        <span className="font-semibold text-night">{review.name}</span>
        <span className="text-ink/50 text-xs text-right">
          {review.date}
          <span className="block">via {source}</span>
        </span>
      </figcaption>
    </figure>
  )
}
