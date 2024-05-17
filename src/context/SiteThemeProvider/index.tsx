import React, { memo, useCallback } from 'react'
import { graphql } from 'gatsby'
import { CustomTokenParams, extractStaticStyle, StyleProvider, ThemeProvider } from 'antd-style'
import { useThemeMode } from '@/hooks/useThemeMode'
import { createCustomToken, getAntdTheme, getCustomStylish } from '@/customize-theme'
import { GlobalScopeStyle } from '@/customize-theme/globalScopeStyle'

// @ts-ignore
global['__ANTD_CACHE__'] = extractStaticStyle.cache

const SiteThemeProvider = memo(({ children, ...props }: { children: React.ReactNode }) => {
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
        onAppearanceChange={(state) => {}}
      >
        <StyleProvider prefix={'site'} cache={extractStaticStyle.cache}>
          <GlobalScopeStyle />
          {children}
        </StyleProvider>
      </ThemeProvider>
    </>
  )
})

export default SiteThemeProvider

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
