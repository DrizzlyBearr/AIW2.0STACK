import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import BookingCta from '../components/BookingCta'
import { business } from '../content'
import { servicePages } from '../servicePages'
import { guides } from '../guides'
import { servicePath, guidePath } from '../routes'
import { defaultMessage } from '../whatsapp'

export default function ServicesPage() {
  return (
    <>
      <PageHeader crumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} eyebrow="Services" title="Traditional healing services in Pretoria North">
        <p className="mt-6 max-w-2xl text-lg text-cream/80 leading-relaxed">
          Gogo Thudi is a sangoma, inyanga, prophet and medium with {business.yearsPractising} years of experience.
          Every service starts with a consultation: {business.fees.inPerson} in person at her practice in{' '}
          {business.area}, or {business.fees.virtual} by video call from anywhere.
        </p>
      </PageHeader>
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePages.map((p) => (
            <a key={p.slug} href={servicePath(p)} className="card p-7 flex flex-col group">
              <p className="text-xs uppercase tracking-widest text-clay mb-3">{p.problem}</p>
              <h2 className="text-2xl font-semibold text-night mb-3 group-hover:text-clay">{p.navTitle}</h2>
              <p className="text-ink/70 leading-relaxed flex-1">{p.answer.split('. ')[0]}.</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-clay">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-14">
          <h2 className="section-title !text-3xl mb-5">Guides</h2>
          <ul className="space-y-2">
            {guides.map((g) => (
              <li key={g.slug}>
                <a href={guidePath(g)} className="inline-flex items-center gap-1 text-clay hover:text-clay-dark font-semibold">
                  {g.navTitle} <ArrowRight className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BookingCta heading="Not sure which service you need?" message={defaultMessage} cta="services-hub" />
    </>
  )
}
