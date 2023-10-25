import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, isDarkMode }, prefixCls: string) => {
  return {
    heading: cx(
      prefixCls,
      css`
        position: relative;
        cursor: pointer;
        &:hover {
          a {
            opacity: 1;
          }
        }
      `
    ),

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
