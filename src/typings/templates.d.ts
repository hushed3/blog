/**
 * @description 个人页面数据
 * @date 22/06/2023
 * @interface MeTemplatesData
 */
interface MeTemplatesData {
  me: {
    html: string
    frontmatter: {
      title: string
      slug: string
      date: string
    }
  }
}

interface ArticleTemplateData {
  article: {
    html: string
    excerpt?: string
    headings: { id: string }[]
    fields: FieldsData
    frontmatter: FrontmatterData
  }
}
