import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import ThemeProviderContext from './src/context/ThemeProviderContext'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return (
    <>
      <ThemeProviderContext {...props}>{element}</ThemeProviderContext>
    </>
  )
}
