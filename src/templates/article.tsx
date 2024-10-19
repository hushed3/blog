import { HeadFC, PageProps, graphql, navigate } from 'gatsby'
import { Space, Typography, Tag, Tooltip } from 'antd'
import dayjs from 'dayjs'

import SEO from '@/components/SEO'
import ArticleSidebar from '@/components/Sidebar/ArticleSidebar'
import MDXRenderer from '@/components/MDXRenderer'
import NeonLighting from '@/components/NeonLighting'

import Calendar from '@/components/Icons/Calendar'
import { ClockCircleOutlined } from '@ant-design/icons'

import { useStyles } from './styles/style'
import { transformHeading } from '@/utils/helpers'

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

  const timeToRead = currentArticle.fields.timeToRead
  const frontmatter = currentArticle.frontmatter

  const headings = transformHeading(currentArticle.tableOfContents.items)

  const articles = allArticle.nodes.map((e) => ({ ...e.frontmatter })).filter((a) => a.slug !== frontmatter.slug)
  const tags = frontmatter?.tags.map((t) => ({ name: t, path: `/tags/${t}` }))

  return (
    <div className={styles.container}>
      <div className="content">
        <Typography.Title level={2} className={styles.title}>
          {frontmatter?.title}
        </Typography.Title>

        <div className={styles.information}>
          <Space className="times" align="center">
            <Tooltip placement="bottom" title={`最后修改于 ${dayjs(frontmatter?.lastUpdated).format('YYYY-MM-DD')}`}>
              <Space>
                <Calendar />
                {frontmatter?.lastUpdated}
              </Space>
            </Tooltip>

            <ClockCircleOutlined style={{ marginLeft: '1rem' }} />
            {timeToRead.text}
          </Space>

          {tags.map((i) => (
            <Tag key={i.path} bordered={false} onClick={() => navigate(i.path)}>
              # {i.name}
            </Tag>
          ))}
        </div>

        <MDXRenderer>{children}</MDXRenderer>
      </div>

      <ArticleSidebar date={frontmatter?.date} icon={frontmatter?.icon} headings={headings} articles={articles} />
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
  query ArticlePage($slug: String!, $published: Boolean) {
    allArticle: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "article" }, published: { eq: $published } } }
    ) {
      nodes {
        ...InformationFragment
      }
    }
    currentArticle: mdx(frontmatter: { slug: { eq: $slug } }) {
      ...InformationFragment
      newFrontmatter: frontmatter {
        date(formatString: "YYYY-MM-DD")
      }
      tableOfContents(maxDepth: 5)
    }
  }
`

export const InformationFragmentQuery = graphql`
  fragment InformationFragment on Mdx {
    frontmatter {
      title
      description
      date(formatString: "MMMM DD, YYYY")
      lastUpdated(formatString: "MMMM DD, YYYY")
      icon
      slug
      template
      tags
      published
    }
    fields {
      timeToRead {
        minutes
        time
        words
        text
      }
    }
  }
`
