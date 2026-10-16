// Everything search engines and AI assistants read in the page head: titles, descriptions,
// canonical links, social previews and structured data. Written into each page at build time.
//
// Deliberately left out: AggregateRating/Review markup. Google does not show stars for reviews
// a business puts on its own site, and the reviews come from SA Psychics, so marking them up
// would break Google's review snippet rules.

import { business, socials, areasServed } from './content'
import { servicePageBySlug, servicePages } from './servicePages'
import { guideBySlug, guides } from './guides'
import { routes, servicePath, guidePath } from './routes'
import { SITE_URL, GA_ID, LAST_UPDATED, absoluteUrl } from './site'

const BUSINESS_ID = `${SITE_URL}/#business`
const PERSON_ID = `${SITE_URL}/#gogo-thudi`
const WEBSITE_ID = `${SITE_URL}/#website`
const OG_IMAGE = absoluteUrl('/og-image.jpg')
const PHOTO = absoluteUrl('/gogo-thudi.jpg')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const sameAs = [
  ...socials.filter((s) => !s.unconfirmed).map((s) => s.url),
  business.saPsychicsUrl,
  business.gogoOnlineUrl,
]

const businessNode = {
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: business.name,
  description: `${business.tagline} in ${business.area}. Bone throwing, ancestral guidance, mediumship, spiritual cleansing, dream interpretation and traditional medicine, in person or by video call.`,
  url: absoluteUrl('/'),
  telephone: '+27826844789',
  email: business.email,
  image: PHOTO,
  priceRange: `${business.fees.inPerson} to ${business.fees.virtual}`,
  currenciesAccepted: 'ZAR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1000 Rama City',
    addressLocality: 'Pretoria North',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  areaServed: areasServed.map((name) => ({ '@type': 'Place', name })),
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Saturday'], opens: '08:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
  ],
  knowsLanguage: ['zu', 'xh', 'en', 'st', 'tn', 'nso'],
  founder: { '@id': PERSON_ID },
  sameAs,
}

const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: business.name,
  image: PHOTO,
  jobTitle: business.tagline,
  description: business.bio,
  worksFor: { '@id': BUSINESS_ID },
  knowsAbout: ['Bone throwing', 'Divination', 'Mediumship', 'Ancestral guidance', 'Prophecy', 'Spiritual cleansing', 'Water healing', 'Dream interpretation', 'Traditional medicine'],
  knowsLanguage: ['zu', 'xh', 'en', 'st', 'tn', 'nso'],
  sameAs,
}

function breadcrumb(url, crumbs) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
  }
}

function webPage(url, title, description, type = 'WebPage', extra = {}) {
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    inLanguage: 'en-ZA',
    dateModified: LAST_UPDATED,
    ...extra,
  }
}

