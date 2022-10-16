import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { SEO } from '../components/SEO'
import { MeSidebar } from '../components/Sidebar/MeSidebar'
import { Layout } from '../layout/index'
import { GlobalContainer } from '../styles/global'
import config from '../utils/config'
import { TemplateContent, TemplateGrid, TemplateHeader, TemplateSection } from './style'

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
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <GlobalContainer>
        <TemplateGrid>
          <TemplateContent>
            <TemplateHeader>{title}</TemplateHeader>
            <TemplateSection>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </TemplateSection>
          </TemplateContent>

          <MeSidebar />
        </TemplateGrid>
      </GlobalContainer>
    </>
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
