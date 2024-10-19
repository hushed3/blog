import type { GetAntdTheme } from 'antd-style'
import { darkTheme, lightTheme } from './theme'

export const getAntdTheme: GetAntdTheme = (appearance) => {
  const theme = appearance === 'dark' ? darkTheme : lightTheme
  return theme
}
