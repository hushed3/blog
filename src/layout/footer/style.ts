import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, token, prefixCls }) => ({
  footer: cx(
    `${prefixCls}-layout-footer`,
    css`
      display: flex;
      flex-wrap: wrap;
      align-content: space-evenly;
      height: ${token.footerHeight}px;
      padding: 1.5rem 0;

      ${r({
        mobile: css`
          height: ${token.footerHeightMobile}px;
          padding: 0.8rem 0;
        `,
      })}
    `
  ),

  footerContainer: css`
    justify-content: center;
    color: ${token.colorTextTertiary};
    width: 100%;
  `,

  text: css`
    display: flex;
    align-items: center;
    color: inherit;
    font-size: 0.85rem;
    line-height: 1.2;
    padding: 0 0.5rem;
  `,

  href: css`
    display: flex;
    align-items: center;
    color: inherit !important;
    font-size: 0.85rem;
    line-height: 1.2;
    padding: 0 0.5rem;

    .image {
      display: inline-block;
      max-height: 20px;
      width: auto;
      margin: 0.5rem;
    }

    &:hover {
      text-decoration: underline;
      color: ${token.colorText} !important;
    }
  `,
}))
