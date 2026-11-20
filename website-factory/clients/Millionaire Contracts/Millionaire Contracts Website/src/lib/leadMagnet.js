// How the Pipeline & Power list grows (Kat, 20 November 2026). People sign up
// for Beyond Referrals, a free 5-day course, which joins them to the list in
// Command (double opt-in). Command sends the lessons one a day, greeting them
// by first name, then the newsletter carries on. The 7 messages PDF is the
// course's day 3 bonus, and is also handed over on the confirm page.
//
// The two questions sort who can afford MC: Command keeps the answers on the
// member (list_members.answers).
export const COURSE = {
  title: 'Beyond Referrals',
  tagline: 'A free 5-day course for owners who want to grow past word of mouth',
  page: '/beyond-referrals',
}

export const LEAD_MAGNET = {
  title: 'The 7 messages that book meetings',
  long: 'The 7 messages that book meetings with South African business owners',
  page: '/7-messages',
  pdf: '/downloads/7-messages-that-book-meetings.pdf',
}

export const TURNOVER = ['Under R80k a month', 'R80k to R300k a month', 'R300k to R1m a month', 'Over R1m a month']
export const TEAM = ['Just me', '2 to 10 people', '11 to 50 people', 'More than 50']
