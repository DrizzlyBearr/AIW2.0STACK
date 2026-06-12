import { Droplets, Sprout, PaintBucket, Shovel } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Irrigation Installation',
    description:
      'Full irrigation system design and installation for residential and commercial properties. Pop-up sprinklers, drip lines, solenoid valves, and pump integration. Built to last.',
    highlight: 'Residential & commercial',
  },
  {
    icon: Sprout,
    title: 'Irrigation Management',
    description:
      'Ongoing system management, seasonal tune-ups, leak detection, and emergency callouts. We also install and program smart controllers so your system runs itself.',
    highlight: 'Smart scheduling included',
  },
  {
    icon: Shovel,
    title: 'Landscaping',
    description:
      'Garden design and landscaping to complement your irrigation setup. We shape outdoor spaces that look great and work with your water system from day one.',
    highlight: 'Design to completion',
  },
  {
    icon: PaintBucket,
    title: 'Painting',
    description:
      'Interior and exterior painting for residential and commercial properties. Clean prep work, quality finishes, and reliable timelines.',
    highlight: 'Interior & exterior',
  },
  {
    icon: Shovel,
    title: 'Paving',
    description:
      'Driveway, pathway, and patio paving. Properly laid, properly finished. We handle groundwork through to final surface so the job is done right.',
    highlight: 'Driveways & patios',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="section-title mb-4">Complete Irrigation Services</h2>
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
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ backgroundColor: '#E8F8F8' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#45BFBF'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#E8F8F8'}
                >
                  <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: '#45BFBF' }} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: '#2A334D' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#E8F8F8', color: '#2E9D9D' }}
                >
                  {s.highlight}
                </span>
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-14 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ backgroundColor: '#E8F8F8' }}>
          <div>
            <p className="font-display font-bold text-xl" style={{ color: '#2A334D' }}>Not sure where to start?</p>
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
