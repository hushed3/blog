import { createStyles } from 'antd-style'

export const useStyles = createStyles(
  ({ css, cx, token, isDarkMode, stylish, prefixCls: prefix }, prefixCls: string) => {
    return {
      syntaxHighlight: cx(
        prefixCls,
        css`
          ${stylish.card}
          position: relative;
          border-radius: ${token.borderRadius * 1.3}px;
          margin-block: 1.6rem;
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
          font-size: 0.9rem;
          color: ${token.colorTextQuaternary};
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
          box-shadow: ${token.boxShadowFourth};
        `
      ),
    }
  }
)
