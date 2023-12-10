import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, prefixCls, responsive: r, cx, stylish }) => ({
  layout: cx(
    `${prefixCls}-layout`,
    css`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `
  ),

  content: cx(
    `${prefixCls}-layout-content`,
    css`
      flex: 1;
    `
  ),
}))
