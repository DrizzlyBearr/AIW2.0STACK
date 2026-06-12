import { Droplets, Sprout, Wrench, Gauge, Map, Zap } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Drip Irrigation Systems',
    description:
      'Precision water delivery direct to plant roots. Ideal for gardens, orchards, and vegetable beds. Reduces water usage by up to 60% vs conventional watering.',
    highlight: 'Up to 60% water savings',
  },
  {
    icon: Sprout,
    title: 'Sprinkler Systems',
    description:
      'Pop-up and rotary sprinkler systems for lawns, sports fields, and large open areas. Programmed for full coverage with minimal overlap and zero dry spots.',
    highlight: 'Full-coverage design',
  },
  {
    icon: Gauge,
    title: 'Borehole & Pump Systems',
    description:
      'Complete borehole pump installation, pressure tank setup, and water source integration. We handle the full supply chain from source to sprinkler head.',
    highlight: 'End-to-end supply chain',
  },
  {
    icon: Map,
    title: 'Irrigation Design',
    description:
      'Custom hydraulic design for any site. We survey your land, map water pressure, calculate flow rates, and produce a scaled irrigation plan before a single pipe is laid.',
    highlight: 'Site-specific hydraulic plans',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description:
      'Annual service contracts, seasonal tune-ups, leak detection, and emergency repairs. We keep existing systems running at peak efficiency year-round.',
    highlight: 'Annual service contracts',
  },
  {
    icon: Zap,
    title: 'Smart Controllers & Automation',
    description:
      'Wi-Fi enabled controllers, rain sensors, soil-moisture probes, and app-based scheduling. Water the right amount at the right time, automatically.',
    highlight: 'App-controlled watering',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="section-title mb-4">
            Complete Irrigation Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            From initial design to final commissioning and ongoing maintenance, we handle every aspect of your irrigation project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="card p-7 group">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {s.highlight}
                </span>
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-14 bg-green-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-xl text-gray-900">Not sure what system you need?</p>
            <p className="text-gray-500 mt-1">We offer free site assessments. We visit, we assess, we advise.</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Book a Free Assessment
          </a>
        </div>
      </div>
    </section>
  )
}
