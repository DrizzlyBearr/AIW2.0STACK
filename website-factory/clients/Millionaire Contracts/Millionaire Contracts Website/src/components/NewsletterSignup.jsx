import { Link } from 'react-router-dom'
import LeadMagnetForm from './LeadMagnetForm'
import { LEAD_MAGNET } from '../lib/leadMagnet'

// The box at the foot of every article. Most article readers aren't ready to
// book a call, so instead of a dead end they get something useful for free:
// the 7 messages download, which joins them to Pipeline & Power in Command.
export default function NewsletterSignup() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-mc-teal rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <div className="flex-1">
              <span className="section-label mb-3 block">Free download</span>
              <h3 className="font-headline text-2xl font-black text-white leading-snug mb-2">
                {LEAD_MAGNET.title}
              </h3>
              <p className="font-body text-gray-300 text-sm leading-relaxed mb-3">
                The first message, the follow-up, what to say when they ask "how much?", and the exit that gets the most replies of all. Copy them, change the names, send them this week
              </p>
              <Link to={LEAD_MAGNET.page} className="font-body text-sm text-mc-gold underline underline-offset-2">See what's inside</Link>
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
