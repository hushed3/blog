import { graphql } from 'gatsby'
import { useSiteStore } from '@/store'
import favicon from '../../../static/logo.ico'
import { ReactNode } from 'react'

interface SEOProps {
  title?: string
  description?: string
  pathName?: string
  children?: ReactNode
}

const SEO: React.FC<SEOProps> = ({ title, description, pathName, children }) => {
  const siteData = useSiteStore((state) => state.siteData)

  const seo = {
    title: title ? `${title} | ${siteData.title}` : siteData.title,
    description: description ? description : siteData.description,
    image: `${siteData.siteUrl}${siteData.logo}`,
    url: `${siteData.siteUrl}/${pathName}`,
  }

  const schemaOrgJSONLD: any[] = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteData.siteUrl,
      name: seo.title,
      alternateName: seo.title,
    },
  ]

  if (pathName) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': seo.url,
              name: seo.title,
              image: seo.image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: siteData.siteUrl,
        name: seo.title,
        alternateName: seo.title,
        headline: seo.title,
        image: {
          '@type': 'ImageObject',
          url: seo.image,
        },
        description: seo.description,
      }
    )
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="creator" content={siteData.author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="webSite" />
      <meta property="og:see_also" content="https://github.com/hushed3" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="shortcut icon" type="image/png" href={favicon} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      {children}
    </>
  )
}

export default SEO
