import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import { Layout } from '/src/layout/index'
import { SEO } from '/src/components/SEO'
import { Heading } from '/src/components/Heading'
import { Hero } from '/src/components/Hero'
import { getSimplifiedPosts } from '/src/utils/helpers'
import config from '/src/utils/config'
import { slugify } from '/src/utils/helpers'

export default function Index({ data }) {
  const latest = data.latest.edges
  const Populars = data.Populars.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedPopulars = useMemo(
    () => getSimplifiedPosts(Populars, { shortTitle: false, thumbnails: true }),
    [Populars]
  )
  console.log(simplifiedPopulars)
  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO />

      <div className="container">
        <div className="hero-wrapper">
          <Hero title="Hi, I'm  Hush" index>
            <p className="hero-description small width">
              𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒍𝒊𝒗𝒆 𝒂 𝒍𝒊𝒇𝒆 𝒚𝒐𝒖‘𝒓𝒆 𝒑𝒓𝒐𝒖𝒅 𝒐𝒇. 𝑰𝒇 𝒚𝒐𝒖 𝒇𝒊𝒏𝒅 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖’𝒓𝒆 𝒏𝒐𝒕, 𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒔𝒕𝒓𝒆𝒏𝒈𝒕𝒉 𝒕𝒐 𝒔𝒕𝒂𝒓𝒕
              𝒂𝒍𝒍 𝒐𝒗𝒆𝒓 𝒂𝒈𝒂𝒊𝒏. <br />
              <br />
              我希望你过着自己引以为傲的生活。 如果你发现事实并非如此，我希望你有勇气重新开始。
            </p>
            <p className="hero-description small width">𝑯𝒂𝒗𝒆 𝒂 𝒈𝒐𝒐𝒅 𝒅𝒂𝒚. </p>
          </Hero>
        </div>
      </div>
      <div className="container">
        <section className="segment">
          <Heading title="最近内容" slug="/blog" />

          <div className="post-preview">
            {simplifiedLatest.map((post) => {
              return (
                <div className="anchored card" key={post.slug}>
                  <time>{post.date}</time>
                  <Link className="card-header" to={post.slug}>
                    {post.title}
                  </Link>
                  <div className="anchored categories">
                    {post.categories
                      .filter((cat) => cat !== 'Highlight')
                      .map((cat) => {
                        return (
                          <Link className="cat" to={`/categories/${slugify(cat)}`} key={slugify(cat)}>
                            {cat}
                          </Link>
                        )
                      })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 查找posts目录下带有 Popular 的markdown文件 */}
        {simplifiedPopulars.length > 0 && (
          <section className="segment">
            <Heading title="热门内容" />

            <div className="highlight-preview">
              {simplifiedPopulars.map((post) => {
                return (
                  <div className="muted card flex" key={`popular-${post.slug}`}>
                    {post.thumbnail && <Img style={{ marginRight: '5px' }} fixed={post.thumbnail} />}
                    <div>
                      <time>{post.date}</time>
                      <Link className="card-header" to={post.slug}>
                        {post.title}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    Populars: allMarkdownRemark(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 50, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
