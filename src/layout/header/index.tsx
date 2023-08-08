import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import favicon from '@/assets/image/logo.ico'
import BlogSvg from '@/assets/svg/blog.svg'
import GithubSvg from '@/assets/svg/github.svg'
import SunsetSvg from '@/assets/svg/sunset.svg'

import { useStyles } from './style'

import ThemeSwitch from '@/components/ThemeSwitch'

const mainHeaderItems = [
  // { url: '/me', icon: null, label: 'About', name: ' me ', show: true },
  { url: '/blog', icon: BlogSvg, label: 'Writing', name: ' Blog ', show: true },
  { url: '/sunset', icon: SunsetSvg, label: 'Sunset', name: 'Sunset', show: false },
  { url: '/map', icon: SunsetSvg, label: 'Map', name: 'Map', show: true },
]

const socialHeaderItems = [{ url: 'https://github.com/hushed3', icon: GithubSvg, label: 'GitHub' }]

export const Header = () => {
  const { styles } = useStyles()

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.navigations}>
            <Link to="/" className={styles.navigationLink}>
              <span className="logo">𝓙</span>
            </Link>
            {mainHeaderItems.map(
              (item) =>
                item.show && (
                  <Link className={styles.navigationLink} to={item.url} key={item.label}>
                    <span className="icon">
                      <item.icon />
                    </span>
                    <span className="label">{item.name}</span>
                  </Link>
                )
            )}

            {socialHeaderItems.map((item) => (
              <a className={styles.navigationLink} key={item.label} href={item.url} target="_blank" rel="noreferrer">
                <item.icon />
              </a>
            ))}
          </div>

          <ThemeSwitch />
        </div>
      </header>
    </>
  )
}
