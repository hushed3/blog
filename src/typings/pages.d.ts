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

interface TagData {
  tag: string
}

interface FieldsData {
  slug: string
}

interface FrontmatterData {
  title: string
  date: string
  tags: string[]
  categories: string[]
  template: string
  slug: string
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
 * @description 所有文章
 * @date 1/5/2023
 * @export
 */
type ArticlesData = Record<'articles', EdgesData>

/**
 * @description 首页文章查询
 * @date 1/5/2023
 * @export
 */
type HomeArticlesData = Record<'latest' | 'Highlights', EdgesData>

/**
 * @description 类别查询
 * @date 1/5/2023
 * @export
 */
interface CategorysData {
  categories: EdgesData
  totalCount: number
}

/**
 * @description 标签查询
 * @date 22/06/2023
 * @interface TagsData
 */
interface TagsData {
  tags: EdgesData
  totalCount: number
}

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
