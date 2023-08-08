import type { ThemeMode } from 'antd-style'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Store {
  themeMode: ThemeMode
}

export const useThemeStore = create<Store>()(
  persist(
    () => ({
      themeMode: 'auto' as ThemeMode,
    }),
    { name: 'SITE_THEME' }
  )
)

