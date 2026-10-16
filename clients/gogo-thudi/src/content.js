// All site copy and business details live here so they can be edited in one place.
// Sourced from her verified Gogo Online profile (gogoonline.co.za), October 2026.
// Anything marked TODO still needs confirming with Gogo Thudi before the site goes live.
// Never put a review on the site that a real client did not write.

export const business = {
  name: 'Gogo Thudi',
  tagline: 'Spiritual Healer and Medium',
  area: 'Pretoria North',
  region: 'Tshwane, Gauteng',
  // TODO: get her WhatsApp number from her (international format, no + or spaces)
  whatsapp: '27000000000',
  // TODO: get her call number as it should be displayed
  phoneDisplay: '082 000 0000',
  phoneHref: 'tel:+27820000000',
  // TODO: confirm, or set to null if she prefers not to list one
  email: null,
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
  gogoOnlineUrl: 'https://gogoonline.co.za/healerprofile?id=6a18bec0057773e14bf1258e',
  // TODO: add her real rating and review count from sa-psychics.com, e.g. { score: '4.9', count: '120', source: 'SA Psychics' }
  rating: null,
  // Her own words, from her Gogo Online profile
  bio: 'I empower and teach those who are seeking spiritual guidance and need to know their purpose. I cleanse and help heal past trauma.',
  quote: 'My destiny is to teach and guide others to their divinity, and to align them to their highest self.',
}

export const services = [
  {
    key: 'divination',
    title: 'Divination and Bone Throwing',
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
    summary: 'Honest guidance on your relationship, your marriage, or your family, seen through the eyes of your ancestors.',
    detail: 'In person or virtual',
  },
  {
    key: 'medicine',
    title: 'Traditional Medicine',
    summary: 'Traditional remedies prepared for your situation, as guided by the ancestors during your consultation.',
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
    body: 'WhatsApp or call to book. Tell Gogo Thudi briefly what is on your heart. Everything you share stays private.',
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

// TODO: paste real reviews from sa-psychics.com (first name or initial only), e.g.
// { name: 'Thandi M.', text: '...', source: 'SA Psychics' }
// Leave this list empty and the section shows a placeholder notice instead of fake reviews.
export const reviews = []

export const faqs = [
  {
    q: 'How much does a consultation cost?',
    a: 'R400 for an in-person consultation in Pretoria North and R450 for a virtual consultation. You will know the full cost before you book. There are no hidden extras.',
  },
  {
    q: 'Can I consult with her from another city or country?',
    a: 'Yes. Virtual consultations are done by video call, so you can book from anywhere in South Africa or abroad.',
  },
  {
    q: 'Which languages does she consult in?',
    a: 'isiZulu, isiXhosa, English, Sesotho, Setswana, and Sepedi. Speak in the language you are most comfortable with.',
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
