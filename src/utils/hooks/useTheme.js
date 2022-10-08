import { useEffect, useState } from 'react'
import { isSSR } from '../func'

const THEME = '(prefers-color-scheme: dark)'

/**
 * @description 获取系统当前主题
 * @date 30/09/2022
 */
const osTheme = () => {
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
const storageTheme = (key) => {
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
      document.documentElement.setAttribute('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('theme')
    }
  }
}

const useTheme = (key = 'theme') => {
  const [storedTheme, setStoredTheme] = useState(storageTheme(key) || osTheme())

  const setStorageTheme = (theme = storedTheme === 'dark' ? 'light' : 'dark') => {
    if (!isSSR) {
      changeThemeAttribute(theme)
      localStorage.setItem(key, theme)

      if (theme !== storedTheme) {
        setStoredTheme(theme)
      }
    }
  }

  const listenerOsTheme = (handler) => {
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
    listenerOsTheme((theme) => {
      setStorageTheme(theme)
    })
  }, [])

  return [storedTheme, setStorageTheme, listenerOsTheme]
}

export default useTheme
