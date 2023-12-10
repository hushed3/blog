import React, { useCallback } from 'react'
import { App } from 'antd'
import { CustomTokenParams, extractStaticStyle, StyleProvider, ThemeProvider } from 'antd-style'
import { useThemeMode } from '@/hooks'
import Layout from '@/layout'

import { createCustomToken, getAntdTheme, getCustomStylish } from '@/customize-theme'
import { graphql } from 'gatsby'
;(global as any)['__ANTD_CACHE__'] = extractStaticStyle.cache

const ThemeProviderContext = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useThemeMode()

  const getCustomToken = useCallback((params: CustomTokenParams) => {
    const base = createCustomToken(params)

    return base
  }, [])
  return (
    <>
      <ThemeProvider
        prefixCls={'site'}
        themeMode={themeMode}
        theme={getAntdTheme}
        customToken={getCustomToken}
        customStylish={getCustomStylish}
      >
        <StyleProvider prefix={'site'} cache={extractStaticStyle.cache} speedy={true}>
          <App>
            <Layout>{children}</Layout>
          </App>
        </StyleProvider>
      </ThemeProvider>
    </>
  )
}

export default ThemeProviderContext

export const NodeFragmentQuery = graphql`
  fragment NodeFragment on Mdx {
    id
    excerpt
    ...FrontmatterFragment
  }
`

export const FrontmatterFragmentQuery = graphql`
  fragment FrontmatterFragment on Mdx {
    frontmatter {
      title
      description
      date(formatString: "MMMM DD, YYYY")
      lastUpdated(formatString: "MMMM DD, YYYY")
      icon
      slug
      template
      tags
      categories
      published
    }
  }
`
