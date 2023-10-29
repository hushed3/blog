import React from 'react'
import { Link } from 'gatsby'
import { useStyles } from './style'

/**
 * @description 标题
 */

interface HeadingProps {
  title: string
  description?: string
  slug?: string
}

const Heading: React.FC<HeadingProps> = ({ title, slug }) => {
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

export default Heading
