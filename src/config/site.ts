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

export const site: Site = {
  title: `Hush blog`,
  description: `Web front-end development engineer.`,
  author: 'J',
  siteUrl: `https://blog.hushes.cn`,
  feedUrl: 'https://blog.hushes.cn/rss.xml',
  logo: 'https://blog.hushes.cn/logo.png',
}
