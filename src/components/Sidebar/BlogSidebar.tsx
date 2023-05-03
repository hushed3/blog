import React from 'react'
import { Link, navigate } from 'gatsby'
import { Card, Tag } from 'antd'
import { useStyles } from './style'

import { useGetTaxonomies } from '../../hooks'

/**
 * @description 归档页面 - 侧边类别、标签信息
 */

export const BlogSidebar = () => {
  const { styles } = useStyles()
  const { tags, categories } = useGetTaxonomies()

  return (
    <>
      <aside>
        <div className={styles.sticky}>
          <Card bordered={false} className={styles.card}>
            <div className={styles.title}>类别</div>
            {categories
              .filter((category) => category.name !== 'Highlight')
              .map((category) => {
                return (
                  <Link
                    className={styles.link}
                    key={category.name}
                    to={`/categories/${category.name}`}
                    activeClassName="active"
                  >
                    <span>{category.name}</span>
                    <span>{category.totalCount}</span>
                  </Link>
                )
              })}
          </Card>

          <Card bordered={false} className={styles.card}>
            <div className={styles.title}>标签</div>
            {tags.map((tag) => {
              return (
                <Tag
                  key={tag.name}
                  className={styles.tag}
                  bordered={false}
                  onClick={() => {
                    navigate(`/tags/${tag.name}`)
                  }}
                >
                  {tag.name}
                </Tag>
              )
            })}
          </Card>
        </div>
      </aside>
    </>
  )
}
