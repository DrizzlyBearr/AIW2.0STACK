import { MessageCircle, Phone, Check, Info, ArrowRight, BadgeCheck, Star } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ReviewCard from '../components/ReviewCard'
import FAQ from '../components/FAQ'
import Booking from '../components/Booking'
import BookingCta from '../components/BookingCta'
import { business, services } from '../content'
import { servicePageBySlug } from '../servicePages'
import { servicePath } from '../routes'
import { reviewsFor } from '../reviewTopics'
import { waLink } from '../whatsapp'
import { LAST_UPDATED_LABEL } from '../site'

export default function ServicePage({ slug }) {
  const page = servicePageBySlug[slug]
  const bookMessage = `Hello Gogo Thudi, I found you on your website (${page.navTitle} page). I would like to book: ${page.navTitle}.`
  const matched = reviewsFor(page)
  const covers = services.filter((s) => s.slug === slug)
  const related = page.related.map((r) => servicePageBySlug[r])

  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: page.navTitle, path: servicePath(page) },
        ]}
        eyebrow={page.problem}
        title={page.h1}
      >
        <p className="mt-6 max-w-2xl text-lg text-cream/80 leading-relaxed">{page.answer}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href={waLink(bookMessage)} target="_blank" rel="noopener noreferrer" data-cta="service-hero" data-service={slug} className="btn-primary text-base px-8 py-4">
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </a>
          <a href={business.phoneHref} data-cta="service-hero" data-service={slug} className="btn-ghost text-base px-8 py-4">
            <Phone className="w-5 h-5" />
            Call {business.phoneDisplay}
          </a>
        </div>
        <p className="mt-4 text-sm text-cream/60">
          {business.fees.inPerson} in person, {business.fees.virtual} by video call. Your message stays private.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/75">
          <li>
            <a href="/reviews" className="flex items-center gap-2 hover:text-ochre-light">
              <Star className="w-4 h-4 text-ochre fill-ochre" />
              {business.rating.average} from {business.rating.count} reviews on {business.rating.source}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-ochre" />
            {business.yearsPractising} years, verified on Gogo Online
          </li>
        </ul>
      </PageHeader>

      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div className="space-y-12">
            <div>
              <h2 className="section-title !text-3xl md:!text-4xl mb-4">What is {page.definition.term.toLowerCase()}?</h2>
              <p className="text-ink/80 leading-relaxed text-lg">{page.definition.text}</p>
              {covers.length > 1 && (
                <p className="mt-4 text-ink/70 leading-relaxed">
                  This page covers {covers.map((s) => s.title.toLowerCase()).join(' and ')}.
                </p>
              )}
            </div>

            <div>
              <h2 className="section-title !text-3xl md:!text-4xl mb-5">This is for you if</h2>
              <ul className="space-y-3">
                {page.forYou.map((f) => (
                  <li key={f} className="flex gap-3 text-ink/80 leading-relaxed">
                    <Check className="w-5 h-5 text-clay shrink-0 mt-0.5" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="section-title !text-3xl md:!text-4xl mb-5">What happens in your consultation</h2>
              <ol className="space-y-4">
                {page.session.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-display text-3xl font-semibold text-ochre leading-none w-8 shrink-0">{i + 1}</span>
                    <p className="text-ink/80 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-cream-deep bg-white p-6 flex gap-4">
              <Info className="w-5 h-5 text-clay shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-semibold text-night mb-1">What this is not</h2>
                <p className="text-ink/70 leading-relaxed">{page.notThis}</p>
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 self-start">
            <div className="rounded-3xl bg-night text-cream p-7">
              <h2 className="font-display text-3xl font-semibold mb-5">Price and booking</h2>
              <dl className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-cream/60">In person</dt>
                  <dd className="font-display text-4xl text-ochre-light">{business.fees.inPerson}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-cream/60">Video call</dt>
                  <dd className="font-display text-4xl text-ochre-light">{business.fees.virtual}</dd>
                </div>
              </dl>
              <p className="text-sm text-cream/70 leading-relaxed mb-6">{page.virtual}</p>
              <a href={waLink(bookMessage)} target="_blank" rel="noopener noreferrer" data-cta="service-sidebar" data-service={slug} className="btn-primary w-full">
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </div>
            <div className="card p-6 text-sm text-ink/70 space-y-2">
              <p><span className="font-semibold text-night">Where:</span> {business.address}</p>
              <p><span className="font-semibold text-night">Languages:</span> {business.languages.join(', ')}</p>
              <p><span className="font-semibold text-night">Hours:</span> Monday to Saturday from 08:00</p>
            </div>
            <div className="card p-6">
              <p className="font-semibold text-night mb-3">Related services</p>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <a href={servicePath(r)} className="inline-flex items-center gap-1 text-clay hover:text-clay-dark">
                      {r.navTitle} <ArrowRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {matched.length > 0 && (
        <section className="py-20 bg-cream-deep">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <h2 className="section-title">What clients say</h2>
              <a href="/reviews" className="inline-flex items-center gap-1 text-sm font-semibold text-clay hover:text-clay-dark">
                Read all {business.rating.count} reviews <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {matched.map((r) => (
                <ReviewCard key={r.id} review={r} source={business.rating.source} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ items={page.faqs} title={`Questions about ${page.navTitle.toLowerCase()}`} />

      <BookingCta
        heading={`Ready to book ${page.navTitle.toLowerCase()}?`}
        message={bookMessage}
        service={slug}
      />

      <Booking defaultService={covers[0]?.title} source={`${page.navTitle} page`} />

      <p className="bg-night text-cream/40 text-xs text-center pb-8">Last updated {LAST_UPDATED_LABEL}</p>
    </>
  )
}
