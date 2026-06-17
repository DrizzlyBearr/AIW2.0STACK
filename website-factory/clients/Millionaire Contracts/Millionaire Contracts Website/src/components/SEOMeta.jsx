import { Helmet } from 'react-helmet-async'

const SITE = 'https://millionairecontracts.com'
const DEFAULT_IMG = `${SITE}/og-image.png`

export default function SEOMeta({ title, description, path = '', schema = null, type = 'website', image = DEFAULT_IMG }) {
  const canonical = `${SITE}${path}`
  const fullTitle = title.includes('Millionaire Contracts') ? title : `${title} | Millionaire Contracts`

  // Sitewide BreadcrumbList. Skip the homepage and any page that already
  // supplies its own breadcrumb (e.g. case studies) to avoid duplicates.
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : []
  const hasOwnBreadcrumb = schemaList.some((s) => s && s['@type'] === 'BreadcrumbList')
  let breadcrumbSchema = null
  if (path && path !== '/' && path !== '/home' && !hasOwnBreadcrumb) {
    const crumbs = [{ name: 'Home', item: `${SITE}/home` }]
    if (type === 'article') crumbs.push({ name: 'Resources', item: `${SITE}/resources` })
    crumbs.push({ name: title, item: canonical })
    breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
    }
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Millionaire Contracts" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Sitewide breadcrumb schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}
