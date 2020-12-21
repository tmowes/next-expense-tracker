import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    color: ${colors.orange};
    background-color: ${colors.container};
  `}
`

export const Title = styled.h1``

export const AnimatedImg = styled(motion.img)`
  height: 40%;
  width: 40%;
`
export const BackButton = styled.a``
