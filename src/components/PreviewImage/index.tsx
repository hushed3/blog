import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { useStyles } from './style'

interface PreviewImageProps {
  id: number
  name: string
  url: string
  onClick: (row?: ImageItem) => void
}

/**
 * @description 图片预览
 */

const PreviewImage: React.FC<PreviewImageProps> = ({ id, name, url, onClick }) => {
  const { styles } = useStyles()

  return ReactDOM.createPortal(
    <>
      <div className={styles.container}>
        <motion.div className={styles.motion} layoutId={`preview-${id}`}>
          <img className={styles.image} src={url} alt="" onClick={() => onClick()} />
        </motion.div>
      </div>
      <motion.div
        className={styles.mask}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        onClick={() => onClick()}
      ></motion.div>
    </>,
    document.body
  )
}

export default PreviewImage
