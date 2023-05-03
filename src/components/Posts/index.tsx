import React, { useMemo } from 'react'
import { Link } from 'gatsby'

import { useStyles } from './style'

/**
 * @description 文章列表
 */

export const Posts = ({ data = [], prefix }: { data: SimplifiedData[]; prefix?: string }) => {
  const { styles } = useStyles()
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
        <div key={year}>
          <div className={styles.years}>{year}</div>
          {postsByYear[year].map((node: SimplifiedData) => (
            <Link className={styles.link} to={prefix ? `/${prefix}${node.slug}` : node.slug} key={node.id}>
              <h5>{node.title}</h5>
              <time>{node.date}</time>
            </Link>
          ))}
        </div>
      ))}
    </>
  )
}
