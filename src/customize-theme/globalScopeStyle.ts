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
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: ${(p) => p.theme.fontFamily};
    font-size: ${(p) => p.theme.fontSize}px;
    font-weight: normal;
    font-kerning: normal;

    /* color: ${(p) => p.theme.colorText}; */
    background-color: ${(p) => p.theme.colorBgLayout};
    transition: background-color ease-out  ${(p) => p.theme.motionDurationFast};
  }

  body {
    position: relative;
    overflow: overlay;
    margin: 0;
    padding: 0;
  }
`
