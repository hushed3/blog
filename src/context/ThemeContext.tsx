import React, { createContext } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
// import useDarkMode from 'use-dark-mode'
import useTheme from '../hooks/useTheme'
import { CodeStyle } from '../styles/code'
import { RootStyle } from '../styles/root'
import { dark, light } from '../styles/theme'

export type Content = {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<Content>({} as Content)

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, toggleTheme] = useTheme()

  const contextValue = { theme, toggleTheme }

  return (
    <>
      <ThemeContext.Provider value={contextValue}>
        <StyledProvider theme={theme === 'dark' ? dark : light}>
          <RootStyle />
          <CodeStyle />
          {children}
        </StyledProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeContext

export { ThemeProviderWrapper }
