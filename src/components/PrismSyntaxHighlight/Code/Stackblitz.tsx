import { Button, Tooltip } from 'antd'
import stackblitzSdk from '@stackblitz/sdk'
import StackblitzSvg from '@/assets/svg/stackblitz.svg'
import { useStyles } from './style'

interface StackblitzProps {
  title: string
  code: string
}

const Stackblitz: React.FC<StackblitzProps> = ({ title, code }) => {
  const { styles } = useStyles()

  const handleStackblitz = () => {
    stackblitzSdk.openProject(
      {
        title: title || 'index.js',
        description: '',
        template: 'javascript',
        files: {
          'index.html': `<div id="app"></div>`,
          'index.js': code,
        },
        settings: {
          compile: {
            trigger: 'auto',
            clearConsole: false,
          },
        },
      },
      {
        newWindow: true,
        showSidebar: false,
        devToolsHeight: 50,
      }
    )
  }

  return (
    <Tooltip title="在 Stackblitz 中打开">
      <Button className={styles.stackblitz} size="small" type="link" onClick={handleStackblitz}>
        <StackblitzSvg />
      </Button>
    </Tooltip>
  )
}

export default Stackblitz
