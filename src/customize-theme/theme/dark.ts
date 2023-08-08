import { theme, ThemeConfig } from 'antd'
import { MappingAlgorithm } from 'antd-style'

import { ColorPalettes, genMapTokenAlgorithm, TokenRelationship } from '../algorithms'

const darkModeRelationship: TokenRelationship = (type) => {
  const key = type.toUpperCase()[0] + type.slice(1)
  return {
    [`color${key}Bg`]: 1,
    [`color${key}BgHover`]: 2,
    [`color${key}Border`]: 3,
    [`color${key}BorderHover`]: 4,
    [`color${key}Hover`]: 7,
    [`color${key}`]: 6,
    [`color${key}Active`]: 5,
    [`color${key}TextHover`]: 8,
    [`color${key}Text`]: 9,
    [`color${key}TextActive`]: 10,
  }
}

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
  relationship: darkModeRelationship,
})

export const darkColorPalettes: ColorPalettes = darkMode.palettes

const darkAlgorithm: MappingAlgorithm = (seedToken, mapToken) => ({
  ...theme.darkAlgorithm(seedToken, mapToken),

  ...darkMode.tokens,
})

export const darkTheme: ThemeConfig = {
  token: {
    colorBgLayout: '#141416', // Layout 颜色
    colorTextBase: '#dcdcf2',
    colorBgElevated: '#212223',

    colorLinkHover: darkColorPalettes.primary[7],
    colorLink: darkColorPalettes.primary[6],
    colorLinkActive: darkColorPalettes.primary[5],
  },
  algorithm: darkAlgorithm,
}
