import { ThemeProvider } from './src/context/ThemeContext'
const React = require('react')

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment

  return (
    <ThemeProvider>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}
