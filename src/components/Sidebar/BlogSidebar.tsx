import React from 'react'
import { SideCard, SideLink, SideSticky, SideTag, SideTags, SideTitle, SlidLinkCount } from './style'

import { useGetTaxonomies } from '../../hooks/useGetTaxonomies'
import { slugify } from '../../utils/helpers'

/**
 * @description 归档页面 - 侧边类别、标签信息
 */

export const BlogSidebar = () => {
  const data = useGetTaxonomies()
  const categories = data.categories.group
  const tags = data.tags.group

  return (
    <>
      <aside>
        <SideSticky>
          <SideCard>
            <SideTitle>类别</SideTitle>
            <div>
              {categories
                .filter((category) => category.name !== 'Highlight')
                .map((category) => {
                  return (
                    <SideLink key={category.name} to={`/categories/${slugify(category.name)}`} activeClassName="active">
                      <div>{category.name}</div>
                      <SlidLinkCount>{category.totalCount}</SlidLinkCount>
                    </SideLink>
                  )
                })}
            </div>
          </SideCard>

          <SideCard>
            <SideTitle>标签</SideTitle>
            <SideTags>
              {tags.map((tag) => {
                return (
                  <SideTag key={tag.name} to={`/tags/${slugify(tag.name)}`} activeClassName="active">
                    {tag.name}
                  </SideTag>
                )
              })}
            </SideTags>
          </SideCard>
        </SideSticky>
      </aside>
    </>
  )
}
