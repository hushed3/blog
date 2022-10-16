import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import useTheme from '../hooks/useTheme'
import { CodeStyle } from '../styles/code'
import { RootStyle } from '../styles/root'
import { dark, light } from '../styles/theme'

type Content = {
  theme: string
  setTheme: (e: string) => void
}

const ThemeContext = createContext<Content>({} as Content)

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useTheme()

  const contextValue = { theme, setTheme }

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <RootStyle />
        <CodeStyle />
        <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default ThemeContext

export { ThemeProviderWrapper }
