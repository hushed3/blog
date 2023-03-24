import { css, Global } from '@emotion/react'
import React from 'react'

interface Props {
  theme: any
}

export const GlobalStyle = (props: Props) => {
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background: rgba(${props.theme.primary3}, 0.45);
          }

          ::-webkit-scrollbar {
            background-color: transparent;
            width: 10px;
            height: 10px;
            z-index: 1000;
            padding: 0px;
          }

          body[scroll],
          ::-webkit-scrollbar-thumb {
            background-color: rgba(${props.theme.gray4}, 0.35);
            border-radius: ${props.theme.borderRadiusLarge};
            background-clip: content-box;
            border: 2px solid transparent;
            z-index: 10000;
          }

          body[scroll],
          ::-webkit-scrollbar-thumb:hover {
            background-color: rgba(${props.theme.gray3}, 0.9);
            transition: 0s;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          html {
            font-family: ${props.theme.fontFamilyBase};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            line-height: 1.6;
            font-size: 13px;
            font-weight: normal;
            font-kerning: normal;
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            padding: 0;
            overflow: overlay;
            position: relative;
            background-color: rgb(${props.theme.pageBackground});
            color: ${props.theme.colorText1};
            transition: background-color ease-out 0.1s;
          }

          a {
            color: rgb(${props.theme.primary5});
            text-decoration: none;
            transition: border ease-out 0.1s;
          }

          p,
          ul,
          ol,
          ul,
          table,
          blockquote {
            color: ${props.theme.colorText1};
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
            color: rgb(${props.theme.magenta4});
          }

          /* Blockquote */

          blockquote {
            margin: 1.5rem 0;
            border-left: 4px solid rgba(${props.theme.primary5}, 0.6);
            margin-left: 0;
            padding: 0.8rem 1rem;
            background: rgba(${props.theme.primary5}, 0.15);
            border-radius: ${props.theme.borderRadiusLarge};
            box-shadow: 0 0 4px rgba(${props.theme.primary5}, 0.1);

            & code.language-text {
              background-color: transparent;
            }
          }

          blockquote p {
            font-size: 1rem;
            line-height: 1.9;
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
            color: ${props.theme.colorText0};
            line-height: 1.1;
            margin-top: 0;
            margin-bottom: 1.5rem;
            font-weight: 600;
            scroll-margin-top: 100px;
            font-family: ${props.theme.fontFamilyHeading};
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
            font-family: ${props.theme.fontFamilyHeading};
          }

          h3 code {
            font-size: 1.5rem !important;
          }

          h4 {
            margin-bottom: 1.5rem;
            font-size: 1.2rem;
            font-weight: 800;
            font-family: ${props.theme.fontFamilyHeading};
          }

          h4 code {
            font-size: 1.3rem !important;
          }

          h5 {
            margin-bottom: 1rem;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: -0.02rem;
            font-family: ${props.theme.fontFamilyHeading};
          }

          table {
            border: 1px solid ${props.theme.colorBorder0};
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
            border-bottom: 1px solid ${props.theme.colorBorder0};
          }

          th {
            background: ${props.theme.colorFill1};
            border-bottom: 2px solid ${props.theme.colorBorder0};
          }

          img {
            display: block;
            max-width: 100%;
          }

          button {
            -webkit-appearance: none;
            display: inline-flex;
            align-items: center;
            padding: 0.6rem 1rem;
            font-family: ${props.theme.fontFamilyBase};
            line-height: 1;
            border-radius: ${props.theme.borderRadiusLarge};
            font-size: 0.9rem;
            cursor: pointer;
            font-weight: 500;
            border: 1px solid ${props.theme.colorBorder0};
            gap: 0.25rem;
          }

          .anchor {
            display: none;
          }

          .tag {
            display: inline-flex;
            position: relative;
            font-size: 0.9rem;
            border-radius: ${props.theme.borderRadiusSmall};
            padding: 0.2rem 0.6rem;
            margin-bottom: 0.8rem;
            margin-right: 0.3rem;
            align-items: center;
            line-height: calc(0.9rem + 8px);
            background: rgba(${props.theme.blue4}, 0.15);
            color: rgb(${props.theme.blue5});
            box-shadow: 0 0 2px rgba(${props.theme.blue6}, 0.1);

            &.success {
              background: rgba(${props.theme.green4}, 0.15);
              color: rgb(${props.theme.green5});
              box-shadow: 0 0 2px rgba(${props.theme.green6}, 0.1);
            }
            &.warning {
              background: rgba(${props.theme.gold4}, 0.15);
              color: rgb(${props.theme.gold5});
              box-shadow: 0 0 2px rgba(${props.theme.gold6}, 0.1);
            }
            &.error {
              background: rgba(${props.theme.red4}, 0.15);
              color: rgb(${props.theme.red5});
              box-shadow: 0 0 2px rgba(${props.theme.red6}, 0.1);
            }
          }

          .gatsby-highlight {
            background: rgb(${props.theme.cardBackground});
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
            border-radius: ${props.theme.borderRadiusLarge};
            overflow: overlay;
            margin: 0.6rem 0 2rem 0;
            padding: 1rem;
            max-width: 100%;
            position: relative;
            transform: matrix(1, 0, 0, 1, 0, 0);
            box-shadow: ${props.theme.cardShadow};
            transition: background-color ease-out 0.1s;

            &::before {
              content: attr(data-language);
              position: absolute;
              right: 1rem;
              top: 0;
              color: ${props.theme.colorText3};
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

          code[class*='language-'],
          pre[class*='language-'] {
            -webkit-font-smoothing: subpixel-antialiased;
            color: ${props.theme.codeFontColor};
            font-family: 'Menlo', ${props.theme.fontFamilyMonospace};
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

          code.language-shell::before {
            content: '$ ';
            color: ${props.theme.comment};
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
            color: rgb(${props.theme.primary5});
            transition: background-color ease-out 0.1s;
            background-color: rgba(${props.theme.gray1}, 0.7);
            padding: 0.2rem 0.35rem;
            border-radius: ${props.theme.borderRadiusSmall};
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
            color: ${props.theme.comment};
          }

          .token.punctuation {
            color: ${props.theme.punctuation};
          }

          .token.namespace {
            opacity: 0.7;
          }

          .token.property {
            color: ${props.theme.property};
          }

          .token.tag,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: ${props.theme.tag};
          }

          .token.number {
            color: ${props.theme.number};
          }

          .token.char,
          .token.builtin,
          .token.url,
          .token.inserted {
            color: ${props.theme.codeFontColor};
          }

          .token.attr-name,
          .token.selector {
            color: ${props.theme.attribute};
          }

          .token.attr-value,
          .token.string {
            color: ${props.theme.string};
          }

          .token.operator {
            color: ${props.theme.operator};
          }

          .token.atrule,
          .token.keyword {
            font-weight: 600;
            color: ${props.theme.keyword};
          }

          .token.function {
            color: ${props.theme.function};
          }

          .language-css,
          .token.boolean,
          .token.class-name {
            color: ${props.theme.class};
          }

          .token.regex {
            color: ${props.theme.keyword};
          }

          .token.variable {
            color: ${props.theme.variable};
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
            color: ${props.theme.tag};
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
        `}
      />
    </>
  )
}
