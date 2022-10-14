import { Link } from 'gatsby'
import React from 'react'

interface Props {
  title: string
  description?: string
  slug?: string
}

/**
 * @description 标题
 */

export const Heading = ({ title, description, slug }: Props) => {
  return (
    <h2 className="home-heading">
      <div>
        <div className="title">{title}</div>
        {description && <div className="description">{description}</div>}
      </div>
      {slug && (
        <Link className="button" to={slug}>
          View all
        </Link>
      )}
    </h2>
  )
}
