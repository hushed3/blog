import { ThemeConfig } from 'antd'

import { ColorPalettes, genMapTokenAlgorithm } from '../algorithms'

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

export const lightColorPalettes: ColorPalettes = lightMode.palettes

export const lightTheme: ThemeConfig = {
  token: {
    colorBgLayout: '#f9fafb', // Layout 颜色
    colorTextBase: '#2a2e36',

    colorLinkHover: lightColorPalettes.primary[5],
    colorLink: lightColorPalettes.primary[6],
    colorLinkActive: lightColorPalettes.primary[7],
  },

  algorithm: (seedToken, mapToken) => ({
    ...mapToken!,
    ...lightMode.tokens,
  }),
}
