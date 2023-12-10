import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token, prefixCls }) => ({
  briefHeader: cx(
    `${prefixCls}-briefHeader`,
    css`
      position: relative;
      width: 100%;
      padding: 4rem 0 3rem;

      ${r({
        mobile: css`
          padding: 3rem 0 2.5rem;
        `,
      })}
    `
  ),

  Description: cx(
    `${prefixCls}-briefHeader-description`,
    css`
      color: ${token.colorTextDescription};
      font-weight: 500;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;

      span {
        color: ${token.colorPrimary};
        font-family: Prisma;
        margin-right: 0.2rem;
      }
    `
  ),

  title: cx(
    `${prefixCls}-briefHeader-title`,
    css`
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
    `
  ),
  greeting: cx(
    `${prefixCls}-briefHeader-greeting`,
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

  highlightText: cx(
    `${prefixCls}-briefHeader-highlightText`,
    css`
      color: ${token.colorPrimaryBorderHover};
    `
  ),
}))
