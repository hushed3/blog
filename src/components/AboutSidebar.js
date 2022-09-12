import React from 'react'
import { Link } from '@reach/router'

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
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
    </aside>
  )
}
