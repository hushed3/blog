import path from 'path'

const onCreateWebpackConfig = ({ loaders, actions }: { stage: any; loaders: any; actions: any }) => {
  // if (stage === 'build-html' || stage === 'develop-html') {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@/static': path.resolve(__dirname, 'static'),
      },
      fallback: {
        stream: false,
        // crypto: require.resolve('crypto-browserify'),
        crypto: false,
      },
    },
    module: {
      rules: [
        {
          test: /jsencrypt/,
          use: loaders.null(),
        },
      ],
    },
  })
  // }
}

const createPages = async ({ graphql, actions }: { graphql: any; actions: any }) => {
  try {
    const { createPage } = actions

    const blogPage = path.resolve('./src/templates/article.tsx')
    const mePage = path.resolve('./src/templates/me.tsx')
    const tagPage = path.resolve('./src/templates/tag.tsx')
    const categoryPage = path.resolve('./src/templates/category.tsx')

    const { data } = await graphql(
      `
        {
          articles: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  tags
                  categories
                  template
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    )

    const all = data.articles.edges
    const articles = all.filter((article: NodeItem) => article.node.frontmatter.template === 'article')
    const pages = all.filter((article: NodeItem) => article.node.frontmatter.template === 'page')
    const tagSet = new Set()
    const categorySet = new Set()

    // =====================================================================================
    // articles
    // =====================================================================================

    articles.forEach((article: NodeItem, i: number) => {
      const previous = i === articles.length - 1 ? null : articles[i + 1].node
      const next = i === 0 ? null : articles[i - 1].node

      if (article.node.frontmatter.tags) {
        article.node.frontmatter.tags.forEach((tag: unknown) => {
          tagSet.add(tag)
        })
      }

      if (article.node.frontmatter.categories) {
        article.node.frontmatter.categories.forEach((category: unknown) => {
          categorySet.add(category)
        })
      }

      createPage({
        path: article.node.fields.slug,
        component: blogPage,
        context: {
          slug: article.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // =====================================================================================
    // mePage
    // =====================================================================================

    pages.forEach((page: NodeItem) => {
      createPage({
        path: page.node.fields.slug,
        component: mePage,
        context: {
          slug: page.node.fields.slug,
        },
      })
    })

    // =====================================================================================
    // Tags
    // =====================================================================================

    const tagList = Array.from(tagSet)
    tagList.forEach((tag) => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagPage,
        context: {
          tag,
        },
      })
    })

    // =====================================================================================
    // Categories
    // =====================================================================================

    const categoryList = Array.from(categorySet)
    categoryList.forEach((category) => {
      createPage({
        path: `/categories/${category}/`,
        component: categoryPage,
        context: {
          category,
        },
      })
    })
  } catch (error) {
    throw new Error(error as string)
  }
}

const createNode = ({ node, actions, getNode }: { node: any; actions: any; getNode: any }) => {
  const { createNodeField } = actions

  // =====================================================================================
  // Slugs
  // =====================================================================================

  let slug
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
      slug = `/${node.frontmatter.slug}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
}

module.exports.createPages = createPages
module.exports.onCreateNode = createNode
module.exports.onCreateWebpackConfig = onCreateWebpackConfig
