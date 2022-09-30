import { useEffect, useState } from 'react'
import { isSSR } from '../func'

/**
 * @description 获取系统当前主题
 * @date 30/09/2022
 */
const osTheme = () => {
  try {
    return isSSR && window?.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  } catch (e) {
    return 'light'
  }
}

const useTheme = (key = 'theme', defaultTheme) => {
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
      window?.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        if (typeof handler !== 'function') return
        const osTheme = event.matches ? 'dark' : 'light'
        console.log('osTheme', osTheme)

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

    listenerOsTheme((osTheme) => {
      setStoredTheme(osTheme)
    })
  }, [])

  return [storedTheme, setStorageTheme, listenerOsTheme]
}

export default useTheme
