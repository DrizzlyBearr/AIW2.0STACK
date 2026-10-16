// Question-led guides. Each section opens with a direct answer so it can be quoted on its own.
// Only guides whose content does not depend on Gogo Thudi's private knowledge are published here.
// Guides that need her own teaching (dream meanings, signs of a calling) are briefs in GROWTH-PLAN.md.

export const guides = [
  {
    slug: 'how-to-choose-a-genuine-traditional-healer',
    navTitle: 'How to choose a genuine traditional healer',
    h1: 'How to choose a genuine traditional healer in South Africa',
    seoTitle: 'How to Choose a Genuine Traditional Healer (and Avoid Scams)',
    metaDescription:
      'Warning signs of fake sangoma listings, what a genuine traditional healer looks like, and questions to ask before you pay. A plain guide from Gogo Thudi, Pretoria North.',
    published: '2026-10-17',
    updated: '2026-10-17',
    intro:
      'Search for a sangoma or traditional healer online and much of what you find is spam: phone numbers in every heading, the same advert copied across dozens of cities, and promises no honest healer would make. This guide explains how to tell the difference before you spend money or share anything personal.',
    sections: [
      {
        h2: 'What are the warning signs of a fake traditional healer?',
        answer:
          'The clearest warning signs are promises of guaranteed results, such as bringing back a lover in hours, winning the lottery or court cases, and demands for large payments upfront. Fake listings also tend to have no real name or photo, a different name on every site, and the same advert posted for many cities at once.',
        points: [
          'Guaranteed outcomes: "bring back lost lover in 24 hours", lotto wins, court case wins, instant wealth',
          'Phone numbers stuffed into the title of the advert, repeated across many cities',
          'No real name, no photo of the healer, or a different name on each listing',
          'Pressure to pay large amounts upfront for rituals or medicine before anything is explained',
          'Threats that something bad will happen to you if you do not pay more',
          'Reviews that only appear on the healer’s own advert and cannot be checked anywhere else',
        ],
      },
      {
        h2: 'What does a genuine traditional healer look like?',
        answer:
          'A genuine traditional healer uses a real name and face, keeps the same phone number everywhere, tells you the consultation price before you book, and has reviews you can check on independent platforms. They tell you honestly what they see, do not promise outcomes, and encourage you to see a doctor when your health needs it.',
        points: [
          'The same name, photo and number on their website, social media and directory profiles',
          'Reviews on independent platforms, built up over years, not days',
          'A clear consultation fee, stated before you book',
          'Any further work, such as a cleansing or medicine, explained and priced before you agree to it',
          'Honest guidance, including things you may not want to hear',
          'Respect for modern medicine and your doctor',
        ],
      },
      {
        h2: 'What should I ask before I book a sangoma?',
        answer:
          'Before you book, ask what the consultation costs, whether it can be done in person or by video call, what languages they consult in, and how any further work is priced. Ask whether they are registered as a traditional health practitioner. A genuine healer answers these questions plainly.',
        points: [
          'How much is the consultation, and what does it include?',
          'In person, by video call, or both?',
          'Which languages do you consult in?',
          'If you recommend further work, will you tell me the cost before I agree?',
          'Are you registered as a traditional health practitioner?',
        ],
      },
      {
        h2: 'Are traditional healers regulated in South Africa?',
        answer:
          'Yes. The Traditional Health Practitioners Act of 2007 set up a council to register and regulate traditional health practitioners in South Africa. Registration is still being rolled out, so many genuine healers are not yet registered, but asking the question tells you how open a healer is about their practice.',
        points: [],
      },
      {
        h2: 'How does Gogo Thudi measure up?',
        answer:
          'You can check this yourself. Gogo Thudi uses one name, one photo and one number, 082 684 4789, across her website, Facebook, Instagram and her directory profiles. Her 291 reviews are on SA Psychics, where she is a Premier Advisor, and she is a verified healer on Gogo Online. Her consultation fee is R400 in person and R450 by video call.',
        points: [],
        checkLinks: true,
      },
    ],
    related: ['bone-throwing-divination', 'love-relationship-guidance', 'money-career-guidance'],
  },
]

export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]))
