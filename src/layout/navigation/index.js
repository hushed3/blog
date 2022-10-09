import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import ThemeContext from '/src/context/ThemeContext'

import { ExternalLinkIcon } from '/src/assets/ExternalLinkIcon'
import blog from '/src/assets/nav-blog.png'
import favicon from '/src/assets/logo.png'
import github from '/src/assets/nav-github.png'
import projects from '/src/assets/nav-projects.png'
import { slugify } from '/src/utils/helpers'
import dark from '/src/assets/svg/dark.svg'
import light from '/src/assets/svg/light.svg'

const mainNavItems = [
  // { url: '/me', icon: floppy, label: 'About me' },
  { url: '/blog', icon: blog, label: 'Writing', name: ' 归 档 ' },
  { url: '/sunset', icon: projects, label: 'Projects', name: ' 夕 阳 ' },
  // { url: '/projects', icon: projects, label: 'Projects' },
]

const socialNavItems = [{ url: 'https://github.com/hushed3', icon: github, label: 'GitHub' }]

export const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleTheme = () => {
    setTheme()
  }

  useEffect(() => {
    console.log('theme', theme)
  }, [theme])

  return (
    <section className="navigation">
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <div className="container">
        <nav>
          <Link to="/" className="item brand">
            <img src={favicon} className="logo" alt="Hush" />
            <span>Hush</span>
          </Link>
          {mainNavItems.map((item) => (
            <div className="nav-item-outer" key={item.label}>
              <img src={item.icon} alt={item.label} className="nav-image" />
              <Link to={item.url} activeClassName="active" className={`item ${slugify(item.label)}`}>
                <span>{item.name}</span>
              </Link>
            </div>
          ))}

          {socialNavItems.map((item) => (
            <div className="nav-item-outer" key={item.label}>
              <img src={item.icon} alt={item.label} className="nav-image" />
              <a
                href={item.url}
                className={`desktop-only item ${slugify(item.label)}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.label}</span>
                <ExternalLinkIcon />
              </a>
            </div>
          ))}
        </nav>
        <div className="theme-toggle">
          <button onClick={handleTheme}>
            <div style={{ display: 'none' }}>{theme === 'dark' ? 'dark' : 'light'}</div>
            <img src={theme === 'dark' ? dark : light} alt="theme" key={theme} />
          </button>
        </div>
      </div>
    </section>
  )
}
