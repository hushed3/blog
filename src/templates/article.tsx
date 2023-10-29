import { HeadFC, PageProps } from 'gatsby'

import SEO from '@/components/SEO'
import ArticleSidebar from '@/components/Sidebar/ArticleSidebar'
import PrismSyntaxHighlight from '@/components/PrismSyntaxHighlight'
import { useStyles } from '@/styles/templates/style'

/**
 * @description 文章页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const ArticleTemplate: React.FC<PageProps<null, MdxQuery>> = ({ pageContext, children }) => {
  const { styles } = useStyles()

  const frontmatter = pageContext.frontmatter
  const headings = pageContext.tableOfContents.items.map((e, i) => ({ ...e, key: i, href: `#${e.title}` }))

  return (
    <div className={styles.container}>
      <div className="content">
        <h2 className={styles.title}>{frontmatter?.title}</h2>
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

// ArticleTemplate.Layout = Layout
export const Head: HeadFC<null, MdxQuery> = (props) => {
  const { location, pageContext } = props
  const frontmatter = pageContext.frontmatter

  return (
    <>
      <SEO title={frontmatter?.title} description={frontmatter.description} pathName={location.pathname} />
    </>
  )
}
