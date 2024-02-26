import { HeadFC, PageProps } from 'gatsby'
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
const ArticleTemplate: React.FC<PageProps<null, MdxQuery>> = (props) => {
  const { pageContext, children } = props
  const { styles } = useStyles()

  const frontmatter = pageContext.frontmatter
  const headings = pageContext.tableOfContents.items.map((e, i) => ({
    key: e.title,
    href: `#${e.title}`,
    title: e.title,
  }))

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
        date={frontmatter?.date.slice(0, 10)}
        tags={frontmatter?.tags}
        categories={frontmatter?.categories}
        icon={frontmatter?.icon}
        headings={headings}
      />
    </div>
  )
}

export default ArticleTemplate

export const Head: HeadFC<null, MdxQuery> = (props) => {
  const { location, pageContext } = props
  const frontmatter = pageContext.frontmatter

  return (
    <>
      <SEO title={frontmatter?.title} description={frontmatter.description} pathName={location.pathname} />
    </>
  )
}
