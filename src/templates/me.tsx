import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { MeBySlugQuery } from '../../gatsby-graphql'

import { SEO } from '../components/SEO'
import { MeSidebar } from '../components/Sidebar/MeSidebar'
import { useStyles } from '../styles/templates/style'

/**
 * @description 个人介绍页面
 * @date 23/10/2022
 * @export
 * @param {PageProps<MeBySlugQuery>} { data }
 * @return {*}
 */
export default function MeTemplate({ data }: PageProps<MeBySlugQuery>) {
  const { styles } = useStyles()
  const post = data.markdownRemark!
  const { title } = { ...post.frontmatter }

  return (
    <>
      <SEO helmetTitle={title as string} />
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html as string }} />
        </div>

        <MeSidebar />
      </div>
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
