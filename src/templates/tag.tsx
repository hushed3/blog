import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'

import { BriefHeader } from '../components/BriefHeader'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'
import { Layout } from '../layout/index'
import { GlobalContainer } from '../styles/global'
import { TagPageQuery } from '../typings/graphql-type'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'
import { TemplateContent, TemplateGrid } from './style'

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
    <>
      <Helmet title={`Posts tagged: ${tag} | ${config.siteTitle}`} />
      <SEO />

      <GlobalContainer as="header">
        <TemplateGrid>
          <TemplateContent>
            <BriefHeader highlight={totalCount} subTitle={message} title={tag} />
            <Posts data={simplifiedPosts} />
          </TemplateContent>
          <BlogSidebar />
        </TemplateGrid>
      </GlobalContainer>
    </>
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
