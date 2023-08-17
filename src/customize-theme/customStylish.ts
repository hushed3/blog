import { GetCustomStylish } from 'antd-style'

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomStylish extends SiteStylish {}
}

export interface SiteStylish {
  container: string
  wrapper: string
  tagLink: string
}

export const getCustomStylish: GetCustomStylish<SiteStylish> = ({ css, token, isDarkMode }) => {
  return {
    container: css`
      max-width: ${token.contentMaxWidth}px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 1rem;

      @media screen and (max-width: ${token.screenMD}px) {
        padding: 0 1.3rem;
      }
    `,

    wrapper: css`
      margin-top: 1.6rem;
      margin-bottom: 3rem;

      @media screen and (max-width: ${token.screenMD}) {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
    `,

    tagLink: css`
      min-height: 24px;
      line-height: 1.75;
      font-size: 0.75rem;
      font-weight: 400;
      padding: 0.1rem 0.6rem;
      border: 1px solid ${token.colorBorderSecondary};
      border-radius: ${token.borderRadiusSM}px;
      color: ${token.colorText};

      text-decoration: none;
      text-transform: capitalize;
      display: inline-block;
      text-align: center;

      &.active {
        color: ${token.colorPrimary};
        border-color: ${token.colorPrimaryBgHover};
        background-color: ${token.colorPrimaryBg};
      }

      &:hover {
        color: ${token.colorPrimary};
        border-color: ${token.colorPrimaryBgHover};
        background-color: ${token.colorPrimaryBg};
      }
    `,
  }
}
