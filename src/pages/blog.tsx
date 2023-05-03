import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'

import { Layout } from '../layout/index'
import { BriefHeader } from '../components/BriefHeader'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'
import { getSimplifiedPosts } from '../utils/helpers'
import { useStyles } from '../styles/pages/blog.style'

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<BlogPageProps>} { data }
 * @return {*}
 */
export default function Blog({ data }: PageProps<BlogPageProps>) {
  const { styles } = useStyles()
  const edges = data.posts.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(edges), [edges])
  const title = '文章归档'
  const description = 'Notes & tutorials'
  return (
    <>
      <SEO helmetTitle={title} customDescription={description} />

      <div className={styles.container}>
        <div>
          <BriefHeader title={title} />
          <Posts data={simplifiedPosts} />
        </div>
        <BlogSidebar />
      </div>
    </>
  )
}

Blog.Layout = Layout

export const blogQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
