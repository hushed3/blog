/**
 * @description 判断是否为SSR模式
 * @date 30/09/2022
 */
export const isSSR = (function () {
  try {
    return (
      typeof window === 'undefined' ||
      !window.navigator ||
      /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
    )
  } catch (e) {
    return true
  }
})()

/**
 * @description 提取href值
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  {string}
 */
export const getHref = (str: string): string => {
  const value = /(?<=<a.*href=").*(?=")/.exec(str)
  return value?.length ? value[0] : ''
}

/**
 * @description 提取标签内的值
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  {string}
 */
export const getValue = (str: string): string => {
  const value = /(?<=">).*(?=<\/a)/.exec(str)
  return value?.length ? value[0] : ''
}

/**
 * @description 提取标签的id
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  {string}
 */
export const getID = (str: string): string => {
  const value = str.match(/(?<=<h4.*id=").*(?="\sstyle)/)
  return value?.length ? value[0].replace(/-/g, ' ') : ''
}

/**
 * @description 获取path
 */
export const getPathname = (path: string): string => {
  return path.split('/')[2]
}

/**
 * @description 生成随机字符串
 * @date 15/10/2023
 * @return {*}  {string}
 */
export const randomString = () => Math.random().toString(36).slice(2)

/**
 * @description 生成随机颜色
 * @date 15/10/2023
 * @return {*}  {string}
 */
export const randomColor = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')

/**
 * @description 解析url参数
 * @date 15/10/2023
 * @return {*}  {object}
 */
export const parseQuery = (url: string) => {
  const q = {}
  url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v))
  return q
}

/**
 * @description 复制内容到剪贴板
 * @date 09/08/2024
 * @export
 * @param {*} text
 */
export function copyToClipboard(text) {
  if (navigator.clipboard) {
    //@ts-ignore
    copyToClipboard = (text) => navigator.clipboard.writeText(text)
  } else {
    //@ts-ignore
    copyToClipboard = (text) => {
      var textArea = document.createElement('textarea')
      textArea.value = text

      // Avoid scrolling to bottom
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.position = 'fixed'

      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        var successful = document.execCommand('copy')
        var msg = successful ? 'Copied to clipboard successfully!' : 'Could not copy text'
        console.log(msg)
      } catch (err) {
        console.error('Fallback: Could not copy text: ', err)
      }

      document.body.removeChild(textArea)
    }
  }
  copyToClipboard(text)
}