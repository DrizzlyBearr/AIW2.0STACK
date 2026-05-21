# 06 - SEO Landscape: Law Firm Local Search

Research date: 2026-05-21
Niche: Small to mid-size law firms (1-20 attorneys)
Focus: Personal injury, divorce, criminal defense -- the three highest-volume practice areas for small firm websites

---

## The Core Local SEO Reality

Legal SEO is the most competitive -- and most expensive -- industry segment in Google search. CPCs range from $70 to $500+ for top terms. However, organic rankings remain achievable for geographic-specific terms, and the Google Local Pack (3-pack) captures 42-46% of all clicks for local searches. For a small-to-mid-size firm in a non-major-metro market, organic + local pack is the primary growth lever. Paid ads are often unaffordable ($15k-$100k/month in competitive markets).

---

## Primary Keyword Cluster

High-volume terms a firm must rank for. These are city-modified in practice.

| Keyword | National Monthly Volume | Avg CPC | Notes |
|---|---|---|---|
| personal injury lawyer | 110,000 | $150-250 | Highest volume PI term |
| personal injury attorney | 74,000 | $130-220 | Synonym of above |
| car accident lawyer | 90,500 | $150-300 | Most common PI entry point |
| car accident attorney | 40,500 | $130-250 | Synonym |
| personal injury lawyer near me | 49,500 | $100-200 | High local intent |
| car accident lawyer near me | 33,100 | $100-180 | High local intent |
| divorce lawyer | 60,000+ | $50-150 | Family law primary |
| divorce attorney | 40,000+ | $50-150 | Synonym |
| divorce attorney near me | 25,000+ | $60-140 | High local intent |
| criminal defense lawyer | 30,000+ | $80-200 | Criminal primary |
| criminal defense attorney | 25,000+ | $80-200 | Synonym |
| DUI lawyer | 40,000+ | $100-250 | High-value criminal |
| DUI attorney near me | 20,000+ | $100-230 | Local high intent |
| law firm near me | 50,000+ | $40-100 | Catch-all local intent |
| best personal injury attorney | 15,000+ | $100-200 | Decision-stage |

Source: Google Keyword Planner estimates (via Matador Solutions, Rankings.io, On The Map research, 2025-2026)

---

## Secondary and Long-Tail Clusters

### Personal Injury Sub-Types (each 1,000-10,000 monthly searches nationally)
- brain injury lawyer -- 4,400/month
- spinal cord injury attorney -- 2,900/month
- construction accident lawyer -- 3,600/month
- drunk driving accident lawyer -- 2,400/month
- slip and fall lawyer -- 12,000/month
- truck accident attorney -- 18,000/month
- motorcycle accident lawyer -- 10,000/month
- wrongful death attorney -- 8,000/month
- medical malpractice lawyer -- 22,000/month

### Criminal Defense Sub-Types
- DUI attorney [city] -- varies by city, often 500-3,000/month
- drug charges lawyer -- 3,000-5,000/month nationally
- domestic violence attorney -- 5,000/month
- federal criminal defense lawyer -- 1,500/month
- expungement lawyer -- 8,000/month (growing)

### Family Law Sub-Types
- child custody lawyer -- 18,000/month
- family law attorney -- 30,000/month
- legal separation attorney -- 5,000/month
- alimony lawyer -- 6,000/month
- fathers rights attorney -- 4,000/month (niche but underserved)

### High-Converting Question Keywords (long-tail)
- "do I have a personal injury case" -- 1,200/month
- "how long does a personal injury case take" -- 3,000/month
- "how much does a divorce lawyer cost" -- 27,000/month
- "what happens after I'm arrested" -- 2,000/month
- "can I file a personal injury claim without a lawyer" -- 1,500/month

---

## Geographic Targeting Notes

Legal is hyper-local. A firm in Denver will not rank for "personal injury lawyer Los Angeles." Geographic strategy matters more here than in any other industry.

**City modifier pattern:** The dominant URL and content pattern is `[city]-[practice-area]-lawyer` or `[practice-area]-lawyer-[city]`.

- Example: `/denver-personal-injury-lawyer/` or `/personal-injury-lawyer-denver/`
- Both work; consistency within a domain matters more than which variant is chosen

**County and neighborhood modifiers:** For metro-area firms, sub-geographic targeting converts well.
- "personal injury lawyer [suburb]" -- lower volume, lower competition, faster ranking
- "car accident attorney [county]" -- useful for counties with distinct identity

**"Near me" terms:** These do not require separate pages. Google resolves "near me" to the user's actual location. Optimizing the Google Business Profile (proximity + relevance + prominence) handles "near me" traffic.

