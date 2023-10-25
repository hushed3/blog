import React from 'react'
import { BlogThemeProvider } from '@/context/BlogThemeContext'
import { StoreUpdater } from '@/components/StoreUpdater'
import { GlobalStyle } from '@/customize-theme/global'

// import { BgParticles } from '../components/BgParticles'
import { Footer } from './footer/index'
import { Header } from './header/index'

import { useThemeMode } from '@/hooks'
import { useStyles } from './style'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { styles } = useStyles()

  const { isDarkMode } = useThemeMode()

  return (
    <BlogThemeProvider>
      <GlobalStyle />
      <StoreUpdater />

      <div className={styles.layout}>
        {isDarkMode}
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        {/* <BgParticles /> */}
      </div>
    </BlogThemeProvider>
  )
}
