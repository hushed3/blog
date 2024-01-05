import { Anchor, Card } from 'antd'
import { useStyles } from './style'

import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor'
import SVGIcon, { SVGIconTypes } from '../SvgIcon'
import MenuBar from '../MenuBar'
import Sticky from '../Sticky'

interface ArticleSidebarProps {
  date?: string
  tags?: string[]
  categories?: string[]
  icon?: SVGIconTypes
  headings: AnchorLinkItemProps[]
}

/**
 * @description 文章详细信息侧边
 */

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({ tags = [], date, categories = [], icon, headings }) => {
  const { styles } = useStyles()

  const categorys = categories?.filter((category) => category !== 'Highlight')

  const handleChange = (link: string) => {
    if (!link || link === location.hash) return

    history.pushState(null, '', link)
  }

  return (
    <Sticky>
      <SVGIcon id={icon!} width="8em" height="8em" style={{ margin: '0 auto', display: 'block' }}></SVGIcon>
      {/* <Card bordered={false} className={styles.card}>
          <h2>About me</h2>
        </Card> */}

      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>日期</MenuBar.Title>
          <MenuBar.Text>发布于 {date}</MenuBar.Text>

          <MenuBar.Title>类别</MenuBar.Title>
          {categorys.map((c) => (
            <MenuBar.Link key={c} to={`/categories/${c}/`}>
              {c}
            </MenuBar.Link>
          ))}

          <MenuBar.Title>标签</MenuBar.Title>
          {tags.map((t) => (
            <MenuBar.Tag key={t} to={`/tags/${t}/`}>
              {t}
            </MenuBar.Tag>
          ))}
        </MenuBar>
      </Card>

      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>目录</MenuBar.Title>
          <Anchor className={styles.anchor} offsetTop={90} affix={false} items={headings} onChange={handleChange} />
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default ArticleSidebar
