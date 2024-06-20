import { Button, Tooltip } from 'antd'
import { getParameters } from 'codesandbox/lib/api/define'
import { CodeSandboxOutlined } from '@ant-design/icons'
import { useStyles } from './style'

interface CodeSandboxProps {
  title: string
  code: string
}

const CodeSandbox: React.FC<CodeSandboxProps> = ({ title, code }) => {
  const { styles } = useStyles()

  const handleCodeSandbox = async () => {
    try {
      const parameters = getParameters({
        files: {
          'index.js': {
            content: code,
            isBinary: false,
          },
          'package.json': {
            content: JSON.stringify({ dependencies: {} }),
            isBinary: false,
          },
        },
      })

      const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&utm_medium=sandpack`

      window.open(url, '_blank')
    } catch (error) {
      console.error('Error creating sandbox:', error)
    }
  }

  return (
    <>
      <Tooltip title="在 CodeSandbox 中打开">
        <Button className={styles.stackblitz} size="small" type="link" onClick={handleCodeSandbox}>
          <CodeSandboxOutlined style={{ fontSize: '1.1em' }} />
        </Button>
      </Tooltip>
    </>
  )
}

export default CodeSandbox
