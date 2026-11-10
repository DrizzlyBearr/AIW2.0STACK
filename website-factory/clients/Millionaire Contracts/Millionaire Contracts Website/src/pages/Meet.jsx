import { useState } from 'react'
import SEOMeta from '../components/SEOMeta'
import ProblemForm from '../components/ProblemForm'
import { trackGoal } from '../lib/track'

// Where the QR code on Kat's business card lands (Kat, 10 November 2026).
// Somebody holding the card has just met Kat, so this page is about the
// person first: who she is, the podcast interview, LinkedIn, and one tap to
// a call or a plan. No main navigation. Kept out of search and the sitemap
// (scripts/prerender.js, NOINDEX): it is for people holding the card.
//
// The ads keep their own page (/get-a-plan), whose headline matches the ad
// they clicked. Card visits arrive tagged utm_source=business-card, so
// Command shows where each enquiry came from.

const LINKEDIN_URL = 'https://www.linkedin.com/in/katleho-mohlomi/'
const BOOKING_URL = 'https://calendly.com/katlehomoh/30min'
// The podcast interview on YouTube: the watch link, such as
// https://www.youtube.com/watch?v=XXXXXXXXXXX. Empty hides the section.
const PODCAST_URL = 'https://www.youtube.com/watch?v=xQtHm1c-hso'
// Its thumbnail, kept on the site (Kat, 10 November: on her phone YouTube's
// player showed nothing until tapped, as Safari's privacy settings, content
// blockers and a QR scanner's own browser often do). The picture is ours, so
// it always shows; YouTube's player loads only once it is tapped.
const PODCAST_THUMB = '/media/podcast-mpho-dagada.jpg'

function youtubeId(url) {
  const m = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/.exec(url || '')
  return m ? m[1] : null
}

const PROOF = [
  { value: '120+', label: 'qualified appointments for Skayle 360' },
  { value: 'R29M+', label: 'revenue in a single year for Atlas Management' },
  { value: '2.4x', label: 'lead-to-client conversion for McLifestyle Fitness' },
]

export default function Meet() {
  const video = youtubeId(PODCAST_URL)
  const [playing, setPlaying] = useState(false)
  const tap = (what) => () => trackGoal(`card: ${what}`)

  return (
    <div className="min-h-screen flex flex-col bg-mc-dark text-white">
      <SEOMeta
        title="Katleho Mohlomi, Millionaire Contracts"
        description="Founder and CEO of Millionaire Contracts. Watch the podcast interview, connect on LinkedIn, or book a call."
        path="/meet"
      />

      <header className="bg-white border-b border-gray-100 px-6">
        <div className="max-w-screen-md mx-auto h-20 flex items-center">
          <a href="/" aria-label="Millionaire Contracts home">
            <img src="/mc-logo.png" alt="Millionaire Contracts" className="h-12 w-auto" style={{ maxWidth: '230px' }} />
          </a>
        </div>
      </header>

      <main className="flex-1 px-6 py-10">
        <div className="max-w-screen-md mx-auto space-y-10">
          {/* Who you just met */}
          <section className="flex flex-col items-center text-center gap-4">
            <img src="/team/katleho-mohlomi.webp" alt="Katleho Mohlomi" className="w-32 h-32 rounded-full object-cover object-top border-2 border-mc-gold" />
            <div>
              <h1 className="font-headline text-3xl font-bold">Katleho Mohlomi</h1>
              <p className="text-mc-gold font-semibold mt-1">Founder &amp; CEO, Millionaire Contracts</p>
            </div>
            <p className="text-gray-300 max-w-md">
              We find, reach and book the clients a business never gets round to, so its owner can sell less and close more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={tap('book a call')} className="btn-primary text-center">
                Book a 30 minute call
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={tap('linkedin')} className="btn-secondary text-center">
                Connect on LinkedIn
              </a>
            </div>
          </section>

          {/* The podcast */}
          {video && (
            <section className="space-y-3">
              <h2 className="font-headline text-xl font-bold text-center">My interview on the Mpho Dagada Network</h2>
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10" style={{ paddingTop: '56.25%' }}>
                {playing ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1&playsinline=1`}
                    title="Katleho Mohlomi on the Mpho Dagada Network"
                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => { trackGoal('card: play interview'); setPlaying(true) }}
                    className="absolute inset-0 w-full h-full group"
                    aria-label="Play the interview"
                  >
                    <img src={PODCAST_THUMB} alt="The Sales Pioneer you need to know about, with Katleho Mohlomi" className="absolute inset-0 w-full h-full object-cover" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex items-center justify-center w-16 h-11 rounded-xl bg-red-600 group-hover:bg-red-500 shadow-lg">
                        <span className="ml-1 w-0 h-0 border-y-[9px] border-y-transparent border-l-[15px] border-l-white" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <p className="text-center text-sm">
                <a href={PODCAST_URL} target="_blank" rel="noopener noreferrer" onClick={tap('youtube')} className="text-mc-gold underline">
                  Watch on YouTube
                </a>
              </p>
            </section>
          )}

          {/* Proof, from the published case studies */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PROOF.map((p) => (
              <div key={p.value} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="font-headline text-2xl font-bold text-mc-gold">{p.value}</p>
                <p className="text-xs text-gray-300 mt-1">{p.label}</p>
              </div>
            ))}
          </section>

          {/* The plan */}
          <section id="plan" className="space-y-3">
            <div className="text-center">
              <h2 className="font-headline text-xl font-bold">Rather start in writing?</h2>
              <p className="text-gray-300 text-sm mt-1">Tell us what isn&apos;t getting done. We send a free written plan to get it done, within two working days.</p>
            </div>
            <ProblemForm source="website:meet" />
          </section>
        </div>
      </main>

      <footer className="px-6 py-6 text-center text-xs text-gray-400">
        <a href="/" className="hover:text-white">millionairecontracts.com</a>
      </footer>
    </div>
  )
}
