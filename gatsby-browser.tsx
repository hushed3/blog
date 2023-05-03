import React from 'react'

import { Layout } from './src/layout'

import type { GatsbyBrowser } from 'gatsby'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }: { element: React.ReactElement }) => {
  return (
    <>
      <Layout>{element}</Layout>
    </>
  )
}
