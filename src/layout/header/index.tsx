import { Link } from 'gatsby'
import { Space } from 'antd'
import { animated } from '@react-spring/web'
import config from '@/config'
import ThemeSwitch from '@/components/ThemeSwitch'
import { useAnimatedHeader } from '@/hooks/useAnimatedHeader'
import { useStyles } from './style'

export const Header = () => {
  const { styles, cx, theme: token } = useStyles()

  const { headerHeight, headerHeightMobile } = token

  const [_styles] = useAnimatedHeader({
    isHeader: true,
    heights: [headerHeight, headerHeightMobile],
  })

  const menu = config.headers.menu.filter((item) => item.show)
  const social = config.headers.social.filter((item) => item.show)

  return (
    <>
      <animated.header className={styles.header} style={{ ..._styles }}>
        <div className={styles.headerContainer}>
          <Space size="large">
            <Link to="/" className={cx(styles.navigationLink, 'logo')}>
              J
            </Link>

            {menu.map((item) => (
              <Link className={styles.navigationLink} to={item.url} key={item.label}>
                {item.label}
              </Link>
            ))}

            {social.map((item) => (
              <a className={styles.navigationLink} key={item.label} href={item.url} target="_blank" rel="noreferrer">
                <item.icon />
              </a>
            ))}
          </Space>

          <ThemeSwitch />
        </div>
      </animated.header>
    </>
  )
}
