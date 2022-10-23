import React, { useMemo } from 'react'
import { SimplifiedData, YearListData } from '../../typings/pages'

import { PostH5, PostLink, PostSection, PostTime, PostYear } from './style'

/**
 * @description 文章列表
 */

export const Posts = ({ data = [], prefix }: { data: SimplifiedData[]; prefix?: string }) => {
  const postsByYear = useMemo(() => {
    const collection: YearListData = {}

    data.forEach((post) => {
      const year = post.date?.split(', ')[1]

      collection[year] = [...(collection[year] || []), post]
    })

    return collection
  }, [data])

  const years = useMemo(() => Object.keys(postsByYear).reverse(), [postsByYear])

  return (
    <>
      {years.map((year) => (
        <PostSection key={year}>
          <PostYear>{year}</PostYear>
          <div>
            {postsByYear[year].map((node: SimplifiedData) => (
              <PostLink to={prefix ? `/${prefix}${node.slug}` : node.slug} key={node.id}>
                <PostH5>{node.title}</PostH5>
                <PostTime>{node.date.replace(/,\s\d{4}/, '')}</PostTime>
              </PostLink>
            ))}
          </div>
        </PostSection>
      ))}
    </>
  )
}
