import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  container: css`
    ${stylish.container}

    display: grid;
    grid-template-columns: auto 260px;
    gap: 4rem;

    ${r({
      tablet: css`
        display: block;
      `,
    })}
  `,

  spacerLine: css`
    width: 100%;
    border-bottom: 1px dashed ${token.colorBorder};
    margin: 0 0 3.2rem;
  `,

  title: cx(css`
    &.${prefixCls}-typography {
      padding: 5.6rem 0 4rem;
      margin: 0;
      font-weight: bold;
      font-family: ${token.fontFamilyCode};

      ${r({
        tablet: css`
          padding: 3.5rem 0 3rem;
          font-size: 22px;
        `,
        mobile: css`
          font-size: 20px;
        `,
      })}
    }
  `),

  main: css`
    padding-bottom: 5rem;
  `,

  card: css`
    ${stylish.sideCard}
  `,
}))
