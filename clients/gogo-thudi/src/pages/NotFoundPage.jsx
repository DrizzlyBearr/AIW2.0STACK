import { services } from '../content'
import { servicePath } from '../routes'

export default function NotFoundPage() {
  return (
    <section className="bg-night text-cream pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="section-label !text-ochre-light mb-3">Page not found</p>
        <h1 className="font-display text-5xl font-semibold mb-6">This page has moved or does not exist.</h1>
        <p className="text-cream/70 mb-10">Here is where you can go instead.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/" className="btn-primary">Home</a>
          <a href="/reviews" className="btn-ghost">Client reviews</a>
        </div>
        <ul className="mt-12 grid sm:grid-cols-2 gap-2 text-left">
          {services.map((s) => (
            <li key={s.key}>
              <a href={servicePath(s)} className="text-cream/70 hover:text-ochre-light underline decoration-ochre/40 underline-offset-4">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
