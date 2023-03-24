import React from 'react'
import { BriefPurpleTitle, BriefSection, BriefSubTitle, BriefTitle } from './style'

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

export const BriefHeader = ({ highlight, subTitle, title, children }: Props) => {
  return (
    <BriefSection>
      {subTitle && (
        <BriefSubTitle>
          {highlight && <BriefPurpleTitle>{highlight}</BriefPurpleTitle>}
          {subTitle}
        </BriefSubTitle>
      )}
      {title && <BriefTitle>{title}</BriefTitle>}
      {children && children}
    </BriefSection>
  )
}
