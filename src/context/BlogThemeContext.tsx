import { StoreUpdater } from '@/components/StoreUpdater'
import { GlobalStyle } from '@/styles/global'
import { ConfigProvider } from 'antd'
import {
  CustomTokenParams,
  extractStaticStyle,
  StyleProvider as AntdStyleProvider,
  ThemeProvider as AntdThemeProvider,
} from 'antd-style'
import React, { useCallback } from 'react'

import { useThemeStore } from '@/store/useThemeStore'
import { createCustomToken, getAntdTheme, getCustomStylish } from '@/styles'
;(global as any)['__ANTD_CACHE__'] = extractStaticStyle.cache

export const BlogThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeMode = useThemeStore((s) => s.themeMode)

  const getCustomToken = useCallback((params: CustomTokenParams) => {
    const base = createCustomToken(params)

    return base
  }, [])

  return (
    <>
      <ConfigProvider
        theme={{
          components: { Card: { paddingLG: 18 } },
        }}
      >
        <AntdStyleProvider prefix={'site'} cache={extractStaticStyle.cache}>
          <AntdThemeProvider
            prefixCls={'site'}
            themeMode={themeMode}
            theme={getAntdTheme}
            customToken={getCustomToken}
            customStylish={getCustomStylish}
          >
            <GlobalStyle />
            <StoreUpdater />
            {children}
          </AntdThemeProvider>
        </AntdStyleProvider>
      </ConfigProvider>
    </>
  )
}
