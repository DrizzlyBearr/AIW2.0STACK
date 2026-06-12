import { CheckCircle2 } from 'lucide-react'

const milestones = [
  { year: '2014', event: 'TNM Irrigation Projects founded by Trymore Nyamupfukudza' },
  { year: '2016', event: 'First commercial project completed in Cape Town' },
  { year: '2019', event: 'Expanded into full residential and commercial irrigation across Cape Town' },
  { year: '2022', event: '500th project completed' },
  { year: '2024', event: 'Expanded into landscaping, paving, and painting' },
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
            <h2 className="section-title mb-6">A Decade of Irrigation Excellence</h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              TNM Irrigation Projects was founded by Trymore Nyamupfukudza with a single aim: to bring professional-grade irrigation services to properties of every size. Starting with residential garden systems, the business grew steadily by doing clean work and standing behind it.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Today we work across domestic and commercial sectors, covering everything from small garden drip systems to large-scale commercial installations. Every project is built to the same standard: the right system, properly installed, properly maintained, at a fair price.
            </p>

            {/* Founder card */}
            <div className="flex items-center gap-4 p-5 rounded-xl border mb-8" style={{ backgroundColor: '#E8F8F8', borderColor: '#C8ECEC' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0" style={{ backgroundColor: '#45BFBF' }}>
                T
              </div>
              <div>
                <p className="font-display font-bold" style={{ color: '#2A334D' }}>Trymore Nyamupfukudza</p>
                <p className="text-sm font-medium" style={{ color: '#2E9D9D' }}>Founder &amp; Lead Irrigation Specialist</p>
                <p className="text-gray-500 text-xs mt-0.5">Hands-on. On every project.</p>
              </div>
            </div>

            <h3 className="font-display font-bold text-lg mb-4" style={{ color: '#2A334D' }}>What we stand for</h3>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#45BFBF' }} />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: timeline */}
          <div>
            <h3 className="font-display font-bold text-xl mb-8" style={{ color: '#2A334D' }}>How we got here</h3>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#E8F8F8' }} />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex items-start gap-6 relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 z-10 shadow-sm"
                      style={{ backgroundColor: '#45BFBF' }}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <span className="font-bold text-sm" style={{ color: '#45BFBF' }}>{m.year}</span>
                      <p className="font-medium mt-0.5" style={{ color: '#2A334D' }}>{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo showcase */}
            <div className="mt-10 rounded-2xl border p-8 flex flex-col items-center text-center" style={{ backgroundColor: '#F8FAFA', borderColor: '#E8F8F8' }}>
              <img src="/logo.jpeg" alt="TNM Irrigation Projects" className="h-16 w-auto mb-3" />
              <p className="text-sm font-medium" style={{ color: '#2A334D' }}>Serving Cape Town since 2014</p>
              <p className="text-xs mt-1" style={{ color: '#566280' }}>Maitland, Cape Town, 7405</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
