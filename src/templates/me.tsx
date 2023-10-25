import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'

import { SEO } from '@/components/SEO'
import { MeSidebar } from '@/components/Sidebar/MeSidebar'
import { Layout } from '@/layout'
import { useStyles } from '@/styles/templates/style'

/**
 * @description 个人介绍页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export default function MeTemplate({ data }: PageProps<MeTemplatesData>) {
  const { styles } = useStyles()

  const me = data?.me

  return (
    <>
      <SEO helmetTitle={me?.frontmatter.title} />
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>{me?.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: me?.html as string }} />
        </div>

        <MeSidebar />
      </div>
    </>
  )
}

MeTemplate.Layout = Layout


export const pageQuery = graphql`
  query MeBySlug($slug: String!) {
    me: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
      }
    }
  }
`
