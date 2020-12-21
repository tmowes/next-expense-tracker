import styled, { css } from 'styled-components'
import Tooltip from './Tooltip'
import { InputContainerProps } from './types'

export const Container = styled.div<InputContainerProps>`
  ${({ isErrored, isFocused, isFilled, theme: { colors, radii } }) => css`
    display: flex;
    align-items: center;
    background: ${colors.inputs};
    border-radius: ${radii.default};
    padding: 1.6rem;
    width: 100%;
    border: 2px solid ${colors.inputs};
    color: ${colors.grayHard};
    & + div {
      margin-top: 0.8rem;
    }
    ${isErrored &&
    css`
      border-color: ${colors.error};
    `}
    ${isFocused &&
    css`
      color: ${colors.orange};
      border-color: ${colors.orange};
    `}
    ${isFilled &&
    css`
      color: ${colors.orange};
    `}
    input {
      flex: 1;
      color: ${colors.white};
      background: ${colors.transparent};
      border: 0;
      transition: background-color 0.2s;
      transition-delay: 9999s;
      &::placeholder {
        color: ${colors.grayHard};
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-transition: color 9999s ease-out,
          background-color 9999s ease-out;
        -webkit-transition-delay: 9999s;
      }
    }
    svg {
      margin-right: 16px;
    }
  `}
`

export const Error = styled(Tooltip)`
  ${({ theme: { colors } }) => css`
    height: 20px;
    margin-left: 16px;
    svg {
      margin: 0;
    }
    span {
      background: ${colors.error};
      color: ${colors.white};
      &::before {
        border-color: ${colors.error}; transparent;
      }
    }
  `}
`
