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
