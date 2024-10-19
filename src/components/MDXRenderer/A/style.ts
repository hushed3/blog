import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, prefixCls }) => {
  return {
    a: cx(
      `${prefixCls}-a`,
      css`
        .${prefixCls}-code {
          color: inherit;
        }
      `
    ),
  }
})
