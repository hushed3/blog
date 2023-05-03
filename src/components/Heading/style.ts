import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r }) => ({
  heading: css`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0;
    padding: 0;
  `,

  title: css`
    margin-bottom: 0.75rem;
    font-weight: 700;
    letter-spacing: -0.03rem;
    font-size: 1.4rem;

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
