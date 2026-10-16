# Gogo Thudi growth plan

How the website, Google and her social accounts work together to bring in booked consultations.
Built from five open-source marketing skill libraries (coreyhaines31/marketingskills,
kostja94/marketing-skills, thatrebeccarae/claude-marketing, OpenClaudia/openclaudia-skills,
escapeartapps/agents), filtered for a local spiritual healer in South Africa. Advice that did not
fit (fake urgency, guarantees, suburb spam pages, star markup) was left out on purpose. See the end.

Goal: more WhatsApp messages and calls that turn into paid consultations (R400 in person, R450 video).

---

## 1. What is already built into the website

| Area | What was done | Why |
|---|---|---|
| Pages Google can read | Every page is built to finished HTML before it goes live | Google reads it straight away. AI assistants (ChatGPT, Perplexity) do not run JavaScript at all |
| Service pages | 9 pages, one per main service, 750 to 1,000 words each, at `/services/...` | One page per search topic ranks far better than one page for everything |
| Answer first | Each service page opens with a 40 to 60 word direct answer, then "What is ...?" | The format Google snippets and AI assistants quote |
| Reviews page | All 291 reviews written into `/reviews`, grouped by topic | Real client wording ("spot on", "felt heard", "my dreams") is what people search |
| Matched reviews | Each service page shows the reviews that mention its topic | Proof right next to the booking button |
| Anti-scam guide | `/guides/how-to-choose-a-genuine-traditional-healer` | Speaks to the biggest fear of her audience, and shows why she is different from spam listings |
| Structured data | Business, person, services with prices in ZAR, breadcrumbs, article | Helps Google and AI assistants understand who she is, where, and what she charges |
| Sitemap, robots, llms.txt | `/sitemap.xml`, `/robots.txt`, `/llms.txt` | Search engines find every page. AI crawlers are allowed |
| Social previews | 1200x630 preview image with her photo, name, rating and number | WhatsApp and Facebook links show a proper card |
| Mobile booking bar | Call and WhatsApp buttons fixed to the bottom of every page on phones | Most visitors come from phones |
| Price and privacy under every main button | "R400 in person, R450 by video call. Your message stays private." | Removes the two biggest worries before someone clicks |
| Scam objection first in FAQ | "How do I know I am really talking to Gogo Thudi?" | Her audience has been burned by fake sangomas |
| Low-commitment option | "Not ready to book? Ask a question first on WhatsApp" | Catches people who are not ready to book yet |
| Source in every WhatsApp message | Messages say which page they came from, e.g. "(Dream interpretation page)" | She can see which pages bring bookings, even without analytics |
| Click tracking | Every WhatsApp, call, form and profile click is recorded once GA4 is on | Shows which pages and services bring appointments |

---

## 2. Do this first: Google Business Profile (the biggest lever)

For "sangoma near me" and "traditional healer Pretoria North", the map results at the top of Google
take most of the clicks. They come from a Google Business Profile, not the website.

Gogo Thudi has to set this up herself, because Google verifies the owner (usually by video now).

1. Go to business.google.com and create the profile.
2. **Name:** `Gogo Thudi`. Exactly that. No keywords like "Gogo Thudi Sangoma Pretoria" (Google suspends profiles for this).
3. **Category:** pick the most specific one Google offers that fits. Check the list when setting up.
4. **Address:** `1000 Rama City, Pretoria North`, only if clients really visit her there. If not, hide the address and set service areas instead.
5. **Service areas:** list real places: Pretoria North, Akasia, Annlin, Wonderboom, Sinoville, Montana, Rosslyn, Soshanguve, Mabopane. Not "Gauteng" or "South Africa" (Google no longer accepts those).
6. **Phone:** `082 684 4789`. **Website:** use the tracked link from section 5.
7. **Hours:** exactly as on the site. Google favours businesses that are open when people search.
8. **Description (up to 750 characters, factual, no links):**
   > Gogo Thudi is a traditional healer, medium and prophet in Pretoria North with 16 years of experience. She offers bone throwing and divination, ancestral guidance and mediumship, spiritual cleansing and water healing, dream interpretation, relationship guidance and traditional medicine. Consultations are R400 in person or R450 by video call, in isiZulu, isiXhosa, English, Sesotho, Setswana and Sepedi.
9. **Services:** add each of the 9 services with the price and whether it is in person, video, or both.
10. **Messaging:** connect WhatsApp.
11. **Photos:** her (the yellow headwrap photo), her consulting space, the outside of the building. Never clients without their written permission.

