import React from 'react'
import Helmet from 'react-helmet'

import { useSiteStore } from '../../store'

interface Props {
  postNode?: any | null
  postPath?: string | null
  postSEO?: boolean
  customDescription?: string
  helmetTitle?: string
}

export const SEO = ({ postNode, postPath, postSEO, customDescription, helmetTitle }: Props) => {
  const siteData = useSiteStore((state) => state.siteData)

  const HelmetTitle = helmetTitle ? `${helmetTitle} | ${siteData.siteTitle}` : siteData.siteTitle

  let title
  let description
  let image = siteData.siteLogo
  let postURL

  if (postSEO) {
    const postMeta = postNode?.frontmatter
    title = postMeta?.title
    description = postNode?.excerpt

    if (postMeta?.thumbnail) {
      image = postMeta?.thumbnail?.childImageSharp?.gatsbyImageData.images.fallback.src
    }

    postURL = `${siteData.siteUrl}${postPath}`
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

  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
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

        <meta property="og:url" content={postSEO ? postURL : siteData.siteUrl} />
        {postSEO && <meta property="og:type" content="article" />}
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
