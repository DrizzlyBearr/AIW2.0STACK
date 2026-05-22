import { useState } from 'react'
import { faqLeft, faqRight } from '../data/faq'

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button
        className={`faq-question ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span>{item.question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {open && <div className="faq-answer">{item.answer}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-mc-gold py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-headline font-bold text-white text-center mb-8">FAQS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-0">
            {faqLeft.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-0">
            {faqRight.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
