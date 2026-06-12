import { useState } from 'react'
import { MapPin } from 'lucide-react'

const projects = [
  {
    title: 'Residential Lawn Sprinkler System',
    category: 'Residential',
    location: 'Cape Town',
    description: 'Full pop-up sprinkler system across a large residential garden. Multiple zones covering the lawn and flower beds with even distribution and zero dry patches.',
    image: '/projects/lawn-sprinklers-wide.jpg',
    alt: 'Residential lawn with pop-up sprinklers running across garden beds',
  },
  {
    title: 'Pump & Tank System Installation',
    category: 'Pump Systems',
    location: 'Cape Town',
    description: 'Complete pump control system with pressure tank, storage tanks, and automated pump controller. Full pipe manifold, isolation valves, and pressure regulation installed.',
    image: '/projects/pump-system.jpg',
    alt: 'Pump control unit with water storage tanks and pipe manifold',
  },
  {
    title: 'Smart Timer Controller Install',
    category: 'Smart Controls',
    location: 'Cape Town',
    description: 'Valticino digital timer fitted to an existing outdoor tap. Automated scheduling with programmable run times — no manual watering needed.',
    image: '/projects/smart-timer.jpg',
    alt: 'Valticino digital water timer mounted on outdoor brass tap',
  },
  {
    title: 'Garden Bed Sprinkler Zone',
    category: 'Residential',
    location: 'Cape Town',
    description: 'Dedicated sprinkler zone for an established garden bed border. Pop-up heads positioned for precise coverage of plants without over-spraying the path.',
    image: '/projects/sprinkler-closeup.jpg',
    alt: 'Close-up of pop-up sprinkler head irrigating a garden bed',
  },
  {
    title: 'Front Garden Irrigation',
    category: 'Residential',
    location: 'Cape Town',
    description: 'Front garden and verge irrigation system with full lawn and border coverage. Even spray pattern across the full width of the property down to the street edge.',
    image: '/projects/lawn-sprinklers-street.jpg',
    alt: 'Sprinkler system running across front garden down to street edge',
  },
  {
    title: 'Your Project Here',
    category: 'Enquire',
    location: 'Cape Town',
    description: 'We take on residential, commercial, and agricultural irrigation projects across Cape Town. Get in touch and tell us what you need.',
    image: null,
    alt: '',
  },
]

const categories = ['All', 'Residential', 'Pump Systems', 'Smart Controls']

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Work</p>
          <h2 className="section-title mb-4">Real Projects. Real Results.</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Every photo below is a completed TNM installation. Cape Town homes and properties, properly watered.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                active === c
                  ? { backgroundColor: '#45BFBF', color: 'white' }
                  : { backgroundColor: '#f3f4f6', color: '#4b5563' }
              }
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.title} className="card overflow-hidden group">
              {/* Image or CTA placeholder */}
              <div className="h-56 overflow-hidden relative">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #0F4848, #2E9D9D)' }}
                  >
                    <span className="text-5xl mb-2">📸</span>
                    <span className="text-white/70 text-sm">Your project photo</span>
                  </div>
                )}
                <span
                  className="absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(15,72,72,0.75)', backdropFilter: 'blur(4px)' }}
                >
                  {p.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {p.location}
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#2A334D' }}>{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                {!p.image && (
                  <a href="#contact" className="mt-4 inline-block text-sm font-semibold" style={{ color: '#45BFBF' }}>
                    Get a quote &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
