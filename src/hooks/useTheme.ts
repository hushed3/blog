import { useEffect, useState } from 'react'
import { isSSR } from '../utils/func'

type ThemeData = 'light' | 'dark'

const THEME = '(prefers-color-scheme: dark)'
const KEY = 'theme'

/**
 * @description 获取本地缓存中的主题
 * @date 30/09/2022
 */
export const storageTheme = (): ThemeData => localStorage.getItem(KEY) as ThemeData

/**
 * @description 获取系统当前主题
 * @date 30/09/2022
 */
export const osTheme = (): ThemeData => {
  if (isSSR) {
    return new Date().getHours() > 6 && new Date().getHours() < 19 ? 'light' : 'dark'
  } else {
    return storageTheme() || (window?.matchMedia(THEME).matches ? 'dark' : 'light')
  }
}

const useTheme = (key = KEY): [string, (value?: ThemeData) => void] => {
  const [theme, setTheme] = useState<ThemeData>(osTheme())

  const toggleTheme = (Theme?: ThemeData) => {
    if (!isSSR) {
      const CurrentTheme = Theme || (theme === 'dark' ? 'light' : 'dark')

      setTheme(CurrentTheme)
      localStorage.setItem(key, CurrentTheme)
    }
  }

  const listenerOSTheme = (handler: (value: ThemeData) => void) => {
    if (!isSSR) {
      window?.matchMedia(THEME).addEventListener('change', (event) => {
        const osTheme = event.matches ? 'dark' : 'light'

        handler(osTheme)
      })
    }
  }

  useEffect(() => {
    toggleTheme(theme)

    listenerOSTheme((theme) => {
      toggleTheme(theme)
    })
  }, [])

  return [theme, toggleTheme]
}

export default useTheme