**Multi-city strategy for small firms:** One primary city page (optimized for the firm's primary market) plus 2-4 satellite city pages for surrounding communities. Do not create thin pages; each city page needs 700+ words of unique, locally relevant content.

---

## Title Tag and H1 Patterns of Top-Ranking Pages

From analysis of Google ranking pages for primary legal search terms:

**Personal injury attorney ranking page patterns:**
- Title: `Personal Injury Lawyer [City, State] | [Firm Name] | Free Consultation`
- Title: `[City] Personal Injury Attorney | [Firm Name] | No Fee Unless We Win`
- H1: `Personal Injury Lawyer in [City]`
- H1: `[City] Personal Injury Attorneys Fighting for You`
- H1: `Top Personal Injury Lawyers in [City, State]`

**Divorce attorney ranking page patterns:**
- Title: `Divorce Lawyer [City] | [Firm Name] | Free Consultation`
- Title: `[City] Divorce Attorney | Compassionate & Experienced Family Law Lawyers`
- H1: `Experienced Divorce Lawyer in [City]`
- H1: `[City] Divorce Attorneys Who Fight for Your Family`

**Criminal defense ranking page patterns:**
- Title: `Criminal Defense Lawyer [City] | [Firm Name] | 24/7 Defense`
- Title: `[City] Criminal Defense Attorney | Aggressive DUI & Felony Defense`
- H1: `[City] Criminal Defense Lawyer`
- H1: `Aggressive Criminal Defense Attorneys in [City, State]`

**Pattern insights:**
- Keyword in first 60 characters of title tag
- City always in title tag for local pages
- "Free consultation" or "No fee unless we win" in title tag lifts CTR from search results
- H1 is typically simpler -- just the keyword phrase plus city
- Title and H1 are never identical; title adds firm name and value prop

---

## Schema Markup Used by Ranking Law Firm Sites

From analysis of top-ranking attorney sites and legal SEO best practice research:

**Required schema types:**

1. **LegalService** (subtype of LocalBusiness)
   - Applied per practice area page and homepage
   - Properties: name, address, telephone, url, openingHours, areaServed, description, serviceType
   - This is the primary schema type that qualifies for Google local pack results and knowledge panel features

2. **Organization**
   - Applied at the site-wide level (homepage)
   - Properties: name, url, logo, contactPoint, sameAs (links to Google Business Profile, Avvo, Justia, etc.)

3. **Person / Attorney**
   - Applied on each attorney bio page
   - Properties: name, jobTitle, knowsAbout, alumniOf, memberOf, url
   - Signals E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness) to Google

4. **FAQPage**
   - Applied on practice area pages with FAQ sections
   - Qualifies for rich snippet display in search results (FAQ accordion shown directly in SERP)
   - High conversion: drives clicks by showing answers before the user even visits

5. **BreadcrumbList**
   - Applied on all inner pages
   - Helps Google understand site architecture

6. **Review / AggregateRating**
   - Applied where testimonials appear
   - Can display star ratings in search results if implemented correctly

**Implementation format:** JSON-LD only (Google's recommended format, placed in `<head>` of page)

---

## Content Gap Analysis

Based on what small-to-mid-size firm websites typically lack vs. what ranking sites have:

**Gap 1: Practice area sub-pages are thin or absent**
Most small firm sites have one "Personal Injury" page. Top-ranking sites have separate pages for car accidents, truck accidents, slip and fall, wrongful death, and each injury type. Each page targets a distinct keyword. This is the single largest SEO gap for small firms.

**Gap 2: FAQ content with FAQPage schema**
FAQ sections with structured data appear as rich snippets and increase CTR by 10-30% when properly implemented. Most small firm sites have no FAQ content at all.

**Gap 3: Local landmark / courthouse content**
Top-ranking local firms include references to specific local courthouses, judges (where ethically permitted), local accident statistics, and community context. Google rewards hyper-local relevance signals.

**Gap 4: Attorney bio depth**
A 3-sentence bio does not build E-E-A-T. Top-ranking sites have 500-800 word attorney bios covering education, bar admissions, case philosophy, notable results, and community involvement.

**Gap 5: Blog / resource content targeting question keywords**
"How long does a personal injury case take in [State]?" targets 3,000+ monthly searchers. A well-optimized blog post on this topic can capture top-of-funnel traffic that converts to consultations. Most small firm blogs are abandoned after 3 posts.

**Gap 6: Google Business Profile completeness**
Firms with complete GBP profiles (all categories, services, photos added weekly, Q&A answered, review response rate 100%) rank 42% higher in local pack than incomplete profiles. Most small firms have basic GBP setup only.
