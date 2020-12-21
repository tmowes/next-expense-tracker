import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

export interface InputContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  containerStyle?: Record<string, unknown>
  icon?: React.ComponentType<IconBaseProps>
}
