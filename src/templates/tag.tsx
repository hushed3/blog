import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'

import { BriefHeader } from '../components/BriefHeader'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { BlogSidebar } from '../components/Sidebar/BlogSidebar'
import { Layout } from '../layout/index'
import { getSimplifiedPosts } from '../utils/helpers'
import { useStyles } from '../styles/templates/style'

/**
 * @description 标签页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<TagPageProps, TagData>} { data, pageContext }
 * @return {*}
 */
export default function TagTemplate({ data, pageContext }: PageProps<TagPageProps, TagData>) {
  const { styles } = useStyles()
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const edges = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(edges), [edges])
  const message = totalCount === 1 ? ' post tagged:' : ' posts tagged:'

  return (
    <>
      <SEO helmetTitle={`Posts tagged: ${tag}`} />

      <div className={styles.container}>
        <div>
          <BriefHeader highlight={totalCount} description={message} title={tag} />
          <Posts data={simplifiedPosts} />
        </div>
        <BlogSidebar />
      </div>
    </>
  )
}

TagTemplate.Layout = Layout

export const pageQuery = graphql`query TagPage($tag: String) {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
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
}`
