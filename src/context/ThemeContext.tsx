import React, { createContext, useEffect } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import useTheme, { osTheme, storageTheme } from '../hooks/useTheme'
import { CodeStyle } from '../styles/code'
import { RootStyle } from '../styles/root'
import { dark, light } from '../styles/theme'

type Content = {
  theme: string
  setTheme: (e: string) => void
}

const ThemeContext = createContext<Content>({ theme: storageTheme() || osTheme() } as Content)

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useTheme()
  const contextValue = { theme, setTheme }

  useEffect(() => {
    console.log('ThemeProviderWrapper', theme, storageTheme() || osTheme())
  }, [theme])

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
