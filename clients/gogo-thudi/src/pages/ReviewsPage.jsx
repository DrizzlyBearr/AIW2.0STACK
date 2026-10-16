import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ReviewCard, { Stars } from '../components/ReviewCard'
import BookingCta from '../components/BookingCta'
import { business } from '../content'
import { reviewsByTopic } from '../reviewTopics'
import { servicePath } from '../routes'
import { defaultMessage } from '../whatsapp'

// Every review is written into the page, grouped by what it talks about, so visitors
// and search engines can read all of them without clicking "load more".
export default function ReviewsPage() {
  const { rating } = business
  const { groups, other } = reviewsByTopic()
  const sections = [
    ...groups.map((g) => ({ id: g.page.slug, title: g.page.reviewTopic, link: servicePath(g.page), linkLabel: g.page.navTitle, reviews: g.reviews })),
    ...(other.length ? [{ id: 'more', title: 'More reviews', reviews: other }] : []),
  ]

  return (
    <>
      <PageHeader crumbs={[{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews' }]} eyebrow="Client reviews" title={`Gogo Thudi reviews: ${rating.average} from ${rating.count} clients`}>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Stars size="w-6 h-6" />
          <p className="text-cream/80">
            {rating.fiveStar} of {rating.count} reviews are five stars, from {rating.since} to 2026.
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-cream/70 leading-relaxed">
          These reviews were left by clients on {rating.source}, where Gogo Thudi is a {rating.badges[0]}. They are
          shown word for word, with emojis removed and surnames shortened to an initial. Counted October 2026.
        </p>
        <a
          href={business.saPsychicsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-ochre-light hover:text-ochre font-semibold"
        >
          Check them on her SA Psychics profile <ArrowUpRight className="w-4 h-4" />
        </a>
      </PageHeader>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Review topics" className="flex flex-wrap gap-2 mb-14">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-cream-deep bg-white px-4 py-2 text-sm text-ink/70 hover:border-clay hover:text-clay">
                {s.title} ({s.reviews.length})
              </a>
            ))}
          </nav>

          <div className="space-y-20">
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
                  <h2 className="section-title !text-3xl md:!text-4xl">
                    {s.title} <span className="text-ink/40 text-2xl">({s.reviews.length})</span>
                  </h2>
                  {s.link && (
                    <a href={s.link} className="inline-flex items-center gap-1 text-sm font-semibold text-clay hover:text-clay-dark">
                      About {s.linkLabel.toLowerCase()} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {s.reviews.map((r) => (
                    <ReviewCard key={r.id} review={r} source={rating.source} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <BookingCta heading="Book your own consultation" message={defaultMessage} cta="reviews-page" />
    </>
  )
}
