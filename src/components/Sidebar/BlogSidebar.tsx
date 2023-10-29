import { Card } from 'antd'
import { useStyles } from './style'

import Sticky from '../Sticky'
import MenuBar from '../MenuBar'
import { useGetTaxonomies } from '@/hooks'

/**
 * @description 归档页面 - 侧边类别、标签信息
 */

const BlogSidebar = () => {
  const { styles } = useStyles()

  const { tags, categories } = useGetTaxonomies()

  return (
    <Sticky>
      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>类别</MenuBar.Title>
          {categories.map((c) => (
            <MenuBar.Link marker={false} key={c.name} to={`/categories/${c.name}/`} extra={c.totalCount}>
              {c.name}
            </MenuBar.Link>
          ))}
        </MenuBar>
      </Card>
      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>标签</MenuBar.Title>
          {tags.map((t) => (
            <MenuBar.Tag key={t.name} to={`/tags/${t.name}/`}>
              {t.name}
            </MenuBar.Tag>
          ))}
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default BlogSidebar
