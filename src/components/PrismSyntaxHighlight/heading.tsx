import * as React from 'react'
import { Typography } from 'antd'
import { useStyles } from './heading.style'

const { Title } = Typography

type HeadingProps = {
  id: string
  children: React.ReactNode
}

/* eslint-disable */
const heading =
  (Tag, level) =>
  ({ id, children }: HeadingProps) => {
    const { styles } = useStyles()

    if (Tag === 'h3') {
      const handleClick = (e: React.MouseEvent<HTMLElement>, href) => {
        e.preventDefault()
        document.getElementById(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return (
        <h3 id={id ? id : (children as string)} className={styles.heading} onClick={(e) => handleClick(e, children)}>
          <a href={`#${id ? id : (children as string)}`} className={styles.anchor}>
            <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16">
              <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
            </svg>
          </a>
          {children}
        </h3>
      )
    }

    return (
      <Title level={level} id={id} className={styles.heading}>
        {children}
      </Title>
    )
  }
/* eslint-enable */

export const headings = {
  h1: heading(`h1`, 1),
  h2: heading(`h2`, 2),
  h3: heading(`h3`, 3),
  h4: heading(`h4`, 4),
  h5: heading(`h5`, 5),
  h6: heading(`h6`, 6),
}