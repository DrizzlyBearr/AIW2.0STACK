import { useState } from 'react'
import { faqLeft, faqRight } from '../data/faq'

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-lg overflow-hidden border transition-colors ${open ? 'border-mc-gold/40' : 'border-white/10'}`}>
      <button
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-body font-semibold text-sm text-white leading-snug">{item.question}</span>
        <span className={`text-mc-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 font-body text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-4">
          {item.answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-mc-dark py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label mb-3 block">FAQ</span>
          <h2 className="font-headline text-4xl font-black text-white">Common questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            {faqLeft.map((item) => <FAQItem key={item.id} item={item} />)}
          </div>
          <div className="flex flex-col gap-3">
            {faqRight.map((item) => <FAQItem key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
