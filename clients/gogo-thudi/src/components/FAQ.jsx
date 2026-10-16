import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ({ items, title = 'Before you book', label = 'Questions' }) {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24 bg-cream-deep">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="bg-white rounded-2xl border border-cream-deep">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-night">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-clay transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <p hidden={!isOpen} className="px-6 pb-6 -mt-1 text-ink/70 leading-relaxed">{f.a}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
