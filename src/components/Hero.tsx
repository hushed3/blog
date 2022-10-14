import React from 'react'

interface Props {
  title: string
  highlight?: number
  subTitle?: string
  children?: React.ReactNode
  index?: boolean
}

/**
 * @description 大标题
 */

export const Hero = ({ highlight, subTitle, title, children, index }: Props) => {
  return (
    <header className={`hero ${index ? 'index' : ''}`}>
      {subTitle && (
        <div className="sub-title">
          {highlight && <span className="highlight">{highlight}</span>}
          {subTitle}
        </div>
      )}
      {title && <h1>{title}</h1>}
      {children && children}
    </header>
  )
}
