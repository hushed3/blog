import { Anchor, Card } from 'antd'
import { Link } from 'gatsby'
import { useStyles } from './style'

import SVGIcon from '../SvgIcon'
import MenuBar from '../MenuBar'
import Sticky from '../Sticky'
import { findMaxLevel } from '@/utils/helpers'
import type { HeadingItem } from '@/utils/helpers'

interface ArticleSidebarProps {
  date?: string
  icon?: any
  headings: HeadingItem[]
  articles: Frontmatter[]
}

/**
 * @description 文章详细信息侧边
 */

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({ icon, headings, articles }) => {
  const { styles } = useStyles(findMaxLevel(headings))

  const recents = articles.slice(0, 6)

  return (
    <Sticky>
      <SVGIcon id={icon!} width="7em" height="7em"></SVGIcon>
      {/* <Card bordered={false} className={styles.card}>
          <h2>About me</h2>
        </Card> */}

      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>目录</MenuBar.Title>
          <Anchor className={styles.anchor} offsetTop={90} affix={false} replace items={headings} />
        </MenuBar>
      </Card>

      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>近期发布</MenuBar.Title>
          {recents.map((recent) => (
            <Link className={styles.recent} to={`/${recent.slug}`} key={recent.slug}>
              <SVGIcon id={recent.icon} width="1.8em" height="1.8em"></SVGIcon>
              <div className="title">{recent.title.split('-')[1]}</div>
            </Link>
          ))}
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default ArticleSidebar
