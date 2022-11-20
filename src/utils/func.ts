/**
 * @description 判断是否为SSR
 * @date 30/09/2022
 */
export const isSSR = (function () {
  try {
    return !(typeof window !== 'undefined' && document !== undefined)
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
