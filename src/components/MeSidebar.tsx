import { Link } from '@reach/router'
import React from 'react'

/**
 * @description Me页面 - 侧边个人介绍
 */

export const MeSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-sticky">
        <div className="post-sidebar-card">
          <h2>Me</h2>
          <img alt="Tania" />
        </div>
        <div className="post-sidebar-card">
          <h2>Dimo (Kitty)</h2>
          <img alt="Tania" />
        </div>
        <div className="post-sidebar-card">
          <Link to="/josh">Memories of Josh</Link>
        </div>
      </div>
    </aside>
  )
}
