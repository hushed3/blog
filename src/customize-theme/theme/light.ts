import { ThemeConfig, theme } from 'antd'

import { genMapTokenAlgorithm } from '../algorithms'

const lightMode = genMapTokenAlgorithm({
  lighter: {
    steps: 6, // 减少较亮颜色的数量
    targetBrightness: 1, // 降低最大亮度值
    saturationAdjustment: 0, // 减小较亮颜色的饱和度调整
    saturationScale: 1, // 保持暗色调的色相调整因子
    hueAdjustment: 1, // 保持暗色调的饱和度调整因子
  },
  darker: {
    steps: 6, // 增加较暗颜色的数量
    targetBrightness: 0.6, // 降低最小亮度值
    saturationAdjustment: 1.1, // 增加较暗颜色的饱和度调整
    hueAdjustment: 1, // 保持暗色调的色相调整因子
    saturationScale: 1, // 保持暗色调的饱和度调整因子
  },
})

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: lightMode.brandColor,

    colorBgLayout: '#fbfcfd', // Layout 颜色
    colorTextBase: '#2a2e36',
    colorBgElevated: '#ffffff', // Card 背景色

    boxShadowTertiary:
      '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 7px -1px rgba(0, 0, 0, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.02)',
  },

  algorithm: (seedToken, mapToken) => ({
    ...mapToken!,
    ...theme.defaultAlgorithm(seedToken),

    ...lightMode.tokens,
  }),
}
