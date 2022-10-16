import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const PreviewContent = styled(motion.div)`
  pointer-events: auto;
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  overflow: hidden;
  aspect-ratio: 16/10;
  width: 55%;
  margin: 0 auto;
  z-index: 100;

  @media screen and (max-width: 1000px) {
    width: 70% !important;
  }
  @media screen and (max-width: 480px) {
    width: 85% !important;
  }
`

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
`

export const Mask = styled(motion.div)``