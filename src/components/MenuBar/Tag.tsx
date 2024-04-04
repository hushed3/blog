import { FunctionComponent, ReactNode, useContext, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { navigate } from 'gatsby'
import { Tag as AntdTag } from 'antd'
import { isSSR } from '@/utils/func'
import { useStyles } from './style'
import { MenuBarContext } from './MenuBar'
import { useSSREffect } from '@/hooks'

interface TagProps {
  to: string
  children: ReactNode
}

const Tag: FunctionComponent<TagProps> = ({ to, children }) => {
  const { styles, cx } = useStyles()
  const scopedTagRef = useRef<HTMLDivElement>(null)
  const { tagRef, setTagRef } = useContext(MenuBarContext)

  useSSREffect(() => {
    if (!tagRef) {
      setTagRef && setTagRef(scopedTagRef.current)
    }
  }, [])

  const pathname = useMemo(() => {
    if (isSSR) return ''
    return location.pathname
  }, [])

  return (
    <>
      <div ref={scopedTagRef} className={cx(styles.tagGroup)}>
        {tagRef &&
          createPortal(
            <AntdTag.CheckableTag
              className={cx(styles.tag)}
              checked={to === pathname}
              onClick={() => {
                navigate(to)
              }}
            >
              {children}
            </AntdTag.CheckableTag>,
            tagRef
          )}
      </div>
    </>
  )
}

export default Tag
