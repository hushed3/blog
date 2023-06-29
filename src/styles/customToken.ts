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

  codeFontColor: string
  terminalBar: string
  terminalAccent: string
  string: string
  variable: string
  property: string
  number: string
  operator: string
  punctuation: string
  comment: string
  function: string
  keyword: string
  attribute: string
  class: string
  tag: string
  error: string
}

const lightCodeColor = {
  codeFontColor: '#b3b9c5',
  terminalBar: 'webkit-linear-gradient(top, #444, #222)',
  terminalAccent: `rgb(89, 89, 89)`,
  string: '#92d192',
  variable: '#f2777a',
  property: '#b3b9c5',
  number: '#fca369',
  operator: '#ac8d58',
  punctuation: '#c7cdd7',
  comment: '#6c6c6c',
  function: '#76d4d6',
  keyword: '#ffeea6',
  attribute: '#ffd479',
  class: '#e1a6f2',
  tag: '#6ab0f3',
  error: '#b0292c',
}

const darkCodeColor = {
  codeFontColor: '#232529',
  terminalBar: 'webkit-linear-gradient(top, #ebebeb, #d5d5d5)',
  terminalAccent: `rgb(150, 150, 150)`,
  string: '#3b9039',
  variable: '#383a41',
  property: '#565656',
  number: '#da7430',
  operator: '#a87200',
  punctuation: '#5c6d74',
  comment: '#b5b5b5',
  function: '#0174a5',
  keyword: '#111',
  attribute: '#a87200',
  class: '#a346a0',
  tag: '#365ccd',
  error: '#b0292c',
}

export const createCustomToken: GetCustomToken<SiteToken> = ({ isDarkMode, token }) => {
  const highlighterColors = isDarkMode ? lightCodeColor : darkCodeColor

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

    ...highlighterColors,

    gradientLogo: `linear-gradient(30deg,#90d5ff 40%,#646cff)`,
  }
}
