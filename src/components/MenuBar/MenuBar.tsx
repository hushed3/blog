import { FunctionComponent, ReactNode } from 'react'
import { useStyles } from './style'

interface MenuBarProps {
  children?: ReactNode
}

const MenuBar: FunctionComponent<MenuBarProps> = ({ children }) => {
  const { styles } = useStyles('menuBar')
  return <div className={styles.menuBar}>{children}</div>
}

export default MenuBar

