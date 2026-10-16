// All site copy and business details live here so they can be edited in one place.
// Sources (October 2026):
//   - Gogo Online verified profile: gogoonline.co.za
//   - SA Psychics profile: sa-psychics.com/GetBusiness/THUDI (291 reviews, Premier Advisor)
//   - Her Facebook page and Instagram (number, email, address, bio)
// Reviews are copied word for word from SA Psychics. Emojis removed and surnames shortened
// to an initial. Get Gogo Thudi's permission before launch (see README).

export const business = {
  name: 'Gogo Thudi',
  tagline: 'Traditional Healer, Medium and Prophet',
  motto: 'Walking in my ancestors’ footsteps',
  titles: ['Ngaka', 'Sangoma', 'Inyanga', 'Prophet', 'Medium'],
  area: 'Pretoria North',
  region: 'Tshwane, Gauteng',
  address: '1000 Rama City, Pretoria North',
  whatsapp: '27826844789',
  phoneDisplay: '082 684 4789',
  phoneHref: 'tel:+27826844789',
  email: 'mathudim@yahoo.com',
  hours: [
    { days: 'Monday to Wednesday', time: '08:00 to 19:00' },
    { days: 'Thursday and Friday', time: '08:00 to 20:00' },
    { days: 'Saturday', time: '08:00 to 19:00' },
    { days: 'Sunday', time: 'Closed' },
  ],
  yearsPractising: '16',
  fees: {
    inPerson: 'R400',
    virtual: 'R450',
  },
  languages: ['isiZulu', 'isiXhosa', 'English', 'Sesotho', 'Setswana', 'Sepedi'],
  tools: ['Bones', 'Water', 'The Holy Bible', 'Psychic awareness'],
  gogoOnlineUrl: 'https://gogoonline.co.za/healerprofile?id=6a18bec0057773e14bf1258e',
  saPsychicsUrl: 'https://www.sa-psychics.com/GetBusiness/THUDI',
  rating: {
    count: '291',
    source: 'SA Psychics',
    badges: ['Premier Advisor', 'Top Rated'],
  },
  // Her own words, from her Gogo Online and SA Psychics profiles
  bio: 'I empower and teach those who are seeking spiritual guidance and need to know their purpose. I cleanse and help heal past trauma.',
  story:
    'A decade ago, I chose to enhance my innate gift, delving into the realms of bone reading, water healing, counseling, and spiritual guidance. This spiritual calling redirected my path, leading me away from a conventional educational profession to embrace my soul mission.',
  session:
    'The depth of my commitment to this sacred gift is reflected in every session, where I channel ancestral wisdom and spiritual insights to guide you on your unique journey.',
  quote: 'My destiny is to teach and guide others to their divinity, and to align them to their highest self.',
  invitation: 'Let’s explore the sacred pathways together and unveil the transformative possibilities that await you.',
}

// Her public accounts. "confirmed" accounts carry her bio, number, or a link to her profiles.
export const socials = [
  { platform: 'Facebook', label: 'Facebook page', handle: 'gogothudi', url: 'https://www.facebook.com/gogothudi/' },
  { platform: 'Instagram', label: 'Instagram', handle: '@gogothudi', url: 'https://www.instagram.com/gogothudi/' },
  { platform: 'TikTok', label: 'TikTok', handle: '@gogothudi', url: 'https://www.tiktok.com/@gogothudi' },
  { platform: 'Facebook', label: 'Facebook profile', handle: 'mathudi.monama', url: 'https://www.facebook.com/mathudi.monama/' },
  // TODO: private account with no link to her other profiles. Confirm with her before launch.
  { platform: 'Instagram', label: 'Instagram (second account)', handle: '@thudillicious', url: 'https://www.instagram.com/thudillicious/' },
]

export const services = [
  {
    key: 'divination',
    title: 'Divination and Bone Reading',
    summary: 'Gogo Thudi throws the bones to see what is happening in your life, what is blocking you, and what your ancestors want you to know.',
    detail: 'In person or virtual',
  },
  {
    key: 'ancestors',
    title: 'Mediumship and Ancestral Guidance',
    summary: 'Messages from your ancestors and from loved ones who have passed on. For answers, for closure, and for direction.',
    detail: 'In person or virtual',
  },
  {
    key: 'prophecy',
    title: 'Prophecy and Spiritual Guidance',
    summary: 'As a prophet, she works with the Bible and the ancestors together to bring you clear spiritual direction.',
    detail: 'In person or virtual',
  },
  {
    key: 'water',
    title: 'Water Healing',
    summary: 'Healing with water to cleanse the spirit, calm the mind, and restore balance when you feel drained or unsettled.',
    detail: 'In person',
  },
  {
    key: 'cleansing',
    title: 'Cleansing Rituals',
    summary: 'For when everything feels heavy and nothing goes right. Cleansing to clear what has attached itself to you, your home, or your work.',
    detail: 'In person',
  },
  {
    key: 'trauma',
    title: 'Healing Past Trauma',
    summary: 'Spiritual healing for old wounds that still follow you, so you can put them down and move forward lighter.',
    detail: 'In person or virtual',
  },
  {
    key: 'dreams',
    title: 'Dream Interpretation',
    summary: 'Dreams that repeat, dreams that frighten you, dreams that feel like a message. Find out what they mean.',
    detail: 'In person or virtual',
  },
  {
    key: 'love',
    title: 'Love and Relationships',
    summary: 'Honest guidance on your relationship, your marriage, an ex you cannot let go of, or your family.',
    detail: 'In person or virtual',
  },
  {
    key: 'career',
    title: 'Money and Career',
    summary: 'Guidance on work, business, and money decisions, and on what may be blocking your progress.',
    detail: 'In person or virtual',
  },
  {
    key: 'coaching',
    title: 'Life Coaching and Counselling',
    summary: 'A former educator, Gogo Thudi listens without judgement and helps you make sense of where you are and what to do next.',
    detail: 'In person or virtual',
  },
  {
    key: 'medicine',
    title: 'Traditional Medicine',
    summary: 'As an inyanga, she prepares traditional remedies for your situation, as guided by the ancestors during your consultation.',
    detail: 'In person',
  },
  {
    key: 'purpose',
    title: 'Purpose and Spiritual Growth',
    summary: 'Teaching and mentoring for those who feel a calling or want to understand their purpose and grow spiritually.',
    detail: 'In person or virtual',
  },
]

