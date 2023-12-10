import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import ThemeProviderContext from './src/context/ThemeProviderContext'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <>
      <ThemeProviderContext>{element}</ThemeProviderContext>
    </>
  )
}
