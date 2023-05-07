import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => ({
  sticky: css`
    position: sticky;
    top: calc(${token.headerHeight}px + 20px);

    ${r({
      mobile: css`
        top: ${token.headerHeightLaptop};
      `,
    })}
  `,

  card: css`
    margin: 2rem 0;
    background-color: ${token.colorBgElevated};

    li {
      font-size: 0.85rem;
      color: ${token.colorTextSecondary};
    }
  `,

  title: css`
    color: ${token.colorText};
    font-size: 0.9rem;
    border: none;
    margin: 0 0 1rem !important;
    text-transform: uppercase;
    font-weight: 700;
  `,

  anchor: cx(
    `${prefixCls}-anchor`,

    css`
      .${prefixCls}-anchor {
        font-size: 0.9rem;

        &::before {
          border-inline-start: none !important;
        }

        &-link {
          padding-inline: 1.55rem 0 !important;

          &-title:not(&-title-active) {
            color: ${token.colorTextSecondary};
          }
        }

        &-ink-visible {
          width: 0.4rem !important;
          height: 0.4rem !important;
          border-radius: 50%;
          margin-left: 0.5rem;
          background-color: ${token.colorPrimaryBorderHover} !important;
        }
      }
    `
  ),

  link: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    background-color: transparent;
    border-radius: ${token.borderRadius};
    color: ${token.colorTextSecondary};
    font-size: 0.86rem;
    margin-bottom: 0.6rem;
    padding: 0.1rem 0.3rem;

    ${r({
      laptop: css`
        font-size: 0.76rem;
      `,
    })}

    &:last-child {
      margin-bottom: 0rem;
    }

    &.active {
      color: ${token.colorPrimary};
      font-weight: bold;
      span {
        color: inherit;
      }
    }

    &:hover {
      color: ${token.colorPrimaryHover};
      text-decoration: none;
    }
  `,

  tag: css`
    cursor: pointer;
    font-size: 0.8rem;
    color: ${token.colorTextSecondary};
    text-transform: capitalize;

    &.active {
      color: ${token.colorPrimary};
      background-color: ${token.colorPrimaryBg};
    }

    &:hover {
      color: ${token.colorPrimary};
      background-color: ${token.colorPrimaryBg};
    }
  `,

  tags: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem 0.6rem;

    ${r({
      laptop: css`
        grid-template-columns: repeat(5, 1fr);
        gap: 0.6rem 0.4rem;
      `,
      mobile: css`
        grid-template-columns: repeat(4, 1fr);
        gap: 0.6rem 0.4rem;
      `,
    })}
  `,

  image: css`
    margin: 0 auto;
    margin-top: 2rem;
    text-align: center;
    display: block !important;
    width: 100px;
  `,
}))
