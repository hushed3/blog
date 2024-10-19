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

  title: cx(css`
    &.${prefixCls}-typography {
      padding-block-start: 7rem;
      padding-block-end: 2rem;
      margin: 0;
      font-weight: bold;
      font-family: ${token.fontFamilyCode};

      ${r({
        tablet: css`
          padding-block-start: 5rem;
          padding-block-end: 2rem;
          font-size: 23px;
        `,
        mobile: css`
          font-size: 22px;
        `,
      })}
    }
  `),

  information: cx(css`
    width: 100%;
    border-block-end: 1px dashed ${token.colorBorder};
    padding-block-end: 3.2rem;
    margin-block-end: 3.2rem;

    .times {
      width: 100%;
      padding-block-end: 1.5rem;
      color: ${token.colorTextDescription};
    }

    .${prefixCls}-tag {
      color: ${token.colorPrimary};
      background-color: ${token.colorPrimaryBg};
      padding-block: 0.1rem;
      padding-inline: 0.7rem;
      border-radius: 2rem;
      font-weight: 500;
      cursor: pointer;
    }
  `),

  main: css`
    padding-block-end: 5rem;
  `,
}))
