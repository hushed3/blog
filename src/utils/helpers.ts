/**
 * @description 简化数据
 * @date 24/10/2023
 * @param {GraphqlNode[]} [nodes]
 * @param {(e: GraphqlNode) => SimplifiedQueryData} [callback]
 * @return {*}  {SimplifiedQueryData[]}
 */
export const simplifiedQueryData = (
  nodes?: GraphqlNode[],
  callback?: (e: GraphqlNode) => SimplifiedQueryData | null
): SimplifiedQueryData[] => {
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
    .filter((e) => e !== null) as SimplifiedQueryData[]

  return result
}
