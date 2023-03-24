import React from 'react'
import Helmet from 'react-helmet'
import { useBlogTheme } from '../../context/BlogThemeContext'

import favicon from '../../assets/image/logo.ico'

import BlogSvg from '../../assets/svg/blog.svg'
import GithubSvg from '../../assets/svg/github.svg'
import SunsetSvg from '../../assets/svg/sunset.svg'

import DarkIcon from '../../assets/svg/dark.svg'
import LightIcon from '../../assets/svg/light.svg'

import { HeaderA, HeaderContainer, HeaderLeft, HeaderLink, HeaderWrapper, ThemeToggle } from './style'

const mainHeaderItems = [
  // { url: '/me', icon: null, label: 'About', name: ' me ', show: true },
  { url: '/blog', icon: BlogSvg, label: 'Writing', name: ' Blog ', show: true },
  { url: '/sunset', icon: SunsetSvg, label: 'Sunset', name: 'Sunset', show: false },
]

const socialHeaderItems = [{ url: 'https://github.com/hushed3', icon: GithubSvg, label: 'GitHub' }]

export const Header = () => {
  const { theme, toggleTheme } = useBlogTheme()
  console.log(theme)

  const handleTheme = () => {
    toggleTheme()
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Helmet>
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <HeaderLeft>
          <HeaderLink to="/" className="J">
            <span>𝓙</span>
          </HeaderLink>
          {mainHeaderItems.map(
            (item) =>
              item.show && (
                <HeaderLink to={item.url} key={item.label}>
                  <span className="icon">
                    <item.icon />
                  </span>
                  <span className="label">{item.name}</span>
                </HeaderLink>
              )
          )}

          {socialHeaderItems.map((item) => (
            <HeaderA key={item.label} href={item.url} target="_blank" rel="noreferrer" to={''}>
              <item.icon />
            </HeaderA>
          ))}
        </HeaderLeft>

        <ThemeToggle>
          <span style={{ display: 'none' }}>{theme}</span>
          <button onClick={handleTheme}>{theme === 'light' ? <LightIcon /> : <DarkIcon />}</button>
        </ThemeToggle>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
