import { Link } from 'gatsby'
import React, { useMemo } from 'react'

import { useStyles } from './style'

/**
 * @description 文章列表
 */

export const ArticleList = ({ data = [] }: { data: SimplifiedData[] }) => {
  const { styles } = useStyles()
  const articleByYear = useMemo(() => {
    const collection: YearListData = {}

    data.forEach((item) => {
      const year = item.date?.split(', ')[1]

      collection[year] = [...(collection[year] || []), item]
    })

    return collection
  }, [data])

  const years = useMemo(() => Object.keys(articleByYear).reverse(), [articleByYear])

  return (
    <>
      {years.map((year) => (
        <div key={year}>
          <div className={styles.years}>{year}</div>
          {articleByYear[year].map((node: SimplifiedData) => (
            <Link className={styles.link} to={`/${node.slug}`} key={node.id}>
              <h5>{node.title}</h5>
              <time>{node.date}</time>
            </Link>
          ))}
        </div>
      ))}
    </>
  )
}
