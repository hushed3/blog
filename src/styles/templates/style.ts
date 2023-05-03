import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  container: css`
    ${stylish.container}

    display: grid;
    grid-template-columns: auto 260px;
    gap: 4rem;

    ${r({
      laptop: css`
        display: block;
      `,
    })}
  `,

  title: css`
    padding: 2.5rem 0 1rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: 1.85rem;
    letter-spacing: -0.07rem;
    font-weight: 700;
    line-height: 1.05;

    ${r({
      laptop: css`
        padding: 1.5rem 0 2rem;
        font-size: 1.5rem;
      `,
    })}
  `,
}))
