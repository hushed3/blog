import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { SEO } from '../components/SEO'
import { MeSidebar } from '../components/Sidebar/MeSidebar'
import { GlobalContainer } from '../styles/components/global'
import { TemplateContent, TemplateGrid, TemplateHeader, TemplateSection } from '../styles/components/templates'
import config from '../utils/config'

import { MeBySlug } from './__generated__/MeBySlug'

/**
 * @description Me 页面
 * @date 17/10/2022
 * @export
 * @param {PageProps<MeBySlug>} { data }
 * @return {*}
 */

export default function MeTemplate({ data }: PageProps<MeBySlug>) {
  const post = data.markdownRemark!
  const { title } = { ...post.frontmatter }

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <GlobalContainer>
        <TemplateGrid>
          <TemplateContent>
            <TemplateHeader>{title}</TemplateHeader>
            <TemplateSection>
              <div dangerouslySetInnerHTML={{ __html: post.html as string }} />
            </TemplateSection>
          </TemplateContent>

          <MeSidebar />
        </TemplateGrid>
      </GlobalContainer>
    </>
  )
}

export const pageQuery = graphql`
  query MeBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`
