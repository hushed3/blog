import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import { useStyles } from '@/styles/pages/blog.style'

import { Layout } from '@/layout/index'
import { ArticleList } from '@/components/ArticleList'
import { BriefHeader } from '@/components/BriefHeader'
import { SEO } from '@/components/SEO'
import { simplifiedData } from '@/utils/helpers'
import { BlogSidebar } from '@/components/Sidebar/BlogSidebar'

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export default function Blog({ data }: PageProps<allMdxNodesQuery>) {
  const title = '文章归档'
  const description = 'Notes & tutorials'

  const nodes = data?.allMdx.nodes

  const { styles } = useStyles()

  const articles = useMemo(() => simplifiedData(nodes), [data])

  return (
    <>
      <SEO helmetTitle={title} customDescription={description} />

      <div className={styles.container}>
        <div>
          <BriefHeader title={title} />
          <ArticleList data={articles} />
        </div>

        <BlogSidebar />
      </div>
    </>
  )
}

Blog.Layout = Layout

export const blogQuery = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { template: { eq: "article" } } }) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
          template
          tags
          categories
          icon
        }
      }
    }
  }
`
