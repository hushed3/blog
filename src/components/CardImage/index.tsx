import { useSpring } from '@react-spring/web'
import React, { useRef, useState } from 'react'
import { useStyles } from './style'
import { animated } from '@react-spring/web'
import { motion } from 'framer-motion'

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.22,
]
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

interface CardImageProps {
  move: boolean
  row: ImageItem
  onClick: (row?: ImageItem) => void
}

/**
 * @description 3D交互卡片
 */

const CardImage: React.FC<CardImageProps> = ({ move, row, onClick }) => {
  const { styles } = useStyles()
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
      <animated.div
        className={styles.animated}
        ref={imgRef}
        // eslint-disable-next-line react/prop-types
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={mouseLeave}
        onMouseMove={mouseMove}
        onClick={() => onClick(row)}
      >
        <motion.div className={styles.motion} layoutId={`preview-${row.id}`}>
          <div className={styles.LazyLoad} style={{ height: '100%', opacity: show ? 1 : 0 }}>
            <img
              className={styles.image}
              src={row.url}
              onLoad={() => {
                setTimeout(() => {
                  setShow(true)
                }, Math.floor(Math.random() * (200 - 1 + 1)) + 1)
              }}
            ></img>
          </div>
        </motion.div>
      </animated.div>
    </>
  )
}

export default CardImage
