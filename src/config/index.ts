import { themes } from 'prism-react-renderer'
import GithubSvg from '@/assets/svg/github.svg'

import gatsby from '@/assets/image/gatsby.png'
import github from '@/assets/image/github.png'
import SiteConfig from './type'

const siteConfig: SiteConfig = {
  themes: {
    brandColor: '#5566FF',
    light: {
      backgroundColor: '#ffffff',
      cardBackgroundColor: '#f9f9fa',
      codeHighlight: themes.oneLight,
    },
    dark: {
      backgroundColor: '#0f0f11',
      cardBackgroundColor: '#1d1d1e',
      codeHighlight: themes.oneDark,
    },
  },
  headers: {
    menu: [
      { url: '/about', label: 'About', show: true },
      { url: '/archive', label: 'Archive', show: true },
      { url: '/sunset', label: 'Sunset', show: false },
      { url: '/maps', label: 'Map', show: false },
    ],
    social: [{ url: 'https://github.com/jiohon', label: 'GitHub', icon: GithubSvg, show: true }],
  },
  footers: {
    menu: [
      { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby, show: true },
      { url: 'https://github.com/jiohon', label: 'GitHub', icon: github, show: true },
    ],
    friend: [],
    ICPRecord: '蜀ICP备2022009836号',
  },
}

export default siteConfig
