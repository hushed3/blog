import { visit } from 'unist-util-visit'

const transformer = (ast) => {
  const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g
  const highlightRegex = /\{([^}]*)\}/

  visit(ast, 'element', (node) => {
    let match

    if (node.tagName === 'code' && node.data && node.data.meta) {
      re.lastIndex = 0 // Reset regex.
      const matches = node.data.meta.match(highlightRegex)

      if (matches) {
        const highlightValue = matches[1]
        node.properties.highlight = highlightValue
      }

      const filterMeta = node.data.meta.replace(/\{[^}]*\}/, '')

      while ((match = re.exec(filterMeta))) {
        node.properties[match[1]] = match[2] || match[3] || match[4] || true
      }
    }
  })
}

const rehypeMetaAsAttributes = () => transformer

export default rehypeMetaAsAttributes
