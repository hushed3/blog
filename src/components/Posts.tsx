import { Link } from 'gatsby'
import React, { useMemo } from 'react'

/**
 * @description 文章组件-item
 */

const Post = ({ node, prefix }: { node: SimplifiedData; prefix?: string }) => {
  let formattedDate

  if (node.date) {
    const dateArr = node.date.split(' ')
    dateArr.pop()

    dateArr[0] = dateArr[0].slice(0, 3)
    formattedDate = dateArr.join(' ').slice(0, -1)
  }

  return (
    <Link to={prefix ? `/${prefix}${node.slug}` : node.slug} key={node.id} className="post">
      <h5>{node.title}</h5>
      <time>{formattedDate}</time>
    </Link>
  )
}

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
        <section key={year} className="segment">
          <h2 className="year">{year}</h2>
          <div className="posts">
            {postsByYear[year].map((node: SimplifiedData) => (
              <Post key={node.id} node={node} prefix={prefix} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
