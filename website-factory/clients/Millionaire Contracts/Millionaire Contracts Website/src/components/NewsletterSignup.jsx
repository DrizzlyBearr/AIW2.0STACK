import { Link } from 'react-router-dom'
import LeadMagnetForm from './LeadMagnetForm'
import { COURSE } from '../lib/leadMagnet'

// The box at the foot of every article. Most article readers aren't ready to
// book a call, so instead of a dead end they get something useful for free:
// Beyond Referrals, the free 5-day course, which joins them to Pipeline &
// Power in Command.
export default function NewsletterSignup() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-mc-teal rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <div className="flex-1">
              <span className="section-label mb-3 block">Free 5-day course</span>
              <h3 className="font-headline text-2xl font-black text-white leading-snug mb-2">
                {COURSE.title}
              </h3>
              <p className="font-body text-gray-300 text-sm leading-relaxed mb-3">
                For owners whose business already works, but whose growth still depends on referrals. One short lesson a day for 5 days, the whole system we build for our clients
              </p>
              <Link to={COURSE.page} className="font-body text-sm text-mc-gold underline underline-offset-2">See what's in the course</Link>
            </div>
            <div className="flex-shrink-0 w-full md:w-80">
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
