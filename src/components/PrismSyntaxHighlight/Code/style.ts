import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, isDarkMode, stylish, prefixCls: prefix }, prefixCls: string) => {
  return {
    syntaxHighlight: cx(
      prefixCls,
      css`
        ${stylish.card}
        position: relative;
        border-radius: ${token.borderRadius}px;
        margin-block: 1.2rem;
        padding-block-end: 0.8rem;
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
          padding-inline-start: 1rem;
          padding-inline-end: 0.4rem;
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
          padding-inline-start: 0.8rem;
          padding-inline-end: 1.3rem;

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
          background: linear-gradient(
            90deg,
            ${token.colorPrimaryBorderHover} 0% 10%,
            ${token.colorPrimaryBgHover} 10% 100%
          );
        }
        &.line {
          background-color: ${token.colorPrimaryBgHover};
        }
      `
    ),

    // code
    code: cx(
      `${prefix}-code`,
      css`
        color: ${token.colorPrimary};
        font-size: 0.95rem;
        background-color: ${token.colorFillQuaternary};
        padding-block: 0.2rem;
        padding-inline: 0.35rem;
        border-radius: ${token.borderRadiusOuter}px;
        margin-inline: 0.3rem;
        font-family: ${token.fontFamilyHighlighter};
      `
    ),

    // title
    TitleBox: cx(
      `${prefixCls}-titleBox`,
      css`
        position: relative;
        left: 0;
        display: flex;
        color: ${token.colorTextTertiary};
        font-size: 0.95rem;
        padding-block: 0.6rem 0.25rem;
        padding-inline: 1.5rem 1.2rem;
        gap: 0.8rem;
        display: flex;
        justify-content: space-between;
      `
    ),

    titleStyle: cx(
      `${prefixCls}-titleBox-title`,
      css`
        color: ${token.colorTextTertiary};
      `
    ),

    stackblitz: cx(
      `${prefixCls}-titleBox-stackblitz`,
      css`
        display: flex;
        align-items: center;
        color: ${token.colorTextTertiary};
        margin-inline-end: 0.3rem;
        opacity: 0.8;
      `
    ),

    language: cx(
      `${prefixCls}-language`,
      css`
        display: flex;
        align-items: center;
        font-family: ${token.fontFamilyCode};
        font-size: 0.95rem;
      `
    ),

    copy: cx(
      `${prefixCls}-copy`,
      css`
        position: absolute;
        top: 0.85rem;
        right: 1.2rem;
        z-index: 10;
        height: 32px;
        padding-block: 5px;
        padding-inline: 7px;
        /* opacity: 0; */

        /* &:hover {
          opacity: 1;
        } */
      `
    ),

    // languageStyle: cx(
    //   `${prefixCls}-header-language`,
    //   css`
    //     display: inline-flex;
    //     align-items: center;
    //     text-align: center;
    //     padding-inline: 0.6rem;
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
