import { StoreUpdater } from '@/components/StoreUpdater'
import { GlobalScopeStyle } from '@/customize-theme/globalScopeStyle'

import { Footer } from './footer/index'
import { Header } from './header/index'

import { useStyles } from './style'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { styles } = useStyles()

  return (
    <>
      <GlobalScopeStyle />
      <StoreUpdater />

      <div className={styles.layout}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