---

## 3. Google reviews (start now, it compounds)

Her 291 SA Psychics reviews cannot be moved to Google. She starts from zero there, but she clearly
has the client base to build quickly.

- After every consultation, send this on WhatsApp (adjust the wording to her voice):

  > Thank you for your consultation today. If you would like to share your experience, you can leave a review here: [Google review link]. Your honest feedback helps others find me.

- Ask every client, not only the happy ones. No discounts or gifts for reviews. Never write reviews for clients.
- Reply to every review politely and briefly. **Never mention anything personal from the session** in a reply (relationships, health, money, family). Privacy is everything for her clients.

---

## 4. Same details everywhere (NAP)

Search engines and AI assistants trust a business more when its name, address and phone match
everywhere. Use exactly:

- **Name:** Gogo Thudi
- **Address:** 1000 Rama City, Pretoria North
- **Phone:** 082 684 4789
- **Website:** her site URL (domain to be chosen)

| Listing | Action |
|---|---|
| Facebook page (facebook.com/gogothudi) | Add website link (tracked, section 5). Check address and phone match |
| Instagram (@gogothudi) | Add website link to bio |
| TikTok (@gogothudi) | Make the account public, add a bio and the website link |
| SA Psychics profile | Add website link if the site allows it |
| Gogo Online profile | Add website link |
| findglocal | Check details match, add website |
| Bing Places | Create (imports from Google Business Profile) |
| Apple Business Connect | Create (Apple Maps on iPhones) |

Quality over quantity. A few listings real clients use beat dozens of junk directories.

---

## 5. Tracked links (UTM) for her profiles

Use these exact links wherever her website is listed, so analytics shows where visitors come from.
Replace the domain once a real one is bought.

| Where | Link |
|---|---|
| Google Business Profile | `https://gogo-thudi.vercel.app/?utm_source=google&utm_medium=organic&utm_campaign=gbp` |
| Facebook page | `https://gogo-thudi.vercel.app/?utm_source=facebook&utm_medium=social&utm_campaign=profile-link` |
| Instagram bio | `https://gogo-thudi.vercel.app/?utm_source=instagram&utm_medium=social&utm_campaign=profile-link` |
| TikTok bio | `https://gogo-thudi.vercel.app/?utm_source=tiktok&utm_medium=social&utm_campaign=profile-link` |
| SA Psychics profile | `https://gogo-thudi.vercel.app/?utm_source=sapsychics&utm_medium=directory&utm_campaign=profile` |
| Gogo Online profile | `https://gogo-thudi.vercel.app/?utm_source=gogoonline&utm_medium=directory&utm_campaign=profile` |
| WhatsApp status / broadcast | `https://gogo-thudi.vercel.app/?utm_source=whatsapp&utm_medium=social&utm_campaign=status` |

Rules: lowercase, no spaces, never put a client's name or number in a link.

---

## 6. Analytics (GA4)

1. Create a free Google Analytics 4 property at analytics.google.com. Copy the ID (starts with `G-`).
2. In Vercel, add an environment variable `VITE_GA_ID` with that ID, then redeploy. Tracking switches on.
3. In GA4, mark these as **key events**: `whatsapp_click`, `call_click`, `booking_form_submit`.
4. Register custom dimensions (event-scoped): `cta_location`, `service`, `session_type`.
5. Create a custom channel group so `directory` traffic (SA Psychics, Gogo Online) is not lumped into "Unassigned".
6. Exclude your own visits (define internal traffic) so testing does not count.

Events the site sends:

| Event | When | Useful parameters |
|---|---|---|
| `whatsapp_click` | Any WhatsApp button | `cta_location` (hero, mobile-bar, service-hero, services-grid, page-end ...), `service` |
| `call_click` | Any call button | same |
| `booking_form_start` | First tap in the booking form | |
| `booking_form_submit` and `generate_lead` | Form opens WhatsApp | `service`, `session_type` |
| `profile_click` | SA Psychics or Gogo Online link | `link_url` |
| `social_click` | Facebook, Instagram, TikTok link | `link_url` |

**Weekly check (same day each week, last full week):**
- Visits by source and by landing page
- WhatsApp + call clicks per page and per service
- Clicks divided by visits, phone vs desktop
- Which `cta_location` gets the most clicks (is the mobile bar doing the work?)
- Booking form starts vs submits
- Compare clicks with the bookings she actually got. Each WhatsApp message says which page it came from, so she can count those directly.

