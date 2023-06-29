import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, token }, prefixCls: string) => ({
  header: cx(
    css`
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 3;
      height: ${token.headerHeight}px;
      box-shadow: ${token.boxShadowTertiary};
      backdrop-filter: saturate(50%) blur(4px);
      background-size: 3px 3px;
      background-image: radial-gradient(transparent 1px, ${token.colorBgLayout} 1px);

      ${r({
        mobile: css`
          height: ${token.headerHeightLaptop}px;
        `,
      })}
    `
  ),
  headerContainer: css`
    ${stylish.container}

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    color: ${token.colorTextSecondary};
  `,

  navigations: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    ${r({
      laptop: css`
        gap: 0.25rem;
      `,
    })}
  `,

  navigationLink: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: inherit;
    padding: 0;
    border: none;
    border-radius: 0;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    margin: 0 0.4rem;

    &:hover {
      color: ${token.colorText};
    }

    .label {
      display: block;
    }
    .icon {
      display: none;
      font-size: 1rem;
    }

    .logo {
      line-height: 1.2;
      font-size: 1.4rem;
      font-weight: normal;
      color: transparent;
      background: ${token.gradientLogo};
      background-clip: text;
    }

    ${r({
      laptop: css`
        margin: 0 0.6rem;
        .label {
          display: none;
        }
        .icon {
          display: block;
        }
      `,
    })}
  `,
}))
