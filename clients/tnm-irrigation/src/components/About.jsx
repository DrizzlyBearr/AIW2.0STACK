import { CheckCircle2 } from 'lucide-react'

const milestones = [
  { year: '2014', event: 'T.N.M Irrigation Projects founded' },
  { year: '2016', event: 'First commercial project: Office park, Johannesburg' },
  { year: '2019', event: 'Expanded into agricultural irrigation' },
  { year: '2022', event: '500th project completed' },
  { year: '2024', event: 'Smart controller installation capability added' },
]

const values = [
  'We never cut corners on materials or labour.',
  'We design for water efficiency first.',
  'We are transparent about pricing upfront.',
  'We treat your property with respect.',
  'We deliver what we promise, when we promise it.',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: story */}
          <div>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="section-title mb-6">
              A Decade of Irrigation Excellence
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              T.N.M Irrigation Projects was founded by Trymore Nyamupfukudza with a single aim: to bring professional-grade irrigation and plumbing services to properties of every size. Starting with residential garden systems, the business grew steadily by doing clean work and standing behind it.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Today we work across domestic and commercial sectors, covering everything from small garden drip systems to large-scale commercial installations. Every project is built to the same standard: the right system, properly installed, properly maintained, at a fair price.
            </p>

            {/* Founder card */}
            <div className="flex items-center gap-4 p-5 bg-green-50 rounded-xl border border-green-100 mb-8">
              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                T
              </div>
              <div>
                <p className="font-display font-bold text-gray-900">Trymore Nyamupfukudza</p>
                <p className="text-green-700 text-sm font-medium">Founder &amp; Lead Irrigation Specialist</p>
                <p className="text-gray-500 text-xs mt-0.5">Hands-on. On every project.</p>
              </div>
            </div>

            <h3 className="font-display font-bold text-gray-900 text-lg mb-4">What we stand for</h3>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: timeline */}
          <div>
            <h3 className="font-display font-bold text-gray-900 text-xl mb-8">How we got here</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-green-100" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex items-start gap-6 relative">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs shrink-0 z-10 shadow-sm">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <span className="text-green-600 font-bold text-sm">{m.year}</span>
                      <p className="text-gray-700 font-medium mt-0.5">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 p-8 text-center">
              <div className="text-5xl mb-3">🌿</div>
              <p className="text-green-700 font-semibold">Team photo goes here</p>
              <p className="text-green-600 text-sm mt-1">Add your actual team or site photos by replacing this section.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
