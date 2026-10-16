// One page per main service. Some services share a page where they overlap
// (cleansing and water healing, mediumship and prophecy, trauma healing and counselling),
// so every page has enough real substance to stand on its own.
//
// Facts about how Gogo Thudi works come from her own profiles: she reads bones, works with
// water and the Bible, and is a sangoma, inyanga, prophet and medium. Lines marked CONFIRM
// in the README should be checked with her before launch.
//
// reviewMatch picks her real SA Psychics reviews that mention the topic of each page.

export const servicePages = [
  {
    slug: 'bone-throwing-divination',
    reviewTopic: 'Accurate and detailed readings',
    navTitle: 'Bone throwing and divination',
    h1: 'Bone throwing and divination in Pretoria North',
    seoTitle: 'Bone Throwing and Divination in Pretoria North | Gogo Thudi',
    metaDescription:
      'Bone throwing (ukuchitha amathambo) with Gogo Thudi, a traditional healer in Pretoria North. Find out what is blocking you. R400 in person, R450 by video call.',
    problem: 'Something is wrong and you cannot see why',
    answer:
      'Bone throwing is how Gogo Thudi asks your ancestors what is happening in your life. She throws the bones, reads how they fall, and explains what she sees: what is blocking you, what the ancestors want you to know, and what to do next. A consultation costs R400 in person in Pretoria North or R450 by video call.',
    definition: {
      term: 'Bone throwing',
      text: 'Bone throwing, called ukuchitha amathambo in isiZulu and go laola ka ditaola in Sesotho and Setswana, is a form of divination used by sangomas across Southern Africa. The healer casts a set of bones, shells and other objects and reads their positions as messages from the ancestors.',
    },
    forYou: [
      'Nothing seems to go right, at work, at home or with money, and you cannot explain why',
      'You keep facing the same problem again and again',
      'You have a big decision to make and want guidance before you make it',
      'You feel your ancestors are trying to tell you something',
      'You want an honest reading of where your life is heading',
    ],
    session: [
      'Tell Gogo Thudi briefly what brings you to her. You can say as much or as little as you like.',
      'She throws the bones and reads them, asking your ancestors about your situation.',
      'She explains what she sees in plain language, in the language you are most comfortable with.',
      'She tells you what the ancestors are asking of you and what your next steps are. If she recommends further work, such as a cleansing, ask her what it involves and costs before you agree.',
    ],
    virtual:
      'Bone throwing works by video call too. She throws the bones on her side and shows and explains the reading to you on screen.',
    notThis:
      'A reading gives guidance, not guarantees. Gogo Thudi tells you what she sees honestly, including things you may not want to hear. It does not replace a doctor, lawyer or financial adviser.',
    faqs: [
      { q: 'How much does a bone throwing consultation cost?', a: 'R400 in person at her practice in Pretoria North, or R450 by video call. You know the fee before you book.' },
      { q: 'Do I need to tell her my problem first?', a: 'No. Many people only say a little and let the bones speak. Share whatever you feel comfortable sharing.' },
      { q: 'Can bone throwing be done over a video call?', a: 'Yes. She throws the bones on her side and explains the reading on screen, so you can book from anywhere.' },
    ],
    reviewMatch: /spot on|accurate|on point|exactly|knew|details|picked up|bones/i,
    related: ['ancestral-guidance-mediumship', 'spiritual-cleansing', 'dream-interpretation'],
  },
  {
    slug: 'ancestral-guidance-mediumship',
    reviewTopic: 'Messages from loved ones and ancestors',
    navTitle: 'Ancestral guidance and mediumship',
    h1: 'Ancestral guidance, mediumship and prophecy',
    seoTitle: 'Spiritual Medium and Ancestral Guidance, Pretoria | Gogo Thudi',
    metaDescription:
      'Messages from your ancestors and loved ones who have passed on. Gogo Thudi is a medium and prophet in Pretoria North. Book in person (R400) or by video (R450).',
    problem: 'You want to hear from those who came before you',
    answer:
      'Gogo Thudi is a medium. She carries messages from your ancestors and from loved ones who have passed on, and as a prophet she also works with the Bible. People come to her for closure after a loss, for answers about their family, and for direction when they feel the ancestors are trying to reach them.',
    definition: {
      term: 'A medium',
      text: 'A medium is someone who communicates with the spirits of people who have died. In African spirituality this includes the ancestors, called amadlozi in isiZulu and badimo in Sesotho, Setswana and Sepedi, who are believed to guide and protect the living.',
    },
    forYou: [
      'You have lost someone and want closure or a message from them',
      'You feel your ancestors are unsettled or asking something of you',
      'You want to understand problems that run through your family',
      'You want spiritual direction that draws on both the ancestors and the Bible',
    ],
    session: [
      'Tell her who you want to hear from, or simply what you are going through.',
      'She connects with your ancestors and loved ones and relays what comes through.',
      'She explains the messages and what they mean for your life now.',
      'She tells you whether anything is being asked of you, such as a ritual or a change in how you live.',
    ],
    virtual:
      'Mediumship works the same way by video call. Many of her reviews come from clients she has only spoken to over the phone or on video.',
    notThis:
      'Gogo Thudi passes on what comes through honestly. She cannot promise who will come through in a session, and a reading does not replace grief counselling or medical care when you need it.',
    faqs: [
      { q: 'Can she connect with a specific person who has passed away?', a: 'You can ask for a specific person. She relays what comes through honestly, and cannot promise in advance who will come through.' },
      { q: 'What does it mean when she says she is a prophet?', a: 'Alongside the ancestors, Gogo Thudi works with the Bible in her spiritual guidance. Prophecy is part of how she receives and shares messages.' },
      { q: 'Can I bring a family member to the session?', a: 'Yes. Mention it when you book on WhatsApp so she knows to expect you both.' },
    ],
    reviewMatch: /loved one|passed|grief|ancestor|guides|spirit|message|tears|closure/i,
    related: ['bone-throwing-divination', 'spiritual-growth-purpose', 'healing-past-trauma'],
  },
  {
    slug: 'spiritual-cleansing',
    reviewTopic: 'Feeling lighter and at peace',
    navTitle: 'Spiritual cleansing and water healing',
    h1: 'Spiritual cleansing and water healing in Pretoria North',
    seoTitle: 'Spiritual Cleansing and Water Healing, Pretoria North | Gogo Thudi',
    metaDescription:
      'Feel heavy, stuck or followed by bad luck? Gogo Thudi offers spiritual cleansing and water healing in Pretoria North. Consultation R400. Book on WhatsApp.',
    problem: 'Everything feels heavy and nothing goes right',
    answer:
      'Spiritual cleansing clears what has attached itself to you, your home or your work: heaviness, bad luck that will not lift, or energy left behind by someone else. Gogo Thudi also works with water to cleanse the spirit and restore balance. A consultation comes first, so she can see what you need before any cleansing is done.',
    definition: {
      term: 'Spiritual cleansing',
      text: 'Spiritual cleansing is a ritual to remove negative energy or spiritual dirt from a person or place. In traditional healing it is often done with water, herbs or smoke, and is usually recommended after a consultation shows what needs to be cleared.',
    },
    forYou: [
      'You feel drained, heavy or not like yourself, for no clear reason',
      'Bad luck keeps following you at work, in love or with money',
      'Your home feels unsettled or there is constant conflict in it',
      'You have been through something painful and want to start clean',
    ],
    session: [
      'Book a consultation (R400 in person, R450 by video) so she can see what is affecting you.',
      'She explains what needs to be cleansed and how, including whether water healing is right for you.',
      'Ask her what the cleansing involves and what it costs before you agree to it.',
      'The cleansing itself is done in person at her practice in Pretoria North.',
    ],
    virtual:
      'The first consultation can be done by video call. The cleansing itself is done in person in Pretoria North.',
    notThis:
      'A cleansing is spiritual work. It does not replace medical or psychological care, and Gogo Thudi will encourage you to see a doctor when your health needs it.',
    faqs: [
      { q: 'Do I need a consultation before a cleansing?', a: 'Yes. The consultation shows her what needs to be cleansed and how, so the cleansing fits your situation.' },
      { q: 'What is water healing?', a: 'Water healing is one of the ways Gogo Thudi cleanses the spirit, using water to wash away what is weighing on you and restore balance. She will tell you in your consultation whether it is right for you.' },
      { q: 'Can a cleansing be done remotely?', a: 'The consultation can be done by video call, but the cleansing itself is done in person at her practice.' },
    ],
    reviewMatch: /lighter|heavy|heaviness|cleans|energy|peace|relief|healing|calm/i,
    related: ['bone-throwing-divination', 'healing-past-trauma', 'traditional-medicine'],
  },
  {
    slug: 'dream-interpretation',
    reviewTopic: 'Dreams',
    navTitle: 'Dream interpretation',
    h1: 'Dream interpretation with Gogo Thudi',
    seoTitle: 'Dream Interpretation in Pretoria and by Video Call | Gogo Thudi',
    metaDescription:
      'Dreams that repeat, frighten you or feel like a message from the ancestors. Gogo Thudi interprets dreams in Pretoria North or by video call. From R400.',
    problem: 'A dream will not leave you alone',
    answer:
      'In African spirituality, dreams are one of the main ways the ancestors speak to the living. Gogo Thudi listens to your dream, asks your ancestors what it means, and explains the message in plain language. People come to her with dreams that repeat, dreams that frighten them, and dreams that feel too real to ignore.',
    definition: {
      term: 'Dream interpretation',
      text: 'In traditional healing, dream interpretation means reading a dream as a possible message from the ancestors or from God, rather than as random images. Repeated dreams in particular are often taken as a sign that something needs attention.',
    },
    forYou: [
      'You keep having the same dream',
      'You dream of a family member who has passed away',
      'You dream of water, snakes, animals or people you do not know, and want to know what it means',
      'You wake up unsettled and cannot shake the feeling the dream left',
      'You wonder whether your dreams are a sign of an ancestral calling',
    ],
    session: [
      'Write your dream down as soon as you wake, with as much detail as you can remember.',
      'Share it with Gogo Thudi in your consultation.',
      'She asks your ancestors what the dream means and explains the message.',
      'She tells you whether the dream is asking anything of you.',
    ],
    virtual:
      'Dream interpretation works fully by video call, so you can book from anywhere.',
    notThis:
      'Some troubling dreams come from stress, grief or health problems. Gogo Thudi interprets the spiritual side, and you should also speak to a doctor if your sleep is badly affected.',
    faqs: [
      { q: 'Should I write my dream down?', a: 'Yes. Write it down as soon as you wake up, including small details, people and colours. Details fade quickly.' },
      { q: 'Can dreams be a sign of an ancestral calling?', a: 'They can be. Gogo Thudi can tell you whether your dreams point to a calling, and what that would mean for you.' },
      { q: 'Can I bring more than one dream?', a: 'Yes. Mention it when you book so she can give each dream the time it needs.' },
    ],
    reviewMatch: /understand my dreams|\bdreamt\b|\bdreamed\b|\bnightmare/i,
    related: ['ancestral-guidance-mediumship', 'spiritual-growth-purpose', 'bone-throwing-divination'],
  },
  {
    slug: 'love-relationship-guidance',
    reviewTopic: 'Love, relationships and family',
    navTitle: 'Love and relationships',
    h1: 'Love and relationship guidance',
    seoTitle: 'Love and Relationship Readings, Pretoria North | Gogo Thudi',
    metaDescription:
      'Honest guidance on your relationship, your marriage, an ex or your family from Gogo Thudi in Pretoria North. No false promises. R400 in person, R450 by video.',
    problem: 'Your heart is confused',
    answer:
      'Gogo Thudi gives honest guidance on love, marriage and family: what is really happening in your relationship, what is holding you back, and what the ancestors see for you. She does not sell love spells or promise to bring anyone back. She tells you the truth so you can make your own decisions with a clear mind.',
    definition: {
      term: 'A relationship reading',
      text: 'A relationship reading is a consultation focused on love, marriage or family, where the healer asks the ancestors about a relationship and what is affecting it.',
    },
    forYou: [
      'You are confused about where your relationship is going',
      'You cannot let go of an ex and want to understand why',
      'There is conflict in your marriage or your family',
      'You keep attracting the same kind of relationship',
      'You want to know whether someone is right for you',
    ],
    session: [
      'Tell her about the relationship or situation on your heart.',
      'She asks your ancestors and reads what is affecting it.',
      'She explains what she sees honestly, even when it is hard to hear.',
      'She helps you see your next step clearly.',
    ],
    virtual:
      'Relationship readings work fully by video call, and many of her clients book this way for privacy.',
    notThis:
      'Gogo Thudi does not cast love spells or promise to bring back a partner. Be careful of anyone who does. If you are in danger at home, contact the GBV Command Centre on 0800 428 428.',
    faqs: [
      { q: 'Can Gogo Thudi bring back my ex?', a: 'No, and be careful of anyone who promises that. She gives honest guidance on the relationship and on what is holding you back, so you can decide what to do.' },
      { q: 'Is a relationship reading private?', a: 'Yes. What you share stays between you and Gogo Thudi.' },
      { q: 'Can my partner and I come together?', a: 'Yes. Mention it when you book on WhatsApp.' },
    ],
    reviewMatch: /love|relationship|ex\b|partner|marriage|husband|wife|family/i,
    related: ['healing-past-trauma', 'bone-throwing-divination', 'money-career-guidance'],
  },
  {
    slug: 'healing-past-trauma',
    reviewTopic: 'Feeling heard and healing',
    navTitle: 'Healing past trauma and counselling',
    h1: 'Healing past trauma, counselling and life coaching',
    seoTitle: 'Spiritual Healing for Past Trauma, Pretoria North | Gogo Thudi',
    metaDescription:
      'Old wounds that still follow you. Gogo Thudi, a former educator and traditional healer, offers spiritual healing and counselling in Pretoria North and by video.',
    problem: 'Old pain still follows you',
    answer:
      'Gogo Thudi helps people heal past trauma spiritually: old wounds, guilt and loss that still shape how they live. She left a career in education to follow her calling, and her sessions combine spiritual healing with counselling and practical guidance. Clients describe her as compassionate and non-judgemental.',
    definition: {
      term: 'Spiritual healing of trauma',
      text: 'In traditional healing, past trauma is seen as something that can affect the spirit as well as the mind. Spiritual healing works on that side, alongside, not instead of, professional mental health care.',
    },
    forYou: [
      'Something painful from the past still affects your life today',
      'You carry guilt or regret you cannot put down',
      'You feel stuck and want guidance on how to move forward',
      'You want someone to listen without judging you',
    ],
    session: [
      'Tell her what you are carrying, at your own pace.',
      'She listens, consults your ancestors, and helps you see the situation in a new way.',
      'She offers spiritual healing and practical guidance for moving forward.',
      'You can book follow-up sessions if you want ongoing support.',
    ],
    virtual:
      'Counselling and guidance work well by video call. Some healing work may be done in person.',
    notThis:
      'Spiritual healing does not replace professional mental health care. If you are in crisis, call the SADAG helpline on 0800 456 789, available 24 hours.',
    faqs: [
      { q: 'Is this the same as therapy?', a: 'No. Gogo Thudi offers spiritual healing and guidance. It can sit alongside therapy, but it does not replace a psychologist or counsellor.' },
      { q: 'Do I have to talk about everything that happened?', a: 'No. Share only what you are comfortable sharing. You set the pace.' },
      { q: 'Can I have regular sessions?', a: 'Yes. Many clients come back for ongoing guidance. Book each session on WhatsApp.' },
    ],
    reviewMatch: /guilt|heal|heard|non-judg|compassion|understood|stuck|hope|lighter|feelings/i,
    related: ['spiritual-cleansing', 'ancestral-guidance-mediumship', 'spiritual-growth-purpose'],
  },
  {
    slug: 'money-career-guidance',
    reviewTopic: 'Work, money and decisions',
    navTitle: 'Money and career',
    h1: 'Guidance on money, work and business',
    seoTitle: 'Spiritual Guidance for Career and Money, Pretoria | Gogo Thudi',
    metaDescription:
      'Stuck at work, in business or with money? Gogo Thudi gives honest spiritual guidance on career and money decisions in Pretoria North and by video. From R400.',
    problem: 'You work hard and still feel blocked',
    answer:
      'Gogo Thudi gives spiritual guidance on work, business and money: what may be blocking your progress, what the ancestors see for your path, and which decision to make when you are unsure. She does not promise riches or lottery wins. She helps you see your situation clearly so you can act on it.',
    definition: {
      term: 'Career guidance from a healer',
      text: 'In traditional healing, persistent setbacks at work or with money are sometimes read as a spiritual block or as a sign that you are on the wrong path. A consultation looks at that spiritual side of your situation.',
    },
    forYou: [
      'You keep missing out on jobs or promotions',
      'Your business struggles despite your effort',
      'You are deciding whether to change jobs or start something new',
      'Money comes in and leaves just as fast',
    ],
    session: [
      'Tell her about your work or business situation and the decision in front of you.',
      'She consults your ancestors and reads what is affecting your progress.',
      'She explains what she sees and gives you practical guidance.',
      'If she recommends spiritual work such as a cleansing, ask what it involves and costs before you agree.',
    ],
    virtual: 'Career and money readings work fully by video call.',
    notThis:
      'Gogo Thudi does not promise wealth, lottery wins or court victories. Be careful of anyone who does. Spiritual guidance does not replace a financial adviser or lawyer.',
    faqs: [
      { q: 'Can she make me rich or help me win the lottery?', a: 'No, and you should be wary of anyone who claims they can. She gives honest guidance on what is blocking you and on your decisions.' },
      { q: 'Can she help me choose between two job offers?', a: 'Yes. Bring both options to your consultation and she will tell you what she sees.' },
      { q: 'Is this only for business owners?', a: 'No. Employees, job seekers, students and business owners all come to her.' },
    ],
    reviewMatch: /career|job|work|business|money|decision|goals|professional/i,
    related: ['bone-throwing-divination', 'spiritual-cleansing', 'spiritual-growth-purpose'],
  },
  {
    slug: 'traditional-medicine',
    reviewTopic: 'Practical advice and solutions',
    navTitle: 'Traditional medicine',
    h1: 'Traditional medicine from an inyanga in Pretoria North',
    seoTitle: 'Inyanga and Traditional Medicine in Pretoria North | Gogo Thudi',
    metaDescription:
      'Gogo Thudi is an inyanga as well as a sangoma. She prepares traditional remedies after a consultation in Pretoria North. Consultation R400. Book on WhatsApp.',
    problem: 'You want traditional remedies from someone you can trust',
    answer:
      'Gogo Thudi is an inyanga as well as a sangoma, so she can prepare traditional remedies (muthi) for your situation. Remedies are prepared after a consultation, as guided by your ancestors. She works alongside modern medicine and will always encourage you to see a doctor when your health needs it.',
    definition: {
      term: 'An inyanga',
      text: 'An inyanga is a traditional healer who specialises in medicine made from plants and other natural materials. A sangoma mainly works through divination and the ancestors. Gogo Thudi is both.',
    },
    forYou: [
      'Your consultation shows that a traditional remedy is needed',
      'You want protection or strengthening for yourself or your home',
      'You prefer traditional remedies prepared by someone you can verify',
    ],
    session: [
      'Book a consultation first (R400 in person) so she can see what you need.',
      'She explains which remedy she recommends and how to use it.',
      'Ask her what the remedy costs before you agree.',
      'Remedies are prepared and collected in person in Pretoria North.',
    ],
    virtual:
      'You can have the first consultation by video call. Remedies are prepared and collected in person.',
    notThis:
      'Traditional medicine does not replace medical treatment. Never stop prescribed medication without speaking to your doctor. If you take chronic medication, tell Gogo Thudi in your consultation.',
    faqs: [
      { q: 'What is the difference between a sangoma and an inyanga?', a: 'A sangoma mainly works through divination and the ancestors. An inyanga specialises in traditional medicine. Gogo Thudi is both.' },
      { q: 'Can I get a remedy without a consultation?', a: 'Remedies are prepared after a consultation, so they match what you actually need.' },
      { q: 'Should I keep taking my medication from the clinic?', a: 'Yes. Never stop prescribed medication without speaking to your doctor, and tell Gogo Thudi what you take.' },
    ],
    reviewMatch: /advice|solutions|remed|practical|guidance/i,
    related: ['spiritual-cleansing', 'bone-throwing-divination', 'ancestral-guidance-mediumship'],
  },
  {
    slug: 'spiritual-growth-purpose',
    reviewTopic: 'Purpose and spiritual path',
    navTitle: 'Purpose and ancestral calling',
    h1: 'Finding your purpose and understanding an ancestral calling',
    seoTitle: 'Ancestral Calling and Spiritual Purpose, Pretoria | Gogo Thudi',
    metaDescription:
      'Dreams, signs or a feeling you are being called? Gogo Thudi teaches and guides people to understand their purpose and ancestral calling. Pretoria North or video.',
    problem: 'You feel you are meant for something',
    answer:
      'Gogo Thudi teaches and guides people who want to understand their spiritual purpose, including those who feel the ancestors may be calling them. In her words: "My destiny is to teach and guide others to their divinity, and to align them to their highest self." She helps you understand the signs and what they ask of you.',
    definition: {
      term: 'An ancestral calling',
      text: 'An ancestral calling, known as ubizo in isiZulu, is the belief that the ancestors have chosen someone to become a healer. The training that follows is called ukuthwasa. Signs people often describe include vivid dreams, unexplained illness and a strong pull towards traditional healing.',
    },
    forYou: [
      'You keep having vivid dreams about the ancestors or about healing',
      'You feel a strong pull towards spirituality you cannot explain',
      'Someone has told you that you have a calling and you want an honest view',
      'You want to grow spiritually and understand your purpose',
    ],
    session: [
      'Tell her what you have been experiencing: dreams, signs, feelings.',
      'She consults the ancestors about your path.',
      'She explains whether she sees a calling, and what it would mean for you.',
      'If you want to grow further, ask her about ongoing teaching and mentoring.',
    ],
    virtual: 'Guidance on purpose and calling works fully by video call.',
    notThis:
      'Some signs people link to a calling, such as illness, can also have medical causes. See a doctor about any health symptoms as well.',
    faqs: [
      { q: 'How do I know if I have an ancestral calling?', a: 'Only a consultation can tell you. Gogo Thudi will give you an honest view of whether she sees a calling, and what it would mean.' },
      { q: 'Does Gogo Thudi train people (ukuthwasa)?', a: 'She teaches and guides people seeking their purpose. Ask her directly about training when you book.' },
      { q: 'I do not think I have a calling. Is this still for me?', a: 'Yes. Many people come simply to understand their purpose and grow spiritually.' },
    ],
    reviewMatch: /purpose|journey|soul|spiritual|path|growth|guides|awakening/i,
    related: ['ancestral-guidance-mediumship', 'dream-interpretation', 'healing-past-trauma'],
  },
]

export const servicePageBySlug = Object.fromEntries(servicePages.map((p) => [p.slug, p]))
