import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, token }, prefixCls: string) => ({
  footer: cx(
    css`
      display: flex;
      flex-wrap: wrap;
      align-content: space-evenly;
      height: ${token.footerHeight}px;
      padding: 1.5rem 0;

      ${r({
        mobile: css`
          height: ${token.footerHeightLaptop}px;
          padding: 0.8rem 0;
        `,
      })}
    `
  ),

  footerContainer: css`
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${token.colorTextTertiary};
    gap: 0.5rem;
  `,

  item: css`
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
    color: inherit;
    font-size: 0.85rem;
    line-height: 1.2;
    padding: 0 0.5rem;

    &:hover {
      text-decoration: underline;
      color: ${token.colorTextSecondary};
    }
  `,

  image: css`
    display: inline-block;
    max-height: 20px;
    width: auto;
  `,
}))
