import Link from 'next/link'
import { shade, tint } from 'polished'
import styled, { css } from 'styled-components'
import { CustomLinkVariantProps } from './types'

const variants = {
  white: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.transparent};
      :hover {
        color: ${tint(0.16, colors.white)};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
  default: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.orange};
      background: ${colors.transparent};
      :hover {
        color: ${tint(0.16, colors.orange)};
      }
      :active {
        color: ${shade(0.16, colors.orange)};
      }
    `}
  `,
}

export const Container = styled(Link)``

export const Content = styled.div<CustomLinkVariantProps>`
  ${({ variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 180ms ease-in-out;
    ${variant && variants[variant]};
  `}
`

export const Label = styled.span`
  margin-left: 0.8rem;
  :hover,
  :active {
    text-decoration: underline;
  }
`
