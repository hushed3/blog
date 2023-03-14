import React from 'react'
import { BlogThemeProvider } from './src/context/BlogThemeContext'
import { Layout } from './src/layout'

import type { GatsbyBrowser } from 'gatsby'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }: { element: React.ReactElement }) => {
  return (
    <BlogThemeProvider>
      <Layout>{element}</Layout>
    </BlogThemeProvider>
  )
}
