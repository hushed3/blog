import { Languages } from '@/utils/code'
import { useStyles } from './style'
import Copy from './Copy'
import Stackblitz from './Stackblitz'
import CodeSandbox from './CodeSandbox'

interface TitleProps {
  title: string
  codeString: string
  language: Languages
  highlightRef: React.RefObject<HTMLPreElement>
}

const Title: React.FC<TitleProps> = ({ title, codeString, language, highlightRef }) => {
  const { styles, cx } = useStyles('syntax-preHighlight')

  return (
    <div className={styles.TitleBox}>
      <div className={styles.titleStyle}>{title}</div>

      <div className={styles.language}>
        <Stackblitz title={title} code={codeString} />
        <CodeSandbox title={title} code={codeString} />
        {language}
      </div>

      <Copy code={codeString} highlightRef={highlightRef} />
    </div>
  )
}

export default Title
