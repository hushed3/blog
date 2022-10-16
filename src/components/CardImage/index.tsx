import React, { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { isBrowser } from '../../utils/func'

import { ImageContainer, ImageContent } from './style'

import _ from 'lodash'

interface Props {
  row: ImageItem
  onHandleClick: (row?: ImageItem) => void
}

/**
 * @description 3D交互卡片
 */

const CardImage = ({ row, onHandleClick }: Props) => {
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = _.throttle((event) => {
    if (isBrowser() && window.screen.width < 480) return
    const card: HTMLDivElement = imageRef.current!
    /* x为鼠标距离页面左侧距离减去底层盒子距离页面左侧距离*/
    const x = event.pageX - card.offsetLeft
    /* left为底层盒子宽度的一半*/
    const left = card.offsetWidth / 2
    /* rotateY 为卡片绕Y轴旋转的大小，旋转度看自己，我除以5，也可以大点或小点 */
    const rotateY = -(left - x) / 6
    /* y为鼠标距离页面顶侧距离减去底层盒子距离页面顶侧距离*/
    const y = event.pageY - card.offsetTop
    /* top为底层盒子高度的一半*/
    const top = card.offsetHeight / 2
    /* rotateX 为卡片绕X轴旋转的大小，旋转度看自己，我除以5，也可以大点或小点 */
    const rotateX = (top - y) / 4
    /*为卡片添加transform属性 */
    card.style.cssText = `transform: perspective(50rem) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1);`
  }, 16)

  const handleMouseOut = _.debounce(() => {
    if (isBrowser() && window.screen.width < 480) return
    const card: HTMLDivElement = imageRef.current!
    /* 让卡片的transform属性的绕X，Y轴的rotate都是0deg*/
    card.style.cssText = `transform: perspective(50rem) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);`
  }, 20)

  return (
    <>
      <ImageContainer ref={imageRef} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
        <ImageContent layoutId={`preview-${row.id}`}>
          <LazyLoadImage src={row.url} onClick={() => onHandleClick(row)} alt="" />
        </ImageContent>
      </ImageContainer>
    </>
  )
}

export default CardImage
