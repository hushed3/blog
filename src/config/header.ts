import MeSvg from '@/assets/svg/me.svg'
import BlogSvg from '@/assets/svg/blog.svg'
import GithubSvg from '@/assets/svg/github.svg'
import SunsetSvg from '@/assets/svg/sunset.svg'
import WorldSvg from '@/assets/svg/world.svg'

/**
 * @description 导航栏menu
 * @date 10/08/2023
 */
export const headerMenuList: Array<MenuItem> = [
  { url: '/me', icon: MeSvg, label: 'Me', show: true },
  { url: '/blog', icon: BlogSvg, label: ' Blog ', show: true },
  { url: '/sunset', icon: SunsetSvg, label: 'Sunset', show: false },
  { url: '/maps', icon: WorldSvg, label: 'Map', show: false },
]

/**
 * @description 导航栏外链
 * @date 10/08/2023
 */
export const headerSocialList: Array<MenuItem> = [
  { url: 'https://github.com/hushed3', icon: GithubSvg, label: 'GitHub', show: true },
]
