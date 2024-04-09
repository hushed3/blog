import { Link } from 'gatsby'
import { Space } from 'antd'
import { useStyles } from './style'
import config from '@/config'
import ThemeSwitch from '@/components/ThemeSwitch'

export const Header = () => {
  const { styles } = useStyles()

  const headerMenu = config.headers.menu
  const headerSocial = config.headers.social

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Space size="middle">
            <Link to="/" className={styles.navigationLink}>
              <span className="logo">𝓙</span>
            </Link>

            {headerMenu.map(
              (item) =>
                item.show && (
                  <Link className={styles.navigationLink} to={item.url} key={item.label}>
                    {/* <span className="icon">
                      <item.icon />
                    </span> */}
                    <span className="label">{item.label}</span>
                  </Link>
                )
            )}

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
