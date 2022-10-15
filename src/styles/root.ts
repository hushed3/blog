import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components'

export const GlobalStyle: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`
  :root{
    --gray-0: #f8f9fa;
    --gray-05: #f3f6f9;
    --gray-1: #f1f3f5;
    --gray-2: #e9ecef;
    --gray-3: #dee2e6;
    --gray-4: #ced4da;
    --gray-5: #adb5bd;
    --gray-6: #868e96;
    --gray-7: #4b5056;
    --gray-8: #31363b;
    --gray-9: #212529;
    --gray-10: #151618;

    --green: #51b681;
    --green-1: #95cd7f;
    --green-2: #73b18a;
    --green-3: #4d8994;
    --green-4: #30619d;
    --green-5: #30379d;

    --red: #f34646;
    --red-1: #efcf4a;
    --red-2: #e0a944;
    --red-3: #d37d36;
    --red-4: #cd583c;
    --red-5: #ab2e3f;

    --blue: #07a7e6;
    --blue-1: #70bdee;
    --blue-2: #618be1;
    --blue-3: #5b5ed5;
    --blue-4: #623ac6;
    --blue-5: #58119f;

    --rainbow-1: #da66b7;
    --rainbow-2: #7549f0;
    --rainbow-3: #4989c6;
    --rainbow-4: #72bf8d;
    --rainbow-5: #f4c950;

    --orange: #ff7e22;
    --yellow: #fca62a;
    --pink: #e855b3;
    --purple: #623ac6;
    --indigo: #5a43f1;
    --indigo-dark: #4509cf;
    --indigo-light: #969bf6;
    --indigo-muted: #f1f2fd;
  }

  html {
    font-family:  ${(props) => props.theme.fontFamilyBase};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    line-height: 1.6;
    font-size: 13px;
    font-weight: normal;
    font-kerning: normal;


  }

  body {
    margin: 0;
    padding: 0;
    overflow: overlay;
    position: relative;
    background: ${(props) => props.theme.backgroundColor};
  }

  a {
    color: ${(props) => props.theme.link};
    text-decoration: none;
  }

  p,
  ul,
  ol,
  ul,
  table,
  blockquote {
    color: ${(props) => props.theme.fontColorBase};
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
    color: ${(props) => props.theme.marker};
  }

  main {
    margin-top: ${(props) => props.theme.navbarHeightSmall};
  }

  /* Blockquote */

  blockquote {
    margin: 1.5rem 0;
    border-left: 4px solid ${(props) => props.theme.indigoLight};
    margin-left: 0;
    padding: 0.8rem 1rem;
    background: ${(props) => props.theme.blockquoteBackground};
    border-radius: ${(props) => props.theme.borderRadius};
  }

  blockquote p {
    font-size: 1rem;
    line-height: 1.7;
    font-weight: 400;
  }

  blockquote p:last-of-type {
    margin: 0;
  }

  /* Headings */

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(props) => props.theme.fontColorHeading};
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-weight: 600;
    scroll-margin-top: 100px;
  }

  h1:not(:first-child),
  h2:not(:first-child),
  h3:not(:first-child),
  h4:not(:first-child) {
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
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.fontColorHeading};
    letter-spacing: -0.03rem;
  }

  h2 code {
    font-size: 1.9rem !important;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.fontColorHeading};
    font-family: ${(props) => props.theme.fontFamilyHeading};
  }

  h3 code {
    font-size: 1.5rem !important;
  }

  h4 {
    color: ${(props) => props.theme.fontColorHeading};
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 800;
    /* text-transform: uppercase; */
    font-family: ${(props) => props.theme.fontFamilyHeading};
  }

  h4 code {
    font-size: 1.3rem !important;
  }

  h5 {
    color: ${(props) => props.theme.fontColorBase};
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.02rem;
    font-family: ${(props) => props.theme.fontFamilyHeading};
  }

  table {
    border: 1px solid ${(props) => props.theme.borderColor};
    display: table;
    border-collapse: separate;
    border-spacing: 0;
    max-width: 100%;
    overflow-x: auto;
    width: 100%;
    /* font-size: 0.9rem; */
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
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }

  th {
    background: ${(props) => props.theme.cardBackgroundColor};
    border-bottom: 2px solid ${(props) => props.theme.borderColor};
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    -webkit-appearance: none;
    background: ${(props) => props.theme.buttonBackgroundColor};
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1rem;
    font-family: ${(props) => props.theme.fontFamilyBase};
    line-height: 1;
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.fontColorBase};
    border: 1px solid ${(props) => props.theme.borderColor};
    gap: 0.25rem;

      &:hover {
        color: ${(props) => props.theme.fontColorBright};
        border-color: ${(props) => props.theme.borderColorHover};
      }
  }
`
