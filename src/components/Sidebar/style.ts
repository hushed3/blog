import { createStyles } from 'antd-style'

const Cardinality = 5
const Interval = 5

export const useStyles = createStyles(({ css, cx, token, stylish, prefixCls, isDarkMode }, level: number) => {
  const anchorLevel = Array.from({ length: level }).map((_, i) => {
    const currentLevel = level - i
    const width = Cardinality + Interval * currentLevel

    return css`
      .level-${i + 1} {
        padding-inline: 8px 0;

        .${prefixCls}-anchor-link-title {
          overflow: visible;
          transition: all 0.45s;

          &::before {
            content: '';
            position: absolute;
            left: ${(currentLevel - 1) * 8}px;
            top: calc(50% - 2px);
            display: inline-block;
            width: ${width}px;
            height: 4px;
            border-radius: 2rem;
            background-color: ${isDarkMode ? '#373737' : '#e5e5e5'};
            transition: all 0.45s;
            margin-inline: -2.4rem 0;
          }
        }
      }
    `
  })

  return {
    card: css`
      ${stylish.card}
      margin-block-start: 2rem;
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
          position: relative;
          font-size: 0.9rem;
          font-family: SF Mono Medium;
          padding-inline: 1.6rem 0;

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

          .${prefixCls}-anchor-link-title {
            overflow: visible;
            color: ${token.colorTextSecondary};
            letter-spacing: 0.5px;
            color: transparent;

            &:hover {
              color: ${token.colorPrimaryHover};

              &::before {
                transform: scale(1.1);
                background-color: ${token.colorPrimaryBorderHover};
              }
            }
          }

          .${prefixCls}-anchor-link:has(.${prefixCls}-anchor-link-active),
          .${prefixCls}-anchor-link-active {
            > .${prefixCls}-anchor-link-title {
              color: ${token.colorPrimary};

              &::before {
                content: '';
                background-color: ${token.colorPrimaryBorderHover};
                transform: scale(1.08);
              }
            }
          }
        }
      `
    ),

    tag: cx(
      `.${prefixCls}-sidebar-tag`,
      css`
        &.${prefixCls}-tag {
          padding-block: 0.15rem;
          padding-inline: 0.7rem;
          border-radius: 2rem;
        }
      `
    ),

    recents: cx(
      `.${prefixCls}-sidebar-recents`,
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
