import { SimplifiedData } from '../typings/pages'

interface Options {
  shortTitle: boolean
  thumbnails: boolean
}

export const getSimplifiedPosts = <T extends any[]>(posts: T, options?: Options): SimplifiedData[] =>
  posts.map((post) => {
    const { id, frontmatter, fields } = post.node

    return {
      id: id,
      title: frontmatter?.title,
      date: frontmatter?.date,
      slug: fields?.slug,
      tags: frontmatter?.tags,
      categories: frontmatter?.categories,
      thumbnail: options?.thumbnails ? frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData : {},
    } as SimplifiedData
  })

export const slugify = <T>(string: T) => {
  return (
    string &&
    `${string}`
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
      .map((x) => x.toLowerCase())
      .join('-')
  )
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
