import React, { memo, useContext } from 'react'
import Helmet from 'react-helmet'

import favicon from '../../assets/logo.ico'
// import sunset from '../../assets/nav-sunset.png'
import BlogSvg from '../../assets/svg/blog.svg'
import DarkIcon from '../../assets/svg/dark.svg'
import GithubSvg from '../../assets/svg/github.svg'
import LightIcon from '../../assets/svg/light.svg'
import ThemeContext from '../../context/ThemeContext'
import { NavA, NavContainer, NavLeft, NavLink, NavRouter, NavSection, ThemeToggle } from './style'

const mainNavItems = [
  // { url: '/me', icon: blog, label: 'About', name: ' me ' },
  { url: '/blog', icon: BlogSvg, label: 'Writing', name: ' Blog ' },

  // { url: '/sunset', icon: sunset, label: 'Sunset', name: ' 夕 阳 ' },
]

const socialNavItems = [{ url: 'https://github.com/hushed3', icon: GithubSvg, label: 'GitHub' }]

export const Navigation = memo(function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext)

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
          {mainNavItems.map((item) => (
            <NavRouter key={item.label}>
              <NavLink to={item.url} className="NavLink">
                <span className="icon">
                  <item.icon />
                </span>
                <span className="label">{item.name}</span>
              </NavLink>
            </NavRouter>
          ))}

          {socialNavItems.map((item) => (
            <NavRouter key={item.label}>
              <NavA href={item.url} className="NavLink" target="_blank" rel="noreferrer" to={''}>
                <item.icon />
              </NavA>
            </NavRouter>
          ))}
        </NavLeft>

        <ThemeToggle>
          <button className="NavThemeButton" onClick={handleTheme}>
            {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
          </button>
        </ThemeToggle>
      </NavContainer>
    </NavSection>
  )
})
