import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => {
  return {
    table: cx(
      `${prefixCls}-table`,
      css`
        display: table;
        border-collapse: separate;
        border-spacing: 0;
        max-width: 100%;
        overflow-x: auto;
        width: 100%;
        line-height: 1.5;
        margin-top: 0;
        margin-bottom: 1.5rem;
        border: 1px solid ${token.colorBorderSecondary};
        border-bottom: none;
        border-radius: ${token.borderRadiusLG}px;
        overflow: hidden;

        tr {
          transition: background-color ${token.motionDurationMid};
          &:hover {
            background-color: ${token.colorBgElevated};
          }
        }

        td,
        th {
          position: relative;
          hyphens: auto;
          padding: 0.5rem;
          text-align: left;
          word-break: break-word;
          border-bottom: 1px solid ${token.colorBgElevated};

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            inset-inline-end: 0;
            width: 1px;
            height: 1.6em;
            background-color: ${token.colorBorderSecondary};
            transform: translateY(-50%);
            transition: ${token.motionDurationMid};
          }

          &:last-child {
            &::before {
              content: '';
              width: 0;
            }
          }
        }

        th {
          background: ${token.colorBgElevated};
        }
      `
    ),
  }
})
