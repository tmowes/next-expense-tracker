import { shade, tint } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme: { colors, radii } }) => css`
    background: ${colors.orange};
    color: ${colors.background};
    border-radius: ${radii.default};
    font-size: 2rem;
    font-weight: 500;
    height: 5.6rem;
    padding: 1.6rem 2rem;
    width: 100%;
    margin: 1.6rem 0;
    transition: 180ms ease-in-out;
    :hover {
      background: ${tint(0.16, colors.orange)};
    }
    :active {
      background: ${shade(0.16, colors.orange)};
    }
  `}
`
