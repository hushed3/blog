interface Options {
  thumbnails: boolean // 是否返回缩略图
}

/**
 * @description 简化文章信息
 * @date 23/06/2023
 * @param {NodeItem[]} [edges]
 * @param {Options} [options]
 * @return {*}  {SimplifiedData[]}
 */
export const getSimplifiedArticles = (edges?: NodeItem[], options?: Options): SimplifiedData[] => {
  if (!edges) return []
  return edges.map((edge) => {
    const { id, frontmatter } = edge.node

    return {
      id: id,
      title: frontmatter.title,
      date: frontmatter.date,
      slug: frontmatter.slug,
      tags: frontmatter.tags,
      categories: frontmatter.categories,
      thumbnail: options?.thumbnails ? frontmatter.thumbnail?.childImageSharp.gatsbyImageData : {},
    }
  })
}
