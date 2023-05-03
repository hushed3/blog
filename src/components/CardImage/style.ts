import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, token, responsive: r }) => ({
  animated: css`
    aspect-ratio: 16/10;
    transition: box-shadow 0.5s;
    will-change: transform;
    will-change: width, height;
  `,

  motion: css`
    width: 100%;
    height: 100%;

    ${r({
      laptop: css`
        border-radius: ${token.borderRadiusSM}px;
      `,
      mobile: css`
        border-radius: ${token.borderRadiusXS}px;
      `,
    })}
  `,

  LazyLoad: css`
    height: 100%;
    transition: opacity 0.5s ease-in-out;
  `,

  image: css`
    object-fit: cover;
    z-index: 10;
    width: 100%;
    height: 100%;
    border-radius: ${token.borderRadius};
    box-shadow: 0 0 10px 0 ${token.boxShadowSecondary};

    ${r({
      laptop: css`
        border-radius: ${token.borderRadiusSM}px;
      `,
      mobile: css`
        border-radius: ${token.borderRadiusXS}px;
      `,
    })}
  `,
}))
