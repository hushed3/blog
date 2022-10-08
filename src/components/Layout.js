import React from 'react'

import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { BgParticles } from './BgParticles'

import useTheme from '../utils/hooks/useTheme'
import { GlobalContext } from '../utils/context'

import '../styles/style.css'
import '../styles/custom.css'
import '../styles/new-moon.css'
import '../styles/image-card.less'

export const Layout = ({ children }) => {
  const [theme, setTheme] = useTheme()

  const contextValue = { theme, setTheme }

  return (
    <>
      <GlobalContext.Provider value={contextValue}>
        <BgParticles />
        <div id="layout" className="layout">
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </>
  )
}
