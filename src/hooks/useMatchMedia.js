import { useEffect, useState } from 'react'
import { isSSR } from '../utils/func'

/**
 * @description 获取 表示指定的媒体查询 (en-US)字符串解析后的结果
 * @date 30/09/2022
 */
const getMatchMedia = (key) => {
  try {
    return !isSSR && window?.matchMedia(key)
  } catch (e) {
    return null
  }
}

const useMatchMedia = (key, defaultTheme) => {
  const [matchMedia, setMatchMedia] = useState(getMatchMedia() || defaultTheme)

  const listenerOsTheme = (handler) => {
    if (!isSSR) {
      window?.matchMedia(key).addEventListener('change', (event) => {
        if (typeof handler !== 'function') return

        handler(event)
      })
    }
  }

  useEffect(() => {
    listenerOsTheme((event) => {
      setMatchMedia(event)
    })
  }, [])

  return [matchMedia, listenerOsTheme]
}

export default useMatchMedia
