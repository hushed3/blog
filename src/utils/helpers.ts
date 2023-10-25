/**
 * @description 简化数据
 * @date 24/10/2023
 * @param {GraphqlNodeList} [nodes]
 * @param {(e: GraphqlNode) => FrontmatterData} [callback]
 * @return {*}  {FrontmatterData[]}
 */
export const simplifiedData = (
  nodes?: GraphqlNodeList,
  callback?: (e: GraphqlNode) => FrontmatterData | null
): FrontmatterData[] => {
  if (!nodes) return []

  const result = nodes
    .map((node) => {
      const { frontmatter } = node

      const newNode = {
        ...node,
        ...frontmatter,
      }

      if (callback) {
        return callback(newNode)
      }

      return newNode
    })
    .filter((e) => e !== null) as FrontmatterData[]

  return result
}
