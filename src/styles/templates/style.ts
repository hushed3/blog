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

  spacerLine: css`
    width: 100%;
    border-bottom: 1px dashed ${token.colorBorder};
    margin: 0 0 3.2rem;
  `,

  title: css`
    padding: 5.6rem 0 4rem;
    margin: 0;
    font-size: 1.85rem;
    letter-spacing: -0.07rem;
    font-weight: 700;
    line-height: 1.05;

    ${r({
      laptop: css`
        padding: 3.5rem 0 3rem;
      `,
    })}
  `,

  main: css`
    padding-bottom: 5rem;
  `,
}))
