import React from 'react'
import { renderToString } from 'react-dom/server'
import { extractStaticStyle } from 'antd-style'
import type { GatsbySSR } from 'gatsby'

import ThemeProviderContext from './src/context/ThemeProviderContext'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  return (
    <>
      <ThemeProviderContext>{element}</ThemeProviderContext>
    </>
  )
}

export const replaceRenderer = ({ replaceBodyHTMLString, bodyComponent, setHeadComponents }) => {
  const html = renderToString(<>{bodyComponent}</>)

  const antdCache = (global as any).__ANTD_CACHE__

  // 提取 antd-style 样式
  const styles = extractStaticStyle(html, { antdCache }).map((item) => item)

  // 添加 css样式到 head
  styles.forEach((item) => {
    setHeadComponents([<style key={item.key} {...item.style.props} />])
  })
  replaceBodyHTMLString(html)
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preload" href="/svg/icons.svg" as="image" type="image/svg+xml" key="svgIcons" />,
    // <link
    //   rel="preload"
    //   href={}
    //   as="font"
    //   type="font/woff2"
    //   crossOrigin="anonymous"
    //   key="interFont"
    // />,
  ])
}
