import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from './components'

export type PrismSyntaxHighlightProps = {
  mdxContent: string
}

export const PrismSyntaxHighlight: React.FC<React.PropsWithChildren<PrismSyntaxHighlightProps>> = ({ mdxContent }) => {
  return <MDXProvider components={components}>{mdxContent}</MDXProvider>
}

export default PrismSyntaxHighlight
