import { useInsertionEffect, useState } from 'react'
import { isSSR } from '../utils/func'

export type ThemeData = 'light' | 'dark'

const KEY = 'theme'
const THEME = '(prefers-color-scheme: dark)'

/**
 * @description 获取主题
 * @date 22/02/2023
 * @param {*} [key=KEY]
 * @return {*}  {[ThemeData, (value?: ThemeData) => void]}
 */
const useTheme = (key = KEY): [ThemeData, (value?: ThemeData) => void] => {
  const [theme, setTheme] = useState<ThemeData>(getThemeValue())

  const toggleTheme = (Theme?: ThemeData) => {
    if (!isSSR) {
      const currentTheme = Theme || (theme === 'dark' ? 'light' : 'dark')

      setTheme(currentTheme)

      localStorage?.setItem(key, currentTheme)
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

  useInsertionEffect(() => {
    listenerOSTheme((newTheme) => {
      toggleTheme(newTheme)
    })
  }, [])

  return [theme, toggleTheme]
}

/**
 * @description 获取当前主题
 * @date 30/09/2022
 */
const getThemeValue = (): ThemeData => {
  if (isSSR) {
    console.log(new Date().getHours() < 19 && new Date().getHours() > 6 ? 'light' : 'dark')
    return new Date().getHours() < 19 && new Date().getHours() > 6 ? 'light' : 'dark'
  } else {
    return storageTheme() || OSTheme()
  }
}

/**
 * @description 获取本地缓存中的主题
 * @date 30/09/2022
 */
const storageTheme = (): ThemeData => {
  try {
    return localStorage?.getItem(KEY) as ThemeData
  } catch (error) {
    return null as unknown as ThemeData
  }
}

/**
 * @description 获取系统主题
 * @date 30/09/2022
 */
const OSTheme = (): ThemeData => (window?.matchMedia(THEME).matches ? 'dark' : 'light')

export default useTheme
