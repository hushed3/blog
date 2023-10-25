import { Anchor, Card } from 'antd'
import React from 'react'
import { useStyles } from './style'

import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor'
import { SVGIcon, SVGIconTypes } from '../SvgIcon'
import MenuBar from '../MenuBar'
import Sticky from '../Sticky'

/**
 * @description 文章详细信息侧边
 */

interface Props {
  date?: string
  tags?: string[]
  categories?: string[]
  icon?: SVGIconTypes
  headings: AnchorLinkItemProps[]
}

export const ArticleSidebar = ({ tags = [], date, categories = [], icon, headings }: Props) => {
  const { styles } = useStyles()

  const categorys = categories?.filter((category) => category !== 'Highlight')

  const handleClick = (e: React.MouseEvent<HTMLElement>, link: { title: React.ReactNode; href: string }) => {
    e.preventDefault()
    document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Sticky>
      <SVGIcon id={icon!} width="8rem" height="8rem" style={{ margin: '0 auto', display: 'block' }}></SVGIcon>
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
          <Anchor className={styles.anchor} targetOffset={90} affix={true} items={headings} onClick={handleClick} />
        </MenuBar>
      </Card>
    </Sticky>
  )
}
