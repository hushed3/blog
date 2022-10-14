import React from 'react'
import Helmet from 'react-helmet'
import { MarkdownRemark } from '../typings/graphql-type'

import config from '../utils/config'

interface Props {
  postNode?: MarkdownRemark
  postPath?: string
  postSEO?: boolean
  customDescription?: string
}

export const SEO = ({ postNode, postPath, postSEO, customDescription }: Props) => {
  let title
  let description
  let image = config.siteLogo
  let postURL

  if (postSEO) {
    const postMeta = postNode?.frontmatter
    title = postMeta?.title
    description = postNode?.excerpt

    if (postMeta?.thumbnail) {
      image = postMeta?.thumbnail?.childImageSharp?.fixed?.src!
    }

    postURL = `${config.siteUrl}${postPath}`
  } else {
    title = config.siteTitle
    description = customDescription || config.description
  }

  image = `${config.siteUrl}${image}`
  const schemaOrgJSONLD: any[] = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
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
        url: config.siteUrl,
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
    <Helmet>
      <meta name="description" content={description as string} />
      <meta name="image" content={image} />

      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      <meta property="og:url" content={postSEO ? postURL : config.siteUrl} />
      {postSEO && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title as string} />
      <meta property="og:description" content={description as string} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title as string} />
      <meta name="twitter:description" content={description as string} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
