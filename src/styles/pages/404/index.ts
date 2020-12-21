import styled, { css } from 'styled-components'

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

export const Title = styled.h1`
  text-align: center;
`
