import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, token }, prefixCls: string) => ({
  layout: css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,

  main: css`
    flex: 1;
  `,
}))
