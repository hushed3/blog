import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { SEO } from '../components/SEO'
import { PostSidebar } from '../components/Sidebar/PostSidebar'
import { Layout } from '../layout/index'
import { GlobalContainer } from '../styles/components/global'
import { TemplateContent, TemplateGrid, TemplateHeader, TemplateSection } from '../styles/components/templates'
import config from '../utils/config'
import { PostBySlug, PostBySlug_markdownRemark } from './__generated__/PostBySlug'

/**
 * @description  文章 页面
 * @date 17/10/2022
 * @export
 * @param {PageProps<PostBySlug>} { data }
 * @return {*}
 */
export default function PostTemplate({ data }: PageProps<PostBySlug>) {
  const post = data.markdownRemark!
  const { tags, categories, title, date, thumbnail } = { ...post?.frontmatter }
  const { slug } = { ...post?.fields }

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={post as PostBySlug_markdownRemark} postSEO />
      <GlobalContainer>
        <TemplateGrid>
          <TemplateContent>
            <TemplateHeader>{title}</TemplateHeader>
            <TemplateSection>
              <div id={slug as string} dangerouslySetInnerHTML={{ __html: post?.html as string }} />
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
  query PostBySlug($slug: String!) {
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
