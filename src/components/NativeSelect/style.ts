import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, cx, token }, prefixCls: string) => ({
  container: cx(
    prefixCls,
    css`
      background: ${token.colorBgElevated};
      font-size: ${token.fontSize};
      box-shadow: ${token.boxShadowSecondary};
      border-radius: 8px;
      box-sizing: border-box;
      overflow-y: auto;
      overscroll-behavior: contain;
      scrollbar-width: none;
      padding: 5px;
      outline: 0;
      user-select: none;
      width: 110px;

      &::-webkit-scrollbar {
        display: none;
      }
    `
  ),
  button: cx(
    `${prefixCls}-button`,
    css`
      all: unset;
      font-size: ${token.fontSize}px;
      padding: 8px;
      line-height: 0;
      color: ${token.colorTextSecondary};
      border-radius: ${token.borderRadius}px;
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 0.6;
      }
    `
  ),

  active: css`
    opacity: 0.6;
  `,

  option: css`
    display: flex;
    align-items: center;
    gap: 12;
  `,
}))
