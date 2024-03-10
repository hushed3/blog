import { HeadFC, PageProps, graphql } from 'gatsby'
import { Typography } from 'antd'

import SEO from '@/components/SEO'
import ArticleSidebar from '@/components/Sidebar/ArticleSidebar'
import PrismSyntaxHighlight from '@/components/PrismSyntaxHighlight'
import { useStyles } from './styles/style'

/**
 * @description 文章页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const ArticleTemplate: React.FC<PageProps<allMdxNodesQuery<'allArticle'> & MdxNodesQuery<'currentArticle'>>> = ({
  children,
  data,
}) => {
  const { allArticle, currentArticle } = data
  const { styles } = useStyles()

  const frontmatter = currentArticle.frontmatter
  const headings = currentArticle.tableOfContents.items.map((e, i) => ({
    key: e.title,
    href: `#${e.title}`,
    title: e.title,
  }))
  const recentArticles = allArticle.nodes.filter(
    (article) => article.frontmatter.slug !== currentArticle.frontmatter.slug
  )

  return (
    <div className={styles.container}>
      <div className="content">
        <Typography.Title level={3} className={styles.title}>
          {frontmatter?.title}
        </Typography.Title>
        <div className={styles.spacerLine}></div>
        <PrismSyntaxHighlight mdxContent={children as unknown as string}></PrismSyntaxHighlight>
      </div>

      <ArticleSidebar
        date={frontmatter?.date}
        tags={frontmatter?.tags}
        categories={frontmatter?.categories}
        icon={frontmatter?.icon}
        headings={headings}
        recentArticles={recentArticles}
      />
    </div>
  )
}

export default ArticleTemplate

export const Head: HeadFC<allMdxNodesQuery<'allArticle'> & MdxNodesQuery<'currentArticle'>> = (props) => {
  const { location, data } = props
  const frontmatter = data.currentArticle.frontmatter

  return (
    <>
      <SEO title={frontmatter?.title} description={frontmatter.description} pathName={location.pathname} />
    </>
  )
}

export const recentQuery = graphql`
  query ArticlePage($slug: String!) {
    allArticle: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "article" } } }
    ) {
      nodes {
        ...NodeFragment
      }
    }
    currentArticle: mdx(frontmatter: { slug: { eq: $slug } }) {
      ...FrontmatterFragment
      newFrontmatter: frontmatter {
        date(formatString: "YYYY-MM-DD")
      }
      tableOfContents(maxDepth: 4)
    }
  }
`
