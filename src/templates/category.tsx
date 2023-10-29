import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import ArticleList from '@/components/ArticleList'
import BriefHeader from '@/components/BriefHeader'
import SEO from '@/components/SEO'
import BlogSidebar from '@/components/Sidebar/BlogSidebar'
import { useStyles } from '@/styles/templates/style'
import { simplifiedQueryData } from '@/utils/helpers'

/**
 * @description 类别页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const CategoryTemplate: React.FC<PageProps<allMdxNodesQuery<'categories'> & MdxNodesQuery, CategoryData>> = ({
  data,
  pageContext,
}) => {
  const { styles } = useStyles()
  const { category } = pageContext

  const articles = data?.categories.nodes
  const totalCount = data?.categories.totalCount

  const message = totalCount === 1 ? ' Article categorized as:' : ' Articles categorized as:'

  const simplifiedArticles = useMemo(() => simplifiedQueryData(articles), [articles])

  return (
    <div className={styles.container}>
      <div>
        <BriefHeader highlight={totalCount} description={message} title={category} />
        <ArticleList data={simplifiedArticles} />
      </div>
      <BlogSidebar />
    </div>
  )
}

export default CategoryTemplate

export const Head: HeadFC<allMdxNodesQuery<'categories'> & MdxNodesQuery, CategoryData> = (props) => {
  const { location, pageContext } = props
  const { category } = pageContext

  return (
    <>
      <SEO title={`articles tagged: ${category}`} description="Article categorized" pathName={location.pathname} />
    </>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    categories: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      nodes {
        ...SEO
      }
    }
    mdx {
      frontmatter {
        title
        slug
      }
    }
  }
`
