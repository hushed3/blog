import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token }) => ({
  container: css`
    ${stylish.container}
  `,

  brief: css`
    display: flex;

    ${r({
      laptop: css`
        display: block;
      `,
    })}
  `,

  briefDescription: css`
    -webkit-font-smoothing: antialiased;
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.4;
    color: ${token.colorTextSecondary};

    ${r({
      laptop: css`
        font-size: 0.9rem;
        margin-top: 2rem;
      `,
    })}
  `,

  previewWrapper: css`
    ${stylish.wrapper}
    margin-top: 2rem;
  `,

  preview: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;

    ${r({
      laptop: css`
        grid-template-columns: repeat(2, 1fr);
        gap: 1.9rem;
      `,
    })}

    ${r({
      mobile: css`
        grid-template-columns: repeat(1, 1fr);
        gap: 1.4rem;
      `,
    })}
  `,

  recentCard: css`
    ${stylish.card}

    flex: 1;
    display: flex;
    flex-wrap: wrap;
    min-height: 9rem;
  `,

  highlightCard: css`
    ${stylish.card}

    padding: 1.5rem;
    display: flex;
    align-items: center;
    min-height: 9rem;
    gap: 1rem;

    .content {
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      height: 100%;
    }
  `,

  time: css`
    display: block;
    font-family: monospace;
    color: ${token.colorMagentaBorderHover};
    font-size: 0.75rem;

    ${r({
      laptop: css`
        font-size: 0.7rem;
      `,
    })}
  `,

  titleLink: css`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.95rem;
    line-height: 1.2;
    color: ${token.colorText};
    font-weight: 600;
    padding: 0;
    border: 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    ${r({
      laptop: css`
        font-size: 0.85rem;
      `,
    })}
  `,

  tagLinks: css`
    display: flex;
    align-items: flex-end;

    a {
      font-size: 0.75rem;
      color: ${token.colorTextDescription};
      &:hover {
        text-decoration: underline;
        color: ${token.colorText};
      }

      ${r({
        laptop: css`
          font-size: 0.7rem;
        `,
      })}
    }
  `,
}))
