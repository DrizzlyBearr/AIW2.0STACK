import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEOMeta from '../../components/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Your Revenue Is Inconsistent and What to Do About It',
  description: 'Unpredictable revenue is not random and it is not seasonal. It is caused by uneven sales input. Here is the pattern, why the usual fixes miss it, and what actually stabilizes revenue.',
  publisher: { '@type': 'Organization', name: 'Millionaire Contracts', url: 'https://millionairecontracts.com' },
  mainEntityOfPage: 'https://millionairecontracts.com/inconsistent-revenue',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my business revenue so inconsistent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inconsistent revenue is almost always caused by inconsistent sales input. When outreach runs in bursts, results arrive in bursts. When outreach stops, the pipeline empties and revenue follows weeks later. The gap between cause and effect makes it look like a market or seasonal problem when it is actually a sales execution problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stabilize revenue in my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Revenue stabilizes when sales input becomes consistent. That means outreach running on a fixed schedule regardless of how busy the rest of the business is, a pipeline fed at the same rate every week, and a sales function that does not pause when delivery peaks. Budgeting or pricing changes do not fix inconsistent revenue because they do not address the input problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is inconsistent revenue a sign I need a sales team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often, yes. If you have a working offer and recurring clients but cannot keep the pipeline full through busy periods, the issue is sales capacity and continuity, not the offer itself. A dedicated sales function, whether in-house or outsourced, separates pipeline generation from delivery so revenue input does not swing with your workload.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between inconsistent revenue and seasonal revenue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seasonal revenue follows a predictable external pattern tied to the calendar or your market. Inconsistent revenue is unpredictable and does not repeat at the same time each year. If you cannot tell in advance when the slow months will come, the cause is internal, not seasonal. The fix is different: seasonal revenue requires capacity planning, while inconsistent revenue requires consistent sales input.',
      },
    },
  ],
}

const causes = [
  {
    number: '01',
    heading: 'Outreach runs in bursts',
    body: 'Sales activity spikes when the pipeline looks thin, then stops when things pick up. Because there is a lag of four to eight weeks between outreach and closed revenue, the bursts create waves. Big months follow burst periods; thin months follow quiet ones.',
  },
  {
    number: '02',
    heading: 'Revenue is concentrated in a few clients or deals',
    body: 'When two or three clients represent the bulk of revenue, a single churn event or a delayed renewal creates a visible drop. The business looks like it has an inconsistency problem when it actually has a concentration problem.',
  },
  {
    number: '03',
    heading: 'The timing of deals is unpredictable',
    body: 'Without a consistent pipeline, there is no way to forecast when deals will close. Some months two land. Some months none do. The deals are the same size but the pattern feels random because the input that generates them is random.',
  },
  {
    number: '04',
    heading: 'Sales stops when delivery gets heavy',
    body: 'The same people selling the work are delivering it. When delivery load rises, outreach stops. Revenue is healthy for a quarter, then falls when the delivered work ends and nothing has been built behind it.',
  },
]

