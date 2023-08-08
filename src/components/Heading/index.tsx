import React from 'react'
import { Link } from 'gatsby'
import { useStyles } from './style'

interface Props {
  title: string
  description?: string
  slug?: string
}

/**
 * @description 标题
 */

export const Heading = ({ title, slug }: Props) => {
  const { styles } = useStyles()

  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>{title}</h2>
      {slug && (
        <Link className={styles.link} to={slug}>
          View all
        </Link>
      )}
    </div>
  )
}
