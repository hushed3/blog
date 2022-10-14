import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'

import { BlogContainer } from '../components/BlogContainer'
import { Hero } from '../components/Hero'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { TagPageQuery } from '../typings/graphql-type'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'

/**
 * @description 标签 页面
 * @date 09/10/2022
 * @export
 * @param {*} { data, pageContext }
 * @return {*}
 */
export default function TagTemplate({ data, pageContext }: { data: TagPageQuery; pageContext: { tag: string } }) {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])
  const message = totalCount === 1 ? ' post tagged:' : ' posts tagged:'

  return (
    <div>
      <Helmet title={`Posts tagged: ${tag} | ${config.siteTitle}`} />
      <SEO />

      <BlogContainer>
        <Hero highlight={totalCount} subTitle={message} title={tag} />
        <Posts data={simplifiedPosts} />
      </BlogContainer>
    </div>
  )
}

TagTemplate.Layout = Layout

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
  }
`
