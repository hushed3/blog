import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { GlobalContainer } from '../styles/global'
import {
  Description,
  HeroWrapper,
  PopularCard,
  PopularPreview,
  PostCard,
  PostPreview,
  Section,
  TagLink,
  TagLinks,
  Time,
  TitleLink,
} from './styles/index'

import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'
import { Layout } from '../layout/index'
import { IndexQueryQuery } from '../typings/graphql-type'
import config from '../utils/config'
import { getSimplifiedPosts, slugify } from '../utils/helpers'

export default function Index({ data }: { data: IndexQueryQuery }) {
  const latest = data.latest.edges
  const Populars = data.Populars.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedPopulars = useMemo(
    () => getSimplifiedPosts(Populars, { shortTitle: false, thumbnails: true }),
    [Populars]
  )

  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO />

      <GlobalContainer>
        <HeroWrapper>
          <Hero title="Hi, I'm  Hush" index>
            <Description>
              𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒍𝒊𝒗𝒆 𝒂 𝒍𝒊𝒇𝒆 𝒚𝒐𝒖‘𝒓𝒆 𝒑𝒓𝒐𝒖𝒅 𝒐𝒇. 𝑰𝒇 𝒚𝒐𝒖 𝒇𝒊𝒏𝒅 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖’𝒓𝒆 𝒏𝒐𝒕, 𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒔𝒕𝒓𝒆𝒏𝒈𝒕𝒉 𝒕𝒐 𝒔𝒕𝒂𝒓𝒕
              𝒂𝒍𝒍 𝒐𝒗𝒆𝒓 𝒂𝒈𝒂𝒊𝒏. <br />
              <br />
              我希望你过着自己引以为傲的生活。 如果你发现事实并非如此，我希望你有勇气重新开始。
            </Description>
            <Description>𝑯𝒂𝒗𝒆 𝒂 𝒈𝒐𝒐𝒅 𝒅𝒂𝒚. </Description>
          </Hero>
        </HeroWrapper>
      </GlobalContainer>
      <GlobalContainer>
        <Section>
          <Heading title="最近内容" slug="/blog" />

          <PostPreview>
            {simplifiedLatest.map((post) => {
              return (
                <PostCard key={post.slug}>
                  {/* <GlobalCard className="anchored card" key={post.slug}> */}
                  <Time type="post">{post.date}</Time>
                  <TitleLink to={post.slug}>{post.title}</TitleLink>
                  <TagLinks>
                    {post.categories
                      .filter((cat) => cat !== 'Popular')
                      .map((cat) => {
                        return (
                          <TagLink to={`/categories/${slugify(cat)}`} key={slugify(cat)}>
                            {cat}
                          </TagLink>
                        )
                      })}
                  </TagLinks>
                </PostCard>
              )
            })}
          </PostPreview>
        </Section>
        {/* 查找posts目录下带有 Popular 的markdown文件 */}
        {simplifiedPopulars.length > 0 && (
          <Section>
            <Heading title="热门内容" />

            <PopularPreview>
              {simplifiedPopulars.map((post) => {
                return (
                  <PopularCard key={`popular-${post.slug}`}>
                    {post.thumbnail && <Img style={{ marginRight: '5px' }} fixed={post.thumbnail} />}
                    <div>
                      <Time>{post.date}</Time>
                      <TitleLink to={post.slug}>{post.title}</TitleLink>
                    </div>
                  </PopularCard>
                )
              })}
            </PopularPreview>
          </Section>
        )}
      </GlobalContainer>
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
