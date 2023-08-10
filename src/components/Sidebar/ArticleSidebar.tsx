import { Anchor, Card, Tag } from 'antd'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useStyles } from './style'

import { IGatsbyImageData } from 'gatsby-plugin-image'

/**
 * @description 文章详细信息侧边
 */

interface Props {
  date?: string
  tags?: string[]
  categories?: string[]
  thumbnail?: { childImageSharp?: { gatsbyImageData: any } }
  headings?: { id: string }[]
}

export const ArticleSidebar = ({ tags = [], date, categories = [], thumbnail, headings }: Props) => {
  const { styles } = useStyles()

  const { gatsbyImageData } = { ...thumbnail?.childImageSharp }

  const categorys = categories?.filter((category) => category !== 'Highlight')
  const anchorList = headings?.map((e) => ({ title: e.id, href: `#${e.id}`, key: e.id }))


  const handleClick = (e: React.MouseEvent<HTMLElement>, link: { title: React.ReactNode; href: string }) => {
    e.preventDefault()
    document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
  }

  return (
    <aside>
      <div className={styles.sticky}>
        {thumbnail && <GatsbyImage className={styles.image} image={gatsbyImageData as IGatsbyImageData} alt="" />}
        {/* <Card bordered={false} className={styles.card}>
          <h2>About me</h2>
        </Card> */}

        <Card bordered={false} className={styles.card}>
          {/* <div className={styles.card}> */}
          <div className={styles.title}>日期</div>
          <ul>
            <li>发布于 {date}</li>
          </ul>
          <div className={styles.title}>类别</div>
          {categorys && (
            <ul>
              {categorys.map((category) => {
                return (
                  <li key={category}>
                    <Link to={`/categories/${category}`}>{category}</Link>
                  </li>
                )
              })}
            </ul>
          )}
          <div className={styles.title}>标签</div>
          {tags &&
            tags.map((tag) => {
              return (
                <Tag
                  key={tag}
                  className={styles.tag}
                  bordered={false}
                  onClick={() => {
                    navigate(`/tags/${tag}`)
                  }}
                >
                  {tag}
                </Tag>
              )
            })}
        </Card>

        <Card bordered={false} className={styles.card}>
          <div className={styles.title}>目录</div>
          <Anchor
            className={styles.anchor}
            targetOffset={90}
            affix={true}
            items={anchorList}
            onClick={handleClick}
          ></Anchor>
        </Card>
      </div>
    </aside>
  )
}
