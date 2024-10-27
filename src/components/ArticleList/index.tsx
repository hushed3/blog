import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import SVGIcon from '@/components/SvgIcon'
import ArrowRight from '@/components/Icons/ArrowRight'

import { useStyles } from './style'

interface ArticleListProps {
  data: Frontmatter[]
}

/**
 * @description 文章列表
 */
const ArticleList: React.FC<ArticleListProps> = ({ data }) => {
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
        <article className={styles.article} key={year}>
          <div className={styles.year}>{year}</div>
          {articleByYear[year].map((node) => (
            <Link className={styles.link} to={`/${node.slug}`} key={node.slug}>
              <SVGIcon id={node.icon} width="3em" height="3em"></SVGIcon>
              <div className="infos">
                <h5>{node.title}</h5>
                <time>{node.date}</time>
              </div>

              <ArrowRight />
            </Link>
          ))}
        </article>
      ))}
    </>
  )
}

export default ArticleList
