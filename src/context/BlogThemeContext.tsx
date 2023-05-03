import React, { useCallback } from 'react'
import {
  CustomTokenParams,
  extractStaticStyle,
  StyleProvider as AntdStyleProvider,
  ThemeProvider as AntdThemeProvider,
} from 'antd-style'

import { getAntdTheme, getCustomStylish, createCustomToken } from '../styles'

import { useThemeStore } from '../store/useThemeStore'
import { ConfigProvider } from 'antd'

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
        <AntdStyleProvider prefix={'site'}>
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
