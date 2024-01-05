import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => {
  return {
    blockquote: cx(
      `${prefixCls}-blockquote`,
      css`
        width: 100%;
        margin-left: 0;
        padding: 0.8rem 1rem;
        background: ${token.colorPrimaryBg};
        border-radius: ${token.borderRadius}px;
        border-left: 4px solid ${token.colorPrimaryBorder};

        code {
          background-color: transparent;
        }

        p {
          font-size: 0.96rem;
          line-height: 1.9;
          font-weight: 400;
          overflow: overlay;

          &:last-of-type {
            margin: 0;
          }
        }
      `
    ),
  }
})
