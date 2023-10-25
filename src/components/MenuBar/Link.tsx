import { FunctionComponent, ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { useStyles } from './style'
import React from 'react'

interface LinkProps {
  children: ReactNode
  extra?: ReactNode
  marker?: boolean

  activeClassName?: string
  activeStyle?: object
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  partiallyActive?: boolean
  replace?: boolean
  to: string
}

const Link: FunctionComponent<LinkProps> = ({ children, marker = true, extra, to, ...otherProps }) => {
  const { styles, cx } = useStyles()

  const ExtraChildren = () => {
    if (typeof extra !== 'object') {
      return <span className="extra">{extra}</span>
    }

    return extra
  }

  return (
    <GatsbyLink
      {...otherProps}
      to={to}
      className={cx('menuBar-link', styles.item, styles.hover)}
      activeClassName="active"
    >
      <div className="title">
        {marker && <span className={styles.inkVisible}></span>}
        {children}
      </div>
      <ExtraChildren />
    </GatsbyLink>
  )
}

export default Link
