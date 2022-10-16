import PropTypes from 'prop-types'
import React from 'react'

export default function HTML(props: any) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>

      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />

        {props.postBodyComponents}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const THEME = '(prefers-color-scheme: dark)'
            const KEY = 'theme'
            const theme = localStorage.getItem(KEY) || (window?.matchMedia(THEME).matches ? 'dark' : 'light')
            if (theme === 'dark') {
              document.documentElement.setAttribute(KEY, 'dark')
            } else {
              document.documentElement.removeAttribute(KEY)
            }
        `,
        }}
      ></script>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}