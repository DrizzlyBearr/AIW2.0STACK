import { localGlossary } from '../content'

// The words people use when they search in their own language.
export default function LocalTerms() {
  return (
    <section id="in-your-language" className="py-20 bg-cream-deep">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="section-label mb-3">In your language</p>
          <h2 className="section-title mb-4">Isangoma, ngaka ya setšo, igqirha</h2>
          <p className="text-ink/70 leading-relaxed">
            Gogo Thudi consults in isiZulu, isiXhosa, English, Sesotho, Setswana and Sepedi. Whatever you call it at
            home, this is what she does.
          </p>
        </div>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {localGlossary.map((g) => (
            <a key={g.term} href={`/services/${g.page}`} className="card p-5 block group">
              <dt className="font-display text-2xl font-semibold text-night group-hover:text-clay">{g.term}</dt>
              <dd className="mt-1 text-sm text-ink/70">
                {g.meaning}
                <span className="block text-xs text-ink/50 mt-1">{g.lang}</span>
              </dd>
            </a>
          ))}
        </dl>
      </div>
    </section>
  )
}
