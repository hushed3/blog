import { graphql, useStaticQuery } from 'gatsby'

interface GroupItem {
  name: string
  totalCount: number
}

type Group = Record<'group', GroupItem[]>

type Taxonomies = Record<'tags' | 'categories', Group>

export const useGetTaxonomies = () => {
  const { tags, categories } = useStaticQuery<Taxonomies>(
    graphql`
      query TaxonomyQuery {
        tags: allMdx {
          group(field: { frontmatter: { tags: SELECT } }) {
            name: fieldValue
            totalCount
          }
        }
        categories: allMdx {
          group(field: { frontmatter: { categories: SELECT } }) {
            name: fieldValue
            totalCount
          }
        }
      }
    `
  )

  return { tags: tags.group, categories: categories.group }
}
