import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token }, prefixCls: string) => {
  return {
    menuBar: cx(prefixCls, css``),

    title: cx(
      `${prefixCls}-title`,
      css`
        color: ${token.colorText};
        font-size: 0.98rem;
        margin: 0 0 1rem !important;
        font-weight: 700;
      `
    ),

    item: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 1.5rem;
      text-decoration: none;
      background-color: transparent;
      border-radius: ${token.borderRadius};
      color: ${token.colorTextSecondary};
      font-size: 0.85rem;
      margin-bottom: 0.6rem;
      font-weight: 500;

      .title {
        display: flex;
        align-items: center;
        padding-left: 0.4rem;
      }

      .extra {
        float: right;
      }

      &:last-child {
        margin-bottom: 0rem;
      }

      &.active {
        color: ${token.colorPrimary};
        font-weight: bold;
      }
    `,

    hover: css`
      &:hover {
        color: ${token.colorPrimary};
        text-decoration: none;
      }
    `,

    inkVisible: css`
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      margin-left: 0.45rem;
      margin-right: 0.85rem;
      background-color: ${token.colorPrimaryHover};
      opacity: 0.8;
    `,

    tag: css`
      font-size: 0.85rem;
      color: ${token.colorTextSecondary};
      background-color: ${token.colorFillTertiary};
      text-transform: capitalize;
      margin-right: 0.5rem;

      &.site-tag-checkable-checked {
        color: ${token.colorPrimary};
        background-color: ${token.colorPrimaryBg};
      }

      &:hover {
        color: ${token.colorPrimary};
        background-color: ${token.colorPrimaryBg}!important;
      }
    `,
  }
})
