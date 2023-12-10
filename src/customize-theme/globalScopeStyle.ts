import { createGlobalStyle } from 'antd-style'

export const GlobalScopeStyle = createGlobalStyle`
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
  }


  ::selection {
    background: ${(p) => p.theme.colorPrimaryBorder};
  }

  html {
    font-family: ${(p) => p.theme.fontFamily};
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
    font-family: ${(p) => p.theme.fontFamily};
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
  ol {
    -webkit-font-smoothing: auto;
    /* line-height: 2;
    margin-top: 1.2rem;
    margin-bottom: 1.4rem; */
  }

  ul {
    padding-left: 1.5rem;
  }

  ol{
    padding-left: 1.2rem;
  }

  /* ul li ul,
  ol li ol {
    margin-top: 0.5rem;
    margin-bottom: 0;
  } */

  li {
    line-height: 1.7;
    margin-bottom: 0.8rem;
    padding-left: 0.25rem;
  }

  li::marker {
    font-size: 1.1rem;
    line-height: 1;
    color: ${(p) => p.theme.colorPrimaryHover};
  }

  blockquote {
    width: 100%;
    margin-left: 0;
    padding: 0.8rem 1rem;
    background: ${(p) => p.theme.colorPrimaryBg};
    border-radius: ${(p) => p.theme.borderRadius}px;
    border-left: 4px solid  ${(p) => p.theme.colorPrimaryBorder};

    & code.language-text {
      background-color: transparent;
    }
  }
  
  p strong{
    font-size: 1.02rem;
  }

  blockquote p {
    font-size: 0.95rem;
    line-height: 1.9;
    font-weight: 400;
    overflow: overlay;
  }

  blockquote p:last-of-type {
    margin: 0;
  }
/* 
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.1;
    font-weight: 600;
    scroll-margin-top: 100px;
    color: ${(p) => p.theme.colorText};
    font-family: monospace
  }

  h2 {
    font-size: 1.9rem;
    margin: 4.2rem 0 3rem;
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
    margin: 3.2rem 0 2rem;
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
  } */

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


  code{
    color: ${(p) => p.theme.colorPrimary};
    font-size: 0.95rem;
    background-color: ${(p) => p.theme.colorFillTertiary};
    padding: 0.2rem 0.35rem;
    border-radius: ${(p) => p.theme.borderRadiusOuter}px;
    margin: 0 0.3rem;
    font-family: ${(p) => p.theme.fontFamilyHighlighter};
    opacity: .95;
  }
`
