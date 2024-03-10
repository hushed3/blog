import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token }, prefixCls) => ({
  item: cx(
    `${prefixCls}-item`,

    css`
      display: block;
      all: unset;
      width: 100%;
      padding: 10px 8px;
      border-radius: 5px;
      box-sizing: inherit;
      user-select: none;
      line-height: 1;
      scroll-margin: 50px;
      cursor: pointer;

      rap: 1rem;

      font-weight: normal;
      font-family: ${token.fontFamily};
      color: ${token.colorText};
      background: transparent;
      transition: all ${token.motionDurationMid};

      &:hover {
        background: ${token.colorFillTertiary};
      }
    `
  ),
  selected: cx(
    `${prefixCls}-item-selected`,
    css`
      color: ${token.colorPrimaryText};
      background: ${token.colorPrimaryBg};
      font-weight: bold;
      &:hover {
        color: ${token.colorPrimaryTextHover};
        background: ${token.colorPrimaryBg};
      }
    `
  ),
  active: cx(
    `${prefixCls}-item-active`,
    css`
      background: ${token.colorFillTertiary};
    `
  ),
}))
