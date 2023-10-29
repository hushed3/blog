import { theme, ThemeConfig } from 'antd'

import { genMapTokenAlgorithm, defaultRelationship } from '../algorithms'

const darkMode = genMapTokenAlgorithm({
  lighter: {
    steps: 6, // 减少较亮颜色的数量
    targetBrightness: 0.8, // 降低最大亮度值
    saturationAdjustment: 0.6, // 减小较亮颜色的饱和度调整
    hueAdjustment: 1, // 保持暗色调的色相调整因子
    saturationScale: 1, // 保持暗色调的饱和度调整因子
  },
  darker: {
    steps: 5, // 增加较暗颜色的数量
    targetBrightness: 0.21, // 降低最小亮度值
    saturationAdjustment: 0.05, // 增加较暗颜色的饱和度调整
    hueAdjustment: 1, // 保持暗色调的色相调整因子
    saturationScale: 1, // 保持暗色调的饱和度调整因子
  },
  reverse: true,
  relationship: defaultRelationship,
})

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: darkMode.brandColor,

    colorBgLayout: '#111112', // Layout 颜色
    colorTextBase: '#dcdcf2',
    colorBgElevated: '#212223', // Card 背景色

    boxShadowTertiary:
      '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 7px -1px rgba(0, 0, 0, 0.03), 0 2px 5px 0 rgba(0, 0, 0, 0.03)',
  },
  algorithm: (seedToken, mapToken) => ({
    ...theme.darkAlgorithm(seedToken, mapToken),

    ...darkMode.tokens,
  }),
}
