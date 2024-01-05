import { ThemeConfig, theme } from 'antd'

import { genMapTokenAlgorithm } from '../algorithms'
import { components } from './components'

const lightMode = genMapTokenAlgorithm()

export const lightTheme: ThemeConfig = {
  components,
  token: {
    colorPrimary: lightMode.brandColor,

    colorBgLayout: '#fefefe', // Layout 颜色
    // colorBgLayout: '#fcfcfc', // Layout 颜色
    colorBgElevated: '#f8f8f8', // Card 背景色

    // colorBgLayout: '#fafafb', // Layout 颜色
    // colorBgElevated: '#ffffff', // Card 背景色

    boxShadowTertiary:
      '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 7px -1px rgba(0, 0, 0, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.02)',
  },

  // algorithm: (seedToken, mapToken) => {
  //   return {
  //     ...mapToken!,
  //     ...theme.defaultAlgorithm(seedToken),

  //     ...lightMode.tokens,
  //   }
  // },
}
