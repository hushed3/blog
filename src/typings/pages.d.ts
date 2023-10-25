type TableOfContentsItem = {
  url: string
  title: string
}

type Frontmatter = {
  title: string
  tags: string[]
  date: string
  categories: string[]
  template: string
  slug: string
  icon: SVGIconTypes
}

type Internal = {
  contentFilePath: string
}

type GraphqlNode = {
  id: string
  frontmatter: Frontmatter
  tableOfContents: {
    items: TableOfContentsItem[]
  }
  internal: Internal
}

type GraphqlNodeList = GraphqlNode[]

interface CategoryData {
  category: string
}

interface TagData {
  tag: string
}

interface FrontmatterData {
  id: string

  title: string
  tags: string[]
  date: string
  categories: string[]
  template: string
  slug: string
  icon: SVGIconTypes

  thumbnail?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

type YearListData = Record<string, FrontmatterData[]>

type MdxQuery = {
  nodes: GraphqlNodeList
  totalCount: number
}

type MdxNodesQuery<T = 'mdx'> = Record<T, MdxQuery>

type allMdxNodesQuery<T = 'allMdx'> = Record<T, MdxQuery>
