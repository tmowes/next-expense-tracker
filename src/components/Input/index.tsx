import { useCallback, useState } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'
import * as S from './_styles'
import { InputProps } from './types'

const Input = ({
  name,
  containerStyle = {},
  icon: Icon,
  required,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { register, errors, getValues } = useFormContext()
  const error = errors[name] as FieldError

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!getValues(name))
  }, [])

  return (
    <S.Container
      style={containerStyle}
      isErrored={!!errors[name]}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}
      <input
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={register({ required })}
        {...rest}
      />
      {error && <S.Error title={error.message} />}
    </S.Container>
  )
}

export default Input