export const steps = [
  {
    title: 'Send a message',
    body: 'WhatsApp or call 082 684 4789. Tell Gogo Thudi briefly what is on your heart. Everything you share stays private.',
  },
  {
    title: 'Your consultation',
    body: 'Visit her in Pretoria North, or have your consultation by video call from anywhere in South Africa or abroad.',
  },
  {
    title: 'Clear next steps',
    body: 'You leave knowing what the ancestors said and what to do next. Follow-up support is there if you need it.',
  },
]

// Word for word from her SA Psychics profile, newest first. All rated 5 stars.
export const reviews = [
  { name: 'Eleanor S.', date: '17 March 2026', text: 'Excellent service! Thudi is very patient and explains her visions so clearly.' },
  { name: 'Zelna S.', date: '10 March 2026', text: 'Such an accurate session! She knew exactly what was happening with my daughter’s wedding plans in Franschhoek.' },
  { name: 'Marinda v.W.', date: '9 March 2026', text: 'Very helpful! Thudi gave me all the answers today.' },
  { name: 'Gareth G.', date: '20 February 2026', text: 'Thudi provided so much clarity. I feel very empowered to make changes now.' },
  { name: 'Priscilla', date: '9 February 2026', text: 'Thudi provided so much clarity on my love life. I was confused about my ex, but she helped me see what was truly holding me back from moving forward.' },
  { name: 'Ofentse', date: '3 February 2026', text: 'Thudi is very professional. I highly recommend a session.' },
  { name: 'Nkosazana Z.', date: '28 January 2026', text: 'Thudi helped me understand my dreams. So much insight provided during our session!' },
  { name: 'Ezra', date: '21 January 2026', text: 'Thudi is a true professional. I will definitely be back for another reading.' },
  { name: 'Sandile', date: '29 December 2025', text: 'Thudi’s reading felt very personal and sincere. She spoke with compassion and understanding, which helped me feel truly heard.' },
  { name: 'Mandla', date: '28 December 2025', text: 'My reading with Thudi felt incredibly genuine and comforting. She helped me understand emotional layers I hadn’t fully recognized and offered guidance that brought clarity and peace. I left feeling supported and more confident in my path.' },
  { name: 'Lydia', date: '27 December 2025', text: 'Thudi delivered a reading that felt balanced and thoughtful. Her insight helped me see things clearly without feeling overwhelmed, which I truly appreciated.' },
  { name: 'Themba', date: '25 December 2025', text: 'Thudi helped me see hope where I had been feeling stuck. Her guidance was encouraging and filled with positive energy.' },
  { name: 'Autumn', date: '15 December 2025', text: 'A compassionate and non-judgmental space. The reading with Thudi helped me release some old guilt by reframing a past event in a way that made sense for my soul’s growth.' },
  { name: 'Musa', date: '26 November 2025', text: 'The clarity Thudi provided was exactly what I needed. She explained dynamics I hadn’t noticed and helped me understand what my intuition has been trying to tell me. Her insight brought me so much relief.' },
  { name: 'Ariel', date: '15 November 2025', text: 'I’ve had many readings, but none like the one with Thudi. She delved into my situation, provided timelines that made sense, and shared spiritual messages that resonated with my soul. Truly gifted!' },
].map((r) => ({ ...r, source: 'SA Psychics' }))

// Shown first in the reviews section; the rest sit behind "Show all".
export const featuredReviewCount = 6

export const faqs = [
  {
    q: 'How much does a consultation cost?',
    a: 'R400 for an in-person consultation in Pretoria North and R450 for a virtual consultation. You will know the full cost before you book. There are no hidden extras.',
  },
  {
    q: 'Can I consult with her from another city or country?',
    a: 'Yes. Virtual consultations are done by video call, so you can book from anywhere in South Africa or abroad. Many of her 291 reviews come from clients she has never met in person.',
  },
  {
    q: 'Which languages does she consult in?',
    a: 'isiZulu, isiXhosa, English, Sesotho, Setswana, and Sepedi. Speak in the language you are most comfortable with.',
  },
  {
    q: 'What does she work with?',
    a: 'Bones, water, the Holy Bible, and her psychic awareness. She is a sangoma, an inyanga, a prophet, and a medium, so she can guide you spiritually and prepare traditional remedies.',
  },
  {
    q: 'Is my consultation private?',
    a: 'Yes. What you share with Gogo Thudi stays between you, her, and your ancestors. Nothing is shared with anyone else.',
  },
  {
    q: 'Do I need to bring anything?',
    a: 'Just yourself and an open heart. If anything is needed for your consultation, you will be told when you book.',
  },
  {
    q: 'Does this replace a doctor or lawyer?',
    a: 'No. Spiritual guidance works alongside medical, legal, and financial advice, not instead of it. Gogo Thudi will always encourage you to see a doctor when your health needs it.',
  },
]
