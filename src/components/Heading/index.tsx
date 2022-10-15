import React from 'react'
import { HeadingLink, HeadingTitle, HomeHeading } from './style'

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
    <HomeHeading>
      <div>
        <HeadingTitle>{title}</HeadingTitle>
      </div>
      {slug && <HeadingLink to={slug}>View all</HeadingLink>}
    </HomeHeading>
  )
}
