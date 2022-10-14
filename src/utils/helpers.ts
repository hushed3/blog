export function getSimplifiedPosts(posts: any, options: any = {}): SimplifiedData[] {
  return posts.map((post: any) => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.fields.slug,
    tags: post.node.frontmatter.tags,
    categories: post.node.frontmatter.categories,
    title: options.shortTitle ? post.node.frontmatter.shortTitle : post.node.frontmatter.title,
    description: post.node.frontmatter.description,
    ...(options.thumbnails && {
      thumbnail: post.node.frontmatter?.thumbnail?.childImageSharp?.fixed,
    }),
  }))
}

export function slugify(string: string | string[]): string {
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
