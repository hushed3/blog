import { themes } from 'prism-react-renderer'
import packageJson from '@/../package.json'
import MeSvg from '@/assets/svg/me.svg'
import BlogSvg from '@/assets/svg/blog.svg'
import GithubSvg from '@/assets/svg/github.svg'
import SunsetSvg from '@/assets/svg/sunset.svg'
import WorldSvg from '@/assets/svg/world.svg'

import gatsby from '@/assets/image/gatsby.png'
import github from '@/assets/image/github.png'
import SiteConfig from './type'

const siteConfig: SiteConfig = {
  site: {
    title: packageJson.name,
    author: packageJson.author,
    description: packageJson.description,
    siteUrl: packageJson.homepage,
    feedUrl: `${packageJson.homepage}/rss.xml`,
    logo: `${packageJson.homepage}/logo.png`,
    version: packageJson.version,
  },
  themes: {
    brandColor: '#565EFF',
    light: {
      backgroundColor: '#f9f9fa',
      cardBackgroundColor: '#ffffff',
      codeHighlight: themes.oneLight,
    },
    dark: {
      backgroundColor: '#111113',
      cardBackgroundColor: '#212121',
      codeHighlight: themes.oneDark,
    },
  },
  headers: {
    menu: [
      { url: '/me', label: 'Me', icon: MeSvg, show: true },
      { url: '/archive', label: 'Archive', icon: BlogSvg, show: true },
      { url: '/sunset', label: 'Sunset', icon: SunsetSvg, show: false },
      { url: '/maps', label: 'Map', icon: WorldSvg, show: false },
    ],
    social: [{ url: 'https://github.com/hushed3', label: 'GitHub', icon: GithubSvg, show: true }],
  },
  footers: {
    menu: [
      { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby, show: true },
      { url: 'https://github.com/hushed3', label: 'GitHub', icon: github, show: true },
    ],
    friend: [],
    ICPRecord: '蜀ICP备2022009836号',
  },
}

export default siteConfig
