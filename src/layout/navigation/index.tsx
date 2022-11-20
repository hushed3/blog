import React, { memo, useContext } from 'react'
import Helmet from 'react-helmet'

import favicon from '../../assets/logo.png'
import blog from '../../assets/nav-blog.png'
import github from '../../assets/nav-github.png'
import sunset from '../../assets/nav-sunset.png'
import DarkIcon from '../../assets/svg/dark.svg'
import LightIcon from '../../assets/svg/light.svg'
import LinkIcon from '../../assets/svg/link.svg'
import ThemeContext from '../../context/ThemeContext'
import { slugify } from '../../utils/helpers'
import { NavA, NavContainer, NavImage, NavLeft, NavLink, NavRouter, NavSection, ThemeToggle } from './style'

const mainNavItems = [
  // { url: '/me', icon: blog, label: 'About', name: ' me ' },
  { url: '/blog', icon: blog, label: 'Writing', name: ' 归 档 ' },
  { url: '/sunset', icon: sunset, label: 'Sunset', name: ' 夕 阳 ' },
]

const socialNavItems = [{ url: 'https://github.com/hushed3', icon: github, label: 'GitHub' }]

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
          <NavLink to="/" className="NavLink brand">
            <img src={favicon} className="logo" alt="Hush" />
            <span>Hush</span>
          </NavLink>
          {mainNavItems.map((item) => (
            <NavRouter key={item.label}>
              <NavImage src={item.icon} alt={item.label} />
              <NavLink to={item.url} className={`NavLink ${slugify(item.label)}`} activeClassName="active">
                <span>{item.name}</span>
              </NavLink>
            </NavRouter>
          ))}

          {socialNavItems.map((item) => (
            <NavRouter key={item.label}>
              <NavImage src={item.icon} alt={item.label} />
              <NavA
                href={item.url}
                className={`NavLink ${slugify(item.label)}`}
                target="_blank"
                rel="noreferrer"
                to={''}
              >
                <span>{item.label}</span>
                <LinkIcon />
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
