import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'

const trust = [
  'Free Site Assessments',
  '5-Year Workmanship Warranty',
  'Cape Town Based',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F4848 0%, #1A7070 45%, #2E9D9D 80%, #1A2035 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-16 right-0 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #45BFBF 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #566280 0%, transparent 70%)' }}
        />
        {/* Subtle geometric grid hint — echoes the logo mark */}
        <div className="absolute top-24 right-12 opacity-5 hidden lg:block">
          <svg width="240" height="240" viewBox="0 0 240 240">
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 6 }).map((_, col) => (
                <polygon
                  key={`${row}-${col}`}
                  points={`${col*40},${row*40} ${col*40+40},${row*40} ${col*40},${row*40+40}`}
                  fill="#45BFBF"
                />
              ))
            )}
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Keep Every Plant
              <span className="block" style={{ color: '#6DD0D0' }}> Thriving.</span>
              Every Season.
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Cape Town's irrigation specialists. TNM Irrigation Projects designs, installs, and maintains water-efficient irrigation systems for residential and commercial properties. We also cover landscaping, paving, and painting. Done right. Built to last.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {trust.map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm" style={{ color: '#6DD0D0' }}>
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#45BFBF' }} />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-md text-base"
                style={{ backgroundColor: '#45BFBF', color: 'white' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2E9D9D'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#45BFBF'}
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+27646437107" className="btn-outline text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="lg:flex justify-end hidden">
            <div className="rounded-3xl p-8 w-full max-w-sm border" style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
              <p className="text-sm font-medium mb-6 uppercase tracking-wider" style={{ color: '#6DD0D0' }}>Why clients trust us</p>
              <div className="space-y-6">
                {[
                  { value: '500+', label: 'Projects Completed' },
                  { value: '10+',  label: 'Years in Business' },
                  { value: '98%',  label: 'Client Satisfaction' },
                  { value: '24h',  label: 'Response Time' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <span className="font-display font-bold text-3xl w-20 shrink-0" style={{ color: '#45BFBF' }}>{s.value}</span>
                    <span className="text-sm leading-tight text-white/60">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60 L0 30 C360 0 1080 60 1440 30 L1440 60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
