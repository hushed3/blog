import React from 'react'
import { ThemeProviderWrapper } from './src/context/ThemeContext'

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment

  return (
    <ThemeProviderWrapper>
      <Layout {...props}>{element}</Layout>
    </ThemeProviderWrapper>
  )
}
