import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import { slugify } from '../utils/helpers'

/**
 * @description 侧边文章详细信息
 */

export const PostSidebar = ({
  tags = [],
  date,
  categories = [],
  thumbnail,
}: {
  tags: string[]
  date: string
  categories: string[]
  thumbnail: Record<string, any>
}) => {
  const category = categories?.filter((category) => category !== 'Popular')

  return (
    <aside className="post-sidebar">
      {thumbnail && (
        <div className="post-image">
          <Img fixed={thumbnail.childImageSharp?.fixed} />
        </div>
      )}
      {/* <div className="post-sidebar-card">
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
      </div> */}
      <div className="post-sidebar-card">
        <h2>日期</h2>
        <ul>
          <li>发布于 {date}</li>
        </ul>

        {category && (
          <div>
            <h2>类别</h2>
            <ul>
              <li>
                <Link to={`/categories/${slugify(category)}`}>{category}</Link>
              </li>
            </ul>
          </div>
        )}

        <h2>标签</h2>
        <div className="tags">
          {tags.map((tag) => {
            return (
              <Link key={tag} to={`/tags/${slugify(tag)}`} className="tag" activeClassName="active">
                {tag}
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
