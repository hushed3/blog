import { createGlobalStyle } from 'antd-style'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Mono';
    src: url('/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
    url('/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Prisma';
    src: url('/fonts/Prisma/Prisma.woff2') format('woff2'),
    url('/fonts/Prisma/Prisma.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${(p) => p.theme.fontFamily};
    color: ${(p) => p.theme.colorText};
  }


  ::selection {
    background: ${(p) => p.theme.colorPrimaryBg};
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    padding: 0px;
    background-color: transparent;
  }


  ::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colorTextQuaternary};
    border-radius: ${(p) => p.theme.borderRadius}px;
    background-clip: content-box;
    border: 2px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(p) => p.theme.colorTextTertiary};
  }

  html {
    font-family: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    line-height: 1.6;
    font-size: ${(p) => p.theme.fontSize}px;
    font-weight: normal;
    font-kerning: normal;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: overlay;
    position: relative;
    color: ${(p) => p.theme.colorText};
    background-color: ${(p) => p.theme.colorBgLayout};
    transition: background-color ease-out 0.1s;
  }

  a {
    color:${(p) => p.theme.colorPrimary};
    text-decoration: none;
    transition: border ease-out 0.1s;
  }

  p,
  ul,
  ol,
  ul,
  table,
  blockquote {
    color: ${(p) => p.theme.colorText};
  }

  p,
  ul,
  ol {
    -webkit-font-smoothing: auto;
    line-height: 1.7;
    margin-top: 0;
    margin-bottom: 1rem;
    letter-spacing: -0.01rem;
  }

  ul {
    padding-left: 1.5rem;
  }

  ul li ul,
  ol li ol {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  li {
    line-height: 1.5;
    margin-bottom: 0.5rem;
    padding-left: 0.25rem;
  }

  li::marker {
    font-size: 1.1rem;
    line-height: 1;
    color: ${(p) => p.theme.colorPrimaryBorderHover};
  }

  blockquote {
    margin: 1.5rem 0;
    margin-left: 0;
    padding: 0.8rem 1rem;
    background: ${(p) => p.theme.colorPrimaryBg};
    border-radius: ${(p) => p.theme.borderRadius}px;
    border-left: 4px solid  ${(p) => p.theme.colorPrimaryBorder};

    & code.language-text {
      background-color: transparent;
    }
  }
  
  blockquote p {
    font-size: 0.9rem;
    line-height: 1.9;
    font-weight: 400;
    overflow: overlay;
  }

  blockquote p:last-of-type {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-weight: 600;
    scroll-margin-top: 100px;
    color: ${(p) => p.theme.colorText};
    font-family: monospace
  }

  h1:not(:first-of-type),
  h2:not(:first-of-type),
  h3:not(:first-of-type),
  h4:not(:first-of-type) {
    margin-top: 2.5rem;
  }

  h2 + h3 {
    margin-top: 1.5rem !important;
  }

  h2 {
    font-size: 1.9rem;
    margin: 0 0 1rem;
    font-weight: 700;
    padding-bottom: 0.3rem;
    letter-spacing: -0.03rem;
  }

  h2 code {
            font-size: 1.9rem !important;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  h3 code {
    font-size: 1.5rem !important;
  }

  h4 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 800;
  }

  h4 code {
    font-size: 1.3rem !important;
  }

  h5 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.02rem;
  }

  table {
    border: 1px solid ${(P) => P.theme.colorBorderSecondary};
    display: table;
    border-collapse: separate;
    border-spacing: 0;
    max-width: 100%;
    overflow-x: auto;
    width: 100%;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  td,
  th {
    hyphens: auto;
    padding: 0.5rem;
    text-align: left;
    word-break: break-word;
    border-bottom: 1px solid ${(P) => P.theme.colorBorderSecondary};
  }

  th {
    background: ${(P) => P.theme.colorFillSecondary};
    border-bottom: 2px solid ${(P) => P.theme.colorBorderSecondary};
  }

  img {
    display: block;
    max-width: 100%;
  }

  .tag {
    display: inline-flex;
    position: relative;
    font-size: 0.9rem;
    border-radius: ${(p) => p.theme.borderRadius}px;
    padding: 0.3rem 0.8rem;
    margin-bottom: 0.8rem;
    margin-right: 0.3rem;
    align-items: center;
    line-height: calc(0.9rem + 8px);
    background: ${(p) => p.theme.colorInfoBg};
    color: ${(p) => p.theme.colorInfoText};

    &.success {
      background: ${(p) => p.theme.colorSuccessBg};
      color: ${(p) => p.theme.colorSuccessText};
    }
    &.warning {
      background:${(p) => p.theme.colorWarningBg};
      color: ${(p) => p.theme.colorWarningText};
    }
    &.error {
      background: ${(p) => p.theme.colorErrorBg};
      color: ${(p) => p.theme.colorErrorText};
    }
  }

  .gatsby-highlight {
    background: ${(p) => p.theme.colorBgElevated};
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    border-radius: ${(p) => p.theme.borderRadius}px;
    overflow: overlay;
    margin: 0.6rem 0 2rem 0;
    padding: 1rem;
    max-width: 100%;
    position: relative;
    transform: matrix(1, 0, 0, 1, 0, 0);
    box-shadow: ${(p) => p.theme.boxShadowTertiary};
    transition: background-color ease-out 0.1s;

    &::before {
      content: attr(data-language);
      position: absolute;
      right: 1rem;
      top: 0;
      color: ${(p) => p.theme.colorTextTertiary};
      font-weight: bold;
      text-transform: capitalize;
      font-size: 12px;
      line-height: 2.4rem;
      transform: scale(0.85);
      transform-origin: 100% 10%;
    }

    &::after {
      content: '';
      position: absolute;
      left: 1.1rem;
      top: 0.8rem;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #ec6a5e;
    }

    & > pre[class*='language-'] {
      &::before {
        content: '';
        position: absolute;
        left: 2.5rem;
        top: 0.8rem;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #f4be4f;
      }
      &::after {
        content: '';
        position: absolute;
        left: 3.9rem;
        top: 0.8rem;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #62c454;
      }
    }
  }

  .gatsby-highlight[data-language='text'] {
    background: transparent;
    padding: 0;
  }

  .gatsby-highlight-code-line {
    background-color: rgb(116, 207, 116, 0.15);
    display: block;
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: calc(1rem - 4px);
    border-left: 4px solid #74cf74;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: ${(p) => p.theme.fontFamilyHighlighter};
    letter-spacing: 0.02rem;
    font-size: 0.9rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.8;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    margin: 1.5rem 0 0 0;
    padding: 0;
    overflow: overlay;
    width: 100%;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre.language-text {
    background: transparent;
    -webkit-font-smoothing: subpixel-antialiased;
    margin-left: 0;
    padding-left: 0;
    padding-bottom: 0;
    border: none;
    box-shadow: none;
  }

  code.language-shell::before {
    content: '$ ';
    color: ${(p) => p.theme.comment};
  }

  code.language-text {
    color: ${(p) => p.theme.colorPrimary};
    transition: background-color ease-out 0.1s;
    background-color: ${(p) => p.theme.colorFillTertiary};
    padding: 0.2rem 0.35rem;
    border-radius: ${(p) => p.theme.borderRadiusOuter}px;
    margin: 0 0.2rem;
    font-family: ${(p) => p.theme.fontFamilyHighlighter};
  }

  .token{
    font-family: inherit;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.important {
    color: ${(p) => p.theme.comment};
  }

  .token.punctuation {
    color: ${(p) => p.theme.punctuation};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property {
    color: ${(p) => p.theme.property};
  }

  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${(p) => p.theme.tag};
  }

  .token.number {
    color: ${(p) => p.theme.number};
  }

  .token.char,
  .token.builtin,
  .token.url,
  .token.inserted {
    color: ${(p) => p.theme.codeFontColor};
  }

  .token.attr-name,
  .token.selector {
    color: ${(p) => p.theme.attribute};
  }

  .token.attr-value,
  .token.string {
    color: ${(p) => p.theme.string};
  }

  .token.operator {
    color: ${(p) => p.theme.operator};
  }

  .token.atrule,
  .token.keyword {
    font-weight: 600;
    color: ${(p) => p.theme.keyword};
  }

  .token.function {
    color: ${(p) => p.theme.function};
  }

  .language-css,
  .token.boolean,
  .token.class-name {
    color: ${(p) => p.theme.class};
  }

  .token.regex {
    color: ${(p) => p.theme.keyword};
  }

  .token.variable {
    color: ${(p) => p.theme.variable};
  }

  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .language-jsx .token.class-name {
    color: ${(p) => p.theme.tag};
  }

  pre::-moz-selection,
  pre::-moz-selection,
  code::-moz-selection,
  code::-moz-selection {
    text-shadow: none;
    color: inherit;
    background: rgba(150, 150, 150, 0.3) !important;
  }

  pre::selection,
  pre::selection,
  code::selection,
  code::selection {
    text-shadow: none;
    color: inherit;
    background: rgba(150, 150, 150, 0.3) !important;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    color: inherit;
    background: rgba(150, 150, 150, 0.3) !important;
  }

  pre[class*='language-']::selection,
  pre[class*='language-']::selection,
  code[class*='language-'] ::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    color: inherit;
    background: rgba(150, 150, 150, 0.3) !important;
  }


`
