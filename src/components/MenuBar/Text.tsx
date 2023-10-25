import { FunctionComponent, ReactNode } from 'react'
import { useStyles } from './style'
import React from 'react'

interface TextProps {
  children: ReactNode
  extra?: ReactNode
  marker?: boolean
}

const Text: FunctionComponent<TextProps> = ({ children, marker = true, extra }) => {
  const { styles, cx } = useStyles()

  const ExtraChildren = () => {
    if (typeof extra !== 'object') {
      return <span className="extra">{extra}</span>
    }

    return extra
  }

  return (
    <div className={cx('menuBar-text', styles.item)}>
      <div className="title">
        {marker && <span className={styles.inkVisible}></span>}
        {children}
      </div>
      <ExtraChildren />
    </div>
  )
}

export default Text
