import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Sales Resources and Guides',
  description: 'Guides on outsourced sales, appointment setting, pricing, and building a B2B sales process. Written for businesses deciding how to grow their pipeline.',
  url: 'https://millionairecontracts.com/resources',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
}

const articles = [
  {
    to: '/what-is-sales-outsourcing',
    category: 'Sales Fundamentals',
    title: 'What Is Sales Outsourcing and Is It Right for Your Business?',
    desc: 'The definition, the four engagement models, who it works for, who it does not, and a framework for deciding.',
    featured: true,
  },
  {
    to: '/five-signs-you-need-outsourced-sales',
    category: 'Diagnostic',
    title: '5 Signs Your Business Needs an Outsourced Sales Team',
    desc: 'The patterns that show up in businesses with a working offer that are not growing at the pace they should be.',
  },
  {
    to: '/in-house-vs-outsourced-sales',
    category: 'Build vs Buy',
    title: 'In-House Sales Team vs Outsourced Sales: The Real Cost',
    desc: 'What a fully loaded in-house sales hire actually costs, side by side with the outsourced alternative.',
  },
  {
    to: '/what-does-outsourced-sales-cost',
    category: 'Pricing',
    title: 'What Does Outsourced Sales Actually Cost?',
    desc: 'Every pricing model explained, the factors that drive the number, and how to think about return.',
  },
  {
    to: '/cost-of-building-a-sales-team',
    category: 'Free Tool',
    title: 'In-House Sales Team Cost Calculator',
    desc: 'Set your headcount and salary and see the fully loaded cost of building in-house, plus what you spend during ramp before the first deal closes.',
  },
  {
    to: '/how-to-choose-an-appointment-setting-company',
    category: "Buyer's Guide",
    title: 'How to Choose an Appointment Setting Company',
    desc: '7 questions that separate the agencies with real qualification discipline from the ones running volume plays.',
  },
  {
    to: '/why-sales-outsourcing-partnerships-fail',
    category: 'Buyer Intelligence',
    title: 'Why Most Sales Outsourcing Partnerships Fail',
    desc: 'Five predictable, avoidable failure points and what separates partnerships that deliver from ones that disappoint.',
  },
  {
    to: '/how-to-build-a-b2b-sales-process',
    category: 'Sales Strategy',
    title: 'How to Build a B2B Sales Process from Scratch',
    desc: 'Six steps that turn individual sales effort into a system that produces consistent, predictable pipeline.',
  },
]

export default function Resources() {
  const [featured, ...rest] = (() => {
    const f = articles.find((a) => a.featured)
    const others = articles.filter((a) => a !== f)
    return [f, ...others]
  })()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Sales Resources and Guides"
        description="Guides on outsourced sales, appointment setting, pricing, and building a B2B sales process. Written for businesses deciding how to grow their pipeline."
        path="/resources"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Resources</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Guides for businesses deciding<br />
              <span className="text-mc-gold">how to grow their pipeline</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Straight answers on outsourced sales, appointment setting, pricing, and building a sales process that works. No pitch. Just the information you need to make the decision well.
            </p>
          </div>
        </div>
      </div>

      {/* Featured article */}
      <section className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <Link
            to={featured.to}
            className="block bg-mc-dark rounded-2xl p-8 md:p-12 border border-white/10 hover:border-mc-gold/40 transition-colors group"
          >
            <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Start here</span>
            <span className="inline-block bg-mc-gold/10 border border-mc-gold/30 text-mc-gold text-xs font-bold rounded-full px-3 py-1 mb-4">{featured.category}</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-white leading-tight mb-4 group-hover:text-mc-gold transition-colors">
              {featured.title}
            </h2>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl mb-6">{featured.desc}</p>
            <span className="font-headline font-bold text-mc-gold inline-flex items-center gap-2">
              Read the guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* All articles grid */}
      <section className="pb-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-8">All guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="flex flex-col bg-white rounded-xl p-6 border border-gray-100 hover:border-mc-gold/40 hover:shadow-md transition-all group"
              >
                <span className="inline-block self-start bg-mc-teal/5 border border-mc-teal/10 text-mc-teal text-xs font-bold rounded-full px-3 py-1 mb-4">{a.category}</span>
                <h3 className="font-headline text-lg font-black text-mc-teal leading-snug mb-3 group-hover:text-mc-gold transition-colors">{a.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{a.desc}</p>
                <span className="font-headline font-bold text-mc-gold text-sm inline-flex items-center gap-2 mt-auto">
                  Read
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mc-gold py-16 px-6 text-center">
        <h2 className="font-headline text-4xl font-black text-white mb-4 leading-tight">
          Done reading? Let's talk specifics.
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to work out whether outsourced sales is the right fit for where your business is right now.
        </p>
        <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
          Book a Free Strategy Call
        </Link>
      </section>

      <Footer />
    </div>
  )
}
