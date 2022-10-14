import React, { createContext } from 'react'

import useTheme from '../hooks/useTheme'

const ThemeContext = createContext<{
  theme: string
  setTheme: (value?: string) => void
}>({ theme: 'light', setTheme: () => {} })

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useTheme()

  const contextValue = { theme, setTheme }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export default ThemeContext

export { ThemeProvider }
