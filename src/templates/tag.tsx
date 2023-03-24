import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { TagPageQuery, TagPageQueryVariables } from '../../gatsby-graphql'

import { BriefHeader } from '../components/BriefHeader'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'
import { Layout } from '../layout/index'
import { TemplateArticle, TemplateContainer } from '../styles/templates'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'

/**
 * @description 标签页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<TagPageQuery, TagPageQueryVariables>} { data, pageContext }
 * @return {*}
 */
export default function TagTemplate({ data, pageContext }: PageProps<TagPageQuery, TagPageQueryVariables>) {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])
  const message = totalCount === 1 ? ' post tagged:' : ' posts tagged:'

  return (
    <>
      <Helmet title={`Posts tagged: ${tag} | ${config.siteTitle}`} />
      <SEO />

      <TemplateContainer>
        <TemplateArticle>
          <BriefHeader highlight={totalCount} subTitle={message} title={tag} />
          <Posts data={simplifiedPosts} />
        </TemplateArticle>
        <BlogSidebar />
      </TemplateContainer>
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
