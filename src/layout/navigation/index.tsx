import React, { memo } from 'react'
import Helmet from 'react-helmet'
import { useBlogTheme } from '../../context/BlogThemeContext'

import favicon from '../../assets/image/logo.ico'

import BlogSvg from '../../assets/svg/blog.svg'
import GithubSvg from '../../assets/svg/github.svg'
import SunsetSvg from '../../assets/svg/sunset.svg'

import DarkIcon from '../../assets/svg/dark.svg'
import LightIcon from '../../assets/svg/light.svg'

import { NavA, NavContainer, NavLeft, NavLink, NavRouter, NavSection, ThemeToggle } from './style'

const mainNavItems = [
  // { url: '/me', icon: null, label: 'About', name: ' me ', show: true },
  { url: '/blog', icon: BlogSvg, label: 'Writing', name: ' Blog ', show: true },
  { url: '/sunset', icon: SunsetSvg, label: 'Sunset', name: 'Sunset', show: false },
]

const socialNavItems = [{ url: 'https://github.com/hushed3', icon: GithubSvg, label: 'GitHub' }]

export const Navigation = memo(function Navigation() {
  const { theme, toggleTheme } = useBlogTheme()

  const handleTheme = () => {
    toggleTheme()
  }

  return (
    <NavSection className="NavSection">
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <NavContainer>
        <NavLeft>
          <NavLink to="/" className="NavLink J">
            <span>𝓙</span>
          </NavLink>
          {mainNavItems.map(
            (item) =>
              item.show && (
                <NavRouter key={item.label}>
                  <NavLink to={item.url} className="NavLink">
                    <span className="icon">
                      <item.icon />
                    </span>
                    <span className="label">{item.name}</span>
                  </NavLink>
                </NavRouter>
              )
          )}

          {socialNavItems.map((item) => (
            <NavRouter key={item.label}>
              <NavA href={item.url} className="NavLink" target="_blank" rel="noreferrer" to={''}>
                <item.icon />
              </NavA>
            </NavRouter>
          ))}
        </NavLeft>

        <ThemeToggle>
          <span style={{ display: 'none' }}>{theme}</span>
          <button onClick={handleTheme}>{theme === 'dark' ? <DarkIcon /> : <LightIcon />}</button>
        </ThemeToggle>
      </NavContainer>
    </NavSection>
  )
})
