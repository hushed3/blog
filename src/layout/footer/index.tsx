import { Space, Typography } from 'antd'
import { madeWithLinks } from '@/config'
import { useStyles } from './style'

export const Footer = () => {
  const year = new Date().getFullYear() === 2022 ? '' : `- ${new Date().getFullYear()}`

  const { styles } = useStyles()

  return (
    <footer className={styles.footer}>
      <Space size="middle" className={styles.footerContainer}>
        <Typography.Text className={`${styles.text} desktop-only`}>© 2022 {year} By J</Typography.Text>
      </Space>

      <Space size="middle" className={styles.footerContainer}>
        {madeWithLinks.map((link) => (
          <Typography.Link className={styles.href} key={link.url} href={link.url} title={link.label} target="_blank">
            <span>{link.label}</span>
            <img className="image" src={link.icon} alt={link.label} />
          </Typography.Link>
        ))}
      </Space>

      <Space size="middle" className={styles.footerContainer}>
        <Typography.Link className={styles.href} href="https://beian.miit.gov.cn/" target="_blank">
          蜀ICP备2022009836号
        </Typography.Link>
      </Space>
    </footer>
  )
}
