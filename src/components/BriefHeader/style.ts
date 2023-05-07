import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token }, prefixCls: string) => ({
  brief: css`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 2rem 0;
    position: relative;
    margin-top: 0.5rem;
  `,

  Description: css`
    color: ${token.colorTextDescription};
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.4rem;

    span {
      color: ${token.colorPrimaryBorderHover};
    }
  `,

  title: css`
    line-height: 1.1;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    margin: 0 !important;

    ${r({
      laptop: css`
        font-size: 1.7rem;
      `,
      mobile: css`
        font-size: 1.6rem;
      `,
    })}
  `,
  greeting: css`
    font-family: Prisma;
    font-weight: normal;
    letter-spacing: 0.15rem;
  `,

  highlightText: css`
    color: ${token.colorPrimaryBorderHover};
  `,
}))
