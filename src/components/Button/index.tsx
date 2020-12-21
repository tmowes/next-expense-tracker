import * as S from './_styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ loading, children, ...rest }) => (
  <S.Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </S.Container>
)

export default Button
