export const testimonials = [
  {
    quote: 'Millionaire Contracts transformed our entire sales operation. Their strategic approach gave us the structure and pipeline discipline we were missing. The results have been outstanding.',
    name: 'Dallen S.',
    company: 'Eads Bridge Holdings',
    initials: 'DS',
  },
  {
    quote: 'The appointment setting service exceeded every expectation. They delivered qualified leads consistently and their team integrated seamlessly with ours from day one.',
    name: 'Alex M.',
    company: 'MTN Zambia',
    initials: 'AM',
  },
  {
    quote: 'Working with Millionaire Contracts on our private equity outreach was a decision that paid off immediately. Their closing team drove a 66% meeting success rate across targeted investor accounts.',
    name: 'Jamil V.',
    company: 'BaseHome Capital',
    initials: 'JV',
  },
  {
    quote: 'From strategy to execution, the Millionaire Contracts team delivered a level of sales intelligence we had not experienced before. They operate like an extension of our business.',
    name: 'Haroon I.',
    company: 'Sigma Health Technologies',
    initials: 'HI',
  },
]

// Katleho's Upwork record, as the profile showed it on 24 October 2026. Check
// the profile before changing a number: these are claims a buyer can verify.
// The quotes are the clients' own words, cut only at a full stop where
// Upwork's page cut them.
export const UPWORK_URL = 'https://www.upwork.com/freelancers/~01131450594cc44af0'
export const upworkStats = ['Top Rated on Upwork', '100% Job Success', '1,800+ hours over 14 jobs']
export const upworkReviews = [
  {
    quote: "I had a great experience working with Katleho on our B2B lead generation and outbound sales. He exceeded expectations by being incredibly detail-oriented and consistently accountable for the project's outcomes.",
    job: 'B2B outbound lead generation and SDR, casting marketplace',
  },
  {
    quote: 'Katleho and his team did a great job pushing my product to market. They were very friendly, professional and I always looked forward to talking to them.',
    job: 'Cold calling for an orthodontic marketing firm',
  },
  {
    quote: 'Kat was great! We loved working with him and certainly recommend him!',
    job: 'Podcast host and discovery call setter',
  },
]

export default function Testimonials({ bg = 'bg-white', heading = 'What our clients say', label = 'Client Feedback' }) {
  return (
    <section className={`${bg} py-20 px-6`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-label mb-3 block">{label}</span>
          <h2 className="font-headline text-4xl font-black text-mc-teal leading-tight">
            {heading}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-gray-200 rounded-xl p-7 flex flex-col gap-4 hover:border-mc-gold/40 hover:shadow-md transition-all">
              <div className="text-mc-gold text-3xl font-headline font-black leading-none">"</div>
              <p className="font-body text-gray-700 text-sm leading-relaxed flex-grow">{t.quote}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-mc-teal flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-body font-semibold text-mc-teal text-sm">{t.name}</div>
                  <div className="font-body text-gray-400 text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified on Upwork: the same work, rated where a buyer can check it. */}
        <div className="mt-14 border-t border-gray-100 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
            {upworkStats.map((stat) => (
              <span key={stat} className="font-body font-semibold text-mc-teal text-sm">{stat}</span>
            ))}
            <a href={UPWORK_URL} target="_blank" rel="me noopener" className="font-body text-sm text-mc-teal underline hover:text-mc-gold">
              See every review on Upwork
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upworkReviews.map((r) => (
              <figure key={r.job} className="border border-gray-200 rounded-xl p-6 flex flex-col gap-3">
                <div className="text-mc-gold text-sm font-semibold" aria-label="Rated 5.0 out of 5 on Upwork">★★★★★ 5.0 on Upwork</div>
                <blockquote className="font-body text-gray-700 text-sm leading-relaxed flex-grow">"{r.quote}"</blockquote>
                <figcaption className="font-body text-gray-400 text-xs">Upwork client, {r.job}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
