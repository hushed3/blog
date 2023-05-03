import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, responsive: r, token }) => ({
  years: css`
    color: ${token.colorPrimaryHover};
    padding-bottom: 0.8rem;
    border-bottom: 2px solid ${token.colorBorder};
    font-size: 1.65rem;
    font-weight: bold;
  `,

  link: css`
    display: flex;
    padding: 0.3rem 0;
    margin: 1.6rem 0;
    background-color: transparent;

    &:hover {
      h5 {
        color: ${token.colorText};
      }
      time {
        color: ${token.colorText};
      }
    }

    h5 {
      flex: 1;
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.3;
      color: ${token.colorTextSecondary};

      ${r({
        laptop: css`
          font-size: 0.85rem;
          font-weight: 500;
        `,
      })}
    }

    time {
      display: block;
      margin-left: auto;
      color: ${token.colorTextTertiary};
      font-size: 0.8rem;
      font-weight: 500;
    }
  `,
}))
