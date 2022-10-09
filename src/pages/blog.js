import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '/src/layout/index'
import { Posts } from '/src/components/Posts'
import { SEO } from '/src/components/SEO'
import { SidebarLayout } from '/src/components/SidebarLayout'
import { getSimplifiedPosts } from '/src/utils/helpers'
import config from '/src/utils/config'

export default function Blog({ data }) {
  const posts = data.posts.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])
  const title = '文章归档'
  const description = 'Notes & tutorials'
  return (
    <div>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />

      <SidebarLayout>
        <header className="hero">
          <h1>{title}</h1>
        </header>
        <Posts data={simplifiedPosts} showYears />
      </SidebarLayout>
    </div>
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
