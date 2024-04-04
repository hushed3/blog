import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import ArticleList from '@/components/ArticleList'
import BriefHeader from '@/components/BriefHeader'
import SEO from '@/components/SEO'
import BlogSidebar from '@/components/Sidebar/BlogSidebar'
import { simplifiedQueryData } from '@/utils/helpers'
import { useStyles } from './styles/_blog.style'

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const Blog: React.FC<PageProps<allMdxNodesQuery & MdxNodesQuery>> = (props) => {
  const { data } = props
  const title = '文章归档'
  const description = 'Notes & tutorials'

  const nodes = data.allMdx.nodes

  const { styles } = useStyles()

  const articles = useMemo(() => simplifiedQueryData(nodes), [data])

  return (
    <div className={styles.container}>
      <div>
        <BriefHeader title={title} />
        <ArticleList data={articles} />
      </div>

      <BlogSidebar />
    </div>
  )
}

export default Blog

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO title="文章归档" description="Notes & tutorials" pathName={location.pathname} />
    </>
  )
}

export const blogQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { template: { eq: "article" } } }) {
      nodes {
        ...FrontmatterFragment
      }
    }
    mdx {
      ...FrontmatterFragment
    }
  }
`
