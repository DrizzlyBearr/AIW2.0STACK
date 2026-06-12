import { Shield, Clock, Award, Users, Leaf, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Licensed Professionals',
    body: 'Every installation is carried out by trained, licensed irrigation technicians. We follow best practice standards on every project, no shortcuts.',
  },
  {
    icon: Shield,
    title: '5-Year Workmanship Warranty',
    body: 'We back our work. Every installation carries a 5-year workmanship warranty. If something we installed fails, we fix it at no charge.',
  },
  {
    icon: Leaf,
    title: 'Water-Efficient by Design',
    body: 'Every system we design is engineered to use the minimum water needed. We build in rain sensors, moisture probes, and optimal scheduling from day one.',
  },
  {
    icon: Clock,
    title: 'On Time, Every Time',
    body: 'We quote a start date and we honor it. Project timelines are communicated upfront and we keep you updated throughout.',
  },
  {
    icon: Users,
    title: 'Local Team, Deep Roots',
    body: 'We are based in Maitland, Cape Town. We understand Western Cape soil, climate, and water supply conditions. No one-size-fits-all solutions here.',
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    body: 'Once your system is installed we do not disappear. Ongoing service contracts, emergency callouts, and seasonal tune-ups are all part of the offering.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24" style={{ backgroundColor: '#F8FAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <div>
            <p className="section-label mb-3">Why Choose TNM</p>
            <h2 className="section-title mb-6">
              Irrigation Done Right.<br />
              <span style={{ color: '#45BFBF' }}>Every Single Time.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We have been designing and installing irrigation systems for over a decade. Our reputation is built on doing precise, clean work that lasts and treating every client's property with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">Get Your Free Quote</a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-semibold transition-colors"
                style={{ color: '#2E9D9D' }}
              >
                View Our Projects <span className="text-lg">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right: reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r) => {
              const Icon = r.icon
              return (
                <div
                  key={r.title}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all duration-200"
                  style={{ borderColor: '' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#45BFBF'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = ''}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#E8F8F8' }}>
                    <Icon className="w-5 h-5" style={{ color: '#45BFBF' }} />
                  </div>
                  <h3 className="font-display font-semibold mb-2" style={{ color: '#2A334D' }}>{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
