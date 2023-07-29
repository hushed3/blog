import React from 'react'
import { useStyles } from './style'

interface Props {
  title?: string
  greeting?: string
  highlight?: number
  description?: string
  children?: React.ReactNode
}

/**
 * @description 简介
 */

export const BriefHeader = ({ title, greeting, highlight, description, children }: Props) => {
  const { styles } = useStyles()

  return (
    <div className={styles.briefHeader}>
      {description && (
        <div className={styles.Description}>
          {highlight && <span>{highlight}</span>}
          {description}
        </div>
      )}
      {greeting && <div className={styles.greeting}>{greeting}</div>}
      {title && <div className={styles.title}>{title}</div>}
      {children && children}
    </div>
  )
}
