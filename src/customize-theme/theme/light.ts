import { ThemeConfig } from 'antd'
import { generate } from '@ant-design/colors'
import { components } from './components'
import { transformerColors } from './generate'
import config from '@/config'

const magentaDarkColors = generate('#D952b1', {
  theme: 'default',
  backgroundColor: config.themes.light.backgroundColor,
})

export const lightTheme: ThemeConfig = {
  components,
  token: {
    colorPrimary: config.themes.brandColor,

    ...transformerColors('magenta', magentaDarkColors),

    colorBgLayout: config.themes.light.backgroundColor, // Layout 颜色
    colorBgElevated: config.themes.light.cardBackgroundColor, // Card 背景色

    boxShadowTertiary:
      '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 7px -1px rgba(0, 0, 0, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.02)',
  },
}
