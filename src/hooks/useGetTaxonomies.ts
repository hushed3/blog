import { graphql, useStaticQuery } from 'gatsby'
import { TaxonomyQueryQuery } from '../../gatsby-graphql'

export const useGetTaxonomies = (): TaxonomyQueryQuery => {
  const data = useStaticQuery(graphql`
    query TaxonomyQuery {
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          name: fieldValue
          totalCount
        }
      }

      categories: allMarkdownRemark {
        group(field: frontmatter___categories) {
          name: fieldValue
          totalCount
        }
      }
    }
  `)

  return data
}
