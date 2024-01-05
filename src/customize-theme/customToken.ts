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
  headerHeightMobile: number
  /**
   * @title 内容最大宽度
   * @description 文本内容的最大宽度 1100
   */
  contentMaxWidth: number
  /**
   * @title 底部高度
   */
  footerHeight: number
  /**
   * @title 底部高度移动端
   */
  footerHeightMobile: number
  /**
   * @title Logo渐变
   */
  gradientLogo: string

  /**
   * @title 代码块字体
   */
  fontFamilyHighlighter: string
  /**
   * @title 代码块字体
   */
  tableHeaderBg: string
}

export const createCustomToken: GetCustomToken<SiteToken> = ({ isDarkMode, token }) => {
  return {
    headerHeight: 64,
    headerHeightMobile: 50,

    contentMaxWidth: 1100,

    footerHeight: 130,
    footerHeightMobile: 100,

    gradientLogo: `linear-gradient(30deg,#90d5ff 35%,${token.colorPrimary})`,

    fontFamilyHighlighter: 'SF Mono',

    colorHighlight: isDarkMode ? '#16182c' : '#ebf1ff',
    borderRadius: 8,

    tableHeaderBg: isDarkMode ? '#1d1d1d' : '#fafafa',
  }
}
