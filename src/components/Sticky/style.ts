import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, token, responsive: r }) => ({
  sticky: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: sticky;
    top: calc(${token.headerHeight}px + 20px);

    ${r({
      mobile: css`
        top: ${token.headerHeightMobile};
      `,
    })}
  `,
}))
