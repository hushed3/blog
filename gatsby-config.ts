module.exports = {
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Hush blog`,
    description: `Web front-end development engineer.`,
    author: 'J',
    siteUrl: `https://blog.hushes.cn`,
    feedUrl: 'https://blog.hushes.cn/rss.xml',
    logo: 'https://blog.hushes.cn/logo.png',
    pathPrefix: '/',
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
    'gatsby-plugin-react-helmet',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/
    'gatsby-plugin-netlify',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
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

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/
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
            query: `{
                      allMdx(
                        limit: 30
                        sort: {frontmatter: {date: DESC}}
                        filter: {frontmatter: {published: {eq: true}}}
                      ) {
                        nodes {
                          frontmatter {
                            title
                            date
                            template
                            slug
                            description
                          }
                        }
                      }
                    }`,

            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                const { frontmatter } = node
                const { siteMetadata } = site

                return Object.assign({}, frontmatter, {
                  description: frontmatter.description,
                  date: frontmatter.date,
                  url: siteMetadata.siteUrl + frontmatter.slug,
                  guid: siteMetadata.siteUrl + frontmatter.slug,
                  custom_elements: [
                    {
                      'content:encoded': `<p>${frontmatter.description}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${siteMetadata.siteUrl}${frontmatter.slug}">Keep reading</a>.</strong></div><br /> <br />`,
                    },
                  ],
                })
              })
            },

            output: '/rss.xml',
            title: 'Hush | RSS Feed',
          },
        ],
      },
    },

    // ===================================================================================
    // Images and static
    // ===================================================================================

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
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

    // @see: https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
    'gatsby-transformer-sharp',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    'gatsby-plugin-image',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content`,
      },
    },

    // ===================================================================================
    // Markdown
    // ===================================================================================

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [],
        gatsbyRemarkPlugins: [
          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-images/
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

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search/
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
            allMdx(filter: { frontmatter: { template: { eq: "article" } } }) {
              nodes {
                id
                frontmatter {
                  title
                  tags
                  slug
                  date(formatString: "MMMM DD, YYYY")
                }
                body
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'tags'],
        store: ['id', 'slug', 'title', 'tags', 'date'],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            slug: `/${node.frontmatter.slug}`,
            title: node.frontmatter.title,
            body: node.body,
            tags: node.frontmatter.tags,
            categories: node.frontmatter.categories,
            date: node.frontmatter.date,
          })),
      },
    },
  ],
}
