import React from 'react'

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment

  return <Layout {...props}>{element}</Layout>
}

// import type { GatsbyBrowser } from 'gatsby'
// import { ThemeProviderWrapper } from './src/context/ThemeContext'

// export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ThemeProviderWrapper
