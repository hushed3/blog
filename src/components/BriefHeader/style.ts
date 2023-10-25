import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token }, prefixCls: string) => ({
  briefHeader: css`
    position: relative;
    width: 100%;
    padding: 4rem 0 3rem;

    ${r({
      mobile: css`
        padding: 3rem 0 2.5rem;
      `,
    })}
  `,

  Description: css`
    color: ${token.colorTextDescription};
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 0.4rem;

    span {
      color: ${token.colorPrimaryHover};
      font-family: Prisma;
    }
  `,

  title: css`
    line-height: 1.1;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    margin: 0 !important;

    ${r({
      tablet: css`
        font-size: 1.9rem;
      `,
      mobile: css`
        font-size: 1.8rem;
      `,
    })}
  `,
  greeting: cx(
    css`
      font-family: Prisma;
      font-weight: normal;
      letter-spacing: 0.15rem;
      font-size: 2.2rem;
      line-height: 1.1;
      letter-spacing: 0.3rem;
      margin: 0 !important;

      ${r({
        tablet: css`
          font-size: 1.9rem;
        `,
        mobile: css`
          font-size: 1.8rem;
        `,
      })}
    `
  ),

  highlightText: css`
    color: ${token.colorPrimaryBorderHover};
  `,
}))
