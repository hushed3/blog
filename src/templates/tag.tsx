import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import { ArticleList } from '@/components/ArticleList'
import { BriefHeader } from '@/components/BriefHeader'
import { SEO } from '@/components/SEO'
import { BlogSidebar } from '@/components/Sidebar/BlogSidebar'
import { Layout } from '@/layout'
import { useStyles } from '@/styles/templates/style'
import { simplifiedData } from '@/utils/helpers'

/**
 * @description 标签页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export default function TagTemplate({ data, pageContext }: PageProps<allMdxNodesQuery<'tags'>, TagData>) {
  const { styles } = useStyles()
  const { tag } = pageContext

  const totalCount = data?.tags.totalCount
  const nodes = data?.tags.nodes
  const message = totalCount === 1 ? ' Article tagged:' : ' Articles tagged:'

  const simplifiedArticles = useMemo(() => simplifiedData(nodes), [nodes])

  return (
    <>
      <SEO helmetTitle={`articles tagged: ${tag}`} />

      <div className={styles.container}>
        <div>
          <BriefHeader highlight={totalCount} description={message} title={tag} />
          <ArticleList data={simplifiedArticles} />
        </div>
        <BlogSidebar />
      </div>
    </>
  )
}

TagTemplate.Layout = Layout

export const pageQuery = graphql`
  query TagPage($tag: String) {
    tags: allMdx(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          categories
          slug
          icon
        }
      }
    }
  }
`
