import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import { ArticleList } from '@/components/ArticleList'
import { BriefHeader } from '@/components/BriefHeader'
import { SEO } from '@/components/SEO'
import { BlogSidebar } from '@/components/Sidebar/BlogSidebar'
import { Layout } from '@/layout/index'
import { useStyles } from '@/styles/pages/blog.style'
import { getSimplifiedArticles } from '@/utils/helpers'

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export default function Blog({ data }: PageProps<ArticlesData>) {
  const { styles } = useStyles()

  const title = '文章归档'
  const description = 'Notes & tutorials'

  const edges = data?.articles.edges

  const simplifiedArticles = useMemo(() => getSimplifiedArticles(edges), [edges])

  return (
    <>
      <SEO helmetTitle={title} customDescription={description} />

      <div className={styles.container}>
        <div>
          <BriefHeader title={title} />
          <ArticleList data={simplifiedArticles} />
        </div>
        <BlogSidebar />
      </div>
    </>
  )
}

Blog.Layout = Layout

export const blogQuery = graphql`
  {
    articles: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "article" } } }
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
            slug
            template
            tags
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 100, height: 100)
              }
            }
          }
        }
      }
    }
  }
`
