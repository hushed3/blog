import React, { useMemo } from 'react'
import { SimplifiedData, YearListData } from '../../typings/pages'

import { PostLink, PostWrapper, PostYear } from './style'

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
        <PostWrapper key={year}>
          <PostYear>{year}</PostYear>
          <div>
            {postsByYear[year].map((node: SimplifiedData) => (
              <PostLink to={prefix ? `/${prefix}${node.slug}` : node.slug} key={node.id}>
                <h5>{node.title}</h5>
                <time>{node.date}</time>
              </PostLink>
            ))}
          </div>
        </PostWrapper>
      ))}
    </>
  )
}
