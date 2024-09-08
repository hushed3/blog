import { createStyles } from 'antd-style'

const Cardinality = 5
const Interval = 5

export const useStyles = createStyles(({ css, cx, token, stylish, prefixCls, isDarkMode }, level: number) => {
  const anchorLevel = Array.from({ length: level }).map((_, i) => {
    const currentLevel = level - i
    const maxWidth = level === 1 ? 15 : Cardinality + Interval * level

    const width = level === 1 ? 15 : Cardinality + Interval * currentLevel

    return css`
      .level-${i + 1} {
        display: flex;
        align-items: center;
        padding-inline-start: ${maxWidth + 15 + i * 6}px;

        .${prefixCls}-anchor-link-title {
          &::before {
            content: '';
            position: absolute;
            left: 4px;
            top: calc(50% - 2px);
            display: inline-block;
            width: ${width}px;
            height: 4px;
            border-radius: 2rem;
            background-color: ${isDarkMode ? '#373737' : '#e5e5e5'};
            transition: all 0.45s;
          }
        }
      }
    `
  })

  return {
    card: css`
      ${stylish.card}
      margin-block-start: 1rem;
      background-color: transparent !important;
      box-shadow: none !important;
    `,

    title: cx(
      `.${prefixCls}-sidebar-title`,
      css`
        color: ${token.colorText};
        font-size: 0.9rem;
        border: none;
        margin-block-end: 1rem !important;
        text-transform: uppercase;
        font-weight: 700;
      `
    ),

    anchor: cx(
      `.${prefixCls}-sidebar-anchor`,
      css`
        .${prefixCls}-anchor {
          font-size: 0.9rem;
          font-family: SF Mono Medium;

          ${anchorLevel}

          &-ink {
            display: none !important;
          }

          &::before {
            border-inline-start: 0px !important;
          }

          &:hover {
            .${prefixCls}-anchor-link-title {
              color: ${token.colorTextSecondary};
            }
          }

          .${prefixCls}-anchor-link {
            position: relative;
          }

          .${prefixCls}-anchor-link-title {
            overflow: visible;
            position: static;
            color: ${token.colorTextSecondary};
            letter-spacing: 0.5px;
            transition: all 0.45s;
            color: transparent;

            &:hover {
              color: ${token.colorPrimaryHover};

              &::before {
                transform: scale(1.1);
                background-color: ${token.colorPrimaryBorderHover};
              }
            }
          }

          .${prefixCls}-anchor-link-title-active {
            color: ${token.colorPrimary} !important;

            &::before {
              content: '';
              background-color: ${token.colorPrimaryBorderHover} !important;
              transform: scale(1.08);
            }
          }
        }
      `
    ),

    link: cx(
      `.${prefixCls}-sidebar-link`,
      css`
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
      `
    ),

    tag: cx(
      `.${prefixCls}-sidebar-tag`,
      css`
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
      `
    ),

    articles: cx(
      `.${prefixCls}-sidebar-articles`,
      css`
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 1rem;
        color: ${token.colorText};
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
      `
    ),
  }
})
