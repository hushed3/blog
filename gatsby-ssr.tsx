import React from 'react'
import { Layout } from './src/layout'

import type { GatsbySSR } from 'gatsby'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }: { element: React.ReactElement }) => {
  return (
    <>
      <Layout>{element}</Layout>
    </>
  )
}