// Title, description and structured data for one route.
function pageMeta(route) {
  const url = absoluteUrl(route.path)
  const site = { '@type': 'WebSite', '@id': WEBSITE_ID, url: absoluteUrl('/'), name: business.name, publisher: { '@id': BUSINESS_ID }, inLanguage: 'en-ZA' }

  if (route.page === 'home') {
    const title = 'Gogo Thudi | Traditional Healer and Sangoma in Pretoria North'
    const description = `Traditional healer, medium and prophet in Pretoria North. Bone throwing, ancestral guidance and cleansing. ${business.rating.average} from ${business.rating.count} reviews. R400 in person, R450 by video.`
    return { title, description, url, graph: [site, businessNode, personNode, webPage(url, title, description)] }
  }

  if (route.page === 'services') {
    const title = 'Traditional Healing Services in Pretoria North | Gogo Thudi'
    const description = 'Bone throwing, mediumship, spiritual cleansing, dream interpretation, relationship guidance and traditional medicine with Gogo Thudi. R400 in person, R450 by video.'
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]
    const list = {
      '@type': 'ItemList',
      itemListElement: servicePages.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.navTitle, url: absoluteUrl(servicePath(p)) })),
    }
    return { title, description, url, graph: [site, businessNode, personNode, webPage(url, title, description, 'CollectionPage', { breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: list }), breadcrumb(url, crumbs)] }
  }

  if (route.page === 'service') {
    const p = servicePageBySlug[route.slug]
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: p.navTitle, path: route.path }]
    const service = {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: p.navTitle,
      serviceType: p.navTitle,
      description: p.answer,
      provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'City', name: 'Pretoria' },
      availableChannel: { '@type': 'ServiceChannel', servicePhone: '+27826844789', serviceLocation: { '@id': BUSINESS_ID } },
      offers: [
        { '@type': 'Offer', name: 'In-person consultation', price: '400', priceCurrency: 'ZAR', url },
        { '@type': 'Offer', name: 'Video call consultation', price: '450', priceCurrency: 'ZAR', url },
      ],
    }
    return {
      title: p.seoTitle,
      description: p.metaDescription,
      url,
      graph: [businessNode, personNode, webPage(url, p.seoTitle, p.metaDescription, 'WebPage', { breadcrumb: { '@id': `${url}#breadcrumb` }, mainEntity: { '@id': `${url}#service` } }), service, breadcrumb(url, crumbs)],
    }
  }

  if (route.page === 'reviews') {
    const title = `Gogo Thudi Reviews: ${business.rating.count} Client Reviews | Pretoria North`
    const description = `Read all ${business.rating.count} client reviews of Gogo Thudi from SA Psychics, ${business.rating.fiveStar} of them five stars, grouped by topic. Traditional healer in Pretoria North.`
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews' }]
    return { title, description, url, graph: [businessNode, personNode, webPage(url, title, description, 'WebPage', { breadcrumb: { '@id': `${url}#breadcrumb` } }), breadcrumb(url, crumbs)] }
  }

  if (route.page === 'guide') {
    const g = guideBySlug[route.slug]
    const crumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: g.navTitle, path: route.path }]
    const article = {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: g.h1,
      description: g.metaDescription,
      author: { '@id': PERSON_ID },
      publisher: { '@id': BUSINESS_ID },
      datePublished: g.published,
      dateModified: g.updated,
      image: OG_IMAGE,
      mainEntityOfPage: { '@id': `${url}#webpage` },
    }
    return { title: g.seoTitle, description: g.metaDescription, url, graph: [businessNode, personNode, webPage(url, g.seoTitle, g.metaDescription, 'WebPage', { breadcrumb: { '@id': `${url}#breadcrumb` } }), article, breadcrumb(url, crumbs)] }
  }

  return { title: 'Page not found | Gogo Thudi', description: 'This page does not exist. Find Gogo Thudi’s services, reviews and booking details here.', url, graph: null, noindex: true }
}

const analytics = () =>
  GA_ID
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');</script>`
    : ''

export function headFor(route) {
  const m = pageMeta(route)
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${m.url}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="en_ZA" />',
    `<meta property="og:site_name" content="${esc(business.name)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${m.url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
  ]
  if (route.page === 'home') tags.push('<link rel="preload" as="image" href="/gogo-thudi.webp" type="image/webp" fetchpriority="high" />')
  if (m.graph) tags.push(`<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': m.graph })}</script>`)
  const ga = analytics()
  if (ga) tags.push(ga)
  return tags.join('\n    ')
}

export function sitemapXml() {
  const urls = routes
    .map((r) => `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${LAST_UPDATED}</lastmod>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

// Search and AI assistant crawlers are all allowed, so she can be found and cited.
export function robotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`
}

// A plain summary for AI assistants (llmstxt.org format). Optional: Google does not need it.
export function llmsTxt() {
  const line = (title, path, desc) => `- [${title}](${absoluteUrl(path)}): ${desc}`
  return [
    `# ${business.name}`,
    '',
    `> ${business.name} is a traditional healer, medium and prophet (sangoma and inyanga) in ${business.area}, Tshwane, South Africa, with ${business.yearsPractising} years of experience. She offers bone throwing, ancestral guidance, mediumship, spiritual cleansing, dream interpretation and traditional medicine, in person or by video call.`,
    '',
    '## Key facts',
    '',
    `- Address: ${business.address}, Gauteng, South Africa`,
    `- Phone and WhatsApp: +27 82 684 4789`,
    `- Consultation fee: ${business.fees.inPerson} in person, ${business.fees.virtual} by video call`,
    `- Languages: ${business.languages.join(', ')}`,
    `- Hours: Monday to Wednesday and Saturday 08:00 to 19:00, Thursday and Friday 08:00 to 20:00, closed Sunday`,
    `- Reviews: ${business.rating.count} client reviews averaging ${business.rating.average} on SA Psychics, where she is a Premier Advisor (${business.saPsychicsUrl})`,
    `- Verified healer on Gogo Online (${business.gogoOnlineUrl})`,
    '',
    '## Services',
    '',
    ...servicePages.map((p) => line(p.navTitle, servicePath(p), p.metaDescription)),
    '',
    '## Guides',
    '',
    ...guides.map((g) => line(g.navTitle, guidePath(g), g.metaDescription)),
    '',
    '## Reviews and booking',
    '',
    line('Client reviews', '/reviews', `All ${business.rating.count} reviews from SA Psychics, grouped by topic`),
    line('Book a consultation', '/#book', 'Book by WhatsApp or phone on 082 684 4789'),
    '',
  ].join('\n')
}
