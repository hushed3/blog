import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, stylish, prefixCls }, level: number) => {
  const anchorLevel = Array.from({ length: level }).map((_, i) => {
    const currentLevel = level - i
    const maxWidth = 0.25 + 0.5 * level
    const width = 0.25 + 0.5 * currentLevel

    return css`
      .level-${i + 1} {
        display: flex;
        align-items: center;
        padding-block: 0.3rem;
        text-indent: calc(${maxWidth}rem - ${width}rem);

        .${prefixCls}-anchor-link-title {
          font-weight: ${level > 1 && currentLevel === level ? 'bold' : ''};
        }

        &::before {
          content: '';
          width: ${width}rem;
          height: 0.3rem;
          border-radius: 2rem;
          transform: translateX(-0.8rem);
        }
      }
    `
  })

  const linkActive = css`
    &::before {
      background-color: ${token.colorPrimaryHover};
      opacity: 0.8;
    }

    .${prefixCls}-anchor-link-title {
      color: ${token.colorPrimaryHover};
      opacity: 1;
    }
  `

  return {
    sticky: css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      position: sticky;
      top: calc(${token.headerHeight}px + 20px);

      ${r({
        mobile: css`
          top: ${token.headerHeightMobile};
        `,
      })}
    `,

    card: css`
      ${stylish.card}
      margin-block-start: 1rem;
      background-color: transparent !important;
    `,

    title: css`
      color: ${token.colorText};
      font-size: 0.9rem;
      border: none;
      margin-block-end: 1rem !important;
      text-transform: uppercase;
      font-weight: 700;
    `,

    anchor: cx(
      css`
        .${prefixCls}-anchor {
          font-size: 0.9rem;

          &::before {
            border-inline-start: none !important;
          }

          &-ink {
            display: none !important;
          }

          &:hover {
            .${prefixCls}-anchor-link-title {
              opacity: 1;
            }
          }

          .${prefixCls}-anchor-link {
            &::before {
              background-color: ${token.colorFill};
            }
            &-title {
              color: ${token.colorTextSecondary};
              letter-spacing: 0.5px;
              opacity: 0;
            }

            &:hover {
              ${linkActive}
            }
          }

          .${prefixCls}-anchor-link-active {
            ${linkActive}
          }

          ${anchorLevel}
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
      margin-block-end: 0.6rem;
      padding-block: 0.1rem;
      padding-inline: 0.3rem;

      span {
        color: inherit;
      }

      &:last-child {
        margin-block-end: 0rem;
      }

      &.active {
        color: ${token.colorPrimary};
        font-weight: bold;
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

      &.${prefixCls}-tag-checkable-checked {
        color: ${token.colorPrimary};
        background-color: ${token.colorPrimaryBg};
      }

      &:hover {
        color: ${token.colorPrimary};
        background-color: ${token.colorPrimaryBg};
      }
    `,

    articles: css`
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: 1rem;
      color: ${token.colorTextSecondary};
      margin-block-end: 0.6rem;
      margin-inline-start: 0.5rem;

      .title {
        font-size: 0.9rem;
      }

      & {
        .active {
          color: ${token.colorPrimary};
          font-weight: bold;
        }

        &:hover {
          color: ${token.colorPrimary};
          text-decoration: none;
        }

        &:last-child {
          margin-block-end: 0;
        }
      }
    `,
  }
})
