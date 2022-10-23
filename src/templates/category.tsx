import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { BriefHeader } from '../components/BriefHeader'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'

import { CategoryPageQuery, CategoryPageQueryVariables } from '../../gatsby-graphql'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { GlobalContainer } from '../styles/components/global'
import { TemplateContent, TemplateGrid } from '../styles/components/templates'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'

/**
 * @description 类别页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<CategoryPageQuery, CategoryPageQueryVariables>} {
 *   data,
 *   pageContext,
 * }
 * @return {*}
 */
export default function CategoryTemplate({
  data,
  pageContext,
}: PageProps<CategoryPageQuery, CategoryPageQueryVariables>) {
  const { category } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])
  const message = totalCount === 1 ? ' post categorized as:' : ' posts categorized as:'

  return (
    <>
      <Helmet title={`${category} | ${config.siteTitle}`} />
      <SEO />

      <GlobalContainer as="header">
        <TemplateGrid>
          <TemplateContent>
            <BriefHeader highlight={totalCount} subTitle={message} title={category} />
            <Posts data={simplifiedPosts} />
          </TemplateContent>
          <BlogSidebar />
        </TemplateGrid>
      </GlobalContainer>
    </>
  )
}

CategoryTemplate.Layout = Layout

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
  }
`
