import React from 'react'
import { BriefHeader as Header, BriefPurpleTitle as PurpleTitle, BriefSubTitle, BriefTitle } from './style'

interface Props {
  title?: string | null
  highlight?: number
  subTitle?: string
  children?: React.ReactNode
  index?: boolean
}

/**
 * @description 大标题
 */

export const BriefHeader = ({ highlight, subTitle, title, children, index }: Props) => {
  return (
    <Header className={index ? 'index' : ''}>
      {subTitle && (
        <BriefSubTitle>
          {highlight && <PurpleTitle>{highlight}</PurpleTitle>}
          {subTitle}
        </BriefSubTitle>
      )}
      {title && <BriefTitle>{title}</BriefTitle>}
      {children && children}
    </Header>
  )
}
