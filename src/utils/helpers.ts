interface Options {
  shortTitle: boolean // 是否返回标题的缩写
  thumbnails: boolean // 是否返回缩略图
}

export const getSimplifiedPosts = (edges: NodeItem[], options?: Options): SimplifiedData[] => {
  return edges.map((edge) => {
    const { id, frontmatter, fields } = edge.node

    return {
      id: id,
      title: frontmatter.title,
      date: frontmatter.date,
      slug: fields.slug,
      tags: frontmatter.tags,
      categories: frontmatter.categories,
      thumbnail: options?.thumbnails ? frontmatter.thumbnail?.childImageSharp.gatsbyImageData : {},
    }
  })
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
