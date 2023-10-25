import { FunctionComponent, ReactNode } from 'react'
import { Tag as AntdTag } from 'antd'
import { navigate } from 'gatsby'
import { getPathname } from '@/utils/func'
import { useStyles } from './style'

interface TagProps {
  to: string
  children: ReactNode
}

const Tag: FunctionComponent<TagProps> = ({ to, children }) => {
  const { styles } = useStyles()
  return (
    <AntdTag.CheckableTag
      className={styles.tag}
      checked={to === getPathname()}
      onClick={() => {
        navigate(to)
      }}
    >
      {children}
    </AntdTag.CheckableTag>
  )
}

export default Tag
