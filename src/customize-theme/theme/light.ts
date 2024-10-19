import { ThemeConfig } from 'antd'
import { components } from './components'
import { generatePresetPalette } from './generate'
import config from '@/config'

const grayColors = generatePresetPalette('gray', '#bfbfbf', 'default')

export const lightTheme: ThemeConfig = {
  components,
  token: {
    colorPrimary: config.themes.brandColor,

    ...grayColors,

    colorBgLayout: config.themes.light.backgroundColor, // Layout 颜色
    colorBgElevated: config.themes.light.cardBackgroundColor, // Card 背景色

    boxShadowTertiary:
      '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 7px -1px rgba(0, 0, 0, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.02)',
  },
}
