import { useStyles } from './style'

interface AProps {
  children: string | React.ReactNode
}

const A: React.FC<AProps> = (props) => {
  const { styles } = useStyles()

  return <a {...props} className={styles.a} target="_blank"></a>
}

export default A
