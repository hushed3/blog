import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { MeSidebar } from '../components/MeSidebar'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import config from '../utils/config'

/**
 * @description Me 页面
 * @date 09/10/2022
 * @export
 * @param {*} { data }
 * @return {*}
 */
export default function PageTemplate({ data }: { data: any }) {
  const post = data.markdownRemark
  const { title } = post.frontmatter

  return (
    <div>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="hero">
              <h1>{title}</h1>
            </div>
            <section className="segment small">
              <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
          </div>

          <MeSidebar />
        </div>
      </div>
    </div>
  )
}

PageTemplate.Layout = Layout

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`
