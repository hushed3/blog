import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => {
  return {
    heading: css`
      &.${prefixCls}-typography {
        position: relative;

        ${r({
          tablet: css`
            font-size: 18.5px;
          `,
          mobile: css`
            font-size: 17px;
          `,
        })}
      }
      &:hover {
        a {
          opacity: 1;
        }
      }
    `,
    anchor: css`
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      padding-right: 4px;
      opacity: 0;
    `,
  }
})
