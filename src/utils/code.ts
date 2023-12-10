export type Language =
  | 'bash'
  | 'sh'
  | 'shell'
  | 'css'
  | 'javascript'
  | 'js'
  | 'jsx'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'markdown'
  | 'mdx'
  | 'python'
  | 'py'
  | 'sass'
  | 'scss'
  | 'tsx'
  | 'typescript'
  | 'ts'
  | 'wasm'
  | 'yaml'
  | 'rust'
  | 'svelte'
  | 'html'
  | 'text'

export type GetLanguageInput = `language-${Language}` | ''

/**
 * 获取语言和可选参数
 * @param {string} className
 * @returns {string} 语言
 * @example
 * getLanguage('language-js')
 */
export const getLanguage = (className: GetLanguageInput = ``) => className.split(`language-`).pop() as Language

const OVERRIDES = {
  svelte: `html`,
  javascript: 'js',
  typescript: 'ts',
} as const

type OverridesInput = keyof typeof OVERRIDES
type OverridesOutput = (typeof OVERRIDES)[OverridesInput]

/**
 * 覆盖一种语言到另一种语言，例如具有正确的语法突出显示支持
 * @param {string} input
 * @returns {string} 传入输入或覆盖
 * @example
 * languageOverride('svelte')
 */
export const languageOverride = (input: OverridesInput | Language): OverridesOutput | Language =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  OVERRIDES?.[input] ?? input

export interface ChildrenPropsNode {
  // Default props
  children: string
  className?: string
  // My custom props
  title?: string
  highlight?: string
  withLineNumbers?: boolean
  Language: Language
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface ChildrenNode {
  props: ChildrenPropsNode
  type: string
}

export interface IPreProps {
  children: ChildrenNode
}

/**
 * 将来自 “<pre>” MDX标记的道具转换为 “<Code />” 组件的形状
 * @example
 * preToCodeBlock(props)
 */
export const preToCodeBlock = (preProps: IPreProps) => {
  if (preProps?.children?.type === `code`) {
    const { children: codeString, className = ``, ...props } = preProps.children.props

    const match = className.match(/language-([\0-\uFFFF]*)/)
    return {
      codeString: codeString.trim(),
      className: className as GetLanguageInput,
      language: (match !== null ? match[1] : ``) as Language,
      ...props,
    }
  }

  return undefined
}

/**
 * 获取要在代码块中突出显示的行
 * @param meta
 * @returns 一个函数，返回一个布尔值，具体取决于索引是否应该突出显示 (零索引)
 * @example
 * calculateLinesToHighlight('3')
 * calculateLinesToHighlight('3-6')
 * calculateLinesToHighlight('3-6,8')
 */
export const calculateLinesToHighlight = (meta: string) => {
  if (!meta) {
    return () => false
  }
  const lineNumbers = meta.split(`,`).map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index: number) => {
    const lineNumber = index + 1
    return lineNumbers.some(([start, end]) => (end ? lineNumber >= start && lineNumber <= end : lineNumber === start))
  }
}
