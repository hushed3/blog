import React, { createContext } from 'react'

import useTheme from '/src/utils/hooks/useTheme'

const ThemeContext = createContext({ theme: null, setTheme: () => {} })

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useTheme()

  const contextValue = { theme, setTheme }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export default ThemeContext

export { ThemeProvider }
