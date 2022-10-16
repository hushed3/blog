import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { GlobalContainer } from '../styles/global'
import {
  BriefDescription,
  BriefWrapper,
  HighlightCard,
  HighlightPreview,
  IndexSection,
  RecentCard,
  RecentPreview,
  TagLink,
  TagLinks,
  Time,
  TitleLink,
} from './styles'

import { BriefHeader } from '../components/BriefHeader'
import { Heading } from '../components/Heading'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { IndexQueryQuery } from '../typings/graphql-type'
import config from '../utils/config'
import { getSimplifiedPosts, slugify } from '../utils/helpers'

export default function Index({ data }: { data: IndexQueryQuery }) {
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
          <BriefHeader title="Hi, I'm  Hush" index>
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
                  <Time className="recent">{post.date}</Time>
                  <TitleLink to={post.slug}>{post.title}</TitleLink>
                  <TagLinks>
                    {post.categories
                      .filter((cat) => cat !== 'Highlight')
                      .map((cat) => {
                        return (
                          <TagLink to={`/categories/${slugify(cat)}`} key={slugify(cat)}>
                            {cat}
                          </TagLink>
                        )
                      })}
                  </TagLinks>
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
                    {post.thumbnail && <Img style={{ marginRight: '5px' }} fixed={post.thumbnail} />}
                    <div>
                      <Time>{post.date}</Time>
                      <TitleLink to={post.slug}>{post.title}</TitleLink>
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
