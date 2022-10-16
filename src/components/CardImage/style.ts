import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ImageContainer = styled.div`
  aspect-ratio: 16/10;
  cursor: pointer;
  transition: all 0.1s;
  transform-style: preserve-3d;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`

export const ImageContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 12px 0 ${(props) => props.theme.shadowColor};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    border-radius: 2px !important;
  }
  @media screen and (max-width: 480px) {
    border-radius: 1px !important;
  }
`
