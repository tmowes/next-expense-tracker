import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  height: 10rem;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border-radius: 0.75rem;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    border-color: orangered;
  }
`

export const AnimatedImg = styled(motion.img)`
  height: 100%;
  width: 100%;
`
