import React from 'react'
import ReactDOM from 'react-dom'
import { ImageItem } from '../../typings/pages'
import { ImageContainer, Mask, PreviewContent, PreviewImg } from './style'

interface Props {
  id: number
  name: string
  url: string
  onClick: (row?: ImageItem) => void
}

/**
 * @description 图片预览
 */
const PreviewImage = ({ id, name, url, onClick }: Props) => {
  return ReactDOM.createPortal(
    <>
      <ImageContainer>
        <PreviewContent layoutId={`preview-${id}`}>
          <PreviewImg src={url} alt="" onClick={() => onClick()} />
        </PreviewContent>
      </ImageContainer>
      <Mask
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        onClick={() => onClick()}
      ></Mask>
    </>,
    document.body
  )
}

export default PreviewImage
