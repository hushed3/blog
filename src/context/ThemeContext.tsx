import { ThemeProvider } from '@emotion/react'
import React, { createContext } from 'react'
import useTheme, { ThemeData } from '../hooks/useTheme'
import { GlobalStyles } from './GlobalStyles'

export type Content = {
  theme: ThemeData
  toggleTheme: () => void
}

const ThemeContext = createContext<Content>({} as Content)

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [colors, theme, toggleTheme] = useTheme()

  const contextValue = { theme, toggleTheme }

  return (
    <>
      <ThemeContext.Provider value={contextValue}>
        <ThemeProvider theme={colors}>
          <GlobalStyles themeColors={colors} />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeContext

export { ThemeProviderWrapper }
