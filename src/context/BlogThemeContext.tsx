import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { createContext, useContext } from 'react'
import useColor from '../hooks/useColor'
import useTheme, { ThemeData } from '../hooks/useTheme'
import { GlobalStyle } from './GlobalStyles'

export type Content = {
  theme: ThemeData
  toggleTheme: (value?: ThemeData) => void
}

export const BlogThemeContext = createContext<Content>({} as Content)

export const BlogThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, toggleTheme] = useTheme()
  const [color] = useColor(theme)

  const contextValue = { theme, toggleTheme }

  return (
    <BlogThemeContext.Provider value={contextValue}>
      <EmotionThemeProvider theme={color}>
        <GlobalStyle themeColor={color} />

        {children}
      </EmotionThemeProvider>
    </BlogThemeContext.Provider>
  )
}

export const useBlogTheme = () => useContext(BlogThemeContext)
