import { Check, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import BookingCta from '../components/BookingCta'
import { business } from '../content'
import { guideBySlug } from '../guides'
import { servicePageBySlug } from '../servicePages'
import { servicePath, guidePath } from '../routes'
import { defaultMessage } from '../whatsapp'

const label = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default function GuidePage({ slug }) {
  const g = guideBySlug[slug]
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: g.navTitle, path: guidePath(g) },
        ]}
        eyebrow="Guide"
        title={g.h1}
      >
        <p className="mt-6 max-w-2xl text-lg text-cream/80 leading-relaxed">{g.intro}</p>
        <p className="mt-6 text-sm text-cream/50">
          By Gogo Thudi, traditional healer in {business.area}. Updated {label(g.updated)}.
        </p>
      </PageHeader>
      <article className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-14">
          {g.sections.map((s) => (
            <section key={s.h2}>
              <h2 className="section-title !text-3xl md:!text-4xl mb-4">{s.h2}</h2>
              <p className="text-ink/85 text-lg leading-relaxed">{s.answer}</p>
              {s.points.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-ink/75 leading-relaxed">
                      <Check className="w-5 h-5 text-clay shrink-0 mt-0.5" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
              {s.checkLinks && (
                <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a href={business.saPsychicsUrl} target="_blank" rel="noopener noreferrer" className="text-clay underline underline-offset-4">Her SA Psychics profile</a>
                  <a href={business.gogoOnlineUrl} target="_blank" rel="noopener noreferrer" className="text-clay underline underline-offset-4">Her Gogo Online profile</a>
                  <a href="/reviews" className="text-clay underline underline-offset-4">All {business.rating.count} reviews</a>
                </p>
              )}
            </section>
          ))}
          <section className="card p-7">
            <h2 className="font-semibold text-night mb-3">Related services</h2>
            <ul className="space-y-2">
              {g.related.map((r) => (
                <li key={r}>
                  <a href={servicePath(servicePageBySlug[r])} className="inline-flex items-center gap-1 text-clay hover:text-clay-dark">
                    {servicePageBySlug[r].navTitle} <ArrowRight className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <BookingCta heading="Questions before you book?" message={defaultMessage} cta="guide-end" />
    </>
  )
}
