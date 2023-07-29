import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import { SEO } from '@/components/SEO'
import { ArticleSidebar } from '@/components/Sidebar/ArticleSidebar'
import { Layout } from '@/layout/index'
import { useStyles } from '@/styles/templates/style'

/**
 * @description 文章页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export default function ArticleTemplate({ data }: PageProps<ArticleTemplateData>) {
  deckDeckGoHighlightElement()
  const { styles } = useStyles()

  const article = useMemo(() => data?.article, [data])

  const headings = article.headings
  const fields = article.fields
  const frontmatter = article.frontmatter
  const html = article.html as string

  return (
    <>
      <SEO helmetTitle={frontmatter?.title} articlePath={fields?.slug} articleNode={article} articleSEO />
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>{frontmatter?.title}</h2>
          <div id={frontmatter?.slug} dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <ArticleSidebar
          date={frontmatter?.date}
          tags={frontmatter?.tags}
          categories={frontmatter?.categories}
          thumbnail={frontmatter?.thumbnail}
          headings={headings}
        />
      </div>
    </>
  )
}

ArticleTemplate.Layout = Layout

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    article: markdownRemark(fields: { slug: { eq: $slug } }) {
      headings(depth: h4) {
        id
      }
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
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
`
