import React from 'react'

import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { BgParticles } from './BgParticles'

import useTheme from '../utils/hooks/useTheme'
import { GlobalContext } from '../utils/context.js'

import '../styles/style.css'
import '../styles/dark-mode.css'
import '../styles/custom.css'
import '../styles/new-moon.css'
import '../styles/image-card.less'

export const Layout = ({ children }) => {
  console.log('Layout')
  const [theme, setTheme] = useTheme()

  const contextValue = { theme, setTheme }
  console.log('contextValue', contextValue)

  return (
    <>
      <BgParticles />
      <GlobalContext.Provider value={contextValue}>
        <div id="layout" className="layout">
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </>
  )
}
