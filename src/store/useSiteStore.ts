import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface SiteData {
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
  siteDescription: string
  /**
   * @title 站点feed地址
   */
  siteFeedUrl: string
}

export interface SiteStore {
  siteData: SiteData
}

const initialState: SiteStore = {
  siteData: {
    siteAuthor: '',
    siteTitle: '',
    siteUrl: '',
    siteLogo: '',
    siteDescription: '',
    siteFeedUrl: '',
  },
}

export const useSiteStore = create<SiteStore>()(
  devtools(
    () => ({
      ...initialState,
    }),
    { name: 'SITE_DATA' }
  )
)
