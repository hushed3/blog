import React from 'react'
import { ThemeMode, useThemeMode as useAntdThemeMode } from 'antd-style'
import { useThemeStore } from '@/store/useThemeStore'

/**
 * @title 主题上下文状态
 */
export type ThemeState = {
  /**
   * @title 主题模式
   * @enum ["light", "dark"]
   * @enumNames ["亮色模式", "暗色模式"]
   * @default "light"
   */
  themeMode: ThemeMode
  setThemeMode: (themeMode: ThemeMode) => void
  /**
   * @title 是否为暗色模式
   */
  isDarkMode: boolean
}

/**
 * @description 主题外观模式。
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export const useThemeMode = (): ThemeState => {
  const themeMode = useThemeStore((s) => s.themeMode)
  const { isDarkMode } = useAntdThemeMode()

  const setThemeMode = (mode: ThemeMode) => {
    useThemeStore.setState({ themeMode: mode })
  }

  return { themeMode, isDarkMode, setThemeMode }
}
