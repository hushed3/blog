import { useEffect, useState } from 'react'
import { isSSR } from '../func'

const THEME = '(prefers-color-scheme: dark)'
const KEY = 'theme'

/**
 * @description 获取系统当前主题
 * @date 30/09/2022
 */
export const osTheme = () => {
  try {
    return !isSSR && window?.matchMedia(THEME).matches ? 'dark' : 'light'
  } catch (e) {
    console.err(e)
    return new Date() > 6 && new Date() < 19 ? 'light' : 'dark'
  }
}

/**
 * @description 获取本地缓存中的主题
 * @date 30/09/2022
 */
export const storageTheme = (key = KEY) => {
  if (!isSSR) {
    return localStorage.getItem(key)
  } else {
    return undefined
  }
}

/**
 * @description 设置主题样式
 * @date 30/09/2022
 */
const changeThemeAttribute = (theme) => {
  if (!isSSR) {
    if (theme === 'dark') {
      document.documentElement.setAttribute(KEY, 'dark')
    } else {
      document.documentElement.removeAttribute(KEY)
    }
  }
}

const useTheme = (key = KEY) => {
  const [storedTheme, setStoredTheme] = useState(storageTheme(key) || osTheme())

  const setStorageTheme = (theme = storedTheme === 'dark' ? 'light' : 'dark') => {
    if (!isSSR) {
      changeThemeAttribute(theme)
      localStorage.setItem(key, theme)

      setStoredTheme(theme)
    }
  }

  const listenerOSTheme = (handler) => {
    if (!isSSR) {
      window?.matchMedia(THEME).addEventListener('change', (event) => {
        if (typeof handler !== 'function') return
        const osTheme = event.matches ? 'dark' : 'light'

        handler(osTheme)
      })
    }
  }

  useEffect(() => {
    if (!storageTheme(key)) {
      setStorageTheme(storedTheme)
    }
    listenerOSTheme((theme) => {
      setStorageTheme(theme)
    })
  }, [])

  return [storedTheme, setStorageTheme, listenerOSTheme]
}

export default useTheme
