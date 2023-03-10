import { graphql, Link, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { GlobalContainer } from '../styles/components/global'
import {
  BriefDescription,
  BriefWrapper,
  CardTagLinks,
  CardTime,
  CardTitleLink,
  HighlightCard,
  HighlightPreview,
  IndexSection,
  RecentCard,
  RecentPreview,
} from '../styles/components/pages'

import { IndexQueryQuery } from '../../gatsby-graphql'
import { BriefHeader } from '../components/BriefHeader'
import { Heading } from '../components/Heading'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import config from '../utils/config'
import { getSimplifiedPosts, slugify } from '../utils/helpers'

/**
 * @description 首页
 * @date 23/10/2022
 * @export
 * @param {PageProps<IndexQueryQuery>} { data }
 * @return {*}
 */
export default function Index({ data }: PageProps<IndexQueryQuery>) {
  const latest = data.latest.edges
  const Highlights = data.Highlights.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedHighlights = useMemo(
    () => getSimplifiedPosts(Highlights, { shortTitle: false, thumbnails: true }),
    [Highlights]
  )

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />

      <GlobalContainer>
        <BriefWrapper>
          <BriefHeader title="Hi, I'm  Hush">
            <BriefDescription>
              𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒍𝒊𝒗𝒆 𝒂 𝒍𝒊𝒇𝒆 𝒚𝒐𝒖‘𝒓𝒆 𝒑𝒓𝒐𝒖𝒅 𝒐𝒇. 𝑰𝒇 𝒚𝒐𝒖 𝒇𝒊𝒏𝒅 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖’𝒓𝒆 𝒏𝒐𝒕, 𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒔𝒕𝒓𝒆𝒏𝒈𝒕𝒉 𝒕𝒐 𝒔𝒕𝒂𝒓𝒕
              𝒂𝒍𝒍 𝒐𝒗𝒆𝒓 𝒂𝒈𝒂𝒊𝒏. <br />
              <br />
              我希望你过着自己引以为傲的生活。 如果你发现事实并非如此，我希望你有勇气重新开始。
            </BriefDescription>
            <BriefDescription>𝑯𝒂𝒗𝒆 𝒂 𝒈𝒐𝒐𝒅 𝒅𝒂𝒚. </BriefDescription>
          </BriefHeader>
        </BriefWrapper>
      </GlobalContainer>

      <GlobalContainer>
        <IndexSection>
          <Heading title="最近内容" slug="/blog" />
          <RecentPreview>
            {simplifiedLatest.map((post) => {
              return (
                <RecentCard key={post.slug}>
                  <CardTime>{post.date}</CardTime>
                  <CardTitleLink to={post.slug}>{post.title}</CardTitleLink>
                  <CardTagLinks>
                    {post.categories &&
                      post.categories
                        .filter((cat) => cat !== 'Highlight')
                        .map((cat) => {
                          return (
                            <Link to={`/categories/${slugify(cat)}`} key={slugify(cat)}>
                              {cat}
                            </Link>
                          )
                        })}
                  </CardTagLinks>
                </RecentCard>
              )
            })}
          </RecentPreview>
        </IndexSection>
        {/* 查找posts目录下带有 Highlight 的markdown文件 */}
        {simplifiedHighlights.length > 0 && (
          <IndexSection>
            <Heading title="热门内容" />

            <HighlightPreview>
              {simplifiedHighlights.map((post) => {
                return (
                  <HighlightCard key={`Highlight-${post.slug}`}>
                    {post.thumbnail && <GatsbyImage image={post.thumbnail} alt="" />}
                    <div className="content">
                      <CardTime>{post.date}</CardTime>
                      <CardTitleLink to={post.slug}>{post.title}</CardTitleLink>
                    </div>
                  </HighlightCard>
                )
              })}
            </HighlightPreview>
          </IndexSection>
        )}
      </GlobalContainer>
    </>
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
    Highlights: allMarkdownRemark(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
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
