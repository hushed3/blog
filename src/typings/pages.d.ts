// import { IGatsbyImageData } from 'gatsby-plugin-image'

type SimplifiedData = {
  id: string
  date: string
  title: string
  slug: string
  tags: string[]
  categories: string[]
  thumbnail?: IGatsbyImageData
}

type YearListData = Record<string, SimplifiedData[]>

interface ImageItem {
  id: number
  idx: number
  name: string
  url: string
  thumbnail: string
}

interface CategoryData {
  category: string
}

interface FieldsData {
  slug: string
}

interface TagData {
  tag: string
}

interface FrontmatterData {
  date: string
  title: string
  tags: string[]
  categories: string[]
  thumbnail?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

interface NodeData {
  id: string
  fields: FieldsData
  frontmatter: FrontmatterData
}

type NodeItem = Record<'node', NodeData>

type EdgesData = Record<'edges', NodeItem[]>

type AllMarkdownRemark<T> = Record<'allMarkdownRemark', T>

/**
 * @description 归档页面props
 * @date 1/5/2023
 * @export
 */
type BlogPageProps = Record<'posts', EdgesData>

/**
 * @description 首页页面props
 * @date 1/5/2023
 * @export
 */
type IndexPageProps = Record<'latest' | 'Highlights', EdgesData>

/**
 * @description 类别页面props
 * @date 1/5/2023
 * @export
 */

type CategoryPageProps = AllMarkdownRemark<{ totalCount: number } & EdgesData>

/**
 * @description 标签页面props
 * @date 1/5/2023
 * @export
 */
type TagPageProps = AllMarkdownRemark<{ totalCount: number } & EdgesData>
