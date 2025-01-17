import React, { memo, useCallback } from 'react'
import { ThemeProvider, StyleProvider, extractStaticStyle } from 'antd-style'
import type { CustomTokenParams } from 'antd-style'
import { useThemeMode } from '@/hooks/useThemeMode'
import { createCustomToken, getAntdTheme, getCustomStylish } from '@/customize-theme'
import { GlobalScopeStyle } from '@/customize-theme/globalScopeStyle'

// @ts-ignore
global['__ANTD_CACHE__'] = extractStaticStyle.cache

const SiteThemeProvider = memo<{ children: React.ReactNode }>(({ children }) => {
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
        <StyleProvider prefix={'site'} cache={extractStaticStyle.cache}>
          <GlobalScopeStyle />
          {children}
        </StyleProvider>
      </ThemeProvider>
    </>
  )
})

export default SiteThemeProvider
