import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import { ArticleList } from '@/components/ArticleList'
import { BriefHeader } from '@/components/BriefHeader'
import { SEO } from '@/components/SEO'
import { BlogSidebar } from '@/components/Sidebar/BlogSidebar'
import { Layout } from '@/layout'
import { useStyles } from '@/styles/templates/style'
import { simplifiedData } from '@/utils/helpers'

/**
 * @description 类别页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export default function CategoryTemplate({
  data,
  pageContext,
}: PageProps<allMdxNodesQuery<'categories'>, CategoryData>) {
  const { styles } = useStyles()
  const { category } = pageContext

  const totalCount = data?.categories.totalCount
  const articles = data?.categories.nodes

  const message = totalCount === 1 ? ' Article categorized as:' : ' Articles categorized as:'

  const simplifiedArticles = useMemo(() => simplifiedData(articles), [articles])

  return (
    <>
      <SEO helmetTitle={category} />

      <div className={styles.container}>
        <div>
          <BriefHeader highlight={totalCount} description={message} title={category} />
          <ArticleList data={simplifiedArticles} />
        </div>
        <BlogSidebar />
      </div>
    </>
  )
}

CategoryTemplate.Layout = Layout

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    categories: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          categories
          slug
          icon
        }
      }
    }
  }
`