export default function InconsistentRevenue() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="Why Your Revenue Is Inconsistent and What to Do About It"
        description="Unpredictable revenue is not random and it is not seasonal. It is caused by uneven sales input. Here is the pattern, why the usual fixes miss it, and what actually stabilizes revenue."
        path="/inconsistent-revenue"
        type="article"
        schema={[schema, faqSchema]}
      />
      <Navbar />

      {/* Hero */}
      <div className="bg-mc-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Revenue Predictability</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Why your revenue is inconsistent<br />
              <span className="text-mc-gold">and what to do about it</span>
            </h1>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl">
              Good months and bad months with no reliable way to tell which is coming. It feels like the market, the season, or bad luck. It is almost never any of those things. The cause is closer and more fixable than that.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            Inconsistent revenue feels random. That is what makes it so frustrating. You cannot plan around something you cannot predict, and you cannot fix something you cannot explain. So it becomes the ambient condition of the business: some months are great, some are not, and you never quite know why.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base mb-5">
            The explanations business owners reach for are usually external. The economy. The time of year. Clients being slower than usual. Sometimes those factors are real, but they are rarely the root cause of revenue that swings widely and unpredictably.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base">
            In most cases, inconsistent revenue is a direct output of inconsistent sales input. The fix is not a pricing change or a new offer. It is making the input consistent.
          </p>
        </div>
      </section>

      {/* The causes */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-10">The four patterns behind the swings</h2>
          <div className="space-y-10">
            {causes.map((c) => (
              <div key={c.number} className="border-l-4 border-mc-gold pl-8">
                <div className="font-headline text-5xl font-black text-mc-gold/20 leading-none mb-2">{c.number}</div>
                <h3 className="font-headline text-2xl font-black text-mc-teal mb-4">{c.heading}</h3>
                <p className="font-body text-gray-700 leading-relaxed text-base">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why common fixes miss */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>What does not work</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Why the usual responses miss the point</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-8">
            Because revenue swings feel like a revenue problem, the typical responses address revenue directly. None of them fix the underlying input problem.
          </p>
          <div className="space-y-6">
            {[
              { heading: 'Raising prices', body: 'Higher prices increase the value of each deal but do not change how many deals arrive or when. If input is inconsistent, the swings are now just bigger.' },
              { heading: 'Chasing bigger clients', body: 'Larger deals increase concentration risk. If one big client churns, the revenue drop is more severe, not less. The input problem remains untouched.' },
              { heading: 'Working the referral network harder', body: 'Referrals are unpredictable by nature. Running a harder referral push might produce a good quarter, but it cannot be sustained or scheduled because you cannot control its timing.' },
              { heading: 'Building a retainer model', body: 'Retainers stabilize revenue from existing clients. They do not solve the problem of winning new clients consistently, which is where the swings come from.' },
            ].map((c) => (
              <div key={c.heading} className="flex gap-4">
                <div className="flex-shrink-0 w-1.5 bg-mc-gold rounded-full" />
                <div>
                  <h3 className="font-headline font-bold text-mc-teal mb-1">{c.heading}</h3>
                  <p className="font-body text-gray-700 leading-relaxed text-sm">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The actual fix */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>The actual fix</span>
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">Consistent output requires consistent input</h2>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            Revenue is a lagging indicator of sales activity. What you close this month reflects what was worked four to eight weeks ago. If activity was inconsistent then, revenue is inconsistent now. If you want revenue to smooth out, the thing to smooth out is sales activity.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-5">
            That means outreach happening on a fixed schedule every week. It means a pipeline being fed at the same rate regardless of whether delivery is light or full. It means someone whose job is pipeline generation and who does not stop doing it when the rest of the business gets busy.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            When sales input runs consistently, revenue stops swinging. Not immediately, because the lag is real. But within a quarter of consistent input, the pattern starts to hold, and within two you can begin to forecast with confidence.
          </p>
        </div>
      </section>

      {/* What changes */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black text-mc-teal mb-6">What changes when input is consistent</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { heading: 'A predictable floor', body: 'When outreach runs every week, there is a baseline of pipeline activity that prevents the catastrophic empty-month scenario.' },
              { heading: 'Revenue you can plan against', body: 'With consistent input, you can forecast with enough confidence to make hiring, capacity, and investment decisions without guessing.' },
              { heading: 'Reduced concentration risk', body: 'A steady stream of new clients means no single account holds a disproportionate share of revenue. Churn hurts less.' },
            ].map((c) => (
              <div key={c.heading} className="bg-mc-dark rounded-xl p-6 border border-white/10">
                <div className="w-1.5 h-8 bg-mc-gold rounded-full mb-4" />
                <h3 className="font-headline font-bold text-white mb-2">{c.heading}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-xl font-black text-mc-teal mb-6">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/why-your-pipeline-empties-when-you-get-busy', label: 'Why Your Pipeline Empties Every Time You Get Busy', desc: 'The structural cause of the feast or famine cycle.' },
              { to: '/five-signs-you-need-outsourced-sales', label: '5 Signs Your Business Needs an Outsourced Sales Team', desc: 'The patterns that point to a sales execution gap.' },
              { to: '/in-house-vs-outsourced-sales', label: 'In-House Sales Team vs Outsourced Sales: The Real Cost', desc: 'What each option actually costs when fully loaded.' },
              { to: '/how-to-build-a-b2b-sales-process', label: 'How to Build a B2B Sales Process from Scratch', desc: 'The system that makes pipeline repeatable.' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block bg-white rounded-xl p-5 border border-gray-100 hover:border-mc-gold/40 transition-colors group"
              >
                <p className="font-headline font-bold text-mc-teal text-sm mb-1 group-hover:text-mc-gold transition-colors">{link.label}</p>
                <p className="font-body text-gray-500 text-xs">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-mc-teal mb-10">Common questions</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((q) => (
              <div key={q.name} className="border-b border-gray-100 pb-6">
                <h3 className="font-headline font-bold text-mc-teal mb-3">{q.name}</h3>
                <p className="font-body text-gray-700 leading-relaxed text-sm">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mc-gold py-16 px-6 text-center">
        <h2 className="font-headline text-4xl font-black text-white mb-4 leading-tight">
          Ready to make revenue predictable?
        </h2>
        <p className="font-body text-amber-100 text-lg mb-8 max-w-lg mx-auto">
          One call is enough to map what consistent sales input would look like for your business and what it would take to get there.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/calender" className="inline-block bg-white text-mc-teal font-headline font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Book a Free Strategy Call
          </Link>
          <Link to="/how-it-works" className="inline-block border-2 border-white text-white font-headline font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
            See How It Works
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
