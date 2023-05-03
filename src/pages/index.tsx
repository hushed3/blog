import { graphql, Link, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'

import { BriefHeader } from '../components/BriefHeader'
import { Heading } from '../components/Heading'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { getSimplifiedPosts } from '../utils/helpers'

import { useStyles } from '../styles/pages/index.style'

/**
 * @description 首页
 * @date 23/10/2022
 * @export
 * @param {PageProps<IndexPageProps>} { data }
 * @return {*}
 */
export default function Index({ data }: PageProps<IndexPageProps>) {
  const { styles } = useStyles()
  const latest = data.latest.edges
  const Highlights = data.Highlights.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedHighlights = useMemo(
    () => getSimplifiedPosts(Highlights, { shortTitle: false, thumbnails: true }),
    [Highlights]
  )

  return (
    <>
      <SEO />

      <div className={styles.container}>
        <div className={styles.brief}>
          <BriefHeader title="Hey, I'm &nbsp; 𝓱𝓾𝓼𝓱">
            <div className={styles.briefDescription}>
              𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒍𝒊𝒗𝒆 𝒂 𝒍𝒊𝒇𝒆 𝒚𝒐𝒖‘𝒓𝒆 𝒑𝒓𝒐𝒖𝒅 𝒐𝒇. 𝑰𝒇 𝒚𝒐𝒖 𝒇𝒊𝒏𝒅 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖’𝒓𝒆 𝒏𝒐𝒕, 𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒔𝒕𝒓𝒆𝒏𝒈𝒕𝒉 𝒕𝒐 𝒔𝒕𝒂𝒓𝒕
              𝒂𝒍𝒍 𝒐𝒗𝒆𝒓 𝒂𝒈𝒂𝒊𝒏. <br />
              <br />
              我希望你过着自己引以为傲的生活。 如果你发现事实并非如此，我希望你有勇气重新开始。
            </div>
            <div className={styles.briefDescription}>𝑯𝒂𝒗𝒆 𝒂 𝒈𝒐𝒐𝒅 𝒅𝒂𝒚... </div>
          </BriefHeader>
        </div>

        <div className={styles.previewWrapper}>
          <Heading title="最近内容" slug="/blog" />
          <div className={styles.preview}>
            {simplifiedLatest.map((post) => {
              return (
                <div className={styles.recentCard} key={post.slug}>
                  <time className={styles.time}>{post.date}</time>
                  <Link className={styles.titleLink} to={post.slug}>
                    {post.title}
                  </Link>
                  <div className={styles.tagLinks}>
                    {post.categories &&
                      post.categories
                        .filter((cat) => cat !== 'Highlight')
                        .map((cat) => {
                          return (
                            <Link to={`/categories/${cat}`} key={cat}>
                              {cat}
                            </Link>
                          )
                        })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* 查找posts目录下带有 Highlight 的markdown文件 */}
        {simplifiedHighlights.length > 0 && (
          <div className={styles.previewWrapper}>
            <Heading title="热门内容" />

            <div className={styles.preview}>
              {simplifiedHighlights.map((post) => {
                return (
                  <div className={styles.highlightCard} key={`Highlight-${post.slug}`}>
                    {post.thumbnail && <GatsbyImage image={post.thumbnail} alt="" />}
                    <div className="content">
                      <time className={styles.time}>{post.date}</time>
                      <Link className={styles.titleLink} to={post.slug}>
                        {post.title}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { frontmatter: { date: DESC } }
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
    Highlights: allMarkdownRemark(
      limit: 12
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
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
                gatsbyImageData(width: 100, height: 100)
              }
            }
          }
        }
      }
    }
  }
`
