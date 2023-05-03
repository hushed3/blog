import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, token }) => ({
  container: css`
    ${stylish.container}
    height: calc(100vh - ${token.headerHeight}px - 168px);
    display: flex;
    align-items: center;
    justify-content: center;

    ${r({
      laptop: css`
        height: calc(100vh - ${token.headerHeightLaptop}px - 168px);
      `,
    })}
  `,
}))
