import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r }) => ({
  heading: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0;
    padding: 0;
    margin-bottom: 2rem;
  `,

  title: css`
    font-weight: 700;
    letter-spacing: -0.03rem;
    font-size: 1.4rem;
    margin: 0;

    ${r({
      laptop: css`
        font-size: 1.15rem;
      `,
    })}
  `,

  link: css`
    ${stylish.tagLink}

    font-size: 0.8rem;
  `,
}))
