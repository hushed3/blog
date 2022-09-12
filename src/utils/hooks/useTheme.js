import { isBrowser } from '../func'

export const useTheme = () => {
  if (isBrowser()) {
    return window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } else {
    return 'dark'
  }
}
