import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, isDarkMode, prefixCls: prefix }) => {
  return {
    // code
    code: cx(
      `${prefix}-code`,
      css`
        color: ${token.colorPrimary};
        font-size: 0.95rem;
        background-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.03)'};
        padding-block: 0.2rem;
        padding-inline: 0.42rem;
        border-radius: ${token.borderRadiusOuter}px;
        margin-inline: 0.3rem;
        font-family: ${token.fontFamilyCode};
      `
    ),
  }
})
