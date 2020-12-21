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

export const Content = styled.div`
  display: flex;
`

export const Nav = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 8vh;
    position: absolute;
    top: 0;
    width: 100vw;
    color: ${colors.orange};
    background-color: ${colors.black};
  `}
`
