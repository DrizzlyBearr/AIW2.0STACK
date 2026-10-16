import { ChevronRight } from 'lucide-react'
import Beadwork from './Beadwork'

// Dark page header with visible breadcrumbs that match the BreadcrumbList schema.
export default function PageHeader({ crumbs, eyebrow, title, children }) {
  return (
    <section className="relative bg-night text-cream overflow-hidden">
      <div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8963E 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-cream/60">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />}
                {i < crumbs.length - 1 ? (
                  <a href={c.path} className="hover:text-ochre-light">{c.name}</a>
                ) : (
                  <span aria-current="page" className="text-cream/90">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="text-ochre-light text-sm tracking-[0.2em] uppercase mb-4">{eyebrow}</p>}
        <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">{title}</h1>
        {children}
      </div>
      <Beadwork />
    </section>
  )
}
