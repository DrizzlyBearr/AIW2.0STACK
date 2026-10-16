import { business } from '../content'

// TODO: rewrite with Gogo Thudi's own story once she has shared it.
// Ask her: when she received her calling, where she trained (ukuthwasa) and with whom,
// which ancestors she works with, and why she does this work.
export default function About() {
  return (
    <section id="about" className="py-24 bg-night text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-night-soft to-clay-dark flex items-center justify-center">
            <p className="text-cream/50 text-sm">Photo of Gogo Thudi at work</p>
          </div>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full border border-ochre/40" aria-hidden="true" />
        </div>

        <div>
          <p className="section-label !text-ochre-light mb-3">About Gogo Thudi</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-6">
            A calling she answered, and a gift she shares with everyone who comes to her.
          </h2>
          <div className="space-y-4 text-cream/75 leading-relaxed">
            <p>
              Gogo Thudi answered her calling to heal more than {business.yearsPractising.replace('+', '')} years ago.
              Since then she has guided people from every walk of life through loss, confusion, bad luck, and
              family troubles.
            </p>
            <p>
              Before this site, many of her clients found her as a spiritual medium on SA Psychics, where she built
              a reputation for readings that are accurate, honest, and kind. People come back to her, and they send
              their families.
            </p>
            <p>
              She works from her home practice in {business.area}, and she reads by phone for clients across South
              Africa and beyond.
            </p>
          </div>
          <blockquote className="mt-8 pl-5 border-l-2 border-ochre font-display italic text-2xl text-ochre-light">
            "I do not tell people what they want to hear. I tell them what their ancestors are saying."
          </blockquote>
          <p className="text-xs text-cream/40 mt-2">Placeholder quote. Replace with her own words.</p>
        </div>
      </div>
    </section>
  )
}
