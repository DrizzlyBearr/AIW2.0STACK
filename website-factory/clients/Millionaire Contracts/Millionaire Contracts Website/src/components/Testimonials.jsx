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
    quote: 'Working with Millionaire Contracts on our private equity outreach was a decision that paid off immediately. Their closing team drove a 65% meeting success rate across targeted investor accounts.',
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
      </div>
    </section>
  )
}
