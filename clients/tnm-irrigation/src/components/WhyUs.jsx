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
    body: 'We are a local business. We understand local soil, climate, and water supply conditions. No one-size-fits-all solutions here.',
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    body: 'Once your system is installed we do not disappear. Ongoing service contracts, emergency callouts, and seasonal tune-ups are all part of the offering.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading + intro */}
          <div>
            <p className="section-label mb-3">Why Choose T.N.M</p>
            <h2 className="section-title mb-6">
              Irrigation Done Right.<br />
              <span className="text-green-600">Every Single Time.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We have been designing and installing irrigation systems for over a decade. Our reputation is built on doing precise, clean work that lasts and treating every client's property with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">Get Your Free Quote</a>
              <a href="#projects" className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors">
                View Our Projects
                <span className="text-lg">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right: reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.title} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{r.title}</h3>
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
