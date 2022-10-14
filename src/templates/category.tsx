import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'

import { BlogContainer } from '../components/BlogContainer'
import { Hero } from '../components/Hero'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { CategoryPageQuery } from '../typings/graphql-type'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'

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
  let { category } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])
  const message = totalCount === 1 ? ' post categorized as:' : ' posts categorized as:'

  return (
    <div>
      <Helmet title={`${category} | ${config.siteTitle}`} />
      <SEO />

      <BlogContainer>
        <Hero highlight={totalCount} subTitle={message} title={category} />
        <Posts data={simplifiedPosts} />
      </BlogContainer>
    </div>
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
