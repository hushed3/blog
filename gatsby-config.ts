module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: 'Hush blog',
    author: {
      name: 'J',
    },
    pathPrefix: '/',
    siteUrl: 'https://blog.hushes.cn/',
    description: 'Web front-end development engineer',
    feedUrl: 'https://blog.hushes.cn/rss.xml',
    logo: 'https://blog.hushes.cn/logo.png',
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hush',
        short_name: 'Hush',
        description: 'gatsby-plugin-manifest',
        start_url: '/',
        background_color: 'rgb(21, 21, 23)',
        theme_color: '#646cff',
        display: 'minimal-ui',
        icon: `./src/assets/image/logo.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }: any) => {
              return allMarkdownRemark.edges.map(
                (edge: { node: { frontmatter: { date: any }; excerpt: any; fields: { slug: any }; html: any } }) => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    custom_elements: [{ 'content:encoded': edge.node.html }, { author: '' }],
                  })
                }
              )
            },
            query: `{
                      allMarkdownRemark(
                        limit: 30
                        sort: {frontmatter: {date: DESC}}
                        filter: {frontmatter: {template: {eq: "article"}}}
                      ) {
                        edges {
                          node {
                            excerpt
                            html
                            fields {
                              slug
                            }
                            frontmatter {
                              title
                              date
                              template
                            }
                          }
                        }
                      }
                    }`,
            output: '/rss.xml',
            title: 'Hush | RSS Feed',
          },
        ],
      },
    },

    // ===================================================================================
    // Images and static
    // ===================================================================================

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, 'png'],
          placeholder: `none`,
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },

    // ===================================================================================
    // Markdown
    // ===================================================================================

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: 'one-dark',
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },

    // ===================================================================================
    // Search
    // ===================================================================================

    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
          {
            allMarkdownRemark(filter: { frontmatter: { template: { eq: "article" } } }) {
              nodes {
                id
                frontmatter {
                  title
                  tags
                  slug
                  date(formatString: "MMMM DD, YYYY")
                }
                rawMarkdownBody
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'tags'],
        store: ['id', 'slug', 'title', 'tags', 'date'],
        normalizer: ({ data }: any) =>
          data.allMarkdownRemark.nodes.map(
            (node: {
              id: any
              frontmatter: { slug: any; title: any; tags: any; categories: any; date: any }
              rawMarkdownBody: any
            }) => ({
              id: node.id,
              slug: `/${node.frontmatter.slug}`,
              title: node.frontmatter.title,
              body: node.rawMarkdownBody,
              tags: node.frontmatter.tags,
              categories: node.frontmatter.categories,
              date: node.frontmatter.date,
            })
          ),
      },
    },
  ],
}
