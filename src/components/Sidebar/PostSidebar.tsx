import { Link } from 'gatsby'
import React from 'react'
import { Anchor, PostSideImage, SideCard, SideSticky, SideTag, SideTags, SideTitle } from './style'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import { FileFilterInput } from '../../../gatsby-graphql'
import { slugify } from '../../utils/helpers'

/**
 * @description 侧边文章详细信息
 */

interface Props {
  date: string
  tags?: (string | null)[] | null
  categories?: (string | null)[] | null
  thumbnail?: FileFilterInput | null
  headings?: ({ id?: string | null } | null)[] | null
}

export const PostSidebar = ({ tags = [], date, categories = [], thumbnail, headings }: Props) => {
  const categorys = categories?.filter((category) => category !== 'Highlight')
  const { gatsbyImageData } = { ...thumbnail?.childImageSharp }

  const onclick = (row: { id?: string | null }) => {
    document.getElementById(row.id!)?.scrollIntoView(true)
  }
  return (
    <aside>
      <SideSticky>
        {thumbnail && <PostSideImage image={gatsbyImageData as IGatsbyImageData} alt="" />}
        {/* <SideCard>
        <h2>About me</h2>
        <img alt="Tania" className="sidebar-avatar" />
        <p>
          Hello and thanks for visiting! My name is <Link to="/me">Hush</Link>,
          and this is my website and digital garden. 🌱
        </p>
        <p>
          I'm a software developer who writes articles and tutorials about
          things that interest me. This site is and has always been free of ads,
          trackers, social media, affiliates, and sponsored posts.
        </p>
        <p>I hope you enjoy the post and have a nice day.</p>
      </SideCard> */}

        <SideCard>
          <SideTitle>日期</SideTitle>
          <ul>
            <li>发布于 {date}</li>
          </ul>

          <SideTitle>类别</SideTitle>
          {categorys && (
            <ul>
              {categorys.map((category) => {
                return (
                  <li key="category">
                    <Link to={`/categories/${slugify(category!)}`}>{category}</Link>
                  </li>
                )
              })}
            </ul>
          )}

          <SideTitle>标签</SideTitle>
          <SideTags>
            {tags &&
              tags.map((tag) => {
                return (
                  <SideTag key={tag} to={`/tags/${slugify(tag!)}`} activeClassName="active">
                    {tag}
                  </SideTag>
                )
              })}
          </SideTags>
        </SideCard>

        <SideCard>
          <SideTitle>目录</SideTitle>
          <ul style={{ marginBottom: 0 }}>
            {headings &&
              headings.map((item) => {
                return (
                  item && (
                    <Anchor key={item.id} onClick={() => onclick(item)}>
                      {item.id}
                    </Anchor>
                  )
                )
              })}
          </ul>
        </SideCard>
      </SideSticky>
    </aside>
  )
}
