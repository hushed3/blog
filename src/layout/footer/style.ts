import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, token }, prefixCls: string) => ({
  footer: cx(
    css`
      padding: 3rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
    `
  ),

  headerContainer: css`
    display: flex;
    color: ${token.colorTextTertiary};
    gap: 0.25rem;
    margin: 0 1rem;
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
