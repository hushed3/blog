import { GatsbyNode } from 'gatsby'
import path from 'path'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
    }
  `)
}

export const onCreateWebpackConfig = ({ loaders, actions }) => {
  // if (stage === 'build-html' || stage === 'develop-html') {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@/static': path.resolve(__dirname, 'static'),
      },
      fallback: {
        stream: false,
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

const articlePage = path.resolve('./src/templates/article.tsx')
const mePage = path.resolve('./src/templates/me.tsx')
const tagPage = path.resolve('./src/templates/tag.tsx')
const categoryPage = path.resolve('./src/templates/category.tsx')

export const createPages = async ({ graphql, actions }) => {
  try {
    const { createPage } = actions

    const { data } = await graphql(
      `
        {
          articles: allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
              frontmatter {
                title
                description
                date(formatString: "MMMM DD, YYYY")
                lastUpdated(formatString: "MMMM DD, YYYY")
                icon
                slug
                template
                tags
                categories
                published
              }
              tableOfContents(maxDepth: 3)
              internal {
                contentFilePath
              }
            }
          }
        }
      `
    )

    const nodes = data.articles.nodes
    const articles = nodes.filter((article) => article.frontmatter.template === 'article')
    const pages = nodes.filter((article) => article.frontmatter.template === 'page')
    const tagSet = new Set()
    const categorySet = new Set()

    // =====================================================================================
    // articles
    // =====================================================================================
    articles.forEach((article, i) => {
      const previous = i === articles.length - 1 ? null : articles[i + 1]
      const next = i === 0 ? null : articles[i - 1]

      if (article.frontmatter.tags) {
        article.frontmatter.tags.forEach((tag) => {
          tagSet.add(tag)
        })
      }

      if (article.frontmatter.categories) {
        article.frontmatter.categories.forEach((category) => {
          categorySet.add(category)
        })
      }

      createPage({
        path: article.frontmatter.slug,
        component: `${articlePage}?__contentFilePath=${article.internal.contentFilePath}`,
        context: {
          slug: article.frontmatter.slug,
          previous,
          next,
          tableOfContents: article.tableOfContents,
        },
      })
    })

    // =====================================================================================
    // mePage
    // =====================================================================================

    pages.forEach((page) => {
      createPage({
        path: page.frontmatter.slug,
        component: mePage,
        context: {
          slug: page.frontmatter.slug,
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

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // =====================================================================================
  // Slugs
  // =====================================================================================

  let slug
  if (node.internal.type === 'Mdx') {
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
