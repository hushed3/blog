import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'
import { BriefHeader } from '../components/BriefHeader'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'

import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { getSimplifiedPosts } from '../utils/helpers'
import { useStyles } from '../styles/templates/style'

/**
 * @description 类别页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<CategoryPageProps, CategoryData>} {
 *   data,
 *   pageContext,
 * }
 * @return {*}
 */
export default function CategoryTemplate({ data, pageContext }: PageProps<CategoryPageProps, CategoryData>) {
  const { styles } = useStyles()
  const { category } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])
  const message = totalCount === 1 ? ' post categorized as:' : ' posts categorized as:'

  return (
    <>
      <SEO helmetTitle={category} />

      <div className={styles.container}>
        <div>
          <BriefHeader highlight={totalCount} description={message} title={category} />
          <Posts data={simplifiedPosts} />
        </div>
        <BlogSidebar />
      </div>
    </>
  )
}

CategoryTemplate.Layout = Layout

export const pageQuery = graphql`query CategoryPage($category: String) {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {categories: {in: [$category]}}}
  ) {
    totalCount
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          categories
        }
      }
    }
  }
}`
