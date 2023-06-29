import { Card, Tag } from 'antd'
import { Link, navigate } from 'gatsby'
import React from 'react'
import { useStyles } from './style'

import { useGetTaxonomies } from '@/hooks'
import { getPathname } from '@/utils/func'

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
                <Tag.CheckableTag
                  key={tag.name}
                  className={styles.tag}
                  checked={`/tags/${tag.name}/` === getPathname()}
                  onClick={() => {
                    navigate(`/tags/${tag.name}`)
                  }}
                >
                  {tag.name}
                </Tag.CheckableTag>
              )
            })}
          </Card>
        </div>
      </aside>
    </>
  )
}
