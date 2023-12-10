import { Alert, Tag } from 'antd';
import type { Components } from '@mdx-js/react/lib/index';
import { preToCodeBlock } from '@/utils/code';
import { headings } from './heading';
import { Code } from './code';

// @ts-ignore
const components: Components = {
  pre: (preProps) => {
    // @ts-ignore
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },

  ...headings,
  Alert: (props) => {
    const { children } = props

    return <Alert {...props} message={children} />
  },
  Tag: (props) => (
    <Tag {...props} bordered={false}>
      {props.children}
    </Tag>
  ),
}
export default components;
