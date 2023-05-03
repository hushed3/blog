import React from 'react'
import { useStyles } from './style'

interface Props {
  title?: string | null
  highlight?: number
  description?: string
  children?: React.ReactNode
  index?: boolean
}

/**
 * @description 简介
 */

export const BriefHeader = ({ highlight, description, title, children }: Props) => {
  const { styles } = useStyles()

  return (
    <section className={styles.brief}>
      {description && (
        <div className={styles.Description}>
          {highlight && <span>{highlight}</span>}
          {description}
        </div>
      )}
      {title && <div className={styles.title}>{title}</div>}
      {children && children}
    </section>
  )
}
