import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  container: css`
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.2rem;

    ${r({
      laptop: css`
        padding-top: 2rem;
        gap: 1.5rem;
      `,
      mobile: css`
        padding-top: 1rem;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.8rem;
      `,
    })}
  `,
}))
