import React, { useCallback } from 'react'
import { ConfigProvider } from 'antd'
import {
  CustomTokenParams,
  extractStaticStyle,
  StyleProvider as AntdStyleProvider,
  ThemeProvider as AntdStyleThemeProvider,
} from 'antd-style'
import { useThemeMode } from '@/hooks'

import { createCustomToken, getAntdTheme, getCustomStylish } from '@/customize-theme'
;(global as any)['__ANTD_CACHE__'] = extractStaticStyle.cache

export const BlogThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useThemeMode()

  const getCustomToken = useCallback((params: CustomTokenParams) => {
    const base = createCustomToken(params)

    return base
  }, [])
  return (
    <>
      <ConfigProvider
        theme={{
          components: { Card: { paddingLG: 18 }, Button: { borderRadiusSM: 6 }, Alert: { fontSize: 13, lineWidth: 2 } },
        }}
      >
        <AntdStyleThemeProvider
          prefixCls={'site'}
          themeMode={themeMode}
          theme={getAntdTheme}
          customToken={getCustomToken}
          customStylish={getCustomStylish}
        >
          <AntdStyleProvider prefix={'site'} cache={extractStaticStyle.cache}>
            {children}
          </AntdStyleProvider>
        </AntdStyleThemeProvider>
      </ConfigProvider>
    </>
  )
}
