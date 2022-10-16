import React from 'react'
import Helmet from 'react-helmet'

import { BriefHeader } from '../components/BriefHeader'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import config from '../utils/config'

export default function FourOhFour() {
  return (
    <>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <BriefHeader title="404">
          <p className="hero-description">Not found.</p>
        </BriefHeader>
      </div>
    </>
  )
}

FourOhFour.Layout = Layout
