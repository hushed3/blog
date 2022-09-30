import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import useTheme from '../utils/hooks/useTheme'

import { ExternalLinkIcon } from '../assets/ExternalLinkIcon'
import blog from '../assets/nav-blog.png'
import floppyLogo from '../assets/logo.png'
import github from '../assets/nav-github.png'
import projects from '../assets/nav-projects.png'
import { slugify } from '../utils/helpers'
import dark from '../assets/svg/dark.svg'
import light from '../assets/svg/light.svg'

const mainNavItems = [
  // { url: '/me', icon: floppy, label: 'About me' },
  { url: '/blog', icon: blog, label: 'Writing', name: ' 归 档 ' },
  { url: '/sunset', icon: projects, label: 'Projects', name: ' 夕 阳 ' },
  // { url: '/projects', icon: projects, label: 'Projects' },
]

const socialNavItems = [{ url: 'https://github.com/hushed3', icon: github, label: 'GitHub' }]

export const Navigation = () => {
  const [theme, setTheme] = useTheme()

  const handleTheme = () => {
    setTheme()
  }

  return (
    <section className="navigation">
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={floppyLogo} />
        {theme === 'dark' && <link rel="stylesheet" type="text/css" href="/dark-mode.css" />}
      </Helmet>
      <div className="container">
        <nav>
          <Link to="/" className="item brand">
            <img src={floppyLogo} className="logo" alt="Hush" />
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
            {theme === 'dark' ? <img src={dark} alt="Theme" /> : <img src={light} alt="Theme" />}
          </button>
        </div>
      </div>
    </section>
  )
}
