module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'Hush',
    author: {
      name: 'Hush',
    },
    pathPrefix: '/',
    siteUrl: 'https://blog.hushes.cn/',
    description: '',
    feedUrl: 'https://blog.hushes.cn/rss.xml',
    logo: 'https://blog.hushes.cn/logo.png',
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================

    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby-graphql.d.ts`,
      },
    },

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hush',
        short_name: 'Hush',
        description: 'gatsby-plugin-manifest',
        start_url: '/',
        background_color: 'white',
        theme_color: '#6b76f3',
        display: 'minimal-ui',
        icon: `./src/assets/logo.ico`,
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
                    custom_elements: [{ 'content:encoded': edge.node.html }, { author: 'hello@taniarascia.com' }],
                  })
                }
              )
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 30,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" } } }
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
              }
            `,
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
        name: 'posts',
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
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              // linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true,
              },
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
            allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
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