Clicks show intent, not confirmed bookings. Her real booking count is the number that matters.

---

## 7. Content plan

### Guides that need her own knowledge (briefs)

These are the questions people search. They need Gogo Thudi's own teaching to be genuine, so they
are not written yet. Record a voice note answering each, and it can be turned into a page.

| Guide | Questions to answer | Links to |
|---|---|---|
| What dreams mean in African spirituality | What does it mean to dream of a snake, water, a deceased relative, teeth falling out? When is a dream a message? | Dream interpretation |
| Signs of an ancestral calling (ubizo) | What signs does she see? How does she tell a calling from stress or illness? What happens next? | Purpose and ancestral calling |
| What happens in a bone reading | What are the bones? What does she see in them? What should a client expect? | Bone throwing |
| Sangoma vs inyanga vs prophet | What is the difference, and why is she all three? | Traditional medicine, Ancestral guidance |

Each guide: one question per heading, a direct 40 to 60 word answer first, then the detail.
No made-up statistics, no promised outcomes.

### Social (TikTok, Facebook, Instagram)

Every video should point back to a page on the site through the bio link.

- **Series ideas:**
  - Dream meanings: one symbol per video ("What does dreaming of a snake mean?")
  - "What happens in a bone reading"
  - Signs of an ancestral calling
  - The same answer in different languages (isiZulu, Sepedi, Setswana)
  - Her reading a client review aloud, with the client's permission
- **Format:**
  - Hook in the first 1 to 3 seconds
  - Text on screen, because most people watch with the sound off
  - Edited captions
  - 15 to 60 seconds
  - 3 to 5 specific hashtags
- **Say the key words out loud:** "traditional healer in Pretoria North", "bone reading", "dream meaning". Search, and AI tools, read the spoken words and captions.
- **Film 5 to 10 videos in one sitting**, then post through the week.
- **Cross-post to YouTube Shorts.** Google's AI answers often cite YouTube.
- **No result-led hooks** ("she brought my ex back in 3 days"). They read as scam content.

---

## 8. AI assistant visibility (ChatGPT, Perplexity, Google AI)

- Already done on the site: pages built in advance, answer-first sections, consistent facts, llms.txt, structured data, AI crawlers allowed.
- Every profile should describe her the same way (sections 2 and 4). AI tools trust consistency.
- **Monthly check (by hand, free):**
  - Ask ChatGPT, Perplexity and Google these questions:
    - "traditional healer in Pretoria North"
    - "sangoma in Pretoria who does video consultations"
    - "bone throwing Pretoria"
    - "how to find a genuine sangoma in South Africa"
  - Ask each one 3 times and note whether she is mentioned.
  - Keep a simple log.
- Submit the site to **Bing Webmaster Tools** too. ChatGPT search draws on Bing.

---

## 9. Domain

Buy her own domain (e.g. `gogothudi.co.za`, roughly R100 a year). Then:
1. Add it to the Vercel project (Settings, Domains).
2. Set the environment variable `VITE_SITE_URL` to the new address and redeploy. All canonical links, the sitemap and previews update.
3. Redirect the `.vercel.app` address to the new domain.
4. Update every link in sections 4 and 5.

Then submit `https://[domain]/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

---

## 10. Deliberately not done (and why)

| Common advice in those repos | Why not here |
|---|---|
| Suburb pages ("sangoma Soshanguve", "sangoma Akasia" ...) | Google treats them as doorway spam. One honest "areas served" section instead |
| Star ratings markup from the 291 reviews | Google does not show stars for reviews a business puts on its own site, and they come from SA Psychics. Risk of a penalty |
| Urgency and scarcity ("only 2 slots left") | Fake, and exactly how scam listings talk |
| "Agitate the pain" copywriting | Her visitors are grieving or distressed. Calm recognition works better and is kinder |
| Money-back guarantees, "results in 48 hours" | Not true, reads as a scam, and is an outcome promise |
| Exit popups, email capture, retargeting ads | Intrusive, and following visitors of a spiritual healer around the internet is a privacy problem |
| Removing the menu on landing pages | Wary visitors need About and Reviews to check she is real |
| Paid SEO tools | Not needed at this size. The monthly manual checks above are enough |
| Translated pages in other languages | Only with full, native-speaker translations. Thin translated pages hurt the whole site |
