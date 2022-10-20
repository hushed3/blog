import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components'

export const CodeStyle: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`

  pre {
    border: 0;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    -webkit-font-smoothing: subpixel-antialiased;
    color:  ${(props) => props.theme.codeFontColor};
    font-family: 'Menlo',  ${(props) => props.theme.fontFamilyMonospace};
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

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-'] {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1;
    background:  ${(props) => props.theme.codeBackgroundColor};
    overflow: overlay;
    border-radius: 4px;
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

  code.language-text {
    color: #646cff;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    -webkit-font-smoothing: subpixel-antialiased;
    background:  ${(props) => props.theme.inlineCodeBackgroundColor};
    color: #646cff;
    /* color:  ${(props) => props.theme.fontColorBase}; */
    padding: 0.2rem 0.3rem;
    font-weight: 500;
    font-size: 0.9rem;
    border-radius: 4px;
  }

  :not(pre) > a code[class*='language-'] {
    color:  ${(props) => props.theme.link};
  }

  :not(pre) > a code[class*='language-']:hover {
    color:  ${(props) => props.theme.linkHoverColor};
  }

  code.language-shell::before {
    content: '$ ';
    color:  ${(props) => props.theme.comment};
  }

  .gatsby-highlight {
    background:  ${(props) => props.theme.codeBackgroundColor};
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    border-radius: 6px;
    overflow: overlay;
    margin: 1.5rem 0 1.8rem 0;
    max-width: 100%;
    position: relative;
    transform: matrix(1, 0, 0, 1, 0, 0);

    &::before{
    content: attr(data-language);
    position: absolute;
    right: 1rem;
    top: 0;
    color:  ${(props) => props.theme.indigoLight};
    filter: drop-shadow(0 0 6px #747bff);
    font-weight: bold;
    text-transform: capitalize;
    font-size: 12px;
    line-height: 2.4rem;
    transform: scale(0.95);
    transform-origin: 100% 10%;
    }

    &::after{
    content: '';
    position: absolute;
    left: 1.1rem;
    top: 0.8rem;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #EC6A5E;
    }
  }


  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: overlay;
    min-width: 100%;
    padding: 2.5rem 1.1rem 0.9rem 1.1rem;

    &::before{
      content: '';
      position: absolute;
      left: 2.5rem;
      top: 0.8rem;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #F4BE4F;
    }
    &::after{
      content: '';
      position: absolute;
      left: 3.9rem;
      top: 0.8rem;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #62C454;
    }
  }

  .gatsby-highlight pre.language-terminal {
    padding: 1rem;
    position: relative;
    padding-top: 3rem;
    white-space: unset;
    -webkit-text-size-adjust: none;
    border: 1px solid  ${(props) => props.theme.terminalBorder};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background:  ${(props) => props.theme.terminalBackgroundColor};
    max-width: 100%;
  }

  code.language-terminal {
    -webkit-font-smoothing: antialiased;
    color:  ${(props) => props.theme.terminalColor};
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    white-space: pre-wrap;
    word-break: break-all;
  }

  pre.language-terminal::before {
    content: '\2022 \2022 \2022';
    position: absolute;
    top: 0;
    left: 0;
    background:  ${(props) => props.theme.terminalBar};
    padding: 0.5rem 1.5rem 0.7rem;
    color: #a19ea1;
    border-top: 1px solid  ${(props) => props.theme.terminalAccent};
    border-bottom: 1px solid  ${(props) => props.theme.borderColor};
    width: 100%;
    font-size: 2.5rem;
    margin: 0;
    line-height: 0;
    padding: 15px 0 12px;
    text-indent: 6px;
    letter-spacing: -5px;
    border-bottom: 1px solid  ${(props) => props.theme.borderColor};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .gatsby-highlight[data-language='terminal'] {
    box-shadow: none;
    padding: 0;
    background: transparent;
    overflow: auto;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 15px 20px, rgba(0, 0, 0, 0.03) 0px 5px 7px;
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

  /* Colors */

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.important {
    color:  ${(props) => props.theme.comment};
  }

  .token.punctuation {
    color:  ${(props) => props.theme.punctuation};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property {
    color:  ${(props) => props.theme.property};
  }

  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color:  ${(props) => props.theme.tag};
  }

  .token.number {
    color:  ${(props) => props.theme.number};
  }

  .token.char,
  .token.builtin,
  .token.url,
  .token.inserted {
    color:  ${(props) => props.theme.codeFontColor};
  }

  .token.attr-name,
  .token.selector {
    color:  ${(props) => props.theme.attribute};
  }

  .token.attr-value,
  .token.string {
    color:  ${(props) => props.theme.string};
  }

  .token.operator {
    color:  ${(props) => props.theme.operator};
  }

  .token.atrule,
  .token.keyword {
    font-weight: 600;
    color:  ${(props) => props.theme.keyword};
  }

  .token.function {
    color:  ${(props) => props.theme.function};
  }

  .language-css,
  .token.boolean,
  .token.class-name {
    color:  ${(props) => props.theme.class};
  }

  .token.regex {
    color:  ${(props) => props.theme.keyword};
  }

  .token.variable {
    color:  ${(props) => props.theme.variable};
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
    color:  ${(props) => props.theme.tag};
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
