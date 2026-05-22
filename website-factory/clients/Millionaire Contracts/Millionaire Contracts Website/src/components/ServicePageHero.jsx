const HERO_BG = 'https://assets.cdn.filesafe.space/53xa8GNUC7iIG663uQgX/media/64dda8e589a07557f7f46450.jpeg'

export default function ServicePageHero({ title }) {
  return (
    <div className="relative bg-mc-teal py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})`, opacity: 0.3 }}
      />
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl font-headline font-bold text-white">{title}</h2>
      </div>
    </div>
  )
}
