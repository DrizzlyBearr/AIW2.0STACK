import { useState } from 'react'
import { MapPin } from 'lucide-react'

const projects = [
  {
    title: 'Residential Lawn Sprinkler System',
    category: 'Residential',
    description: 'Full pop-up sprinkler system across a large residential garden. Multiple zones, even coverage across lawn and flower beds.',
    image: '/projects/lawn-sprinklers-wide.jpg',
    alt: 'Residential lawn with pop-up sprinklers running',
  },
  {
    title: 'Underground Valve Manifold',
    category: 'Installation',
    description: 'Multi-zone solenoid valve box installed underground. Each zone independently controlled with dedicated wiring. The engine behind a fully automated system.',
    image: '/projects/valve-manifold.jpg',
    alt: 'Underground solenoid valve manifold with zone wiring',
  },
  {
    title: 'Pump & Tank System',
    category: 'Pump Systems',
    description: 'Automated pump controller with storage tanks, pressure vessel, pipe manifold, isolation valves, and pressure regulation. Full water supply setup.',
    image: '/projects/pump-system.jpg',
    alt: 'Pump control unit with water storage tanks and pipe manifold',
  },
  {
    title: 'Front Verge Irrigation',
    category: 'Residential',
    description: 'Sprinkler system covering the front lawn and verge right to the street edge. Clean, even spray pattern with no dry spots.',
    image: '/projects/verge-sprinklers.jpg',
    alt: 'Sprinkler system running across front lawn verge',
  },
  {
    title: 'Garden Bed Sprinkler Head',
    category: 'Residential',
    description: 'Low-angle sprinkler head positioned in an established flower bed. Targeted coverage keeps plants hydrated without soaking paths or walls.',
    image: '/projects/garden-bed-sprinkler.jpg',
    alt: 'Sprinkler head irrigating a garden bed at low angle',
  },
  {
    title: 'Smart Timer: Scheduled Run',
    category: 'Smart Controls',
    description: 'Valticino digital timer programmed with next start time. Set it once and the system waters automatically. No manual intervention needed.',
    image: '/projects/timer-scheduled.jpg',
    alt: 'Valticino timer displaying next scheduled watering time',
  },
  {
    title: 'Sprinkler Close-Up',
    category: 'Residential',
    description: 'Pop-up sprinkler head in action at the lawn border. Full arc coverage with adjustable throw radius to match any bed or lawn shape.',
    image: '/projects/sprinkler-closeup.jpg',
    alt: 'Pop-up sprinkler head spraying water over lawn',
  },
  {
    title: 'Timer Controller Install',
    category: 'Smart Controls',
    description: 'Valticino digital timer fitted to an outdoor tap. Automates any hose-connected irrigation system with programmable daily schedules.',
    image: '/projects/smart-timer.jpg',
    alt: 'Valticino digital water timer on outdoor brass tap',
  },
  {
    title: 'Front Garden Full Coverage',
    category: 'Residential',
    description: 'Multi-head sprinkler layout for a sloped front garden. Sprinklers positioned for full overlap coverage from the beds down to the street.',
    image: '/projects/lawn-sprinklers-street.jpg',
    alt: 'Full front garden sprinkler coverage down to street',
  },
  {
    title: 'Technician Wiring Valve Manifold',
    category: 'Installation',
    description: 'Trymore on site wiring the solenoid valve manifold alongside the pump. Every connection made by hand. No shortcuts, no guesswork.',
    image: '/projects/technician-wiring-wide.jpg',
    alt: 'Technician wiring solenoid valve manifold with pump nearby',
  },
  {
    title: 'Rain Bird ESP-RZXe Controller',
    category: 'Smart Controls',
    description: 'Rain Bird ESP-RZXe smart controller wall-mounted and programmed. Wi-Fi ready, multi-zone scheduling, seasonal adjustment. Set once, runs automatically.',
    image: '/projects/esp-rzxe-wall.jpg',
    alt: 'Rain Bird ESP-RZXe irrigation controller mounted on wall',
  },
  {
    title: 'Controller & Manifold: Completed',
    category: 'Installation',
    description: 'Finished installation: Rain Bird controller box mounted above a multi-zone valve manifold, wired and conduit-run. Clean, weather-protected, ready to run.',
    image: '/projects/completed-controller-install.jpg',
    alt: 'Completed Rain Bird controller and solenoid valve manifold installation',
  },
  {
    title: 'RC2 Controller: Zone Wiring',
    category: 'Smart Controls',
    description: 'RC2 smart controller open showing zone terminal wiring. Each zone independently connected. The heart of a fully automated multi-zone system.',
    image: '/projects/rc2-controller-open.jpg',
    alt: 'RC2 irrigation controller open showing zone wiring and pipe connections',
  },
  {
    title: 'Full System Install in Progress',
    category: 'Installation',
    description: 'Mid-installation view showing the pump, valve manifold, and controller all being set up together. Everything planned, everything in the right place.',
    image: '/projects/pump-manifold-install.jpg',
    alt: 'Pump, valve manifold and controller during full system installation',
  },
]

const categories = ['All', 'Residential', 'Pump Systems', 'Smart Controls', 'Installation']

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
            Every photo is a completed TNM installation. Cape Town homes and properties, properly watered.
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
              <div className="h-56 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
                  Cape Town
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#2A334D' }}>{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Want to see more or discuss your project?</p>
          <a href="#contact" className="btn-primary">Get a Free Quote</a>
        </div>
      </div>
    </section>
  )
}
