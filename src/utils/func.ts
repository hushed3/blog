/**
 * @description 判断是否为浏览器环境
 * @date 30/09/2022
 */
export const isBrowser = () => typeof window !== 'undefined'

export const isSSR = (function () {
  try {
    return !(typeof window !== 'undefined' && document !== undefined)
  } catch (e) {
    return true
  }
})()
