import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  container: css`
    ${stylish.container}

    display: grid;
    grid-template-columns: auto 260px;
    gap: 4rem;

    .content {
      & > pre:last-child {
        margin-block-end: 0px;
        > div {
          margin-block-end: 0px;
        }
      }
    }

    ${r({
      tablet: css`
        display: block;

        .content {
          margin-block-end: 2rem;
        }
      `,
    })}
  `,

  spacerLine: css`
    width: 100%;
    border-block-end: 1px dashed ${token.colorBorder};
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
          font-size: 23px;
        `,
        mobile: css`
          font-size: 22px;
        `,
      })}
    }
  `),

  main: css`
    padding-block-end: 5rem;
  `,

  card: css`
    ${stylish.card}
  `,
}))
