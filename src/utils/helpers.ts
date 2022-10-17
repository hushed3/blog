export function getSimplifiedPosts(posts: any[], options: any = {}): SimplifiedData[] {
  return posts.map((post) => {
    const { id, frontmatter, fields } = { ...post?.node } as any
    return {
      id: id,
      date: frontmatter?.date,
      slug: fields?.slug,
      tags: frontmatter?.tags,
      categories: frontmatter?.categories,
      title: options.shortTitle ? frontmatter?.shortTitle : frontmatter?.title,
      description: frontmatter?.description,
      ...(options.thumbnails && {
        thumbnail: frontmatter?.thumbnail?.childImageSharp?.fixed,
      }),
    }
  })
}

export function slugify(string: string | (string | null)[]): string {
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
