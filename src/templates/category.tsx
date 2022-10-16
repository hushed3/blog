import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { BriefHeader } from '../components/BriefHeader'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'

import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { GlobalContainer } from '../styles/global'
import { CategoryPageQuery } from '../typings/graphql-type'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'
import { TemplateContent, TemplateGrid } from './style'

/**
 * @description 类别 页面
 * @date 14/10/2022
 * @export
 * @param {{ data: any; pageContext: { category: string } }}
 * @return {*}
 */

export default function CategoryTemplate({
  data,
  pageContext,
}: {
  data: CategoryPageQuery
  pageContext: { category: string }
}) {
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
