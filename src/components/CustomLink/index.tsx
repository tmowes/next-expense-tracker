import * as S from './_styles'
import { CustomLinkProps } from './types'

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  variant = 'default',
  label,
  icon: Icon,
  size = 20,
}) => {
  return (
    <S.Container href={href}>
      <S.Content variant={variant}>
        {Icon && <Icon size={size} />}
        <S.Label>{label}</S.Label>
      </S.Content>
    </S.Container>
  )
}

export default CustomLink
