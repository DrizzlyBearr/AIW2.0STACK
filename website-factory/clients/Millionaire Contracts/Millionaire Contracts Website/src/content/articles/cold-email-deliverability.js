// Data-driven article. Rendered by src/components/ArticleTemplate.jsx and
// auto-discovered by the build. status: 'published' makes it live.
export default {
  slug: 'cold-email-deliverability',
  status: 'published',
  date: '2026-09-04',
  category: 'Outreach',
  label: 'Outreach',
  title: 'Cold Email Deliverability: How to Land in the Inbox',
  description:
    'Deliverability is not a spam-word checklist. It is a reputation you earn from how real people react to your mail. Here is what the inbox providers actually score, and the counterintuitive lever that lifts you.',
  intro:
    'Everyone treats cold email deliverability as a copy problem. Strip the spam words, soften the subject line, and the inbox is supposed to open. It does not, because you are optimizing the one thing the inbox providers barely look at. What they look at is your reputation as a sender. Reputation is not written into an email. It is earned over time, and it turns on something the checklists never mention.',
  stats: [
    { value: 'Reputation', label: 'What providers score, not the words in one email' },
    { value: 'Behavior', label: 'Opens, replies, deletes, and spam marks build it' },
    { value: 'Send less', label: 'The counterintuitive lever that raises the score' },
    { value: 'Earned', label: 'You cannot trick your way into the inbox' },
  ],
  sections: [
    {
      heading: 'The spam-word checklist grades the wrong thing',
      body: 'You ran the email through a spam-word checker. You cut the word free, softened the subject line, removed the exclamation point, and sent it anyway. It still landed in spam. The checker told you the copy was clean, and the copy was never the problem.\n\nDeliverability is not a word game you win with a list of banned terms. Inbox providers barely care what a single email says. They care who sent it, and whether the people who received mail from that sender before actually wanted it. The spam-word idea keeps getting sold because it is easy to sell and easy to act on. The system underneath it is closer to a credit score than a grammar check, and it does not read your synonyms. Once you see that, every real fix moves to a different place than the one you have been looking.',
    },
    {
      heading: 'What the provider actually scores',
      body: 'Think of your sending identity the way a bank thinks of a borrower. Your domain and the address you send from carry a reputation, and that reputation is a running score built from history. Every time you send, the provider watches what the humans on the other end do, and it updates the number.\n\nThe score is not published and you cannot read it directly. You infer it from where your mail lands. High reputation, and you sit in the primary inbox. Low reputation, and you slide to the promotions tab, then to the spam folder, then to silent rejection, where the message is accepted and quietly discarded so you never even see a bounce. The slide from one to the next is gradual, which is why most senders do not notice the decline until they are already in spam and cannot explain it. Nothing in the copy changed. The reputation did. So the real question is what moves that number up or down.',
    },
    {
      heading: 'Engagement is the currency',
      body: 'The number moves on behavior, not on content. When a real person opens your mail, replies to it, or drags it from spam into the inbox, that is a positive signal, and it is the strongest one you have. When they ignore it, delete it without opening, or mark it as spam, that is a negative signal, and a spam complaint is the single most expensive mistake on the list.\n\nThis is the part that reframes everything else. Engagement is not a pleasant result of good deliverability. Engagement is the input that creates deliverability. The provider is trying to answer one question on behalf of the person who owns the inbox: does this person want mail from this sender? Replies and opens say yes. Deletes and complaints say no. A single genuine reply outweighs a stack of opens, because a reply is the hardest signal to fake and the clearest proof a human wanted to talk. You are not writing to slip past a filter. You are generating the human reactions the filter reads and scores. Which points to a lever most senders never touch.',
    },
    {
      heading: 'The counterintuitive lever: send less',
      body: 'Here is the move almost nobody reaches for. To land in more inboxes, send to fewer people. Send only to the ones most likely to open and reply.\n\nMost senders do the opposite. They treat volume as the growth lever, load ten thousand addresses, and mail all of them because the list is sitting there. But reputation is an average. Every address that ignores you, every dead mailbox, every person who never had a reason to care drags that average down and takes your good prospects with it. A tight list of five hundred people who fit your offer and engage with it will out-deliver a bloated list of ten thousand every time, because the average stays high. Cutting the list is not caution. It is the fastest way to raise the score that decides whether any of the mail arrives at all.\n\nThe instinct is that a smaller list leaves money on the table. It is the reverse. The addresses you drop were not going to buy, and holding onto them only lowered the odds that the ones who would ever saw the message. You are not sending less to be safe. You are sending less so the mail reaches the people who matter. The trouble is that a bad list does not just fail to help. It actively burns you.',
    },
    {
      heading: 'Why a bad list poisons the good one',
      body: 'Follow the mechanism and the damage is plain. You buy or scrape a large list. A share of the addresses are spam traps, old mailboxes that providers recycle for the specific purpose of catching senders who do not clean their lists. You hit a few of those and the provider now has hard evidence you are mailing people who did not ask. Another share bounces. Another share marks you as spam because they have no idea who you are. Within a week the reputation you spent months building is gone, and it dragged the deliverability of your best prospects down with it.\n\nThis is why one careless campaign poisons the next careful one. Deliverability does not reset between sends. It carries. The email you send on Tuesday inherits the reputation you earned or wrecked on Monday. Treat every send as a deposit or a withdrawal against a balance you cannot see but always carry forward. None of which means the technical setup does not matter. It means most people put it in the wrong place.',
    },
    {
      heading: 'The technical setup is the price of entry, not a boost',
      body: 'Authentication, the records that prove your mail is really from you, is not a way to boost reputation. It is the price of being allowed to have one. Set up your SPF, DKIM, and DMARC records and you have told the provider who you are. Skip them and you are an unsigned stranger, scored as a likely forgery before behavior even enters the picture.\n\nWarming a new domain works the same way. A brand-new sending domain has no history, and no history reads as risk. So you start slow, a small number of engaged sends a day, and build volume as the reputation forms, the way a lender extends a small limit before a large one. Send a cold blast from a domain you registered last week and you have skipped the history the provider needs before it will trust you. It is also why serious senders keep cold outreach on a separate domain from the one that runs the business, so a bad stretch never touches the mail that pays the bills. The technical layer is hygiene. It gets you to the starting line. It does not run the race, and no volume of it rescues mail that people do not want.',
    },
    {
      heading: 'How to earn a burned reputation back',
      body: 'So you already sent the blast, the complaints came in, and now even your warm replies are landing in spam. Can you recover? Yes, but not quickly, and not with a settings change.\n\nA damaged reputation heals the way it formed, through behavior over time. You stop sending to anyone who will not engage. You cut the list down to the people who actually reply. You send less, to better prospects, and you let a stretch of clean, wanted mail slowly pull the average back up. Some senders skip the repair and move to a fresh domain instead, which works only if they also fix the behavior that burned the first one. Otherwise they just burn the second. There is no reset button, because there was never a switch to begin with. There is a history, and the only way to change a history is to add better days to it than the ones behind you. Picture it as climbing out of a hole you dug in one afternoon over the course of a month. The mail that gets you out is boring on purpose: small, wanted, and answered. That is slow, deliberate work, which is exactly why it points back to a decision you make long before you send.',
    },
    {
      heading: 'The inbox is downstream of who you email',
      body: 'Which turns deliverability into a question that is not really about email at all. If reputation is built from whether people want your mail, then the inbox is downstream of a choice you make before you ever hit send: who you email, and whether you gave them a reason to care.\n\nA precise list and a message worth a reply do more for deliverability than every spam-word checklist ever printed, because together they produce the one thing the filter is actually counting. That moves the real work up the chain, to the list and the words, where a single good email earns the reputation that a thousand mediocre ones spend. Which raises the next question, the one the checklist was always dodging. What does a cold email people actually reply to look like?',
    },
  ],
  faqs: [
    {
      q: 'Do spam words send my email to spam?',
      a: 'Almost never on their own. Modern filters score the sender, not a word list. They watch how real people react to your mail over time and land you based on that reputation. You can send a clean, plain email and still hit spam if your sending reputation is low, and you can use an ordinary business word and land in the inbox if your reputation is high.',
    },
    {
      q: 'How many cold emails can I send per day?',
      a: 'There is no fixed number, because it depends on the reputation of the domain and how warmed it is. A new domain can send only a small volume until it builds a history, and pushing past that too fast is one of the quickest ways to burn it. The safer question is not how many you can send, but how many of the people you plan to send to are likely to engage. Send to those and the safe volume rises on its own.',
    },
    {
      q: 'Why did my deliverability suddenly drop?',
      a: 'Usually because a recent send damaged your reputation and the next sends inherited it. A batch of bounces, a spike in spam complaints, or hitting spam traps on a bought list will pull the score down, and deliverability carries that score from one send to the next. The copy did not change. The reputation behind it did.',
    },
    {
      q: 'Do I need a separate domain for cold email?',
      a: 'Yes, if the mail that runs your business matters to you. Cold outreach carries more risk of complaints and bounces than warm mail, and reputation attaches to the domain. Keep cold sending on a separate domain and a bad stretch stays contained there instead of following your invoices and client mail into spam.',
    },
    {
      q: 'How long does it take to recover a burned reputation?',
      a: 'Longer than most people want, because it heals through behavior over time rather than a setting you flip. You cut the list to people who engage, send less and cleaner, and let a run of wanted mail rebuild the average. There is no reset button. The only way to change the history is to add better days to it.',
    },
  ],
  related: [
    { to: '/how-to-write-a-cold-email', label: 'How to Write a Cold Email', desc: 'The message that earns the reply your reputation is built on.' },
    { to: '/how-to-build-a-sales-cadence', label: 'How to Build a Sales Cadence', desc: 'How the sends fit together without burning the domain.' },
    { to: '/lead-qualification-framework', label: 'Lead Qualification Framework', desc: 'How to tighten the list so you mail people who actually engage.' },
    { to: '/how-to-book-more-sales-meetings', label: 'How to Book More Sales Meetings', desc: 'What the inbox is for once the mail lands.' },
  ],
  ctaHeading: 'Want the meetings without babysitting the inbox?',
  ctaBody: 'We run the outbound end to end: the targeting, the sending reputation, the copy, and the follow-up, with qualified meetings booked into your calendar. Millionaire Contracts runs at a 65 percent average meeting success rate and has scaled 20+ companies. One call is enough to see if it fits.',
}
