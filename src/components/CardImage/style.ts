import { animated } from '@react-spring/web'
import { motion } from 'framer-motion'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

export const AnimatedWrapper = styled(animated.div)`
  aspect-ratio: 16/10;
  transition: box-shadow 0.5s;
  will-change: transform;
  will-change: width, height;
`

export const ImageContent = styled(motion.div)`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1000px) {
    border-radius: 2px !important;
  }
  @media screen and (max-width: 480px) {
    border-radius: 1px !important;
  }
`

export const LazyLoadWrapper = styled(LazyLoad)`
  height: 100%;
`

export const Image = styled.img`
  object-fit: cover;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 ${(props) => props.theme.cardShadow};
  border-radius: ${(props) => props.theme.borderRadius};

  @media screen and (max-width: 1000px) {
    border-radius: 2px !important;
  }
  @media screen and (max-width: 480px) {
    border-radius: 1px !important;
  }
`
