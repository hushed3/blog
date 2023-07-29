import type { GetCustomToken } from 'antd-style'

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends SiteToken {}
}

/**
 * @title 站点主题 Token
 * @description 站点的一些基础配置信息
 */
export interface SiteToken {
  /**
   * @title 头部高度
   */
  headerHeight: number
  /**
   * @title 头部高度移动端
   */
  headerHeightLaptop: number
  /**
   * @title 底部高度
   */
  footerHeight: number
  /**
   * @title 侧边栏宽度
   */
  sidebarWidth: number
  /**
   * @title 目录宽度
   */
  tocWidth: number
  /**
   * @title 内容最大宽度
   * @description 文本内容的最大宽度 1152
   */
  contentMaxWidth: number | string
  /**
   * @title 渐变背景色
   */
  gradientLogo: string

  /**
   * @title 代码块字体
   */
  fontFamilyHeading: string

  /**
   * @title 代码块字体
   */
  fontFamilyHighlighter: string

  /**
   * @title 第四级阴影
   */
  boxShadowQuaternary: string
}

export const createCustomToken: GetCustomToken<SiteToken> = ({ isDarkMode, token }) => {
  return {
    headerHeight: 64,
    headerHeightLaptop: 50,

    footerHeight: 300,
    sidebarWidth: 240,
    tocWidth: 176,
    contentMaxWidth: 1100,

    fontFamilyHeading: 'monospace',
    fontFamilyHighlighter: 'SF Mono',
    colorBgContainer: token.colorBgElevated,

    borderRadius: 8,

    boxShadowQuaternary: isDarkMode ? 'none' : '0 0 25px #c8c8c840',

    gradientLogo: `linear-gradient(30deg,#90d5ff 40%,#646cff)`,
  }
}
