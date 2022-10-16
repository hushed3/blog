import React from 'react'
import { SideCard, SideSticky, SideTitle } from './style'

/**
 * @description Me页面 - 侧边个人介绍
 */

export const MeSidebar = () => {
  return (
    <aside>
      <SideSticky>
        <SideCard className="post-sidebar-card">
          <SideTitle>Me</SideTitle>
        </SideCard>
      </SideSticky>
    </aside>
  )
}
