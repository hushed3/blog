import { Alert, Tag } from 'antd'
import _ from 'lodash'
import type { Components } from '@mdx-js/react/lib/index'

import { preToCodeParams, toCodeParams } from '@/utils/code'
import Headings from './Heading'
import PreHighlight from './Code/PreHighlight'
import CodeHighlight from './Code/CodeHighlight'
import Blockquote from './Blockquote'
import Lists from './Lists'
import Table from './Table'

// @ts-ignore
const components: Components = {
  code: (props) => {
    const { className, children } = props

    if (_.isEmpty(className)) {
      return <CodeHighlight children={children}></CodeHighlight>
    }

    if (className && /language\-/.test(className)) {
      const preProps = toCodeParams(props)

      return <PreHighlight {...preProps}></PreHighlight>
    }
  },
  ...Headings,
  Alert: (props) => {
    const { children } = props

    return <Alert {...props} message={children} />
  },
  Tag: (props) => (
    <Tag {...props} bordered={false}>
      {props.children}
    </Tag>
  ),
  blockquote: Blockquote,
  ...Lists,
  table: Table,
}
export default components
