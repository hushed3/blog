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
    letter-spacing: -0.08rem;
    margin: 0 !important;

    ${r({
      laptop: css`
        font-size: 1.55rem;
        letter-spacing: -0.06rem;
      `,
      mobile: css`
        font-size: 1.4rem;
        letter-spacing: -0.06rem;
      `,
    })}
  `,

  highlightText: css`
    color: ${token.colorPrimaryBorderHover};
  `,
}))
