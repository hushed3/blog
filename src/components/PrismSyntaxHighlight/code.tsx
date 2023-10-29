/* eslint react/destructuring-assignment: 0 */
import { useThemeMode } from '@/hooks'
import { GetLanguageInput, Language, calculateLinesToHighlight, languageOverride } from '@/utils/code'
import { Highlight, themes } from 'prism-react-renderer'
import { Copy } from './copy'

import { useStyles } from './code.style'

type CodeProps = {
  codeString: string
  language: Language
  className: GetLanguageInput
  highlight?: string
}

export const Code = ({
  codeString,
  language: originalLanguage = 'javascript',
  className,
  highlight = '',
}: CodeProps) => {
  const { styles, cx } = useStyles('syntax-highlight')
  const { isDarkMode } = useThemeMode()

  const language = languageOverride(originalLanguage)

  const shouldHighlightLine = calculateLinesToHighlight(highlight)

  return (
    <Highlight code={codeString} language={language} theme={isDarkMode ? themes.oneDark : themes.oneLight}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div className={styles.syntaxHighlight}>
          <div className={styles.syntaxHighlightHeader}>
            <div className={styles.titleStyle}></div>
            <span className={styles.languageStyle} data-language={language}>
              {language}
            </span>
            <Copy content={codeString} />
          </div>
          <pre className={styles.syntaxHighlightPre}>
            <code className={styles.syntaxHighlightPreCode}>
              <div className={styles.codeLineNumbers}>
                {tokens.map((line, i) => {
                  return (
                    <span
                      key={`number-${i}`}
                      className={cx('number', shouldHighlightLine(i) && styles.highlightCodeLine)}
                    >
                      {i + 1}
                    </span>
                  )
                })}
              </div>
              <div className={styles.codeLines}>
                {tokens.map((line, i) => (
                  <div
                    key={`line-${i}`}
                    {...getLineProps({ line })}
                    className={cx('line', shouldHighlightLine(i) && styles.highlightCodeLine)}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  )
}
