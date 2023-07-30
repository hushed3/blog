import { ConfigProvider } from 'antd'
import {
  CustomTokenParams,
  extractStaticStyle,
  StyleProvider as AntdStyleProvider,
  ThemeProvider as AntdThemeProvider,
} from 'antd-style'
import React, { useCallback } from 'react'
// import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import { useThemeStore } from '@/store/useThemeStore'
import { createCustomToken, getAntdTheme, getCustomStylish } from '@/styles'
;(global as any)['__ANTD_CACHE__'] = extractStaticStyle.cache

export const BlogThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeMode = useThemeStore((s) => s.themeMode)
  // deckDeckGoHighlightElement()

  console.log(extractStaticStyle, extractStaticStyle.cache)

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
        <AntdThemeProvider
          prefixCls={'site'}
          themeMode={themeMode}
          theme={getAntdTheme}
          customToken={getCustomToken}
          customStylish={getCustomStylish}
        >
          <AntdStyleProvider prefix={'site'} cache={extractStaticStyle.cache}>
            {children}
          </AntdStyleProvider>
        </AntdThemeProvider>
      </ConfigProvider>
    </>
  )
}
