import { MapPin, Video } from 'lucide-react'
import { business, areasServed } from '../content'

export default function AreasServed() {
  return (
    <section id="areas" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div>
          <p className="section-label mb-3">Where she works</p>
          <h2 className="section-title mb-5">A traditional healer in Pretoria North, and by video anywhere</h2>
          <p className="text-ink/70 leading-relaxed">
            Gogo Thudi sees clients at her practice at {business.address}. Her practice is close to the northern suburbs
            of Tshwane listed here. Anyone further away can book a virtual consultation by video call for{' '}
            {business.fees.virtual}, from anywhere in South Africa or abroad.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card p-6">
            <MapPin className="w-6 h-6 text-clay mb-3" />
            <h3 className="text-xl font-semibold text-night mb-3">In person, {business.fees.inPerson}</h3>
            <ul className="flex flex-wrap gap-2">
              {areasServed.map((a) => (
                <li key={a} className="rounded-full bg-cream-deep px-3 py-1 text-xs text-ink/70">{a}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <Video className="w-6 h-6 text-clay mb-3" />
            <h3 className="text-xl font-semibold text-night mb-3">Virtual, {business.fees.virtual}</h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              Wherever you are, Johannesburg, Durban, Cape Town, Polokwane or overseas, readings, mediumship, dream
              interpretation and guidance all work by video call.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
