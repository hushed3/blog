import React from 'react'

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment
  console.log('ssr')

  return <Layout {...props}>{element}</Layout>
}
