import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { BlogQueryQuery } from '../../gatsby-graphql'

import { BriefHeader } from '../components/BriefHeader'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'
import { Layout } from '../layout/index'
import { BlogContainer, BlogContent } from '../styles/pages'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<BlogQueryQuery>} { data }
 * @return {*}
 */
export default function Blog({ data }: PageProps<BlogQueryQuery>) {
  const posts = data.posts.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])
  const title = '文章归档'
  const description = 'Notes & tutorials'
  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />

      <BlogContainer as="header">
        <BlogContent>
          <BriefHeader title={title} />
          <Posts data={simplifiedPosts} />
        </BlogContent>
        <BlogSidebar />
      </BlogContainer>
    </>
  )
}

Blog.Layout = Layout

export const blogQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
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
