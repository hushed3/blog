import React from 'react'
import { HeadingContainer, ViewAllLink, HeadingTitle } from './style'

interface Props {
  title: string
  description?: string
  slug?: string
}

/**
 * @description 标题
 */

export const Heading = ({ title, slug }: Props) => {
  return (
    <HeadingContainer>
      <div>
        <HeadingTitle>{title}</HeadingTitle>
      </div>
      {slug && <ViewAllLink to={slug}>View all</ViewAllLink>}
    </HeadingContainer>
  )
}
