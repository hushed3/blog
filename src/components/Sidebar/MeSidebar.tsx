import React from 'react'
import { Card } from 'antd'
import { useStyles } from './style'

/**
 * @description Me页面 - 侧边个人介绍
 */

export const MeSidebar = () => {
  const { styles } = useStyles()
  return (
    <aside>
      <div className={styles.sticky}>
        <Card bordered={false} className={styles.card}>
          <div className={styles.title}>Me</div>
        </Card>
      </div>
    </aside>
  )
}
