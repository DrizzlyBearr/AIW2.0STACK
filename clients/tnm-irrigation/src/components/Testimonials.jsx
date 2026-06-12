import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Verified Client',
    role: 'Kandua Review',
    stars: 5,
    text: 'More than 10 years I use his support. Always perfect, reliable, honesty and hard working. With big pleasure I gave him 5 stars.',
  },
  {
    name: 'Verified Client',
    role: 'Kandua Review',
    stars: 5,
    text: 'He installed an irrigation system for me. He also does garden service at my house. I have used his services for about 3 years, and I am always happy with his work. He is very reliable and skilful. His work is value for money, and I have no negative comments about his work. His working ethics are very good, and I will definitely recommend him to others.',
  },
  {
    name: 'Verified Client',
    role: 'Kandua Review',
    stars: 5,
    text: 'He repaired my irrigation system. He is an exceptional service provider who is very good at his job. He figured out the broken parts on the system and he fixed them.',
  },
  {
    name: 'Verified Client',
    role: 'Kandua Review',
    stars: 5,
    text: 'He installed an irrigation system in my garden. He did a marvellous job, and I was satisfied with his work. He is very reliable and hardworking. His work is value for money, and it does not have any comebacks. It was a pleasure working with him, and I highly recommend him.',
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
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F4848 0%, #1A2035 100%)' }}>
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" style={{ backgroundColor: '#45BFBF' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20" style={{ backgroundColor: '#566280' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#6DD0D0' }}>Client Reviews</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map((i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            </div>
            <span className="font-semibold" style={{ color: '#6DD0D0' }}>5.0 / 5</span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Verified Kandua reviews &bull; 4 reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl p-6 border transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-60" style={{ color: '#45BFBF' }} />
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.75)' }}>{r.text}</p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ backgroundColor: '#45BFBF' }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-xs" style={{ color: '#6DD0D0' }}>{r.role}</p>
                </div>
              </div>
              <div className="mt-3"><Stars count={r.stars} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
