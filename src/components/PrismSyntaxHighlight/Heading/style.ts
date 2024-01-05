import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => {
  return {
    levelStyle: cx(
      `${prefixCls}-level`,
      css`
        &.h2 {
          margin-block: 4rem 3rem;
        }
        &.h3 {
          margin-block: 3rem 2rem;
        }
        &.h4 {
          margin-block: 1.7rem 1.4rem;
        }
        &.h5 {
          margin-block-end: 1rem;
        }
      `
    ),

    heading: css`
      &.${prefixCls}-typography {
        position: relative;
        color: ${token.colorText};
        font-family: ${token.fontFamilyCode};

        ${r({
          tablet: css`
            font-size: 18.5px;
          `,
          mobile: css`
            font-size: 17px;
          `,
        })}
      }

      &:hover {
        a {
          opacity: 1;
        }
      }
    `,
    link: css`
      position: absolute;
      top: 0;
      left: 0;
      scroll-margin-top: 90px;

      transform: translateX(-100%) translateY(3%);
      padding-right: 4px;
      opacity: 0;
      height: 100%;
    `,
  }
})
