import styled from '@emotion/styled'
import { animated } from '@react-spring/web'
import { motion } from 'framer-motion'
import LazyLoad from 'react-lazyload'

export const AnimatedWrapper = styled(animated.div)`
  aspect-ratio: 16/10;
  transition: box-shadow 0.5s;
  will-change: transform;
  will-change: width, height;
`

export const ImageContent = styled(motion.div)`
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${(props) => props.theme.contentWidth}) {
    border-radius: ${(props) => props.theme.borderRadiusSmall} !important;
  }
  @media screen and (max-width: ${(props) => props.theme.contentWidthSmall}) {
    border-radius: ${(props) => props.theme.borderRadiusMini} !important;
  }
`

export const LazyLoadWrapper = styled(LazyLoad)`
  height: 100%;
  transition: opacity 0.5s ease-in-out;
`

export const Image = styled.img`
  object-fit: cover;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadiusMedium};
  box-shadow: 0 0 10px 0 ${(props) => props.theme.cardShadow};
  border-radius: ${(props) => props.theme.borderRadiusLarge};

  @media screen and (max-width: ${(props) => props.theme.contentWidth}) {
    border-radius: ${(props) => props.theme.borderRadiusSmall} !important;
  }
  @media screen and (max-width: ${(props) => props.theme.contentWidthSmall}) {
    border-radius: ${(props) => props.theme.borderRadiusMini} !important;
  }
`
