import { graphql, useStaticQuery } from 'gatsby'

export type Site = {
  /**
   * @title 站点作者
   */
  author: string
  /**
   * @title 站点名称
   */
  title: string
  /**
   * @title 站点地址
   */
  siteUrl: string
  /**
   * @title 站点logo
   */
  logo: string
  /**
   * @title 站点描述
   */
  description: string
  /**
   * @title 站点feed地址
   */
  feedUrl: string
}



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
