import { FunctionComponent } from 'react'
import { useResponsive, useTheme } from 'antd-style'
import { Affix } from 'antd'

interface StickyProps {
  children
}

const Sticky: FunctionComponent<StickyProps> = ({ children }) => {
  const { mobile } = useResponsive()
  const token = useTheme()

  return (
    <Affix offsetTop={(mobile ? token.headerHeightMobile : token.headerHeight) + 30}>
      <aside>{children}</aside>
    </Affix>
  )
}

export default Sticky
