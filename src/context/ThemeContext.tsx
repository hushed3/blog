import React, { createContext } from 'react'
import useTheme from '../hooks/useTheme'
import { GlobalStyles } from './GlobalStyles'

type Content = {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<Content>({} as Content)

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [colors, theme, toggleTheme] = useTheme()

  const contextValue = { theme, toggleTheme }

  return (
    <>
      <ThemeContext.Provider value={contextValue}>
        <GlobalStyles theme={colors}>{children}</GlobalStyles>
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeContext

export { ThemeProviderWrapper }
