import { Link } from 'gatsby'
import { Space } from 'antd'
import { useStyles } from './style'
import config from '@/config'
import ThemeSwitch from '@/components/ThemeSwitch'

export const Header = () => {
  const { styles } = useStyles()

  const headerMenu = config.headers.menu.filter((item) => item.show)
  const headerSocial = config.headers.social.filter((item) => item.show)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Space size="large">
            <Link to="/" className={styles.navigationLink}>
              <span className="logo">J</span>
            </Link>

            {headerMenu.map((item) => (
              <Link className={styles.navigationLink} to={item.url} key={item.label}>
                {item.label}
              </Link>
            ))}

            {headerSocial.map((item) => (
              <a className={styles.navigationLink} key={item.label} href={item.url} target="_blank" rel="noreferrer">
                <item.icon />
              </a>
            ))}
          </Space>

          <ThemeSwitch />
        </div>
      </header>
    </>
  )
}
