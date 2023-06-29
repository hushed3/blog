import { SiteData } from '@/store'
import { graphql, useStaticQuery } from 'gatsby'

export const useSitedata = (): SiteData => {
  const { site } = useStaticQuery(
    graphql`
      query sitedata {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
            }
            logo
            feedUrl
          }
        }
      }
    `
  )

  return {
    siteTitle: site.siteMetadata.title,
    siteAuthor: site.siteMetadata.author.name,
    siteUrl: site.siteMetadata.siteUrl,
    siteLogo: site.siteMetadata.logo,
    siteDescription: site.siteMetadata.description,
    siteFeedUrl: site.siteMetadata.feedUrl,
  }
}
