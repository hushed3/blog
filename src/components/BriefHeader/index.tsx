import React from 'react'
import { useStyles } from './style'

interface Props {
  title?: string
  greeting?: string
  highlight?: number
  description?: string
  children?: React.ReactNode
  titleFamily?: 'Prisma' | 'sans-serif'
}

/**
 * @description 简介
 */

export const BriefHeader = ({ title, greeting, highlight, description, children }: Props) => {
  const { styles, cx } = useStyles()

  return (
    <section className={styles.brief}>
      {description && (
        <div className={styles.Description}>
          {highlight && <span>{highlight}</span>}
          {description}
        </div>
      )}
      {greeting && <div className={cx(styles.title, styles.greeting)}>{greeting}</div>}
      {title && <div className={styles.title}>{title}</div>}
      {children && children}
    </section>
  )
}
