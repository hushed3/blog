import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'

import { BriefHeader } from '../components/BriefHeader'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'
import { Layout } from '../layout/index'
import { GlobalContainer } from '../styles/global'
import { BlogQueryQuery } from '../typings/graphql-type'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'
import { BlogContent, BlogGrid } from './styles'

export default function Blog({ data }: { data: BlogQueryQuery }) {
  const posts = data.posts.edges
  const simplifiedPosts = useMemo<SimplifiedData[]>(() => getSimplifiedPosts(posts), [posts])
  const title = '文章归档'
  const description = 'Notes & tutorials'
  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />

      <GlobalContainer as="header">
        <BlogGrid>
          <BlogContent>
            <BriefHeader title={title} />
            <Posts data={simplifiedPosts} />
          </BlogContent>
          <BlogSidebar />
        </BlogGrid>
      </GlobalContainer>
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
