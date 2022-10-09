import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '/src/layout/index'
import { SEO } from '/src/components/SEO'
import { Hero } from '/src/components/Hero'
import config from '/src/utils/config'

export default function FourOhFour() {
  return (
    <div>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <Hero title="404">
          <p className="hero-description">Not found.</p>
        </Hero>
      </div>
    </div>
  )
}

FourOhFour.Layout = Layout
