import type { GatsbyBrowser } from 'gatsby'
import { Layout } from './src/layout'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <>
      <Layout>{element}</Layout>
    </>
  )
}
