import React from 'react'

import { BgParticles } from '../components/BgParticles'
import { Footer } from './footer/index'
import { Navigation } from './navigation/index'

import '../styles/custom.less'
import '../styles/global.less'
import '../styles/new-moon.less'
import '../styles/theme.less'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="layout" className="layout">
      <BgParticles />
      <Navigation />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
