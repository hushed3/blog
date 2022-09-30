import React from 'react'

import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { BgParticles } from './BgParticles'

import '../styles/style.css'
import '../styles/custom.css'
import '../styles/new-moon.css'
import '../styles/image-card.less'

export const Layout = ({ children }) => {
  return (
    <>
      <BgParticles />
      <div id="layout" className="layout">
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </>
  )
}
