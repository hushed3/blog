import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import ThemeContext from '../../context/ThemeContext'

import favicon from '../../assets/logo.png'
import blog from '../../assets/nav-blog.png'
import github from '../../assets/nav-github.png'
import sunset from '../../assets/nav-sunset.png'
import DarkIcon from '../../assets/svg/dark.svg'
import LightIcon from '../../assets/svg/light.svg'
import LinkIcon from '../../assets/svg/link.svg'
import { slugify } from '../../utils/helpers'
import { Nav, NavContainer, NavImage, NavItemRouter, NavLink, Section, ThemeToggle } from './style'

const mainNavItems = [
  // { url: '/me', icon: blog, label: 'About', name: ' me ' },
  { url: '/blog', icon: blog, label: 'Writing', name: ' 归 档 ' },
  { url: '/sunset', icon: sunset, label: 'Sunset', name: ' 夕 阳 ' },
]

const socialNavItems = [{ url: 'https://github.com/hushed3', icon: github, label: 'GitHub' }]

export const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Section>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <NavContainer>
        <Nav>
          <NavLink to="/" className="brand">
            <img src={favicon} className="logo" alt="Hush" />
            <span>Hush</span>
          </NavLink>
          {mainNavItems.map((item) => (
            <NavItemRouter key={item.label}>
              <NavImage src={item.icon} alt={item.label} />
              <NavLink to={item.url} className={`${slugify(item.label)}`} activeClassName="active">
                <span>{item.name}</span>
              </NavLink>
            </NavItemRouter>
          ))}

          {socialNavItems.map((item) => (
            <NavItemRouter key={item.label}>
              <NavImage src={item.icon} alt={item.label} />
              <NavLink as="a" href={item.url} className={`${slugify(item.label)}`} target="_blank" rel="noreferrer">
                <span>{item.label}</span>
                <LinkIcon />
              </NavLink>
            </NavItemRouter>
          ))}
        </Nav>

        <ThemeToggle>
          <button onClick={handleTheme}>
            <div style={{ display: 'none' }}>{theme === 'dark' ? 'dark' : 'light'}</div>
            {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
          </button>
        </ThemeToggle>
      </NavContainer>
    </Section>
  )
}
