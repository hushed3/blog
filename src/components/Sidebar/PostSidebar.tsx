import React from 'react'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Anchor, Card, Tag } from 'antd'
import { useStyles } from './style'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import { FileFilterInput } from '../../../gatsby-graphql'

/**
 * @description 文章详细信息侧边
 */

interface Props {
  date: string
  tags?: string[]
  categories?: string[]
  thumbnail?: FileFilterInput
  headings: { id: string }[]
}

export const PostSidebar = ({ tags = [], date, categories = [], thumbnail, headings }: Props) => {
  const { styles } = useStyles()

  const categorys = categories?.filter((category) => category !== 'Highlight')
  const { gatsbyImageData } = { ...thumbnail?.childImageSharp }
  const anchorList = headings.map((e) => ({ title: e.id, href: `#${e.id}`, key: e.id }))

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
          <img alt="Tania" className="sidebar-avatar" />
          <p>
            Hello and thanks for visiting! My name is <Link to="/me">Hush</Link>, and this is my website and digital
            garden. 🌱
          </p>
          <p>
            I'm a software developer who writes articles and tutorials about things that interest me. This site is and
            has always been free of ads, trackers, social media, affiliates, and sponsored posts.
          </p>
          <p>I hope you enjoy the post and have a nice day.</p>
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
            offsetTop={90}
            targetOffset={90}
            affix={false}
            items={anchorList}
            onClick={handleClick}
          ></Anchor>
        </Card>
      </div>
    </aside>
  )
}
