interface Config {
  /**
   * @title 站点作者
   */
  siteAuthor: string
  /**
   * @title 站点名称
   */
  siteTitle: string
  /**
   * @title 站点地址
   */
  siteUrl: string
  /**
   * @title 站点logo
   */
  siteLogo: string
  /**
   * @title 站点描述
   */
  description: string
  /**
   * @title 站点feed地址
   */
  siteFeedUrl: string
}

const config: Config = {
  siteAuthor: 'J',
  siteTitle: 'Hush blog',
  siteUrl: 'https://blog.hushes.cn',
  siteLogo: '../assets/image/logo.ico',
  description: 'Software engineer and open source creator. ',
  siteFeedUrl: 'https://blog.hushes.cn/rss.xml',
}

export default config
