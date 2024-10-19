import { Alert, Tag } from 'antd'
import { MergeComponents } from '@mdx-js/react/lib'

import { toCodeParams, ToPreParams } from '@/utils/code'
import Headings from './Heading'
import PreHighlight from './Pre'
import CodeHighlight from './Code'
import Blockquote from './Blockquote'
import Lists from './Lists'
import Table from './Table'
import A from './A'

const components = {
  code: (props) => {
    const codeProps = toCodeParams(props)

    return <CodeHighlight {...codeProps} />
  },
  pre: (props) => {
    const preProps = ToPreParams(props)

    return <PreHighlight {...preProps!} />
  },
  Alert: (props) => {
    const { children, message } = props

    return <Alert {...props} message={children || message} style={{ marginBlockStart: '1.2rem' }} />
  },
  Tag: (props) => {
    return <Tag {...props} bordered={false} style={{ fontWeight: props.bold ? 'bold' : 'inherit' }} />
  },
  p: (props) => {
    return <p {...props}></p>
  },
  sup: (props) => {
    console.log(props)
    return <></>
  },
  a: A,
  blockquote: Blockquote,
  table: Table,
  ...Headings,
  ...Lists,
} as unknown as MergeComponents

export default components
