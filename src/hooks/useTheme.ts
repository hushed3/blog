import { useEffect, useState } from 'react'
import { isSSR } from '../utils/func'

const THEME = '(prefers-color-scheme: dark)'
const KEY = 'theme'

/**
 * @description 获取系统当前主题
 * @date 30/09/2022
 */
export const osTheme = () => (!isSSR && window?.matchMedia(THEME).matches ? 'dark' : 'light')

/**
 * @description 获取本地缓存中的主题
 * @date 30/09/2022
 */
export const storageTheme = () => {
  if (isSSR) {
    return new Date().getHours() > 6 && new Date().getHours() < 19 ? 'light' : 'dark'
  } else {
    return localStorage.getItem(KEY) || osTheme()
  }
}

const useTheme = (key = KEY): [string, (value?: string) => void] => {
  const [storedTheme, setStoredTheme] = useState(storageTheme())

  const toggleStorageTheme = (theme = storedTheme === 'dark' ? 'light' : 'dark') => {
    if (!isSSR) {
      setStoredTheme(theme)

      localStorage.setItem(key, theme)
    }
  }

  const listenerOSTheme = (handler: (theme: string) => void) => {
    if (!isSSR) {
      window?.matchMedia(THEME).addEventListener('change', (event) => {
        const osTheme = event.matches ? 'dark' : 'light'

        handler(osTheme)
      })
    }
  }

  useEffect(() => {
    toggleStorageTheme(storedTheme)

    listenerOSTheme((theme) => {
      toggleStorageTheme(theme)
    })
  }, [])

  return [storedTheme, toggleStorageTheme]
}

export default useTheme
