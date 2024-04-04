import { App } from 'antd'
import { StoreUpdater } from '@/components/StoreUpdater'
import { GlobalScopeStyle } from '@/customize-theme/globalScopeStyle'

import { Footer } from './footer/index'
import { Header } from './header/index'

import { useStyles } from './style'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { styles } = useStyles()

  return (
    <App>
      <GlobalScopeStyle />
      <StoreUpdater />

      <div className={styles.layout}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </App>
  )
}

export default Layout
