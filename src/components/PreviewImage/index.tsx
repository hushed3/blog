import React from 'react'
import ReactDOM from 'react-dom'
import { ImageContainer, Mask, PreviewContent, PreviewImg } from './style'

interface Props {
  id: number
  name: string
  url: string
  onHandleClick: (row?: ImageItem) => void
}

/**
 * @description 图片预览
 */
const PreviewImage = ({ id, name, url, onHandleClick }: Props) => {
  return ReactDOM.createPortal(
    <>
      <ImageContainer>
        <PreviewContent layoutId={`preview-${id}`}>
          <PreviewImg src={url} alt="" onClick={() => onHandleClick()} />
        </PreviewContent>
      </ImageContainer>
      <Mask
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        onClick={() => onHandleClick()}
      ></Mask>
    </>,
    document.body
  )
}

export default PreviewImage
