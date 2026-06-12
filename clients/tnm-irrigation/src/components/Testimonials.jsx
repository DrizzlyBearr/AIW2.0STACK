import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sipho M.',
    role: 'Homeowner, Pretoria',
    stars: 5,
    text: 'T.N.M installed a full drip system for our garden. The team was professional, tidy, and finished on time. Our water bill dropped significantly within the first month. Very happy.',
  },
  {
    name: 'Nkosi T.',
    role: 'Property Manager, Johannesburg',
    stars: 5,
    text: 'We have used T.N.M for our office park irrigation for three years. Their service contract gives us peace of mind. Whenever there is a fault they are on site within 24 hours.',
  },
  {
    name: 'Thandi L.',
    role: 'Farm Owner, Mpumalanga',
    stars: 5,
    text: 'The team surveyed our land thoroughly before designing the system. The drip layout for our orchard is excellent. First season after installation was our best yield in years.',
  },
  {
    name: 'Johan V.',
    role: 'Sports Club Chair, Limpopo',
    stars: 5,
    text: 'Our football field had dry patches for years. T.N.M designed and installed a new underground system and the field has been perfect ever since. Highly recommend.',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-green-900 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Client Reviews</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-green-200 font-semibold">4.9/5</span>
            <span className="text-green-400 text-sm">based on client feedback</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
              <Quote className="w-8 h-8 text-green-400 mb-4 opacity-70" />
              <p className="text-white/80 text-sm leading-relaxed mb-5">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-green-300 text-xs">{r.role}</p>
                </div>
              </div>
              <div className="mt-3">
                <Stars count={r.stars} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
