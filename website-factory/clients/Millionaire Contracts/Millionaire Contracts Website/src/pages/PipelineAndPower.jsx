import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

// Paste your GoHighLevel newsletter form ID here to make the signup live.
// Until then the page shows a clean email fallback so nothing looks broken.
const NEWSLETTER_FORM_ID = ''

const schema = {
  '@context': 'https://schema.org',
  '@type': 'NewsletterService',
  name: 'Pipeline & Power',
  provider: {
    '@type': 'Organization',
    name: 'Millionaire Contracts',
    url: 'https://millionairecontracts.com',
  },
  description:
    'Pipeline & Power is a fortnightly newsletter from Millionaire Contracts. Each issue takes one shift in global business, explains what it means for your revenue, and leaves you with one move to make.',
}

const whatYouGet = [
  {
    label: 'A signal',
    body: 'Something real moving in the world. A shift in trade, technology, money, or one of the industries quietly being built across Africa and beyond. The kind of thing most sales newsletters never mention.',
  },
  {
    label: 'What it means for you',
    body: 'We translate it into plain language. Here is how the shift reaches your buyer, and where it opens a door or closes one for your revenue.',
  },
  {
    label: 'One move',
    body: 'A single decision you can make this week, based on what the signal is telling you. Something you can actually act on, not just think about.',
  },
]

export default function PipelineAndPower() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Pipeline & Power"
        description="A fortnightly newsletter from Millionaire Contracts. We take one shift in global business, explain what it means for your revenue, and leave you with one move to make. Built for people thinking past the next quarter."
        path="/pipeline-and-power"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-mc-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Pipeline &amp; Power</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              See where business is going<br />
              <span className="text-mc-gold">before your competitors do</span>
            </h1>
            <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
              Pipeline &amp; Power is a fortnightly note from our team. We take one thing happening in the world right now, explain what it means for your revenue, and hand you one move worth making.
            </p>
            <p className="font-body text-gray-400 text-base leading-relaxed max-w-2xl">
              No noise. No filler. One signal, what it means, and what to do about it.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-3 block">What lands in your inbox</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              Three things, every issue
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <div key={item.label} className="bg-mc-dark rounded-xl p-8 border border-white/10">
                <span className="font-headline text-5xl font-black text-mc-gold/20 leading-none block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-headline text-xl font-black text-white mb-3">{item.label}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="bg-mc-dark py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="max-w-2xl mb-10">
            <span className="section-label mb-3 block">Why we write it</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-white leading-tight">
              The businesses that win read the shift early
            </h2>
          </div>
          <div className="max-w-3xl space-y-5">
            <p className="font-body text-gray-400 text-base md:text-lg leading-relaxed">
              The companies pulling ahead are not the ones reacting fastest. They are the ones who saw the change coming and built their sales operation around it before the market caught up.
            </p>
            <p className="font-body text-gray-400 text-base md:text-lg leading-relaxed">
              Africa is adding digital infrastructure, energy systems, and financial access at a pace most business media is not tracking. Fibre and data centres are landing. Solar is scaling. Payment systems are reaching people the old banks never could. New supply chains are forming, new buyers are appearing, and new doors are opening across manufacturing, fintech, energy, logistics, and more.
            </p>
            <p className="font-body text-gray-400 text-base md:text-lg leading-relaxed">
              Read it early and you will be in conversations your competitors will not know how to enter for years. That is what this newsletter is for.
            </p>
          </div>
        </div>
      </section>

      {/* Who it is for + Subscribe */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left, who it is for */}
          <div>
            <span className="section-label mb-3 block">Who it is for</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight mb-5">
              People building something bigger than this quarter
            </h2>
            <p className="font-body text-gray-600 text-base leading-relaxed mb-4">
              Founders and revenue leaders with ambitions past their current market. People who want to understand where the growth is, not just where it has been.
            </p>
            <p className="font-body text-gray-600 text-base leading-relaxed">
              If that sounds like you, you will get something out of every issue.
            </p>
          </div>

          {/* Right, subscribe */}
          <div className="bg-mc-dark rounded-xl border border-white/10 p-8">
            <h3 className="font-headline text-2xl font-black text-white mb-2">Get the next issue</h3>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
              Fortnightly. No spam. Unsubscribe any time.
            </p>

            {NEWSLETTER_FORM_ID ? (
              <>
                <iframe
                  src={`https://api.leadconnectorhq.com/widget/form/${NEWSLETTER_FORM_ID}`}
                  style={{ width: '100%', height: '420px', border: 'none' }}
                  id={NEWSLETTER_FORM_ID}
                  title="Subscribe to Pipeline and Power"
                  loading="lazy"
                />
                <script src="https://link.msgsndr.com/js/form_embed.js" async />
              </>
            ) : (
              <div className="border border-white/10 rounded-lg p-6 text-center">
                <p className="font-body text-gray-300 text-sm leading-relaxed mb-4">
                  To join the list, send us a note and we will add you to the next send.
                </p>
                <a
                  href="mailto:neo@millionairecontracts.com?subject=Subscribe%20to%20Pipeline%20and%20Power"
                  className="btn-primary text-sm"
                >
                  Send me the next issue
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust line */}
      <section className="bg-mc-teal/5 border-y border-mc-teal/10 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-gray-600 text-base leading-relaxed">
            Written by the team at Millionaire Contracts. We work inside businesses across Africa and beyond to build sales operations that perform under pressure. Pipeline &amp; Power is where we share what we are seeing.
          </p>
          <Link
            to="/about-us"
            className="font-headline font-bold text-mc-teal text-sm inline-flex items-center gap-2 mt-5 hover:text-mc-gold transition-colors"
          >
            Meet the team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
