import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  container: css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  `,

  motion: css`
    pointer-events: auto;
    position: relative;
    border-radius: ${token.borderRadius};
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    overflow: hidden;
    aspect-ratio: 16/10;
    width: 85%;
    margin: 0 auto;
    z-index: 100;

    ${r({
      laptop: css`
        width: 70% !important;
      `,
      mobile: css`
        width: 55% !important;
      `,
    })}
  `,

  image: css`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `,

  mask: css`
    z-index: 10;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    will-change: opacity;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
  `,
}))
