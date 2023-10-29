import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, responsive: r, token }) => ({
  years: css`
    margin-bottom: 3rem;
  `,
  year: css`
    color: ${token.colorPrimary};
    padding-bottom: 0.8rem;
    border-bottom: 2px solid ${token.colorBorderSecondary};
    font-size: 1.9rem;
    opacity: 0.8;
    font-weight: bold;
    ${r({
      mobile: css`
        font-size: 1.5rem;
      `,
    })}
  `,

  link: css`
    display: flex;
    align-items: center;
    padding: 0.3rem 0;
    margin: 1.6rem 0;
    background-color: transparent;
    transition: all 0.3s;
    color: inherit;

    &:hover {
      transform: translate3d(0.85rem, 0px, 0px);
      .infos {
        opacity: 1;
      }
    }

    .infos {
      flex: 1;
      padding: 0 1.3rem;
      color: ${token.colorText};
      opacity: 0.7;
    }
    h5 {
      flex: 1;
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.3;
      color: inherit;

      ${r({
        tablet: css`
          font-size: 0.85rem;
        `,
      })}
    }

    time {
      display: block;
      margin-left: auto;
      color: inherit;
      font-size: 0.8rem;
      font-weight: 500;
    }
  `,
}))
