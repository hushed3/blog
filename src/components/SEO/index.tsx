import React from 'react'
import Helmet from 'react-helmet'

import { useSiteStore } from '@/store'

interface Props {
  articleNode?: any | null
  articlePath?: string | null
  articleSEO?: boolean
  customDescription?: string
  helmetTitle?: string
}

export const SEO = ({ articleNode, articlePath, articleSEO, customDescription, helmetTitle }: Props) => {
  const siteData = useSiteStore((state) => state.siteData)

  const HelmetTitle = helmetTitle ? `${helmetTitle} | ${siteData.siteTitle}` : siteData.siteTitle

  let title
  let description
  let image = siteData.siteLogo
  let articleURL

  if (articleSEO) {
    const articleMeta = articleNode?.frontmatter
    title = articleMeta?.title
    description = articleNode?.excerpt

    if (articleMeta?.thumbnail) {
      image = articleMeta?.thumbnail?.childImageSharp?.gatsbyImageData.images.fallback.src
    }

    articleURL = `${siteData.siteUrl}${articlePath}`
  } else {
    title = siteData.siteTitle
    description = customDescription || siteData.siteDescription
  }

  image = `${siteData.siteUrl}${image}`

  const schemaOrgJSONLD: any[] = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteData.siteUrl,
      name: title,
      alternateName: title!,
    },
  ]

  if (articleSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': articleURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: siteData.siteUrl,
        name: title,
        alternateName: title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      }
    )
  }

  return (
    <>
      <Helmet title={HelmetTitle}>
        <link rel="shortcut iconnnnnnnnnnnn" type="image/png" />
        <meta name="description" content={description as string} />
        <meta name="image" content={image} />

        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        <meta property="og:url" content={articleSEO ? articleURL : siteData.siteUrl} />
        {articleSEO && <meta property="og:type" content="article" />}
        <meta property="og:title" content={title as string} />
        <meta property="og:description" content={description as string} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title as string} />
        <meta name="twitter:description" content={description as string} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </>
  )
}
