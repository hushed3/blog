import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { PostSidebar } from '../components/PostSidebar'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import config from '../utils/config'

/**
 * @description 文章 页面
 * @date 09/10/2022
 * @export
 * @param {*} { data }
 * @return {*}
 */
export default function PostTemplate({ data }: { data: any }) {
  const post = data.markdownRemark
  const { tags, categories, title, date, thumbnail } = post.frontmatter

  return (
    <>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} postSEO />
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="post-header medium width">
              <h1>{title}</h1>
            </div>
            <section className="segment small">
              <div id={post.fields.slug} className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
          </div>

          <PostSidebar date={date} tags={tags} categories={categories} thumbnail={thumbnail} />
        </div>
      </div>
    </>
  )
}

PostTemplate.Layout = Layout

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
