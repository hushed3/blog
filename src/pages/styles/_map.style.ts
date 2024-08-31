import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, token, stylish, responsive: r }) => ({
  container: css`
    ${stylish.container}
    height: calc(100vh - ${token.headerHeight}px - ${token.footerHeight}px);
    padding: 0;

    ${r({
      mobile: css`
        display: block;
        height: calc(100vh - ${token.headerHeightMobile}px - ${token.footerHeightMobile}px);
        padding: 0;
      `,
    })}
  `,
}))
