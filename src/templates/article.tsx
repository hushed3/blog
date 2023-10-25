import { SEO } from '@/components/SEO'
import { ArticleSidebar } from '@/components/Sidebar/ArticleSidebar'
import { Layout } from '@/layout/index'
import { useStyles } from '@/styles/templates/style'

import PrismSyntaxHighlight from '@/components/PrismSyntaxHighlight'

/**
 * @description 文章页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export default function ArticleTemplate<PageProps>({ pageContext: article, children }) {
  const { styles } = useStyles()

  const frontmatter = article.frontmatter
  const headings = article.tableOfContents.items.map((e, i) => ({ ...e, key: i, href: `#${e.title}` }))

  return (
    <>
      <SEO helmetTitle={frontmatter?.title} articlePath={frontmatter?.slug} articleNode={article} articleSEO />
      <div className={styles.container}>
        <div className="content">
          <h2 className={styles.title}>{frontmatter?.title}</h2>
          <div className={styles.spacerLine}></div>
          <PrismSyntaxHighlight mdxContent={children}></PrismSyntaxHighlight>
        </div>

        <ArticleSidebar
          date={frontmatter?.date.slice(0, 10)}
          tags={frontmatter?.tags}
          categories={frontmatter?.categories}
          icon={frontmatter?.icon}
          headings={headings}
        />
      </div>
    </>
  )
}

ArticleTemplate.Layout = Layout
