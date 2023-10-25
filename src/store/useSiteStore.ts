import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Site } from '@/config'

export interface SiteStore {
  siteData: Site
}

const initialState: SiteStore = {
  siteData: {
    author: '',
    title: '',
    url: '',
    logo: '',
    description: '',
    feedUrl: '',
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
