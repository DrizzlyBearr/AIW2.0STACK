import { Link } from 'react-router-dom'

// Mid-article conversion block. Placed after the problem/root-cause section
// and before the fix, so a reader at peak pain-awareness has a path to book
// without scrolling to the foot of the page. Contextual copy per article.
export default function ArticleCTA({ heading, body, cta = 'Book a Free Strategy Call', to = '/calender' }) {
  return (
    <section className="py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-mc-dark rounded-2xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
              <h3 className="font-headline text-2xl font-black text-white leading-snug mb-2">{heading}</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
            <Link to={to} className="btn-primary flex-shrink-0 whitespace-nowrap text-center">
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
