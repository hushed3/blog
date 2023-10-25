import { graphql, useStaticQuery } from 'gatsby'
import { Site } from '@/config'

export const useSitedata = (): Site => {
  const { site } = useStaticQuery(
    graphql`
      query sitedata {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            logo
            feedUrl
          }
        }
      }
    `
  )

  return {
    title: site.siteMetadata.title,
    author: site.siteMetadata.author,
    siteUrl: site.siteMetadata.siteUrl,
    logo: site.siteMetadata.logo,
    description: site.siteMetadata.description,
    feedUrl: site.siteMetadata.feedUrl,
  }
}
