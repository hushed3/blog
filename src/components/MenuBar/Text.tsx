import { FunctionComponent, ReactNode, useContext, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useStyles } from './style'
import { MenuBarContext } from './MenuBar'
import { useSSREffect } from '@/hooks'

interface TextProps {
  children: ReactNode
  extra?: ReactNode
  marker?: boolean
}

const Text: FunctionComponent<TextProps> = ({ children, marker = true, extra }) => {
  const { styles, cx, prefixCls } = useStyles()
  const scopedTextRef = useRef<HTMLDivElement>(null)
  const { textRef, setTextRef } = useContext(MenuBarContext)

  useSSREffect(() => {
    if (!textRef) {
      setTextRef && setTextRef(scopedTextRef.current)
    }
  }, [])

  const ExtraChildren = () => {
    if (typeof extra !== 'object') {
      return <span className="extra">{extra}</span>
    }

    return extra
  }

  return (
    <div ref={scopedTextRef} className={cx(styles.textGroup)}>
      {textRef &&
        createPortal(
          <div className={cx(styles.text)}>
            <div>
              {marker && <span className="inkVisible"></span>}
              {children}
            </div>
            <ExtraChildren />
          </div>,
          textRef
        )}
    </div>
  )
}

export default Text
