import React from 'react'

import { Sidebar } from './BlogSidebar'

interface Props {
  children?: React.ReactNode
}

/**
 * @description
 */

export const BlogContainer = ({ children }: Props) => {
  return (
    <section className="container markdown-content">
      <div className="grid">
        <div className="article-content">{children}</div>
        <div className="sidebar-content">
          <Sidebar />
        </div>
      </div>
    </section>
  )
}
