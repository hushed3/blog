import React, { FunctionComponent, ReactNode } from 'react'
import { useStyles } from './style'

interface HeadProps {
  children: ReactNode
}

const Head: FunctionComponent<HeadProps> = ({ children }) => {
  const { styles } = useStyles('menuBar')

  return <div className={styles.title}>{children}</div>
}

export default Head