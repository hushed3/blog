import React from 'react'

import { Navigation } from './navigation/index'
import { Footer } from './footer/index'
import { BgParticles } from '/src/components/BgParticles'

import '../styles/global.less'
import '../styles/theme.less'
import '../styles/custom.less'
import '../styles/new-moon.less'

export const Layout = ({ children }) => {
  return (
    <div id="layout" className="layout">
      <BgParticles />
      <Navigation />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
