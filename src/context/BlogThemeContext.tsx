import React, { useCallback } from 'react'
import { ConfigProvider } from 'antd'
import {
  CustomTokenParams,
  extractStaticStyle,
  StyleProvider as AntdStyleProvider,
  ThemeProvider as AntdThemeProvider,
} from 'antd-style'

import { useThemeStore } from '../store/useThemeStore'
import { getAntdTheme, getCustomStylish, createCustomToken } from '../styles'
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
          components: {
            Card: {
              paddingLG: 16,
            },
          },
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
            {children}
          </AntdThemeProvider>
        </AntdStyleProvider>
      </ConfigProvider>
    </>
  )
}
