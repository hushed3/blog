import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { SEO } from '../components/SEO'
import { PostSidebar as TemplateSide } from '../components/Sidebar/PostSidebar'
import { Layout } from '../layout/index'
import { useStyles } from '../styles/templates/style'

interface Props {
  markdownRemark: {
    html: string
    excerpt?: string
    headings: { id: string }[]
    fields: { slug?: string }
    frontmatter: {
      title: string | null
      date: any | null
      tags: string[]
      categories: string[]
      thumbnail?: { childImageSharp?: { gatsbyImageData: any } }
    }
  }
}

/**
 * @description 文章页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<PostBySlugQuery>} { data }
 * @return {*}
 */
export default function PostTemplate({ data }: PageProps<Props>) {
  const { styles } = useStyles()
  const { markdownRemark } = data
  const { headings, fields, html } = markdownRemark
  const { tags, categories, title, date, thumbnail } = markdownRemark.frontmatter

  return (
    <>
      <SEO helmetTitle={title as string} postPath={fields.slug} postNode={markdownRemark} postSEO />
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <div id={fields.slug} dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <TemplateSide date={date} tags={tags} categories={categories} thumbnail={thumbnail} headings={headings} />
      </div>
    </>
  )
}

PostTemplate.Layout = Layout

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
