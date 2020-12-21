import { FiAlertCircle } from 'react-icons/fi'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    span {
      width: 160px;
      background: ${colors.orange};
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      opacity: 0;
      transition: opacity 0.4s;
      visibility: hidden;
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      color: ${colors.inputs};
      &::before {
        content: '';
        border-style: solid;
        border-color: ${colors.orange} ${colors.transparent};
        border-width: 6px 6px 0 6px;
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &:hover span {
      opacity: 1;
      visibility: visible;
    }
  `}
`
export const ErrorIcon = styled(FiAlertCircle)`
  color: ${({ theme }) => theme.colors.error};
`
