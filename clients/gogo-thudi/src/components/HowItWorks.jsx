import { steps } from '../content'

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-cream-deep">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Your first visit</p>
          <h2 className="section-title">Simple, private, and at your pace</h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative text-center md:text-left">
              <span className="font-display text-6xl font-semibold text-ochre leading-none">0{i + 1}</span>
              <h3 className="text-2xl font-semibold text-night mt-3 mb-2">{s.title}</h3>
              <p className="text-ink/70 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
