import { useState } from 'react'
import { trackGoal } from '../lib/track'

// Kat's interview on the Mpho Dagada Network, on /meet and /get-a-plan. The
// thumbnail is kept on the site so it always shows (Kat, 10 November: on her
// phone YouTube's player showed nothing until tapped, as Safari's privacy
// settings, content blockers and a QR scanner's own browser often do).
// YouTube's player loads only once it is tapped.

export const PODCAST_URL = 'https://www.youtube.com/watch?v=xQtHm1c-hso'
const VIDEO_ID = 'xQtHm1c-hso'
const PODCAST_THUMB = '/media/podcast-mpho-dagada.jpg'

/** The player and its YouTube link. `goal` names where it was played, for the analytics. */
export default function PodcastInterview({ goal = 'interview', linkClass = 'text-mc-gold underline' }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="space-y-3">
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10" style={{ paddingTop: '56.25%' }}>
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&playsinline=1`}
            title="Katleho Mohlomi on the Mpho Dagada Network"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => { trackGoal(`${goal}: play interview`); setPlaying(true) }}
            className="absolute inset-0 w-full h-full group"
            aria-label="Play the interview"
          >
            <img src={PODCAST_THUMB} alt="The Sales Pioneer you need to know about, with Katleho Mohlomi" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-11 rounded-xl bg-red-600 group-hover:bg-red-500 shadow-lg">
                <span className="ml-1 w-0 h-0 border-y-[9px] border-y-transparent border-l-[15px] border-l-white" />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="text-center text-sm">
        <a href={PODCAST_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackGoal(`${goal}: youtube`)} className={linkClass}>
          Watch on YouTube
        </a>
      </p>
    </div>
  )
}
