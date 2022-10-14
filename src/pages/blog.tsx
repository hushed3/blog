import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'

import { BlogContainer } from '../components/BlogContainer'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { BlogQueryQuery } from '../typings/graphql-type'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'

export default function Blog({ data }: { data: BlogQueryQuery }) {
  const posts = data.posts.edges
  const simplifiedPosts = useMemo<SimplifiedData[]>(() => getSimplifiedPosts(posts), [posts])
  const title = '文章归档'
  const description = 'Notes & tutorials'
  return (
    <div>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />

      <BlogContainer>
        <header className="hero">
          <h1>{title}</h1>
        </header>
        <Posts data={simplifiedPosts} />
      </BlogContainer>
    </div>
  )
}

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
