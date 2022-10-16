import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { SEO } from '../components/SEO'
import { PostSidebar } from '../components/Sidebar/PostSidebar'
import { Layout } from '../layout/index'
import { GlobalContainer } from '../styles/global'
import config from '../utils/config'
import { TemplateContent, TemplateGrid, TemplateHeader, TemplateSection } from './style'

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
      <GlobalContainer>
        <TemplateGrid>
          <TemplateContent>
            <TemplateHeader>{title}</TemplateHeader>
            <TemplateSection>
              <div id={post.fields.slug} dangerouslySetInnerHTML={{ __html: post.html }} />
            </TemplateSection>
          </TemplateContent>

          <PostSidebar date={date} tags={tags} categories={categories} thumbnail={thumbnail} />
        </TemplateGrid>
      </GlobalContainer>
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
