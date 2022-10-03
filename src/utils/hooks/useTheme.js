import { useEffect, useState } from 'react'
import useMatchMedia from './useMatchMedia.js'
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
    return new Date() > 6 && new Date() < 19 ? 'light' : 'dark'
  }
}

const useTheme = (key = 'theme', defaultTheme) => {
  const [themeMedia] = useMatchMedia(THEME)
  const [storedTheme, setStoredTheme] = useState(osTheme() || defaultTheme)

  const setStorageTheme = (theme = storedTheme === 'dark' ? 'light' : 'dark') => {
    if (!isSSR) {
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
    const storageTheme = localStorage.getItem(key)
    if (storageTheme) {
      setStoredTheme(storageTheme)
    } else {
      setStorageTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    setStorageTheme(osTheme())
  }, [themeMedia])

  return [storedTheme, setStorageTheme, listenerOsTheme]
}

export default useTheme
