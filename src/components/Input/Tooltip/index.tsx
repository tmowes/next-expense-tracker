import * as S from './_styles'
import { TooltipProps } from './types'

const Tooltip: React.FC<TooltipProps> = ({ title, children, className }) => {
  return (
    <S.Container className={className}>
      <S.ErrorIcon size={20} />
      {children}
      <span>{title}</span>
    </S.Container>
  )
}

export default Tooltip
