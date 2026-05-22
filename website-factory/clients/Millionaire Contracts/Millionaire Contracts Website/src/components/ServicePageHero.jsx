const HERO_BG = 'https://assets.cdn.filesafe.space/53xa8GNUC7iIG663uQgX/media/64dda8e589a07557f7f46450.jpeg'

export default function ServicePageHero({ title, subtitle }) {
  return (
    <div className="relative bg-mc-dark py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})`, opacity: 0.15 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mc-dark/40 to-mc-dark/80" />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <span className="section-label mb-3 block">Our Services</span>
        <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight">{title}</h1>
        {subtitle && <p className="font-body text-gray-400 text-lg mt-4 max-w-xl">{subtitle}</p>}
      </div>
    </div>
  )
}
