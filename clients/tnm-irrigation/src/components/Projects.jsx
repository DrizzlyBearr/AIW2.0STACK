import { MapPin } from 'lucide-react'

const projects = [
  {
    title: 'Residential Garden Drip System',
    category: 'Residential',
    location: 'Pretoria',
    size: '1 200 m2',
    description: 'Full drip irrigation installation for a large residential property. Automated controller, rain sensor, and zoned scheduling for lawn, flower beds, and vegetable garden.',
    color: 'from-green-800 to-green-600',
    emoji: '🏡',
  },
  {
    title: 'Commercial Office Park Irrigation',
    category: 'Commercial',
    location: 'Johannesburg',
    size: '8 500 m2',
    description: 'Multi-zone sprinkler system for a corporate campus. Pop-up rotary heads, centralised smart controller, and monthly service contract.',
    color: 'from-emerald-800 to-emerald-600',
    emoji: '🏢',
  },
  {
    title: 'Agricultural Orchard System',
    category: 'Agricultural',
    location: 'Mpumalanga',
    size: '5 ha',
    description: 'Drip tape and micro-jet system across a 5-hectare fruit orchard. Borehole source, filtration bank, and fertigation capability.',
    color: 'from-teal-800 to-teal-600',
    emoji: '🌳',
  },
  {
    title: 'Sports Field Sprinkler System',
    category: 'Sports',
    location: 'Limpopo',
    size: '7 200 m2',
    description: 'Full-coverage underground pop-up system for a community football field. Designed for uniform distribution and quick dry-down.',
    color: 'from-green-700 to-lime-600',
    emoji: '⚽',
  },
  {
    title: 'School Grounds Irrigation',
    category: 'Institutional',
    location: 'Tshwane',
    size: '3 400 m2',
    description: 'Timed drip and sprinkler system for school grounds and food garden. Integrated with municipal water supply and overflow tank.',
    color: 'from-emerald-700 to-green-500',
    emoji: '🏫',
  },
  {
    title: 'Wine Estate Vineyard Drip',
    category: 'Agricultural',
    location: 'Limpopo',
    size: '12 ha',
    description: 'Precision drip irrigation for a 12-hectare vineyard. Row-by-row zoning, soil moisture sensors, and fertigation manifold.',
    color: 'from-green-900 to-green-700',
    emoji: '🍇',
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Agricultural', 'Sports', 'Institutional']

import { useState } from 'react'

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Work</p>
          <h2 className="section-title mb-4">Projects We Are Proud Of</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Every project is different. Every solution is custom. Here is a sample of the work we have done across residential, commercial, and agricultural sectors.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === c
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.title} className="card overflow-hidden group">
              {/* Placeholder image block */}
              <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl opacity-60">{p.emoji}</span>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {p.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {p.location} &bull; {p.size}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          Photos available on request. Contact us for a portfolio walk-through.
        </p>
      </div>
    </section>
  )
}
