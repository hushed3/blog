import { useSpring } from '@react-spring/web'
import React, { useRef, useState } from 'react'
import { ImageItem } from '../../typings/pages'
import { AnimatedWrapper, Image, ImageWrapper, LazyLoadWrapper } from './style'

interface Props {
  move: boolean
  row: ImageItem
  onClick: (row?: ImageItem) => void
}

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.22,
]
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

/**
 * @description 3D交互卡片
 */
const CardImage = ({ move, row, onClick }: Props) => {
  const imgRef = useRef<HTMLDivElement>(null)
  const [xys, set] = useState([0, 0, 1])
  const props = useSpring({ xys, config: { tension: 180, friction: 12 } })

  const [show, setShow] = useState(false)

  const mouseMove = (e: any) => {
    if (!move) return
    const rect = imgRef.current?.getBoundingClientRect() as any
    set(calc(e.clientX, e.clientY, rect))
  }

  const mouseLeave = () => {
    set([0, 0, 1])
  }

  return (
    <>
      <AnimatedWrapper
        ref={imgRef}
        // eslint-disable-next-line react/prop-types
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={mouseLeave}
        onMouseMove={mouseMove}
        onClick={() => onClick(row)}
      >
        <ImageWrapper layoutId={`preview-${row.id}`}>
          <LazyLoadWrapper style={{ height: '100%', opacity: show ? 1 : 0 }}>
            <Image
              src={row.url}
              onLoad={() => {
                setTimeout(() => {
                  setShow(true)
                }, Math.floor(Math.random() * (200 - 1 + 1)) + 1)
              }}
            ></Image>
          </LazyLoadWrapper>
        </ImageWrapper>
      </AnimatedWrapper>
    </>
  )
}

export default CardImage
