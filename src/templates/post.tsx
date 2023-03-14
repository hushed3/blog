import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { PostBySlugQuery } from '../../gatsby-graphql'

import { SEO } from '../components/SEO'
import { PostSidebar as TemplateSide } from '../components/Sidebar/PostSidebar'
import { Layout } from '../layout/index'
import { TemplateContainer, TemplateContent, TemplateHeader, TemplateSection } from '../styles/templates'
import config from '../utils/config'

/**
 * @description 文章页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<PostBySlugQuery>} { data }
 * @return {*}
 */
export default function PostTemplate({ data }: PageProps<PostBySlugQuery>) {
  const post = data.markdownRemark!
  const { headings } = post
  const { tags, categories, title, date, thumbnail } = { ...post?.frontmatter }
  const { slug } = { ...post?.fields }

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={post} postSEO />
      <TemplateContainer>
        <TemplateContent>
          <TemplateHeader>{title}</TemplateHeader>
          <TemplateSection>
            <div id={slug as string} dangerouslySetInnerHTML={{ __html: post?.html as string }} />
          </TemplateSection>
        </TemplateContent>

        <TemplateSide date={date} tags={tags} categories={categories} thumbnail={thumbnail} headings={headings} />
      </TemplateContainer>
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
