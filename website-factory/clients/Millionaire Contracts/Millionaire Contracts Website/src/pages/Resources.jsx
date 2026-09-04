import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'
import { articles as contentArticles } from '../lib/content'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Sales Resources and Guides',
  description: 'Guides on outsourced sales, appointment setting, pricing, and building a B2B sales process. Written for businesses deciding how to grow their pipeline.',
  url: 'https://www.millionairecontracts.com/resources',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://www.millionairecontracts.com' },
}

const articles = [
  {
    to: '/what-is-sales-outsourcing',
    category: 'Sales Fundamentals',
    title: 'What Is Sales Outsourcing and Is It Right for Your Business?',
    desc: 'The definition, the four engagement models, who it works for, who it does not, and a framework for deciding.',
    featured: true,
  },
  { to: '/what-is-an-sdr', category: 'Sales Fundamentals', title: 'What Is an SDR? The Sales Development Rep Role Explained', desc: 'What an SDR does day to day, how the role differs from a closer, where it fits the pipeline, what it costs, and when to hire versus outsource.' },
  { to: '/sdr-vs-bdr', category: 'Sales Fundamentals', title: 'SDR vs BDR: What Is the Difference and Which Do You Need?', desc: 'The real difference between inbound-focused SDRs and outbound-focused BDRs, how they fit together, and how to decide which function you need.' },
  { to: '/how-much-does-an-sdr-cost', category: 'Pricing', title: 'How Much Does an SDR Cost? Salary, OTE, and the Fully Loaded Number', desc: 'Base salary, OTE, and the fully loaded annual cost of an in-house SDR, plus ramp, the cost of a bad hire, and how it compares to outsourcing.' },
  { to: '/b2b-appointment-setting-services', category: "Buyer's Guide", title: 'B2B Appointment Setting Services: How They Work and What to Expect', desc: 'What appointment setting services actually do, what a good one includes, the results to expect, pricing models, and how to choose a provider.' },
  { to: '/fractional-sales-team', category: 'Build vs Buy', title: 'Fractional Sales Team: What It Is and When It Makes Sense', desc: 'What a fractional sales team is, how it differs from a full-time hire and a fractional VP of Sales, what it includes, and the cost logic.' },
  { to: '/how-to-write-a-cold-email', category: 'Sales Strategy', title: 'How to Write a Cold Email That Gets Replies', desc: 'A practical framework for B2B cold email that books meetings: targeting, subject lines, the opener, one clear ask, and follow-up.' },
  { to: '/lead-qualification-framework', category: 'Sales Strategy', title: 'Lead Qualification: A Practical Framework That Actually Works', desc: 'Why qualification is the highest-leverage step, how BANT, MEDDIC, and CHAMP compare, and a simple score that puts effort on winnable deals.' },
  { to: '/how-to-qualify-leads', category: 'Sales Strategy', title: 'How to Qualify Leads: A Step by Step Process', desc: 'The questions to ask, the signals to read, how to disqualify fast, and when to advance a lead.' },
  { to: '/how-to-build-a-sales-cadence', category: 'Sales Strategy', title: 'How to Build an Outbound Sales Cadence', desc: 'Build a consistent, multi-channel outbound cadence: channels, timing, touch count, message variation, when to stop, and how to measure it.' },
  { to: '/how-to-write-sales-scripts', category: 'Sales Strategy', title: 'How to Write Sales Scripts That Convert', desc: 'Why a script is a structure not a recital, and how to build openers, discovery, objection handling, and closes for your market.' },
  { to: '/how-to-set-up-a-sales-pipeline', category: 'Sales Strategy', title: 'How to Set Up a Sales Pipeline in Your CRM', desc: 'Define pipeline stages around the buyer decision, set entry and exit criteria, enforce a next-step rule, and keep the pipeline clean.' },
  { to: '/website-that-qualifies-leads', category: 'Sales Strategy', title: 'How to Make Your Website Qualify Leads Before They Reach You', desc: 'Why a name-and-message form wastes sales time, and how to design an enquiry flow that pre-qualifies leads before they reach a rep.' },
  { to: '/what-is-a-sales-pipeline', category: 'Sales Fundamentals', title: 'What Is a Sales Pipeline? Stages Explained', desc: 'A sales pipeline defined: the typical stages, how it differs from a forecast, what a healthy pipeline looks like, and the common mistakes.' },
  { to: '/sales-as-a-service', category: 'Sales Fundamentals', title: 'Sales as a Service: The Model Explained', desc: 'The subscription sales model explained: how it differs from an agency or a staffing firm, what is included, who it fits, and the pros and cons.' },
  { to: '/cold-calling-services', category: "Buyer's Guide", title: 'Cold Calling Services: Do They Still Work?', desc: 'An honest look at where the phone still works, where it does not, and what separates a service worth paying for from a room full of dials.' },
  { to: '/lead-generation-vs-appointment-setting', category: 'Sales Fundamentals', title: 'Lead Generation vs Appointment Setting vs Sales Outsourcing', desc: 'The real difference between the three, where the handoff between a lead-gen vendor and your closers breaks, and how to choose.' },
  { to: '/commission-only-sales-reps', category: 'Build vs Buy', title: 'Commission-Only Sales Reps: Do They Actually Work?', desc: 'An honest look at when commission-only reps work, why they usually fail in complex B2B, and the alternatives that keep cost alignment.' },
  {
    to: '/why-your-pipeline-empties-when-you-get-busy',
    category: 'Symptom',
    title: 'Why Your Pipeline Empties Every Time You Get Busy',
    desc: 'The feast or famine cycle is structural, not a discipline problem. Why it happens and the fix that ends it.',
  },
  {
    to: '/founder-led-sales-stops-working',
    category: 'Symptom',
    title: 'Founder-Led Sales: Why It Stops Working',
    desc: 'The thing that built the business becomes the thing that caps it. How to move past it when every deal still runs through you.',
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
  {
    to: '/inconsistent-revenue',
    category: 'Symptom',
    title: 'Why Your Revenue Is Inconsistent and What to Do About It',
    desc: 'Unpredictable revenue is not random. Here is the pattern, why the usual fixes miss it, and what actually stabilizes revenue.',
  },
  {
    to: '/sales-stall-without-you',
    category: 'Symptom',
    title: 'Why Sales Stall Every Time You Step Back from Them',
    desc: 'When the founder is the sales process, any absence stops the pipeline. Why that dependency forms and how to break it.',
  },
  {
    to: '/outsourced-sales-for-saas',
    category: 'Vertical',
    title: 'Outsourced Sales for SaaS and Technology Companies',
    desc: 'How Millionaire Contracts builds pipeline for software and technology businesses, from outbound to enterprise closing.',
  },
  {
    to: '/outsourced-sales-for-professional-services',
    category: 'Vertical',
    title: 'Outsourced Sales for Professional Services Firms',
    desc: 'How Millionaire Contracts builds a proactive pipeline for consulting, legal, staffing, and corporate services firms beyond referrals.',
  },
  {
    to: '/outsourced-sales-for-private-equity',
    category: 'Vertical',
    title: 'Outsourced Sales and Deal Origination for Private Equity and M&A',
    desc: 'How Millionaire Contracts builds proprietary deal flow for private equity firms and acquirers by reaching business owners directly, beyond brokered auctions.',
  },
  {
    to: '/outsourced-sales-for-marketing-agencies',
    category: 'Vertical',
    title: 'Outsourced Sales for Marketing and Growth Agencies',
    desc: 'How Millionaire Contracts builds the new business pipeline for marketing and growth agencies beyond founder-led sales and inbound luck.',
  },
  {
    to: '/outsourced-sales-for-financial-services',
    category: 'Vertical',
    title: 'Outsourced Sales for Financial Services and Fintech Companies',
    desc: 'How Millionaire Contracts builds trust-led sales pipelines for financial services and fintech companies where credibility and compliance matter as much as conversion.',
  },
  {
    to: '/outsourced-sales-for-healthcare',
    category: 'Vertical',
    title: 'Outsourced Sales for Healthcare and Health Services Businesses',
    desc: 'How Millionaire Contracts builds proactive patient acquisition and sales systems for healthcare businesses that have outgrown referrals and passive word of mouth.',
  },
]

// Data-driven articles (content-as-data layer) shown alongside the hand-built guides.
const dataArticles = contentArticles.map((a) => ({
  to: `/${a.slug}`,
  category: a.category || 'Guide',
  title: a.title,
  desc: a.description,
}))

const allArticles = [...articles, ...dataArticles]

export default function Resources() {
  const [featured, ...rest] = (() => {
    const f = allArticles.find((a) => a.featured)
    const others = allArticles.filter((a) => a !== f)
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
