import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'

const trust = [
  'Licensed & Insured',
  'Free Site Assessments',
  '5-Year Workmanship Warranty',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d3d0d 0%, #1e6b1e 40%, #2d8a2d 70%, #1a5c3a 100%)',
      }}
    >
      {/* Decorative water-drop pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a3e8a3 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #6dd56d 0%, transparent 70%)' }}
        />
        {/* SVG wave at bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 C240 0 480 80 720 40 C960 0 1200 80 1440 40 L1440 80 L0 80 Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <span className="inline-block bg-green-500/20 text-green-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Professional Irrigation Solutions
            </span>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Keep Every Plant
              <span className="block text-green-300"> Thriving.</span>
              Every Season.
            </h1>

            <p className="text-green-100/80 text-lg leading-relaxed mb-8 max-w-lg">
              T.N.M Irrigation Projects designs and installs water-efficient irrigation systems for residential gardens, commercial landscapes, farms, and sports fields. Done right. Built to last.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {trust.map((t) => (
                <span key={t} className="flex items-center gap-2 text-green-200 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary bg-green-400 hover:bg-green-300 text-green-900 text-base font-bold px-8 py-4">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+27000000000" className="btn-outline text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 w-full max-w-sm">
              <p className="text-green-200 text-sm font-medium mb-6 uppercase tracking-wider">Why clients trust us</p>
              <div className="space-y-6">
                {[
                  { value: '500+', label: 'Projects Completed' },
                  { value: '10+', label: 'Years in Business' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '24h', label: 'Response Time' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <span className="font-display font-bold text-3xl text-green-300 w-20 shrink-0">{s.value}</span>
                    <span className="text-white/70 text-sm leading-tight">{s.label}</span>
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
