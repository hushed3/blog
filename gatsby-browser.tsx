import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import Layout from './src/layout'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }
  return <Layout {...props}>{element}</Layout>
}
