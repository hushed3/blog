import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, isDarkMode, prefixCls: prefix }, prefixCls: string) => {
  return {
    syntaxHighlight: cx(
      prefixCls,
      css`
        position: relative;
        border-radius: ${token.borderRadius}px;
        /* box-shadow: ${token.boxShadowTertiary}; */
        background-color: ${token.colorBgElevated};
        margin: 0.8rem 0 1.2rem 0;
        padding-bottom: 0.8rem;
        overflow: overlay;
      `
    ),

    syntaxHighlightCodeScorll: cx(
      `${prefixCls}-code-scorll`,
      css`
        overflow: overlay;
      `
    ),

    syntaxHighlightCode: cx(
      `${prefixCls}-code`,
      css`
        display: inline-flex;
        flex-wrap: nowrap;

        font-family: SF Mono;
        font-weight: normal;
        background-color: transparent;
        word-spacing: normal;
        word-break: normal;
        overflow-wrap: normal;
        tab-size: 4;
        hyphens: none;
        width: auto;
        min-width: 100%;
        margin: 0;
        padding: 0;
      `
    ),

    lineNumbers: cx(
      `${prefixCls}-code-lineNumbers`,
      css`
        display: flex;
        flex-direction: column;
        position: sticky;
        left: 0;
        z-index: 1;

        .number {
          display: inline-block;
          user-select: none;
          padding-left: 1rem;
          padding-right: 0.4rem;
          text-align: right;
          background-color: ${token.colorBgElevated};
          color: ${token.colorTextQuaternary};
        }
      `
    ),

    lines: cx(
      `${prefixCls}-code-lines`,
      css`
        font-family: inherit !important;
        flex: 1;

        .line {
          position: relative;
          padding-left: 0.8rem;
          padding-right: 1.3rem;

          span {
            font-family: inherit;
          }
        }
      `
    ),

    LineHighlight: cx(
      `${prefixCls}-code-CodeHighlight`,
      css`
        &.number {
          background: linear-gradient(90deg, ${token.colorPrimaryHover} 0% 10%, ${token.colorHighlight} 10% 100%);
        }
        &.line {
          background-color: ${token.colorHighlight};
        }
      `
    ),

    // code
    code: cx(
      `${prefix}-code`,
      css`
        color: ${token.colorPrimary};
        font-size: 0.95rem;
        background-color: ${isDarkMode ? token.colorFillQuaternary : token.colorFillTertiary};
        /* background-color: ${token.colorFillQuaternary}; */
        padding: 0.2rem 0.35rem;
        border-radius: ${token.borderRadiusOuter}px;
        margin: 0 0.3rem;
        font-family: ${token.fontFamilyHighlighter};
        opacity: 0.95;
      `
    ),

    // title
    TitleBox: cx(
      `${prefixCls}-titleBlock`,
      css`
        position: sticky;
        left: 0;
        display: flex;
        color: ${token.colorTextSecondary};
        font-size: 0.95rem;
        padding: 0.5rem 1rem 0.3rem 1.5rem;
        gap: 0.8rem;
      `
    ),

    titleStyle: cx(
      `${prefixCls}-titleBlock-title`,
      css`
        flex: 1;
        color: ${token.colorTextTertiary};
      `
    ),

    // language
    language: cx(
      `${prefixCls}-language`,
      css`
        position: absolute;
        top: 0.9rem;
        right: 1rem;
        z-index: 5;

        .language {
          color: ${token.colorTextTertiary};
          font-family: ${token.fontFamilyCode};
          font-size: 0.85rem;
        }

        .copyButton {
          height: 32px !important;
          padding: 5px 7px !important;
        }
      `
    ),

    // languageStyle: cx(
    //   `${prefixCls}-header-language`,
    //   css`
    //     display: inline-flex;
    //     align-items: center;
    //     text-align: center;
    //     padding: 0rem 0.6rem;
    //     border-radius: 6px;
    //     letter-spacing: 1px;
    //     text-transform: uppercase;
    //     color: ${token.colorText};
    //     font-weight: 500;
    //     font-size: 0.9rem;
    //     line-height: ${token.lineHeight};
    //     box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0px 0px rgba(0, 0, 0, 0.1),
    //       inset 0 -1px 0px 0px rgba(255, 255, 255, 0.1);

    //     &[data-language='js'] {
    //       background: rgba(247, 223, 30, ${languageOpacity});
    //     }
    //     &[data-language='jsx'] {
    //       background: rgba(97, 218, 251, ${languageOpacity});
    //     }
    //     &[data-language='ts'] {
    //       background: rgba(97, 218, 251, ${languageOpacity});
    //     }
    //     &[data-language='tsx'] {
    //       background: rgba(97, 218, 251, ${languageOpacity});
    //     }
    //     &[data-language='html'] {
    //       background: rgba(0, 90, 156, ${languageOpacity});
    //     }
    //     &[data-language='xml'] {
    //       background: rgba(0, 90, 156, ${languageOpacity});
    //     }
    //     &[data-language='svg'] {
    //       background: rgba(0, 90, 156, ${languageOpacity});
    //     }
    //     &[data-language='graphql'] {
    //       background: rgba(225, 0, 152, ${languageOpacity});
    //     }
    //     &[data-language='css'] {
    //       background: rgba(255, 152, 0, ${languageOpacity});
    //     }
    //     &[data-language='mdx'] {
    //       background: rgba(249, 172, 0, ${languageOpacity});
    //     }
    //     &[data-language='py'] {
    //       background: rgba(51, 111, 160, ${languageOpacity});
    //     }
    //     &[data-language='text'] {
    //       background: ${token.colorBgLayout};
    //     }
    //     &[data-language='sh'] {
    //       background: ${token.colorBgLayout};
    //     }
    //     &[data-language='shell'] {
    //       background: ${token.colorBgLayout};
    //     }
    //     &[data-language='yaml'] {
    //       background: rgba(255, 168, 223, ${languageOpacity});
    //     }
    //     &[data-language='md'] {
    //       background: ${token.colorBgLayout};
    //     }
    //     &[data-language='json'] {
    //       background: rgba(250, 240, 230, ${languageOpacity});
    //     }
    //     &[data-language='diff'] {
    //       background: rgba(230, 255, 237, ${languageOpacity});
    //     }
    //     &[data-language='svelte'] {
    //       background: rgba(255, 62, 0, ${languageOpacity});
    //     }
    //   `
    // ),
  }
})
