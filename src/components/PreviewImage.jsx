import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'

/**
 * @description 图片预览
 */
const PreviewImage = ({ id, name, url, onHandleClick }) => {
  return ReactDOM.createPortal(
    <>
      <div className="previewImage">
        <motion.div className="previewImage-content" layoutId={`preview-${id}`}>
          <img className="previewImage-image" src={url} alt="" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
        onClick={() => onHandleClick()}
      ></motion.div>
    </>,
    document.body
  )
}

export default PreviewImage
