import React from 'react'
import { renderToString } from 'react-dom/server'
import { extractStaticStyle } from 'antd-style'
import type { GatsbySSR } from 'gatsby'

import { Layout } from './src/layout'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }: { element: React.ReactElement }) => {
  return (
    <>
      <Layout>{element}</Layout>
    </>
  )
}

export const replaceRenderer = ({ replaceBodyHTMLString, bodyComponent, setHeadComponents }) => {
  const html = renderToString(<>{bodyComponent}</>)

  const antdCache = (global as any).__ANTD_CACHE__
  const styles = extractStaticStyle(html, { antdCache }).map((item) => item.style)

  styles.forEach((item) => {
    setHeadComponents([
      <style
        key="cache"
        data-emotion={`css`}
        dangerouslySetInnerHTML={{
          __html: item.props.dangerouslySetInnerHTML.__html,
        }}
      />,
    ])
  })
  replaceBodyHTMLString(html)
}
