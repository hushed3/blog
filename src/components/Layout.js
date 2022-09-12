import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { useTheme } from '../utils/hooks/useTheme'
import { isBrowser } from '../utils/func'
import _ from 'lodash'

import favicon from '../assets/logo.png'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { BgParticles } from './BgParticles'

import '../styles/style.css'
import '../styles/custom.css'
import '../styles/new-moon.css'
import '../styles/image-card.less'

export const Layout = ({ children }) => {
  const osTheme = useTheme()
  const [theme, setTheme] = useState(osTheme)

  const onUpdateTheme = (Theme = theme) => {
    const newTheme = Theme === 'dark' ? 'light' : 'dark'
    globalThis.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const savedTheme = globalThis.localStorage.getItem('theme')

    if (savedTheme) {
      setTheme(savedTheme)
    }

    if (isBrowser()) {
      window?.matchMedia('(prefers-color-scheme: dark)').addEventListener(
        'change',
        _.throttle((e) => {
          if (e.matches) {
            onUpdateTheme('light')
          } else {
            onUpdateTheme('dark')
          }
        }, 150)
      )
    }
  }, [])

  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
        {theme === 'dark' && <link rel="stylesheet" type="text/css" href="/dark-mode.css" />}
      </Helmet>
      <BgParticles />
      <div id="layout" className="layout">
        <Navigation onUpdateTheme={onUpdateTheme} theme={theme} />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
