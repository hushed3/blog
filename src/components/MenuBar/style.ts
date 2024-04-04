import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, prefixCls }) => {
  const menuBarItem = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 1.6rem;
    text-decoration: none;
    border-radius: ${token.borderRadius};
    color: ${token.colorTextSecondary};
    font-size: 0.85rem;
    font-weight: 500;
    margin-block-end: 0.7rem;

    .inkVisible {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      margin-inline-start: 0.45rem;
      margin-inline-end: 0.85rem;
      background-color: ${token.colorPrimaryHover};
      opacity: 0.8;
    }
  `

  return {
    menuBar: cx(
      `${prefixCls}-menuBar`,
      css`
        div:last-child {
          margin-block-end: 0rem;
        }
      `
    ),

    item: cx(menuBarItem),

    title: cx(
      `${prefixCls}-menuBar-title`,
      css`
        color: ${token.colorText};
        font-size: 0.98rem;
        font-weight: 700;
        margin-block-end: 0.7rem;
      `
    ),

    hover: css`
      &:hover {
        color: ${token.colorPrimaryTextHover};
        text-decoration: none;
      }
    `,

    textGroup: cx(
      `${prefixCls}-menuBar-text-group`,
      css`
        display: block;
        margin-block-end: 1rem;
      `
    ),

    text: cx(
      `${prefixCls}-menuBar-text`,
      menuBarItem,
      css`
        display: flex;
        align-items: center;
      `
    ),

    linkGroup: cx(
      `${prefixCls}-menuBar-link-group`,
      css`
        display: block;
        margin-block-end: 1rem;
      `
    ),

    link: cx(
      `${prefixCls}-menuBar-link`,
      menuBarItem,
      css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        &.active {
          color: ${token.colorPrimary} !important;
        }
      `
    ),

    tagGroup: cx(
      `${prefixCls}-menuBar-tag-group`,
      css`
        display: flex;
        flex-wrap: wrap;
        padding-inline-start: 0.4rem;
        gap: 0.5rem 0.8rem;
        margin-block-end: 1rem;
      `
    ),

    tag: cx(
      `${prefixCls}-menuBar-tag`,
      css`
        font-size: 0.85rem;
        color: ${token.colorTextSecondary};
        background-color: ${token.colorFillTertiary};
        text-transform: capitalize;
        margin-block-end: 0;

        &:hover {
          color: ${token.colorPrimaryTextHover}!important;
          background-color: ${token.colorPrimaryBg}!important;
        }

        &.site-tag-checkable-checked {
          color: ${token.colorPrimary} !important;
          background-color: ${token.colorPrimaryBg};
        }
      `
    ),
  }
})
