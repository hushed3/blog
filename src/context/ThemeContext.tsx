import React, { createContext } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { CodeStyle } from '../styles/code'
import { RootStyle } from '../styles/root'
import { dark, light } from '../styles/theme'

export type Content = {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<Content>({} as Content)

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useDarkMode(false)

  const toggleTheme = () => {
    darkMode.toggle()
  }

  const contextValue = { darkMode: darkMode.value, toggleTheme }

  return (
    <>
      <ThemeContext.Provider value={contextValue}>
        <StyledProvider theme={darkMode.value ? dark : light}>
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
